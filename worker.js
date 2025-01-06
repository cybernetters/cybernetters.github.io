import register from './api/register.js';
import login from './api/login.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle `/` (root path)
    if (url.pathname === '/') {
      return new Response('Welcome to the Cybernetters API! Available endpoints: /api/login, /api/register', {
        status: 200,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    // Handle `/api/login`
    if (url.pathname === '/api/login') {
      return handleLogin(request, env);
    }

    // Handle `/api/register`
    if (url.pathname === '/api/register') {
      return handleRegister(request, env);
    }

    // Default response for unknown paths
    return new Response('Not Found', { status: 404 });
  },
};

// Define the login handler
async function handleLogin(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const { username, password } = await request.json();

  // Query the database
  const { results } = await env.DB.prepare('SELECT * FROM users WHERE name = ?')
    .bind(username)
    .all();

  if (results.length === 0) {
    return new Response(JSON.stringify({ message: 'User not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const user = results[0];
  const isValidPassword = password === user.password; // Replace with hashed password validation

  if (!isValidPassword) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ message: 'Login successful' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Define the register handler (optional)
async function handleRegister(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const { username, password } = await request.json();

  // Add the user to the database
  await env.DB.prepare('INSERT INTO users (name, password) VALUES (?, ?)')
    .bind(username, password)
    .run();

  return new Response(JSON.stringify({ message: 'User registered successfully' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}