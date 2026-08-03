#!/usr/bin/env python3
"""
Rescans the repo root and rewrites the folder-tree block in README.md
between the <!-- STRUCTURE:START --> and <!-- STRUCTURE:END --> markers.
Run automatically by .github/workflows/update-readme.yml on every push.
"""

import os

README_PATH = "README.md"
START_MARKER = "<!-- STRUCTURE:START -->"
END_MARKER = "<!-- STRUCTURE:END -->"

# Folders/files to ignore when building the tree
IGNORE = {".git", ".github", "scripts", "node_modules", "__pycache__", "dashboard"}



def build_tree():
    root = "."
    entries = sorted(
        e for e in os.listdir(root)
        if e not in IGNORE and not e.startswith(".")
    )

    lines = ["```", "Java_Dsa/"]
    for i, entry in enumerate(entries):
        is_last = i == len(entries) - 1
        prefix = "└──" if is_last else "├──"
        suffix = "/" if os.path.isdir(entry) else ""
        lines.append(f"{prefix} {entry}{suffix}")
    lines.append("```")
    return "\n".join(lines)


def main():
    with open(README_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    start_idx = content.find(START_MARKER)
    end_idx = content.find(END_MARKER)

    if start_idx == -1 or end_idx == -1:
        print("Markers not found in README.md — skipping update.")
        return

    before = content[: start_idx + len(START_MARKER)]
    after = content[end_idx:]
    new_tree = build_tree()

    new_content = f"{before}\n{new_tree}\n{after}"

    if new_content != content:
        with open(README_PATH, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("README.md structure section updated.")
    else:
        print("No changes needed.")


if __name__ == "__main__":
    main()
