export const allHardwareComponents = [
  {
    id: "comp-arduino-uno",
    name: "Arduino Uno Rev3 (ATmega328P)",
    category: "Arduino",
    imageIcon: "Cpu",
    price: 24.5,
    inStock: true,
    verified: true,
    compatibilityTags: ["5V Logic", "UART", "I2C", "SPI", "Beginner Friendly"],
    specs: {
      operatingVoltage: "5V (7-12V Input)",
      interfaceProtocol: "UART, I2C, SPI",
      powerConsumption: "45mA @ 5V",
      sampleRate: "16 MHz Clock",
      notes: "Standard 5V logic. Excellent for fundamental mechatronics and motor control."
    },
    description: "The industry-standard development board for prototyping physical computing, robotics actuators, and sensor interfacing.",
    recommendedFor: ["Obstacle Avoiding Robot", "Basic Motor Drivers", "Sensor Logging"]
  },
  {
    id: "comp-esp32-wroom",
    name: "ESP32-WROOM-32D Dual-Core MCU",
    category: "ESP32",
    imageIcon: "Wifi",
    price: 8.9,
    inStock: true,
    verified: true,
    compatibilityTags: ["3.3V Logic", "WiFi", "BLE", "Dual Core", "I2C", "SPI"],
    specs: {
      operatingVoltage: "3.3V",
      interfaceProtocol: "WiFi 802.11 b/g/n, BLE 4.2, I2C, SPI, DAC, ADC",
      powerConsumption: "80-240mA (Active)",
      sampleRate: "240 MHz Dual-Core",
      notes: "3.3V logic level! Level shifter required when interfacing directly with 5V sensors."
    },
    description: "High-speed dual-core microcontroller with built-in Wi-Fi and Bluetooth, ideal for IoT predictive maintenance streaming and edge telemetry.",
    recommendedFor: ["Predictive Maintenance Sensor Hub", "Wireless Robot Control", "Cloud Telemetry"]
  },
  {
    id: "comp-rpi5-8gb",
    name: "Raspberry Pi 5 (8GB RAM)",
    category: "Raspberry Pi",
    imageIcon: "Server",
    price: 80,
    inStock: true,
    verified: true,
    compatibilityTags: ["3.3V GPIO", "Linux OS", "PCIe", "Edge Computing", "Dual 4K"],
    specs: {
      operatingVoltage: "5V @ 5A (USB-C PD)",
      interfaceProtocol: "Gigabit Ethernet, USB 3.0, PCIe 2.0, CSI/DSI, I2C, SPI",
      powerConsumption: "5W - 12W",
      sampleRate: "Quad-Core Cortex-A76 @ 2.4GHz",
      notes: "Runs full Linux. Perfect for hosting Python ML models and Scikit-Learn pipelines on the edge."
    },
    description: "High-performance single-board computer capable of running real-time Python analytics, computer vision pipelines, and ROS2 nodes.",
    recommendedFor: ["Optical Defect Inspector", "Edge Scikit-Learn Server", "Fleet Telemetry Gateway"]
  },
  {
    id: "comp-jetson-orin",
    name: "NVIDIA Jetson Orin Nano (8GB)",
    category: "AI hardware",
    imageIcon: "Sparkles",
    price: 249,
    inStock: true,
    verified: true,
    compatibilityTags: ["NVIDIA TensorRT", "40 TOPS AI", "CUDA", "Deep Learning"],
    specs: {
      operatingVoltage: "9V - 20V DC",
      interfaceProtocol: "PCIe, Gigabit Ethernet, USB 3.2, MIPI CSI-2",
      powerConsumption: "7W - 15W",
      sampleRate: "Ampere GPU (1024 CUDA Cores, 32 Tensor Cores)",
      notes: "Delivers 40 TOPS of AI inference for real-time deep learning computer vision on autonomous robots."
    },
    description: "Dedicated embedded AI powerhouse for running transformer models, YOLO vision defect detection, and autonomous navigation.",
    recommendedFor: ["Autonomous Rover Vision", "Industrial Defect Inspection", "Edge Deep Learning"]
  },
  {
    id: "comp-mpu6050",
    name: "MPU-6050 6-DoF Accelerometer & Gyro",
    category: "Sensors",
    imageIcon: "Activity",
    price: 4.5,
    inStock: true,
    verified: true,
    compatibilityTags: ["3.3V / 5V Compatible", "I2C Interface", "Vibration Telemetry"],
    specs: {
      operatingVoltage: "3.0V - 5.0V (Onboard LDO)",
      interfaceProtocol: "I2C (Address 0x68 / 0x69)",
      powerConsumption: "3.9mA",
      sampleRate: "Up to 1000 Hz Gyro / 8000 Hz Accel",
      notes: "Built-in Digital Motion Processor (DMP). Standard sensor for vibration analysis in predictive maintenance."
    },
    description: "Measures 3-axis acceleration and angular rate. Essential for detecting motor vibration harmonics, bearing imbalance, and robot tilt.",
    recommendedFor: ["Predictive Maintenance Hub", "Motor Vibration Monitor", "Self-Balancing Robot"]
  },
  {
    id: "comp-hcsr04",
    name: "HC-SR04 Ultrasonic Distance Sensor",
    category: "Sensors",
    imageIcon: "Radio",
    price: 3.2,
    inStock: true,
    verified: true,
    compatibilityTags: ["5V Logic", "Digital Pulse", "Obstacle Avoidance"],
    specs: {
      operatingVoltage: "5V DC",
      interfaceProtocol: "Trigger & Echo (Digital GPIO)",
      powerConsumption: "15mA",
      sampleRate: "40 kHz Ultrasound (2cm to 400cm range)",
      notes: "Echo pin outputs 5V! When connecting to 3.3V ESP32/Raspberry Pi, use a 1k/2k resistor voltage divider."
    },
    description: "Non-contact sonar ranging module providing 2cm to 400cm obstacle distance measurements with 3mm precision.",
    recommendedFor: ["Obstacle Avoiding Robot", "Level Sensing", "Collision Warning"]
  },
  {
    id: "comp-l298n",
    name: "L298N Dual H-Bridge Motor Driver",
    category: "Motors",
    imageIcon: "Gauge",
    price: 6.8,
    inStock: true,
    verified: true,
    compatibilityTags: ["5V Logic", "Up to 35V Motor Power", "Dual DC / Stepper"],
    specs: {
      operatingVoltage: "Logic 5V, Motor 5V - 35V",
      interfaceProtocol: "PWM Speed Control, Direction Pins",
      powerConsumption: "Up to 2A peak per bridge",
      sampleRate: "Dual full-bridge driver",
      notes: "Bipolar design with significant thermal drop (~1.5V). Mount heatsink when driving motors > 1A."
    },
    description: "High-power dual H-bridge driver capable of controlling speed and direction for two DC motors or one bipolar stepper motor.",
    recommendedFor: ["Obstacle Avoiding Robot", "Conveyor Drive", "Pan-Tilt Gimbal"]
  },
  {
    id: "comp-dc-motors",
    name: "Twin TT DC Gearmotors with Wheels (1:48)",
    category: "Motors",
    imageIcon: "Disc",
    price: 7.5,
    inStock: true,
    verified: true,
    compatibilityTags: ["3V - 6V DC", "High Torque", "Robotics Chassis"],
    specs: {
      operatingVoltage: "3V - 6V DC",
      interfaceProtocol: "2-Wire DC Brushed",
      powerConsumption: "150mA no-load, 800mA stall @ 6V",
      sampleRate: "200 RPM @ 6V, 0.8 kg-cm torque",
      notes: "Includes 65mm rubber tires with silicone grip tread."
    },
    description: "Pair of durable 1:48 reduction ratio DC gearmotors with rubber drive wheels, ideal for wheeled mobile robot chassis.",
    recommendedFor: ["Obstacle Avoiding Robot", "Autonomous Rover"]
  },
  {
    id: "comp-ds18b20",
    name: "DS18B20 Waterproof Temperature Probe",
    category: "Sensors",
    imageIcon: "Thermometer",
    price: 5.2,
    inStock: true,
    verified: true,
    compatibilityTags: ["3.0V - 5.5V", "1-Wire Digital", "Waterproof Probe"],
    specs: {
      operatingVoltage: "3.0V - 5.5V",
      interfaceProtocol: "Dallas 1-Wire Digital Interface",
      powerConsumption: "1mA (Active conversion)",
      sampleRate: "-55\xB0C to +125\xB0C range (+/-0.5\xB0C accuracy)",
      notes: "Requires a 4.7k ohm pull-up resistor between VCC and Data line."
    },
    description: "Stainless steel sealed digital temperature probe for monitoring electric motor stator heat, hydraulic fluids, and thermal dissipation.",
    recommendedFor: ["Predictive Maintenance Hub", "Motor Temperature Capstone", "Thermal Solder Profiler"]
  },
  {
    id: "comp-breadboard-kit",
    name: "Solderless Breadboard & 65x Jumper Wire Kit",
    category: "Breadboards",
    imageIcon: "Layers",
    price: 6,
    inStock: true,
    verified: true,
    compatibilityTags: ["Universal Prototyping", 'Standard 0.1" Pitch'],
    specs: {
      operatingVoltage: "Up to 30V DC",
      interfaceProtocol: "830 Tie Points with Dual Power Rails",
      powerConsumption: "Passive interconnect",
      sampleRate: "N/A",
      notes: "Includes male-to-male flexible stranded copper jumper cables."
    },
    description: "Full-size 830-point solderless prototyping breadboard with colored jumper wire bundle for clean, solder-free circuit testing.",
    recommendedFor: ["All Lab Projects", "Circuit Prototyping"]
  },
  {
    id: "comp-ov5642-cam",
    name: "OV5642 5MP Camera Module (MIPI / SPI)",
    category: "AI hardware",
    imageIcon: "Camera",
    price: 21,
    inStock: true,
    verified: true,
    compatibilityTags: ["3.3V Logic", "MIPI CSI-2", "Raspberry Pi / Jetson Compatible"],
    specs: {
      operatingVoltage: "3.3V",
      interfaceProtocol: "MIPI CSI-2 or High-Speed SPI",
      powerConsumption: "140mW active",
      sampleRate: "1080p @ 30fps / 720p @ 60fps",
      notes: "Equipped with adjustable focus lens and infrared cut filter."
    },
    description: "5-megapixel optical inspection camera module for capturing high-definition mechanical parts and assembly line video feeds.",
    recommendedFor: ["Optical Defect Inspector", "Chassis Quality Vision"]
  },
  {
    id: "comp-battery-pack",
    name: "7.4V 2200mAh 2S LiPo Battery with Charger",
    category: "Robotics kits",
    imageIcon: "BatteryCharging",
    price: 19.5,
    inStock: true,
    verified: true,
    compatibilityTags: ["High Current", "2S Balance Plug", "XT60 / T-Plug"],
    specs: {
      operatingVoltage: "7.4V Nominal (8.4V Peak)",
      interfaceProtocol: "XT60 Main Lead + JST-XH Balance Tap",
      powerConsumption: "2200mAh capacity (25C discharge rate)",
      sampleRate: "N/A",
      notes: "Provides ample clean peak current for DC motor surges without resetting microcontroller logic."
    },
    description: "High-discharge lithium-polymer battery pack supplying steady current for dual motors, microcontrollers, and wireless modules.",
    recommendedFor: ["Obstacle Avoiding Robot", "Autonomous Mobile Rover"]
  }
];
export const projectKitRecipes = [
  {
    id: "kit-obstacle-robot",
    title: "Obstacle Avoiding Mobile Robot Kit",
    description: "Complete verified hardware bundle to build an autonomous obstacle-avoiding mobile platform with differential steering.",
    targetProject: "Autonomous Obstacle-Avoiding Rover",
    difficulty: "Beginner",
    totalEstimatedPrice: 53.7,
    requiredComponents: [
      { componentId: "comp-arduino-uno", quantity: 1, role: "Main Central Controller" },
      { componentId: "comp-hcsr04", quantity: 1, role: "Front Distance Sonar Sensor" },
      { componentId: "comp-l298n", quantity: 1, role: "Dual Motor H-Bridge Driver" },
      { componentId: "comp-dc-motors", quantity: 1, role: "Wheeled Drive Actuators" },
      { componentId: "comp-breadboard-kit", quantity: 1, role: "Circuit Interconnect Wiring" },
      { componentId: "comp-battery-pack", quantity: 1, role: "7.4V Portable Power Source" }
    ]
  },
  {
    id: "kit-predictive-hub",
    title: "Predictive Maintenance Telemetry Hub Kit",
    description: "Wireless multi-sensor vibration and thermal monitoring station for logging real industrial motor health feeds.",
    targetProject: "Industrial Motor Fleet Health Predictor",
    difficulty: "Intermediate",
    totalEstimatedPrice: 24.6,
    requiredComponents: [
      { componentId: "comp-esp32-wroom", quantity: 1, role: "Dual-Core Wireless Telemetry MCU" },
      { componentId: "comp-mpu6050", quantity: 1, role: "Tri-Axial High-Speed Vibration Sensor" },
      { componentId: "comp-ds18b20", quantity: 1, role: "Motor Case Temperature Probe" },
      { componentId: "comp-breadboard-kit", quantity: 1, role: "Telemetry Breadboard Interface" }
    ]
  },
  {
    id: "kit-edge-vision",
    title: "Edge AI Assembly Line Quality Inspector Kit",
    description: "Linux-powered computer vision inspection rig with 5MP camera for real-time surface defect classification.",
    targetProject: "Computer Vision Optical Defect Inspector",
    difficulty: "Advanced",
    totalEstimatedPrice: 101,
    requiredComponents: [
      { componentId: "comp-rpi5-8gb", quantity: 1, role: "Single-Board Edge Inference Host" },
      { componentId: "comp-ov5642-cam", quantity: 1, role: "High-Res Optical Inspection Camera" },
      { componentId: "comp-breadboard-kit", quantity: 1, role: "Status Indicator LEDs & Trigger Wiring" }
    ]
  }
];
