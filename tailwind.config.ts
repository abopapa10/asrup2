import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFFF",
        "soft-sky": "#C9F7FF",
        "warm-cream": "#FFFBE5",
        "highlight-cream": "#FFF4DB",
        "ice-blue": "#BFEBF2",
        "neon-turquoise": "#42FFD6",
        slate: {
          charcoal: "#0F172A",
          body: "#1E293B",
        },
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        editorial:
          "0 4px 24px -4px rgba(15, 23, 42, 0.06), 0 1px 0 rgba(191, 235, 242, 0.5)",
        "editorial-hover":
          "0 20px 48px -12px rgba(15, 23, 42, 0.1), 0 1px 0 rgba(191, 235, 242, 0.8)",
        "whatsapp-glow":
          "0 0 0 1px rgba(66, 255, 214, 0.3), 0 8px 32px -4px rgba(66, 255, 214, 0.45)",
        "whatsapp-glow-hover":
          "0 0 0 1px rgba(66, 255, 214, 0.5), 0 12px 40px -2px rgba(66, 255, 214, 0.55)",
      },
      backgroundImage: {
        "hero-mesh": [
          "radial-gradient(ellipse 88% 42% at 0% 70%, #C9F7FF 0%, #E8FAFE 11%, #FFFFFF 20%)",
          "#FFFFFF",
        ].join(", "),
        "mesh-sky":
          "radial-gradient(ellipse 82% 38% at 0% 70%, #C9F7FF 0%, #E8FAFE 10%, #FFFFFF 18%), #FFFFFF",
        "mesh-blue":
          "radial-gradient(ellipse 82% 38% at 0% 70%, #BFEBF2 0%, #D8F4FA 10%, #FFFFFF 18%), #FFFFFF",
      },
      transitionTimingFunction: {
        gallery: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        editorial: "82rem",
      },
    },
  },
  plugins: [],
};

export default config;
