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
  }
];
