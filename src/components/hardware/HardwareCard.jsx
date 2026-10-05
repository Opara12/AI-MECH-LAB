import {
  Cpu,
  ShieldCheck,
  Activity,
  Plus,
  Check,
  Radio,
  Layers,
  Thermometer,
  Gauge,
  Disc,
  Server,
  Wifi,
  Sparkles,
  Camera,
  BatteryCharging
} from "lucide-react";
export const HardwareCard = ({
  component,
  onAddToKit,
  isInKit = false
}) => {
  const getIcon = (name) => {
    switch (name) {
      case "Cpu":
        return <Cpu className="h-6 w-6 text-cyan-400" />;
      case "Wifi":
        return <Wifi className="h-6 w-6 text-emerald-400" />;
      case "Server":
        return <Server className="h-6 w-6 text-purple-400" />;
      case "Sparkles":
        return <Sparkles className="h-6 w-6 text-amber-400" />;
      case "Activity":
        return <Activity className="h-6 w-6 text-cyan-400" />;
      case "Radio":
        return <Radio className="h-6 w-6 text-teal-400" />;
      case "Gauge":
        return <Gauge className="h-6 w-6 text-orange-400" />;
      case "Disc":
        return <Disc className="h-6 w-6 text-blue-400" />;
      case "Thermometer":
        return <Thermometer className="h-6 w-6 text-rose-400" />;
      case "Layers":
        return <Layers className="h-6 w-6 text-slate-400" />;
      case "Camera":
        return <Camera className="h-6 w-6 text-indigo-400" />;
      case "BatteryCharging":
        return <BatteryCharging className="h-6 w-6 text-green-400" />;
      default:
        return <Cpu className="h-6 w-6 text-cyan-400" />;
    }
  };
  return <div className="group flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/60 p-5 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/30">
      <div>
        {
    /* Top Header */
  }
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-950 shadow-inner group-hover:scale-105 transition-transform">
            {getIcon(component.imageIcon)}
          </div>
          {component.verified && <div className="flex items-center gap-1 rounded-full border border-cyan-500/40 bg-cyan-950/60 px-2.5 py-1 text-[10px] font-mono font-semibold text-cyan-300">
              <ShieldCheck className="h-3 w-3 text-cyan-400" />
              <span>Verified Lab Spec</span>
            </div>}
        </div>

        {
    /* Title & Category */
  }
        <h4 className="mt-4 text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
          {component.name}
        </h4>
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mt-0.5">
          {component.category}
        </span>
        <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-2">
          {component.description}
        </p>

        {
    /* Technical Specs Grid */
  }
        <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/60 p-2.5 font-mono text-[10px]">
          <div>
            <span className="text-slate-500 block">Voltage:</span>
            <span className="font-semibold text-cyan-300 truncate block">
              {component.specs.operatingVoltage}
            </span>
          </div>
          <div>
            <span className="text-slate-500 block">Interface:</span>
            <span className="font-semibold text-emerald-300 truncate block">
              {component.specs.interfaceProtocol.split(",")[0]}
            </span>
          </div>
        </div>

        {
    /* Compatibility Tags */
  }
        <div className="mt-3 flex flex-wrap gap-1">
          {component.compatibilityTags.map((tag, i) => <span
    key={i}
    className="rounded-md bg-slate-800/80 px-2 py-0.5 font-mono text-[9px] text-slate-400 border border-slate-700/40"
  >
              {tag}
            </span>)}
        </div>
      </div>

      {
    /* Footer & Price */
  }
      <div className="mt-5 flex items-center justify-between border-t border-slate-800/80 pt-3.5">
        <div>
          <span className="text-[10px] text-slate-500 font-mono block">Estimated</span>
          <span className="font-mono text-base font-bold text-white">
            ${component.price.toFixed(2)}
          </span>
        </div>

        <button
    onClick={() => onAddToKit(component)}
    className={`flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold font-mono transition-all ${isInKit ? "bg-emerald-950 text-emerald-400 border border-emerald-800/60" : "bg-cyan-600 text-white hover:bg-cyan-500 shadow-md"}`}
  >
          {isInKit ? <>
              <Check className="h-3.5 w-3.5" />
              <span>In Kit</span>
            </> : <>
              <Plus className="h-3.5 w-3.5" />
              <span>Add to Kit</span>
            </>}
        </button>
      </div>
    </div>;
};
