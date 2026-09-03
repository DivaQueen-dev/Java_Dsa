export default function GettingStarted() {
  return (
    <div className="page-narrow">
      <div style={{ marginBottom: '32px' }}>
        <img src="./assets/lesgo.png" alt="Let's go!" style={{ width: '100px', float: 'right', borderRadius: '8px' }} />
        <span className="hero-tag">🌿 Setup Guide</span>
        <h1 className="section-title" style={{ marginTop: '8px', fontSize: '2rem' }}>Getting Started</h1>
        <p className="section-subtitle">One repository, two experiences. Explore it your way.</p>
      </div>

      <div className="getting-started-content">

        <h2>✅ Prerequisites</h2>
        <table className="steps-table">
          <thead>
            <tr><th>Tool</th><th>Version</th><th>Purpose</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>Java JDK</strong></td><td>17 or higher</td><td>Compile and run <code>.java</code> files</td></tr>
            <tr><td><strong>Git</strong></td><td>Any recent version</td><td>Clone the repository</td></tr>
            <tr><td><strong>IDE</strong> (optional)</td><td>IntelliJ / VS Code</td><td>Easier editing and running</td></tr>
          </tbody>
        </table>

        <h3>Install Java (JDK 17+)</h3>
        <ul>
          <li>Download from <a href="https://adoptium.net" target="_blank" rel="noopener noreferrer">https://adoptium.net</a> (Temurin — free &amp; open source)</li>
          <li>Verify: <code>java -version</code> should print <code>17</code> or higher</li>
        </ul>

        <h3>Install Git</h3>
        <ul>
          <li>Download from <a href="https://git-scm.com" target="_blank" rel="noopener noreferrer">https://git-scm.com</a></li>
          <li>Verify: <code>git --version</code></li>
        </ul>

        <h2>📥 Clone the Repository</h2>
        <pre>{`git clone https://github.com/DivaQueen-dev/Java_Dsa.git
cd Java_Dsa`}</pre>

        <h2>▶️ Running Programs Locally</h2>
        <p>Every <code>.java</code> file is self-contained and can be compiled independently:</p>

        <h3>Using the Terminal</h3>
        <pre>{`# Navigate to the topic folder
cd Arrays

# Compile the file
javac ReverseArray.java

# Run it
java ReverseArray`}</pre>

        <h3>Using an IDE</h3>
        <ol style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li>Open IntelliJ IDEA or VS Code</li>
          <li>Open the <code>Java_Dsa</code> folder as a project</li>
          <li>Navigate to any <code>.java</code> file</li>
          <li>Click <strong>Run</strong> or press <code>Shift+F10</code> (IntelliJ) / <code>F5</code> (VS Code with Java extension)</li>
        </ol>
        <p>💡 <strong>Tip:</strong> You don't need a build system (Maven/Gradle). Every file compiles standalone.</p>

        <h2>📁 Folder Structure</h2>
        <pre>{`Java_Dsa/
│
├── Arrays/              → Array manipulation programs
├── BackTracking/        → Backtracking algorithms
├── Basics/              → Java fundamentals & syntax
├── BinaryTrees/         → Binary tree operations
├── BitManipulation/     → Bit-level operations
├── Greedy/              → Greedy algorithm problems
├── Lists/               → Linked list implementations
├── MatrixQs/            → 2D matrix problems
├── OOPS/                → Object-Oriented Programming examples
├── Queue/               → Queue data structure
├── Recursion/           → Recursive problem solving
├── Searching/           → Binary search, linear search, etc.
├── SlidingWindow/       → Sliding window technique
├── Sorting/             → Sorting algorithms
├── Stack/               → Stack data structure
├── Strings/             → String manipulation programs
├── TwoPointer/          → Two pointer technique
│
├── assets/              → Images used by the companion website
├── dashboard/           → Original vanilla HTML/CSS/JS website
├── dashboard-react/     → ✨ This React TypeScript app
│
├── README.md            → Project overview
└── GETTING_STARTED.md   → Full setup guide`}</pre>

        <h2>🌐 Using This Dashboard</h2>
        <p>This interactive companion website is built with React + TypeScript + Vite.</p>

        <h3>Development Mode</h3>
        <pre>{`cd dashboard-react
npm install
npm run dev`}</pre>

        <h3>Production Build</h3>
        <pre>{`npm run build
# Produces dashboard-react/dist/`}</pre>
        <p>The built <code>dist/</code> folder is a pure static site — deploy to GitHub Pages, Netlify, or any static host.</p>

        <h2>🤝 How to Contribute</h2>

        <h3>Step 1 — Fork the Repository</h3>
        <p>Click <strong>Fork</strong> on GitHub to create your own copy.</p>

        <h3>Step 2 — Clone Your Fork</h3>
        <pre>{`git clone https://github.com/YOUR_USERNAME/Java_Dsa.git
cd Java_Dsa`}</pre>

        <h3>Step 3 — Add Your Program</h3>
        <pre>{`# Place your .java file in the appropriate topic folder
cp YourAlgorithm.java Sorting/`}</pre>

        <h3>Step 4 — Update data.js (optional)</h3>
        <p>To make your program appear in the website, add an entry to <code>dashboard/data.js</code> following the existing format, then run:</p>
        <pre>{`node scripts/convert_data.mjs`}</pre>
        <p>This regenerates <code>dashboard-react/src/data/data.ts</code> automatically.</p>

        <h3>Step 5 — Submit a Pull Request</h3>
        <pre>{`git add .
git commit -m "Add YourAlgorithm to Sorting"
git push origin main`}</pre>

        <div style={{ marginTop: '40px', textAlign: 'center', padding: '24px', background: 'var(--color-accent-light)', borderRadius: 'var(--border-radius)', border: '1px solid var(--color-border)' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--color-muted)' }}>
            Happy exploring 🌿
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
            <a href="https://github.com/DivaQueen-dev/Java_Dsa" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
              📂 Browse Repository ↗
            </a>
            <a href="https://codolio.com/profile/cinnamongirl" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              Codolio Profile ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
