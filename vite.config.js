import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const rawSiteUrl = env.VITE_SITE_URL || 'https://collinsotieno.netlify.app'
  const siteUrl = rawSiteUrl.replace(/\/+$/, '')
  const today = new Date().toISOString().split('T')[0]

  const robotsContent = `# Robots.txt for Collins Omondi Portfolio
User-agent: *
Allow: /

# Host
Host: ${siteUrl}/

# Sitemaps
Sitemap: ${siteUrl}/sitemap.xml
`

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${siteUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${siteUrl}/og-image.png</image:loc>
      <image:title>Collins Omondi - Full-Stack Software Developer Portfolio</image:title>
      <image:caption>Collins Omondi - Full-Stack Software Developer</image:caption>
    </image:image>
  </url>
</urlset>
`

  return {
    plugins: [
      tailwindcss(),
      react(),
      {
        name: 'seo-sitemap-robots-plugin',
        transformIndexHtml(html) {
          return html.replaceAll('%VITE_SITE_URL%', siteUrl)
        },
        generateBundle() {
          this.emitFile({
            type: 'asset',
            fileName: 'robots.txt',
            source: robotsContent,
          })
          this.emitFile({
            type: 'asset',
            fileName: 'sitemap.xml',
            source: sitemapContent,
          })
        },
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/robots.txt') {
              res.setHeader('Content-Type', 'text/plain')
              res.end(robotsContent)
              return
            }
            if (req.url === '/sitemap.xml') {
              res.setHeader('Content-Type', 'application/xml')
              res.end(sitemapContent)
              return
            }
            next()
          })
        },
      },
    ],
  }
})
