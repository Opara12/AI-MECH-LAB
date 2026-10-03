export type HardwareCategory =
  | 'All'
  | 'Arduino'
  | 'ESP32'
  | 'Raspberry Pi'
  | 'Sensors'
  | 'Motors'
  | 'Breadboards'
  | 'Robotics kits'
  | 'AI hardware';

export interface HardwareSpecs {
  operatingVoltage: string;
  interfaceProtocol: string;
  powerConsumption: string;
  sampleRate?: string;
  notes?: string;
}

export interface HardwareComponent {
  id: string;
  name: string;
  category: HardwareCategory;
  imageIcon: string;
  price: number;
  inStock: boolean;
  verified: boolean; // "AI Mech Lab Verified"
  compatibilityTags: string[];
  specs: HardwareSpecs;
  description: string;
  recommendedFor: string[];
}

export interface KitRequirement {
  componentId: string;
  quantity: number;
  role: string;
}

export interface ProjectKitRecipe {
  id: string;
  title: string;
  description: string;
  targetProject: string;
  difficulty: string;
  requiredComponents: KitRequirement[];
  totalEstimatedPrice: number;
}
