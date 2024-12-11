const questionBank = [
  // True/False Questions
  {
    question: "Authentication is the process of determining what resources a user is permitted to access.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Biometric authentication can serve as both a form of identification and proof of identification.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "In Windows, permissions should ideally be assigned to individual users rather than groups.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Multi-factor authentication always uses at least three factors, such as password, token, and biometrics.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Kerberos requires a minimum of three servers to function properly: an Authentication Server, a Ticket Granting Server, and an Application Server.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "RADIUS combines authentication and authorization but only encrypts passwords.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "The more complex password rules are, the less likely users are to write them down.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "The Key Distribution Center (KDC) in Kerberos stores all secret keys for users and services in its database.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Access Control Lists (ACLs) in Windows are used to assign permissions at the object level.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "TACACS+ is a Cisco-proprietary protocol that integrates authentication, authorization, and accounting into a single process.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  
  // Multiple-Choice Questions
  {
    question: "Which of the following is a primary function of authentication?",
    answers: [
      { text: "A. Determine user permissions for a resource", correct: false },
      { text: "B. Verify the credentials presented by a user", correct: true },
      { text: "C. Track resource usage by authenticated users", correct: false },
      { text: "D. Encrypt sensitive data during transmission", correct: false },
      { text: "E. Restrict access to network devices", correct: false }
    ]
  },
  {
    question: "Which of the following are considered 'what you have' factors in authentication?",
    answers: [
      { text: "A. Digital certificates", correct: false },
      { text: "B. Passwords", correct: false },
      { text: "C. Physical token devices", correct: false },
      { text: "D. Biometrics", correct: false },
      { text: "E. A and C", correct: true }
    ]
  },
  {
    question: "Which protocol is responsible for handling authentication only?",
    answers: [
      { text: "A. Kerberos", correct: true },
      { text: "B. RADIUS", correct: false },
      { text: "C. TACACS+", correct: false },
      { text: "D. LDAP", correct: false },
      { text: "E. OpenID Connect", correct: false }
    ]
  },
  {
    question: "What is the primary purpose of the Key Distribution Center (KDC) in Kerberos?",
    answers: [
      { text: "A. Encrypt all communication in a domain environment", correct: false },
      { text: "B. Store and manage all secret keys for users and services", correct: true },
      { text: "C. Create a unique user ID for all users in the system", correct: false },
      { text: "D. Verify resource permissions for authenticated users", correct: false },
      { text: "E. Assign network configurations to connected devices", correct: false }
    ]
  },
  {
    question: "Which of the following is a disadvantage of overly strict password rules?",
    answers: [
      { text: "A. Users may reuse passwords across accounts", correct: false },
      { text: "B. Users are more likely to write down their passwords", correct: true },
      { text: "C. Passwords become easier to guess", correct: false },
      { text: "D. The system may reject valid credentials", correct: false },
      { text: "E. None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following correctly pairs a protocol with its characteristic?",
    answers: [
      { text: "A. RADIUS - Cisco proprietary and uses TCP", correct: false },
      { text: "B. TACACS+ - Combines authentication and authorization", correct: false },
      { text: "C. Kerberos - Authentication only, relies on symmetric key cryptography", correct: true },
      { text: "D. LDAP - Encrypts both username and password during transmission", correct: false },
      { text: "E. All of the above", correct: false }
    ]
  },
  {
    question: "What are Access Control Lists (ACLs) used for in Windows?",
    answers: [
      { text: "A. Assign rights at the system level", correct: false },
      { text: "B. Track resource usage by authenticated users", correct: false },
      { text: "C. Attach permissions to specific resources", correct: true },
      { text: "D. Encrypt data during transmission", correct: false },
      { text: "E. Assign domain-level user IDs", correct: false }
    ]
  },
  {
    question: "Which of the following is a valid method for achieving two-factor authentication?",
    answers: [
      { text: "A. Password and digital certificate", correct: false },
      { text: "B. Biometrics and password", correct: false },
      { text: "C. PIN and physical token", correct: false },
      { text: "D. All of the above", correct: true },
      { text: "E. None of the above", correct: false }
    ]
  },
  {
    question: "What is one of the key differences between TACACS+ and RADIUS?",
    answers: [
      { text: "A. TACACS+ uses TCP, while RADIUS uses UDP", correct: true },
      { text: "B. RADIUS supports accounting, but TACACS+ does not", correct: false },
      { text: "C. TACACS+ encrypts only passwords, while RADIUS encrypts the entire payload", correct: false },
      { text: "D. TACACS+ is an open standard, while RADIUS is proprietary", correct: false },
      { text: "E. Both protocols provide encryption for all transmitted data", correct: false }
    ]
  },
  {
    question: "Which of the following is true about Kerberos encryption methods?",
    answers: [
      { text: "A. Kerberos only supports public key cryptography", correct: false },
      { text: "B. Symmetric key cryptography is optional in Kerberos", correct: false },
      { text: "C. All keys in Kerberos are encrypted with a master key", correct: false },
      { text: "D. The KDC does not store any secret keys", correct: false },
      { text: "E. Symmetric key cryptography is the primary encryption method used", correct: true }
    ]
  },
  {
    "question": "What is a primary function of authentication in the AAA framework?",
    "answers": [
      { "text": "Determine what resources a user can access", "correct": false },
      { "text": "Track resource usage by a user", "correct": false },
      { "text": "Verify a user’s credentials", "correct": true },
      { "text": "Encrypt sensitive data", "correct": false },
      { "text": "Provide network connectivity", "correct": false }
    ]
  },
  {
    "question": "Which method is used in multi-factor authentication?",
    "answers": [
      { "text": "Biometrics only", "correct": false },
      { "text": "Password and username", "correct": false },
      { "text": "A combination of two or more types of proof (e.g., password and token)", "correct": true },
      { "text": "One-time token only", "correct": false },
      { "text": "Digital certificate only", "correct": false }
    ]
  },
  {
    "question": "What is an example of a physiological biometric?",
    "answers": [
      { "text": "Speech recognition", "correct": false },
      { "text": "Signature verification", "correct": false },
      { "text": "Fingerprint scanning", "correct": true },
      { "text": "Keystroke dynamics", "correct": false },
      { "text": "Digital certificates", "correct": false }
    ]
  },
  {
    "question": "What type of encryption does Kerberos primarily rely on?",
    "answers": [
      { "text": "Public-key cryptography", "correct": false },
      { "text": "Symmetric-key cryptography", "correct": true },
      { "text": "Hashing algorithms only", "correct": false },
      { "text": "One-time pads", "correct": false },
      { "text": "Elliptic curve cryptography", "correct": false }
    ]
  },
  {
    "question": "What does the Access Control List (ACL) specify?",
    "answers": [
      { "text": "The encryption protocol used for file sharing", "correct": false },
      { "text": "The resources available in a Kerberos realm", "correct": false },
      { "text": "Authorized users and their access levels", "correct": true },
      { "text": "User authentication methods", "correct": false },
      { "text": "Security group policies", "correct": false }
    ]
  },
  {
    "question": "Which protocol combines Authentication and Authorization but only encrypts passwords?",
    "answers": [
      { "text": "TACACS", "correct": false },
      { "text": "Kerberos", "correct": false },
      { "text": "RADIUS", "correct": true },
      { "text": "SAML", "correct": false },
      { "text": "LDAP", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of the Key Distribution Center (KDC) in Kerberos?",
    "answers": [
      { "text": "To store encryption keys locally on the client", "correct": false },
      { "text": "To manage certificates in a public key infrastructure", "correct": false },
      { "text": "To distribute and manage secret keys securely", "correct": true },
      { "text": "To provide password recovery services", "correct": false },
      { "text": "To encrypt user data directly", "correct": false }
    ]
  },
  {
    "question": "What is a disadvantage of overly strict password policies?",
    "answers": [
      { "text": "They are easy to guess", "correct": false },
      { "text": "Users might write passwords down", "correct": true },
      { "text": "They increase system performance issues", "correct": false },
      { "text": "They simplify user authentication", "correct": false },
      { "text": "They prevent use of biometric authentication", "correct": false }
    ]
  },
  {
    "question": "What is a recommended frequency for forced password changes in enterprise environments?",
    "answers": [
      { "text": "Weekly", "correct": false },
      { "text": "Monthly", "correct": false },
      { "text": "Every 90 days", "correct": true },
      { "text": "Every 2 years", "correct": false },
      { "text": "Every 7 days", "correct": false }
    ]
  },
  {
    "question": "Which Kerberos server grants access to application servers?",
    "answers": [
      { "text": "Authentication Server (AS)", "correct": false },
      { "text": "Domain Controller", "correct": false },
      { "text": "Ticket Granting Server (TGS)", "correct": true },
      { "text": "RADIUS Server", "correct": false },
      { "text": "Authorization Server", "correct": false }
    ]
  },
  {
    "question": "What type of digital asset ensures secure transmissions in authentication?",
    "answers": [
      { "text": "Public keys", "correct": false },
      { "text": "Digital certificates", "correct": true },
      { "text": "Physical tokens", "correct": false },
      { "text": "One-time PINs", "correct": false },
      { "text": "Plain text passwords", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a behavioral biometric?",
    "answers": [
      { "text": "Retina scan", "correct": false },
      { "text": "Fingerprint recognition", "correct": false },
      { "text": "Keystroke dynamics", "correct": true },
      { "text": "Face recognition", "correct": false },
      { "text": "Digital signature", "correct": false }
    ]
  },
  {
    "question": "What encryption is added to the KDC database in Kerberos for enhanced security?",
    "answers": [
      { "text": "Password salting", "correct": false },
      { "text": "Master key encryption", "correct": true },
      { "text": "Multi-key exchange", "correct": false },
      { "text": "Certificate authority verification", "correct": false },
      { "text": "Secure Sockets Layer (SSL)", "correct": false }
    ]
  },
  {
    "question": "Which principle does group-based rights assignment follow in Windows authorization?",
    "answers": [
      { "text": "Assign individual rights for granularity", "correct": false },
      { "text": "Use Access Control Lists for all users", "correct": false },
      { "text": "Simplify permissions for smaller enterprises", "correct": false },
      { "text": "Assign rights and permissions to groups", "correct": true },
      { "text": "Avoid hierarchical permission structures", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of periodic password expiration?",
    "answers": [
      { "text": "Increase ease of user access", "correct": false },
      { "text": "Reduce brute force attacks", "correct": true },
      { "text": "Lower administrative overhead", "correct": false },
      { "text": "Enable biometric fallback authentication", "correct": false },
      { "text": "Restrict specific resource usage", "correct": false }
    ]
  },
  {
    "question": "What authentication factor is an example of 'What you have'?",
    "answers": [
      { "text": "Password", "correct": false },
      { "text": "Security token", "correct": true },
      { "text": "Fingerprint scan", "correct": false },
      { "text": "Location-based check", "correct": false },
      { "text": "Keystroke dynamics", "correct": false }
    ]
  },
  {
    "question": "What standard provides guidelines for authentication lifecycle management?",
    "answers": [
      { "text": "SP 800-63A", "correct": false },
      { "text": "SP 800-63B", "correct": true },
      { "text": "SP 800-63C", "correct": false },
      { "text": "ISO 27001", "correct": false },
      { "text": "PCI DSS", "correct": false }
    ]
  },
  {
    "question": "What is the main limitation of TACACS compared to RADIUS?",
    "answers": [
      { "text": "Limited protocol support", "correct": false },
      { "text": "Encrypts only the password", "correct": false },
      { "text": "Does not separate AAA processes", "correct": false },
      { "text": "Proprietary to Cisco", "correct": true },
      { "text": "Uses TCP instead of UDP", "correct": false }
    ]
  },
  {
    "question": "What does a one-time token primarily prevent?",
    "answers": [
      { "text": "Replay attacks", "correct": true },
      { "text": "Brute force attacks", "correct": false },
      { "text": "Phishing attacks", "correct": false },
      { "text": "Password reuse", "correct": false },
      { "text": "Key exchange errors", "correct": false }
    ]
  },
  {
    "question": "Which factor is not typically part of a strong password according to NIST guidelines?",
    "answers": [
      { "text": "Uppercase letters", "correct": false },
      { "text": "Special characters", "correct": false },
      { "text": "Full English words", "correct": true },
      { "text": "Digits", "correct": false },
      { "text": "Lowercase letters", "correct": false }
    ]
  },
  {
    "question": "Authentication verifies a user's identity.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Authorization determines the actions a user is allowed to perform.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Biometrics include both physiological and behavioral traits.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Kerberos uses public-key cryptography exclusively.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "RADIUS is a proprietary protocol.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Periodic password changes help mitigate brute force attacks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Passwords written down are a secure backup method.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Multi-factor authentication can use biometric and token-based factors.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "An Access Control List contains encrypted passwords.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Key Distribution Center stores secret keys in Kerberos.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Behavioral biometrics include voice and signature recognition.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Complex password rules always increase security.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "ACLs are attached to resources in Windows.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Digital certificates guarantee user anonymity.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "TACACS encrypts the entire payload.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In Kerberos, the KDC encrypts its database with a master key.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Two-factor authentication always requires biometrics.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A digital certificate acts as proof of identification.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SP 800-63B provides guidelines on identity proofing.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Kerberos realms encompass the entire domain.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A company is implementing multi-factor authentication. Which combination would meet this requirement?",
    "answers": [
      { "text": "Password and username", "correct": false },
      { "text": "Fingerprint and retina scan", "correct": false },
      { "text": "Password and hardware token", "correct": true },
      { "text": "One-time PIN and digital certificate", "correct": false },
      { "text": "Username and email verification", "correct": false }
    ]
  },
  {
    "question": "What should an admin use to prevent users from accessing shared files they are not authorized to view?",
    "answers": [
      { "text": "Group Policy", "correct": false },
      { "text": "Access Control List", "correct": true },
      { "text": "User ID Strategies", "correct": false },
      { "text": "Domain Logon Authentication", "correct": false },
      { "text": "Digital Certificates", "correct": false }
    ]
  },
  {
    "question": "A user complains their password is rejected after creating it. The password is 'Admin123'. What is the issue?",
    "answers": [
      { "text": "Password too short", "correct": false },
      { "text": "Complexity requirements not met", "correct": false },
      { "text": "Contains account name", "correct": true },
      { "text": "Lacks special characters", "correct": false },
      { "text": "Uses disallowed symbols", "correct": false }
    ]
  },
  {
    "question": "Which protocol should an organization implement to securely log user activity and authenticate through an open standard?",
    "answers": [
      { "text": "TACACS", "correct": false },
      { "text": "RADIUS", "correct": true },
      { "text": "Kerberos", "correct": false },
      { "text": "LDAP", "correct": false },
      { "text": "SAML", "correct": false }
    ]
  },
  {
    "question": "What is the first server contacted when a user requests a resource in Kerberos?",
    "answers": [
      { "text": "Ticket Granting Server", "correct": false },
      { "text": "Authentication Server", "correct": true },
      { "text": "Service Server", "correct": false },
      { "text": "Key Distribution Center", "correct": false },
      { "text": "Domain Controller", "correct": false }
    ]
  },
  {
    "question": "If an organization requires encrypted authentication but no tracking of resource usage, which protocol is best suited?",
    "answers": [
      { "text": "RADIUS", "correct": false },
      { "text": "Kerberos", "correct": true },
      { "text": "TACACS", "correct": false },
      { "text": "OAuth", "correct": false },
      { "text": "LDAP", "correct": false }
    ]
  },
  {
    "question": "An organization’s password policy requires inclusion of at least three criteria. Which of the following meets this policy?",
    "answers": [
      { "text": "Secure123", "correct": false },
      { "text": "Password@123", "correct": true },
      { "text": "Simplepwd!", "correct": false },
      { "text": "ComplexPassword", "correct": false },
      { "text": "AdminUser!1", "correct": false }
    ]
  },
  {
    "question": "What feature of Kerberos ensures that user passwords are not directly transmitted?",
    "answers": [
      { "text": "Use of secret keys", "correct": false },
      { "text": "Symmetric encryption", "correct": false },
      { "text": "Ticket Granting Tickets", "correct": true },
      { "text": "Encrypted KDC database", "correct": false },
      { "text": "One-time tokens", "correct": false }
    ]
  },
  {
    "question": "How can an administrator manage user access rights efficiently in a growing organization?",
    "answers": [
      { "text": "Assign permissions to individual users", "correct": false },
      { "text": "Use hierarchical file structures", "correct": false },
      { "text": "Assign permissions to groups", "correct": true },
      { "text": "Use plain text access control files", "correct": false },
      { "text": "Avoid group policies", "correct": false }
    ]
  },
  {
    "question": "What authentication factor is most appropriate for securing a high-security server room?",
    "answers": [
      { "text": "Password", "correct": false },
      { "text": "Physical token", "correct": false },
      { "text": "Biometric scan", "correct": true },
      { "text": "Location-based check", "correct": false },
      { "text": "Security questions", "correct": false }
    ]
  }
];

