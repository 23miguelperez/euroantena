const API = import.meta.env.PUBLIC_API_URL;
const TOKEN_KEY = 'euroantena_token';

async function request(path, body) {
    try {
        return await fetch(`${API}${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        });
    } catch {
        throw new Error('No se pudo conectar con el servidor');
    }
}

export async function login(email, password) {
    const res = await request('/api/login', {
        email: email.trim().toLowerCase(),
        password,
    });

    if (!res.ok) {
        throw new Error(
            res.status === 401
            ? 'Email o contraseña incorrectos'
            : 'No se pudo iniciar sesión'
    );
    }

    const data = await res.json();
    localStorage.setItem(TOKEN_KEY, data.token);
}

export async function register(email, password) {
    const res = await request('/api/register', {
        email: email.trim().toLowerCase(),
        password,
    });

    if (!res.ok) {
        let message = 'No se pudo crear la cuenta';
    try {
        const data = await res.json();
        if (data.error) message = data.error;
    } catch {}
        throw new Error(message);
    }

  // Tras registrarse, inicia sesión automáticamente
    await login(email, password);
}

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function logout() {
    localStorage.removeItem(TOKEN_KEY);
}

export function isLoggedIn() {
    const token = getToken();
    if (!token) return false;
    try {
        const base64 = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
        const { exp } = JSON.parse(atob(base64));
        return exp * 1000 > Date.now();
    } catch {
        return false;
    }
}

// Para endpoints públicos: NO envía el token.
// (Un token caducado en un endpoint público provocaría un 401 innecesario.)
export async function publicFetch(path, options = {}) {
    try {
        return await fetch(`${API}${path}`, options);
    } catch {
        throw new Error('No se pudo conectar con el servidor');
    }
}

// Para endpoints que requieren sesión. Si el token ha caducado, cierra la sesión.
export async function authFetch(path, options = {}) {
    const token = getToken();
    let res;
    try {
        res = await fetch(`${API}${path}`, {
        ...options,
        headers: {
            ...(options.body ? { 'Content-Type': 'application/json' } : {}),
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
            ...(options.headers || {}),
        },
        });
    } catch {
        throw new Error('No se pudo conectar con el servidor');
    }

    if (res.status === 401) {
        logout();
        window.dispatchEvent(new Event('auth-changed'));
    }
    return res;
}