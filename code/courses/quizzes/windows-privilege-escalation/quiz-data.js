const questionBank = [
  {
    "question": "What is the primary purpose of privilege escalation during a penetration test?",
    "answers": [
      { "text": "Bypassing user authentication mechanisms", "correct": false },
      { "text": "Obtaining control of all system operations", "correct": true },
      { "text": "Preventing attackers from accessing the system", "correct": false },
      { "text": "Configuring network firewalls", "correct": false },
      { "text": "Conducting brute-force attacks", "correct": false }
    ]
  },
  {
    "question": "Which command is used in Meterpreter to determine the current user privileges?",
    "answers": [
      { "text": "net user", "correct": false },
      { "text": "whoami", "correct": false },
      { "text": "icacls", "correct": false },
      { "text": "net localgroup", "correct": false },
      { "text": "getuid", "correct": true }
    ]
  },
  {
    "question": "Which of the following accounts has the highest privilege in an Active Directory forest?",
    "answers": [
      { "text": "Local administrator", "correct": false },
      { "text": "Delegated administrator", "correct": false },
      { "text": "Enterprise administrator", "correct": true },
      { "text": "Domain administrator", "correct": false },
      { "text": "Schema administrator", "correct": false }
    ]
  },
  {
    "question": "What does the getsystem command in Meterpreter attempt to achieve?",
    "answers": [
      { "text": "Enumerate network shares", "correct": false },
      { "text": "List all user accounts", "correct": false },
      { "text": "Gain SYSTEM-level privileges", "correct": true },
      { "text": "Disable firewall rules", "correct": false },
      { "text": "Exploit local group permissions", "correct": false }
    ]
  },
  {
    "question": "Which user group allows modifying the Active Directory schema?",
    "answers": [
      { "text": "Enterprise administrator", "correct": false },
      { "text": "Domain administrator", "correct": false },
      { "text": "Local administrator", "correct": false },
      { "text": "Delegated administrator", "correct": false },
      { "text": "Schema administrator", "correct": true }
    ]
  },
  {
    "question": "What is the role of the priv extension in Meterpreter?",
    "answers": [
      { "text": "Displays current user information", "correct": false },
      { "text": "Facilitates SYSTEM-level privilege escalation", "correct": true },
      { "text": "Configures network firewalls", "correct": false },
      { "text": "Enumerates user accounts", "correct": false },
      { "text": "Modifies file permissions", "correct": false }
    ]
  },
  {
    "question": "Which command lists all local user groups on a Windows host?",
    "answers": [
      { "text": "net share", "correct": false },
      { "text": "whoami", "correct": false },
      { "text": "net localgroup", "correct": true },
      { "text": "net user", "correct": false },
      { "text": "cacls", "correct": false }
    ]
  },
  {
    "question": "What is the expected response when a normal user attempts to run a system-level command?",
    "answers": [
      { "text": "Access granted", "correct": false },
      { "text": "Command not found", "correct": false },
      { "text": "Access denied", "correct": true },
      { "text": "Command executed successfully", "correct": false },
      { "text": "File not found", "correct": false }
    ]
  },
  {
    "question": "Which of the following commands is useful for listing network shares on a target host?",
    "answers": [
      { "text": "net user", "correct": false },
      { "text": "icacls", "correct": false },
      { "text": "net share", "correct": true },
      { "text": "net localgroup", "correct": false },
      { "text": "whoami", "correct": false }
    ]
  },
  {
    "question": "What does the icacls command check on a Windows host?",
    "answers": [
      { "text": "Network connections", "correct": false },
      { "text": "Current user privileges", "correct": false },
      { "text": "Local user groups", "correct": false },
      { "text": "File and folder permissions", "correct": true },
      { "text": "Domain configurations", "correct": false }
    ]
  },
  {
    "question": "Privilege escalation enables attackers to control all systems across a network.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The getsystem command in Meterpreter stops after all methods fail.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Domain administrators can modify the Active Directory schema.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The whoami command provides detailed information about user accounts.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Local administrators are always domain administrators.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The net user command lists all current connections.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Schema administrators can configure the Active Directory schema.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The priv extension is required to execute the getsystem command in Meterpreter.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The icacls command is a legacy command used in Windows Vista and later versions.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Enterprise administrators maintain control of the entire forest in an Active Directory.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You are attempting to escalate privileges using Meterpreter and the getsystem command fails. What is your next logical step?",
    "answers": [
      { "text": "Restart the target system", "correct": false },
      { "text": "Background the session and attempt additional local exploits", "correct": true },
      { "text": "Log out and reconnect the session", "correct": false },
      { "text": "Attempt password brute-forcing", "correct": false },
      { "text": "Disable the firewall on the target system", "correct": false }
    ]
  },
  {
    "question": "A target Windows host shows numerous weak file permissions using the icacls command. Which of the following actions should you prioritize?",
    "answers": [
      { "text": "Modify the file permissions to restrict access", "correct": false },
      { "text": "Identify exploitable files for privilege escalation", "correct": true },
      { "text": "Share the files across the network", "correct": false },
      { "text": "Run getsystem on the files", "correct": false },
      { "text": "Perform a port scan on the system", "correct": false }
    ]
  },
  {
    "question": "During a penetration test, you determine that the net share command reveals sensitive files shared across the network. How can you use this information for privilege escalation?",
    "answers": [
      { "text": "By gaining SYSTEM-level privileges directly", "correct": false },
      { "text": "By accessing hidden secrets that provide additional credentials", "correct": true },
      { "text": "By modifying the schema of the Active Directory", "correct": false },
      { "text": "By disabling shared folder access", "correct": false },
      { "text": "By listing local groups", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes privilege escalation?",
    "answers": [
      { "text": "Gaining access to the system logs", "correct": false },
      { "text": "Transitioning from low-level to high-level access rights", "correct": true },
      { "text": "Running a script to disable firewalls", "correct": false },
      { "text": "Bypassing user authentication entirely", "correct": false },
      { "text": "Scanning the network for vulnerabilities", "correct": false }
    ]
  },
  {
    "question": "What command is used in Meterpreter to identify the user privileges of a session?",
    "answers": [
      { "text": "netstat", "correct": false },
      { "text": "whoami", "correct": true },
      { "text": "getuid", "correct": false },
      { "text": "setpriv", "correct": false },
      { "text": "privcheck", "correct": false }
    ]
  },
  {
    "question": "Which account type has the most privileges for maintaining the entire forest in an Active Directory?",
    "answers": [
      { "text": "Local Administrator", "correct": false },
      { "text": "Delegated Administrator", "correct": false },
      { "text": "Schema Administrator", "correct": false },
      { "text": "Enterprise Administrator", "correct": true },
      { "text": "Domain Administrator", "correct": false }
    ]
  },
  {
    "question": "The getsystem command in Meterpreter is primarily used for which purpose?",
    "answers": [
      { "text": "Listing active sessions", "correct": false },
      { "text": "Gaining SYSTEM-level privileges", "correct": true },
      { "text": "Dumping user credentials", "correct": false },
      { "text": "Terminating user sessions", "correct": false },
      { "text": "Escalating privileges via group policies", "correct": false }
    ]
  },
  {
    "question": "What command is used to list the local groups on a Windows system?",
    "answers": [
      { "text": "net localgroup", "correct": true },
      { "text": "net group", "correct": false },
      { "text": "groupinfo", "correct": false },
      { "text": "getgroups", "correct": false },
      { "text": "setgroup", "correct": false }
    ]
  },
  {
    "question": "What type of access does the (F) permission provide in Windows systems?",
    "answers": [
      { "text": "Modify access", "correct": false },
      { "text": "Full access", "correct": true },
      { "text": "Read-only access", "correct": false },
      { "text": "Write access", "correct": false },
      { "text": "No access", "correct": false }
    ]
  },
  {
    "question": "What is a common response when a normal user tries to run system-level commands on a target system?",
    "answers": [
      { "text": "Command runs successfully", "correct": false },
      { "text": "No response from the system", "correct": false },
      { "text": "Access denied message", "correct": true },
      { "text": "The session terminates", "correct": false },
      { "text": "Privileges escalate automatically", "correct": false }
    ]
  },
  {
    "question": "Which command is used to list all current connections established on a Windows host?",
    "answers": [
      { "text": "netsh", "correct": false },
      { "text": "netstat", "correct": true },
      { "text": "showcon", "correct": false },
      { "text": "connlist", "correct": false },
      { "text": "tcpcheck", "correct": false }
    ]
  },
  {
    "question": "In privilege escalation, which type of user account allows configuration of the schema of the Active Directory forest?",
    "answers": [
      { "text": "Domain Administrator", "correct": false },
      { "text": "Schema Administrator", "correct": true },
      { "text": "Enterprise Administrator", "correct": false },
      { "text": "Backup Operator", "correct": false },
      { "text": "Local Administrator", "correct": false }
    ]
  },
  {
    "question": "Which tool in Metasploit allows attackers to attempt privilege escalation methods automatically?",
    "answers": [
      { "text": "background", "correct": false },
      { "text": "getshell", "correct": false },
      { "text": "getsystem", "correct": true },
      { "text": "escalate_priv", "correct": false },
      { "text": "syscheck", "correct": false }
    ]
  },
  {
    "question": "The icacls command is used for what purpose in Windows systems?",
    "answers": [
      { "text": "Managing user groups", "correct": false },
      { "text": "Checking folder and file permissions", "correct": true },
      { "text": "Creating network shares", "correct": false },
      { "text": "Managing firewall rules", "correct": false },
      { "text": "Checking system logs", "correct": false }
    ]
  },
  {
    "question": "Why is it important to list local users during privilege escalation?",
    "answers": [
      { "text": "To reset user passwords", "correct": false },
      { "text": "To switch to another user with higher privileges", "correct": true },
      { "text": "To terminate active sessions", "correct": false },
      { "text": "To bypass account restrictions", "correct": false },
      { "text": "To back up user credentials", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the priv extension in Meterpreter?",
    "answers": [
      { "text": "To list available commands", "correct": false },
      { "text": "To manage user groups", "correct": false },
      { "text": "To support privilege escalation commands", "correct": true },
      { "text": "To enable network diagnostics", "correct": false },
      { "text": "To dump system logs", "correct": false }
    ]
  },
  {
    "question": "Which privilege level allows users to run system configuration changes on a local machine?",
    "answers": [
      { "text": "Normal User", "correct": false },
      { "text": "Delegated Administrator", "correct": false },
      { "text": "Local Administrator", "correct": true },
      { "text": "Domain Administrator", "correct": false },
      { "text": "Schema Administrator", "correct": false }
    ]
  },
  {
    "question": "The command net user is used to:",
    "answers": [
      { "text": "List firewall rules.", "correct": false },
      { "text": "Retrieve user details for privilege escalation.", "correct": true },
      { "text": "Display active sessions.", "correct": false },
      { "text": "Share network resources.", "correct": false },
      { "text": "Modify user passwords.", "correct": false }
    ]
  },
  {
    "question": "What is the primary reason for accessing network shares during an attack?",
    "answers": [
      { "text": "To disable the target system.", "correct": false },
      { "text": "To reveal hidden information.", "correct": true },
      { "text": "To escalate user permissions.", "correct": false },
      { "text": "To terminate active sessions.", "correct": false },
      { "text": "To manage access policies.", "correct": false }
    ]
  },
  {
    "question": "Which of the following commands is best used for listing firewall configurations?",
    "answers": [
      { "text": "icacls", "correct": false },
      { "text": "netstat", "correct": false },
      { "text": "netsh", "correct": true },
      { "text": "netfw", "correct": false },
      { "text": "firecheck", "correct": false }
    ]
  },
  {
    "question": "Which user account is typically associated with limited system access?",
    "answers": [
      { "text": "Normal User", "correct": true },
      { "text": "Delegated Administrator", "correct": false },
      { "text": "Domain Administrator", "correct": false },
      { "text": "Enterprise Administrator", "correct": false },
      { "text": "Local Administrator", "correct": false }
    ]
  },
  {
    "question": "Which local exploit is used for privilege escalation on a 32-bit Windows machine?",
    "answers": [
      { "text": "Kitrap0d", "correct": true },
      { "text": "Cacls", "correct": false },
      { "text": "Icacls", "correct": false },
      { "text": "Netsh", "correct": false },
      { "text": "Tcpdump", "correct": false }
    ]
  },
  {
    "question": "Why might the getsystem command fail during an attack?",
    "answers": [
      { "text": "It only works on older systems.", "correct": false },
      { "text": "It is incompatible with Active Directory environments.", "correct": false },
      { "text": "The system has strong exploit protections.", "correct": true },
      { "text": "The user lacks the priv extension.", "correct": false },
      { "text": "It requires a restart to function properly.", "correct": false }
    ]
  },
  {
    "question": "Privilege escalation allows attackers to bypass user authentication entirely.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Schema administrators have the most privileges for maintaining Active Directory forests.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The getsystem command stops when it successfully escalates privileges.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The net share command can list all active network shares.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Using getuid provides information on current user privileges.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Domain administrators can configure the schema of the Active Directory forest.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The net localgroup command lists local user groups on a Windows system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Firewall configurations can be managed using the icacls command.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Local administrators can modify access permissions on their own system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The whoami command provides the current user's session ID.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  }
];
