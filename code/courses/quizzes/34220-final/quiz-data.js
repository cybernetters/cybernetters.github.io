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
  }

];