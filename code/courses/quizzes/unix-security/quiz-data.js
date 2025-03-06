const questionBank = [
  {
    "question": "Which of the following is cited as a fundamental weakness of UNIX security?",
    "answers": [
      { "text": "Excessive encryption", "correct": false },
      { "text": "Weak authentication model", "correct": true },
      { "text": "Too many user accounts", "correct": false },
      { "text": "Overly strict authorization", "correct": false }
    ]
  },
  {
    "question": "What is the first step in securing a UNIX system according to the lecture?",
    "answers": [
      { "text": "Disabling network services", "correct": false },
      { "text": "Backing up the system", "correct": true },
      { "text": "Changing default passwords", "correct": false },
      { "text": "Installing a firewall", "correct": false }
    ]
  },
  {
    "question": "Which command is suggested for creating a simple backup of the system?",
    "answers": [
      { "text": "cp -r", "correct": false },
      { "text": "dd", "correct": false },
      { "text": "tar –cvf tarfile /files/to/backup", "correct": true },
      { "text": "rsync", "correct": false }
    ]
  },
  {
    "question": "Which security measure is recommended for protecting user accounts?",
    "answers": [
      { "text": "Disabling shadow passwords", "correct": false },
      { "text": "Using shadow passwords", "correct": true },
      { "text": "Allowing blank passwords", "correct": false },
      { "text": "Creating guest accounts", "correct": false }
    ]
  },
  {
    "question": "To prevent abuse of dormant accounts, which command option is suggested?",
    "answers": [
      { "text": "userdel –r", "correct": false },
      { "text": "passwd –l", "correct": false },
      { "text": "usermod –f days account", "correct": true },
      { "text": "chage –E account", "correct": false }
    ]
  },
  {
    "question": "Restricted shells (like rbash) are used primarily to:",
    "answers": [
      { "text": "Provide full administrative privileges", "correct": false },
      { "text": "Allow users to bypass security controls", "correct": false },
      { "text": "Lock a user into a limited command environment", "correct": true },
      { "text": "Enable remote file transfer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a tool mentioned for auditing and logging on UNIX systems?",
    "answers": [
      { "text": "auditd", "correct": false },
      { "text": "psacct", "correct": false },
      { "text": "syslog", "correct": false },
      { "text": "all of the above", "correct": true }
    ]
  },
  {
    "question": "File integrity checking is used to:",
    "answers": [
      { "text": "Speed up file transfers", "correct": false },
      { "text": "Ensure files were not altered by an intruder", "correct": true },
      { "text": "Backup data faster", "correct": false },
      { "text": "Compress files before transmission", "correct": false }
    ]
  },
  {
    "question": "Which of the following tools is NOT mentioned as a file integrity checker?",
    "answers": [
      { "text": "tripwire", "correct": false },
      { "text": "aide", "correct": false },
      { "text": "fcheck", "correct": false },
      { "text": "chkrootkit", "correct": true }
    ]
  },
  {
    "question": "Which network service is identified as insecure due to clear text password transmission?",
    "answers": [
      { "text": "SSH", "correct": false },
      { "text": "Telnet", "correct": true },
      { "text": "HTTPS", "correct": false },
      { "text": "SFTP", "correct": false }
    ]
  },
  {
    "question": "What is the recommended approach for handling services that are not used?",
    "answers": [
      { "text": "Leaving them running but blocking with a firewall", "correct": false },
      { "text": "Disabling them from starting at boot", "correct": true },
      { "text": "Encrypting their traffic", "correct": false },
      { "text": "Increasing their logging level", "correct": false }
    ]
  },
  {
    "question": "Which command-line tool can be used to list open ports and verify running services?",
    "answers": [
      { "text": "netstat (or ss)", "correct": true },
      { "text": "top", "correct": false },
      { "text": "ifconfig", "correct": false },
      { "text": "uname", "correct": false }
    ]
  },
  {
    "question": "The chroot command is used to:",
    "answers": [
      { "text": "Encrypt files on disk", "correct": false },
      { "text": "Isolate an application within a virtual root directory", "correct": true },
      { "text": "Create backups of system files", "correct": false },
      { "text": "Change file ownership recursively", "correct": false }
    ]
  },
  {
    "question": "Security Enhanced Linux (SELinux) adds which type of control to UNIX systems?",
    "answers": [
      { "text": "Discretionary Access Control", "correct": false },
      { "text": "Role-Based Access Control", "correct": false },
      { "text": "Mandatory Access Control", "correct": true },
      { "text": "Time-Based Access Control", "correct": false }
    ]
  },
  {
    "question": "To view the current SELinux mode, which command is used?",
    "answers": [
      { "text": "selinux --status", "correct": false },
      { "text": "getenforce", "correct": true },
      { "text": "sestatus", "correct": false },
      { "text": "setenforce", "correct": false }
    ]
  },
  {
    "question": "In SELinux, if an action is being blocked by policy, an administrator can use which tool to generate policy adjustments?",
    "answers": [
      { "text": "audit2allow", "correct": true },
      { "text": "checkpolicy", "correct": false },
      { "text": "setenforce", "correct": false },
      { "text": "restorecon", "correct": false }
    ]
  },
  {
    "question": "Packet filters in UNIX systems are used to:",
    "answers": [
      { "text": "Limit application logging", "correct": false },
      { "text": "Filter ingress and egress network traffic", "correct": true },
      { "text": "Encrypt file systems", "correct": false },
      { "text": "Create user accounts securely", "correct": false }
    ]
  },
  {
    "question": "TCPwrapper functions as a type of:",
    "answers": [
      { "text": "Disk encryption tool", "correct": false },
      { "text": "Application-specific firewall", "correct": true },
      { "text": "Backup utility", "correct": false },
      { "text": "File integrity checker", "correct": false }
    ]
  },
  {
    "question": "Which of the following security analysis probes is described as a tool that attempts to break into a system based on known vulnerabilities?",
    "answers": [
      { "text": "Nessus", "correct": false },
      { "text": "SATAN", "correct": true },
      { "text": "Real Secure", "correct": false },
      { "text": "Portscanner", "correct": false }
    ]
  },
  {
    "question": "Nessus is best described as:",
    "answers": [
      { "text": "A commercial antivirus solution", "correct": false },
      { "text": "A free and open-source portscanner", "correct": false },
      { "text": "An open solution for vulnerability assessment compatible with multiple platforms", "correct": true },
      { "text": "A disk backup tool", "correct": false }
    ]
  },
  {
    "question": "UNIX was originally developed before security was a major concern.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Backing up the system is considered the first step in securing a UNIX system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "It is recommended to disable shadow passwords on modern UNIX systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Dormant accounts can pose a security risk if left enabled.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Restricted shells are foolproof and cannot be bypassed by any application shell escapes.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Process accounting and syslog are methods used for auditing and logging in UNIX.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "File integrity checking helps ensure that files have not been modified by an unauthorized user.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "FTP is secure because it encrypts both authentication and data traffic.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Disabling unused services is a recommended practice for service security.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The chroot command can limit an application’s view of the filesystem by confining it to a virtual root.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SELinux provides Mandatory Access Controls that restrict subjects from accessing objects unless explicitly allowed by policy.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Setting SELinux to permissive mode will enforce the security policy while still logging denials.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The command getenforce is used to display the current SELinux mode.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Audit2allow is a tool that helps generate new SELinux policy rules based on logged denials.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Packet filters and TCPwrappers are both used to restrict network traffic.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Portscanners can be used as a security analysis probe to identify open ports on a system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SATAN and Nessus are both examples of tools used for vulnerability assessment.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Real Secure is an open-source vulnerability scanner available for UNIX systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Using a backup tape to restore a compromised system is an example of a recovery strategy.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The lecture suggests that reducing the risk associated with UNIX systems is an ongoing mission due to its inherent insecurity.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "An administrator needs to back up the entire system to a bootable tape for quick restoration. Which of the following commands is most appropriate?",
    "answers": [
      { "text": "dd if=/dev/sda of=/dev/tape", "correct": false },
      { "text": "tar –cvf backup.tar /", "correct": true },
      { "text": "rsync -av / /backup", "correct": false },
      { "text": "cp -r / /tape", "correct": false }
    ]
  },
  {
    "question": "To disable a dormant user account automatically after a set number of days, which command should be used?",
    "answers": [
      { "text": "chage –d", "correct": false },
      { "text": "usermod –f days username", "correct": true },
      { "text": "passwd –l username", "correct": false },
      { "text": "userdel username", "correct": false }
    ]
  },
  {
    "question": "A system administrator wants to restrict a web server to operate within a chroot jail for enhanced security. Which command should be used to launch the web server in this restricted environment?",
    "answers": [
      { "text": "chroot /var/chroot /usr/sbin/httpd", "correct": true },
      { "text": "jail /var/chroot /usr/sbin/httpd", "correct": false },
      { "text": "restrict /var/chroot /usr/sbin/httpd", "correct": false },
      { "text": "secure /var/chroot /usr/sbin/httpd", "correct": false }
    ]
  },
  {
    "question": "After observing SELinux denials in the audit log, an administrator wants to generate new policy rules to allow the desired action. Which sequence of tools should they use?",
    "answers": [
      { "text": "setenforce, getenforce, restorecon", "correct": false },
      { "text": "audit2allow, then compile with checkpolicy", "correct": true },
      { "text": "getenforce, then chcon", "correct": false },
      { "text": "semanage, then restorecon", "correct": false }
    ]
  },
  {
    "question": "Which command will display the current SELinux operating mode to an administrator?",
    "answers": [
      { "text": "sestatus", "correct": false },
      { "text": "getenforce", "correct": true },
      { "text": "setenforce", "correct": false },
      { "text": "selinux-status", "correct": false }
    ]
  },
  {
    "question": "An administrator is tasked with verifying that only authorized services are running. Which command could they use to list open network ports on a UNIX system?",
    "answers": [
      { "text": "ps aux", "correct": false },
      { "text": "netstat –an | grep LISTEN", "correct": true },
      { "text": "lsof –i:80", "correct": false },
      { "text": "chkconfig", "correct": false }
    ]
  },
  {
    "question": "To enforce that only known hosts can mount an NFS export, which configuration file should be edited on the NFS server?",
    "answers": [
      { "text": "/etc/exports", "correct": true },
      { "text": "/etc/fstab", "correct": false },
      { "text": "/etc/hosts.allow", "correct": false },
      { "text": "/etc/nfs.conf", "correct": false }
    ]
  },
  {
    "question": "A security auditor wants to ensure that file integrity on critical system binaries is maintained. Which tool is most suitable for periodic checksum verification?",
    "answers": [
      { "text": "tripwire", "correct": true },
      { "text": "psacct", "correct": false },
      { "text": "syslog", "correct": false },
      { "text": "chroot", "correct": false }
    ]
  },
  {
    "question": "When reviewing audit logs for potential intrusions, which log file is most commonly examined on a UNIX system?",
    "answers": [
      { "text": "/var/log/secure", "correct": false },
      { "text": "/var/log/audit/audit.log", "correct": true },
      { "text": "/var/log/messages", "correct": false },
      { "text": "/var/log/syslog", "correct": false }
    ]
  },
  {
    "question": "To disable an insecure service such as Telnet from running at boot, what is the recommended course of action?",
    "answers": [
      { "text": "Block Telnet via the firewall only", "correct": false },
      { "text": "Stop the service and remove it from startup scripts", "correct": true },
      { "text": "Change its default port number", "correct": false },
      { "text": "Encrypt its traffic with SSL", "correct": false }
    ]
  },
  {
    "question": "Which of the following is cited as a fundamental weakness of UNIX security?",
    "answers": [
      { "text": "Excessive encryption", "correct": false },
      { "text": "Weak authentication model", "correct": true },
      { "text": "Too many user accounts", "correct": false },
      { "text": "Overly strict authorization", "correct": false }
    ]
  },
  {
    "question": "What is the first step in securing a UNIX system according to the lecture?",
    "answers": [
      { "text": "Disabling network services", "correct": false },
      { "text": "Backing up the system", "correct": true },
      { "text": "Changing default passwords", "correct": false },
      { "text": "Installing a firewall", "correct": false }
    ]
  },
  {
    "question": "Which command is suggested for creating a simple backup of the system?",
    "answers": [
      { "text": "cp -r", "correct": false },
      { "text": "dd", "correct": false },
      { "text": "tar –cvf tarfile /files/to/backup", "correct": true },
      { "text": "rsync", "correct": false }
    ]
  },
  {
    "question": "Which security measure is recommended for protecting user accounts?",
    "answers": [
      { "text": "Disabling shadow passwords", "correct": false },
      { "text": "Using shadow passwords", "correct": true },
      { "text": "Allowing blank passwords", "correct": false },
      { "text": "Creating guest accounts", "correct": false }
    ]
  },
  {
    "question": "To prevent abuse of dormant accounts, which command option is suggested?",
    "answers": [
      { "text": "userdel –r", "correct": false },
      { "text": "passwd –l", "correct": false },
      { "text": "usermod –f days account", "correct": true },
      { "text": "chage –E account", "correct": false }
    ]
  },
  {
    "question": "Restricted shells (like rbash) are used primarily to:",
    "answers": [
      { "text": "Provide full administrative privileges", "correct": false },
      { "text": "Allow users to bypass security controls", "correct": false },
      { "text": "Lock a user into a limited command environment", "correct": true },
      { "text": "Enable remote file transfer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a tool mentioned for auditing and logging on UNIX systems?",
    "answers": [
      { "text": "auditd", "correct": false },
      { "text": "psacct", "correct": false },
      { "text": "syslog", "correct": false },
      { "text": "all of the above", "correct": true }
    ]
  },
  {
    "question": "File integrity checking is used to:",
    "answers": [
      { "text": "Speed up file transfers", "correct": false },
      { "text": "Ensure files were not altered by an intruder", "correct": true },
      { "text": "Backup data faster", "correct": false },
      { "text": "Compress files before transmission", "correct": false }
    ]
  },
  {
    "question": "Which of the following tools is NOT mentioned as a file integrity checker?",
    "answers": [
      { "text": "tripwire", "correct": false },
      { "text": "aide", "correct": false },
      { "text": "fcheck", "correct": false },
      { "text": "chkrootkit", "correct": true }
    ]
  },
  {
    "question": "Which network service is identified as insecure due to clear text password transmission?",
    "answers": [
      { "text": "SSH", "correct": false },
      { "text": "Telnet", "correct": true },
      { "text": "HTTPS", "correct": false },
      { "text": "SFTP", "correct": false }
    ]
  },
  {
    "question": "What is the recommended approach for handling services that are not used?",
    "answers": [
      { "text": "Leaving them running but blocking with a firewall", "correct": false },
      { "text": "Disabling them from starting at boot", "correct": true },
      { "text": "Encrypting their traffic", "correct": false },
      { "text": "Increasing their logging level", "correct": false }
    ]
  },
  {
    "question": "Which command-line tool can be used to list open ports and verify running services?",
    "answers": [
      { "text": "netstat (or ss)", "correct": true },
      { "text": "top", "correct": false },
      { "text": "ifconfig", "correct": false },
      { "text": "uname", "correct": false }
    ]
  },
  {
    "question": "The chroot command is used to:",
    "answers": [
      { "text": "Encrypt files on disk", "correct": false },
      { "text": "Isolate an application within a virtual root directory", "correct": true },
      { "text": "Create backups of system files", "correct": false },
      { "text": "Change file ownership recursively", "correct": false }
    ]
  },
  {
    "question": "Security Enhanced Linux (SELinux) adds which type of control to UNIX systems?",
    "answers": [
      { "text": "Discretionary Access Control", "correct": false },
      { "text": "Role-Based Access Control", "correct": false },
      { "text": "Mandatory Access Control", "correct": true },
      { "text": "Time-Based Access Control", "correct": false }
    ]
  },
  {
    "question": "To view the current SELinux mode, which command is used?",
    "answers": [
      { "text": "selinux --status", "correct": false },
      { "text": "getenforce", "correct": true },
      { "text": "sestatus", "correct": false },
      { "text": "setenforce", "correct": false }
    ]
  },
  {
    "question": "In SELinux, if an action is being blocked by policy, an administrator can use which tool to generate policy adjustments?",
    "answers": [
      { "text": "audit2allow", "correct": true },
      { "text": "checkpolicy", "correct": false },
      { "text": "setenforce", "correct": false },
      { "text": "restorecon", "correct": false }
    ]
  },
  {
    "question": "Packet filters in UNIX systems are used to:",
    "answers": [
      { "text": "Limit application logging", "correct": false },
      { "text": "Filter ingress and egress network traffic", "correct": true },
      { "text": "Encrypt file systems", "correct": false },
      { "text": "Create user accounts securely", "correct": false }
    ]
  },
  {
    "question": "TCPwrapper functions as a type of:",
    "answers": [
      { "text": "Disk encryption tool", "correct": false },
      { "text": "Application-specific firewall", "correct": true },
      { "text": "Backup utility", "correct": false },
      { "text": "File integrity checker", "correct": false }
    ]
  },
  {
    "question": "Which of the following security analysis probes is described as a tool that attempts to break into a system based on known vulnerabilities?",
    "answers": [
      { "text": "Nessus", "correct": false },
      { "text": "SATAN", "correct": true },
      { "text": "Real Secure", "correct": false },
      { "text": "Portscanner", "correct": false }
    ]
  },
  {
    "question": "Nessus is best described as:",
    "answers": [
      { "text": "A commercial antivirus solution", "correct": false },
      { "text": "A free and open-source portscanner", "correct": false },
      { "text": "An open solution for vulnerability assessment compatible with multiple platforms", "correct": true },
      { "text": "A disk backup tool", "correct": false }
    ]
  },
  {
    "question": "An administrator needs to back up the entire system to a bootable tape for quick restoration. Which of the following commands is most appropriate?",
    "answers": [
      { "text": "dd if=/dev/sda of=/dev/tape", "correct": false },
      { "text": "tar –cvf backup.tar /", "correct": true },
      { "text": "rsync -av / /backup", "correct": false },
      { "text": "cp -r / /tape", "correct": false }
    ]
  },
  {
    "question": "To disable a dormant user account automatically after a set number of days, which command should be used?",
    "answers": [
      { "text": "chage –d", "correct": false },
      { "text": "usermod –f days username", "correct": true },
      { "text": "passwd –l username", "correct": false },
      { "text": "userdel username", "correct": false }
    ]
  },
  {
    "question": "A system administrator wants to restrict a web server to operate within a chroot jail for enhanced security. Which command should be used to launch the web server in this restricted environment?",
    "answers": [
      { "text": "chroot /var/chroot /usr/sbin/httpd", "correct": true },
      { "text": "jail /var/chroot /usr/sbin/httpd", "correct": false },
      { "text": "restrict /var/chroot /usr/sbin/httpd", "correct": false },
      { "text": "secure /var/chroot /usr/sbin/httpd", "correct": false }
    ]
  },
  {
    "question": "After observing SELinux denials in the audit log, an administrator wants to generate new policy rules to allow the desired action. Which sequence of tools should they use?",
    "answers": [
      { "text": "setenforce, getenforce, restorecon", "correct": false },
      { "text": "audit2allow, then compile with checkpolicy", "correct": true },
      { "text": "getenforce, then chcon", "correct": false },
      { "text": "semanage, then restorecon", "correct": false }
    ]
  },
  {
    "question": "Which command will display the current SELinux operating mode to an administrator?",
    "answers": [
      { "text": "sestatus", "correct": false },
      { "text": "getenforce", "correct": true },
      { "text": "setenforce", "correct": false },
      { "text": "selinux-status", "correct": false }
    ]
  },
  {
    "question": "An administrator is tasked with verifying that only authorized services are running. Which command could they use to list open network ports on a UNIX system?",
    "answers": [
      { "text": "ps aux", "correct": false },
      { "text": "netstat –an | grep LISTEN", "correct": true },
      { "text": "lsof –i:80", "correct": false },
      { "text": "chkconfig", "correct": false }
    ]
  },
  {
    "question": "To enforce that only known hosts can mount an NFS export, which configuration file should be edited on the NFS server?",
    "answers": [
      { "text": "/etc/exports", "correct": true },
      { "text": "/etc/fstab", "correct": false },
      { "text": "/etc/hosts.allow", "correct": false },
      { "text": "/etc/nfs.conf", "correct": false }
    ]
  },
  {
    "question": "A security auditor wants to ensure that file integrity on critical system binaries is maintained. Which tool is most suitable for periodic checksum verification?",
    "answers": [
      { "text": "tripwire", "correct": true },
      { "text": "psacct", "correct": false },
      { "text": "syslog", "correct": false },
      { "text": "chroot", "correct": false }
    ]
  },
  {
    "question": "When reviewing audit logs for potential intrusions, which log file is most commonly examined on a UNIX system?",
    "answers": [
      { "text": "/var/log/secure", "correct": false },
      { "text": "/var/log/audit/audit.log", "correct": true },
      { "text": "/var/log/messages", "correct": false },
      { "text": "/var/log/syslog", "correct": false }
    ]
  },
  {
    "question": "To disable an insecure service such as Telnet from running at boot, what is the recommended course of action?",
    "answers": [
      { "text": "Block Telnet via the firewall only", "correct": false },
      { "text": "Stop the service and remove it from startup scripts", "correct": true },
      { "text": "Change its default port number", "correct": false },
      { "text": "Encrypt its traffic with SSL", "correct": false }
    ]
  }
];
