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
        'custom': '35% 65%',
        'custom-2': '20% 45% 35%',
      },
      backgroundImage: {
        "parallax": 'url("/ProductMainImage/parallax.webp")',
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

