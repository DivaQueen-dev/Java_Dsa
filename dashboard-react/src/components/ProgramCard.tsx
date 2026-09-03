import { useNavigate } from 'react-router-dom';
import type { Program } from '../types';
import { cleanTitle } from '../data/data';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const navigate = useNavigate();
  const diff = program.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';

  return (
    <div
      className="program-card masonry-item"
      onClick={() => navigate(`/program/${encodeURIComponent(program.path)}`)}
      role="button"
      tabIndex={0}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span className={`diff-dot ${diff}`} title={`Difficulty: ${program.difficulty}`} />
        <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {program.difficulty}
        </span>
      </div>
      <h3>{cleanTitle(program.name)}</h3>
      <p>{program.theory.length > 80 ? program.theory.substring(0, 80) + '…' : program.theory}</p>
      
      <div className="program-meta">
        <span>⏳ {program.timeComplexity}</span>
        <span>📦 {program.spaceComplexity}</span>
      </div>
    </div>
  );
}
