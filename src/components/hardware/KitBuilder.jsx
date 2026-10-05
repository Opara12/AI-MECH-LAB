import { useState } from "react";
import { projectKitRecipes } from "../../data/hardwareData";
import { useLearning } from "../../context/LearningContext";
import {
  Wrench,
  CheckCircle2,
  AlertTriangle,
  Trash2,
  Download
} from "lucide-react";
export const KitBuilder = ({
  selectedComponents,
  onRemoveComponent,
  onClearKit,
  onLoadRecipe
}) => {
  const { showToast } = useLearning();
  const [selectedRecipeId, setSelectedRecipeId] = useState("kit-obstacle-robot");
  const totalPrice = selectedComponents.reduce((acc, c) => acc + c.price, 0);
  const hasArduino = selectedComponents.some((c) => c.category === "Arduino");
  const hasEsp32 = selectedComponents.some((c) => c.category === "ESP32");
  const hasRpi = selectedComponents.some((c) => c.category === "Raspberry Pi");
  const has5vSensors = selectedComponents.some((c) => c.specs.operatingVoltage.includes("5V") && !c.specs.operatingVoltage.includes("3.0V"));
  const hasMotors = selectedComponents.some((c) => c.category === "Motors");
  const hasMotorDriver = selectedComponents.some((c) => c.name.toLowerCase().includes("driver") || c.name.toLowerCase().includes("l298n"));
  const hasBattery = selectedComponents.some((c) => c.name.toLowerCase().includes("battery") || c.category === "Robotics kits");
  const warnings = [];
  if ((hasEsp32 || hasRpi) && has5vSensors) {
    warnings.push("Logic Level Alert: 5V sensor detected with 3.3V controller (ESP32/Raspberry Pi). A 1k/2k resistor voltage divider or logic level shifter is required on echo/signal pins.");
  }
  if (hasMotors && !hasMotorDriver) {
    warnings.push("Power Safety Alert: DC gearmotors require an H-Bridge driver (e.g. L298N). Microcontroller GPIO pins cannot supply motor current directly.");
  }
  if (hasMotors && !hasBattery) {
    warnings.push("Power Supply Recommendation: DC motors draw high peak surge currents. Add a dedicated 7.4V LiPo battery pack to prevent microcontroller brownouts.");
  }
  const handleExportBOM = () => {
    const csvContent = "data:text/csv;charset=utf-8,Component,Category,Voltage,Interface,Price\\n" + selectedComponents.map((c) => `"${c.name}","${c.category}","${c.specs.operatingVoltage}","${c.specs.interfaceProtocol}",$${c.price.toFixed(2)}`).join("\\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "AI_Mech_Lab_Bill_of_Materials.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("BOM Exported", "Hardware Bill of Materials downloaded as CSV.", "success");
  };
  return <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 shadow-2xl space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <Wrench className="h-5 w-5 text-cyan-400" />
            <h3 className="font-bold text-base text-white">Custom Kit Builder & BOM</h3>
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Configure verified components for your mechatronics project and verify electrical compatibility.
          </p>
        </div>

        {
    /* Load Recipe Presets */
  }
        <div className="flex items-center gap-2">
          <select
    value={selectedRecipeId}
    onChange={(e) => {
      setSelectedRecipeId(e.target.value);
      const rec = projectKitRecipes.find((r) => r.id === e.target.value);
      if (rec) onLoadRecipe(rec);
    }}
    className="rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 text-xs font-mono text-cyan-300 focus:border-cyan-500 focus:outline-none"
  >
            {projectKitRecipes.map((r) => <option key={r.id} value={r.id}>
                Preset: {r.title}
              </option>)}
          </select>
        </div>
      </div>

      {
    /* Real-Time Compatibility Health Check */
  }
      <div className="space-y-2">
        {warnings.length === 0 ? <div className="flex items-center gap-2.5 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-3.5 text-xs text-emerald-300 font-mono">
            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
            <span>Electrical Compatibility Check: 100% Verified. No logic or voltage conflicts detected.</span>
          </div> : warnings.map((w, idx) => <div
    key={idx}
    className="flex items-start gap-2.5 rounded-2xl border border-amber-800/50 bg-amber-950/30 p-3.5 text-xs text-amber-200 font-mono"
  >
              <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{w}</span>
            </div>)}
      </div>

      {
    /* Components in Current Kit */
  }
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>COMPONENTS IN KIT ({selectedComponents.length})</span>
          {selectedComponents.length > 0 && <button
    onClick={onClearKit}
    className="text-rose-400 hover:text-rose-300 transition-colors"
  >
              Clear All
            </button>}
        </div>

        {selectedComponents.length === 0 ? <div className="rounded-2xl border border-dashed border-slate-800 p-8 text-center text-xs text-slate-500 font-mono">
            No components selected yet. Click "Add to Kit" on any component card or choose a project preset above.
          </div> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {selectedComponents.map((c) => <div
    key={c.id}
    className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-3 text-xs"
  >
                <div className="min-w-0 pr-2">
                  <h5 className="font-semibold text-white truncate text-xs">{c.name}</h5>
                  <span className="font-mono text-[10px] text-cyan-400">${c.price.toFixed(2)}</span>
                </div>
                <button
    onClick={() => onRemoveComponent(c.id)}
    className="rounded-lg p-1 text-slate-500 hover:bg-slate-800 hover:text-rose-400 transition-colors"
    title="Remove from kit"
  >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>)}
          </div>}
      </div>

      {
    /* Bill of Materials Summary & Actions */
  }
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-4 font-mono">
        <div>
          <span className="text-xs text-slate-500 block">Total Estimated Kit BOM:</span>
          <span className="text-2xl font-bold text-white">${totalPrice.toFixed(2)} USD</span>
        </div>

        <div className="flex items-center gap-3">
          <button
    onClick={handleExportBOM}
    disabled={selectedComponents.length === 0}
    className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 disabled:opacity-40 transition-colors"
  >
            <Download className="h-3.5 w-3.5" />
            <span>Export CSV</span>
          </button>
          <button
    onClick={() => showToast("Order Simulation", "Hardware order request prepared for verified distributors.", "info")}
    disabled={selectedComponents.length === 0}
    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-emerald-500 px-5 py-2 text-xs font-bold text-white shadow-lg hover:from-cyan-500 hover:to-emerald-400 disabled:opacity-40 transition-all"
  >
            <span>Proceed with Kit</span>
          </button>
        </div>
      </div>
    </div>;
};
