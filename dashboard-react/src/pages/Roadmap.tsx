import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { JAVA_ROADMAP, DSA_ROADMAP, DSA_DATA, TOPIC_DETAILS } from '../data/data';

const JAVA_DETAILS: Record<string, { desc: string; topics: string[]; why: string }> = {
  'java-basics': {
    desc: 'Variables, data types, operators, control flow, and loops.',
    topics: ['Variables & Data Types', 'Arithmetic & Logical Operators', 'If-Else & Switch', 'For/While Loops', 'Methods & Return Types'],
    why: 'The absolute foundation. Everything else builds on this.'
  },
  'java-math': {
    desc: 'GCD, LCM, prime checks, factorial, Fibonacci — math you actually use.',
    topics: ['GCD (Euclidean Algorithm)', 'LCM', 'Prime Number Check', 'Factorial', 'Fibonacci Series'],
    why: 'Most DSA problems require mathematical thinking. Start here.'
  },
  'java-complexity': {
    desc: 'Big-O, Big-Theta, Big-Omega — understanding algorithmic efficiency.',
    topics: ['O(1) Constant', 'O(N) Linear', 'O(log N) Logarithmic', 'O(N²) Quadratic', 'Space Complexity'],
    why: 'Learn to analyze code before you write it.'
  },
  'java-arrays': {
    desc: 'Contiguous memory, indexing, 2D arrays, and classic array problems.',
    topics: ['1D Arrays', '2D / Matrix Arrays', 'Jagged Arrays', 'Searching & Sorting', 'Subarrays'],
    why: 'Arrays are the backbone of most DSA problems.'
  },
  'java-strings': {
    desc: 'Immutability, StringBuilder, character manipulation, and pattern matching.',
    topics: ['String vs StringBuilder', 'Character Array Tricks', 'Substring Operations', 'Palindrome Checks', 'Anagram Detection'],
    why: 'String problems are extremely common in interviews.'
  },
  'java-oop': {
    desc: 'Classes, objects, inheritance, polymorphism, abstraction, and interfaces.',
    topics: ['Classes & Objects', 'Constructors', 'Inheritance & super', 'Polymorphism', 'Abstract Classes & Interfaces'],
    why: 'Java is an OOP language at heart. This makes your code clean and scalable.'
  },
  'java-matrixqs': {
    desc: '2D matrix algorithms — diagonal sums, spiral traversal, transpose, staircase search.',
    topics: ['Matrix Traversal', 'Diagonal Sum', 'Spiral Matrix', 'Transpose', 'Staircase Search'],
    why: 'Matrix problems appear frequently in competitive programming and interviews.'
  }
};

const DSA_DETAILS: Record<string, { desc: string; topics: string[]; why: string }> = {
  'arrays': { desc: 'The most fundamental data structure.', topics: ['Prefix Sum', 'Kadane\'s Algorithm', 'Two Pointer on Arrays', 'Subarray Problems', 'Trapping Rain Water'], why: 'Foundation of all DSA.' },
  'searching': { desc: 'Linear and binary search algorithms.', topics: ['Linear Search', 'Binary Search', 'Search on Answer', '2D Matrix Search'], why: 'Critical for reducing time complexity.' },
  'sorting': { desc: 'Bubble, merge, quick, insertion, counting sort.', topics: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Merge Sort', 'Quick Sort', 'Counting Sort'], why: 'Most algorithms require sorted input.' },
  'recursion': { desc: 'Breaking problems into smaller subproblems.', topics: ['Base Cases', 'Recursive Trees', 'Factorial & Fibonacci', 'Merge Sort Recursion', 'Power Function'], why: 'Foundation for DP, Backtracking, Trees.' },
  'backtracking': { desc: 'Explore all paths, backtrack when stuck.', topics: ['N-Queens', 'Sudoku Solver', 'Permutations', 'Grid Ways', 'Subsets'], why: 'Essential for constraint satisfaction problems.' },
  'bit-manipulation': { desc: 'Direct binary operations on integers.', topics: ['AND, OR, XOR', 'Set/Clear/Toggle bit', 'Count set bits', 'Power of 2 check', 'XOR tricks'], why: 'Unlocks O(1) solutions in many problems.' },
  'two-pointer': { desc: 'Two indices traversing from opposite ends.', topics: ['Two Sum (sorted)', 'Three Sum', 'Container with Most Water', 'Remove Duplicates'], why: 'Reduces O(N²) to O(N) for sorted arrays.' },
  'sliding-window': { desc: 'Maintain a running window over array elements.', topics: ['Fixed Window', 'Variable Window', 'Longest Substring', 'Max Sum Subarray', 'Minimum Window Substring'], why: 'Converts brute force into O(N) solutions.' },
  'linked-list': { desc: 'Nodes connected by references.', topics: ['Singly Linked List', 'Doubly Linked List', 'Circular LL', 'Cycle Detection', 'Merge Sort on LL'], why: 'Tests pointer manipulation and memory management.' },
  'stack': { desc: 'LIFO data structure.', topics: ['Push/Pop/Peek', 'Balanced Parentheses', 'Next Greater Element', 'Min Stack', 'Infix to Postfix'], why: 'Critical for expression evaluation and parsing.' },
  'queue': { desc: 'FIFO data structure.', topics: ['Enqueue/Dequeue', 'Circular Queue', 'Priority Queue', 'BFS traversal'], why: 'Essential for BFS and scheduling algorithms.' },
  'greedy': { desc: 'Make locally optimal choices.', topics: ['Activity Selection', 'Fractional Knapsack', 'Job Sequencing', 'Chocola Problem'], why: 'Elegant solutions when greedy choice property holds.' },
};

interface AccordionProps {
  title: string;
  desc: string;
  count: number;
  details?: { topics: string[]; why: string };
  categoryKey: string;
}

function AccordionItem({ title, desc, count, details, categoryKey }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={`accordion-item${open ? ' open' : ''}`}>
      <button className="accordion-header" onClick={() => setOpen(prev => !prev)} aria-expanded={open}>
        <span>
          {title}
          {count > 0 && (
            <span style={{ marginLeft: '10px', fontSize: '0.72rem', color: 'var(--color-muted)', fontWeight: 400 }}>
              ({count} programs)
            </span>
          )}
        </span>
        <span className="accordion-chevron">▼</span>
      </button>
      <div className="accordion-body">
        <p>{desc}</p>
        {details && (
          <>
            <p style={{ marginTop: '12px', color: 'var(--color-accent)', fontSize: '0.82rem', fontWeight: 600 }}>
              💡 Why study this: {details.why}
            </p>
            <ul style={{ marginTop: '8px' }}>
              {details.topics.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          </>
        )}
        <button
          className="btn btn-primary btn-sm"
          style={{ marginTop: '16px' }}
          onClick={() => navigate(`/topic/${encodeURIComponent(categoryKey)}`)}
        >
          Explore {title} →
        </button>
      </div>
    </div>
  );
}

export default function Roadmap() {
  const [activeTab, setActiveTab] = useState<'java' | 'dsa'>('java');

  return (
    <div className="page-narrow">
      <div style={{ marginBottom: '32px' }}>
        <span className="hero-tag">🗺️ Learning Roadmap</span>
        <h1 className="section-title" style={{ marginTop: '8px', fontSize: '2rem' }}>Study Roadmap</h1>
        <p className="section-subtitle">
          A structured path from Java basics to advanced DSA. Expand any topic to see subtopics, why it matters, and jump straight into the programs.
        </p>
      </div>

      <div className="roadmap-page-tabs">
        <button className={`roadmap-tab${activeTab === 'java' ? ' active' : ''}`} onClick={() => setActiveTab('java')}>☕ Core Java</button>
        <button className={`roadmap-tab${activeTab === 'dsa' ? ' active' : ''}`} onClick={() => setActiveTab('dsa')}>🌳 DSA</button>
      </div>

      {activeTab === 'java' && (
        <div>
          {JAVA_ROADMAP.map(node => {
            const categoryKey = node.topics?.[0] ?? '';
            const count = node.topics?.reduce((a, c) => a + DSA_DATA.filter(f => f.category === c).length, 0) ?? 0;
            return (
              <AccordionItem
                key={node.id}
                title={node.title}
                desc={node.desc ?? TOPIC_DETAILS[categoryKey]?.definition ?? ''}
                count={count}
                details={JAVA_DETAILS[node.id]}
                categoryKey={categoryKey}
              />
            );
          })}
        </div>
      )}

      {activeTab === 'dsa' && (
        <div>
          {DSA_ROADMAP.map(node => {
            const count = DSA_DATA.filter(f => f.category === node.category).length;
            return (
              <AccordionItem
                key={node.id}
                title={node.title}
                desc={TOPIC_DETAILS[node.category ?? '']?.definition ?? ''}
                count={count}
                details={DSA_DETAILS[node.id]}
                categoryKey={node.category ?? ''}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
