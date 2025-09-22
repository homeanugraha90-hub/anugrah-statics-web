// import { defineConfig } from 'vite'

// import react from '@vitejs/base/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   base: 'https://www.anugrahhomes.com/',
//   plugins: [ tailwindcss(),react()],
//   optimizeDeps: {
//     include: ["@studio-freight/lenis"], // force include Lenis
//   },
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
})
