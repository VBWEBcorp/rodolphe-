import { NextRequest, NextResponse } from 'next/server'
import { connectDB } from '@/lib/db'
import User from '@/models/User'
import { generateToken } from '@/lib/auth'

// Identifiant admin du site (en dur, ne dépend pas de la base de données)
const ADMIN_EMAIL = 'contact@demenageurs-enpayswe.fr'
const ADMIN_PASSWORD = 'EnPaysWe2230'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // Accès admin principal (identifiants en dur, fonctionne sans base de données)
    if (
      email.toLowerCase() === ADMIN_EMAIL.toLowerCase() &&
      password === ADMIN_PASSWORD
    ) {
      const token = generateToken({
        userId: 'admin',
        email: ADMIN_EMAIL,
        role: 'admin',
      })
      return NextResponse.json({
        token,
        user: { id: 'admin', email: ADMIN_EMAIL, name: 'EN PAYS WÊ', role: 'admin' },
      })
    }

    await connectDB()

    // Find user and get password field
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password')
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Compare password
    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Generate token
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    })

    return NextResponse.json({
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
