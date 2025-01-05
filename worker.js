import register from './api/register.js';
import login from './api/login.js';

export default {
    async fetch(request, env) {
      const url = new URL(request.url);
  
      if (url.pathname === '/api/login') {
        return handleLogin(request, env);
      }
  
      return new Response('Not Found', { status: 404 });
    },
  };
  
  async function handleLogin(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }
  
    const { username, password } = await request.json();
  
    const { results } = await env.DB.prepare('SELECT * FROM users WHERE name = ?').bind(username).all();
    if (results.length === 0) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }
  
    const user = results[0];
    const isValidPassword = password === user.password; // Replace with hashed password validation
  
    if (!isValidPassword) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });
    }
  
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
  }