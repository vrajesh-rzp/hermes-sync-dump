import { useEffect } from 'react'
import { getGoogleClientId } from '../lib/auth'

declare global {
  interface Window {
    google: any
  }
}

interface Props {
  onSuccess: (token: string) => void
}

export default function LoginPage({ onSuccess }: Props) {
  useEffect(() => {
    const initGoogle = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: getGoogleClientId(),
          callback: (response: any) => {
            if (response.credential) onSuccess(response.credential)
          }
        })
        window.google.accounts.id.renderButton(
          document.getElementById('google-signin-btn')!,
          { theme: 'filled_black', size: 'large', shape: 'pill', width: 300 }
        )
      }
    }

    // Google script may not be loaded yet
    if (window.google) {
      initGoogle()
    } else {
      const interval = setInterval(() => {
        if (window.google) {
          clearInterval(interval)
          initGoogle()
        }
      }, 100)
      return () => clearInterval(interval)
    }
  }, [onSuccess])

  return (
    <div className="h-screen w-screen relative flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="mesh-bg" />
      <div className="grid-bg" />
      <div className="noise-overlay" />
      <div className="vignette" />

      {/* Login card */}
      <div className="relative z-10 flex flex-col items-center gap-8 p-10 rounded-2xl"
        style={{
          background: 'rgba(10, 10, 20, 0.75)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 0 60px rgba(139, 92, 246, 0.08), 0 0 120px rgba(6, 182, 212, 0.04)',
          minWidth: '380px',
        }}
      >
        {/* Animated gradient title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text font-heading tracking-tight">
            Vrajesh.ai
          </h1>
          <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
            PM Brain Dashboard
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)' }} />

        {/* Google Sign-In button */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs" style={{ color: 'var(--text-dim)' }}>
            Sign in with your authorized Google account
          </p>
          <div id="google-signin-btn" />
        </div>

        {/* Footer */}
        <p className="text-[10px]" style={{ color: 'var(--text-dim)' }}>
          Access restricted to authorized users only
        </p>
      </div>
    </div>
  )
}
