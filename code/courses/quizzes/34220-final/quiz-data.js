const questionBank = [
  {
    "question": "Which DNS record provides verification for DNS answers?",
    "answers": [
      { "text": "DS", "correct": false },
      { "text": "DNSKEY", "correct": false },
      { "text": "RRSIG", "correct": true },
      { "text": "NSEC", "correct": false },
      { "text": "CDS", "correct": false }
    ]
  },
  {
    "question": "Which DNS record is used to prove that a requested record does not exist?",
    "answers": [
      { "text": "DS", "correct": false },
      { "text": "DNSKEY", "correct": false },
      { "text": "RRSIG", "correct": false },
      { "text": "NSEC", "correct": true },
      { "text": "CDS", "correct": false }
    ]
  },
  {
    "question": "Which DNS record is used for child-parent signaling in DNSSEC?",
    "answers": [
      { "text": "DS", "correct": false },
      { "text": "DNSKEY", "correct": false },
      { "text": "RRSIG", "correct": false },
      { "text": "NSEC", "correct": false },
      { "text": "CDS", "correct": true }
    ]
  },
  {
    "question": "Which DNS record is used to store public keys for DNSSEC?",
    "answers": [
      { "text": "DS", "correct": false },
      { "text": "DNSKEY", "correct": true },
      { "text": "RRSIG", "correct": false },
      { "text": "NSEC", "correct": false },
      { "text": "CDS", "correct": false }
    ]
  },
  {
    "question": "Which DNS record contains information about a child zone published by the parent zone?",
    "answers": [
      { "text": "DS", "correct": true },
      { "text": "DNSKEY", "correct": false },
      { "text": "RRSIG", "correct": false },
      { "text": "NSEC", "correct": false },
      { "text": "CDS", "correct": false }
    ]
  },
  {
    "question": "A transparent proxy server must spoof the source address of packets sent from the requesting client to the actual web server.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When providing web services, it is best to configure www.domain.name as an A record rather than a CNAME record.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When implementing a reverse proxy server, the destination web server does not know the address of the requesting client.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Application delivery is only concerned with load balancing.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "ADCs are used, in part, to enable dynamic load balancing instead of relying on static load balancing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "One of the key concerns in a PKI is managing certificate revocation.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Public key encryption is used for a small percentage of the overall data transmitted in HTTPS.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Accessing a website using HTTPS requires the client machine to have a digital certificate.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A privately issued X.509 certificate offers less secure encryption than a commercial certificate.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When using PGP, a certificate is trusted based on the trust hierarchy of its issuing certificate authority.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In a standard DNSSEC implementation, the root name servers are automatically trusted.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DNSSEC Chains of Trust must begin at the root name servers.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "NSEC3 DNS records function similarly to NSEC records but are obscured with one-way hashes.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "S/MIME only provides benefits in an enterprise setting.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Sender ID (SID) and Sender Policy Framework (SPF) are two unrelated forms of session verification for SMTP.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The DNS tag for Sender ID is v=spf2.0.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DKIM signs the SMTP envelope to provide message verification.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "RADIUS is capable of authentication, authorization, and accounting.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A TLS connection is opened after the initial BIND operation when using LDAPS.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Kerberos only offers authentication functionality.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Which transport layer protocol and port number are associated with DNS?",
    "answers": [
      { "text": "TCP 25", "correct": false },
      { "text": "UDP 53", "correct": true },
      { "text": "TCP 80", "correct": false },
      { "text": "TCP 389", "correct": false },
      { "text": "TCP 443", "correct": false }
    ]
  },
  {
    "question": "Which transport layer protocol and port number are associated with HTTP?",
    "answers": [
      { "text": "TCP 25", "correct": false },
      { "text": "UDP 53", "correct": false },
      { "text": "TCP 80", "correct": true },
      { "text": "TCP 389", "correct": false },
      { "text": "TCP 443", "correct": false }
    ]
  },
  {
    "question": "Which transport layer protocol and port number are associated with HTTPS?",
    "answers": [
      { "text": "TCP 25", "correct": false },
      { "text": "UDP 53", "correct": false },
      { "text": "TCP 80", "correct": false },
      { "text": "TCP 389", "correct": false },
      { "text": "TCP 443", "correct": true }
    ]
  },
  {
    "question": "Which transport layer protocol and port number are associated with LDAP?",
    "answers": [
      { "text": "TCP 25", "correct": false },
      { "text": "UDP 53", "correct": false },
      { "text": "TCP 80", "correct": false },
      { "text": "TCP 389", "correct": true },
      { "text": "TCP 443", "correct": false }
    ]
  },
  {
    "question": "What DNS record has been co-opted into a spam control mechanism?",
    "answers": [
      { "text": "A", "correct": false },
      { "text": "CNAME", "correct": false },
      { "text": "PTR", "correct": false },
      { "text": "SOA", "correct": false },
      { "text": "TXT", "correct": true }
    ]
  },
  {
    "question": "The purpose of a certificate authority is to:",
    "answers": [
      { "text": "Reduce the amount of computational power used for asymmetric key encryption", "correct": false },
      { "text": "Reduce the dependence on third parties such as Verisign and Thawte", "correct": false },
      { "text": "Issue and verify the authenticity of public keys", "correct": true },
      { "text": "Verify the authenticity of private keys to the key owner", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a responsibility of an X.509 certificate authority?",
    "answers": [
      { "text": "Provide a public repository for all issued certificates", "correct": true },
      { "text": "Maintain a list of issued certificates", "correct": false },
      { "text": "Issue digital certificates", "correct": false },
      { "text": "Maintain a list of revoked certificates", "correct": false },
      { "text": "Verify the identity of any entity requesting a certificate", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a common use of a PKI?",
    "answers": [
      { "text": "Digital signatures of documents and code", "correct": false },
      { "text": "E-Mail encryption and signing", "correct": false },
      { "text": "HTTPS", "correct": false },
      { "text": "IPsec", "correct": false },
      { "text": "PPTP", "correct": true }
    ]
  },
    {
    "question": "To register a second level domain name, you must provide two authoritative DNS servers that are live 24/7.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Only one DNS server can be authoritative for a given zone.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In DNS, the terms zone and domain are interchangeable.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The DNS name space is large enough in terms of levels and characters per level to meet any practical situation that you may come across.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "1.168.192.IN-ADDR.ARPA is the typical name for the reverse address zone for the 192.168.1.0/24 network.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In general, it’s better to reject unwanted traffic at a firewall than to deny it.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The main purpose of the firewall between the DMZ and the Internet is to limit access from DMZ servers to specific Internet hosts.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A well implemented firewall/DMZ architecture allows for all security concerns to be addressed at the edge of the network.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When using stateful packet inspection (SPI), you do not have to explicitly allow return traffic through the firewall.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The SNTP protocol consistently checks time and uses a drift file to ensure accuracy.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "An NTP stratum 2 or greater host must have at least two time sources to have reliable time information.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In a Virtual Machine environment, you should synchronize each VM to its NTP-synchronized host.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The purpose of Marzullo's algorithm is to take into account the transmission duration of the time information in NTP.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Proper functioning of a Microsoft Active Directory requires clients and servers to agree on the time within five minutes.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "HELO and EHLO produce the same output on an ESMTP-capable mail server.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The currently used version of SMTP only natively supports 7-bit ASCII communication.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Proper DNS functionality is a prerequisite for functional e-mail.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Current anti-spam legislation offers little practical help against spam.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Which e-mail protocol is used to send mail?",
    "answers": [
      { "text": "SMTP", "correct": true },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 and IMAP", "correct": false }
    ]
  },
  {
    "question": "Which e-mail protocols initiate connections from clients?",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 and IMAP", "correct": true }
    ]
  },
  {
    "question": "Which e-mail protocol accesses mail on a mail server?",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": true },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 and IMAP", "correct": false }
    ]
  },
  {
    "question": "Which e-mail protocol retrieves mail from a mail server?",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": true },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 and IMAP", "correct": false }
    ]
  },
  {
    "question": "Which e-mail protocols send passwords in clear text?",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 and IMAP", "correct": true }
    ]
  },
  {
    "question": "Which e-mail protocol is required on all modern mail servers?",
    "answers": [
      { "text": "SMTP", "correct": true },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 and IMAP", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a valid top-level DNS domain?",
    "answers": [
      { "text": "edu", "correct": false },
      { "text": "com", "correct": false },
      { "text": "net", "correct": false },
      { "text": "us", "correct": false },
      { "text": "All of the above are top level DNS domains", "correct": true }
    ]
  },
  {
    "question": "Who is responsible for creating and managing top-level DNS names (such as .com)?",
    "answers": [
      { "text": "ICANN", "correct": true },
      { "text": "IETF", "correct": false },
      { "text": "IAB", "correct": false },
      { "text": "Designated registrar(s)", "correct": false },
      { "text": "The organization that registered the domain name", "correct": false }
    ]
  },
  {
    "question": "Who is responsible for approving second level DNS names (such as purdue.edu)?",
    "answers": [
      { "text": "ICANN", "correct": false },
      { "text": "IETF", "correct": true },
      { "text": "IAB", "correct": false },
      { "text": "Designated registrar(s)", "correct": false },
      { "text": "The organization that registered the domain name", "correct": false }
    ]
  },
  {
    "question": "Who is responsible for approving third level DNS names (such as tech.purdue.edu)?",
    "answers": [
      { "text": "ICANN", "correct": false },
      { "text": "IETF", "correct": false },
      { "text": "IAB", "correct": false },
      { "text": "Designated registrar(s)", "correct": false },
      { "text": "The organization that registered the domain name", "correct": true }
    ]
  },
  {
    "question": "What type of DNS query is made by a client to a local DNS server and requires a final answer?",
    "answers": [
      { "text": "Recursive query", "correct": true },
      { "text": "Iterative query", "correct": false },
      { "text": "Forward query", "correct": false },
      { "text": "Any of the above", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What type of DNS query is made by a DNS server to a root server and only requires a pointer to the authoritative server for the domain being queried?",
    "answers": [
      { "text": "Recursive query", "correct": false },
      { "text": "Iterative query", "correct": true },
      { "text": "Forward query", "correct": false },
      { "text": "Any of the above", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which DNS record type contains the domain administrator’s email address?",
    "answers": [
      { "text": "SOA", "correct": true },
      { "text": "A", "correct": false },
      { "text": "PTR", "correct": false },
      { "text": "MX", "correct": false },
      { "text": "CNAME", "correct": false }
    ]
  },
  {
    "question": "Which DNS record type is used to determine the IP address for a known hostname?",
    "answers": [
      { "text": "SOA", "correct": false },
      { "text": "A", "correct": true },
      { "text": "PTR", "correct": false },
      { "text": "MX", "correct": false },
      { "text": "CNAME", "correct": false }
    ]
  },
  {
    "question": "Which DNS record type is used to list DNS aliases for hosts?",
    "answers": [
      { "text": "SOA", "correct": false },
      { "text": "A", "correct": false },
      { "text": "PTR", "correct": false },
      { "text": "MX", "correct": false },
      { "text": "CNAME", "correct": true }
    ]
  },
  {
    "question": "Which statement about a DMZ is false?",
    "answers": [
      { "text": "A DMZ is located behind the first Internet firewall", "correct": false },
      { "text": "Systems in a DMZ are fully protected from the Internet", "correct": true },
      { "text": "A DMZ is an isolated network segment", "correct": false },
      { "text": "In order to have a DMZ, you must also have packet-filtering capabilities", "correct": false },
      { "text": "All of these statements are true", "correct": false }
    ]
  },
  {
    "question": "Which of the following packet criteria can be used to filter traffic at a firewall?",
    "answers": [
      { "text": "Source network address", "correct": false },
      { "text": "Destination network address", "correct": false },
      { "text": "Destination port number", "correct": false },
      { "text": "A & B", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": "Which of the following characteristics is not unique to a dynamic firewall and is common to both dynamic and static firewalls?",
    "answers": [
      { "text": "Examines the source and destination address and port number", "correct": true },
      { "text": "Examines TCP sequence numbers", "correct": false },
      { "text": "Takes the context of a packet into consideration", "correct": false },
      { "text": "Keeps ports closed until a request to open the port is received", "correct": false },
      { "text": "Ensures UDP packets are part of a known data flow", "correct": false }
    ]
  },
  {
    "question": "What should be placed in a DMZ?",
    "answers": [
      { "text": "Any service that accepts incoming connections from unauthenticated public hosts", "correct": true },
      { "text": "Any service that accepts incoming connections from authenticated public hosts", "correct": false },
      { "text": "Any service that accepts incoming connections from private hosts", "correct": false },
      { "text": "Any service that accepts incoming connections from any host", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an invalid IP address match criterion for a firewall rule?",
    "answers": [
      { "text": "172.45.50.0 mask 255.255.255.0", "correct": false },
      { "text": "172.45.50.256/32", "correct": true },
      { "text": "172.45.50.0/28", "correct": false },
      { "text": "0.0.0.0/0", "correct": false },
      { "text": "172.45.50.56 mask 255.255.255.255", "correct": false }
    ]
  },
  {
    "question": "When setting up rules on a firewall, what is typically the last rule?",
    "answers": [
      { "text": "Accept all", "correct": false },
      { "text": "Accept all non-private traffic", "correct": false },
      { "text": "Deny all", "correct": true },
      { "text": "Deny all non-private traffic", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a viable option for dealing with spam as a system or network administrator?",
    "answers": [
      { "text": "Bayesian filters", "correct": false },
      { "text": "Firewalls", "correct": true },
      { "text": "Whitelists", "correct": false },
      { "text": "Blacklists", "correct": false },
      { "text": "Greylists", "correct": false }
    ]
  },
  {
    "question": "Without sender authentication, what options are available for controlling spam?",
    "answers": [
      { "text": "Blacklisting", "correct": false },
      { "text": "Whitelisting", "correct": false },
      { "text": "Bayesian filtering", "correct": false },
      { "text": "All of the above", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What type of DNS record is typically used to identify a recipient host in an email address?",
    "answers": [
      { "text": "A", "correct": false },
      { "text": "CNAME", "correct": false },
      { "text": "MX", "correct": true },
      { "text": "PTR", "correct": false },
      { "text": ".", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a typical email delivery error?",
    "answers": [
      { "text": "Host unreachable", "correct": false },
      { "text": "User unknown", "correct": false },
      { "text": "User mailbox full", "correct": false },
      { "text": "Incoming mail queue full", "correct": false },
      { "text": "All of the above are SMTP delivery errors", "correct": true }
    ]
  },
  {
    "question": "A message is sent to ten users on four hosts in three domains from a workstation using SMTP. How many copies of the message are sent from the origin server?",
    "answers": [
      { "text": "One", "correct": false },
      { "text": "Three", "correct": true },
      { "text": "Four", "correct": false },
      { "text": "Ten", "correct": false },
      { "text": "Not enough information is given to determine the number of messages sent", "correct": false }
    ]
  },
  {
    "question": "What is the root cause of the spam problem?",
    "answers": [
      { "text": "SMTP is unauthenticated", "correct": true },
      { "text": "SMTP is unencrypted", "correct": false },
      { "text": "SMTP requires encoding", "correct": false },
      { "text": "SMTP provides no digital signatures", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT functionality added to SMTP by MIME?",
    "answers": [
      { "text": "Non-Latin characters", "correct": false },
      { "text": "Attachments", "correct": false },
      { "text": "Multiple email parts", "correct": false },
      { "text": "Different styles", "correct": false },
      { "text": "All of the above are added by MIME", "correct": true }
    ]
  }
  
  ];