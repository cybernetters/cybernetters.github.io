const questionBank = [
  {
    "question": "Which of the following is a primary purpose of name resolution?",
    "answers": [
      { "text": "Convert IP addresses to domain names", "correct": false },
      { "text": "Convert human-readable names to network addresses", "correct": true },
      { "text": "Map domain names to FQDNs", "correct": false },
      { "text": "Translate NetBIOS names to SMB", "correct": false },
      { "text": "Create a namespace hierarchy", "correct": false }
    ]
  },
  {
    "question": "What type of resolution converts addresses back to names?",
    "answers": [
      { "text": "Forward resolution", "correct": false },
      { "text": "Dynamic resolution", "correct": false },
      { "text": "Reverse resolution", "correct": true },
      { "text": "Hierarchical resolution", "correct": false },
      { "text": "Domain resolution", "correct": false }
    ]
  },
  {
    "question": "What file contains static maps of hostnames to IP addresses?",
    "answers": [
      { "text": "SRV file", "correct": false },
      { "text": "DNS cache", "correct": false },
      { "text": "HOSTS file", "correct": true },
      { "text": "NetBIOS table", "correct": false },
      { "text": "Namespace file", "correct": false }
    ]
  },
  {
    "question": "What is the maximum number of characters allowed for a DNS hostname?",
    "answers": [
      { "text": "127", "correct": false },
      { "text": "255", "correct": true },
      { "text": "63", "correct": false },
      { "text": "200", "correct": false },
      { "text": "512", "correct": false }
    ]
  },
  {
    "question": "What is the term for a computer’s friendly, human-readable name?",
    "answers": [
      { "text": "NetBIOS name", "correct": false },
      { "text": "Namespace", "correct": false },
      { "text": "Hostname", "correct": true },
      { "text": "DNS record", "correct": false },
      { "text": "FQDN", "correct": false }
    ]
  },
  {
    "question": "What component resolves Fully Qualified Domain Names (FQDNs) to IP addresses?",
    "answers": [
      { "text": "Namespace server", "correct": false },
      { "text": "DNS server", "correct": true },
      { "text": "NetBIOS resolver", "correct": false },
      { "text": "DHCP server", "correct": false },
      { "text": "Name controller", "correct": false }
    ]
  },
  {
    "question": "Which protocol does Active Directory primarily rely on for name resolution?",
    "answers": [
      { "text": "NetBIOS", "correct": false },
      { "text": "SMB", "correct": false },
      { "text": "DNS", "correct": true },
      { "text": "IPX/SPX", "correct": false },
      { "text": "HTTP", "correct": false }
    ]
  },
  {
    "question": "Which record is required for workstations to locate domain controllers in Active Directory?",
    "answers": [
      { "text": "SRV", "correct": true },
      { "text": "SOA", "correct": false },
      { "text": "PTR", "correct": false },
      { "text": "A", "correct": false },
      { "text": "CNAME", "correct": false }
    ]
  },
  {
    "question": "Which DNS tool can be used to display Resolver cache contents?",
    "answers": [
      { "text": "nslookup", "correct": false },
      { "text": "ipconfig /displaydns", "correct": true },
      { "text": "whois", "correct": false },
      { "text": "ipconfig /flushdns", "correct": false },
      { "text": "dig", "correct": false }
    ]
  },
  {
    "question": "What command clears local DNS cache in Windows?",
    "answers": [
      { "text": "ipconfig /showdns", "correct": false },
      { "text": "ipconfig /resetdns", "correct": false },
      { "text": "ipconfig /flushdns", "correct": true },
      { "text": "ipconfig /renewdns", "correct": false },
      { "text": "ipconfig /cleardns", "correct": false }
    ]
  }
  {
    "question": "What is the primary function of a Namespace?",
    "answers": [
      { "text": "Control DNS zone security", "correct": false },
      { "text": "Translate NetBIOS names", "correct": false },
      { "text": "Group a set of hosts under a logical name", "correct": true },
      { "text": "Register dynamic DNS entries", "correct": false },
      { "text": "Determine a host’s IP address", "correct": false }
    ]
  },
  {
    "question": "What kind of DNS entry maps a domain name to an IP address?",
    "answers": [
      { "text": "PTR", "correct": false },
      { "text": "SRV", "correct": false },
      { "text": "A", "correct": true },
      { "text": "SOA", "correct": false },
      { "text": "CNAME", "correct": false }
    ]
  },
  {
    "question": "What is the DNS process called where a server queries another server on behalf of a client?",
    "answers": [
      { "text": "Dynamic resolution", "correct": false },
      { "text": "Iterative query", "correct": false },
      { "text": "Recursive query", "correct": true },
      { "text": "Reverse lookup", "correct": false },
      { "text": "Proxy resolution", "correct": false }
    ]
  },
  {
    "question": "What key security feature does DNSSEC add to DNS?",
    "answers": [
      { "text": "IP encryption", "correct": false },
      { "text": "Name spoofing prevention", "correct": false },
      { "text": "Record validation with encryption keys", "correct": true },
      { "text": "Cache flushing", "correct": false },
      { "text": "Zone transfer logging", "correct": false }
    ]
  },
  {
    "question": "What DNS record provides information about the primary DNS server for a zone?",
    "answers": [
      { "text": "SOA", "correct": true },
      { "text": "SRV", "correct": false },
      { "text": "A", "correct": false },
      { "text": "PTR", "correct": false },
      { "text": "MX", "correct": false }
    ]
  },
  {
    "question": "What does the 16th character of a NetBIOS name indicate?",
    "answers": [
      { "text": "Service type", "correct": true },
      { "text": "IP address", "correct": false },
      { "text": "Hostname", "correct": false },
      { "text": "Namespace", "correct": false },
      { "text": "Subdomain", "correct": false }
    ]
  },
  {
    "question": "What protocol is commonly used to dynamically assign IP addresses to hosts?",
    "answers": [
      { "text": "BOOTP", "correct": false },
      { "text": "DHCP", "correct": true },
      { "text": "DNS", "correct": false },
      { "text": "NBT", "correct": false },
      { "text": "NetBIOS", "correct": false }
    ]
  },
  {
    "question": "What tool shows the owner of a domain name?",
    "answers": [
      { "text": "ARIN", "correct": false },
      { "text": "nslookup", "correct": false },
      { "text": "whois", "correct": true },
      { "text": "ipconfig", "correct": false },
      { "text": "DNSSEC", "correct": false }
    ]
  },
  {
    "question": "What is an essential component of Dynamic DNS in Active Directory?",
    "answers": [
      { "text": "SRV records", "correct": true },
      { "text": "NetBIOS mapping", "correct": false },
      { "text": "Recursive queries", "correct": false },
      { "text": "Forwarders", "correct": false },
      { "text": "Reverse caching", "correct": false }
    ]
  },
  {
    "question": "What is the hierarchical structure of the DNS namespace?",
    "answers": [
      { "text": "Hostname.TopLevelDomain.Subdomain", "correct": false },
      { "text": "Subdomain.Hostname.TopLevelDomain", "correct": false },
      { "text": "TopLevelDomain.Subdomain.Hostname", "correct": false },
      { "text": "Hostname.Subdomain(s).TopLevelDomain", "correct": true },
      { "text": "Subdomain(s).TopLevelDomain.Hostname", "correct": false }
    ]
  }
];
