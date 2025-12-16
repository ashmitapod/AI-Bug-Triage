export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}", // ← this is the key
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B5ED7",
        bg: "#F2F4F7",
        card: "#FFFFFF",
        border: "#E5E7EB",
        muted: "#6B7280",
        text: "#0F172A",
      },
      borderRadius: {
        lg: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
