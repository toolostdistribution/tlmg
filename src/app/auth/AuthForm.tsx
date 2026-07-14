'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export function AuthForm() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [locked, setLocked] = useState(false)
  const searchParams = useSearchParams()
  const nextParam = searchParams.get('next') || '/'
  // Only allow same-origin relative paths to prevent open-redirects
  // (e.g. `//evil.com` or `https://evil.com`).
  const next = /^\/(?!\/)/.test(nextParam) ? nextParam : '/'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (locked) return
    setLoading(true)
    setError('')

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      window.location.href = next
    } else {
      const data = await res.json().catch(() => ({}))
      if (res.status === 429) {
        setLocked(true)
        setError(data.error || 'Too many attempts. Try again later.')
        const retryMs = (data.retryAfter || 300) * 1000
        setTimeout(() => { setLocked(false); setError('') }, retryMs)
      } else {
        setError('Incorrect password')
      }
      setLoading(false)
    }
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes logoReveal {
            from { opacity: 0; transform: scale(0.8); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes spin-logo {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-6px); }
            40%, 80% { transform: translateX(6px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
          }

          .auth-page {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #0a0a0a;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            overflow: hidden;
            position: relative;
          }

          .auth-container {
            width: 100%;
            max-width: 320px;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 1;
          }

          .auth-logo-wrap {
            margin-bottom: 3.5rem;
            animation: logoReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          .auth-logo-spin {
            width: 160px;
            height: 160px;
            animation: spin-logo 12s linear infinite;
          }

          .auth-logo-circle-text {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            font-size: 8.2px;
            font-weight: 700;
            letter-spacing: 0.28em;
            text-transform: uppercase;
            fill: #fff;
          }

          .auth-form-wrap {
            width: 100%;
            animation: fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
          }

          .auth-input {
            width: 100%;
            padding: 15px 18px;
            font-size: 0.92rem;
            font-family: inherit;
            background: rgba(255,255,255,0.05);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 10px;
            color: #f0efe8;
            outline: none;
            transition: border-color 0.25s, background 0.25s;
            letter-spacing: 0.08em;
            text-align: center;
          }
          .auth-input::placeholder {
            color: rgba(255,255,255,0.2);
            font-weight: 400;
            letter-spacing: 0.02em;
          }
          .auth-input:focus {
            border-color: rgba(255,255,255,0.25);
            background: rgba(255,255,255,0.07);
          }
          .auth-input.auth-error {
            border-color: rgba(255,80,80,0.45);
            animation: shake 0.4s ease;
          }

          .auth-btn {
            width: 100%;
            padding: 15px;
            font-size: 0.85rem;
            font-weight: 600;
            font-family: inherit;
            letter-spacing: 0.02em;
            background: rgba(255,255,255,0.9);
            color: #0a0a0a;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          .auth-btn:hover:not(:disabled) {
            background: #fff;
            transform: translateY(-1px);
            box-shadow: 0 6px 24px rgba(255,255,255,0.12);
          }
          .auth-btn:active:not(:disabled) {
            transform: translateY(0);
          }
          .auth-btn:disabled {
            opacity: 0.5;
            cursor: wait;
          }

          .auth-error-msg {
            font-size: 0.78rem;
            color: rgba(255,80,80,0.75);
            font-weight: 500;
          }

          .auth-glow {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -60%);
            pointer-events: none;
          }
        `}</style>
      </head>
      <body className="auth-page">
        <div className="auth-glow" />

        <div className="auth-container">
          <div className="auth-logo-wrap">
            <svg className="auth-logo-spin" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  id="authCirclePath"
                  d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="auth-logo-circle-text">
                <textPath href="#authCirclePath" startOffset="0%">
                  Too Lost Music Group - EST 2026 -&nbsp;
                </textPath>
              </text>
            </svg>
          </div>

          <div className="auth-form-wrap">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '0.75rem' }}>
                <input
                  className={`auth-input${error && !locked ? ' auth-error' : ''}`}
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError('') }}
                  placeholder="Password"
                  autoFocus
                />
              </div>

              <button className="auth-btn" type="submit" disabled={loading || locked}>
                {loading ? 'Verifying...' : 'Continue'}
              </button>

              <div style={{
                minHeight: 32,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '0.75rem',
              }}>
                {error && <p className="auth-error-msg">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </body>
    </html>
  )
}
