// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Salida estática: se puede subir a cualquier hosting (Netlify, Cloudflare Pages,
// Vercel o el propio IONOS por SFTP).
export default defineConfig({
  site: 'https://www.ferviasesores.es',
  output: 'static',
  integrations: [sitemap()],
  trailingSlash: 'ignore',
  // Las URLs de la web antigua (IONOS MyWebsite) que ya están indexadas.
  // Estas redirecciones generan una página con meta-refresh. Para un 301 real,
  // configúralas también en el hosting (ver README).
  redirects: {
    '/quiénes-somos': '/quienes-somos',
    '/seguros': '/servicios/seguros',
    '/energia': '/servicios/energia',
    '/energia/contacto-energía': '/contacto',
    '/telecomunicaciones': '/servicios/telecomunicaciones',
    '/inmobiliaria': '/servicios/juridico',
    '/informática': '/servicios/informatica',
    '/finanzas': '/servicios/finanzas',
    '/cómo-llegar': '/como-llegar',
    '/aviso-legal/politica-de-privacidad': '/politica-de-privacidad',
  },
});
