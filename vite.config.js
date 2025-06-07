import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/

const viteConfig=defineConfig(()=>{
  return{
    plugins: [react()],
    base:'./'
  }
})


export default viteConfig;