import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		// Specify the base directory for serving static files
		// In this example, the 'static' directory is allowed
		// Change 'static' to the name of your subdirectory
		base: './static',
	  },
});


