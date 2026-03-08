'use client';
import { useState } from 'react';
import { POSTS } from '@/data/blog';

const CATS = ['All', 'Product', 'Announcement', 'Market', 'Company', 'Insights'];

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState('All');
  const [expanded, setExpanded] = useState({});

  const filtered = activeCat === 'All' ? POSTS : POSTS.filter((p) => p.cat === activeCat);

  return (
    <>
      <section style={{ position: 'relative', padding: '80px 0 56px', background: 'var(--bg2)', overflow: 'hidden' }}>
        <div className="grid-bg grid-fade" />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sec-label">Journal</span>
          <h1 style={{ fontSize: 'clamp(28px,5vw,56px)', fontWeight: 400, fontStyle: 'italic', marginBottom: 16 }}>
            Building in public. <strong style={{ fontStyle: 'normal', fontFamily: 'var(--ff-body)', fontWeight: 600 }}>Writing it down.</strong>
          </h1>
          <p style={{ color: 'var(--tm)', fontSize: 15, maxWidth: 440, lineHeight: 1.75 }}>
            Product decisions, market insights, and what building healthcare software in India really looks like.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="blog-filters">
            {CATS.map((cat) => (
              <button key={cat} className={`blog-filter${activeCat === cat ? ' active' : ''}`} onClick={() => setActiveCat(cat)}>{cat}</button>
            ))}
          </div>
          <div className="blog-grid">
            {filtered.map((post) => {
              const isExp = expanded[post.id];
              return (
                <div key={post.id} className="blog-card">
                  <div className="blog-cat">{post.cat}</div>
                  <div className="blog-title">{post.title}</div>
                  <p className="blog-preview">{post.preview}</p>
                  {isExp && <div className="blog-exp">{post.body}</div>}
                  <div className="blog-footer">
                    <span className="blog-date">{post.date} · {post.read}</span>
                    <button className="read-btn" onClick={() => setExpanded((p) => ({ ...p, [post.id]: !p[post.id] }))}>
                      {isExp ? 'Read less ↑' : 'Read more →'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
