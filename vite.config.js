import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/

const viteConfig=defineConfig(()=>{
  return{
    plugins: [react()],
    base:'./',
    extensions: ['.js','.mjs','.jsx','.css']
  }
})


export default viteConfig;