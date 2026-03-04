const questionBank = [
  {
    "question": "What is the smallest summarized address space that contains the 192.168.1.2 and 192.168.1.3 host addresses?",
    "answers": [
      { "text": "192.168.1.0/24", "correct": false },
      { "text": "192.168.1.0/30", "correct": false },
      { "text": "192.168.1.2/31", "correct": true },
      { "text": "192.168.1.0/29", "correct": false },
      { "text": "192.168.1.2/30", "correct": false }
    ]
  },
  {
    "question": "What is the best practice for DNS name spaces within a corporate network?",
    "answers": [
      { "text": "Use one publicly registered DNS domain for internal and external servers", "correct": false },
      { "text": "Use a publicly registered DNS domain for external servers and a second publicly registered domain for internal servers", "correct": false },
      { "text": "Use a publicly registered DNS domain for external servers and a non-publicly registered domain for internal servers", "correct": true },
      { "text": "A or B", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the best DMZ layout for messaging systems such as Microsoft Exchange or Lotus Notes?",
    "answers": [
      { "text": "Put a relay host/mail forwarder in a DMZ and the messaging server in the private address space", "correct": false },
      { "text": "Put a relay host/mail forwarder in an outer DMZ and the messaging server in an inner DMZ", "correct": true },
      { "text": "Put the messaging server in a single DMZ and allow SMTP traffic to reach it directly", "correct": false },
      { "text": "Put the messaging server in the private zone and forward port 25 to it", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "In which type of VPN is a data endpoint rarely an encapsulation endpoint?",
    "answers": [
      { "text": "Client access", "correct": false },
      { "text": "Site-to-site", "correct": true },
      { "text": "SSH", "correct": false },
      { "text": "SSL", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "This client access VPN technology allows for two factor user authentication.",
    "answers": [
      { "text": "GRE/PPP", "correct": false },
      { "text": "IPsec Tunneling Mode", "correct": false },
      { "text": "L2TP/IPsec", "correct": true },
      { "text": "PPTP/GRE", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which client access VPN technology is most likely to work through restrictive DNAT/PAT firewalls?",
    "answers": [
      { "text": "GRE/PPP", "correct": false },
      { "text": "IPsec Tunneling Mode", "correct": false },
      { "text": "L2TP/IPsec", "correct": false },
      { "text": "PPTP/GRE", "correct": false },
      { "text": "SSL", "correct": true }
    ]
  },
  {
    "question": "This technology can be summarized as PPP over IP.",
    "answers": [
      { "text": "L2TP", "correct": false },
      { "text": "PPTP", "correct": true },
      { "text": "IPsec", "correct": false },
      { "text": "SSL", "correct": false },
      { "text": "A & B", "correct": false }
    ]
  },
  {
    "question": "This VPN technology suffers some performance degradation by encapsulating TCP in TCP.",
    "answers": [
      { "text": "L2TP", "correct": false },
      { "text": "PPTP", "correct": false },
      { "text": "IPsec", "correct": false },
      { "text": "SSL", "correct": true },
      { "text": "A & B", "correct": false }
    ]
  },
  {
    "question": "What is the preferred approach for assigning IP addresses to client-access VPN clients?",
    "answers": [
      { "text": "Include VPN clients in an existing private IP segment", "correct": false },
      { "text": "Create a new private IP segment for VPN clients in the middle of the physical client space such that all must be summarized together", "correct": false },
      { "text": "Create a new private IP segment for VPN clients in a space separate such that physical clients can be summarized without VPN clients", "correct": true },
      { "text": "Create a new private IP segment for VPN clients that cannot summarize with physical clients", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a required step in configuring a RADIUS transaction?",
    "answers": [
      { "text": "Authorize the client", "correct": false },
      { "text": "Create an access profile", "correct": false },
      { "text": "Define a filter-id for the user", "correct": true },
      { "text": "Define IP addresses and ports", "correct": false },
      { "text": "Set the shared secret", "correct": false }
    ]
  },
  {
    "question": "In IPsec, this network protocol defines how security association (SA) information is exchanged.",
    "answers": [
      { "text": "IKE", "correct": false },
      { "text": "ISAKMP", "correct": true },
      { "text": "Transform Set", "correct": false },
      { "text": "Policy", "correct": false },
      { "text": "Crypto Map", "correct": false }
    ]
  },
  {
    "question": "What IPsec protocol/mode is used to authenticate the entire IP packet?",
    "answers": [
      { "text": "AH", "correct": true },
      { "text": "ESP", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Tunnel", "correct": false },
      { "text": "A & B", "correct": false }
    ]
  },
  {
    "question": "Per the standard, which IPsec protocol/mode must be supported by all IPsec enabled nodes?",
    "answers": [
      { "text": "Main mode", "correct": true },
      { "text": "Aggressive mode", "correct": false },
      { "text": "Perfect Forward Security", "correct": false },
      { "text": "A & C", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "Which part of initiating an IPsec connection includes negotiating a cipher and MAC?",
    "answers": [
      { "text": "Phase 1", "correct": false },
      { "text": "Phase 2", "correct": true },
      { "text": "Diffie-Hellman", "correct": false },
      { "text": "PFS", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not part of an IPsec Transform?",
    "answers": [
      { "text": "Block cipher", "correct": false },
      { "text": "IPsec protocol", "correct": false },
      { "text": "IPsec Mode", "correct": false },
      { "text": "Key", "correct": true },
      { "text": "MAC function", "correct": false }
    ]
  },
  {
    "question": "In the packet filter rule '* * * 10.1.2.2/31 tcp 21 accept', which component represents the Action?",
    "answers": [
      { "text": "*", "correct": false },
      { "text": "10.1.2.2/31", "correct": false },
      { "text": "21", "correct": false },
      { "text": "accept", "correct": true },
      { "text": "tcp", "correct": false }
    ]
  },
  {
    "question": "In the packet filter rule '* * * 10.1.2.2/31 tcp 21 accept', which component represents the Destination IP address?",
    "answers": [
      { "text": "*", "correct": false },
      { "text": "10.1.2.2/31", "correct": true },
      { "text": "21", "correct": false },
      { "text": "accept", "correct": false },
      { "text": "tcp", "correct": false }
    ]
  },
  {
    "question": "In the packet filter rule '* * * 10.1.2.2/31 tcp 21 accept', which component represents the Destination Protocol?",
    "answers": [
      { "text": "*", "correct": false },
      { "text": "10.1.2.2/31", "correct": false },
      { "text": "21", "correct": false },
      { "text": "accept", "correct": false },
      { "text": "tcp", "correct": true }
    ]
  },
  {
    "question": "In the packet filter rule '* * * 10.1.2.2/31 tcp 21 accept', which component represents the Destination Protocol Detail?",
    "answers": [
      { "text": "*", "correct": false },
      { "text": "10.1.2.2/31", "correct": false },
      { "text": "21", "correct": true },
      { "text": "accept", "correct": false },
      { "text": "tcp", "correct": false }
    ]
  },
  {
    "question": "In the packet filter rule '* * * 10.1.2.2/31 tcp 21 accept', which component represents the Source IP address?",
    "answers": [
      { "text": "*", "correct": true },
      { "text": "10.1.2.2/31", "correct": false },
      { "text": "21", "correct": false },
      { "text": "accept", "correct": false },
      { "text": "tcp", "correct": false }
    ]
  },
  {
    "question": "In the packet filter rule '* * * 10.1.2.2/31 tcp 21 accept', which component represents the Source Protocol?",
    "answers": [
      { "text": "*", "correct": true },
      { "text": "10.1.2.2/31", "correct": false },
      { "text": "21", "correct": false },
      { "text": "accept", "correct": false },
      { "text": "tcp", "correct": false }
    ]
  },
  {
    "question": "Hardware firewalls are typically specialized routers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When writing firewall rules, you can use DNS hostnames to insulate the rule from changes in IP addresses without decreasing security.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A basic technique used in SPI firewalls for TCP is to require inbound packets addressed to non-reserved (source) ports to have their ACK bit set.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The source protocol in a filtering rule should always be wildcarded.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The terms packet filter and firewall have identical meaning.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A web proxy server is an example of an application layer gateway.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When using a filtering bridge it is best to avoid sharing an interface as a bridge source and routing/NAT target.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "VLANs can be used to create more security zones than a firewall has interfaces.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Throughput in bytes per second is the most important firewall performance metric.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When using DNAT/PAT, a server behind a firewall cannot offer services to hosts outside the firewall.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Which of the following terms does not match the others in a common security definition?",
    "answers": [
      { "text": "Authentication", "correct": false },
      { "text": "Authorization", "correct": false },
      { "text": "Encryption", "correct": true },
      { "text": "Non-Repudiation", "correct": false },
      { "text": "All are part of the same security definition", "correct": false }
    ]
  },
  {
    "question": "Which of the following is/are mechanisms commonly used to enable spoofed IP addresses to connect to a target from a different network?",
    "answers": [
      { "text": "Loose Source Record Routing", "correct": true },
      { "text": "ARP cache poisoning", "correct": false },
      { "text": "MAC address spoofing", "correct": false },
      { "text": "Strict Source Record Routing", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "A packet filter uses what type of matching algorithm?",
    "answers": [
      { "text": "Longest match", "correct": false },
      { "text": "Shortest match", "correct": false },
      { "text": "First match", "correct": true },
      { "text": "Last match", "correct": false },
      { "text": "Packet filters don’t use a matching algorithm", "correct": false }
    ]
  },
  {
    "question": "In most IP based protocols source ports are usually selected:",
    "answers": [
      { "text": "Algorithmically from port 60000 and up", "correct": false },
      { "text": "Randomly from port 256 and up", "correct": false },
      { "text": "Randomly from port 1023 and down", "correct": false },
      { "text": "Randomly from port 1024 and up", "correct": true },
      { "text": "Sequentially from port 1023 and up", "correct": false }
    ]
  },
  {
    "question": "What is the best practice response to traffic that is blocked by firewall rules?",
    "answers": [
      { "text": "Send an ICMP 'host not reachable' message", "correct": false },
      { "text": "Send an ICMP 'host not administratively reachable' message", "correct": false },
      { "text": "Send an ICMP redirect message", "correct": false },
      { "text": "Send nothing", "correct": true },
      { "text": "B or C", "correct": false }
    ]
  },
  {
    "question": "In a dynamic (SPI) packet filter implementation which statement is true of return traffic flows?",
    "answers": [
      { "text": "Return traffic doesn’t require any rules regardless of protocol", "correct": true },
      { "text": "Return TCP and UDP traffic doesn’t require any rules", "correct": false },
      { "text": "Return TCP traffic doesn’t require any rules", "correct": false },
      { "text": "All return traffic requires rules", "correct": false },
      { "text": "Dynamic packet filters don’t affect the rules required for return traffic", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a characteristic of a dynamic packet filter?",
    "answers": [
      { "text": "Checks TCP sequence numbers", "correct": false },
      { "text": "Provides data flow authentication", "correct": true },
      { "text": "Builds a state table of connections", "correct": false },
      { "text": "Examines application layer data", "correct": false },
      { "text": "Keeps track of UDP data flows", "correct": false }
    ]
  },
  {
    "question": "What is the biggest advantage of packet filters compared to other in-line security options?",
    "answers": [
      { "text": "Ease of use and self-documenting nature", "correct": false },
      { "text": "Logging capabilities", "correct": false },
      { "text": "Speed", "correct": true },
      { "text": "Prevention of direct connections between internal and external hosts", "correct": false },
      { "text": "Flexibility", "correct": false }
    ]
  },
  {
    "question": "Which internetwork process(es) can be easily configured to protect multiple non-summarizable addresses on the external network?",
    "answers": [
      { "text": "Bridging", "correct": true },
      { "text": "Static NAT (SNAT)", "correct": false },
      { "text": "Port Address Translation (DNAT/PAT)", "correct": false },
      { "text": "Normal/Standard routing", "correct": false },
      { "text": "A & B", "correct": false }
    ]
  },
  {
    "question": "Which internetwork process adds the most latency?",
    "answers": [
      { "text": "Bridging", "correct": false },
      { "text": "Static NAT (SNAT)", "correct": false },
      { "text": "Port Address Translation (DNAT/PAT)", "correct": false },
      { "text": "Normal/Standard routing", "correct": false },
      { "text": "Using an application layer gateway", "correct": true }
    ]
  },
  {
    "question": "Which internetwork process adds the least latency?",
    "answers": [
      { "text": "Bridging", "correct": false },
      { "text": "Static NAT (SNAT)", "correct": false },
      { "text": "Port Address Translation (DNAT/PAT)", "correct": false },
      { "text": "Normal/Standard routing", "correct": true },
      { "text": "Using an application layer gateway", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not an RFC 1918 private IPv4 address?",
    "answers": [
      { "text": "10.18.34.112", "correct": false },
      { "text": "169.254.2.1", "correct": true },
      { "text": "172.23.56.3", "correct": false },
      { "text": "192.168.5.3", "correct": false },
      { "text": "All of the above are RFC1918 private IPv4 addresses", "correct": false }
    ]
  },
  {
    "question": "Which internetwork process can interconnect RFC1918 addresses and regular IP addresses by manipulating only layer 3?",
    "answers": [
      { "text": "Bridging", "correct": false },
      { "text": "Static NAT (SNAT)", "correct": true },
      { "text": "Port Address Translation (DNAT/PAT)", "correct": false },
      { "text": "Normal/Standard routing", "correct": false },
      { "text": "Using an application layer gateway", "correct": false }
    ]
  },
  {
    "question": "Which internetwork process requires an interface answer ARP requests for a second IP address (proxy ARP)?",
    "answers": [
      { "text": "Bridging", "correct": false },
      { "text": "Normal/Standard routing", "correct": false },
      { "text": "Static NAT (SNAT)", "correct": true },
      { "text": "Port Address Translation (DNAT/PAT)", "correct": false },
      { "text": "Use of an application layer gateway", "correct": false }
    ]
  },
  {
    "question": "What is the smallest summarized address space that contains the 172.17.3.103 and 172.17.3.104 host addresses?",
    "answers": [
      { "text": "172.17.3.0/27", "correct": false },
      { "text": "172.17.3.96/27", "correct": false },
      { "text": "172.17.3.96/28", "correct": true },
      { "text": "172.27.3.0/28", "correct": false },
      { "text": "172.27.3.0/25", "correct": false }
    ]
  },
  {
    "question": "When using SNAT, inbound traffic address translation typically occurs before rules are processed; allowing the use of the internal addresses in the inbound rules.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In general, firewalls should inspect traffic entering, rather than exiting, an interface.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DMZs and internal networks should have completely separate IP and DNS spaces.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Strict regulation in IETF standards ensure that an open port 25 provides SMTP services.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A firewall that only has three physical interfaces cannot be used to create multiple DMZ segments.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Using parallel DMZs is a good method for reducing the impact of a server breach.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A \"true\" VPN must provide network extension.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "From the client perspective in a client access VPN solution, traffic is routed across the VPN.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "L2TP/IPsec can provide better encryption than is available in PPTP/GRE.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In a site-to-site VPN a virtual NIC is added to each data endpoint's configuration.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "802.1x port based authentication commonly uses RADIUS for user authentication.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RADIUS represents a security threat as it passes clear text passwords across the network.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "ISAKMP is the IKE protocol used to manage security associations in IPsec.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "IPsec is standardized for both IPv4 and IPv6.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "AH and ESP can be used concurrently.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In Cisco devices a transform set is bound to an interface by a Crypto Map.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  }


  ];