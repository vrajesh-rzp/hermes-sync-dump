import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'local-action-api',
      configureServer(server) {
        const actionsDir = path.resolve(__dirname, '../actions-queue')

        // POST /api/action — write an action to disk
        server.middlewares.use('/api/action', (req, res) => {
          if (req.method === 'GET') {
            // List all actions
            fs.mkdirSync(actionsDir, { recursive: true })
            const files = fs.readdirSync(actionsDir).filter(f => f.endsWith('.json'))
            const actions = files.map(f => {
              try { return JSON.parse(fs.readFileSync(path.join(actionsDir, f), 'utf-8')) }
              catch { return null }
            }).filter(Boolean)
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(actions))
            return
          }
          if (req.method !== 'POST') { res.statusCode = 405; res.end(); return }
          let body = ''
          req.on('data', (chunk: Buffer) => { body += chunk.toString() })
          req.on('end', () => {
            try {
              const action = JSON.parse(body)
              fs.mkdirSync(actionsDir, { recursive: true })
              const filename = `${Date.now()}-${action.action}.json`
              fs.writeFileSync(path.join(actionsDir, filename), JSON.stringify(action, null, 2))
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: true, file: filename }))
            } catch (e) {
              res.statusCode = 400
              res.end(JSON.stringify({ error: String(e) }))
            }
          })
        })
      },
    },
  ],
  base: '/hermes-sync-dump/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
