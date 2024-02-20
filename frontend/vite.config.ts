import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
// import overrideEnv from './config/configReader';

export default defineConfig(async ({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());
	if (command === 'serve') {
		//await overrideEnv(env);
	}

	const target = env.BACKEND_URL || 'http://localhost:5657';
	const ws = env.VITE_ALLOW_WEBSOCKET === 'true';
	const secure = env.VITE_PROXY_SECURE === 'true';

	console.log('BACKEND_URL', target);

	return {
		plugins: [sveltekit()],
		server: {
			proxy: {
				'^/(api|images|test|(backend.log)|info|docs)/.*': {
					target,
					changeOrigin: true,
					ws,
					secure
				}
			},
			host: true,
			open: '/',
			port: 5656
		}
	};
});
