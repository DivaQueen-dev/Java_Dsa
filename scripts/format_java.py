import os

def clean_and_format_line(line, indent_level, indent_str="    "):
    stripped = line.strip()
    if not stripped:
        return ""
    
    # Adjust indent level if the line starts with a closing brace or closing paren
    # e.g., }, }, else {, } while (...);
    adjust_before = 0
    if stripped.startswith("}"):
        adjust_before = -1
    elif stripped.startswith("]"):
        adjust_before = -1
    elif stripped.startswith(")"):
        adjust_before = -1
        
    actual_indent = max(0, indent_level + adjust_before)
    formatted = (indent_str * actual_indent) + stripped
    
    # Calculate new indent level for subsequent lines
    # Count opening and closing braces
    opens = stripped.count("{") + stripped.count("[") + stripped.count("(")
    closes = stripped.count("}") + stripped.count("]") + stripped.count(")")
    
    # In some cases, we want to count opening/closing but exclude comments or strings.
    # To keep it simple but safe, we just count braces.
    new_indent = indent_level + opens - closes
    return formatted, new_indent

def format_file(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
        
    lines = content.splitlines()
    formatted_lines = []
    indent_level = 0
    
    # Standardize package and imports block
    # Clear consecutive empty lines
    last_was_empty = False
    
    for line in lines:
        stripped = line.strip()
        if not stripped:
            if not last_was_empty:
                formatted_lines.append("")
                last_was_empty = True
            continue
            
        last_was_empty = False
        formatted, indent_level = clean_and_format_line(line, indent_level)
        formatted_lines.append(formatted)
        
    new_content = "\n".join(formatted_lines) + "\n"
    
    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        return True
    return False

def main():
    root = "."
    formatted_count = 0
    java_files_count = 0
    
    for dirpath, _, filenames in os.walk(root):
        if any(ignored in dirpath for ignored in [".git", ".github", "node_modules", "scripts", "dashboard"]):
            continue
        for f in filenames:
            if f.endswith(".java"):
                filepath = os.path.join(dirpath, f)
                java_files_count += 1
                try:
                    if format_file(filepath):
                        formatted_count += 1
                except Exception as e:
                    print(f"Error formatting {filepath}: {e}")
                    
    print(f"Format pass complete. Scanned {java_files_count} files, formatted {formatted_count} files.")

if __name__ == "__main__":
    main()
