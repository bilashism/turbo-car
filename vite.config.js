import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// for https certificate
import mkcert from "vite-plugin-mkcert";
// for localhost url
import dns from "dns";
dns.setDefaultResultOrder("verbatim");

export default defineConfig({
  plugins: [mkcert(), react(), require("daisyui")],
  server: {
    https: true,
    host: true,
    port: 3000
  }
});
