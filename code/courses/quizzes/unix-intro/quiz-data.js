const questionBank = [
  {
    "question": "Which of the following is a reason networks should not be flat?",
    "answers": [
      { "text": "Increased ease of communication between devices", "correct": false },
      { "text": "Enhanced security risks if one device is compromised", "correct": true },
      { "text": "Simplified device management", "correct": false },
      { "text": "Faster data transfer speeds", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What does the term 'segmentation' in networks refer to?",
    "answers": [
      { "text": "Combining all devices in one network", "correct": false },
      { "text": "Separating devices into smaller, secure sections", "correct": true },
      { "text": "Disabling communication between networks", "correct": false },
      { "text": "Using multiple NICs for redundancy", "correct": false },
      { "text": "Implementing default firewalls across all devices", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of firewalls in a network?",
    "answers": [
      { "text": "Providing redundancy", "correct": false },
      { "text": "Encrypting data during transit", "correct": false },
      { "text": "Allowing or blocking specific traffic based on rules", "correct": true },
      { "text": "Creating flat networks", "correct": false },
      { "text": "Monitoring network speed", "correct": false }
    ]
  },
  {
    "question": "In SSH Tunneling, what does the '-L' option specify?",
    "answers": [
      { "text": "Remote Port Forwarding", "correct": false },
      { "text": "Dynamic Port Forwarding", "correct": false },
      { "text": "Local Port Forwarding", "correct": true },
      { "text": "SSH Key Authentication", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes Dynamic Port Forwarding?",
    "answers": [
      { "text": "Tunneling network traffic through a single port to one host", "correct": false },
      { "text": "Creating a SOCKS proxy for flexible tunneling to multiple hosts", "correct": true },
      { "text": "Forwarding traffic from local to remote ports", "correct": false },
      { "text": "Forwarding traffic from remote to local ports", "correct": false },
      { "text": "Encrypting web server connections", "correct": false }
    ]
  },
  {
    "question": "Which Linux command installs Socat?",
    "answers": [
      { "text": "yum install socat", "correct": false },
      { "text": "apt install socat", "correct": true },
      { "text": "rpm -i socat", "correct": false },
      { "text": "pacman -S socat", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What does the 'Fork' option in Socat accomplish?",
    "answers": [
      { "text": "Prevents connection to blocked ports", "correct": false },
      { "text": "Terminates the connection after use", "correct": false },
      { "text": "Spawns a new process for each connection", "correct": true },
      { "text": "Encrypts data during transmission", "correct": false },
      { "text": "Disables local listening", "correct": false }
    ]
  },
  {
    "question": "Which port is commonly used for HTTP traffic?",
    "answers": [
      { "text": "443", "correct": false },
      { "text": "22", "correct": false },
      { "text": "8080", "correct": false },
      { "text": "80", "correct": true },
      { "text": "3306", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of SSH Tunneling?",
    "answers": [
      { "text": "To speed up network connections", "correct": false },
      { "text": "To securely access blocked or segmented network resources", "correct": true },
      { "text": "To replace VPNs", "correct": false },
      { "text": "To configure firewalls", "correct": false },
      { "text": "To monitor network logs", "correct": false }
    ]
  },
  {
    "question": "In the context of port redirection, what is the role of 'iptables' in Linux?",
    "answers": [
      { "text": "Encrypting network traffic", "correct": false },
      { "text": "Running web servers", "correct": false },
      { "text": "Managing firewall rules", "correct": true },
      { "text": "Monitoring logs", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a type of SSH Tunneling?",
    "answers": [
      { "text": "Local Port Forwarding", "correct": false },
      { "text": "Remote Port Forwarding", "correct": false },
      { "text": "Dynamic Port Forwarding", "correct": false },
      { "text": "Static Port Forwarding", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the default port for SSH?",
    "answers": [
      { "text": "80", "correct": false },
      { "text": "8080", "correct": false },
      { "text": "443", "correct": false },
      { "text": "22", "correct": true },
      { "text": "3306", "correct": false }
    ]
  },
  {
    "question": "What command initiates a local port forward?",
    "answers": [
      { "text": "ssh -R", "correct": false },
      { "text": "ssh -L", "correct": true },
      { "text": "ssh -D", "correct": false },
      { "text": "scp -L", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "In a firewall setup, which protocol might commonly block port 8080 while allowing port 80?",
    "answers": [
      { "text": "ICMP", "correct": false },
      { "text": "UDP", "correct": false },
      { "text": "TCP", "correct": true },
      { "text": "SCTP", "correct": false },
      { "text": "IGMP", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a tool for testing SQL Injection vulnerabilities?",
    "answers": [
      { "text": "Wireshark", "correct": false },
      { "text": "SQLMap", "correct": true },
      { "text": "Nmap", "correct": false },
      { "text": "John the Ripper", "correct": false },
      { "text": "Socat", "correct": false }
    ]
  },
  {
    "question": "In the example provided, how is Socat used for port redirection?",
    "answers": [
      { "text": "Encrypting the connection", "correct": false },
      { "text": "Scanning open ports", "correct": false },
      { "text": "Listening on a local port and redirecting to a target port", "correct": true },
      { "text": "Monitoring active connections", "correct": false },
      { "text": "Configuring NAT rules", "correct": false }
    ]
  },
  {
    "question": "What is one implication of a compromised machine in a segmented network?",
    "answers": [
      { "text": "Loss of data encryption", "correct": false },
      { "text": "Access to internal network resources", "correct": true },
      { "text": "Increased firewall restrictions", "correct": false },
      { "text": "Improved performance", "correct": false },
      { "text": "Simplified configurations", "correct": false }
    ]
  },
  {
    "question": "Which file can be used to configure SSH settings in Linux?",
    "answers": [
      { "text": "/etc/firewall.conf", "correct": false },
      { "text": "/etc/network/interfaces", "correct": false },
      { "text": "/etc/ssh/sshd_config", "correct": true },
      { "text": "/etc/socat.conf", "correct": false },
      { "text": "/etc/fstab", "correct": false }
    ]
  },
  {
    "question": "What flag enables verbose output in Socat?",
    "answers": [
      { "text": "-L", "correct": false },
      { "text": "-R", "correct": false },
      { "text": "-D", "correct": false },
      { "text": "-dddd", "correct": true },
      { "text": "-P", "correct": false }
    ]
  },
  {
    "question": "Which of the following scenarios exemplifies Remote Port Forwarding?",
    "answers": [
      { "text": "Forwarding traffic from a remote server to a local machine", "correct": true },
      { "text": "Creating a SOCKS proxy for internet traffic", "correct": false },
      { "text": "Redirecting all traffic through NAT", "correct": false },
      { "text": "Configuring VLANs for segmentation", "correct": false },
      { "text": "Forwarding from local port to a remote web server", "correct": false }
    ]
  },
  {
    "question": "Flat networks are inherently secure.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Firewalls can both block and allow specific types of traffic.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SSH Tunneling encrypts data between two machines.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Local Port Forwarding involves traffic from a remote port to a local port.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Dynamic Port Forwarding requires creating a SOCKS proxy.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Socat is exclusively used on Windows systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Using the -dddd flag in Socat decreases verbosity.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A segmented network increases the attack surface for potential hackers.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Remote Port Forwarding forwards traffic from a local machine to a remote server.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Port 80 is typically associated with HTTPS traffic.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SSH Tunneling can bypass firewalls to access blocked resources.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SQL Injection vulnerabilities cannot compromise internal systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Socat enables connection redirection via a specified port.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The default port for HTTPS is 443.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Compromised segmentation can lead to access to all devices within the same segment.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Using ssh -L establishes a Remote Port Forward.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Linux firewalls commonly use iptables for configuration.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The \"-D\" option in SSH sets up a local proxy server.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Firewalls prevent port redirection under all circumstances.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In segmentation, one compromised device does not impact others.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "You need to access a web application hosted on 192.168.1.5 port 8080 from a remote machine using Local Port Forwarding. What is the correct SSH command?",
    "answers": [
      { "text": "ssh -R 8080:192.168.1.5:80 user@remote", "correct": false },
      { "text": "ssh -L 8080:192.168.1.5:8080 user@remote", "correct": true },
      { "text": "ssh -D 8080 user@remote", "correct": false },
      { "text": "ssh -L 192.168.1.5:8080 user@remote", "correct": false },
      { "text": "ssh user@remote", "correct": false }
    ]
  },
  {
    "question": "Alice uses Dynamic Port Forwarding to secure her internet traffic on public Wi-Fi. Which SSH flag should she use?",
    "answers": [
      { "text": "-L", "correct": false },
      { "text": "-R", "correct": false },
      { "text": "-D", "correct": true },
      { "text": "-T", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "You need to test an SQL vulnerability in a system. Which tool will you use?",
    "answers": [
      { "text": "Wireshark", "correct": false },
      { "text": "Socat", "correct": false },
      { "text": "SQLMap", "correct": true },
      { "text": "SSH", "correct": false },
      { "text": "Nmap", "correct": false }
    ]
  },
  {
    "question": "Your machine cannot reach port 80 on a target. Using Socat, which command redirects local port 7777 to 80 on 192.168.10.10?",
    "answers": [
      { "text": "socat TCP:192.168.10.10:80 TCP-LISTEN:7777", "correct": false },
      { "text": "socat TCP-LISTEN:7777,fork TCP:192.168.10.10:80", "correct": true },
      { "text": "socat -dddd 7777:192.168.10.10:80", "correct": false },
      { "text": "socat TCP:80:192.168.10.10 TCP-LISTEN:7777", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "A developer wants to test a locally hosted web application on a remote server's browser. Which type of SSH tunneling should be used?",
    "answers": [
      { "text": "Local Port Forwarding", "correct": false },
      { "text": "Remote Port Forwarding", "correct": true },
      { "text": "Dynamic Port Forwarding", "correct": false },
      { "text": "NAT", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "To access an internal database server running on db.internal.local:3306 from outside the network, which SSH command should you use?",
    "answers": [
      { "text": "ssh -D 3306 db.internal.local", "correct": false },
      { "text": "ssh -L 3306:db.internal.local:3306 user@remote", "correct": true },
      { "text": "ssh -R 3306:db.internal.local:3306 user@remote", "correct": false },
      { "text": "ssh -P 3306 user@remote", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "You are troubleshooting a blocked port on a network. How would you determine if the port is accessible from an internal machine?",
    "answers": [
      { "text": "Use nmap on the external machine", "correct": false },
      { "text": "Use iptables to log connections", "correct": false },
      { "text": "Compromise an internal machine and check the port directly", "correct": true },
      { "text": "Redirect traffic to port 22", "correct": false },
      { "text": "Disable the firewall temporarily", "correct": false }
    ]
  },
  {
    "question": "Bob needs to set up Dynamic Port Forwarding to route all his web traffic through a secure SSH tunnel to 12.12.12.12. Which command is correct?",
    "answers": [
      { "text": "ssh -R 12.12.12.12 user@12.12.12.12", "correct": false },
      { "text": "ssh -L 1080:12.12.12.12:80 user@12.12.12.12", "correct": false },
      { "text": "ssh -D 1080 user@12.12.12.12", "correct": true },
      { "text": "ssh -L 80:1080 user@12.12.12.12", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Gawain hosts a local server on localhost:8000 but needs to expose it to a development server at dev.acme.com:8080. What command should he use?",
    "answers": [
      { "text": "ssh -L 8000:dev.acme.com:8080 Gawain@dev.acme.com", "correct": false },
      { "text": "ssh -D 8000 Gawain@dev.acme.com", "correct": false },
      { "text": "ssh -R 8080:localhost:8000 Gawain@dev.acme.com", "correct": true },
      { "text": "ssh -L 8080:8000 dev.acme.com", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "A security analyst finds that a port appears closed when scanned externally but is accessible internally. What is a possible reason?",
    "answers": [
      { "text": "The port is inherently blocked by the firewall", "correct": false },
      { "text": "The firewall is configured to block external access but allow internal traffic", "correct": true },
      { "text": "The port is physically damaged", "correct": false },
      { "text": "The scanning tool is malfunctioning", "correct": false },
      { "text": "The port uses an unsupported protocol", "correct": false }
    ]
  }
];
