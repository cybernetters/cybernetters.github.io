import bcrypt from 'bcryptjs';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/login') {
      return handleLogin(request, env);
    }

    if (url.pathname === '/api/register') {
      return handleRegister(request, env);
    }

    return new Response('Not Found', { status: 404 });
  },
};

async function handleRegister(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const { username, email, password } = await request.json();

  // Validate input
  if (!username || !email || !password) {
    return new Response(JSON.stringify({ message: 'All fields are required' }), {
      status: 400,
    });
  }

  // Check if user exists
  const { results: existingUser } = await env.DB.prepare(
    'SELECT * FROM users WHERE email = ? OR name = ?'
  )
    .bind(email, username)
    .all();

  if (existingUser.length > 0) {
    return new Response(
      JSON.stringify({ message: 'User with this email or username already exists' }),
      { status: 409 }
    );
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert new user
  await env.DB.prepare(
    'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'
  )
    .bind(username, email, hashedPassword)
    .run();

  return new Response(
    JSON.stringify({ message: 'Registration successful' }),
    { status: 201 }
  );
}

async function handleLogin(request, env) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const { username, password } = await request.json();

  const { results } = await env.DB.prepare(
    'SELECT * FROM users WHERE name = ?'
  )
    .bind(username)
    .all();

  if (results.length === 0) {
    return new Response(JSON.stringify({ message: 'User not found' }), {
      status: 404,
    });
  }

  const user = results[0];
  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
    });
  }

  return new Response(
    JSON.stringify({ message: 'Login successful' }),
    { status: 200 }
  );

  if (url.hostname === 'www.cybernetters.net') {
    return Response.redirect('https://cybernetters.net' + url.pathname, 301);
  }  

}
