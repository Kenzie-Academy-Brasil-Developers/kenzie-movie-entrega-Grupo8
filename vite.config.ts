// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host:'127.0.0.1'

//   }
// });

// import { defineConfig } from 'vite';
//  import react from '@vitejs/plugin-react';

//  export default defineConfig({
//    plugins: [react()],
//    server: {
//      host:'192.168.0.11'

//   }
//  });

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
}) 