const questionBank = [
  {
    "question": "What is a process in UNIX?",
    "answers": [
      { "text": "A program stored on disk", "correct": false },
      { "text": "A program running in memory on the CPU", "correct": true },
      { "text": "A set of files containing user data", "correct": false },
      { "text": "A configuration file for daemons", "correct": false }
    ]
  },
  {
    "question": "Which term describes a process that is not associated with a terminal?",
    "answers": [
      { "text": "User process", "correct": false },
      { "text": "Parent process", "correct": false },
      { "text": "Child process", "correct": false },
      { "text": "Daemon process", "correct": true }
    ]
  },
  {
    "question": "What does PID stand for?",
    "answers": [
      { "text": "Process Identifier", "correct": true },
      { "text": "Process Initialization Data", "correct": false },
      { "text": "Program Instruction Directory", "correct": false },
      { "text": "Parent Identifier", "correct": false }
    ]
  },
  {
    "question": "Which process is responsible for starting most other daemons during system initialization?",
    "answers": [
      { "text": "init daemon", "correct": true },
      { "text": "login program", "correct": false },
      { "text": "shell", "correct": false },
      { "text": "cron daemon", "correct": false }
    ]
  },
  {
    "question": "What information does the “ps –f” command display in addition to the default output?",
    "answers": [
      { "text": "Only the process IDs", "correct": false },
      { "text": "UID, PPID, start time, and CPU utilization", "correct": true },
      { "text": "Only the CPU usage", "correct": false },
      { "text": "Network statistics", "correct": false }
    ]
  },
  {
    "question": "In the context of process states, what does 'R' indicate?",
    "answers": [
      { "text": "The process is running", "correct": true },
      { "text": "The process is in an interruptible sleep", "correct": false },
      { "text": "The process is waiting for disk access", "correct": false },
      { "text": "The process is stopped", "correct": false }
    ]
  },
  {
    "question": "What state is represented by 'Z' in process listings?",
    "answers": [
      { "text": "Running", "correct": false },
      { "text": "Sleeping", "correct": false },
      { "text": "Zombie (finished but not reaped by its parent)", "correct": true },
      { "text": "Stopped by a signal", "correct": false }
    ]
  },
  {
    "question": "Which command is used to change a process's priority before it starts?",
    "answers": [
      { "text": "renice", "correct": false },
      { "text": "nice", "correct": true },
      { "text": "chrt", "correct": false },
      { "text": "ionice", "correct": false }
    ]
  },
  {
    "question": "What is the range of the nice value used to influence process priority?",
    "answers": [
      { "text": "0 to 127", "correct": false },
      { "text": "-20 to 19", "correct": true },
      { "text": "1 to 100", "correct": false },
      { "text": "-100 to 0", "correct": false }
    ]
  },
  {
    "question": "Which command allows you to change the priority of a running process?",
    "answers": [
      { "text": "nice", "correct": false },
      { "text": "renice", "correct": true },
      { "text": "top", "correct": false },
      { "text": "ps", "correct": false }
    ]
  },
  {
    "question": "The pstree command displays:",
    "answers": [
      { "text": "Process IDs in numerical order", "correct": false },
      { "text": "A hierarchical tree of processes showing parent–child relationships", "correct": true },
      { "text": "Network connections of processes", "correct": false },
      { "text": "Memory usage per process", "correct": false }
    ]
  },
  {
    "question": "Which command provides an interactive real-time view of processes sorted by CPU usage?",
    "answers": [
      { "text": "ps", "correct": false },
      { "text": "top", "correct": true },
      { "text": "pstree", "correct": false },
      { "text": "jobs", "correct": false }
    ]
  },
  {
    "question": "Which signal is considered the absolute kill signal that cannot be trapped by a process?",
    "answers": [
      { "text": "SIGTERM (15)", "correct": false },
      { "text": "SIGINT (2)", "correct": false },
      { "text": "SIGKILL (9)", "correct": true },
      { "text": "SIGHUP (1)", "correct": false }
    ]
  },
  {
    "question": "The kill command is used to:",
    "answers": [
      { "text": "Start new processes", "correct": false },
      { "text": "Change process ownership", "correct": false },
      { "text": "Send signals to processes", "correct": true },
      { "text": "Schedule processes for execution", "correct": false }
    ]
  },
  {
    "question": "What does the killall command do?",
    "answers": [
      { "text": "Kills a single process by PID", "correct": false },
      { "text": "Kills all processes running as a specific user", "correct": false },
      { "text": "Kills all processes with the same process name", "correct": true },
      { "text": "Kills all background processes", "correct": false }
    ]
  },
  {
    "question": "Which command can be used to send signals to processes using regular expressions?",
    "answers": [
      { "text": "pkill", "correct": true },
      { "text": "killall", "correct": false },
      { "text": "renice", "correct": false },
      { "text": "at", "correct": false }
    ]
  },
  {
    "question": "Foreground processes differ from background processes in that:",
    "answers": [
      { "text": "Foreground processes do not receive signals", "correct": false },
      { "text": "The shell waits for foreground processes to finish before accepting new commands", "correct": true },
      { "text": "Background processes run faster", "correct": false },
      { "text": "Background processes have higher priority", "correct": false }
    ]
  },
  {
    "question": "Appending an ampersand (&) to a command in the shell will:",
    "answers": [
      { "text": "Run the command with elevated privileges", "correct": false },
      { "text": "Run the command in the background", "correct": true },
      { "text": "Redirect the output to a file", "correct": false },
      { "text": "Pause the command execution", "correct": false }
    ]
  },
  {
    "question": "Which two daemons are mentioned for scheduling future command execution?",
    "answers": [
      { "text": "cron and at", "correct": true },
      { "text": "systemd and init", "correct": false },
      { "text": "psacct and syslog", "correct": false },
      { "text": "renice and kill", "correct": false }
    ]
  },
  {
    "question": "The command ‘fg’ is used to:",
    "answers": [
      { "text": "Send a process to the background", "correct": false },
      { "text": "Bring a background process to the foreground", "correct": true },
      { "text": "Terminate a process", "correct": false },
      { "text": "Change a process's priority", "correct": false }
    ]
  },
  {
    "question": "A process is simply a program stored on disk.",
    "answers": [
      { "text": "False", "correct": true },
      { "text": "True", "correct": false }
    ]
  },
  {
    "question": "A daemon process is a system process that is not associated with any terminal.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Every process has a unique process identifier (PID).",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A child process is always created by the init daemon.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The ‘ps -e’ command displays processes from all terminals, including daemons.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The process state 'T' indicates that a process is currently running.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The nice value can be set between -20 (highest priority) and 19 (lowest priority).",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The renice command is used to change the priority of a process after it has already started.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The pstree command shows the parent-child relationships between processes.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The top command can be used to kill processes interactively.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A zombie process is one that has finished executing but still remains because its parent hasn’t reaped its PID.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The SIGTERM signal is the default kill signal used by the kill command.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The SIGKILL signal can be trapped by a process to perform cleanup operations.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "killall kills processes based on their PID.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Foreground processes block the shell until they complete.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Using the bg command will move a paused job into the background.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The at daemon schedules commands to execute repeatedly in the future.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Using ctrl+z pauses a foreground process.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ‘jobs’ command displays background processes associated with the current shell.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Scheduling commands during nonworking hours is considered good practice for system maintenance.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A system administrator needs to view a detailed list of all processes including their parent process IDs and CPU utilization. Which command should they use?",
    "answers": [
      { "text": "ps -e", "correct": false },
      { "text": "ps -f", "correct": true },
      { "text": "top", "correct": false },
      { "text": "pstree", "correct": false }
    ]
  },
  {
    "question": "A user reports that a particular process is consuming too much CPU time. Which command can be used to adjust its priority after it has started?",
    "answers": [
      { "text": "nice", "correct": false },
      { "text": "renice", "correct": true },
      { "text": "ps", "correct": false },
      { "text": "kill", "correct": false }
    ]
  },
  {
    "question": "When a process becomes unresponsive and must be terminated immediately, which kill signal should be used as a last resort?",
    "answers": [
      { "text": "SIGTERM (15)", "correct": false },
      { "text": "SIGINT (2)", "correct": false },
      { "text": "SIGKILL (9)", "correct": true },
      { "text": "SIGHUP (1)", "correct": false }
    ]
  },
  {
    "question": "An administrator wants to view the entire hierarchy of processes to trace a rogue process back to its origin. Which command should they use?",
    "answers": [
      { "text": "ps", "correct": false },
      { "text": "top", "correct": false },
      { "text": "pstree", "correct": true },
      { "text": "jobs", "correct": false }
    ]
  },
  {
    "question": "A background process is running a long task. Which command should the administrator use to bring this process to the foreground?",
    "answers": [
      { "text": "bg", "correct": false },
      { "text": "fg", "correct": true },
      { "text": "renice", "correct": false },
      { "text": "kill", "correct": false }
    ]
  },
  {
    "question": "To schedule a system maintenance script to run every night at 2 AM, which daemon is most appropriate to configure?",
    "answers": [
      { "text": "at", "correct": false },
      { "text": "cron", "correct": true },
      { "text": "init", "correct": false },
      { "text": "top", "correct": false }
    ]
  },
  {
    "question": "A process in the background is paused. Which key combination would a user press to suspend a currently running foreground process?",
    "answers": [
      { "text": "ctrl+c", "correct": false },
      { "text": "ctrl+z", "correct": true },
      { "text": "ctrl+d", "correct": false },
      { "text": "ctrl+x", "correct": false }
    ]
  },
  {
    "question": "A user wants to run a command in the background so that they can continue using the terminal. Which symbol should be appended to the command?",
    "answers": [
      { "text": "|", "correct": false },
      { "text": "&", "correct": true },
      { "text": "$", "correct": false },
      { "text": "%", "correct": false }
    ]
  },
  {
    "question": "When troubleshooting a rogue process that is a child of a parent process, what is one recommended method to ensure its termination?",
    "answers": [
      { "text": "Kill the child process only", "correct": false },
      { "text": "Kill the parent process so that it terminates all its child processes", "correct": true },
      { "text": "Increase the child’s nice value", "correct": false },
      { "text": "Restart the shell", "correct": false }
    ]
  },
  {
    "question": "If a scheduled maintenance job fails to run, which utility should the administrator check to confirm that the job is correctly scheduled?",
    "answers": [
      { "text": "ps", "correct": false },
      { "text": "atq (or crontab -l)", "correct": true },
      { "text": "top", "correct": false },
      { "text": "jobs", "correct": false }
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
    "question": "A system administrator needs to back up the entire system to a bootable tape for quick restoration. Which of the following commands is most appropriate?",
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
    "question": "A system administrator needs to back up the entire system to a bootable tape for quick restoration. Which of the following commands is most appropriate?",
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
      { "text": "usermod –f days username", "correct": true },
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
