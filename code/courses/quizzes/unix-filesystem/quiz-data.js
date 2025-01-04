const questionBank = [
  {
    "question": "What is the purpose of the fsck command in UNIX?",
    "answers": [
      { "text": "Mount a filesystem", "correct": false },
      { "text": "Check a filesystem for errors", "correct": true },
      { "text": "Remove a filesystem", "correct": false },
      { "text": "List mounted filesystems", "correct": false },
      { "text": "Update filesystem permissions", "correct": false }
    ]
  },
  {
    "question": "What does the SUID permission bit do when set on an executable file?",
    "answers": [
      { "text": "Allows only the owner to execute the file", "correct": false },
      { "text": "Makes the executor the file owner during execution", "correct": true },
      { "text": "Prevents the file from being deleted", "correct": false },
      { "text": "Changes the group ownership dynamically", "correct": false },
      { "text": "Applies to directory permissions only", "correct": false }
    ]
  },
  {
    "question": "What type of file in UNIX allows one process to pass information to another?",
    "answers": [
      { "text": "Binary file", "correct": false },
      { "text": "Special device file", "correct": false },
      { "text": "Named pipe file", "correct": true },
      { "text": "Text file", "correct": false },
      { "text": "Socket file", "correct": false }
    ]
  },
  {
    "question": "Which of the following permissions are represented by rwxr-xr--?",
    "answers": [
      { "text": "Read/write/execute for all users", "correct": false },
      { "text": "Read/write for owner, read for group, and none for others", "correct": false },
      { "text": "Read/write/execute for owner, read/execute for group, and read for others", "correct": true },
      { "text": "Read/write for group and others, and execute for owner", "correct": false },
      { "text": "No permissions for others", "correct": false }
    ]
  },
  {
    "question": "What does the umount command do in UNIX?",
    "answers": [
      { "text": "Mount a filesystem", "correct": false },
      { "text": "Unmount a filesystem", "correct": true },
      { "text": "Format a filesystem", "correct": false },
      { "text": "List mounted filesystems", "correct": false },
      { "text": "Change filesystem permissions", "correct": false }
    ]
  },
  {
    "question": "Which type of file is used for remote process communication in UNIX?",
    "answers": [
      { "text": "Text file", "correct": false },
      { "text": "Socket file", "correct": true },
      { "text": "Binary file", "correct": false },
      { "text": "Named pipe file", "correct": false },
      { "text": "Hard link file", "correct": false }
    ]
  },
  {
    "question": "What is the default permission set for a newly created file in UNIX?",
    "answers": [
      { "text": "rwxr-xr-x", "correct": false },
      { "text": "rw-rw-r--", "correct": false },
      { "text": "rw-rw-rw-", "correct": true },
      { "text": "rwxrwxrwx", "correct": false },
      { "text": "r--r--r--", "correct": false }
    ]
  },
  {
    "question": "What command is used to change the owner of a file in UNIX?",
    "answers": [
      { "text": "chmod", "correct": false },
      { "text": "chgrp", "correct": false },
      { "text": "chown", "correct": true },
      { "text": "ls", "correct": false },
      { "text": "mv", "correct": false }
    ]
  },
  {
    "question": "Which character in a wildcard expression matches exactly one character?",
    "answers": [
      { "text": "*", "correct": false },
      { "text": "?", "correct": true },
      { "text": "[", "correct": false },
      { "text": "{", "correct": false },
      { "text": "!", "correct": false }
    ]
  },
  {
    "question": "What does the df command display?",
    "answers": [
      { "text": "Disk free space on mounted filesystems", "correct": true },
      { "text": "Disk usage by directories", "correct": false },
      { "text": "Filesystem errors", "correct": false },
      { "text": "Inode usage", "correct": false },
      { "text": "Mounted devices and types", "correct": false }
    ]
  },
  {
    "question": "What is the role of /etc/fstab in UNIX?",
    "answers": [
      { "text": "Displays file permissions", "correct": false },
      { "text": "Lists filesystems for automatic mounting", "correct": true },
      { "text": "Stores user account information", "correct": false },
      { "text": "Configures system boot settings", "correct": false },
      { "text": "Lists installed software packages", "correct": false }
    ]
  },
  {
    "question": "How is a hard link different from a symbolic link?",
    "answers": [
      { "text": "Hard links can span filesystems, symbolic links cannot", "correct": false },
      { "text": "Symbolic links can point to directories, hard links cannot", "correct": true },
      { "text": "Hard links have unique inode numbers, symbolic links do not", "correct": false },
      { "text": "Symbolic links replicate the file content, hard links do not", "correct": false },
      { "text": "Hard links do not retain permissions, symbolic links do", "correct": false }
    ]
  },
  {
    "question": "Which command displays the disk usage of a directory and its contents?",
    "answers": [
      { "text": "df", "correct": false },
      { "text": "ls", "correct": false },
      { "text": "du", "correct": true },
      { "text": "mkdir", "correct": false },
      { "text": "rm", "correct": false }
    ]
  },
  {
    "question": "What does the sticky bit do when applied to a directory?",
    "answers": [
      { "text": "Prevents modification of the directory's files", "correct": false },
      { "text": "Ensures only the owner of a file can delete it", "correct": true },
      { "text": "Grants write permissions to all users", "correct": false },
      { "text": "Allows group members to execute files", "correct": false },
      { "text": "Converts the directory into a hidden directory", "correct": false }
    ]
  },
  {
    "question": "What happens when a symbolic link is deleted in UNIX?",
    "answers": [
      { "text": "The original file is also deleted", "correct": false },
      { "text": "The original file remains unaffected", "correct": true },
      { "text": "The entire directory containing the link is removed", "correct": false },
      { "text": "Permissions of the original file are reset", "correct": false },
      { "text": "All related files are unlinked", "correct": false }
    ]
  },
  {
    "question": "What does the lsblk --fs command display?",
    "answers": [
      { "text": "Filesystem type and structure", "correct": true },
      { "text": "Disk usage statistics", "correct": false },
      { "text": "Available system memory", "correct": false },
      { "text": "Currently active processes", "correct": false },
      { "text": "Installed packages", "correct": false }
    ]
  },
  {
    "question": "What is the significance of the -h option in the df command?",
    "answers": [
      { "text": "It formats output in human-readable sizes", "correct": true },
      { "text": "It summarizes the output", "correct": false },
      { "text": "It displays hidden filesystems", "correct": false },
      { "text": "It checks for filesystem errors", "correct": false },
      { "text": "It mounts the specified filesystem", "correct": false }
    ]
  },
  {
    "question": "What UNIX file permission corresponds to the numeric value 2?",
    "answers": [
      { "text": "Read", "correct": false },
      { "text": "Write", "correct": true },
      { "text": "Execute", "correct": false },
      { "text": "Read/Write", "correct": false },
      { "text": "Read/Write/Execute", "correct": false }
    ]
  },
  {
    "question": "What does the find command do in UNIX?",
    "answers": [
      { "text": "Searches for a file or directory matching specific criteria", "correct": true },
      { "text": "Displays system logs", "correct": false },
      { "text": "Compares two directories", "correct": false },
      { "text": "Mounts a new filesystem", "correct": false },
      { "text": "Executes binary files in memory", "correct": false }
    ]
  },
  {
    "question": "Which of the following commands is used to display file ownership and permissions?",
    "answers": [
      { "text": "chmod", "correct": false },
      { "text": "ls -l", "correct": true },
      { "text": "df -h", "correct": false },
      { "text": "du -s", "correct": false },
      { "text": "fsck", "correct": false }
    ]
  }
  
];

