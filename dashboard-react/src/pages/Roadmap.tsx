import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JAVA_ROADMAP, DSA_ROADMAP, DSA_DATA, TOPIC_DETAILS } from '../data/data';

function AccordionItem({ title, desc, count, categoryKey }: { title: string, desc: string, count: number, categoryKey: string }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`roadmap-accordion ${open ? 'open' : ''}`}>
      <button className="roadmap-header" onClick={() => setOpen(!open)}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {title}
          {count > 0 && <span className="tag">{count} programs</span>}
        </span>
        <span style={{ transition: 'transform var(--transition)', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}>↓</span>
      </button>
      <div className="roadmap-body">
        <p style={{ color: 'var(--color-muted)', marginBottom: '16px', lineHeight: '1.7' }}>{desc}</p>
        <button className="btn btn-outline btn-sm" onClick={() => navigate(`/topic/${encodeURIComponent(categoryKey)}`)}>
          Explore Directory →
        </button>
      </div>
    </div>
  );
}

export default function Roadmap() {
  const [activeTab, setActiveTab] = useState<'java' | 'dsa'>('java');

  return (
    <div className="page-narrow">
      <div className="topic-header-editorial">
        <span className="tag" style={{ marginBottom: '16px' }}>Directory</span>
        <h1>Topics & Structure</h1>
        <p>A bird's-eye view of the entire repository. Browse by category to find definitions, complexity tables, and code.</p>
      </div>

      <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
        <button 
          onClick={() => setActiveTab('java')}
          style={{ padding: '8px 16px', fontSize: '1.05rem', fontWeight: 600, color: activeTab === 'java' ? 'var(--color-text)' : 'var(--color-muted)', borderBottom: activeTab === 'java' ? '2px solid var(--color-accent)' : 'none' }}
        >
          Core Java
        </button>
        <button 
          onClick={() => setActiveTab('dsa')}
          style={{ padding: '8px 16px', fontSize: '1.05rem', fontWeight: 600, color: activeTab === 'dsa' ? 'var(--color-text)' : 'var(--color-muted)', borderBottom: activeTab === 'dsa' ? '2px solid var(--color-accent)' : 'none' }}
        >
          Data Structures
        </button>
      </div>

      <div>
        {activeTab === 'java' && JAVA_ROADMAP.map(node => {
          const cat = node.topics?.[0] ?? '';
          const count = node.topics?.reduce((a, c) => a + DSA_DATA.filter(f => f.category === c).length, 0) ?? 0;
          return <AccordionItem key={node.id} title={node.title} desc={TOPIC_DETAILS[cat]?.definition ?? node.desc ?? ''} count={count} categoryKey={cat} />;
        })}
        
        {activeTab === 'dsa' && DSA_ROADMAP.map(node => {
          const cat = node.category ?? '';
          const count = DSA_DATA.filter(f => f.category === cat).length;
          return <AccordionItem key={node.id} title={node.title} desc={TOPIC_DETAILS[cat]?.definition ?? ''} count={count} categoryKey={cat} />;
        })}
      </div>
    </div>
  );
}
