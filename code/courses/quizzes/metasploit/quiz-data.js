const questionBank = [
  {
    "question": "Which edition of Metasploit is recommended for penetration testers and IT security teams?",
    "answers": [
      { "text": "A. Metasploit Framework", "correct": false },
      { "text": "B. Metasploit Pro", "correct": true },
      { "text": "C. Metasploit Lite", "correct": false },
      { "text": "D. Metasploit Core", "correct": false },
      { "text": "E. Metasploit Advanced", "correct": false }
    ]
  },
  {
    "question": "Which command is used to initialize the Metasploit database?",
    "answers": [
      { "text": "A. sudo start msfdb", "correct": false },
      { "text": "B. sudo msfdb init", "correct": true },
      { "text": "C. init msfdb", "correct": false },
      { "text": "D. start msfdb", "correct": false },
      { "text": "E. initialize database", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the banner command in Metasploit?",
    "answers": [
      { "text": "A. To update the framework", "correct": false },
      { "text": "B. To display framework version and modules count", "correct": true },
      { "text": "C. To initialize the database", "correct": false },
      { "text": "D. To display active payloads", "correct": false },
      { "text": "E. To exit Metasploit", "correct": false }
    ]
  },
  {
    "question": "What type of module does not require a payload to run?",
    "answers": [
      { "text": "A. Exploit", "correct": false },
      { "text": "B. Auxiliary", "correct": true },
      { "text": "C. Encoder", "correct": false },
      { "text": "D. Payload", "correct": false },
      { "text": "E. Post", "correct": false }
    ]
  },
  {
    "question": "Which variable in Metasploit specifies the IP address of the attacker's system?",
    "answers": [
      { "text": "A. RHOST", "correct": false },
      { "text": "B. LPORT", "correct": false },
      { "text": "C. RPORT", "correct": false },
      { "text": "D. LHOST", "correct": true },
      { "text": "E. TARGET", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the setg command in Metasploit?",
    "answers": [
      { "text": "A. To set a local variable", "correct": false },
      { "text": "B. To define a global variable", "correct": true },
      { "text": "C. To unset a variable", "correct": false },
      { "text": "D. To list all variables", "correct": false },
      { "text": "E. To save the current environment", "correct": false }
    ]
  },
  {
    "question": "Which auxiliary module is used to enumerate the HTTP server version?",
    "answers": [
      { "text": "A. auxiliary/scanner/http/http_version", "correct": true },
      { "text": "B. auxiliary/scanner/portscan/tcp", "correct": false },
      { "text": "C. auxiliary/http/brute_dirs", "correct": false },
      { "text": "D. auxiliary/scanner/vnc/vnc_login", "correct": false },
      { "text": "E. auxiliary/scanner/ssh/ssh_version", "correct": false }
    ]
  },
  {
    "question": "What does the sessions command do in Metasploit?",
    "answers": [
      { "text": "A. Lists and interacts with active sessions", "correct": true },
      { "text": "B. Shows all active payloads", "correct": false },
      { "text": "C. Lists all exploits", "correct": false },
      { "text": "D. Starts a new session", "correct": false },
      { "text": "E. Kills the framework process", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an example of a payload in Metasploit?",
    "answers": [
      { "text": "A. Reverse TCP Shell", "correct": true },
      { "text": "B. SQL Injection", "correct": false },
      { "text": "C. Port Scan", "correct": false },
      { "text": "D. Web Directory Scan", "correct": false },
      { "text": "E. FTP Brute Force", "correct": false }
    ]
  },
  {
    "question": "Which command is used to list all auxiliary modules in Metasploit?",
    "answers": [
      { "text": "A. show payloads", "correct": false },
      { "text": "B. list auxiliary", "correct": false },
      { "text": "C. show auxiliary", "correct": true },
      { "text": "D. list all modules", "correct": false },
      { "text": "E. show exploits", "correct": false }
    ]
  },
  {
    "question": "How many categories of auxiliary modules does Metasploit have?",
    "answers": [
      { "text": "A. 10", "correct": false },
      { "text": "B. 15", "correct": false },
      { "text": "C. 19", "correct": true },
      { "text": "D. 20", "correct": false },
      { "text": "E. 25", "correct": false }
    ]
  },
  {
    "question": "What does the unset all command do in Metasploit?",
    "answers": [
      { "text": "A. Deletes all payloads", "correct": false },
      { "text": "B. Resets all configurations", "correct": false },
      { "text": "C. Removes all set variables", "correct": true },
      { "text": "D. Clears the database", "correct": false },
      { "text": "E. Exits the session", "correct": false }
    ]
  },
  {
    "question": "Which module helps bypass antivirus detection in Metasploit?",
    "answers": [
      { "text": "A. Exploit", "correct": false },
      { "text": "B. Auxiliary", "correct": false },
      { "text": "C. Encoder", "correct": true },
      { "text": "D. Post", "correct": false },
      { "text": "E. Payload", "correct": false }
    ]
  },
  {
    "question": "What is the makerc command used for?",
    "answers": [
      { "text": "A. To create a reverse shell", "correct": false },
      { "text": "B. To write session command history to a file", "correct": true },
      { "text": "C. To manage auxiliary modules", "correct": false },
      { "text": "D. To configure variables", "correct": false },
      { "text": "E. To initialize the database", "correct": false }
    ]
  },
  {
    "question": "Which type of shell is a payload that creates a connection back to the attacker?",
    "answers": [
      { "text": "A. Bind shell", "correct": false },
      { "text": "B. Reverse shell", "correct": true },
      { "text": "C. Meterpreter shell", "correct": false },
      { "text": "D. Interactive shell", "correct": false },
      { "text": "E. Passive shell", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the check command in Metasploit?",
    "answers": [
      { "text": "A. Exploits a target", "correct": false },
      { "text": "B. Verifies if a target is vulnerable", "correct": true },
      { "text": "C. Updates the framework", "correct": false },
      { "text": "D. Configures global variables", "correct": false },
      { "text": "E. Lists all active sessions", "correct": false }
    ]
  },
  {
    "question": "What does the jobs command do in Metasploit?",
    "answers": [
      { "text": "A. Lists active payloads", "correct": false },
      { "text": "B. Terminates active sessions", "correct": false },
      { "text": "C. Lists and manages background tasks", "correct": true },
      { "text": "D. Shows system logs", "correct": false },
      { "text": "E. Updates exploit modules", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an example of post-exploitation activity?",
    "answers": [
      { "text": "A. Privilege escalation", "correct": true },
      { "text": "B. Port scanning", "correct": false },
      { "text": "C. SQL injection", "correct": false },
      { "text": "D. HTTP enumeration", "correct": false },
      { "text": "E. SSH brute forcing", "correct": false }
    ]
  },
  {
    "question": "Which command displays module-specific settings?",
    "answers": [
      { "text": "A. show advanced", "correct": false },
      { "text": "B. show targets", "correct": false },
      { "text": "C. show options", "correct": true },
      { "text": "D. list settings", "correct": false },
      { "text": "E. module info", "correct": false }
    ]
  },
  {
    "question": "What is the default path for the Metasploit Framework on Kali Linux?",
    "answers": [
      { "text": "A. /usr/local/metasploit", "correct": false },
      { "text": "B. /opt/metasploit-framework", "correct": false },
      { "text": "C. /usr/share/metasploit-framework", "correct": true },
      { "text": "D. /var/metasploit", "correct": false },
      { "text": "E. /etc/metasploit", "correct": false }
    ]
  },
  {
    "question": "The help command in Metasploit provides descriptions of all available commands.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Metasploit Pro is an open-source edition.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The info command provides details about a specific module.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Auxiliary modules in Metasploit require payloads to execute.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Encoders in Metasploit help bypass antivirus systems.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Global variables in Metasploit persist across sessions unless explicitly unset.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The search command in Metasploit can use regular expressions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The sessions command can only terminate active sessions.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A bind shell connects the attacker to a specific port on the target machine.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The unset command removes all assigned global variables.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },  
  {
    "question": "The setg command in Metasploit assigns a value to a variable globally across all sessions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A reverse TCP shell establishes a connection from the attacker to the target system.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The show targets command lists supported operating systems for a given exploit.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Encoders in Metasploit can completely prevent payload detection by all antivirus software.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The jobs -l command lists all background tasks running in Metasploit.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Metasploit Framework includes over 1,900 exploit modules.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The exploit command is used to check the vulnerabilities of a target without exploitation.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The get command retrieves values of global variables.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Post-exploitation modules assist in tasks such as privilege escalation and persistent access.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The unset all command removes all configured local and global variables.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You want to scan a target system for open TCP ports using an auxiliary module. Which commands should you run?",
    "answers": [
      { "text": "use auxiliary/scanner/http/http_version → set RHOSTS → run", "correct": false },
      { "text": "use auxiliary/scanner/portscan/tcp → set RHOSTS → run", "correct": true },
      { "text": "use auxiliary/scanner/ssh/ssh_version → set RPORT → run", "correct": false },
      { "text": "use exploit/windows/smb/ms08_067_netapi → set LHOST → exploit", "correct": false },
      { "text": "search auxiliary/portscan → run", "correct": false }
    ]
  },
  {
    "question": "You need to brute force VNC credentials on a target. Which module and steps are correct?",
    "answers": [
      { "text": "use auxiliary/scanner/vnc/vnc_login → set RHOST → set USERNAME → exploit", "correct": false },
      { "text": "use auxiliary/scanner/vnc/vnc_login → set RHOSTS → run", "correct": true },
      { "text": "use exploit/multi/vnc/vnc_inject → set RPORT → exploit", "correct": false },
      { "text": "use auxiliary/scanner/vnc/vnc_enum → set RHOST → run", "correct": false },
      { "text": "search vnc brute force → exploit", "correct": false }
    ]
  },
  {
    "question": "After selecting a specific module, what command allows you to view required configurations for that module?",
    "answers": [
      { "text": "info", "correct": false },
      { "text": "show options", "correct": true },
      { "text": "show advanced", "correct": false },
      { "text": "show payloads", "correct": false },
      { "text": "check", "correct": false }
    ]
  },
  {
    "question": "If you are unsure which exploits are available in Metasploit, which command would you use?",
    "answers": [
      { "text": "show auxiliary", "correct": false },
      { "text": "show exploits", "correct": true },
      { "text": "show payloads", "correct": false },
      { "text": "list modules", "correct": false },
      { "text": "search all", "correct": false }
    ]
  },
  {
    "question": "To create persistent access on a compromised system using a post-exploitation module, what would you use?",
    "answers": [
      { "text": "meterpreter > run persistence", "correct": true },
      { "text": "exploit/windows/smb/ms08_067_netapi", "correct": false },
      { "text": "set PAYLOAD windows/meterpreter/reverse_tcp", "correct": false },
      { "text": "use auxiliary/scanner/smb/smb_login", "correct": false },
      { "text": "sessions -i", "correct": false }
    ]
  },
  {
    "question": "You need to ensure a saved Metasploit environment loads automatically on startup. What command should you use?",
    "answers": [
      { "text": "save", "correct": true },
      { "text": "setg", "correct": false },
      { "text": "getg", "correct": false },
      { "text": "show options", "correct": false },
      { "text": "initialize", "correct": false }
    ]
  },
  {
    "question": "You wish to identify whether a target is vulnerable before running an exploit. Which command should you use?",
    "answers": [
      { "text": "show options", "correct": false },
      { "text": "exploit", "correct": false },
      { "text": "check", "correct": true },
      { "text": "setg", "correct": false },
      { "text": "info", "correct": false }
    ]
  },
  {
    "question": "A target system is suspected of running an outdated SSH server. Which auxiliary module would you use?",
    "answers": [
      { "text": "auxiliary/scanner/http/http_version", "correct": false },
      { "text": "auxiliary/scanner/ssh/ssh_version", "correct": true },
      { "text": "exploit/unix/ssh/ssh_login", "correct": false },
      { "text": "auxiliary/scanner/portscan/tcp", "correct": false },
      { "text": "auxiliary/scanner/smb/smb_login", "correct": false }
    ]
  },
  {
    "question": "You want to find the number of exploits available for a specific software vulnerability. Which commands would help?",
    "answers": [
      { "text": "use exploit/windows/smb/ms08_067_netapi → info", "correct": false },
      { "text": "search ms08_067_netapi", "correct": true },
      { "text": "show exploits → Filter the list", "correct": false },
      { "text": "info ms08_067_netapi → show payloads", "correct": false },
      { "text": "search payload/windows/smb", "correct": false }
    ]
  },
  {
    "question": "How can you set the remote host (RHOST) IP for an exploit module?",
    "answers": [
      { "text": "setg RHOST <IP>", "correct": false },
      { "text": "set RHOST <IP>", "correct": true },
      { "text": "use RHOST <IP>", "correct": false },
      { "text": "assign RHOST <IP>", "correct": false },
      { "text": "set LHOST <IP>", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of Meterpreter in Metasploit?",
    "answers": [
      { "text": "Exploiting target vulnerabilities", "correct": false },
      { "text": "Providing an interactive shell on the target", "correct": true },
      { "text": "Managing exploit modules", "correct": false },
      { "text": "Scanning network ports", "correct": false },
      { "text": "Encapsulating payloads", "correct": false }
    ]
  },
  {
    "question": "Which Metasploit command displays available post-exploitation modules?",
    "answers": [
      { "text": "show post", "correct": true },
      { "text": "list modules", "correct": false },
      { "text": "show auxiliary", "correct": false },
      { "text": "show payloads", "correct": false },
      { "text": "view modules", "correct": false }
    ]
  },
  {
    "question": "What type of Metasploit module is used for brute-forcing credentials?",
    "answers": [
      { "text": "Exploits", "correct": false },
      { "text": "Auxiliary", "correct": true },
      { "text": "Post", "correct": false },
      { "text": "Encoders", "correct": false },
      { "text": "Nops", "correct": false }
    ]
  },
  {
    "question": "Which Metasploit module ensures persistence on a compromised system?",
    "answers": [
      { "text": "Auxiliary", "correct": false },
      { "text": "Exploit", "correct": false },
      { "text": "Post", "correct": true },
      { "text": "Encoder", "correct": false },
      { "text": "Payload", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the msfvenom tool?",
    "answers": [
      { "text": "To generate and encode payloads", "correct": true },
      { "text": "To list auxiliary modules", "correct": false },
      { "text": "To configure exploits", "correct": false },
      { "text": "To manage active sessions", "correct": false },
      { "text": "To perform network scans", "correct": false }
    ]
  },
  {
    "question": "Which command is used to interact with a specific active session in Metasploit?",
    "answers": [
      { "text": "sessions -i", "correct": true },
      { "text": "interact -s", "correct": false },
      { "text": "show sessions", "correct": false },
      { "text": "active <session>", "correct": false },
      { "text": "engage", "correct": false }
    ]
  },
  {
    "question": "How can you list active sessions in Metasploit?",
    "answers": [
      { "text": "show active", "correct": false },
      { "text": "sessions -l", "correct": true },
      { "text": "list all", "correct": false },
      { "text": "show sessions", "correct": false },
      { "text": "view active", "correct": false }
    ]
  },
  {
    "question": "What is the function of the resource command in Metasploit?",
    "answers": [
      { "text": "To save a session", "correct": false },
      { "text": "To execute a series of Metasploit commands from a file", "correct": true },
      { "text": "To list available resources", "correct": false },
      { "text": "To interact with the database", "correct": false },
      { "text": "To manage module dependencies", "correct": false }
    ]
  },
  {
    "question": "Which command kills all background jobs in Metasploit?",
    "answers": [
      { "text": "jobs -K", "correct": true },
      { "text": "kill all", "correct": false },
      { "text": "stop all", "correct": false },
      { "text": "jobs --terminate", "correct": false },
      { "text": "unset jobs", "correct": false }
    ]
  },
  {
    "question": "What Metasploit payload is typically used for reverse connections to the attacker?",
    "answers": [
      { "text": "Meterpreter shell", "correct": false },
      { "text": "Bind TCP shell", "correct": false },
      { "text": "Reverse TCP shell", "correct": true },
      { "text": "GUI payload", "correct": false },
      { "text": "Post payload", "correct": false }
    ]
  }
  {
    "question": "Which command is used to save the current environment and settings in Metasploit?",
    "answers": [
      { "text": "save", "correct": true },
      { "text": "backup", "correct": false },
      { "text": "setg", "correct": false },
      { "text": "export", "correct": false },
      { "text": "store", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the unsetg command in Metasploit?",
    "answers": [
      { "text": "To delete a global variable", "correct": true },
      { "text": "To set a global variable", "correct": false },
      { "text": "To reset local variables", "correct": false },
      { "text": "To remove all variables", "correct": false },
      { "text": "To clear session history", "correct": false }
    ]
  },
  {
    "question": "What does the jobs -k command do in Metasploit?",
    "answers": [
      { "text": "Lists all active jobs", "correct": false },
      { "text": "Terminates a specified job", "correct": true },
      { "text": "Displays job status", "correct": false },
      { "text": "Kills all active sessions", "correct": false },
      { "text": "Stops a background session", "correct": false }
    ]
  },
  {
    "question": "Which category of Metasploit modules is used after a system has been compromised?",
    "answers": [
      { "text": "Exploits", "correct": false },
      { "text": "Auxiliary", "correct": false },
      { "text": "Post", "correct": true },
      { "text": "Payloads", "correct": false },
      { "text": "Encoders", "correct": false }
    ]
  },
  {
    "question": "What does the show payloads command display?",
    "answers": [
      { "text": "All exploits available in the framework", "correct": false },
      { "text": "All available payloads compatible with a module", "correct": true },
      { "text": "Current settings for an exploit", "correct": false },
      { "text": "A list of active sessions", "correct": false },
      { "text": "A summary of system variables", "correct": false }
    ]
  },
  {
    "question": "Which command allows the creation of a Netcat-like connection within Metasploit?",
    "answers": [
      { "text": "connect", "correct": true },
      { "text": "netcat", "correct": false },
      { "text": "session", "correct": false },
      { "text": "interact", "correct": false },
      { "text": "tcpconnect", "correct": false }
    ]
  },
  {
    "question": "What is a key purpose of Metasploit encoders?",
    "answers": [
      { "text": "To simplify auxiliary module use", "correct": false },
      { "text": "To obfuscate payloads and evade detection", "correct": true },
      { "text": "To compress exploit scripts", "correct": false },
      { "text": "To enhance brute-force attacks", "correct": false },
      { "text": "To verify exploit compatibility", "correct": false }
    ]
  },
  {
    "question": "How can you view a list of all Metasploit modules in a specific category?",
    "answers": [
      { "text": "list <category>", "correct": false },
      { "text": "show <category>", "correct": true },
      { "text": "modules <category>", "correct": false },
      { "text": "view <category>", "correct": false },
      { "text": "explore <category>", "correct": false }
    ]
  },
  {
    "question": "Which command retrieves a list of previously used commands in Metasploit?",
    "answers": [
      { "text": "commands", "correct": false },
      { "text": "history", "correct": true },
      { "text": "list", "correct": false },
      { "text": "logs", "correct": false },
      { "text": "previous", "correct": false }
    ]
  },
  {
    "question": "Which payload type is used to provide a full graphical interface on the target machine?",
    "answers": [
      { "text": "Reverse shell", "correct": false },
      { "text": "Bind shell", "correct": false },
      { "text": "Meterpreter shell", "correct": true },
      { "text": "Interactive shell", "correct": false },
      { "text": "GUI payload", "correct": false }
    ]
  },
  {
    "question": "The set command in Metasploit assigns values to variables only for the current session.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The exploit command in Metasploit requires all settings to be configured before execution.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The getg command retrieves the value of a local variable.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Post-exploitation modules in Metasploit can help escalate user privileges.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The makerc command in Metasploit is used to list all auxiliary modules.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The check command ensures that a target is vulnerable without exploiting it.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Metasploit auxiliary modules include denial-of-service tools.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The unset command in Metasploit removes both local and global variables by default.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Encoders in Metasploit are mandatory for all exploits to work effectively.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The sessions -i command in Metasploit allows interaction with a specific session.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  }
];
