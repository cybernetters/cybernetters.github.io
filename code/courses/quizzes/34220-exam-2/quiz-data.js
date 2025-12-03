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
    }

];