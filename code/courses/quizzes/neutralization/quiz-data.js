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
  {
    "question": "According to Sykes and Matza's theory, what is the primary purpose of techniques of neutralization?",
    "answers": [
      { "text": "To enhance community engagement", "correct": false },
      { "text": "To rationalize transgressions against societal norms", "correct": true },
      { "text": "To justify the criminal justice system", "correct": false },
      { "text": "To maintain rigid criminal identities", "correct": false },
      { "text": "To promote lawful behavior", "correct": false }
    ]
  },
  {
    "question": "Which psychological theory underpins the techniques of neutralization?",
    "answers": [
      { "text": "Behavioral Theory", "correct": false },
      { "text": "Cognitive Dissonance Theory", "correct": false },
      { "text": "Psychoanalytic Theory", "correct": true },
      { "text": "Social Learning Theory", "correct": false },
      { "text": "Biopsychosocial Model", "correct": false }
    ]
  },
  {
    "question": "What term describes the psychological strategies individuals unconsciously use to protect themselves from anxiety?",
    "answers": [
      { "text": "Rationalization Mechanisms", "correct": false },
      { "text": "Social Defense Systems", "correct": false },
      { "text": "Coping Strategies", "correct": false },
      { "text": "Defense Mechanisms", "correct": true },
      { "text": "Emotional Shields", "correct": false }
    ]
  },
  {
    "question": "Which component of Freud’s model is responsible for mediating between the id and superego?",
    "answers": [
      { "text": "Superego", "correct": false },
      { "text": "Ego", "correct": true },
      { "text": "Id", "correct": false },
      { "text": "Conscious", "correct": false },
      { "text": "Unconscious", "correct": false }
    ]
  },
  {
    "question": "How do offenders reconcile their behaviors according to the Drift Theory?",
    "answers": [
      { "text": "By fully adopting a criminal identity", "correct": false },
      { "text": "By showing complete disregard for societal norms", "correct": false },
      { "text": "By oscillating between criminality and conformity", "correct": true },
      { "text": "By avoiding contact with lawful citizens", "correct": false },
      { "text": "By denying guilt or remorse entirely", "correct": false }
    ]
  },
  {
    "question": "Which observation supports the idea that delinquents are aware their actions are wrong?",
    "answers": [
      { "text": "They respect lawful citizens", "correct": true },
      { "text": "They openly defy societal norms", "correct": false },
      { "text": "They avoid guilt or remorse", "correct": false },
      { "text": "They rarely engage with their community", "correct": false },
      { "text": "They victimize individuals indiscriminately", "correct": false }
    ]
  },
  {
    "question": "What is a key feature of the denial of responsibility technique?",
    "answers": [
      { "text": "Victim-blaming", "correct": false },
      { "text": "Acknowledgment of harm caused", "correct": false },
      { "text": "Claiming forces beyond control were responsible", "correct": true },
      { "text": "Pointing out the hypocrisy of others", "correct": false },
      { "text": "Appealing to societal standards", "correct": false }
    ]
  },
  {
    "question": "In the denial of injury technique, what do offenders typically argue?",
    "answers": [
      { "text": "Their actions were necessary", "correct": false },
      { "text": "The victim deserved the outcome", "correct": false },
      { "text": "Their behavior caused no harm", "correct": true },
      { "text": "Condemners are unjust", "correct": false },
      { "text": "Their loyalty to a group justifies the behavior", "correct": false }
    ]
  },
  {
    "question": "Which technique suggests that offenders rationalize their actions by deeming the victim unworthy?",
    "answers": [
      { "text": "Denial of Responsibility", "correct": false },
      { "text": "Denial of Injury", "correct": false },
      { "text": "Denial of the Victim", "correct": true },
      { "text": "Appeal to Higher Loyalties", "correct": false },
      { "text": "Condemnation of the Condemners", "correct": false }
    ]
  },
  {
    "question": "What does the 'Appeal to Higher Loyalties' technique rely on?",
    "answers": [
      { "text": "Hypocrisy of societal norms", "correct": false },
      { "text": "Greater good for a specific group", "correct": true },
      { "text": "Lack of identifiable victims", "correct": false },
      { "text": "Forces outside one's control", "correct": false },
      { "text": "Mutual understanding among offenders", "correct": false }
    ]
  },
  {
    "question": "What concept allows individuals to shift between lawful and unlawful behavior?",
    "answers": [
      { "text": "Neutralization", "correct": true },
      { "text": "Criminal Commitment", "correct": false },
      { "text": "Dual Socialization", "correct": false },
      { "text": "Rational Choice Theory", "correct": false },
      { "text": "Cognitive Dissonance", "correct": false }
    ]
  },
  {
    "question": "Sykes and Matza's theory argues that techniques of neutralization are an extension of what concept?",
    "answers": [
      { "text": "Classical Conditioning", "correct": false },
      { "text": "Defense Mechanisms", "correct": true },
      { "text": "Operant Conditioning", "correct": false },
      { "text": "Social Control Theory", "correct": false },
      { "text": "Self-fulfilling Prophecy", "correct": false }
    ]
  },
  {
    "question": "Which observation by Sykes and Matza indicates delinquents have moral boundaries?",
    "answers": [
      { "text": "Expressing guilt only when caught", "correct": false },
      { "text": "Victimizing anyone, regardless of identity", "correct": false },
      { "text": "Avoiding members of their own class or ethnicity", "correct": true },
      { "text": "Rejecting lawful citizens’ respect", "correct": false },
      { "text": "Consistently adhering to criminal values", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes the purpose of defense mechanisms in Freud's psychoanalytic theory?",
    "answers": [
      { "text": "To promote social adaptation", "correct": false },
      { "text": "To maintain one’s self-schema by distorting reality", "correct": true },
      { "text": "To ensure alignment with societal norms", "correct": false },
      { "text": "To justify deliberate criminal behavior", "correct": false },
      { "text": "To reinforce cultural values", "correct": false }
    ]
  },
  {
    "question": "What does the concept of 'drift' in Neutralization and Drift Theory refer to?",
    "answers": [
      { "text": "Full commitment to criminal behavior", "correct": false },
      { "text": "Oscillation between moral values and unlawful actions", "correct": true },
      { "text": "Gradual loss of self-control over time", "correct": false },
      { "text": "Rationalization of societal norms", "correct": false },
      { "text": "Complete rejection of societal conformity", "correct": false }
    ]
  },
  {
    "question": "Which of the following would be an example of denial of responsibility?",
    "answers": [
      { "text": "\"The victim deserved what happened.\"", "correct": false },
      { "text": "\"Nobody was actually harmed.\"", "correct": false },
      { "text": "\"I was forced into this situation.\"", "correct": true },
      { "text": "\"Those criticizing me are just as bad.\"", "correct": false },
      { "text": "\"I did this for my group.\"", "correct": false }
    ]
  },
  {
    "question": "In the denial of the victim, offenders justify their actions by asserting that the victim:",
    "answers": [
      { "text": "Was a necessary casualty", "correct": false },
      { "text": "Is non-existent or deserving of harm", "correct": true },
      { "text": "Represents societal hypocrisy", "correct": false },
      { "text": "Was harmed unintentionally", "correct": false },
      { "text": "Demanded loyalty from the group", "correct": false }
    ]
  },
  {
    "question": "What is a distinguishing feature of the condemnation of the condemners technique?",
    "answers": [
      { "text": "Justifying actions as harmless", "correct": false },
      { "text": "Shifting blame to forces beyond one’s control", "correct": false },
      { "text": "Arguing that critics are equally or more flawed", "correct": true },
      { "text": "Emphasizing loyalty to a specific group", "correct": false },
      { "text": "Rejecting the existence of harm", "correct": false }
    ]
  },
  {
    "question": "How do delinquents typically view members of their community according to Sykes and Matza?",
    "answers": [
      { "text": "With indifference or hostility", "correct": false },
      { "text": "As role models they respect", "correct": true },
      { "text": "As targets for their actions", "correct": false },
      { "text": "As obstacles to achieving goals", "correct": false },
      { "text": "With complete disregard", "correct": false }
    ]
  },
  {
    "question": "Which of the following aligns with the appeal to higher loyalties?",
    "answers": [
      { "text": "\"I was helping my friends.\"", "correct": true },
      { "text": "\"No one was hurt.\"", "correct": false },
      { "text": "\"The system is corrupt anyway.\"", "correct": false },
      { "text": "\"I didn’t mean to do it.\"", "correct": false },
      { "text": "\"It’s not my fault.\"", "correct": false }
    ]
  },
  {
    "question": "Which statement exemplifies denial of injury?",
    "answers": [
      { "text": "\"I didn’t mean to hurt anyone.\"", "correct": false },
      { "text": "\"No harm was actually done.\"", "correct": true },
      { "text": "\"The victim brought it upon themselves.\"", "correct": false },
      { "text": "\"The critics are just as bad.\"", "correct": false },
      { "text": "\"This was for the greater good.\"", "correct": false }
    ]
  },
  {
    "question": "Which observation suggests that offenders maintain a dual identity in Drift Theory?",
    "answers": [
      { "text": "Lack of guilt or remorse after crimes", "correct": false },
      { "text": "Regular interaction with criminal peers", "correct": false },
      { "text": "Participation in lawful community activities", "correct": true },
      { "text": "Strict avoidance of lawful authority figures", "correct": false },
      { "text": "Continuous engagement in criminal behavior", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the id in Freud’s psychoanalytic theory?",
    "answers": [
      { "text": "To mediate conflicts between morality and instinct", "correct": false },
      { "text": "To fulfill instinctual and primitive desires", "correct": true },
      { "text": "To uphold societal rules and ethics", "correct": false },
      { "text": "To regulate anxiety through defense mechanisms", "correct": false },
      { "text": "To maintain a balanced self-schema", "correct": false }
    ]
  },
  {
    "question": "In the context of neutralization, how might offenders view societal rules?",
    "answers": [
      { "text": "As strict and unchallengeable", "correct": false },
      { "text": "As flexible and open to interpretation", "correct": true },
      { "text": "As necessary for community stability", "correct": false },
      { "text": "As irrelevant to their situation", "correct": false },
      { "text": "As completely invalid", "correct": false }
    ]
  },
  {
    "question": "The denial of the victim technique assumes that the victim:",
    "answers": [
      { "text": "Played a passive role in the offense", "correct": false },
      { "text": "Is deserving of the harm caused", "correct": true },
      { "text": "Was harmed unintentionally", "correct": false },
      { "text": "Is non-existent in the scenario", "correct": false },
      { "text": "Has societal backing for their plight", "correct": false }
    ]
  },
  {
    "question": "What is a fundamental premise of techniques of neutralization?",
    "answers": [
      { "text": "Criminals lack the ability to feel guilt.", "correct": false },
      { "text": "Offenders use rationalizations to excuse transgressions.", "correct": true },
      { "text": "All individuals have a fixed moral compass.", "correct": false },
      { "text": "Societal norms are inherently flawed.", "correct": false },
      { "text": "Delinquency is always a result of environmental factors.", "correct": false }
    ]
  },
  {
    "question": "In Freud's theory, what happens when the id and superego become too demanding of the ego?",
    "answers": [
      { "text": "The individual develops strong moral principles.", "correct": false },
      { "text": "The ego collapses under pressure.", "correct": false },
      { "text": "Defense mechanisms are triggered to protect the ego.", "correct": true },
      { "text": "Criminal behavior becomes inevitable.", "correct": false },
      { "text": "The individual rejects societal norms entirely.", "correct": false }
    ]
  },
  {
    "question": "Which observation supports the idea that delinquents maintain moral boundaries?",
    "answers": [
      { "text": "They avoid victimizing individuals from their own social group.", "correct": true },
      { "text": "They engage in crimes without remorse.", "correct": false },
      { "text": "They consistently reject lawful citizens.", "correct": false },
      { "text": "They blame society for their actions.", "correct": false },
      { "text": "They refuse to participate in community events.", "correct": false }
    ]
  },
  {
    "question": "What technique involves justifying actions as being for the greater good of a group?",
    "answers": [
      { "text": "Denial of Responsibility", "correct": false },
      { "text": "Denial of Injury", "correct": false },
      { "text": "Appeal to Higher Loyalties", "correct": true },
      { "text": "Denial of the Victim", "correct": false },
      { "text": "Condemnation of the Condemners", "correct": false }
    ]
  },
  {
    "question": "Neutralization theory explains delinquent behavior as a result of:",
    "answers": [
      { "text": "Inherent moral deficits.", "correct": false },
      { "text": "Complete commitment to deviant values.", "correct": false },
      { "text": "Fluctuations in personal justifications.", "correct": true },
      { "text": "Isolation from lawful citizens.", "correct": false },
      { "text": "Suppression of emotional responses.", "correct": false }
    ]
  },
  {
    "question": "Which observation suggests that offenders do not fully reject societal norms?",
    "answers": [
      { "text": "They feel no guilt for their actions.", "correct": false },
      { "text": "They view all criticism as unjust.", "correct": false },
      { "text": "They express remorse in certain situations.", "correct": true },
      { "text": "They consistently victimize others indiscriminately.", "correct": false },
      { "text": "They avoid any connection to lawful behavior.", "correct": false }
    ]
  },
  {
    "question": "Freud's concept of the superego primarily functions to:",
    "answers": [
      { "text": "Suppress instinctual desires.", "correct": false },
      { "text": "Mediate between the id and ego.", "correct": false },
      { "text": "Enforce moral standards and rules.", "correct": true },
      { "text": "Rationalize unethical actions.", "correct": false },
      { "text": "Distort reality to reduce anxiety.", "correct": false }
    ]
  },
  {
    "question": "The term \"drift\" in Drift Theory highlights an offender's ability to:",
    "answers": [
      { "text": "Avoid all societal rules and norms.", "correct": false },
      { "text": "Fully adopt a criminal mindset.", "correct": false },
      { "text": "Alternate between criminal and lawful behaviors.", "correct": true },
      { "text": "Rationalize every action through defense mechanisms.", "correct": false },
      { "text": "Commit crimes without societal consequences.", "correct": false }
    ]
  },
  {
    "question": "How do offenders use denial of responsibility to excuse their behavior?",
    "answers": [
      { "text": "By minimizing harm caused.", "correct": false },
      { "text": "By blaming external forces or circumstances.", "correct": true },
      { "text": "By accusing others of hypocrisy.", "correct": false },
      { "text": "By claiming their actions were for a greater cause.", "correct": false },
      { "text": "By arguing that societal norms are invalid.", "correct": false }
    ]
  },
  {
    "question": "What is a defining feature of the denial of injury technique?",
    "answers": [
      { "text": "Rejecting criticism from others.", "correct": false },
      { "text": "Claiming no real harm was done.", "correct": true },
      { "text": "Blaming external forces for the offense.", "correct": false },
      { "text": "Defending actions as morally superior.", "correct": false },
      { "text": "Acknowledging the victim but justifying the act.", "correct": false }
    ]
  },
  {
    "question": "How do offenders justify their actions through the condemnation of the condemners?",
    "answers": [
      { "text": "By pointing out the condemners’ perceived flaws.", "correct": true },
      { "text": "By asserting the victim’s culpability.", "correct": false },
      { "text": "By minimizing harm caused by their behavior.", "correct": false },
      { "text": "By denying personal accountability entirely.", "correct": false },
      { "text": "By claiming their actions were necessary for loyalty.", "correct": false }
    ]
  },
  {
    "question": "Which theory describes the psychological mechanisms offenders use to rationalize deviant behavior?",
    "answers": [
      { "text": "Rational Choice Theory", "correct": false },
      { "text": "Social Learning Theory", "correct": false },
      { "text": "Techniques of Neutralization", "correct": true },
      { "text": "Strain Theory", "correct": false },
      { "text": "Operant Conditioning", "correct": false }
    ]
  },
  {
    "question": "Which technique of neutralization assumes that the victim brought harm upon themselves?",
    "answers": [
      { "text": "Denial of Responsibility", "correct": false },
      { "text": "Denial of Injury", "correct": false },
      { "text": "Denial of the Victim", "correct": true },
      { "text": "Condemnation of the Condemners", "correct": false },
      { "text": "Appeal to Higher Loyalties", "correct": false }
    ]
  },
  {
    "question": "Sykes and Matza's observations suggest that delinquents often feel guilt because:",
    "answers": [
      { "text": "They accept full responsibility for their actions.", "correct": false },
      { "text": "They value their criminal identity.", "correct": false },
      { "text": "They remain aware of societal norms and values.", "correct": true },
      { "text": "They fail to rationalize their behavior adequately.", "correct": false },
      { "text": "They reject all forms of moral reasoning.", "correct": false }
    ]
  },
  {
    "question": "In Freud's psychoanalytic model, which part of the psyche acts as the instinctual driver?",
    "answers": [
      { "text": "Superego", "correct": false },
      { "text": "Ego", "correct": false },
      { "text": "Id", "correct": true },
      { "text": "Conscious", "correct": false },
      { "text": "Subconscious", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of rationalizations in techniques of neutralization?",
    "answers": [
      { "text": "To maintain social harmony.", "correct": false },
      { "text": "To create excuses that reduce cognitive dissonance.", "correct": true },
      { "text": "To prevent future offending.", "correct": false },
      { "text": "To ensure loyalty within a group.", "correct": false },
      { "text": "To reinforce societal rules.", "correct": false }
    ]
  },
  {
    "question": "How do delinquents using denial of responsibility view their actions?",
    "answers": [
      { "text": "As morally justified.", "correct": false },
      { "text": "As unavoidable due to external pressures.", "correct": true },
      { "text": "As inconsequential.", "correct": false },
      { "text": "As beneficial to their group.", "correct": false },
      { "text": "As the fault of the victim.", "correct": false }
    ]
  },
  {
    "question": "What is the significance of offenders respecting lawful citizens in Neutralization Theory?",
    "answers": [
      { "text": "It demonstrates a rejection of societal norms.", "correct": false },
      { "text": "It highlights their partial conformity to societal expectations.", "correct": true },
      { "text": "It indicates a lack of guilt for their actions.", "correct": false },
      { "text": "It undermines their ability to commit offenses.", "correct": false },
      { "text": "It suggests that criminal behavior is inherently moral.", "correct": false }
    ]
  },
  {
    "question": "Offenders justifying their actions as harmless would be using which neutralization technique?",
    "answers": [
      { "text": "Appeal to Higher Loyalties", "correct": false },
      { "text": "Denial of Injury", "correct": true },
      { "text": "Condemnation of the Condemners", "correct": false },
      { "text": "Denial of Responsibility", "correct": false },
      { "text": "Denial of the Victim", "correct": false }
    ]
  },
  {
    "question": "What is the primary distinction between the denial of responsibility and the denial of the victim techniques?",
    "answers": [
      { "text": "Denial of responsibility blames external forces, while denial of the victim shifts focus to the victim’s perceived role.", "correct": true },
      { "text": "Denial of responsibility acknowledges guilt, while denial of the victim denies harm.", "correct": false },
      { "text": "Denial of responsibility justifies group loyalty, while denial of the victim rejects the concept of harm.", "correct": false },
      { "text": "Denial of responsibility is societal, while denial of the victim is individual.", "correct": false },
      { "text": "Denial of responsibility implies harm is justified, while denial of the victim asserts harm was unintentional.", "correct": false }
    ]
  }
];
