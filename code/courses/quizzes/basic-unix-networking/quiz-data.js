const questionBank = [
  {
    "question": "Which UNIX/Linux printing approach has become most prevalent?",
    "answers": [
      { "text": "BSD Style Printing", "correct": false },
      { "text": "SysV Style Printing", "correct": false },
      { "text": "CUPS (Common UNIX Printing System)", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "In CUPS server configuration, which file is used to define printers and limit access?",
    "answers": [
      { "text": "/etc/cups/client.conf", "correct": false },
      { "text": "/etc/cups/cupsd.conf", "correct": true },
      { "text": "/etc/printcap", "correct": false },
      { "text": "/etc/cups/cups.conf", "correct": false }
    ]
  },
  {
    "question": "Which of the following sets of commands does CUPS provide its own versions of?",
    "answers": [
      { "text": "lp, lpr, lprm, lpq", "correct": true },
      { "text": "lpd, lpc, lpstat, lpadmin", "correct": false },
      { "text": "lpr, lpstat, lpd, lpsched", "correct": false },
      { "text": "lpadmin, lpinfo, lpr, lprm", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of a print spooler in a network printing environment?",
    "answers": [
      { "text": "To convert document formats for printers", "correct": false },
      { "text": "To collect and schedule print jobs", "correct": true },
      { "text": "To manage printer driver installations", "correct": false },
      { "text": "To configure printer hardware settings", "correct": false }
    ]
  },
  {
    "question": "Which command is recommended in a lab environment for creating a new printer with CUPS?",
    "answers": [
      { "text": "lpinfo –m", "correct": false },
      { "text": "lpadmin –p", "correct": true },
      { "text": "lpq –a", "correct": false },
      { "text": "lpr –P", "correct": false }
    ]
  },
  {
    "question": "Which URL format is used to access the CUPS web interface?",
    "answers": [
      { "text": "http://printserver:80", "correct": false },
      { "text": "http://printserver:631", "correct": true },
      { "text": "https://printserver:8080", "correct": false },
      { "text": "ftp://printserver:631", "correct": false }
    ]
  },
  {
    "question": "In UNIX user administration, which file holds the encrypted password and expiration information?",
    "answers": [
      { "text": "/etc/passwd", "correct": false },
      { "text": "/etc/shadow", "correct": true },
      { "text": "/etc/login.defs", "correct": false },
      { "text": "/etc/group", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the pwconv command?",
    "answers": [
      { "text": "To revert back to using only /etc/passwd", "correct": false },
      { "text": "To configure the system to use /etc/shadow", "correct": true },
      { "text": "To convert passwords to plain text", "correct": false },
      { "text": "To update the /etc/login.defs file", "correct": false }
    ]
  },
  {
    "question": "How many fields does an entry in the /etc/passwd file contain?",
    "answers": [
      { "text": "5", "correct": false },
      { "text": "6", "correct": false },
      { "text": "7", "correct": true },
      { "text": "8", "correct": false }
    ]
  },
  {
    "question": "Which directory contains the default files copied to every new user’s home directory?",
    "answers": [
      { "text": "/etc/default", "correct": false },
      { "text": "/etc/skel", "correct": true },
      { "text": "/etc/login.defs", "correct": false },
      { "text": "/usr/share/skel", "correct": false }
    ]
  },
  {
    "question": "Which command is used to create a new user account on a UNIX system?",
    "answers": [
      { "text": "usermod", "correct": false },
      { "text": "userdel", "correct": false },
      { "text": "useradd", "correct": true },
      { "text": "passwd", "correct": false }
    ]
  },
  {
    "question": "Which command is used to modify an existing user’s account information?",
    "answers": [
      { "text": "useradd", "correct": false },
      { "text": "usermod", "correct": true },
      { "text": "userdel", "correct": false },
      { "text": "chage", "correct": false }
    ]
  },
  {
    "question": "Which command is used specifically to change a user’s password expiration settings?",
    "answers": [
      { "text": "passwd", "correct": false },
      { "text": "chage", "correct": true },
      { "text": "usermod", "correct": false },
      { "text": "chsh", "correct": false }
    ]
  },
  {
    "question": "When a user account is deleted with userdel, what happens to the files previously owned by that user?",
    "answers": [
      { "text": "They are transferred to the root user", "correct": false },
      { "text": "They are deleted automatically", "correct": false },
      { "text": "They become owned by a numeric UID representing the deleted account", "correct": true },
      { "text": "They are reassigned to the user’s primary group", "correct": false }
    ]
  },
  {
    "question": "Which file lists all groups and their associated users in UNIX?",
    "answers": [
      { "text": "/etc/passwd", "correct": false },
      { "text": "/etc/shadow", "correct": false },
      { "text": "/etc/group", "correct": true },
      { "text": "/etc/login.defs", "correct": false }
    ]
  },
  {
    "question": "Which command allows a user to temporarily change their primary group?",
    "answers": [
      { "text": "groups", "correct": false },
      { "text": "newgrp", "correct": true },
      { "text": "chgrp", "correct": false },
      { "text": "groupmod", "correct": false }
    ]
  },
  {
    "question": "What is the main purpose of implementing disk quotas on a UNIX system?",
    "answers": [
      { "text": "To restrict the number of processes a user can run", "correct": false },
      { "text": "To limit disk space usage per user", "correct": true },
      { "text": "To enforce file permissions", "correct": false },
      { "text": "To set password expiration policies", "correct": false }
    ]
  },
  {
    "question": "In PAM (Pluggable Authentication Modules), which module type handles user authentication?",
    "answers": [
      { "text": "account", "correct": false },
      { "text": "session", "correct": false },
      { "text": "password", "correct": false },
      { "text": "auth", "correct": true }
    ]
  },
  {
    "question": "In a PAM configuration one-liner, what does the \"control-flag\" specify?",
    "answers": [
      { "text": "The module path", "correct": false },
      { "text": "The level of enforcement for the module", "correct": true },
      { "text": "The module’s arguments", "correct": false },
      { "text": "The module type", "correct": false }
    ]
  },
  {
    "question": "On a CentOS system, to enforce password complexity (such as minimum length and mixed case), which file is typically modified?",
    "answers": [
      { "text": "/etc/passwd", "correct": false },
      { "text": "/etc/shadow", "correct": false },
      { "text": "/etc/login.defs", "correct": false },
      { "text": "/etc/pam.d/system-auth", "correct": true }
    ]
  },
  {
    "question": "BSD Style Printing originated in BSD and uses LPD or LPR printing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SysV Style Printing is widely used in modern UNIX systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "CUPS stands for Common UNIX Printing System and has become the de facto printing standard.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The CUPS web interface is accessed via a non-standard TCP port, typically 631.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The file /etc/cups/cupsd.conf is used to configure the CUPS server settings, including printer definitions and access limits.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "CUPS includes its own versions of basic BSD print commands such as lp, lpr, lpq, and lprm to maintain script compatibility.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A print spooler only collects print jobs and does not perform any scheduling.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The /etc/shadow file stores encrypted passwords as well as password expiration details.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The pwunconv command configures the system to use only the /etc/passwd file for authentication.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Each entry in the /etc/passwd file consists of 7 fields, including the username, UID, and login shell.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The /etc/skel directory contains default configuration files that are copied to new users’ home directories.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The useradd command is used to create new user accounts on a UNIX system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The userdel command reassigns a deleted user’s files automatically to the administrator’s account.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The /etc/group file lists group names, their GIDs, and additional user members beyond those defined in /etc/passwd.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The newgrp command permanently changes a user’s primary group.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Disk quotas can be enabled on a filesystem by modifying the /etc/fstab file to include usrquota and grpquota options.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "PAM stands for Pluggable Authentication Modules and is used to provide flexible authentication methods.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ‘auth’ module type in PAM is responsible for handling session creation tasks.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In PAM configuration, if no appropriate module is found, the system defaults to using the ‘other’ module, which denies access.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "On Debian/Ubuntu systems, the default password policies can be found in /etc/pam.d/common-passwd and /etc/login.defs.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A system administrator needs to add a new printer to a CUPS-managed server. Which command should they use?",
    "answers": [
      { "text": "lpstat", "correct": false },
      { "text": "lpadmin", "correct": true },
      { "text": "lpq", "correct": false },
      { "text": "lprm", "correct": false }
    ]
  },
  {
    "question": "To troubleshoot a printing issue where a job is not being transmitted, an administrator should first review which location for log files?",
    "answers": [
      { "text": "/etc/cups/cupsd.conf", "correct": false },
      { "text": "/var/log", "correct": true },
      { "text": "/etc/cups/client.conf", "correct": false },
      { "text": "/usr/log/print", "correct": false }
    ]
  },
  {
    "question": "A user complains that their password has expired. Which file should an administrator review to adjust the password aging parameters?",
    "answers": [
      { "text": "/etc/passwd", "correct": false },
      { "text": "/etc/shadow", "correct": true },
      { "text": "/etc/login.defs", "correct": false },
      { "text": "/etc/pam.d/system-auth", "correct": false }
    ]
  },
  {
    "question": "If an administrator needs to temporarily disable a user account, which command could be used?",
    "answers": [
      { "text": "usermod -L username", "correct": true },
      { "text": "useradd -d username", "correct": false },
      { "text": "passwd -u username", "correct": false },
      { "text": "chage -l username", "correct": false }
    ]
  },
  {
    "question": "When configuring disk quotas on Rocky Linux, which sequence of steps is correct after modifying the /etc/fstab file?",
    "answers": [
      { "text": "Remount the filesystem → Run quotacheck → Use edquota to assign quotas", "correct": true },
      { "text": "Run edquota → Remount the filesystem → Run quotacheck", "correct": false },
      { "text": "Run quotacheck → Remount the filesystem → Use edquota", "correct": false },
      { "text": "Remount the filesystem → Use edquota → Run quotacheck", "correct": false }
    ]
  },
  {
    "question": "To enforce a password complexity policy on a CentOS system, which file is most likely to be modified?",
    "answers": [
      { "text": "/etc/passwd", "correct": false },
      { "text": "/etc/shadow", "correct": false },
      { "text": "/etc/login.defs", "correct": false },
      { "text": "/etc/pam.d/system-auth", "correct": true }
    ]
  },
  {
    "question": "An administrator wants to access the CUPS web interface from a browser. Which of the following URLs is correct?",
    "answers": [
      { "text": "http://printerserver:631", "correct": true },
      { "text": "https://printerserver:80", "correct": false },
      { "text": "http://printerserver:8080", "correct": false },
      { "text": "ftp://printerserver:631", "correct": false }
    ]
  },
  {
    "question": "After creating a new user account with the useradd command, which directory’s contents are automatically copied to the new user’s home directory?",
    "answers": [
      { "text": "/etc/default", "correct": false },
      { "text": "/etc/skel", "correct": true },
      { "text": "/etc/login.defs", "correct": false },
      { "text": "/usr/share/defaults", "correct": false }
    ]
  },
  {
    "question": "If an administrator needs to view the list of groups that a user belongs to, which command should they run?",
    "answers": [
      { "text": "groups", "correct": true },
      { "text": "newgrp", "correct": false },
      { "text": "chgrp", "correct": false },
      { "text": "usermod", "correct": false }
    ]
  },
  {
    "question": "To check which print jobs are currently pending in the queue on a CUPS-managed printer, which command is most appropriate?",
    "answers": [
      { "text": "lpq", "correct": true },
      { "text": "lpr", "correct": false },
      { "text": "lpadmin", "correct": false },
      { "text": "lpstat -a", "correct": false }
    ]
  }
  
];

