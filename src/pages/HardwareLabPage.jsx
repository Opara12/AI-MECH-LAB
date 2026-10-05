import { useState } from "react";
import { useLearning } from "../context/LearningContext";
import { allHardwareComponents } from "../data/hardwareData";
import { HardwareCard } from "../components/hardware/HardwareCard";
import { KitBuilder } from "../components/hardware/KitBuilder";
import {
  Search
} from "lucide-react";
export const HardwareLabPage = () => {
  const { showToast } = useLearning();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hardwareSearch, setHardwareSearch] = useState("");
  const [kitComponents, setKitComponents] = useState([
    allHardwareComponents.find((c) => c.id === "comp-arduino-uno"),
    allHardwareComponents.find((c) => c.id === "comp-hcsr04"),
    allHardwareComponents.find((c) => c.id === "comp-l298n"),
    allHardwareComponents.find((c) => c.id === "comp-dc-motors"),
    allHardwareComponents.find((c) => c.id === "comp-battery-pack")
  ]);
  const categories = [
    "All",
    "Arduino",
    "ESP32",
    "Raspberry Pi",
    "Sensors",
    "Motors",
    "Breadboards",
    "Robotics kits",
    "AI hardware"
  ];
  const filteredComponents = allHardwareComponents.filter((comp) => {
    const matchesCat = selectedCategory === "All" || comp.category === selectedCategory;
    const matchesSearch = comp.name.toLowerCase().includes(hardwareSearch.toLowerCase()) || comp.description.toLowerCase().includes(hardwareSearch.toLowerCase()) || comp.compatibilityTags.some((t) => t.toLowerCase().includes(hardwareSearch.toLowerCase()));
    return matchesCat && matchesSearch;
  });
  const handleToggleKitComponent = (comp) => {
    if (kitComponents.some((c) => c.id === comp.id)) {
      setKitComponents((prev) => prev.filter((c) => c.id !== comp.id));
      showToast("Removed from Kit", `Removed ${comp.name} from active BOM.`, "info");
    } else {
      setKitComponents((prev) => [...prev, comp]);
      showToast("Added to Kit", `Added ${comp.name} to active BOM.`, "success");
    }
  };
  const handleRemoveComponent = (id) => {
    setKitComponents((prev) => prev.filter((c) => c.id !== id));
  };
  const handleClearKit = () => {
    setKitComponents([]);
  };
  const handleLoadRecipe = (recipe) => {
    const loaded = recipe.requiredComponents.map((req) => allHardwareComponents.find((c) => c.id === req.componentId)).filter((c) => c !== void 0);
    setKitComponents(loaded);
    showToast("Recipe Loaded", `Loaded BOM recipe for ${recipe.title}.`, "success");
  };
  return <div className="space-y-8 animate-in fade-in duration-300">
      {
    /* Header */
  }
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-cyan-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-cyan-400 border border-cyan-800/40">
              PHYSICAL MECHATRONICS
            </span>
            <span className="rounded-full bg-emerald-950 px-2.5 py-0.5 font-mono text-[10px] font-bold text-emerald-400 border border-emerald-800/40">
              Verified Hardware
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
            Hardware Lab & BOM Builder
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Browse verified microcontrollers, sensors, and actuators with automated logic-level and electrical compatibility validation.
          </p>
        </div>
      </div>

      {
    /* Kit Builder & Compatibility Checker Section */
  }
      <KitBuilder
    selectedComponents={kitComponents}
    onRemoveComponent={handleRemoveComponent}
    onClearKit={handleClearKit}
    onLoadRecipe={handleLoadRecipe}
  />

      {
    /* Verified Hardware Catalog Section */
  }
      <div className="space-y-5 pt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Verified Hardware Catalog</h3>
            <p className="text-xs text-slate-400">
              Components thoroughly tested and bench-verified for AI Mech Lab projects.
            </p>
          </div>

          {
    /* Search Box */
  }
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
    type="text"
    value={hardwareSearch}
    onChange={(e) => setHardwareSearch(e.target.value)}
    placeholder="Search components..."
    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 py-2 pl-9 pr-3 text-xs text-slate-200 placeholder-slate-500 focus:border-cyan-500 focus:outline-none font-mono"
  />
          </div>
        </div>

        {
    /* Category Pills */
  }
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => <button
    key={cat}
    onClick={() => setSelectedCategory(cat)}
    className={`rounded-xl px-3.5 py-1.5 text-xs font-mono shrink-0 transition-colors ${selectedCategory === cat ? "bg-cyan-600 text-white font-bold shadow-md" : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"}`}
  >
              {cat}
            </button>)}
        </div>

        {
    /* Components Grid */
  }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredComponents.map((comp) => <HardwareCard
    key={comp.id}
    component={comp}
    onAddToKit={handleToggleKitComponent}
    isInKit={kitComponents.some((c) => c.id === comp.id)}
  />)}
        </div>
      </div>
    </div>;
};
