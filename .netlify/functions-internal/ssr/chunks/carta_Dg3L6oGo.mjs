export { renderers } from '../renderers.mjs';

const page = () => import('./pages/carta_CzwDK3MZ.mjs').then(n => n.c);

export { page };
