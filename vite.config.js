import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '192.168.31.100', // This allows access from network
    port: 5173, // Default Vite port (or any port you prefer)
  },
})
