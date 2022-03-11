module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A85FF",
        secondary: "#CABDFF",
        black: "#000000",
        neutral: {
          100: "#FCFCFC",
          200: "#F4F4F4",
          300: "#EFEFEF",
          400: "#6F767E",
          600: "#272B30",
          700: "#1A1D1F",
        },
        gray: {
          200: "#4F4F4F",
        },
        card: {
          1: "rgba(181, 228, 202, 0.25)",
          2: "rgba(177, 229, 252, 0.25)",
          3: "rgba(202, 189, 255, 0.25)",
        },
      },
      spacing: {
        95: "23.438rem",
      },
      lineHeight: {
        12: "3rem",
      },
      fontSize: {
        tiny: ".938rem",
      },
      letterSpacing: {
        tightest: "-.01em",
        tighter: "-.03em",
      },
      borderRadius: {
        "4xl": "48px",
      },
      boxShadow: {
        nav: "inset 0px -2px 1px rgba(0, 0, 0, 0.05), inset 0px 1px 1px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
