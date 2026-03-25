import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Mock user database
const mockUsers = [
  {
    id: '1',
    email: 'demo@example.com',
    name: 'Demo User',
    role: 'admin',
  },
]

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
      },
      async authorize(credentials) {
        // Mock authentication - accept any email
        if (!credentials?.email) return null
        
        // Return mock user
        return {
          id: mockUsers[0].id,
          email: credentials.email,
          name: mockUsers[0].name,
          role: mockUsers[0].role,
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
}