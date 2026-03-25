'use client'

import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { LogIn } from 'lucide-react'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  
  const handleLogin = async () => {
    setLoading(true)
    try {
      await signIn('credentials', { callbackUrl: '/dashboard' })
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-8 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to access your dashboard</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-4 rounded-md font-medium hover:bg-primary/90 transition disabled:opacity-50"
          >
            <LogIn className="w-5 h-5" />
            {loading ? 'Signing in...' : 'Sign in with Mock Account'}
          </button>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>This is a mock authentication for demo purposes.</p>
            <p>No password required.</p>
          </div>
        </div>
      </div>
    </div>
  )
}