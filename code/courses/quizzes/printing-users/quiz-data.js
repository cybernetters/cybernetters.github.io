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
  },
  {
    "question": "Which command is used to list file characteristics?",
    "answers": [
      { "text": "mv", "correct": false },
      { "text": "ls", "correct": true },
      { "text": "rm", "correct": false },
      { "text": "chmod", "correct": false }
    ]
  },
  {
    "question": "What is the proper structure of a UNIX command?",
    "answers": [
      { "text": "command operand flags", "correct": false },
      { "text": "command flags operand", "correct": true },
      { "text": "operand command flags", "correct": false },
      { "text": "flags command operand", "correct": false }
    ]
  },
  {
    "question": "In the UNIX filesystem, what symbol represents the root directory?",
    "answers": [
      { "text": "\\", "correct": false },
      { "text": "~", "correct": false },
      { "text": "/", "correct": true },
      { "text": ".", "correct": false }
    ]
  },
  {
    "question": "Which of the following file types is used in UNIX to represent hardware devices (such as the screen or NIC)?",
    "answers": [
      { "text": "Text file", "correct": false },
      { "text": "Binary data file", "correct": false },
      { "text": "Special device file", "correct": true },
      { "text": "Named pipe file", "correct": false }
    ]
  },
  {
    "question": "What does the '-r' flag do when used with the rm command?",
    "answers": [
      { "text": "Reverses deletion", "correct": false },
      { "text": "Recursively deletes directories and their contents", "correct": true },
      { "text": "Renames files before deletion", "correct": false },
      { "text": "Reads file attributes", "correct": false }
    ]
  },
  {
    "question": "Which feature allows you to complete file pathnames automatically in a UNIX shell?",
    "answers": [
      { "text": "Command aliasing", "correct": false },
      { "text": "Tab-completion", "correct": true },
      { "text": "Environment variables", "correct": false },
      { "text": "Redirection", "correct": false }
    ]
  },
  {
    "question": "Which command is used to mount a filesystem?",
    "answers": [
      { "text": "umount", "correct": false },
      { "text": "mount", "correct": true },
      { "text": "lsblk", "correct": false },
      { "text": "df", "correct": false }
    ]
  },
  {
    "question": "To disconnect (unmount) a filesystem, which command is used?",
    "answers": [
      { "text": "unmount", "correct": false },
      { "text": "umount", "correct": true },
      { "text": "dismount", "correct": false },
      { "text": "mount -d", "correct": false }
    ]
  },
  {
    "question": "Which file typically stores a list of filesystems to automatically mount?",
    "answers": [
      { "text": "/etc/mtab", "correct": false },
      { "text": "/etc/mounts", "correct": false },
      { "text": "/etc/fstab", "correct": true },
      { "text": "/etc/auto", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of the mv command in UNIX?",
    "answers": [
      { "text": "To list files", "correct": false },
      { "text": "To move or rename files", "correct": true },
      { "text": "To delete files", "correct": false },
      { "text": "To change file permissions", "correct": false }
    ]
  },
  {
    "question": "Which metacharacter matches zero or more characters in a filename?",
    "answers": [
      { "text": "?", "correct": false },
      { "text": "*", "correct": true },
      { "text": "[ ]", "correct": false },
      { "text": "[!]", "correct": false }
    ]
  },
  {
    "question": "What is the numeric value associated with the SUID special permission?",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "4", "correct": true },
      { "text": "7", "correct": false }
    ]
  },
  {
    "question": "In UNIX file permissions, what does the execute (x) permission allow a user to do with a file?",
    "answers": [
      { "text": "Read the file", "correct": false },
      { "text": "Edit the file", "correct": false },
      { "text": "Run the file if it is a program or script", "correct": true },
      { "text": "Delete the file", "correct": false }
    ]
  },
  {
    "question": "Which command is used to change the ownership of a file?",
    "answers": [
      { "text": "chmod", "correct": false },
      { "text": "chgrp", "correct": false },
      { "text": "chown", "correct": true },
      { "text": "chperm", "correct": false }
    ]
  },
  {
    "question": "Which command displays the disk usage of directories and their contents?",
    "answers": [
      { "text": "df", "correct": false },
      { "text": "du", "correct": true },
      { "text": "lsblk", "correct": false },
      { "text": "fuser", "correct": false }
    ]
  },
  {
    "question": "What is the main purpose of the fsck command in UNIX?",
    "answers": [
      { "text": "To format a disk", "correct": false },
      { "text": "To check the filesystem for errors", "correct": true },
      { "text": "To create new files", "correct": false },
      { "text": "To modify file permissions", "correct": false }
    ]
  },
  {
    "question": "Which command is used to search for a specific string in files or piped input?",
    "answers": [
      { "text": "find", "correct": false },
      { "text": "grep", "correct": true },
      { "text": "ls", "correct": false },
      { "text": "cat", "correct": false }
    ]
  },
  {
    "question": "Which statement best describes a symbolic link?",
    "answers": [
      { "text": "It is a direct link sharing the same inode as the target", "correct": false },
      { "text": "It is a pointer to another file and has a different inode", "correct": true },
      { "text": "It duplicates the contents of the original file", "correct": false },
      { "text": "It cannot reference directories", "correct": false }
    ]
  },
  {
    "question": "Which text editor is recommended for UNIX beginners?",
    "answers": [
      { "text": "vi/vim", "correct": false },
      { "text": "nano", "correct": true },
      { "text": "emacs", "correct": false },
      { "text": "ed", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT part of the standard UNIX command structure?",
    "answers": [
      { "text": "Command", "correct": false },
      { "text": "Flags", "correct": false },
      { "text": "Operand", "correct": false },
      { "text": "Directory", "correct": true }
    ]
  },
  {
    "question": "Which command is used to list file characteristics?",
    "answers": [
      { "text": "mv", "correct": false },
      { "text": "ls", "correct": true },
      { "text": "rm", "correct": false },
      { "text": "chmod", "correct": false }
    ]
  },
  {
    "question": "What is the proper structure of a UNIX command?",
    "answers": [
      { "text": "command operand flags", "correct": false },
      { "text": "command flags operand", "correct": true },
      { "text": "operand command flags", "correct": false },
      { "text": "flags command operand", "correct": false }
    ]
  },
  {
    "question": "In the UNIX filesystem, what symbol represents the root directory?",
    "answers": [
      { "text": "\\", "correct": false },
      { "text": "~", "correct": false },
      { "text": "/", "correct": true },
      { "text": ".", "correct": false }
    ]
  },
  {
    "question": "Which of the following file types is used in UNIX to represent hardware devices (such as the screen or NIC)?",
    "answers": [
      { "text": "Text file", "correct": false },
      { "text": "Binary data file", "correct": false },
      { "text": "Special device file", "correct": true },
      { "text": "Named pipe file", "correct": false }
    ]
  },
  {
    "question": "What does the '-r' flag do when used with the rm command?",
    "answers": [
      { "text": "Reverses deletion", "correct": false },
      { "text": "Recursively deletes directories and their contents", "correct": true },
      { "text": "Renames files before deletion", "correct": false },
      { "text": "Reads file attributes", "correct": false }
    ]
  },
  {
    "question": "Which feature allows you to complete file pathnames automatically in a UNIX shell?",
    "answers": [
      { "text": "Command aliasing", "correct": false },
      { "text": "Tab-completion", "correct": true },
      { "text": "Environment variables", "correct": false },
      { "text": "Redirection", "correct": false }
    ]
  },
  {
    "question": "Which command is used to mount a filesystem?",
    "answers": [
      { "text": "umount", "correct": false },
      { "text": "mount", "correct": true },
      { "text": "lsblk", "correct": false },
      { "text": "df", "correct": false }
    ]
  },
  {
    "question": "To disconnect (unmount) a filesystem, which command is used?",
    "answers": [
      { "text": "unmount", "correct": false },
      { "text": "umount", "correct": true },
      { "text": "dismount", "correct": false },
      { "text": "mount -d", "correct": false }
    ]
  },
  {
    "question": "Which file typically stores a list of filesystems to automatically mount?",
    "answers": [
      { "text": "/etc/mtab", "correct": false },
      { "text": "/etc/mounts", "correct": false },
      { "text": "/etc/fstab", "correct": true },
      { "text": "/etc/auto", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of the mv command in UNIX?",
    "answers": [
      { "text": "To list files", "correct": false },
      { "text": "To move or rename files", "correct": true },
      { "text": "To delete files", "correct": false },
      { "text": "To change file permissions", "correct": false }
    ]
  },
  {
    "question": "Which metacharacter matches zero or more characters in a filename?",
    "answers": [
      { "text": "?", "correct": false },
      { "text": "*", "correct": true },
      { "text": "[ ]", "correct": false },
      { "text": "[!]", "correct": false }
    ]
  },
  {
    "question": "What is the numeric value associated with the SUID special permission?",
    "answers": [
      { "text": "1", "correct": false },
      { "text": "2", "correct": false },
      { "text": "4", "correct": true },
      { "text": "7", "correct": false }
    ]
  },
  {
    "question": "In UNIX file permissions, what does the execute (x) permission allow a user to do with a file?",
    "answers": [
      { "text": "Read the file", "correct": false },
      { "text": "Edit the file", "correct": false },
      { "text": "Run the file if it is a program or script", "correct": true },
      { "text": "Delete the file", "correct": false }
    ]
  },
  {
    "question": "Which command is used to change the ownership of a file?",
    "answers": [
      { "text": "chmod", "correct": false },
      { "text": "chgrp", "correct": false },
      { "text": "chown", "correct": true },
      { "text": "chperm", "correct": false }
    ]
  },
  {
    "question": "Which command displays the disk usage of directories and their contents?",
    "answers": [
      { "text": "df", "correct": false },
      { "text": "du", "correct": true },
      { "text": "lsblk", "correct": false },
      { "text": "fuser", "correct": false }
    ]
  },
  {
    "question": "What is the main purpose of the fsck command in UNIX?",
    "answers": [
      { "text": "To format a disk", "correct": false },
      { "text": "To check the filesystem for errors", "correct": true },
      { "text": "To create new files", "correct": false },
      { "text": "To modify file permissions", "correct": false }
    ]
  },
  {
    "question": "Which command is used to search for a specific string in files or piped input?",
    "answers": [
      { "text": "find", "correct": false },
      { "text": "grep", "correct": true },
      { "text": "ls", "correct": false },
      { "text": "cat", "correct": false }
    ]
  },
  {
    "question": "Which statement best describes a symbolic link?",
    "answers": [
      { "text": "It is a direct link sharing the same inode as the target", "correct": false },
      { "text": "It is a pointer to another file and has a different inode", "correct": true },
      { "text": "It duplicates the contents of the original file", "correct": false },
      { "text": "It cannot reference directories", "correct": false }
    ]
  },
  {
    "question": "Which text editor is recommended for UNIX beginners?",
    "answers": [
      { "text": "vi/vim", "correct": false },
      { "text": "nano", "correct": true },
      { "text": "emacs", "correct": false },
      { "text": "ed", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT part of the standard UNIX command structure?",
    "answers": [
      { "text": "Command", "correct": false },
      { "text": "Flags", "correct": false },
      { "text": "Operand", "correct": false },
      { "text": "Directory", "correct": true }
    ]
  },
  {
    "question": "Which of the following describes a packet filter?",
    "answers": [
      { "text": "A software that manages DNS traffic only", "correct": false },
      { "text": "A software that limits connectivity by blocking ingress and egress traffic", "correct": true },
      { "text": "A hardware device used to optimize network speeds", "correct": false },
      { "text": "A tool exclusively used for IP spoofing detection", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Why is it recommended to use IP addresses instead of DNS names in packet filtering?",
    "answers": [
      { "text": "DNS names are always encrypted", "correct": false },
      { "text": "DNS names are easier to spoof than IP addresses", "correct": true },
      { "text": "IP addresses offer less granular control", "correct": false },
      { "text": "IP addresses are immutable", "correct": false },
      { "text": "DNS names require higher network bandwidth", "correct": false }
    ]
  },
  {
    "question": "What is the major limitation of destination static port filtering?",
    "answers": [
      { "text": "It cannot block specific ports", "correct": false },
      { "text": "It only examines source ports", "correct": false },
      { "text": "It assumes the server responds to incoming messages on the received port", "correct": true },
      { "text": "It cannot filter UDP traffic", "correct": false },
      { "text": "It requires bi-directional filtering", "correct": false }
    ]
  },
  {
    "question": "What type of device is a Cisco PIX/ASA?",
    "answers": [
      { "text": "Software-based packet filter", "correct": false },
      { "text": "Replacement IP stack", "correct": false },
      { "text": "Specialized network device", "correct": true },
      { "text": "Loose Source Routing tool", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Loose Source Record Routing (LSRR) allows a packet to:",
    "answers": [
      { "text": "Be encrypted before routing", "correct": false },
      { "text": "Travel through a specific router", "correct": true },
      { "text": "Use DNS names for routing", "correct": false },
      { "text": "Avoid border firewalls", "correct": false },
      { "text": "Spoof IP addresses for email traffic", "correct": false }
    ]
  },
  {
    "question": "What is a key feature of dynamic packet filtering?",
    "answers": [
      { "text": "Opens all ports by default", "correct": false },
      { "text": "Ignores application layer details", "correct": false },
      { "text": "Builds a state table for communication tracking", "correct": true },
      { "text": "Uses only static rulesets", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which protocol is problematic for UDP source port filtering?",
    "answers": [
      { "text": "HTTPS", "correct": false },
      { "text": "SMTP", "correct": false },
      { "text": "DNS", "correct": true },
      { "text": "TCP", "correct": false },
      { "text": "ARP", "correct": false }
    ]
  },
  {
    "question": "What is the best solution for dealing with blocked traffic in most scenarios?",
    "answers": [
      { "text": "Send an ICMP 'host not reachable' message", "correct": false },
      { "text": "Send an ICMP 'host not administratively reachable' message", "correct": false },
      { "text": "Drop the traffic without sending a response", "correct": true },
      { "text": "Redirect the traffic to a honeypot", "correct": false },
      { "text": "Allow one connection to analyze the behavior", "correct": false }
    ]
  },
  {
    "question": "Which is a limitation of packet filtering?",
    "answers": [
      { "text": "It is too slow to handle high bandwidth", "correct": false },
      { "text": "It enables DNS spoofing", "correct": false },
      { "text": "Lack of detailed user authentication and authorization", "correct": true },
      { "text": "Inability to monitor external communications", "correct": false },
      { "text": "Excessive logging requirements", "correct": false }
    ]
  },
  {
    "question": "What does stateful packet inspection (SPI) analyze?",
    "answers": [
      { "text": "IP addresses only", "correct": false },
      { "text": "Application layer data", "correct": false },
      { "text": "Sequence numbers and context of communication", "correct": true },
      { "text": "ICMP traffic exclusively", "correct": false },
      { "text": "Open ports on remote servers", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of a packet filter?",
    "answers": [
      { "text": "To encrypt incoming and outgoing traffic", "correct": false },
      { "text": "To allow unrestricted network communication", "correct": false },
      { "text": "To limit connectivity based on rules", "correct": true },
      { "text": "To replace existing IP stacks", "correct": false },
      { "text": "To enable Loose Source Routing", "correct": false }
    ]
  },
  {
    "question": "Which is a strength of packet filters?",
    "answers": [
      { "text": "High authentication levels", "correct": false },
      { "text": "Can approach line speeds", "correct": true },
      { "text": "Advanced user authorization", "correct": false },
      { "text": "Extensive logging features", "correct": false },
      { "text": "Dynamic DNS updates", "correct": false }
    ]
  },
  {
    "question": "Why is DNS forwarding used in packet filtering?",
    "answers": [
      { "text": "To allow encrypted traffic only", "correct": false },
      { "text": "To limit IP addresses to an ISP's DNS server", "correct": true },
      { "text": "To enable faster DNS name resolution", "correct": false },
      { "text": "To bypass IP filtering rules", "correct": false },
      { "text": "To enhance UDP security", "correct": false }
    ]
  },
  {
    "question": "Which filtering type examines both source and destination ports?",
    "answers": [
      { "text": "Static filtering", "correct": false },
      { "text": "Bi-directional filtering", "correct": true },
      { "text": "Loose Source Record Routing", "correct": false },
      { "text": "Dynamic packet filtering", "correct": false },
      { "text": "UDP source port filtering", "correct": false }
    ]
  },
  {
    "question": "What happens when dynamic packet filtering blocks traffic?",
    "answers": [
      { "text": "It encrypts the blocked packet", "correct": false },
      { "text": "It updates the routing table", "correct": false },
      { "text": "It builds a state table", "correct": false },
      { "text": "It keeps the port closed", "correct": true },
      { "text": "It uses IP address spoofing", "correct": false }
    ]
  },
  {
    "question": "What is one way to ensure UDP traffic is safe in filtering?",
    "answers": [
      { "text": "Allow all DNS requests", "correct": false },
      { "text": "Use static source port filtering", "correct": false },
      { "text": "Deny all UDP traffic where possible", "correct": true },
      { "text": "Require authentication for UDP sessions", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  }
],
"TrueFalse": [
  {
    "question": "UNIX is primarily a command-line only operating system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The UNIX command structure is organized as command operand flags.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In UNIX, the root of the filesystem is denoted by a forward slash (/).",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "All files and directories in UNIX are managed as part of a single filesystem starting from the root.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A relative pathname in UNIX is defined with reference to the root directory.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Tab-completion is a feature available in the BASH shell to assist in typing pathnames.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The '-f' flag used with the rm command forces deletion without any confirmation prompt.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "UNIX file globbing uses regular expressions to match filenames.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The command to unmount a filesystem in UNIX is spelled with an 'n' at the end (unmount).",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The /etc/fstab file contains a list of filesystems that should be automatically mounted at boot time.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The vi editor is a bi-modal (modal) text editor with distinct command and insert modes.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "New files in UNIX are given default permissions of 777.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Special file permissions in UNIX include the SUID, SGID, and sticky bit.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Hard links in UNIX can span across different filesystem boundaries.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A symbolic link in UNIX always has a different inode number from its target file.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The chgrp command in UNIX is used solely to change the group ownership of a file without altering the individual owner.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ls command in UNIX is used to list the characteristics of files and directories.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The du command provides a summary of the disk usage for directories and their contents.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The strings command is useful for displaying human-readable text from within binary files.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Setting the sticky bit on a directory allows any user to delete files within that directory.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  }
],
"ApplicationMCQs": [
  {
    "question": "A user has a file named script.sh that they are unable to execute. Which command will allow the file owner to gain execute permission?",
    "answers": [
      { "text": "chmod u+x script.sh", "correct": true },
      { "text": "chmod u-w script.sh", "correct": false },
      { "text": "chmod 755 script.sh", "correct": false },
      { "text": "chmod +r script.sh", "correct": false }
    ]
  },
  {
    "question": "To create a pointer from your home directory to the configuration file /etc/config, which command would you use?",
    "answers": [
      { "text": "ln -s /etc/config ~/config_link", "correct": true },
      { "text": "ln /etc/config ~/config_link", "correct": false },
      { "text": "ln -h /etc/config ~/config_link", "correct": false },
      { "text": "link -s /etc/config ~/config_link", "correct": false }
    ]
  },
  {
    "question": "You need to list all files in your current directory that start with the word 'project'. Which command would achieve this?",
    "answers": [
      { "text": "ls ?roject*", "correct": false },
      { "text": "ls project*", "correct": true },
      { "text": "ls [project]*", "correct": false },
      { "text": "ls project", "correct": false }
    ]
  },
  {
    "question": "When working in a shared directory, a system administrator wants to ensure that users can only delete their own files. Which permission bit should be set on the directory?",
    "answers": [
      { "text": "SUID", "correct": false },
      { "text": "SGID", "correct": false },
      { "text": "Sticky bit", "correct": true },
      { "text": "Execute bit", "correct": false }
    ]
  },
  {
    "question": "A system administrator needs to identify which processes are using a specific directory. Which command will display this information?",
    "answers": [
      { "text": "ls", "correct": false },
      { "text": "mount", "correct": false },
      { "text": "fuser -u", "correct": true },
      { "text": "du", "correct": false }
    ]
  },
  {
    "question": "To check an ext2/3/4 filesystem for bad blocks before mounting it, which command and option would be appropriate?",
    "answers": [
      { "text": "fsck -r", "correct": false },
      { "text": "tune2fs -i", "correct": false },
      { "text": "e2fsck -c", "correct": true },
      { "text": "e2fsck -s", "correct": false }
    ]
  },
  {
    "question": "After adding new files to a directory, an administrator wishes to quickly view the disk space used by that directory in a human-readable format. Which command should be used?",
    "answers": [
      { "text": "du -h", "correct": false },
      { "text": "df -h", "correct": true },
      { "text": "lsblk --fs", "correct": false },
      { "text": "fuser -u", "correct": false }
    ]
  },
  {
    "question": "A file created by a user has default permissions of 666. Which environment variable influences the actual permissions by subtracting certain rights from this default?",
    "answers": [
      { "text": "PATH", "correct": false },
      { "text": "UMASK", "correct": true },
      { "text": "HOME", "correct": false },
      { "text": "SHELL", "correct": false }
    ]
  },
  {
    "question": "If you need to safely access a removable media that does not mount automatically, what are your available options?",
    "answers": [
      { "text": "Manually execute the mount command", "correct": false },
      { "text": "Rely on the automounter daemon", "correct": false },
      { "text": "Edit the /etc/fstab file to include the media", "correct": false },
      { "text": "Both A and B", "correct": true }
    ]
  },
  {
    "question": "While managing file permissions, an administrator wants to change the group ownership of a file without modifying the individual owner. Which command should be used?",
    "answers": [
      { "text": "chown", "correct": false },
      { "text": "chmod", "correct": false },
      { "text": "chgrp", "correct": true },
      { "text": "umask", "correct": false }
    ]
  }
  
];

