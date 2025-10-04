const questionBank = [
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
    "question": "In a Virtual Machine environment, you should synchronize each VM to its NTP synched host.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The purpose of Marzullo's algorithm is to take into account the transmission duration of the time information in NTP.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
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
    "question": "The currently used version of SMTP natively only supports 7-ASCII communication.",
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
    "question": "Used to send mail.",
    "answers": [
      { "text": "SMTP", "correct": true },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 & IMAP", "correct": false }
    ]
  },
  {
    "question": "Connections are initiated by clients.",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 & IMAP", "correct": true }
    ]
  },
  {
    "question": "Used to access mail on a mail server.",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": true },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 & IMAP", "correct": false }
    ]
  },
  {
    "question": "Used to retrieve mail from a mail server.",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": true },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 & IMAP", "correct": false }
    ]
  },
  {
    "question": "Sends passwords in clear text.",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": true },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 & IMAP", "correct": false }
    ]
  },
  {
    "question": "Required on all modern mail servers.",
    "answers": [
      { "text": "SMTP", "correct": true },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": false },
      { "text": "MAPI", "correct": false },
      { "text": "POP3 & IMAP", "correct": false }
    ]
  },
  {
    "question": "Analyzes the content of incoming messages.",
    "answers": [
      { "text": "Filtering", "correct": true },
      { "text": "Blacklisting", "correct": false },
      { "text": "Session Verification", "correct": false },
      { "text": "Message Verification", "correct": false },
      { "text": "Filtering & Blacklisting", "correct": false }
    ]
  },
  {
    "question": "Can be implemented as a stand-alone solution on a receiving mail server without the active participation of the sending mail server.",
    "answers": [
      { "text": "Filtering", "correct": false },
      { "text": "Blacklisting", "correct": true },
      { "text": "Session Verification", "correct": false },
      { "text": "Message Verification", "correct": false },
      { "text": "Filtering & Blacklisting", "correct": false }
    ]
  },
  {
    "question": "Common implementations are Sender ID and Sender Policy Framework.",
    "answers": [
      { "text": "Filtering", "correct": false },
      { "text": "Blacklisting", "correct": false },
      { "text": "Session Verification", "correct": false },
      { "text": "Message Verification", "correct": true },
      { "text": "Filtering & Blacklisting", "correct": false }
    ]
  },
  {
    "question": "Most effective at reducing bandwidth and disk space used by SPAM.",
    "answers": [
      { "text": "Filtering", "correct": false },
      { "text": "Blacklisting", "correct": false },
      { "text": "Session Verification", "correct": true },
      { "text": "Message Verification", "correct": false },
      { "text": "Filtering & Blacklisting", "correct": false }
    ]
  },
  {
    "question": "Electronic postage is an example of this technique.",
    "answers": [
      { "text": "Filtering", "correct": false },
      { "text": "Blacklisting", "correct": false },
      { "text": "Session Verification", "correct": false },
      { "text": "Message Verification", "correct": false },
      { "text": "Filtering & Blacklisting", "correct": true }
    ]
  },
  {
    "question": "Match the application layer protocol to its associated transport layer protocol and port number: DNS",
    "answers": [
      { "text": "TCP 110", "correct": false },
      { "text": "TCP 143", "correct": false },
      { "text": "UDP 53", "correct": true },
      { "text": "TCP 25", "correct": false },
      { "text": "UDP 123", "correct": false }
    ]
  },
  {
    "question": "Match the application layer protocol to its associated transport layer protocol and port number: POP3",
    "answers": [
      { "text": "TCP 110", "correct": true },
      { "text": "TCP 143", "correct": false },
      { "text": "UDP 53", "correct": false },
      { "text": "TCP 25", "correct": false },
      { "text": "UDP 123", "correct": false }
    ]
  },
  {
    "question": "Match the application layer protocol to its associated transport layer protocol and port number: SMTP",
    "answers": [
      { "text": "TCP 110", "correct": false },
      { "text": "TCP 143", "correct": false },
      { "text": "UDP 53", "correct": false },
      { "text": "TCP 25", "correct": true },
      { "text": "UDP 123", "correct": false }
    ]
  },
  {
    "question": "Match the application layer protocol to its associated transport layer protocol and port number: IMAP",
    "answers": [
      { "text": "TCP 110", "correct": false },
      { "text": "TCP 143", "correct": true },
      { "text": "UDP 53", "correct": false },
      { "text": "TCP 25", "correct": false },
      { "text": "UDP 123", "correct": false }
    ]
  },
  {
    "question": "Match the application layer protocol to its associated transport layer protocol and port number: NTP",
    "answers": [
      { "text": "TCP 25", "correct": false },
      { "text": "TCP 443", "correct": false },
      { "text": "UDP 123", "correct": true },
      { "text": "TCP 80", "correct": false },
      { "text": "UDP 53", "correct": false }
    ]
  },
  {
    "question": "Match the application layer protocol to its associated transport layer protocol and port number: HTTP",
    "answers": [
      { "text": "TCP 25", "correct": false },
      { "text": "TCP 443", "correct": false },
      { "text": "UDP 123", "correct": false },
      { "text": "TCP 80", "correct": true },
      { "text": "UDP 53", "correct": false }
    ]
  },
  {
    "question": "Match the application layer protocol to its associated transport layer protocol and port number: HTTPS",
    "answers": [
      { "text": "TCP 25", "correct": false },
      { "text": "TCP 443", "correct": true },
      { "text": "UDP 123", "correct": false },
      { "text": "TCP 80", "correct": false },
      { "text": "UDP 53", "correct": false }
    ]
  },
  {
    "question": "What DNS record has been co-opted into a SPAM control mechanism?",
    "answers": [
      { "text": "A", "correct": false },
      { "text": "CNAME", "correct": false },
      { "text": "PTR", "correct": false },
      { "text": "SOA", "correct": false },
      { "text": "TXT", "correct": true }
    ]
  },
  {
    "question": "Which of the following protocols can be used to retrieve/access mail to/from hosts that are NOT constantly available on the network?",
    "answers": [
      { "text": "SMTP", "correct": false },
      { "text": "POP3", "correct": false },
      { "text": "IMAP", "correct": false },
      { "text": "B&C", "correct": true },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "What format does UNIX use for its system clock?",
    "answers": [
      { "text": "GMT", "correct": false },
      { "text": "Local Time", "correct": false },
      { "text": "UTC", "correct": true },
      { "text": "Zulu", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a characteristic of NTP?",
    "answers": [
      { "text": "Adjusts duration between reference checks", "correct": false },
      { "text": "Currently uses a 32-bit timestamp", "correct": false },
      { "text": "Sets client time once as a single transaction", "correct": true },
      { "text": "Time servers are available via a public pool project", "correct": false },
      { "text": "Uses a hierarchy of time servers", "correct": false }
    ]
  },
  {
    "question": "What is the minimum stratum level you should have for an enterprise time server?",
    "answers": [
      { "text": "Stratum 0", "correct": false },
      { "text": "Stratum 1", "correct": false },
      { "text": "Stratum 2", "correct": true },
      { "text": "Stratum 3", "correct": false },
      { "text": "Stratum 4", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a viable option for dealing with SPAM as a system/network administrator?",
    "answers": [
      { "text": "Bayesian Filters", "correct": false },
      { "text": "Firewalls", "correct": true },
      { "text": "White lists", "correct": false },
      { "text": "Black lists", "correct": false },
      { "text": "Grey lists", "correct": false }
    ]
  },
  {
    "question": "Without sender authentication what options are available for controlling SPAM?",
    "answers": [
      { "text": "Blacklisting", "correct": false },
      { "text": "Whitelisting", "correct": false },
      { "text": "Bayesian filtering", "correct": false },
      { "text": "All of the above", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an authentication protocol used to identify the origination of an e-mail message?",
    "answers": [
      { "text": "Sender Policy Framework", "correct": false },
      { "text": "Sender ID", "correct": false },
      { "text": "Bayesian ID", "correct": false },
      { "text": "A & B", "correct": true },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is the best practice for having two separate non-HTTPS web sites running on the same physical machine?",
    "answers": [
      { "text": "Bind multiple IP addresses to the machine and assign sites to IP addresses", "correct": false },
      { "text": "Run the sites on different ports", "correct": false },
      { "text": "Use the DNS name used in the HTTP get request to assign sites to URLs", "correct": true },
      { "text": "Use virtual machines to build completely separate O/S and web server installations", "correct": false },
      { "text": "It cannot be done as described", "correct": false }
    ]
  }
];