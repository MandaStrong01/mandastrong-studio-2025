import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // THIS LINE BELOW FIXES THE 404 ERROR
  base: '/mandastrong-studio-2025/', 
})
