import os
import subprocess

def test_compilation():
    root = "."
    java_files = []
    for dirpath, _, filenames in os.walk(root):
        # Ignore target directories or typical ignores
        if any(ignored in dirpath for ignored in [".git", ".github", "node_modules", "scripts"]):
            continue
        for f in filenames:
            if f.endswith(".java"):
                java_files.append(os.path.join(dirpath, f))
    
    print(f"Found {len(java_files)} Java files to compile.")
    failures = []
    
    for jf in java_files:
        # Run javac on the file
        print(f"Compiling {jf}...", end=" ")
        res = subprocess.run(["javac", jf], capture_output=True, text=True)
        if res.returncode != 0:
            print("FAILED")
            failures.append((jf, res.stderr))
            # Delete any generated .class file just in case it created something, but on failure it shouldn't
        else:
            print("OK")
            # Clean up compiled .class files
            class_file = jf.replace(".java", ".class")
            if os.path.exists(class_file):
                os.remove(class_file)
                
    # Also clean up any other .class files in the directory tree
    for dirpath, _, filenames in os.walk(root):
        for f in filenames:
            if f.endswith(".class"):
                try:
                    os.remove(os.path.join(dirpath, f))
                except:
                    pass
                    
    print("\n--- Summary ---")
    if failures:
        print(f"{len(failures)} files failed to compile:")
        for jf, err in failures:
            print(f"\nFile: {jf}")
            print(err)
    else:
        print("All files compiled successfully!")

if __name__ == "__main__":
    test_compilation()
