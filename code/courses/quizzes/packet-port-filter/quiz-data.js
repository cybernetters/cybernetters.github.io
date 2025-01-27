const questionBank = [
  {
    "question": "Which of the following describes a packet filter?",
    "answers": [
      { "text": "A software that manages DNS traffic only", "correct": false },
      { "text": "A software that limits connectivity by blocking ingress and egress traffic", "correct": true },
      { "text": "A hardware device used to optimize network speeds", "correct": false },
      { "text": "A tool exclusively used for IP spoofing detection", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Why is it recommended to use IP addresses instead of DNS names in packet filtering?",
    "answers": [
      { "text": "DNS names are always encrypted", "correct": false },
      { "text": "DNS names are easier to spoof than IP addresses", "correct": true },
      { "text": "IP addresses offer less granular control", "correct": false },
      { "text": "IP addresses are immutable", "correct": false },
      { "text": "DNS names require higher network bandwidth", "correct": false }
    ]
  },
  {
    "question": "What is the major limitation of destination static port filtering?",
    "answers": [
      { "text": "It cannot block specific ports", "correct": false },
      { "text": "It only examines source ports", "correct": false },
      { "text": "It assumes the server responds to incoming messages on the received port", "correct": true },
      { "text": "It cannot filter UDP traffic", "correct": false },
      { "text": "It requires bi-directional filtering", "correct": false }
    ]
  },
  {
    "question": "What type of device is a Cisco PIX/ASA?",
    "answers": [
      { "text": "Software-based packet filter", "correct": false },
      { "text": "Replacement IP stack", "correct": false },
      { "text": "Specialized network device", "correct": true },
      { "text": "Loose Source Routing tool", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Loose Source Record Routing (LSRR) allows a packet to:",
    "answers": [
      { "text": "Be encrypted before routing", "correct": false },
      { "text": "Travel through a specific router", "correct": true },
      { "text": "Use DNS names for routing", "correct": false },
      { "text": "Avoid border firewalls", "correct": false },
      { "text": "Spoof IP addresses for email traffic", "correct": false }
    ]
  },
  {
    "question": "What is a key feature of dynamic packet filtering?",
    "answers": [
      { "text": "Opens all ports by default", "correct": false },
      { "text": "Ignores application layer details", "correct": false },
      { "text": "Builds a state table for communication tracking", "correct": true },
      { "text": "Uses only static rulesets", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which protocol is problematic for UDP source port filtering?",
    "answers": [
      { "text": "HTTPS", "correct": false },
      { "text": "SMTP", "correct": false },
      { "text": "DNS", "correct": true },
      { "text": "TCP", "correct": false },
      { "text": "ARP", "correct": false }
    ]
  },
  {
    "question": "What is the best solution for dealing with blocked traffic in most scenarios?",
    "answers": [
      { "text": "Send an ICMP 'host not reachable' message", "correct": false },
      { "text": "Send an ICMP 'host not administratively reachable' message", "correct": false },
      { "text": "Send no response", "correct": true },
      { "text": "Redirect the traffic", "correct": false },
      { "text": "Use DNS forwarding", "correct": false }
    ]
  },
  {
    "question": "Which is a limitation of packet filtering?",
    "answers": [
      { "text": "It is too slow to handle high bandwidth", "correct": false },
      { "text": "It enables DNS spoofing", "correct": false },
      { "text": "Lack of detailed user authentication and authorization", "correct": true },
      { "text": "Inability to monitor external communications", "correct": false },
      { "text": "Excessive logging requirements", "correct": false }
    ]
  },
  {
    "question": "What does stateful packet inspection (SPI) analyze?",
    "answers": [
      { "text": "IP addresses only", "correct": false },
      { "text": "Application layer data", "correct": false },
      { "text": "Sequence numbers and context of communication", "correct": true },
      { "text": "ICMP traffic exclusively", "correct": false },
      { "text": "Open ports on remote servers", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of a packet filter?",
    "answers": [
      { "text": "To encrypt incoming and outgoing traffic", "correct": false },
      { "text": "To allow unrestricted network communication", "correct": false },
      { "text": "To limit connectivity based on rules", "correct": true },
      { "text": "To replace existing IP stacks", "correct": false },
      { "text": "To enable Loose Source Routing", "correct": false }
    ]
  },
  {
    "question": "Which is a strength of packet filters?",
    "answers": [
      { "text": "High authentication levels", "correct": false },
      { "text": "Can approach line speeds", "correct": true },
      { "text": "Advanced user authorization", "correct": false },
      { "text": "Extensive logging features", "correct": false },
      { "text": "Dynamic DNS updates", "correct": false }
    ]
  },
  {
    "question": "Why is DNS forwarding used in packet filtering?",
    "answers": [
      { "text": "To allow encrypted traffic only", "correct": false },
      { "text": "To limit IP addresses to an ISP's DNS server", "correct": true },
      { "text": "To enable faster DNS name resolution", "correct": false },
      { "text": "To bypass IP filtering rules", "correct": false },
      { "text": "To enhance UDP security", "correct": false }
    ]
  },
  {
    "question": "Packet filtering software always includes DNS name filtering.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A packet filter can limit both ingress and egress traffic.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The term 'firewall' is interchangeable with 'packet filter.'",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Replacement IP stacks are rare in modern implementations of packet filters.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "It is safe to rely on DNS names for packet filtering.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Loose Source Record Routing (LSRR) should be disabled on all border routers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Only destination ports are standardized in UDP and TCP communications.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Static filtering examines packets based on their source or destination port numbers only.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Stateful packet inspection (SPI) can examine the application layer of traffic.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Static filtering is always more secure than dynamic filtering.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "UDP traffic is difficult to secure due to its connectionless nature.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Using bi-directional filters can enhance the security of mail server traffic.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "TCP static source port filtering ensures secure incoming connections.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Passive mode FTP (PASV) helps mitigate issues with dynamic connection openings.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Dynamic packet filtering creates a state table to track communication flows.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Sending an ICMP 'host not reachable' message is the safest way to handle blocked traffic.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Packet filters can achieve speeds close to the line rate.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Dynamic packet filtering will always close ports not in use.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Packet filters often include comprehensive logging features.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "It is possible to spoof an IP address to bypass packet filters using LSRR.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A new client application requires traffic to a server on port 80, but the server responds from a random port above 1023. How can you allow this communication securely?",
    "answers": [
      { "text": "Enable Loose Source Routing", "correct": false },
      { "text": "Use bi-directional filtering with source and destination ports", "correct": true },
      { "text": "Allow all incoming traffic above port 1023", "correct": false },
      { "text": "Use static source port filtering for port 80", "correct": false },
      { "text": "Block the server's responses", "correct": false }
    ]
  },
  {
    "question": "An organization wants to improve security by blocking all unused ports but needs DNS traffic. What approach is most effective?",
    "answers": [
      { "text": "Enable DNS forwarding and limit access to the ISP's upstream DNS server", "correct": true },
      { "text": "Allow all UDP traffic on port 53", "correct": false },
      { "text": "Block all UDP traffic", "correct": false },
      { "text": "Use TCP-based DNS only", "correct": false },
      { "text": "Require DNS over HTTPS", "correct": false }
    ]
  },
  {
    "question": "Your firewall logs show repeated connection attempts from an unauthorized IP. What is the safest response?",
    "answers": [
      { "text": "Send an ICMP 'host not reachable' message", "correct": false },
      { "text": "Send an ICMP 'host not administratively reachable' message", "correct": false },
      { "text": "Drop the traffic without sending a response", "correct": true },
      { "text": "Redirect the traffic to a honeypot", "correct": false },
      { "text": "Allow one connection to analyze the behavior", "correct": false }
    ]
  },
  {
    "question": "A company wants to ensure all outgoing TCP traffic is part of a valid session. Which filtering method should they implement?",
    "answers": [
      { "text": "Static filtering for source ports", "correct": false },
      { "text": "Dynamic packet filtering with ACK flag checks", "correct": true },
      { "text": "Destination port-based filtering", "correct": false },
      { "text": "Allowing ports above 1023 unconditionally", "correct": false },
      { "text": "Using LSRR to validate sessions", "correct": false }
    ]
  },
  {
    "question": "A mail server is experiencing spoofing attacks. How can you secure traffic without disrupting legitimate communication?",
    "answers": [
      { "text": "Allow traffic only to destination port 25", "correct": false },
      { "text": "Use bi-directional filters to verify source and destination ports", "correct": true },
      { "text": "Block all traffic to port 25", "correct": false },
      { "text": "Switch to a UDP-based mail protocol", "correct": false },
      { "text": "Enable Loose Source Routing", "correct": false }
    ]
  },
  {
    "question": "You are configuring a firewall and need to prevent attackers from identifying it. What should you do with blocked traffic?",
    "answers": [
      { "text": "Send a 'host administratively unreachable' message", "correct": false },
      { "text": "Send a 'host not reachable' message", "correct": false },
      { "text": "Drop the traffic silently", "correct": true },
      { "text": "Use a decoy IP address for responses", "correct": false },
      { "text": "Forward the traffic to an internal server", "correct": false }
    ]
  },
  {
    "question": "During a security audit, you discover that the firewall responds to ICMP pings. What is a potential risk?",
    "answers": [
      { "text": "It reveals open ports to attackers", "correct": false },
      { "text": "It enables Loose Source Routing", "correct": false },
      { "text": "It provides information about the firewall's presence", "correct": true },
      { "text": "It disables dynamic filtering rules", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "A client application uses passive mode FTP. What is a key benefit of this mode in packet filtering?",
    "answers": [
      { "text": "It eliminates the need for dynamic filters", "correct": false },
      { "text": "It keeps all connections client-initiated, simplifying filtering", "correct": true },
      { "text": "It encrypts all FTP traffic", "correct": false },
      { "text": "It uses DNS names instead of IP addresses", "correct": false },
      { "text": "It bypasses filtering rules for port 21", "correct": false }
    ]
  },
  {
    "question": "You need to configure a firewall for a server that handles both HTTP and SMTP traffic. What is the most secure configuration?",
    "answers": [
      { "text": "Enable destination filtering for ports 25 and 80", "correct": false },
      { "text": "Allow all incoming traffic to ports 25 and 80 unconditionally", "correct": false },
      { "text": "Use bi-directional filtering for ports 25 and 80", "correct": true },
      { "text": "Block ports above 1023 for both protocols", "correct": false },
      { "text": "Use DNS names for filtering", "correct": false }
    ]
  },
  {
    "question": "After implementing dynamic packet filtering, you notice slower performance. What might be causing this?",
    "answers": [
      { "text": "Static filters are being overridden", "correct": false },
      { "text": "The state table is becoming too large", "correct": true },
      { "text": "IP address spoofing bypasses the filters", "correct": false },
      { "text": "Dynamic filters open all ports", "correct": false },
      { "text": "ICMP messages are congesting the network", "correct": false }
    ]
  },
  {
    "question": "Which filtering type examines both source and destination ports?",
    "answers": [
      { "text": "Static filtering", "correct": false },
      { "text": "Bi-directional filtering", "correct": true },
      { "text": "Loose Source Record Routing", "correct": false },
      { "text": "Dynamic packet filtering", "correct": false },
      { "text": "UDP source port filtering", "correct": false }
    ]
  },
  {
    "question": "What happens when dynamic packet filtering blocks traffic?",
    "answers": [
      { "text": "It encrypts the blocked packet", "correct": false },
      { "text": "It updates the routing table", "correct": false },
      { "text": "It builds a state table", "correct": false },
      { "text": "It keeps the port closed", "correct": true },
      { "text": "It uses IP address spoofing", "correct": false }
    ]
  },
  {
    "question": "What is one way to ensure UDP traffic is safe in filtering?",
    "answers": [
      { "text": "Allow all DNS requests", "correct": false },
      { "text": "Use static source port filtering", "correct": false },
      { "text": "Deny all UDP traffic where possible", "correct": true },
      { "text": "Require authentication for UDP sessions", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  }
];