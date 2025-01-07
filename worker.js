import bcrypt from 'bcryptjs';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    try {
      if (url.pathname === '/') {
        return new Response(
          'Welcome to the Cybernetters API! Available endpoints: /api/login, /api/register',
          {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
          }
        );
      }

      if (url.pathname === '/api/login' && request.method === 'POST') {
        return handleLogin(request, env);
      }

      if (url.pathname === '/api/register' && request.method === 'POST') {
        return handleRegister(request, env);
      }

      if (url.pathname === '/api/login' || url.pathname === '/api/register') {
        return new Response('Method Not Allowed', { status: 405 });
      }

      return new Response('Not Found', { status: 404 });
    } catch (error) {
      console.error('Error handling request:', error);
      return new Response(
        JSON.stringify({ message: 'Internal Server Error', error: error.message }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  },
};

// Define the login handler
async function handleLogin(request, env) {
  try {
    const { username, password } = await request.json();

    // Query the database for the user
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
    const isValidPassword = await bcrypt.compare(password, user.password);

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
  } catch (error) {
    console.error('Error in handleLogin:', error);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// Define the register handler
async function handleRegister(request, env) {
  try {
    const { username, password } = await request.json();

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the hashed password in the database
    await env.DB.prepare('INSERT INTO users (name, password) VALUES (?, ?)')
      .bind(username, hashedPassword)
      .run();

    return new Response(JSON.stringify({ message: 'User registered successfully' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in handleRegister:', error);
    return new Response(
      JSON.stringify({ message: 'Internal Server Error', error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
