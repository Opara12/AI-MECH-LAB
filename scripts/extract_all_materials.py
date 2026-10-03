import os
import glob
import re
import base64
import zlib

def decode_pdf_stream(stream_bytes, filter_spec):
    data = stream_bytes
    # Filters can be [ /ASCII85Decode /FlateDecode ] or /FlateDecode, etc.
    filters = []
    if b"/ASCII85Decode" in filter_spec:
        filters.append("ascii85")
    if b"/FlateDecode" in filter_spec:
        filters.append("flate")
    
    # In PDF, filters are listed in the order they were applied when encoding,
    # so we decode in reverse order or as specified.
    # Usually ASCII85 is outermost (applied last to make flate ascii-safe), so decode ascii85 first!
    if "ascii85" in filters:
        try:
            # ensure delimiter if needed
            clean = data.strip()
            if not clean.endswith(b"~>"):
                clean = clean + b"~>"
            if not clean.startswith(b"<~"):
                clean = b"<~" + clean
            data = base64.a85decode(clean, adobe=True)
        except Exception as e:
            # fallback without adobe or ignore error
            pass
            
    if "flate" in filters or not filters:
        try:
            data = zlib.decompress(data)
        except Exception:
            try:
                data = zlib.decompress(data, -15)
            except Exception:
                pass
                
    return data

def extract_text_from_pdf(pdf_path):
    with open(pdf_path, "rb") as f:
        content = f.read()

    # Find all objects
    objs = re.findall(rb"(\d+ \d+ obj.*?endobj)", content, re.DOTALL)
    
    # Find page objects or content streams
    text_blocks = []
    for obj in objs:
        if b"/Subtype /Image" in obj or b"/DCTDecode" in obj:
            continue
        if b"stream" not in obj:
            continue
            
        # extract filter spec from dict
        dict_part = obj[:obj.find(b"stream")]
        s_idx = obj.find(b"stream")
        start = s_idx + 6
        if obj[start:start+2] == b"\r\n":
            start += 2
        elif obj[start:start+1] in (b"\n", b"\r"):
            start += 1
        e_idx = obj.find(b"endstream", start)
        if e_idx == -1:
            continue
        stream_bytes = obj[start:e_idx]
        
        decomp = decode_pdf_stream(stream_bytes, dict_part)
        
        # Now extract text operators
        # In ReportLab, text is output via (string) Tj or [(string)...] TJ
        # We also want to preserve line breaks when T* or Td is called
        lines = []
        # split by text blocks or iterate
        # Regex to find (text) Tj and octal escapes like \227 (em-dash), etc.
        def clean_pdf_string(s):
            # octal escapes \ddd
            def octal_replace(match):
                code = int(match.group(1), 8)
                return bytes([code]).decode('latin1', errors='replace')
            s = re.sub(r'\\([0-7]{3})', octal_replace, s)
            s = s.replace(r"\(", "(").replace(r"\)", ")").replace(r"\\", "\\").replace(r"\r", " ").replace(r"\n", " ")
            return s

        for m in re.finditer(rb"\(((?:[^()\\]|\\.)*)\)\s*T[jJ\x27\x22]", decomp):
            try:
                raw_str = m.group(1).decode("latin1", errors="replace")
                cleaned = clean_pdf_string(raw_str)
                if cleaned.strip():
                    lines.append(cleaned.strip())
            except Exception:
                pass
                
        for arr in re.finditer(rb"\[(.*?)\]\s*TJ", decomp):
            arr_content = arr.group(1)
            parts = []
            for m in re.finditer(rb"\(((?:[^()\\]|\\.)*)\)", arr_content):
                try:
                    raw_str = m.group(1).decode("latin1", errors="replace")
                    cleaned = clean_pdf_string(raw_str)
                    parts.append(cleaned)
                except Exception:
                    pass
            combined = "".join(parts).strip()
            if combined:
                lines.append(combined)

        if lines:
            text_blocks.append("\n".join(lines))

    return "\n\n--- PAGE BREAK ---\n\n".join(text_blocks)

def main():
    os.makedirs("extracted_texts", exist_ok=True)
    pdf_files = sorted(glob.glob("course_source_materials/AI/Beginner /*.pdf"))
    for pdf in pdf_files:
        fname = os.path.basename(pdf)
        txt = extract_text_from_pdf(pdf)
        out_name = os.path.join("extracted_texts", fname.replace(".pdf", ".txt"))
        with open(out_name, "w", encoding="utf-8") as out_f:
            out_f.write(txt)
        print(f"Extracted {fname} -> {len(txt)} chars, {len(txt.splitlines())} lines")

if __name__ == "__main__":
    main()
