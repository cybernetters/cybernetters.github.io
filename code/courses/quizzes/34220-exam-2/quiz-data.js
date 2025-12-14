const questionBank = [
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
    "question": "When implementing a reverse proxy server, the destination web server doesn't know the address of the requesting client.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A transparent proxy server must spoof the source address of packets sent from the web server to the actual requesting client.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When providing web services, it is best to configure www.domain.name as a CNAME record rather than an A record.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When implementing a reverse proxy server, the destination web server doesn't know the address of the requesting client.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The single point of failure created by an application delivery controller makes their use limited, as there is no way to mitigate this risk.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In full proxy load balancing, the load balancer becomes the server from the client perspective.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When load balancing web applications, each TCP connection can be sent to a different server with impunity.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When load balancing DNS servers, each request can be sent to a different server with impunity.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Application delivery controllers always provide some level of load balancing functionality.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Public key encryption is used for the majority of the data transmitted in HTTPS.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When using X.509, a certificate is trusted based on the trust hierarchy of its issuing certificate authority.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In a standard DNSSEC implementation, the root name servers are automatically trusted.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "DNSSEC Chains of Trust must begin at the root name servers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A TLS connection is opened before the initial BIND operation when using LDAPS.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
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
    "question": "Provides verification for DNS answers",
    "answers": [
      { "text": "DS", "correct": false },
      { "text": "DNSKEY", "correct": false },
      { "text": "RRSIG", "correct": true },
      { "text": "NSEC", "correct": false },
      { "text": "CDS", "correct": false }
    ]
  },
  {
    "question": "Used to prove a requested record doesn't exist",
    "answers": [
      { "text": "DS", "correct": false },
      { "text": "DNSKEY", "correct": false },
      { "text": "RRSIG", "correct": false },
      { "text": "NSEC", "correct": true },
      { "text": "CDS", "correct": false }
    ]
  },
  {
    "question": "Used for child-parent signaling",
    "answers": [
      { "text": "DS", "correct": false },
      { "text": "DNSKEY", "correct": false },
      { "text": "RRSIG", "correct": false },
      { "text": "NSEC", "correct": false },
      { "text": "CDS", "correct": true }
    ]
  },
  {
    "question": "Used to store public keys",
    "answers": [
      { "text": "DS", "correct": false },
      { "text": "DNSKEY", "correct": true },
      { "text": "RRSIG", "correct": false },
      { "text": "NSEC", "correct": false },
      { "text": "CDS", "correct": false }
    ]
  },
  {
    "question": "Information about a child zone published by the parent zone",
    "answers": [
      { "text": "DS", "correct": true },
      { "text": "DNSKEY", "correct": false },
      { "text": "RRSIG", "correct": false },
      { "text": "NSEC", "correct": false },
      { "text": "CDS", "correct": false }
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
    "question": "Which of the following is NOT a responsibility of an X.509 certificate authority?",
    "answers": [
      { "text": "Provide a public repository for all issued certificates", "correct": false },
      { "text": "Maintain a list of issued certificates", "correct": false },
      { "text": "Issue digital certificates", "correct": false },
      { "text": "Maintain a list of revoked certificates", "correct": false },
      { "text": "Verify the identity of any entity requesting a certificate", "correct": true }
    ]
  },
  {
      "question": "Which of the following is the best practice for having two separate non-HTTPS web sites running on the same physical machine?",
      "answers": [
        { "text": "Bind multiple IP addresses to the machine and assign sites to IP addresses", "correct": false },
        { "text": "Run the sites on different ports", "correct": false },
        { "text": "Use virtual machines to build completely separate O/S and web server installations", "correct": false },
        { "text": "Use the DNS name used in the HTTP get request to assign sites to URLs", "correct": true },
        { "text": "It cannot be done as described", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not a characteristic of HTTPS?",
      "answers": [
        { "text": "Authenticates the server", "correct": false },
        { "text": "Authenticates the client", "correct": true },
        { "text": "Can functionally replace HTTP", "correct": false },
        { "text": "Encrypts data during transmission", "correct": false },
        { "text": "Requires digital certificates", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not a reason to implement a reverse proxy server?",
      "answers": [
        { "text": "Increase security for the web server", "correct": false },
        { "text": "Save on internal bandwidth", "correct": true },
        { "text": "Enable HTTPS security for a non-HTTPS enabled web server", "correct": false },
        { "text": "Increase the capacity of a dynamic web application", "correct": false },
        { "text": "All of the above are reasons to implement a reverse proxy server", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not a reason to implement a web proxy server?",
      "answers": [
        { "text": "Filter content", "correct": false },
        { "text": "Filter SPAM", "correct": true },
        { "text": "Authenticate and authorize web access", "correct": false },
        { "text": "Save bandwidth", "correct": false },
        { "text": "All of the above are reasons to implement a web proxy server", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not a method of resolving the proxy server client configuration problem?",
      "answers": [
        { "text": "Proxy Auto Configuration (PAC) script", "correct": false },
        { "text": "Web Proxy Auto-Discovery Protocol", "correct": false },
        { "text": "DHCP Service Location Protocol Record", "correct": false },
        { "text": "Transparent proxy", "correct": false },
        { "text": "All of the above can resolve the proxy server client configuration problem", "correct": true }
      ]
    },
    {
      "question": "Which of the following does not require special configuration to properly implement transparent web proxying?",
      "answers": [
        { "text": "The proxy server", "correct": false },
        { "text": "The firewall between the client and proxy server", "correct": false },
        { "text": "The gateway router", "correct": false },
        { "text": "The clients", "correct": true },
        { "text": "All of the above must be properly configured", "correct": false }
      ]
    },
    {
      "question": "Which of the following best describes Application Delivery Controller (ADC) Architectures?",
      "answers": [
        { "text": "The ADC can be in-line with the application server(s)", "correct": false },
        { "text": "The ADC can be located in the same DMZ as the application server(s)", "correct": false },
        { "text": "The ADC must process all traffic in and out of the application server(s)", "correct": false },
        { "text": "The ADC must reside in a higher level DMZ than the application server(s)", "correct": false },
        { "text": "None of the above", "correct": true }
      ]
    },
    {
      "question": "Which load balancing technique does not take into account server capability?",
      "answers": [
        { "text": "Fastest", "correct": false },
        { "text": "Least connections", "correct": true },
        { "text": "Observed", "correct": false },
        { "text": "Predictive", "correct": false },
        { "text": "All of the above take into account server capability", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not a characteristic of basic load balancing?",
      "answers": [
        { "text": "Connections are made from clients directly to servers", "correct": false },
        { "text": "It is in effect a 1:many NAT", "correct": false },
        { "text": "The load balancer selects a target to service the request", "correct": false },
        { "text": "There are two separate data flows: one from the client to the balancer and one from the balancer to the server", "correct": true },
        { "text": "All of the above are characteristics of basic load balancing", "correct": false }
      ]
    },
    {
      "question": "Which of the following are capabilities of application delivery controllers?",
      "answers": [
        { "text": "Load balancing", "correct": false },
        { "text": "Fail-Over", "correct": false },
        { "text": "SSL Acceleration", "correct": false },
        { "text": "Monitoring", "correct": false },
        { "text": "All of the above are capabilities of application delivery controllers", "correct": true }
      ]
    },
    {
      "question": "Which persistence method only works with HTTP and HTTPS?",
      "answers": [
        { "text": "Individual source address persistence", "correct": false },
        { "text": "Aggregated source address persistence", "correct": false },
        { "text": "Cookie based persistence", "correct": true },
        { "text": "A & B", "correct": false },
        { "text": "Any of the above", "correct": false }
      ]
    },
    {
      "question": "Which persistence method is preferred for applications that concurrently open many inter-related connections?",
      "answers": [
        { "text": "Individual source address persistence", "correct": false },
        { "text": "Aggregated source address persistence", "correct": false },
        { "text": "Cookie based persistence", "correct": false },
        { "text": "A & B", "correct": true },
        { "text": "Any of the above", "correct": false }
      ]
    },
    {
      "question": "An application delivery controller must be _______________ of the application server.",
      "answers": [
        { "text": "logically in front", "correct": true },
        { "text": "physically in front", "correct": false },
        { "text": "logically behind", "correct": false },
        { "text": "physically behind", "correct": false },
        { "text": "alongside", "correct": false }
      ]
    },
    {
      "question": "A full proxy application delivery controller has how many separate data flows for each transaction?",
      "answers": [
        { "text": "One", "correct": false },
        { "text": "Two", "correct": true },
        { "text": "Three", "correct": false },
        { "text": "Four or more", "correct": false },
        { "text": "Variable numbers", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not an advantage to using SSL acceleration?",
      "answers": [
        { "text": "Can add SSL to non-SSL enabled applications", "correct": false },
        { "text": "Increases application reliability", "correct": true },
        { "text": "Performance can be increased using hardware based encryption", "correct": false },
        { "text": "Reduces processor load on application servers", "correct": false },
        { "text": "Reduces the number of certificates required", "correct": false }
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
    },
    {
      "question": "Which of the following is required infrastructure to deploy S/MIME?",
      "answers": [
        { "text": "PKI", "correct": true },
        { "text": "Web server", "correct": false },
        { "text": "Active Directory", "correct": false },
        { "text": "Kerberos", "correct": false },
        { "text": "All of the above are required", "correct": false }
      ]
    },
    {
      "question": "What is required to send an S/MIME-secured email?",
      "answers": [
        { "text": "The receiving mail server’s certificate", "correct": false },
        { "text": "The receiving email user’s certificate", "correct": false },
        { "text": "The sending mail server’s certificate", "correct": false },
        { "text": "The sending email user’s certificate", "correct": true },
        { "text": "All of the above are required", "correct": false }
      ]
    },
    {
      "question": "Which of the following is the defined CN in an S/MIME certificate?",
      "answers": [
        { "text": "The mail server’s hostname", "correct": false },
        { "text": "The user’s directory name", "correct": false },
        { "text": "The user’s email address", "correct": true },
        { "text": "The mail server’s IP address", "correct": false },
        { "text": "None of the above", "correct": false }
      ]
    },
    {
      "question": "Which of the following is NOT seen as a potential downside to implementing S/MIME?",
      "answers": [
        { "text": "Difficulty integrating with webmail", "correct": false },
        { "text": "Facilitating spam", "correct": false },
        { "text": "End-to-end encryption", "correct": false },
        { "text": "Backwards compatibility", "correct": true },
        { "text": "None of the above", "correct": false }
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
  }

];