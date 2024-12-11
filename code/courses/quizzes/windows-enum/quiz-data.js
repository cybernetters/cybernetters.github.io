const questionBank = [
  {
    "question": "What is required to dump password hashes in Windows?",
    "answers": [
      { "text": "Administrator account", "correct": false },
      { "text": "Local exploit suggester", "correct": false },
      { "text": "System-level access", "correct": true },
      { "text": "Active directory", "correct": false },
      { "text": "UAC bypass", "correct": false }
    ]
  },
  {
    "question": "Which command activates a user account in Windows via CMD?",
    "answers": [
      { "text": "net user /create", "correct": false },
      { "text": "net user <username> /active:yes", "correct": true },
      { "text": "useradd -active yes", "correct": false },
      { "text": "add-user /activate", "correct": false },
      { "text": "enable-user /status active", "correct": false }
    ]
  },
  {
    "question": "What command clears specific Windows event logs in Meterpreter?",
    "answers": [
      { "text": "clearevent", "correct": false },
      { "text": "wipeev", "correct": false },
      { "text": "clearev", "correct": true },
      { "text": "logclear", "correct": false },
      { "text": "resetlogs", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the Getprivs command in Meterpreter?",
    "answers": [
      { "text": "List all processes", "correct": false },
      { "text": "Kill specific processes", "correct": false },
      { "text": "Display available privileges", "correct": true },
      { "text": "Switch user account", "correct": false },
      { "text": "Enumerate network shares", "correct": false }
    ]
  },
  {
    "question": "Which privilege allows debugging in Windows, useful for escalation?",
    "answers": [
      { "text": "SeDebugPrivilege", "correct": true },
      { "text": "SeImpersonatePrivilege", "correct": false },
      { "text": "SeServicePrivilege", "correct": false },
      { "text": "SeChangeNotifyPrivilege", "correct": false },
      { "text": "SeBackupPrivilege", "correct": false }
    ]
  },
  {
    "question": "Which Meterpreter command provides details about the user’s desktop environment?",
    "answers": [
      { "text": "Getdesktop", "correct": true },
      { "text": "Listdesktop", "correct": false },
      { "text": "Screenshare", "correct": false },
      { "text": "Screeninfo", "correct": false },
      { "text": "Showdesktop", "correct": false }
    ]
  },
  {
    "question": "What is the role of ps in Meterpreter?",
    "answers": [
      { "text": "Listing all users", "correct": false },
      { "text": "Listing all running processes", "correct": true },
      { "text": "Viewing system logs", "correct": false },
      { "text": "Displaying privileges", "correct": false },
      { "text": "Managing shares", "correct": false }
    ]
  },
  {
    "question": "Which file does the SNMP MiB tree provide details about?",
    "answers": [
      { "text": "User accounts", "correct": false },
      { "text": "TCP ports", "correct": false },
      { "text": "Running programs", "correct": false },
      { "text": "All of the above", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What protocol does SMB enumeration primarily target?",
    "answers": [
      { "text": "UDP 161", "correct": false },
      { "text": "TCP 445", "correct": true },
      { "text": "TCP 22", "correct": false },
      { "text": "UDP 138", "correct": false },
      { "text": "TCP 80", "correct": false }
    ]
  },
  {
    "question": "Which Meterpreter command provides the system's local date and time?",
    "answers": [
      { "text": "Gettime", "correct": false },
      { "text": "Localtime", "correct": false },
      { "text": "Systemtime", "correct": false },
      { "text": "Timelocal", "correct": true },
      { "text": "Timeinfo", "correct": false }
    ]
  },
  {
    "question": "What is required for a successful pass-the-hash attack?",
    "answers": [
      { "text": "User account activation", "correct": false },
      { "text": "Correct registry configuration", "correct": false },
      { "text": "AV disabled", "correct": false },
      { "text": "All of the above", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What information can Sysinfo retrieve in Meterpreter?",
    "answers": [
      { "text": "Installed software", "correct": false },
      { "text": "System version and architecture", "correct": true },
      { "text": "User privileges", "correct": false },
      { "text": "Open ports", "correct": false },
      { "text": "Hashes", "correct": false }
    ]
  },
  {
    "question": "Which registry key must be altered for pass-the-hash to work?",
    "answers": [
      { "text": "HKLM\\System\\Registry", "correct": false },
      { "text": "HKLM\\SYSTEM\\CurrentControlSet\\Control\\Lsa", "correct": true },
      { "text": "HKCU\\Software\\Microsoft", "correct": false },
      { "text": "HKEY_LOCAL_MACHINE\\Security", "correct": false },
      { "text": "HKEY_USERS\\ControlSet", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of Screenshot in Meterpreter?",
    "answers": [
      { "text": "Capture desktop activity", "correct": true },
      { "text": "Record video", "correct": false },
      { "text": "List desktops", "correct": false },
      { "text": "Switch user sessions", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which command provides the MiB tree for SNMP?",
    "answers": [
      { "text": "snmpenum", "correct": false },
      { "text": "snmptree", "correct": false },
      { "text": "snmpwalk", "correct": true },
      { "text": "snmpinfo", "correct": false },
      { "text": "snmpdump", "correct": false }
    ]
  },
  {
    "question": "What does Get do in SMB enumeration?",
    "answers": [
      { "text": "Upload a file", "correct": false },
      { "text": "Download a file", "correct": true },
      { "text": "List shared directories", "correct": false },
      { "text": "Enumerate open ports", "correct": false },
      { "text": "Copy directory contents", "correct": false }
    ]
  },
  {
    "question": "What can a reg add command do during enumeration?",
    "answers": [
      { "text": "Add users", "correct": false },
      { "text": "Modify registry settings", "correct": true },
      { "text": "Delete event logs", "correct": false },
      { "text": "Start services", "correct": false },
      { "text": "Enable SNMP", "correct": false }
    ]
  },
  {
    "question": "Which enumeration tool lists installed software and versions?",
    "answers": [
      { "text": "wmic product", "correct": true },
      { "text": "reg add", "correct": false },
      { "text": "ps", "correct": false },
      { "text": "Getprivs", "correct": false },
      { "text": "Clearev", "correct": false }
    ]
  },
  {
    "question": "Which port does SNMP use for enumeration?",
    "answers": [
      { "text": "UDP 135", "correct": false },
      { "text": "UDP 161", "correct": true },
      { "text": "TCP 445", "correct": false },
      { "text": "UDP 80", "correct": false },
      { "text": "TCP 21", "correct": false }
    ]
  },
  {
    "question": "What type of data does Screenshare capture?",
    "answers": [
      { "text": "System logs", "correct": false },
      { "text": "Desktop in real time", "correct": true },
      { "text": "Privileges list", "correct": false },
      { "text": "Running processes", "correct": false },
      { "text": "Open ports", "correct": false }
    ]
  },
  {
    "question": "Windows stores passwords in plaintext.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Hashdumping requires system-level access.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The command clearev is used to clear Windows event logs.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Ps lists user privileges.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Pass-the-hash attacks do not require any user account activation.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Getdesktop retrieves the current user's desktop name.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Meterpreter's getprivs lists all privileges of the current session user.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SMB runs on TCP port 445.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SNMP enumeration targets TCP port 22.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Localtime displays the system's local time.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The command Screenshot in Meterpreter captures desktop images.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The SNMP MiB tree can provide information about user accounts.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Get command in SMB enumeration uploads a file to the target.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The registry key LimitBlankPasswordsUse must be set to 1 for pass-the-hash to work.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The snmpwalk tool is used for SNMP enumeration.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The wmic product get command lists open TCP ports.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Meterpreter’s Getprivs can be used to escalate privileges directly.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The SNMP protocol operates on UDP port 161.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Screenshare command in Meterpreter shows the desktop in real time.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SMB enumeration allows attackers to upload and download files if permissions allow.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You are attempting to dump password hashes from a compromised Windows machine, but hashdump fails. What is the most likely cause?",
    "answers": [
      { "text": "Incorrect command syntax", "correct": false },
      { "text": "Lack of system-level privileges", "correct": true },
      { "text": "The machine is not part of a domain", "correct": false },
      { "text": "Active directory is disabled", "correct": false },
      { "text": "The target system has no users", "correct": false }
    ]
  },
  {
    "question": "You attempt a pass-the-hash attack, but it fails. Which step might have been missed?",
    "answers": [
      { "text": "Activating the target user account", "correct": true },
      { "text": "Disabling UAC on the system", "correct": false },
      { "text": "Using a Metasploit exploit", "correct": false },
      { "text": "Clearing system logs", "correct": false },
      { "text": "Enumerating SMB shares", "correct": false }
    ]
  },
  {
    "question": "A client has requested an audit of installed software on their Windows system. Which command should you use?",
    "answers": [
      { "text": "net user /active", "correct": false },
      { "text": "ps", "correct": false },
      { "text": "wmic product get name,version", "correct": true },
      { "text": "snmpwalk", "correct": false },
      { "text": "Getdesktop", "correct": false }
    ]
  },
  {
    "question": "You want to verify which privileges a compromised user account holds. Which Meterpreter command should you use?",
    "answers": [
      { "text": "Getdesktop", "correct": false },
      { "text": "Getprivs", "correct": true },
      { "text": "Clearev", "correct": false },
      { "text": "Gettime", "correct": false },
      { "text": "Ps", "correct": false }
    ]
  },
  {
    "question": "While enumerating a Windows machine, you discover UDP port 161 is open. What should be your next step?",
    "answers": [
      { "text": "Use smbclient to list shares", "correct": false },
      { "text": "Run snmpwalk for SNMP enumeration", "correct": true },
      { "text": "Attempt to dump hashes using hashdump", "correct": false },
      { "text": "Check for installed software using wmic", "correct": false },
      { "text": "Disable AV on the system", "correct": false }
    ]
  },
  {
    "question": "An attacker uses the Screenshare command in Meterpreter. What is their likely objective?",
    "answers": [
      { "text": "Download event logs", "correct": false },
      { "text": "Watch user activity in real time", "correct": true },
      { "text": "Enumerate shared SMB drives", "correct": false },
      { "text": "List available privileges", "correct": false },
      { "text": "List installed software", "correct": false }
    ]
  },
  {
    "question": "A target system prevents privilege escalation using getsystem. What should you investigate next?",
    "answers": [
      { "text": "UAC bypass methods", "correct": true },
      { "text": "Available SMB shares", "correct": false },
      { "text": "Installed SNMP services", "correct": false },
      { "text": "System log clearing", "correct": false },
      { "text": "Active sessions", "correct": false }
    ]
  },
  {
    "question": "An attacker intends to enumerate open TCP ports using SNMP. Which MiB value should they look at?",
    "answers": [
      { "text": "1.3.6.1.2.1.25.4.2.1.2", "correct": false },
      { "text": "1.3.6.1.4.1.77.1.2.25", "correct": false },
      { "text": "1.3.6.1.2.1.6.13.1.3", "correct": true },
      { "text": "1.3.6.1.2.1.25.1.6.0", "correct": false },
      { "text": "1.3.6.1.2.1.25.2.3.1.4", "correct": false }
    ]
  },
  {
    "question": "A compromised machine has logging enabled. Which command would help hide evidence of an attack?",
    "answers": [
      { "text": "Getprivs", "correct": false },
      { "text": "Clearev", "correct": true },
      { "text": "hashdump", "correct": false },
      { "text": "Screenshare", "correct": false },
      { "text": "Getdesktop", "correct": false }
    ]
  },
  {
    "question": "After a successful pass-the-hash attack, what might allow persistent access to the target?",
    "answers": [
      { "text": "Creating a new user account", "correct": false },
      { "text": "Activating inactive accounts", "correct": false },
      { "text": "Disabling AV software", "correct": false },
      { "text": "Clearing event logs", "correct": false },
      { "text": "Using hashdump to reauthenticate", "correct": true }
    ]
  }
];
