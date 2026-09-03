import { useNavigate } from 'react-router-dom';
import type { Program } from '../types';
import { cleanTitle } from '../data/data';

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const navigate = useNavigate();
  const diff = program.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard';

  function handleClick() {
    navigate(`/program/${encodeURIComponent(program.path)}`);
  }

  const snippet =
    program.theory.length > 80
      ? program.theory.substring(0, 80) + '…'
      : program.theory;

  return (
    <div
      className="program-card"
      onClick={handleClick}
      onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      role="button"
      tabIndex={0}
      aria-label={`Open ${cleanTitle(program.name)}`}
    >
      <div className="program-card-header">
        <span className={`badge badge-${diff}`}>{program.difficulty}</span>
      </div>
      <h3>{cleanTitle(program.name)}</h3>
      <p>{snippet}</p>
      <div className="program-card-pills">
        <span className="pill" title="Time complexity">⏳ {program.timeComplexity}</span>
        <span className="pill" title="Space complexity">📦 {program.spaceComplexity}</span>
      </div>
    </div>
  );
}
