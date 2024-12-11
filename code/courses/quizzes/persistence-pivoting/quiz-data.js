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
  },
  {
    "question": "Why should a unique service name be used when creating persistence on a shared machine?",
    "answers": [
      { "text": "To avoid service conflicts with other attackers", "correct": true },
      { "text": "To bypass detection by antivirus systems", "correct": false },
      { "text": "To prevent alerting network monitoring tools", "correct": false },
      { "text": "To ensure the service starts automatically", "correct": false },
      { "text": "To hide the service in system logs", "correct": false }
    ]
  },
  {
    "question": "What is the primary benefit of verifying a tun connection?",
    "answers": [
      { "text": "To validate data integrity", "correct": false },
      { "text": "To ensure the pivot machine is reachable", "correct": false },
      { "text": "To prevent accidental data leaks", "correct": false },
      { "text": "To confirm the attacker machine can route traffic through the tunnel", "correct": true },
      { "text": "To activate proxychains", "correct": false }
    ]
  },
  {
    "question": "What is the significance of uploading nc.exe during a persistence attack?",
    "answers": [
      { "text": "It acts as an antivirus bypass tool.", "correct": false },
      { "text": "It is used to spawn reverse shells.", "correct": true },
      { "text": "It serves as a file encryption utility.", "correct": false },
      { "text": "It is a required component for Ligolo-NG.", "correct": false },
      { "text": "It enables credential dumping.", "correct": false }
    ]
  },
  {
    "question": "What is the function of a Ligolo-NG Server?",
    "answers": [
      { "text": "Manages tunnels and routes traffic", "correct": true },
      { "text": "Scans networks for vulnerable machines", "correct": false },
      { "text": "Acts as a proxy for domain authentication", "correct": false },
      { "text": "Generates payloads for pivoting attacks", "correct": false },
      { "text": "Encrypts all data on the pivot machine", "correct": false }
    ]
  },
  {
    "question": "Antivirus software always detects persistence attempts.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Domain Admins can administer multiple machines within Active Directory.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A machine can pivot traffic without having a NIC on the target network.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Network segmentation increases the difficulty of lateral movement.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Using Ligolo-NG requires manual certificate configuration every time.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Scenario: You need to access a highly segmented server. After SSH-ing into a pivot machine, you find it has two NICs: one on your network and another on the target network. Which step should you take next?",
    "answers": [
      { "text": "Directly scan the target from your attack machine", "correct": false },
      { "text": "Use Ligolo-NG to establish a tunnel through the pivot machine", "correct": true },
      { "text": "Create a service on the pivot machine for persistence", "correct": false },
      { "text": "Transfer Netcat to the target network server", "correct": false },
      { "text": "Enumerate users on the target network", "correct": false }
    ]
  },
  {
    "question": "Scenario: During a persistence attempt, the nc.exe file fails antivirus checks. What is the best course of action?",
    "answers": [
      { "text": "Retry the upload using a different protocol", "correct": false },
      { "text": "Use obfuscation techniques to evade detection", "correct": true },
      { "text": "Terminate the attack and delete all logs", "correct": false },
      { "text": "Attempt persistence through an alternate method, like sc.exe", "correct": false },
      { "text": "Upload multiple redundant files", "correct": false }
    ]
  },
  {
    "question": "Scenario: An nmap scan shows no open ports on a pivot machine. How can you proceed with pivoting?",
    "answers": [
      { "text": "Use the machine’s NIC to attempt SSH into the target", "correct": false },
      { "text": "Employ a port forwarding tool like Ligolo-NG", "correct": true },
      { "text": "Escalate privileges to a domain administrator", "correct": false },
      { "text": "Perform a brute force attack on closed ports", "correct": false },
      { "text": "Transfer administrative tools to the pivot machine", "correct": false }
    ]
  },
  {
    "question": "Scenario: An attacker uses a service to maintain persistence but notices it’s not set to auto-start. What command should they run?",
    "answers": [
      { "text": "net start <service name>", "correct": false },
      { "text": "sc.exe \\\\IP config <service name> start= auto", "correct": true },
      { "text": "servicectl set auto", "correct": false },
      { "text": "sudo enable service", "correct": false },
      { "text": "autorun –config", "correct": false }
    ]
  },
  {
    "question": "Scenario: After establishing a tunnel, traffic is not routing to the target. What step should you verify?",
    "answers": [
      { "text": "Confirm that the target machine has active NICs", "correct": false },
      { "text": "Check if the pivot machine has network isolation enabled", "correct": false },
      { "text": "Ensure the tun connection is configured correctly on the attack machine", "correct": true },
      { "text": "Reconfigure the proxy server to use a different port", "correct": false },
      { "text": "Verify the pivot machine has administrative rights", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of creating a reverse shell during a persistence attack?",
    "answers": [
      { "text": "To escalate privileges locally", "correct": false },
      { "text": "To maintain remote access to the target machine", "correct": true },
      { "text": "To disable antivirus software", "correct": false },
      { "text": "To modify network configurations", "correct": false },
      { "text": "To perform privilege escalation on the attacker machine", "correct": false }
    ]
  },
  {
    "question": "Which of the following is required to upload a reverse shell via SMBClient?",
    "answers": [
      { "text": "Administrator access on the target machine", "correct": true },
      { "text": "A direct connection to the target's DNS server", "correct": false },
      { "text": "A command-line interface on the target machine", "correct": false },
      { "text": "Access to the Kerberos authentication system", "correct": false },
      { "text": "A brute-force attack on the target’s credentials", "correct": false }
    ]
  },
  {
    "question": "Which tool is primarily used for tunneling in Ligolo-NG?",
    "answers": [
      { "text": "Proxychains", "correct": false },
      { "text": "Tun interface", "correct": true },
      { "text": "SMBClient", "correct": false },
      { "text": "Sc.exe", "correct": false },
      { "text": "SCP", "correct": false }
    ]
  },
  {
    "question": "What is the function of setting a service’s startup type to 'auto' using sc.exe?",
    "answers": [
      { "text": "Ensures the service starts after the user logs in", "correct": false },
      { "text": "Prevents the service from being listed in the task manager", "correct": false },
      { "text": "Ensures the service starts every time the system boots", "correct": true },
      { "text": "Stops the service after 24 hours of operation", "correct": false },
      { "text": "Enables the service only when the network is idle", "correct": false }
    ]
  },
  {
    "question": "During pivoting, why would an attacker transfer files using SCP instead of SMBClient?",
    "answers": [
      { "text": "SCP provides encryption for secure file transfers", "correct": true },
      { "text": "SCP requires less configuration", "correct": false },
      { "text": "SMBClient is only compatible with Linux systems", "correct": false },
      { "text": "SCP prevents file execution on transfer", "correct": false },
      { "text": "SCP avoids detection by antivirus software", "correct": false }
    ]
  },
  {
    "question": "What is a primary reason attackers use port forwarding during pivoting?",
    "answers": [
      { "text": "To disrupt IDS systems", "correct": false },
      { "text": "To bypass firewall restrictions", "correct": true },
      { "text": "To create a new user account on the pivot machine", "correct": false },
      { "text": "To transfer administrative tools to the target", "correct": false },
      { "text": "To enumerate network shares", "correct": false }
    ]
  },
  {
    "question": "When using Ligolo-NG, what is the default port used for the proxy server?",
    "answers": [
      { "text": "8080", "correct": false },
      { "text": "11601", "correct": true },
      { "text": "443", "correct": false },
      { "text": "80", "correct": false },
      { "text": "1521", "correct": false }
    ]
  },
  {
    "question": "Which of the following could indicate successful pivoting?",
    "answers": [
      { "text": "Detection of malware by antivirus software", "correct": false },
      { "text": "Nmap scan results showing reachable services on the target network", "correct": true },
      { "text": "Denial of Service (DoS) attack on the pivot machine", "correct": false },
      { "text": "System logs showing unauthorized logins", "correct": false },
      { "text": "Failure to establish a reverse shell", "correct": false }
    ]
  },
  {
    "question": "Why might attackers avoid installing many tools on a pivot machine?",
    "answers": [
      { "text": "To conserve disk space", "correct": false },
      { "text": "To prevent triggering antivirus or network monitoring systems", "correct": true },
      { "text": "To avoid conflicts with existing services", "correct": false },
      { "text": "To reduce the risk of privilege escalation", "correct": false },
      { "text": "To bypass domain authentication", "correct": false }
    ]
  },
  {
    "question": "What is a key limitation of local admins in an Active Directory environment?",
    "answers": [
      { "text": "Inability to create new user accounts", "correct": false },
      { "text": "Inability to use RDP, SMB, or WinRM remotely unless explicitly configured", "correct": true },
      { "text": "Restriction from accessing other local machines", "correct": false },
      { "text": "Lack of access to the DNS server", "correct": false },
      { "text": "Limited privileges on domain controllers", "correct": false }
    ]
  },
  {
    "question": "A reverse shell allows attackers to maintain a persistent connection with the target machine.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Persistence using services is dependent on the credentials used to create the service remaining valid.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Domain admins have unrestricted access to all systems in an Active Directory environment.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Ligolo-NG's agent requires root privileges to run.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Port forwarding is only useful in networks without segmentation.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SCP transfers are encrypted, making them harder to detect during monitoring.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Tunnels created with Ligolo-NG can support multiple concurrent connections.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Antivirus software always detects files uploaded for persistence.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "NIC cards on a pivot machine can reveal access to multiple networks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A service created with sc.exe will only run once and does not survive system reboots.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
];
