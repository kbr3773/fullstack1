import React from 'react'
import { Plus, Edit2, Trash2, Search } from 'lucide-react'

export function AdminResources() {
  const tableData = [
    { id: 1, title: 'Understanding Anxiety', category: 'Mental Health', type: 'Article', status: 'Published' },
    { id: 2, title: '15-Min Full Body Workout', category: 'Fitness', type: 'Video', status: 'Published' },
    { id: 3, title: 'Balanced Diet Basics', category: 'Nutrition', type: 'Guide', status: 'Draft' },
    { id: 4, title: 'Meditation for Beginners', category: 'Mental Health', type: 'Video', status: 'Published' },
  ]

  return (
    <div className="admin-resources-container">
      <header className="page-header" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Manage Resources Programs</h1>
          <p className="text-muted">Add, edit, or delete health and wellness contents.</p>
        </div>
        <button className="btn btn-primary" onClick={() => alert('Opening New Resource form...')}>
          <Plus size={18} />
          Add New Resource
        </button>
      </header>

      <div className="glass-panel" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ margin: 0 }}>Content Library</h3>
          <div className="search-bar" style={{ position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input type="text" placeholder="Search resources..." className="search-input" style={{ width: '250px', paddingLeft: '2.5rem' }} />
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500, borderBottom: '1px solid var(--glass-border)' }}>Title</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500, borderBottom: '1px solid var(--glass-border)' }}>Category</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500, borderBottom: '1px solid var(--glass-border)' }}>Type</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500, borderBottom: '1px solid var(--glass-border)' }}>Status</th>
                <th style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: 500, borderBottom: '1px solid var(--glass-border)', textAlign: 'right' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s' }}>
                  <td style={{ padding: '1rem 1.5rem', fontWeight: 500 }}>{row.title}</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{row.category}</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{row.type}</td>
                  <td style={{ padding: '1rem 1.5rem' }}>
                    <span style={{ padding: '0.2rem 0.6rem', borderRadius: '12px', fontSize: '0.8rem', background: row.status === 'Published' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)', color: row.status === 'Published' ? 'var(--success-color)' : 'var(--warning-color)' }}>
                      {row.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button className="btn btn-outline" style={{ padding: '0.4rem', border: 'none', color: 'var(--primary-color)' }} onClick={() => alert(`Editing ${row.title}`)}>
                        <Edit2 size={16} />
                      </button>
                      <button className="btn btn-outline" style={{ padding: '0.4rem', border: 'none', color: 'var(--danger-color)' }} onClick={() => alert(`Confirm delete ${row.title}?`)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
