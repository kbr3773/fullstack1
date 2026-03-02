import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { User, Shield, ArrowRight } from 'lucide-react'

export function Signup() {
  const navigate = useNavigate()
  const [role, setRole] = useState('student')

  const handleSignup = (e) => {
    e.preventDefault()
    // Mock signup logic
    if (role === 'admin') {
      navigate('/admin/dashboard')
    } else {
      navigate('/student/dashboard')
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%', padding: '2rem 1rem' }}>
      <div className="glass-panel" style={{ padding: '2.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="logo-icon" style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'inline-block' }}>🏥</div>
          <h2 style={{ marginBottom: '0.5rem' }}>Create an Account</h2>
          <p className="text-muted">Join the Student Wellness Platform</p>
        </div>

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              type="button"
              className={`btn ${role === 'student' ? 'btn-primary' : 'btn-outline'}`}
              style={{ flex: 1, padding: '1rem', flexDirection: 'column', gap: '0.5rem' }}
              onClick={() => setRole('student')}
            >
              <User size={24} />
              Student
            </button>
            <button
              type="button"
              className={`btn ${role === 'admin' ? 'btn-primary' : 'btn-outline'}`}
              style={{ flex: 1, padding: '1rem', flexDirection: 'column', gap: '0.5rem' }}
              onClick={() => setRole('admin')}
            >
              <Shield size={24} />
              Admin
            </button>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name</label>
            <input
              type="text"
              required
              placeholder="Alex Doe"
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                color: 'white',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
            <input
              type="email"
              required
              placeholder="alex@university.edu"
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                color: 'white',
                outline: 'none',
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '0.8rem 1rem',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                color: 'white',
                outline: 'none',
              }}
            />
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.8rem' }}>
            Sign Up
            <ArrowRight size={18} />
          </button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Already have an account? <Link to="/signup" style={{ color: 'var(--primary-color)' }}>Log in</Link>
        </div>
      </div>
    </div>
  )
}
