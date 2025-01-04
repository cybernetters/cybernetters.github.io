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
  },
  {
    "question": "Which of the following commands is used to recursively delete a directory and its contents without confirmation?",
    "answers": [
      { "text": "rm -f", "correct": false },
      { "text": "rmdir -rf", "correct": false },
      { "text": "rm -Rf", "correct": true },
      { "text": "rmdir -f", "correct": false },
      { "text": "rm --recursive", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the tune2fs -i command?",
    "answers": [
      { "text": "Check for bad blocks", "correct": false },
      { "text": "Set interval for forced filesystem checks", "correct": true },
      { "text": "Display mounted filesystems", "correct": false },
      { "text": "Change ownership of a filesystem", "correct": false },
      { "text": "Remove bad blocks from a filesystem", "correct": false }
    ]
  },
  {
    "question": "What does the ln command do?",
    "answers": [
      { "text": "Creates symbolic links only", "correct": false },
      { "text": "Creates hard links only", "correct": false },
      { "text": "Creates either symbolic or hard links", "correct": true },
      { "text": "Displays links in a directory", "correct": false },
      { "text": "Deletes symbolic links", "correct": false }
    ]
  },
  {
    "question": "What does the chmod a+x command do?",
    "answers": [
      { "text": "Adds execute permission for all users", "correct": true },
      { "text": "Adds execute permission for the owner only", "correct": false },
      { "text": "Removes execute permission from all users", "correct": false },
      { "text": "Removes execute permission from the owner only", "correct": false },
      { "text": "Displays execute permissions for all users", "correct": false }
    ]
  },
  {
    "question": "What is the default permission for new directories in UNIX?",
    "answers": [
      { "text": "rwxr-xr-x", "correct": false },
      { "text": "rw-rw-rw-", "correct": false },
      { "text": "rwxrwxrwx", "correct": true },
      { "text": "rwxrwx---", "correct": false },
      { "text": "rw-r--r--", "correct": false }
    ]
  },
  {
    "question": "Which of the following is true about the umask command?",
    "answers": [
      { "text": "It adds permissions to new files", "correct": false },
      { "text": "It displays or sets default file permissions", "correct": true },
      { "text": "It removes ownership from files", "correct": false },
      { "text": "It sets quotas for disk usage", "correct": false },
      { "text": "It changes the owner of a file", "correct": false }
    ]
  },
  {
    "question": "What type of file is represented by the /dev directory?",
    "answers": [
      { "text": "Text files", "correct": false },
      { "text": "Device files", "correct": true },
      { "text": "Socket files", "correct": false },
      { "text": "Named pipe files", "correct": false },
      { "text": "Configuration files", "correct": false }
    ]
  },
  {
    "question": "What is the maximum length for file names in UNIX?",
    "answers": [
      { "text": "128 characters", "correct": false },
      { "text": "255 characters", "correct": true },
      { "text": "512 characters", "correct": false },
      { "text": "1024 characters", "correct": false },
      { "text": "Unlimited", "correct": false }
    ]
  },
  {
    "question": "What command allows viewing the contents of a directory in octal format?",
    "answers": [
      { "text": "ls -o", "correct": false },
      { "text": "od", "correct": true },
      { "text": "strings", "correct": false },
      { "text": "cat -o", "correct": false },
      { "text": "view", "correct": false }
    ]
  },
  {
    "question": "Which of the following commands is used to search for a string in a file?",
    "answers": [
      { "text": "find", "correct": false },
      { "text": "locate", "correct": false },
      { "text": "grep", "correct": true },
      { "text": "search", "correct": false },
      { "text": "scan", "correct": false }
    ]
  },
  {
    "question": "What is a soft link in UNIX?",
    "answers": [
      { "text": "A link with identical inode as the target", "correct": false },
      { "text": "A pointer to the actual file", "correct": true },
      { "text": "A duplicate copy of the file", "correct": false },
      { "text": "A renamed version of the original file", "correct": false },
      { "text": "A file with updated permissions", "correct": false }
    ]
  },
  {
    "question": "What option of the du command summarizes the output?",
    "answers": [
      { "text": "-h", "correct": false },
      { "text": "-s", "correct": true },
      { "text": "-d", "correct": false },
      { "text": "-r", "correct": false },
      { "text": "-a", "correct": false }
    ]
  },
  {
    "question": "What does the command ls | more accomplish?",
    "answers": [
      { "text": "Redirects the output to a file named 'more'", "correct": false },
      { "text": "Sends the output of ls to the more command for paged display", "correct": true },
      { "text": "Displays more details about files in the directory", "correct": false },
      { "text": "Lists files and sorts them in ascending order", "correct": false },
      { "text": "Searches files for the string 'more'", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of the e2fsck command?",
    "answers": [
      { "text": "Format ext2, ext3, or ext4 filesystems", "correct": false },
      { "text": "Check and repair ext2, ext3, or ext4 filesystems", "correct": true },
      { "text": "Mount ext2, ext3, or ext4 filesystems", "correct": false },
      { "text": "Display ext2, ext3, or ext4 filesystem types", "correct": false },
      { "text": "Monitor disk quotas on ext2, ext3, or ext4 filesystems", "correct": false }
    ]
  },
  {
    "question": "Which of the following is true about hard links?",
    "answers": [
      { "text": "They have the same inode number as the original file", "correct": true },
      { "text": "They can link to directories", "correct": false },
      { "text": "They can cross filesystem boundaries", "correct": false },
      { "text": "They lose the original file's permissions", "correct": false },
      { "text": "They only contain a pointer to the original file's location", "correct": false }
    ]
  },
  {
    "question": "What does the mount command do?",
    "answers": [
      { "text": "Formats a new filesystem", "correct": false },
      { "text": "Mounts a device to a specified directory", "correct": true },
      { "text": "Displays all users logged into the system", "correct": false },
      { "text": "Lists available devices for mounting", "correct": false },
      { "text": "Transfers ownership of a mounted directory", "correct": false }
    ]
  },
  {
    "question": "What does the chmod 755 command set?",
    "answers": [
      { "text": "Read/write/execute for owner, and read/execute for others", "correct": true },
      { "text": "Read/write for all users", "correct": false },
      { "text": "Read/write for owner and group, no permissions for others", "correct": false },
      { "text": "Execute only for all users", "correct": false },
      { "text": "Read/write/execute for owner, and no permissions for others", "correct": false }
    ]
  },
  {
    "question": "What is the function of the lsblk command?",
    "answers": [
      { "text": "Displays block devices and their mount points", "correct": true },
      { "text": "Lists all users in the system", "correct": false },
      { "text": "Checks for bad blocks in a device", "correct": false },
      { "text": "Monitors filesystem activity", "correct": false },
      { "text": "Lists directories recursively", "correct": false }
    ]
  },
  {
    "question": "What permission is required for a user to enter and work with a directory?",
    "answers": [
      { "text": "Read", "correct": false },
      { "text": "Write", "correct": false },
      { "text": "Execute", "correct": true },
      { "text": "Read/Write", "correct": false },
      { "text": "None", "correct": false }
    ]
  },
  {
    "question": "Which file holds a list of filesystems to be mounted automatically at boot?",
    "answers": [
      { "text": "/etc/mount", "correct": false },
      { "text": "/etc/fstab", "correct": true },
      { "text": "/etc/boot", "correct": false },
      { "text": "/etc/system", "correct": false },
      { "text": "/etc/files", "correct": false }
    ]
  },
  {
    "question": "In UNIX, everything is managed as a file, including directories and devices.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The sudo rm -Rf / command is a safe way to clean up unnecessary files from the root directory.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Soft links can span across filesystems, while hard links cannot.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The chmod command is used to change the owner of a file.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A parent directory in UNIX is the directory one step closer to the root directory.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The sticky bit allows only the file's owner to delete or modify files in a directory.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ls command is used to display the size of a directory and its contents.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The default permission for a new file in UNIX is rw-rw-rw-.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Mounting a filesystem is necessary before it can be used in UNIX.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The fsck command can be run on mounted filesystems to check for errors.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The umask command is used to configure default file and directory permissions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Binary files in UNIX store configuration information.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The df command displays free disk space on mounted filesystems.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A subdirectory is a directory that resides within another directory.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The find command is used to search for files and directories based on specific criteria.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Named pipe files allow inter-process communication in UNIX.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The SUID bit applies to directories and files.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The mount command is used to unmount filesystems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Default permissions for directories are more restrictive than for files in UNIX.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The ln -s command creates symbolic links in UNIX.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You want to prevent a user from exceeding their disk quota for more than seven days. Which type of disk quota should you configure?",
    "answers": [
      { "text": "Hard limit", "correct": false },
      { "text": "Soft limit", "correct": true },
      { "text": "Sticky bit", "correct": false },
      { "text": "Temporary limit", "correct": false },
      { "text": "Root quota", "correct": false }
    ]
  },
  {
    "question": "A user is trying to delete a file in a shared directory but receives a permission denied error. The directory has the sticky bit set. What is the most likely cause?",
    "answers": [
      { "text": "The file is owned by another user", "correct": true },
      { "text": "The user lacks execute permissions on the file", "correct": false },
      { "text": "The sticky bit prevents all deletions", "correct": false },
      { "text": "The file is locked by another process", "correct": false },
      { "text": "The directory is full", "correct": false }
    ]
  },
  {
    "question": "You need to link multiple configuration files to a single location without duplicating their contents. Which type of link should you use?",
    "answers": [
      { "text": "Hard link", "correct": false },
      { "text": "Symbolic link", "correct": true },
      { "text": "Named pipe", "correct": false },
      { "text": "File alias", "correct": false },
      { "text": "Directory shortcut", "correct": false }
    ]
  },
  {
    "question": "A user reports that their file permissions keep changing unexpectedly. Upon investigation, you find the umask value is incorrectly set. What would you recommend to fix this?",
    "answers": [
      { "text": "Use chmod to reset permissions manually", "correct": false },
      { "text": "Modify the umask value in their profile configuration", "correct": true },
      { "text": "Set sticky bits on the files", "correct": false },
      { "text": "Recreate the affected files", "correct": false },
      { "text": "Use the fsck command to check the filesystem", "correct": false }
    ]
  },
  {
    "question": "You need to mount a new USB drive on your UNIX system. What is the correct command to mount it on /media/usb?",
    "answers": [
      { "text": "mount /dev/sda1 /media/usb", "correct": true },
      { "text": "mount /media/usb /dev/sda1", "correct": false },
      { "text": "mount -d /media/usb /dev/sda1", "correct": false },
      { "text": "umount /dev/sda1 /media/usb", "correct": false },
      { "text": "mount /media /usb", "correct": false }
    ]
  },
  {
    "question": "A user wants to find all .txt files in the /home directory that contain the string 'error'. What command should they use?",
    "answers": [
      { "text": "find /home -name '*.txt' | grep error", "correct": false },
      { "text": "grep 'error' /home/*.txt", "correct": false },
      { "text": "find /home -name '*.txt' -exec grep 'error' {} \\;", "correct": true },
      { "text": "ls /home | grep 'error'", "correct": false },
      { "text": "cat /home/*.txt | grep error", "correct": false }
    ]
  },
  {
    "question": "You are tasked with configuring a directory such that only the owner can delete files within it, even if others have write permissions. What should you do?",
    "answers": [
      { "text": "Apply a sticky bit to the directory", "correct": true },
      { "text": "Use chmod 777 on the directory", "correct": false },
      { "text": "Change the group ownership of the directory", "correct": false },
      { "text": "Set the SUID bit on the directory", "correct": false },
      { "text": "Use the umask command to adjust default permissions", "correct": false }
    ]
  },
  {
    "question": "You need to recover a corrupted ext4 filesystem. Which command will you use?",
    "answers": [
      { "text": "tune2fs", "correct": false },
      { "text": "e2fsck", "correct": false },
      { "text": "fsck.ext4", "correct": true },
      { "text": "mount -t ext4", "correct": false },
      { "text": "umount", "correct": false }
    ]
  },
  {
    "question": "A user accidentally deleted a symbolic link. What happens to the original file?",
    "answers": [
      { "text": "It is also deleted", "correct": false },
      { "text": "It is unaffected", "correct": true },
      { "text": "It becomes inaccessible", "correct": false },
      { "text": "Its permissions are reset", "correct": false },
      { "text": "It is moved to the trash directory", "correct": false }
    ]
  },
  {
    "question": "You are setting up a shared directory where all new files should inherit the directory's group ownership. What special permission should you set?",
    "answers": [
      { "text": "Sticky bit", "correct": false },
      { "text": "SUID bit", "correct": false },
      { "text": "SGID bit", "correct": true },
      { "text": "Default ACL", "correct": false },
      { "text": "Hard link", "correct": false }
    ]
  }
  
];

