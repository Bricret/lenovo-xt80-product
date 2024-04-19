import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem', // Ajusta este valor según tus necesidades
    },
    extend: {
      gridTemplateColumns: {
        'custom': '25% 75%',
        'custom-2': '20% 40% 40%',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        "animation": {
          shimmer: "shimmer 2s linear infinite"
        },
        "keyframes": {
          shimmer: {
            from: {
              "backgroundPosition": "0 0"
            },
            to: {
              "backgroundPosition": "-200% 0"
            }
          }
        }
    },
    
  },
  
  plugins: [],
};
export default config;

