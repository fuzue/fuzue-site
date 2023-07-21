import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      fallback: 'index.html' // may differ from host to host
    }),
    paths: {
      base: '/fuzue-site',
    }
  },
  preprocess: vitePreprocess()
};
export default config;