const questionBank = [
  {
    "question": "Which protocol uses UDP ports 67 and 68 for communication?",
    "answers": [
      { "text": "RARP", "correct": false },
      { "text": "ARP", "correct": false },
      { "text": "DHCP", "correct": true },
      { "text": "ICMP", "correct": false }
    ]
  },
  {
    "question": "In the DHCP message format, what does the ‘HTYPE’ field represent?",
    "answers": [
      { "text": "Hardware type (e.g., 1 for Ethernet)", "correct": true },
      { "text": "IP version", "correct": false },
      { "text": "Message type", "correct": false },
      { "text": "Length of the hardware address", "correct": false }
    ]
  },
  {
    "question": "Which DHCP message is broadcast by a client to locate available DHCP servers?",
    "answers": [
      { "text": "DHCPACK", "correct": false },
      { "text": "DHCPDISCOVER", "correct": true },
      { "text": "DHCPREQUEST", "correct": false },
      { "text": "DHCPOFFER", "correct": false }
    ]
  },
  {
    "question": "According to RFC 2132, what is the default value of the T1 timer in a DHCP lease?",
    "answers": [
      { "text": "0.25 × lease time", "correct": false },
      { "text": "0.5 × lease time", "correct": true },
      { "text": "0.75 × lease time", "correct": false },
      { "text": "Equal to the full lease time", "correct": false }
    ]
  },
  {
    "question": "Which protocol only assigns an IP address without providing default router or subnet mask information?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "BootP", "correct": false },
      { "text": "RARP", "correct": true },
      { "text": "ARP", "correct": false }
    ]
  },
  {
    "question": "Which protocol extends BootP functionality by providing additional configuration options?",
    "answers": [
      { "text": "RARP", "correct": false },
      { "text": "ARP", "correct": false },
      { "text": "DHCP", "correct": true },
      { "text": "ICMP", "correct": false }
    ]
  },
  {
    "question": "In a DHCP message, which field indicates the length of the hardware (MAC) address?",
    "answers": [
      { "text": "OP", "correct": false },
      { "text": "HLEN", "correct": true },
      { "text": "HOPS", "correct": false },
      { "text": "FLAGS", "correct": false }
    ]
  },
  {
    "question": "When a DHCP client does not receive a DHCPACK before the T2 timer expires, what is its next step?",
    "answers": [
      { "text": "Reboot the system", "correct": false },
      { "text": "Send a unicast DHCPREQUEST message", "correct": false },
      { "text": "Broadcast a DHCPREQUEST message", "correct": true },
      { "text": "Continue using the current configuration", "correct": false }
    ]
  },
  {
    "question": "What IP address range is used by Automatic Private IP Addressing (APIPA)?",
    "answers": [
      { "text": "192.168.0.0/16", "correct": false },
      { "text": "10.0.0.0/8", "correct": false },
      { "text": "169.254.0.0/16", "correct": true },
      { "text": "172.16.0.0/12", "correct": false }
    ]
  },
  {
    "question": "What does a DHCP scope define?",
    "answers": [
      { "text": "A set of noncontiguous IP addresses", "correct": false },
      { "text": "A set of contiguous IP addresses with associated configuration parameters", "correct": true },
      { "text": "A list of reserved IP addresses", "correct": false },
      { "text": "A range of MAC addresses", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of a DHCP reservation?",
    "answers": [
      { "text": "To dynamically allocate a random IP address", "correct": false },
      { "text": "To permanently reserve an IP address for a specific MAC address", "correct": true },
      { "text": "To expand the available address pool", "correct": false },
      { "text": "To define vendor-specific options", "correct": false }
    ]
  },
  {
    "question": "Which field in the DHCP message is used to allow vendor-specific configurations and additional options?",
    "answers": [
      { "text": "OP", "correct": false },
      { "text": "FLAGS", "correct": false },
      { "text": "OPTIONS", "correct": true },
      { "text": "HLEN", "correct": false }
    ]
  },
  {
    "question": "After receiving a DHCPACK, what action does a client perform?",
    "answers": [
      { "text": "Starts the lease timers T1 and T2", "correct": true },
      { "text": "Sends a DHCPDISCOVER", "correct": false },
      { "text": "Initiates a DHCPREQUEST immediately", "correct": false },
      { "text": "Broadcasts its MAC address", "correct": false }
    ]
  },
  {
    "question": "Which protocol uses TFTP to provide a boot file name as part of its configuration process?",
    "answers": [
      { "text": "RARP", "correct": false },
      { "text": "BootP", "correct": true },
      { "text": "DHCP", "correct": false },
      { "text": "ICMP", "correct": false }
    ]
  },
  {
    "question": "Which protocol uses broadcast messages to request configuration information from a server?",
    "answers": [
      { "text": "RARP", "correct": false },
      { "text": "DHCP", "correct": true },
      { "text": "ICMP", "correct": false },
      { "text": "SMTP", "correct": false }
    ]
  },
  {
    "question": "The DHCP process is often summarized by which acronym that represents its message sequence?",
    "answers": [
      { "text": "DORA (Discover, Offer, Request, Acknowledge)", "correct": true },
      { "text": "DARQ (Discover, Acknowledge, Request, Query)", "correct": false },
      { "text": "DARP (Discover, Acknowledge, Reserve, Provide)", "correct": false },
      { "text": "DRAP (Discover, Request, Acknowledge, Provide)", "correct": false }
    ]
  },
  {
    "question": "Although DHCP assigns IP addresses, which OSI layer’s addressing does it rely on for delivery?",
    "answers": [
      { "text": "Layer 1", "correct": false },
      { "text": "Layer 2 (MAC addresses)", "correct": true },
      { "text": "Layer 4", "correct": false },
      { "text": "Layer 7", "correct": false }
    ]
  },
  {
    "question": "Which DHCP message indicates an offer from the server to the client?",
    "answers": [
      { "text": "DHCPDISCOVER", "correct": false },
      { "text": "DHCPOFFER", "correct": true },
      { "text": "DHCPREQUEST", "correct": false },
      { "text": "DHCPACK", "correct": false }
    ]
  },
  {
    "question": "What is the function of the 'FLAGS' field in a DHCP message?",
    "answers": [
      { "text": "It sets the message type.", "correct": false },
      { "text": "It indicates if the message is a broadcast (msb only for B).", "correct": true },
      { "text": "It identifies the hardware type.", "correct": false },
      { "text": "It specifies the length of the MAC address.", "correct": false }
    ]
  },
  {
    "question": "In an APIPA configuration, how does a device ensure its randomly selected IP address is not already in use?",
    "answers": [
      { "text": "By sending a DHCPDISCOVER message", "correct": false },
      { "text": "Through a gratuitous ARP broadcast", "correct": true },
      { "text": "By using the T1 timer", "correct": false },
      { "text": "By consulting the DHCP reservation list", "correct": false }
    ]
  }
];