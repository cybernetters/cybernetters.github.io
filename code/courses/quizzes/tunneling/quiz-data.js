const questionBank = [
  {
    "question": "What is a key prerequisite for remotely spawning a process to achieve persistence on a target machine?",
    "answers": [
      { "text": "Administrator credentials on the domain controller", "correct": false },
      { "text": "Credentials from a user of the Administrators group on the target machine", "correct": true },
      { "text": "Physical access to the machine", "correct": false },
      { "text": "A vulnerable network protocol", "correct": false },
      { "text": "A valid user account without admin rights", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a command used to upload files via SMBClient?",
    "answers": [
      { "text": "smb://upload", "correct": false },
      { "text": "smbclient //ip/targetDrive -U \"Domain\\Username\"%'Password' -c 'put <filename>'", "correct": true },
      { "text": "scp upload.file //ip/targetDrive", "correct": false },
      { "text": "upload -p smb <filename>", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of setting a service to auto-start during a persistence attack?",
    "answers": [
      { "text": "To immediately escalate privileges", "correct": false },
      { "text": "To maintain access even if credentials change", "correct": true },
      { "text": "To evade detection by antivirus software", "correct": false },
      { "text": "To execute multiple payloads simultaneously", "correct": false },
      { "text": "To prevent the service from being visible in task manager", "correct": false }
    ]
  },
  {
    "question": "Which program is recommended for pivoting due to its lightweight and versatile nature?",
    "answers": [
      { "text": "Netcat", "correct": false },
      { "text": "Ligolo-NG", "correct": true },
      { "text": "Nmap", "correct": false },
      { "text": "Proxychains", "correct": false },
      { "text": "Wireshark", "correct": false }
    ]
  },
  {
    "question": "When using Ligolo-NG, what is the role of the Agent?",
    "answers": [
      { "text": "It serves as a network scanner.", "correct": false },
      { "text": "It sets up the tun interface on the attacker machine.", "correct": false },
      { "text": "It facilitates connections without requiring admin access.", "correct": true },
      { "text": "It generates self-signed certificates.", "correct": false },
      { "text": "It acts as the primary target during attacks.", "correct": false }
    ]
  },
  {
    "question": "Why is pivoting important in an attacker's strategy?",
    "answers": [
      { "text": "To escalate privileges directly on the compromised machine", "correct": false },
      { "text": "To move laterally and reach the final target in a segmented network", "correct": true },
      { "text": "To replace existing network protocols with malicious ones", "correct": false },
      { "text": "To download sensitive data from external servers", "correct": false },
      { "text": "To monitor DNS traffic for anomalies", "correct": false }
    ]
  },
  {
    "question": "What is typically required to use runas for persistence?",
    "answers": [
      { "text": "Guest-level privileges", "correct": false },
      { "text": "Access to the Administrator account", "correct": true },
      { "text": "Domain admin credentials", "correct": false },
      { "text": "A secondary user account on the machine", "correct": false },
      { "text": "Physical access to the system", "correct": false }
    ]
  },
  {
    "question": "What is a potential disadvantage of transferring tools to a pivot machine?",
    "answers": [
      { "text": "It guarantees detection by antivirus systems.", "correct": false },
      { "text": "It can generate noise and alert network monitoring systems.", "correct": true },
      { "text": "It removes traces of previous activities.", "correct": false },
      { "text": "It may result in immediate termination of the attack.", "correct": false },
      { "text": "It prevents successful lateral movement.", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a recommended step when setting up Ligolo-NG?",
    "answers": [
      { "text": "Using the Agent to connect to the Server", "correct": false },
      { "text": "Setting up a tun interface on the attacker machine", "correct": false },
      { "text": "Using proxychains for all connections", "correct": true },
      { "text": "Verifying the tun interface is active with ip addr show", "correct": false },
      { "text": "Using Let's Encrypt for certificates", "correct": false }
    ]
  },
  {
    "question": "What is a key use of port redirection during pivoting?",
    "answers": [
      { "text": "To escalate privileges on the target machine", "correct": false },
      { "text": "To access network segments isolated from the attacker's machine", "correct": true },
      { "text": "To establish direct connections between the attacker and target", "correct": false },
      { "text": "To obfuscate malicious traffic from IDS systems", "correct": false },
      { "text": "To replace compromised systems with attacker-controlled devices", "correct": false }
    ]
  },
  {
    "question": "What command can confirm the tun interface is up?",
    "answers": [
      { "text": "ifconfig", "correct": false },
      { "text": "sudo ip route add", "correct": false },
      { "text": "sudo ip addr show ligolo", "correct": true },
      { "text": "netstat -a", "correct": false },
      { "text": "ls -tun", "correct": false }
    ]
  },
  {
    "question": "Which pivoting technique is used to reach a target on a separate subnetwork?",
    "answers": [
      { "text": "File transfer via SMB", "correct": false },
      { "text": "Persistence through service creation", "correct": false },
      { "text": "Port forwarding", "correct": true },
      { "text": "DNS spoofing", "correct": false },
      { "text": "Credential dumping", "correct": false }
    ]
  },
  {
    "question": "What is one key feature of Ligolo-NG?",
    "answers": [
      { "text": "Requires admin access on the target machine", "correct": false },
      { "text": "Uses proxychains for encryption", "correct": false },
      { "text": "Automatically establishes tunnels without configuration", "correct": false },
      { "text": "Handles multiple tunnels efficiently", "correct": true },
      { "text": "Relies exclusively on domain-based authentication", "correct": false }
    ]
  },
  {
    "question": "In the persistence phase, what is the role of sc.exe?",
    "answers": [
      { "text": "To escalate user privileges", "correct": false },
      { "text": "To create and configure services for auto-start", "correct": true },
      { "text": "To upload payloads to the target", "correct": false },
      { "text": "To manage network interfaces", "correct": false },
      { "text": "To enumerate connected devices", "correct": false }
    ]
  },
  {
    "question": "What is the likely result of uploading a file that fails antivirus checks?",
    "answers": [
      { "text": "The file is quarantined.", "correct": true },
      { "text": "The upload is rejected by the network.", "correct": false },
      { "text": "The antivirus deletes the file immediately.", "correct": false },
      { "text": "The attacker's connection is terminated.", "correct": false },
      { "text": "The target machine reboots.", "correct": false }
    ]
  },
  {
    "question": "What does a successful nmap scan of a pivoted target signify?",
    "answers": [
      { "text": "The final target is not segmented.", "correct": false },
      { "text": "The attacker has achieved privilege escalation.", "correct": false },
      { "text": "The pivot is operational, allowing access to the target.", "correct": true },
      { "text": "Network defenses have been bypassed permanently.", "correct": false },
      { "text": "The target is vulnerable to DNS spoofing attacks.", "correct": false }
    ]
  },
  {
    "question": "A process spawned remotely for persistence will survive a credential change.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Local admins are always capable of using RDP for remote administration.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Ligolo-NG requires admin privileges to run its Agent program.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The scp command can transfer files between machines.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Port forwarding is used to bypass network segmentation.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  }
];
