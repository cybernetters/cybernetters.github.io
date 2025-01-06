import register from './api/register.js';
import login from './api/login.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/login') {
      return handleLogin(request, env);
    }

    // Optionally, add more routes for other endpoints like register
    if (url.pathname === '/api/register') {
      return handleRegister(request, env);
    }

    // Default response for unknown paths
    return new Response('Not Found', { status: 404 });
  },
};

// Handler for the /api/login endpoint
async function handleLogin(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { username, password } = await request.json();

    // Query the database for the user
    const { results } = await env.DB.prepare('SELECT * FROM users WHERE name = ?').bind(username).all();

    if (results.length === 0) {
      return new Response(JSON.stringify({ message: 'User not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const user = results[0];

    // Validate the password (you should hash and compare passwords for production)
    const isValidPassword = password === user.password; // Replace this with hashed password validation logic

    if (!isValidPassword) {
      return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Respond with a success message
    return new Response(JSON.stringify({ message: 'Login successful' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error handling login:', error);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// (Optional) Handler for /api/register if you need to support it
async function handleRegister(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  // Add register logic here
  return new Response('Register endpoint not implemented yet', { status: 501 });
}
