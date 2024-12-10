const questionBank = [
  {
    "question": "Which of the following describes social engineering?",
    "answers": [
      { "text": "The manipulation of software vulnerabilities.", "correct": false },
      { "text": "Hardening systems against cyber-attacks.", "correct": false },
      { "text": "Manipulating human behavior to bypass security controls.", "correct": true },
      { "text": "Creating firewalls for network protection.", "correct": false },
      { "text": "Designing malware for exploitation.", "correct": false }
    ]
  },
  {
    "question": "What percentage of cyber-attacks in 2020 involved social engineering, as reported by Proofpoint?",
    "answers": [
      { "text": "85%", "correct": false },
      { "text": "90%", "correct": false },
      { "text": "95%", "correct": false },
      { "text": "98%", "correct": true },
      { "text": "100%", "correct": false }
    ]
  },
  {
    "question": "The Social-Engineering Toolkit (SET) is designed to:",
    "answers": [
      { "text": "Harden software vulnerabilities.", "correct": false },
      { "text": "Protect against phishing attacks.", "correct": false },
      { "text": "Automate complex social engineering techniques.", "correct": true },
      { "text": "Detect malicious software.", "correct": false },
      { "text": "Install firewalls.", "correct": false }
    ]
  },
  {
    "question": "What is required for an effective social engineering attack?",
    "answers": [
      { "text": "Complex programming skills.", "correct": false },
      { "text": "Deployment of malware.", "correct": false },
      { "text": "Thorough homework on the target.", "correct": true },
      { "text": "Physical access to the system.", "correct": false },
      { "text": "A pre-existing network compromise.", "correct": false }
    ]
  },
  {
    "question": "Spear phishing attacks are characterized by:",
    "answers": [
      { "text": "Broad, general messages.", "correct": false },
      { "text": "Infecting multiple networks simultaneously.", "correct": false },
      { "text": "Targeting specific individuals or groups.", "correct": true },
      { "text": "Installing software without user interaction.", "correct": false },
      { "text": "Exploiting hardware vulnerabilities.", "correct": false }
    ]
  },
  {
    "question": "To install the Social-Engineering Toolkit, the correct command is:",
    "answers": [
      { "text": "sudo install SET", "correct": false },
      { "text": "sudo start SET", "correct": false },
      { "text": "install toolkit", "correct": false },
      { "text": "sudo apt install set", "correct": true },
      { "text": "run setoolkit", "correct": false }
    ]
  },
  {
    "question": "What does the Credential Harvester attack method involve?",
    "answers": [
      { "text": "Encrypting files on a victim's machine.", "correct": false },
      { "text": "Exploiting outdated software.", "correct": false },
      { "text": "Cloning websites to collect credentials.", "correct": true },
      { "text": "Infecting systems with ransomware.", "correct": false },
      { "text": "Phishing using QR codes.", "correct": false }
    ]
  },
  {
    "question": "When using the Credential Harvester, why is a valid SSL certificate recommended?",
    "answers": [
      { "text": "To bypass firewalls.", "correct": false },
      { "text": "To make the attack appear more legitimate.", "correct": true },
      { "text": "To prevent credential leaks.", "correct": false },
      { "text": "To disable antivirus software.", "correct": false },
      { "text": "To mask the attacker's IP address.", "correct": false }
    ]
  },
  {
    "question": "Which attack vector can create customized QR codes for phishing?",
    "answers": [
      { "text": "SET Repository", "correct": false },
      { "text": "Spear Phishing", "correct": false },
      { "text": "QR Code Generator", "correct": true },
      { "text": "Credential Harvester", "correct": false },
      { "text": "PowerShell Attack", "correct": false }
    ]
  },
  {
    "question": "The PowerShell attack vector in SET is primarily used for:",
    "answers": [
      { "text": "Infecting mobile devices.", "correct": false },
      { "text": "Executing code on compromised systems.", "correct": true },
      { "text": "Spoofing emails.", "correct": false },
      { "text": "Phishing attacks.", "correct": false },
      { "text": "Creating fake websites.", "correct": false }
    ]
  },
  {
    "question": "Social engineering is a technical approach to bypassing security controls.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "98% of cyber-attacks in 2020 involved social engineering.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Social-Engineering Toolkit requires significant programming skills to use.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Spear phishing is a method of sending generic phishing emails to multiple recipients.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Credential Harvester attacks are ineffective without valid SSL certificates.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "QR code attacks redirect targets to malicious websites upon scanning.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "PowerShell attacks in SET can bypass execution restriction policies.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Users are less likely to trust websites with HTTPS in the URL.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SET is considered the 'de facto' tool for social engineering.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Social engineering attacks often rely on the credibility of the attacker.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "It is difficult to make SET attacks appear believable.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Registering a domain similar to the target’s is recommended for Credential Harvester attacks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Wifiphisher is an alternative to the Social-Engineering Toolkit.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The success of social engineering attacks depends solely on technical expertise.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Phishing and spear phishing are identical methods.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Users are trained to trust websites with HTTP in the URL.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SET makes it simple to execute social engineering attacks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The QR Code Generator in SET cannot be customized.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Exploiting human vulnerabilities is central to social engineering.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Social engineering attacks are less effective against hardened systems.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "While conducting a penetration test, you want to simulate a phishing attack targeting a specific employee. Which tool and method would be most effective?",
    "answers": [
      { "text": "Exploit Pack with email redirection.", "correct": false },
      { "text": "Credential Harvester with a generic domain.", "correct": false },
      { "text": "SET Spear Phishing Attack with a customized domain.", "correct": true },
      { "text": "QR Code Generator redirecting to Google.", "correct": false },
      { "text": "PowerShell attack for email collection.", "correct": false }
    ]
  },
  {
    "question": "A colleague argues that HTTPS alone is sufficient to make a phishing attack believable. What should you advise?",
    "answers": [
      { "text": "HTTPS guarantees trustworthiness.", "correct": false },
      { "text": "A similar domain and HTTPS together increase credibility.", "correct": true },
      { "text": "HTTPS is irrelevant for phishing attacks.", "correct": false },
      { "text": "Only HTTP is used in phishing.", "correct": false },
      { "text": "HTTPS prevents phishing.", "correct": false }
    ]
  },
  {
    "question": "You need to collect credentials from an internal portal without raising suspicion. What is the best course of action?",
    "answers": [
      { "text": "Exploit outdated software on the portal.", "correct": false },
      { "text": "Use a PowerShell attack to disable security.", "correct": false },
      { "text": "Clone the portal using Credential Harvester.", "correct": true },
      { "text": "Generate QR codes leading to an external site.", "correct": false },
      { "text": "Deploy a phishing email targeting IT staff.", "correct": false }
    ]
  },
  {
    "question": "During a security test, you aim to compromise a system via code execution after gaining initial access. Which SET feature is most appropriate?",
    "answers": [
      { "text": "QR Code Generator", "correct": false },
      { "text": "Credential Harvester", "correct": false },
      { "text": "PowerShell Attack Vector", "correct": true },
      { "text": "Spear Phishing", "correct": false },
      { "text": "SET Repository", "correct": false }
    ]
  },
  {
    "question": "Your client requests a demonstration of how easy it is to trick employees into entering credentials on a fake website. What is the recommended approach?",
    "answers": [
      { "text": "Use SET to send phishing emails with malicious links.", "correct": false },
      { "text": "Use Exploit Pack to generate fake credentials.", "correct": false },
      { "text": "Clone their login page using Credential Harvester.", "correct": true },
      { "text": "Use Wifiphisher to gather credentials from their WiFi.", "correct": false },
      { "text": "Install malware via USB drives.", "correct": false }
    ]
  },
  {
    "question": "An organization wants to evaluate the risks of their employees scanning unknown QR codes. How should you demonstrate this?",
    "answers": [
      { "text": "Send phishing emails with links to malicious websites.", "correct": false },
      { "text": "Clone their internal portal and distribute links.", "correct": false },
      { "text": "Use Credential Harvester to steal credentials.", "correct": false },
      { "text": "Create a customized QR code using SET and redirect to a fake login page.", "correct": true },
      { "text": "Use PowerShell to simulate an attack.", "correct": false }
    ]
  },
  {
    "question": "To test if employees fall for email-based phishing attacks, you decide to target the HR department. Which feature of SET should you use?",
    "answers": [
      { "text": "PowerShell Attack Vector", "correct": false },
      { "text": "QR Code Generator", "correct": false },
      { "text": "Spear Phishing Attack", "correct": true },
      { "text": "Credential Harvester", "correct": false },
      { "text": "Web Templates Attack", "correct": false }
    ]
  },
  {
    "question": "After a phishing simulation, you want to analyze user behavior when accessing fake links. What should you monitor?",
    "answers": [
      { "text": "Execution of scripts on their systems.", "correct": false },
      { "text": "Credential input on cloned websites.", "correct": true },
      { "text": "Malware download logs.", "correct": false },
      { "text": "QR code scan rates.", "correct": false },
      { "text": "SSL certificate installation.", "correct": false }
    ]
  },
  {
    "question": "A penetration test requires you to install SET on a Linux-based system. What is the correct procedure?",
    "answers": [
      { "text": "Clone the SET repository and run it directly.", "correct": false },
      { "text": "Install a third-party package manager.", "correct": false },
      { "text": "Run the command sudo apt install set.", "correct": true },
      { "text": "Configure system firewall settings first.", "correct": false },
      { "text": "Create a virtual environment for SET.", "correct": false }
    ]
  },
  {
    "question": "You’re asked to demonstrate alternatives to SET for social engineering. Which tool would you showcase for WiFi phishing attacks?",
    "answers": [
      { "text": "Exploit Pack", "correct": false },
      { "text": "PTF", "correct": false },
      { "text": "Credential Harvester", "correct": false },
      { "text": "Wifiphisher", "correct": true },
      { "text": "PowerShell Attack Vector", "correct": false }
    ]
  }
];
