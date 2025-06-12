import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl'; // Import the plugin

export default defineConfig({
  plugins: [
    basicSsl(), // Add the plugin to your plugins array
    // ... other plugins
  ],
  server: {
    host: true, // This allows access from other devices on your network
    https: true, // Enable HTTPS server
  },
});
