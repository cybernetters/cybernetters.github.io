const questionBank = [
  {
    "question": "What is the recommended minimum RAM for installing a UNIX system?",
    "answers": [
      { "text": "1 GB", "correct": false },
      { "text": "2 GB", "correct": true },
      { "text": "4 GB", "correct": false },
      { "text": "6 GB", "correct": false },
      { "text": "8 GB", "correct": false }
    ]
  },
  {
    "question": "Which of the following hard drive interfaces uses /dev/nvmeX for device naming?",
    "answers": [
      { "text": "PATA", "correct": false },
      { "text": "SATA", "correct": false },
      { "text": "SCSI", "correct": false },
      { "text": "NVMe", "correct": true },
      { "text": "SAS", "correct": false }
    ]
  },
  {
    "question": "In Linux partitioning, what is the typical purpose of a /var partition?",
    "answers": [
      { "text": "Executable files", "correct": false },
      { "text": "Logging and spooling", "correct": true },
      { "text": "User directories", "correct": false },
      { "text": "Running processes", "correct": false },
      { "text": "Temporary files", "correct": false }
    ]
  },
  {
    "question": "Which command can display the current date and time on a UNIX system?",
    "answers": [
      { "text": "who", "correct": false },
      { "text": "date", "correct": true },
      { "text": "time", "correct": false },
      { "text": "cal", "correct": false },
      { "text": "ls", "correct": false }
    ]
  },
  {
    "question": "What is the main role of a login shell in UNIX?",
    "answers": [
      { "text": "Manage user directories", "correct": false },
      { "text": "Parse startup scripts", "correct": true },
      { "text": "Log user activity", "correct": false },
      { "text": "Interact with hardware", "correct": false },
      { "text": "Display user credentials", "correct": false }
    ]
  },
  {
    "question": "What does the uname -a command do?",
    "answers": [
      { "text": "Displays user information", "correct": false },
      { "text": "Displays system information", "correct": true },
      { "text": "Clears the terminal", "correct": false },
      { "text": "Resets terminal settings", "correct": false },
      { "text": "Lists files in a directory", "correct": false }
    ]
  },
  {
    "question": "Which shell is considered the standard scripting shell for most Linux distributions?",
    "answers": [
      { "text": "ZSH", "correct": false },
      { "text": "FISH", "correct": false },
      { "text": "BASH", "correct": true },
      { "text": "Korn Shell", "correct": false },
      { "text": "C Shell", "correct": false }
    ]
  },
  {
    "question": "What does the command shutdown -h +10 do?",
    "answers": [
      { "text": "Halts the OS in 10 minutes", "correct": true },
      { "text": "Powers off the system immediately", "correct": false },
      { "text": "Reboots the system in 10 minutes", "correct": false },
      { "text": "Cancels a scheduled shutdown", "correct": false },
      { "text": "Halts the OS immediately", "correct": false }
    ]
  },
  {
    "question": "Which of the following sections in manual pages is dedicated to commands executable only by the root user?",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "8", "correct": true },
      { "text": "9", "correct": false }
    ]
  },
  {
    "question": "Which partition is mandatory for Linux systems with UEFI firmware?",
    "answers": [
      { "text": "/boot", "correct": false },
      { "text": "/var", "correct": false },
      { "text": "/swap", "correct": false },
      { "text": "/home", "correct": false },
      { "text": "/boot/efi", "correct": true }
    ]
  },
  {
    "question": "Which command can you use to append output to a file in UNIX?",
    "answers": [
      { "text": ">", "correct": false },
      { "text": ">>", "correct": true },
      { "text": "<", "correct": false },
      { "text": "<<", "correct": false },
      { "text": "<<<", "correct": false }
    ]
  },
  {
    "question": "What type of shell is typically used to execute scripts?",
    "answers": [
      { "text": "Login shell", "correct": false },
      { "text": "Interactive shell", "correct": false },
      { "text": "Non-interactive shell", "correct": true },
      { "text": "GUI shell", "correct": false },
      { "text": "Root shell", "correct": false }
    ]
  },
  {
    "question": "What does the command whoami display?",
    "answers": [
      { "text": "Current user’s login name", "correct": true },
      { "text": "List of logged-in users", "correct": false },
      { "text": "User IDs and Group IDs", "correct": false },
      { "text": "User’s home directory", "correct": false },
      { "text": "Current user’s tasks", "correct": false }
    ]
  },
  {
    "question": "What does the pipe (|) metacharacter do in UNIX?",
    "answers": [
      { "text": "Redirects standard input", "correct": false },
      { "text": "Appends output to a file", "correct": false },
      { "text": "Chains the output of one command to another", "correct": true },
      { "text": "Displays the variable value", "correct": false },
      { "text": "Escapes special characters", "correct": false }
    ]
  },
  {
    "question": "Which of the following commands will reboot the system immediately?",
    "answers": [
      { "text": "poweroff", "correct": false },
      { "text": "shutdown -h now", "correct": false },
      { "text": "reboot", "correct": true },
      { "text": "halt", "correct": false },
      { "text": "shutdown -P now", "correct": false }
    ]
  },
  {
    "question": "What is the function of the man command in Linux?",
    "answers": [
      { "text": "Reset terminal settings", "correct": false },
      { "text": "Display manual pages for commands", "correct": true },
      { "text": "Search for files in a directory", "correct": false },
      { "text": "Display current directory path", "correct": false },
      { "text": "List available system updates", "correct": false }
    ]
  },
  {
    "question": "Which directory in UNIX contains installed applications?",
    "answers": [
      { "text": "/bin", "correct": false },
      { "text": "/usr", "correct": true },
      { "text": "/home", "correct": false },
      { "text": "/var", "correct": false },
      { "text": "/tmp", "correct": false }
    ]
  },
  {
    "question": "What does the superuser account in UNIX typically allow?",
    "answers": [
      { "text": "Limited application execution", "correct": false },
      { "text": "Root-level access to the system", "correct": true },
      { "text": "Restricted filesystem modifications", "correct": false },
      { "text": "Creation of root-equivalent accounts", "correct": false },
      { "text": "GUI access only", "correct": false }
    ]
  },
  {
    "question": "Which command lists currently logged-in users and their tasks?",
    "answers": [
      { "text": "whoami", "correct": false },
      { "text": "w", "correct": true },
      { "text": "id", "correct": false },
      { "text": "ls", "correct": false },
      { "text": "cal", "correct": false }
    ]
  },
  {
    "question": "What shell metacharacter prevents special interpretation by enclosing content?",
    "answers": [
      { "text": "*", "correct": false },
      { "text": "$", "correct": false },
      { "text": "' '", "correct": true },
      { "text": ">", "correct": false },
      { "text": "|", "correct": false }
    ]
  },
  {
    "question": "The minimum recommended CPU for UNIX installation is a single-core 64-bit processor.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The /tmp directory in UNIX is used for temporary files.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SATA drives in Linux are typically identified as /dev/hda, /dev/hdb, etc.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "GUID Partition Table (GPT) supports hard drives larger than 2 TB.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A /var partition in UNIX is optional and never required for system functionality.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The BASH shell is the default shell on most Linux distributions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ls command is used to display currently logged-in users.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Manual pages in Linux are accessed using the man command.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The /usr directory in UNIX contains configuration information.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The shutdown -r now command reboots the system immediately.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Partition names such as /dev/sda1 refer to individual partitions on a drive.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Single quotation marks in UNIX protect metacharacters from being interpreted by the shell.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Linux can support both interactive and non-interactive shell environments.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The uname -a command displays user account information.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Logical Volume Manager (LVM) allows for more flexible partition management.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A terminal is a graphical interface for interacting with the kernel.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The root user prompt in UNIX is represented by a $ symbol.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "You can cancel a scheduled shutdown using the shutdown -c command.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The superuser account in UNIX allows multiple root-equivalent accounts by default.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Shell scripting simplifies the administration of UNIX systems.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  }
];

