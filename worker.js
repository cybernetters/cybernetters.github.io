import register from './api/register.js';
import login from './api/login.js';

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        if (url.pathname === '/api/register') return register(request, env);
        if (url.pathname === '/api/login') return login(request, env);
        return new Response('Not Found', { status: 404 });
    }
};