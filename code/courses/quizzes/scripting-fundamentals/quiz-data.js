const questionBank = [
  {
    "question": "Which UNIX I/O stream is the default destination for error messages?",
    "answers": [
      { "text": "stdin", "correct": false },
      { "text": "stdout", "correct": false },
      { "text": "stderr", "correct": true },
      { "text": "/dev/null", "correct": false }
    ]
  },
  {
    "question": "What operator redirects standard output to a file, overwriting its contents?",
    "answers": [
      { "text": "1>>", "correct": false },
      { "text": "1>", "correct": true },
      { "text": "&>", "correct": false },
      { "text": ">", "correct": false }
    ]
  },
  {
    "question": "How do you redirect both stdout and stderr to the same file in Bash?",
    "answers": [
      { "text": ">file 2>file", "correct": false },
      { "text": "&> file", "correct": false },
      { "text": "1>file 2>&1", "correct": false },
      { "text": "Both B and C", "correct": true }
    ]
  },
  {
    "question": "Which file does Bash parse when started as a non-login interactive shell?",
    "answers": [
      { "text": "~/.bash_profile", "correct": false },
      { "text": "~/.bashrc", "correct": true },
      { "text": "~/.profile", "correct": false },
      { "text": "~/.bash_login", "correct": false }
    ]
  },
  {
    "question": "A script begins with #!/usr/bin/env bash. What is this line called?",
    "answers": [
      { "text": "Interpreter directive", "correct": false },
      { "text": "Comment line", "correct": false },
      { "text": "Shebang", "correct": true },
      { "text": "Fork command", "correct": false }
    ]
  },
  {
    "question": "To make a shell script runnable, you must:",
    "answers": [
      { "text": "Convert it to binary", "correct": false },
      { "text": "Add execution permission", "correct": true },
      { "text": "Rename it with a .sh extension", "correct": false },
      { "text": "Source it in .bashrc", "correct": false }
    ]
  },
  {
    "question": "By default, all three I/O streams (stdin, stdout, stderr) are connected to:",
    "answers": [
      { "text": "/dev/null", "correct": false },
      { "text": "A pipe", "correct": false },
      { "text": "The user’s terminal", "correct": true },
      { "text": "The system log", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a valid Bash startup file for a login shell?",
    "answers": [
      { "text": "~/.bash_profile", "correct": false },
      { "text": "~/.bash_logout", "correct": false },
      { "text": "~/.bashrc", "correct": true },
      { "text": "~/.bash_login", "correct": false }
    ]
  },
  {
    "question": "In a sample script, lines beginning with # (except #!) are:",
    "answers": [
      { "text": "Conditional tests", "correct": false },
      { "text": "Comments", "correct": true },
      { "text": "Redirection operators", "correct": false },
      { "text": "Syntax errors", "correct": false }
    ]
  },
  {
    "question": "What must you watch out for when editing a script in a Windows editor?",
    "answers": [
      { "text": "DOS/Windows line endings", "correct": true },
      { "text": "Removal of the shebang", "correct": false },
      { "text": "Changing file encoding to UTF-16", "correct": false },
      { "text": "Automatic compression", "correct": false }
    ]
  },
  {
    "question": "Which command creates a new shell instance to run the script?",
    "answers": [
      { "text": "exec /bin/bash", "correct": false },
      { "text": "The shebang line at the top", "correct": true },
      { "text": "source script.sh", "correct": false },
      { "text": "fork script.sh", "correct": false }
    ]
  },
  {
    "question": "To filter unwanted standard error output into oblivion, you redirect stderr to:",
    "answers": [
      { "text": "/dev/stdout", "correct": false },
      { "text": "/dev/tty", "correct": false },
      { "text": "/dev/null", "correct": true },
      { "text": "/dev/random", "correct": false }
    ]
  },
  {
    "question": "Which Bash feature allows complex pattern matching in scripts?",
    "answers": [
      { "text": "POSIX and Perl–style regular expressions", "correct": true },
      { "text": "AWK processing", "correct": false },
      { "text": "XSL transformations", "correct": false },
      { "text": "Pcregrep only", "correct": false }
    ]
  },
  {
    "question": "Which file runs when you log out of a Bash login shell?",
    "answers": [
      { "text": "~/.bashrc", "correct": false },
      { "text": "~/.bash_logout", "correct": true },
      { "text": "/etc/profile", "correct": false },
      { "text": "~/.profile", "correct": false }
    ]
  },
  {
    "question": "A script file is fundamentally what type of file?",
    "answers": [
      { "text": "Binary", "correct": false },
      { "text": "Library", "correct": false },
      { "text": "Executable text", "correct": true },
      { "text": "Archive", "correct": false }
    ]
  },
  {
    "question": "If you run a script with no startup parsing, Bash is operating as a:",
    "answers": [
      { "text": "Login shell", "correct": false },
      { "text": "Non-login interactive shell", "correct": false },
      { "text": "Scripting shell", "correct": true },
      { "text": "Restricted shell", "correct": false }
    ]
  },
  {
    "question": "Default shell on most Linux distributions is:",
    "answers": [
      { "text": "tcsh", "correct": false },
      { "text": "zsh", "correct": false },
      { "text": "Bash", "correct": true },
      { "text": "dash", "correct": false }
    ]
  },
  {
    "question": "To redirect standard input from a file, you use:",
    "answers": [
      { "text": "0> file", "correct": false },
      { "text": "< file", "correct": true },
      { "text": "file <", "correct": false },
      { "text": "1< file", "correct": false }
    ]
  },
  {
    "question": "When no shebang is present, invoking a script directly will:",
    "answers": [
      { "text": "Always use Bash", "correct": false },
      { "text": "Fail with “command not found”", "correct": false },
      { "text": "Use the user’s current shell", "correct": true },
      { "text": "Require chmod +x twice", "correct": false }
    ]
  },
  {
    "question": "Which command sets permissions on files in the sample script?",
    "answers": [
      { "text": "chmod 740 *", "correct": true },
      { "text": "chown user:user *", "correct": false },
      { "text": "umask 740", "correct": false },
      { "text": "setperm 740 *", "correct": false }
    ]
  },
  {
    "question": "Every UNIX program has three I/O streams available.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "By default, stderr is merged with stdout.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The #! line must always specify an absolute path to the interpreter.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Bash parses ~/.bashrc for login shells.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A shell script must be set executable to run directly.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Lines beginning with # are interpreted as commands.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Redirecting with &> sends both stdout and stderr to the given file.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Editing a script in Windows automatically preserves correct line endings.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Bash supports both POSIX and Perl‐style regular expression matching.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Bash will read no startup files when run as a scripting shell.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "/dev/null can be used to discard unwanted output.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The default shell on most Linux distributions is tcsh.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "~/.bash_login is parsed before ~/.bash_profile for login shells.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A shell script is a binary file.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Standard input can be redirected using 1< input.txt.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Comments in Bash scripts begin with //.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Bash on Windows can be run under Cygwin.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "To combine streams, you can use 2>&1.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "chmod +x script.sh makes a file executable.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The exec builtin is required to start a new shell for scripts.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "You want to save only error messages from ls into errors.log. Which command do you use?",
    "answers": [
      { "text": "ls > errors.log", "correct": false },
      { "text": "ls 2> errors.log", "correct": true },
      { "text": "ls &> errors.log", "correct": false },
      { "text": "ls 1> errors.log", "correct": false }
    ]
  },
  {
    "question": "After editing deploy.sh on Windows, your script fails with “bad interpreter” errors. What should you do?",
    "answers": [
      { "text": "Run dos2unix deploy.sh", "correct": true },
      { "text": "Rename to deploy.bat", "correct": false },
      { "text": "Remove execute permission", "correct": false },
      { "text": "Prepend #!/bin/sh again", "correct": false }
    ]
  },
  {
    "question": "A teammate writes #!/bin/bash but forgets chmod +x. Running ./build.sh yields “Permission denied.” Why?",
    "answers": [
      { "text": "Wrong shebang path", "correct": false },
      { "text": "Script not executable", "correct": true },
      { "text": "Missing .sh extension", "correct": false },
      { "text": "Bash not installed", "correct": false }
    ]
  },
  {
    "question": "You need both output streams in the same file output.txt. Which will work?",
    "answers": [
      { "text": "cmd > output.txt 2>&1", "correct": false },
      { "text": "cmd 1> output.txt 2>", "correct": false },
      { "text": "cmd &>output.txt", "correct": false },
      { "text": "Both A and C", "correct": true }
    ]
  },
  {
    "question": "You want to test a quick snippet in your current shell, not a new one. You should:",
    "answers": [
      { "text": "chmod +x snippet.sh and ./snippet.sh", "correct": false },
      { "text": "bash snippet.sh", "correct": false },
      { "text": "source snippet.sh", "correct": true },
      { "text": "exec snippet.sh", "correct": false }
    ]
  },
  {
    "question": "When logging into a remote server, you want custom aliases to load. Which file should you edit?",
    "answers": [
      { "text": "~/.bashrc", "correct": false },
      { "text": "~/.bash_profile", "correct": true },
      { "text": "~/.bash_logout", "correct": false },
      { "text": "/etc/profile", "correct": false }
    ]
  },
  {
    "question": "You create a script without any shebang. Executing it invokes your current shell. This is because:",
    "answers": [
      { "text": "Bash defaults to /bin/sh", "correct": false },
      { "text": "No interpreter directive so your login shell runs it", "correct": true },
      { "text": "It falls back to Perl", "correct": false },
      { "text": "It must be sourced", "correct": false }
    ]
  },
  {
    "question": "To quietly discard both normal and error output from backup.sh, you run:",
    "answers": [
      { "text": "./backup.sh > /dev/null", "correct": false },
      { "text": "./backup.sh &> /dev/null", "correct": true },
      { "text": "./backup.sh 2> /dev/null", "correct": false },
      { "text": "./backup.sh | /dev/null", "correct": false }
    ]
  },
  {
    "question": "You want a script to fail immediately on “command not found” errors. Which line helps?",
    "answers": [
      { "text": "set -e", "correct": false },
      { "text": "set +x", "correct": false },
      { "text": "#!/bin/bash -u", "correct": false },
      { "text": "#!/bin/bash -e", "correct": true }
    ]
  },
  {
    "question": "A startup script for non-login shells isn’t working. You forgot to:",
    "answers": [
      { "text": "Edit ~/.bash_logout", "correct": false },
      { "text": "Include executable permission on ~/.bashrc", "correct": false },
      { "text": "Source ~/.bashrc from ~/.bash_profile", "correct": true },
      { "text": "Add a shebang to ~/.bashrc", "correct": false }
    ]
  }
  
];

