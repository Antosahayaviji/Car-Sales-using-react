// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%, 49%": { opacity: 1 },
          "50%, 100%": { opacity: 0.5 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        bounceText: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pan: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        blink: "blink 1s linear infinite",
        marquee: "marquee 25s linear infinite",
        bounceText: "bounceText 1s infinite",
        pan: "pan 60s linear infinite", // ✅ Slow and smooth
      },
      fontFamily: {
        cursive: ["cursive"],
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
}
