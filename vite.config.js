import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'


// https://vite.dev/config/
console.log(path.resolve(__dirname))
const viteConfig=defineConfig(()=>{
  return{
    plugins: [react()],
    base:'./',
    extensions: ['.js','.mjs','.jsx','.css'],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'assets/[name].js',
          chunkFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
          }
      },
      input: 'src/index.html'
      
    }
  }
}
})


export default viteConfig;