import {
    FiHeadphones,
    FiSmartphone,
    FiWatch,
    FiCamera,
    FiCpu,
    FiSpeaker,
} from "react-icons/fi";

export const orbitProducts = [
    {
        id: 1,
        image: "/1.png",
        title: "OnePlus 15",
        description: "Hasselblad-tuned cameras, 100W SUPERVOOC charging that goes from 0 to 100% in 23 minutes, and OxygenOS 15 for the fastest Android experience.",
        subtitle: "Fast. Smooth. Powerful.",
        icon: FiSmartphone,
        active: true,
        angle: 0,
        price: "799",
        properties: [
            "Snapdragon 9 Gen 4",
            "5G Ready",
            "4K Video",
            "IP68",
        ],
        color: "#EF4444"
    },
    {
        id: 2,
        image: "/2.png",
        title: "AirPods Pro 3",
        description: "Pushing the boundaries of mobile intelligence with a 200MP camera, built-in S Pen, and AI features that transform how you create and communicate.",
        subtitle: "Spatial Audio",
        icon: FiHeadphones,
        active: false,
        angle: 45,
        price: "1199",
        properties: [
            "Snapdragon 9 Gen 3",
            "5G Ready",
            "4K Video",
            "IP68",
        ],
        color: "#8B5CF6"
    },
    {
        id: 3,
        image: "/3.png",
        title: "Smart Watch",
        description: "The iconic transparent design, now with Glyph Interface 4.0, a 50MP triple camera, and Nothing OS 4 — software that finally makes sense.",
        subtitle: "Always On",
        icon: FiWatch,
        active: false,
        angle: 90,
        price: "649",
        properties: [
            "Snapdragon 9 Gen 2",
            "5G Ready",
            "4K Video",
            "IP68",
        ],
        color: "#D4D4D4"
    },
    {
        id: 4,
        image: "/4.png",
        title: "4K Camera",
        description: "The smartest phone on Earth, powered by Google's Tensor G5 and seven years of AI-first software. See more, do more, understand more.",
        subtitle: "Ultra HD",
        icon: FiCamera,
        active: false,
        angle: 135,
        price: "999",
        properties: [
            "Tensor 5G",
            "5G Ready",
            "4K Video",
            "IP68",
        ],
        color: "#06B6D4"
    },
    {
        id: 5,
        image: "/5.png",
        title: "Smart Speaker",
        description: "Co-engineered with Leica, the Xiaomi 16 Ultra features a 1-inch sensor, 10x periscope telephoto, and HyperOS 3 for a seamless, blazing-fast experience.",
        subtitle: "Dolby Audio",
        icon: FiSpeaker,
        active: false,
        angle: 180,
        price: "899",
        properties: [
            "Snapdragon 9 Gen 4",
            "5G Ready",
            "4K Video",
            "IP68",
        ],
        color: "#F97316"
    },
    {
        id: 6,
        image: "/6.png",
        title: "Tensor G5",
        description: "The most advanced iPhone ever — with a revolutionary titanium chassis, A19 Pro chip, and a 5-lens camera system that redefines what a phone can capture.",
        subtitle: "AI Chip",
        icon: FiCpu,
        active: false,
        angle: 225,
        price: "1299",
        properties: [
            "A19 Pro Chip",
            "5G Ready",
            "4K Video",
            "IP68",
        ],
        color: "#3B82F6"
    },
];