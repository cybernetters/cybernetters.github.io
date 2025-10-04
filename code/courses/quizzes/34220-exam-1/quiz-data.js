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
  }
];