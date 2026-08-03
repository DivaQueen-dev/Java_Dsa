<img align="right" src="./assets/lesgo.png" width="130" alt="let's go!" />

# 🌿 Getting Started with Java_Dsa

> **One repository, two experiences. Explore it your way.**

This guide helps you set up and explore the `Java_Dsa` repository — whether you prefer browsing code directly through GitHub or using the interactive companion website.

---

## 📋 Table of Contents

- [Prerequisites](#-prerequisites)
- [How to Clone the Repository](#-how-to-clone-the-repository)
- [Running Programs Locally](#-running-programs-locally)
- [Folder Structure](#-folder-structure)
- [How to Navigate the Website](#-how-to-navigate-the-website)
- [Using the Repository Alongside the Website](#-using-the-repository-alongside-the-website)
- [How to Contribute](#-how-to-contribute)

---

## ✅ Prerequisites

Before you begin, make sure you have the following installed:

| Tool | Version | Purpose |
|------|---------|---------|
| **Java JDK** | 17 or higher | Compile and run `.java` files |
| **Git** | Any recent version | Clone the repository |
| **IDE** *(optional)* | IntelliJ IDEA / VS Code / Eclipse | Easier editing and running |

### Install Java (JDK 17+)

- Download from [https://adoptium.net](https://adoptium.net) *(Temurin — free & open source)*
- Verify installation: `java -version` should print `17` or higher

### Install Git

- Download from [https://git-scm.com](https://git-scm.com)
- Verify: `git --version`

---

## 📥 How to Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/DivaQueen-dev/Java_Dsa.git
cd Java_Dsa
```

That's it. The full repository is now on your machine — programs, notes, and the companion website, all in one place.

---

## ▶️ Running Programs Locally

Every `.java` file in this repository is self-contained and can be compiled and run independently.

### Using the Terminal

```bash
# Navigate to the topic folder you want
cd Arrays

# Compile the file
javac ReverseArray.java

# Run it
java ReverseArray
```

### Using an IDE

1. Open IntelliJ IDEA or VS Code
2. Open the `Java_Dsa` folder as a project
3. Navigate to any `.java` file
4. Click **Run** or press `Shift+F10` (IntelliJ) / `F5` (VS Code with Java extension)

> 💡 **Tip:** You don't need a build system (Maven/Gradle). Every file compiles standalone.

---

## 📁 Folder Structure

```
Java_Dsa/
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
├── Sorting/             → Sorting algorithms (bubble, merge, quick…)
├── Stack/               → Stack data structure
├── Strings/             → String manipulation programs
├── TwoPointer/          → Two pointer technique
│
├── assets/              → Images used by the companion website
├── dashboard/           → The interactive companion website (HTML/CSS/JS)
│   ├── index.html       → Website entry point
│   ├── styles.css       → Styling
│   ├── app.js           → Navigation and UI logic
│   └── data.js          → All program data (code, explanations, complexity)
│
├── README.md            → Project overview
└── GETTING_STARTED.md   → This file
```

---

## 🌐 How to Navigate the Website

The interactive companion website lives inside the `dashboard/` folder.

### Opening the Website Locally

After cloning the repository:

```
Java_Dsa/dashboard/index.html
```

Simply open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

> **No server required. No npm install. Just open and explore.**

### What the Website Offers

| Feature | Description |
|---------|-------------|
| 🔍 **Search** | Find any topic or program instantly |
| 📖 **Topic Overviews** | Brief concept explanations with analogies |
| 📊 **Complexity Tables** | Time and space complexity at a glance |
| ⚖️ **Pros & Cons** | Honest trade-offs for each data structure |
| ☕ **Code Viewer** | Clean syntax-highlighted code for every program |
| 🔗 **Practice Links** | One-click redirect to an online Java playground |
| 🌙 **Dark Mode** | Easy on the eyes during late-night sessions |

---

## 🔀 Using the Repository Alongside the Website

The website and the repository are two sides of the same coin.

| You prefer... | Do this |
|---------------|---------|
| Browsing folders and reading raw code | Use GitHub or your file explorer directly |
| Searching and reading structured explanations | Open `dashboard/index.html` in your browser |
| Both | Use GitHub for browsing, website for concept reference |

**The website never replaces the repository.** Every program in the website is the exact same file from the folder. The website simply adds a nicer interface on top.

---

## 🤝 How to Contribute

Contributions are welcome! Here's how to add a new program or improve an existing one.

### Step 1 — Fork the Repository

Click **Fork** on GitHub to create your own copy.

### Step 2 — Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/Java_Dsa.git
cd Java_Dsa
```

### Step 3 — Add Your Program

Place your `.java` file in the appropriate topic folder:

```bash
# Example: adding a new sorting algorithm
cp YourAlgorithm.java Sorting/
```

### Step 4 — Update data.js *(optional but appreciated)*

If you want your program to appear in the interactive website, add an entry to `dashboard/data.js` following the existing format:

```js
{
    name: "YourAlgorithm.java",
    path: "Sorting/YourAlgorithm.java",
    category: "Sorting",
    difficulty: "Medium",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(1)",
    theory: "Brief description of the algorithm...",
    analogy: "A real-world analogy to understand it...",
    dry_run: "Step-by-step trace through an example...",
    output: "Expected program output...",
    code: `public class YourAlgorithm { ... }`
}
```

### Step 5 — Submit a Pull Request

```bash
git add .
git commit -m "Add YourAlgorithm to Sorting"
git push origin main
```

Then open a Pull Request on GitHub with a brief description of what you added.

---

## 💬 Questions?

Feel free to open an [Issue](https://github.com/DivaQueen-dev/Java_Dsa/issues) on GitHub or reach out via the profile.

<p align="center">
  <a href="https://github.com/DivaQueen-dev">
    <img src="https://img.shields.io/badge/GitHub-DivaQueen--dev-F3E5D8?style=for-the-badge&logo=github&logoColor=8B5E3C" />
  </a>
</p>

<p align="center"><i>Happy exploring 🌿</i></p>
