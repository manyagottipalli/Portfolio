import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: process.env.PORT || 3000, // Use Render's port or default to 3000
    host: '0.0.0.0', // Ensure it binds to all IPs
    allowedHosts: ['portfolio-1-n1j0.onrender.com'],
  }
});
