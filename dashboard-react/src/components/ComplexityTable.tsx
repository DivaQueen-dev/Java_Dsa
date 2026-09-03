import type { ComplexityRow } from '../types';

interface ComplexityTableProps {
  rows: ComplexityRow[];
}

export default function ComplexityTable({ rows }: ComplexityTableProps) {
  if (rows.length === 0) {
    return (
      <p style={{ color: 'var(--color-muted)', fontSize: '0.875rem', fontStyle: 'italic' }}>
        No complexity data tabulated.
      </p>
    );
  }

  return (
    <div style={{ overflowX: 'auto', borderRadius: 'var(--border-radius)', border: '1px solid var(--color-border)' }}>
      <table className="complexity-table">
        <thead>
          <tr>
            <th>Operation</th>
            <th>Best Case</th>
            <th>Worst Case</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td><strong>{row.op}</strong></td>
              <td><code>{row.best}</code></td>
              <td><code>{row.worst}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
