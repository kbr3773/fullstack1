import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Activity, BookOpen, Users, Phone, LayoutDashboard, Settings } from 'lucide-react'

export function Layout({ children }) {
  const location = useLocation()
  const isAuthPage = location.pathname === '/signup' || location.pathname === '/login'
  const isAdmin = location.pathname.startsWith('/admin')

  if (isAuthPage) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{children}</div>
  }

  const studentLinks = [
    { to: '/student/dashboard', icon: Activity, label: 'Dashboard' },
    { to: '/student/resources', icon: BookOpen, label: 'Resources' },
    { to: '/student/programs', icon: Users, label: 'Programs' },
    { to: '/student/support', icon: Phone, label: 'Support' },
  ]

  const adminLinks = [
    { to: '/admin/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { to: '/admin/resources', icon: Settings, label: 'Manage Resources' },
  ]

  const links = isAdmin ? adminLinks : studentLinks

  return (
    <div className="layout-container">
      <aside className="sidebar">
        <div className="sidebar-header"><h2>Wellness Hub</h2></div>
        <nav className="sidebar-nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className="nav-link">
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="main-content">
        <header className="topbar">
          <input type="text" placeholder="Search resources..." className="search-input" />
        </header>
        <div className="page-content">{children}</div>
      </main>
    </div>
  )
}
