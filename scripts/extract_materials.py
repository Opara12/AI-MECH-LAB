import os
import glob
import zlib
import re

def parse_reportlab_pdf(pdf_path):
    with open(pdf_path, "rb") as f:
        data = f.read()

    pos = 0
    text_pieces = []
    while True:
        s_idx = data.find(b"stream", pos)
        if s_idx == -1:
            break
        start = s_idx + 6
        if data[start:start+2] == b"\r\n":
            start += 2
        elif data[start:start+1] in (b"\n", b"\r"):
            start += 1
            
        e_idx = data.find(b"endstream", start)
        if e_idx == -1:
            break
        stream_data = data[start:e_idx]
        pos = e_idx + 9
        
        decomp = None
        try:
            decomp = zlib.decompress(stream_data)
        except Exception:
            try:
                decomp = zlib.decompress(stream_data, -15)
            except Exception:
                decomp = stream_data
                
        if b"Tj" in decomp or b"TJ" in decomp or b"'" in decomp:
            # Pattern for literal strings ( ... ) Tj
            for m in re.finditer(rb"\(((?:[^()\\]|\\.)*)\)\s*T[jJ]", decomp):
                try:
                    s = m.group(1).decode("latin1")
                    s = s.replace(r"\(", "(").replace(r"\)", ")").replace(r"\\", "\\")
                    text_pieces.append(s)
                except Exception:
                    pass
            # Pattern for TJ arrays
            for arr in re.finditer(rb"\[(.*?)\]\s*TJ", decomp):
                for m in re.finditer(rb"\(((?:[^()\\]|\\.)*)\)", arr.group(1)):
                    try:
                        s = m.group(1).decode("latin1")
                        s = s.replace(r"\(", "(").replace(r"\)", ")").replace(r"\\", "\\")
                        text_pieces.append(s)
                    except Exception:
                        pass

    return "\n".join(text_pieces)

os.makedirs("extracted_texts", exist_ok=True)
pdf_files = sorted(glob.glob("course_source_materials/AI/Beginner /*.pdf"))
for pdf in pdf_files:
    fname = os.path.basename(pdf)
    txt = parse_reportlab_pdf(pdf)
    out_name = os.path.join("extracted_texts", fname.replace(".pdf", ".txt"))
    with open(out_name, "w", encoding="utf-8") as out_f:
        out_f.write(txt)
    print(f"Extracted {fname} -> {len(txt)} chars, {len(txt.splitlines())} lines")
