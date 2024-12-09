const questionBank = [
  {
    "question": "Which of the following is a phase of the Penetration Testing Execution Standard (PTES)?",
    "answers": [
      { "text": "Weaponization", "correct": false },
      { "text": "Exploitation", "correct": true },
      { "text": "Installation", "correct": false },
      { "text": "Command and Control", "correct": false },
      { "text": "Exfiltration", "correct": false }
    ]
  },
  {
    "question": "In the ZEH methodology, what follows the scanning phase?",
    "answers": [
      { "text": "Exploitation", "correct": true },
      { "text": "Reconnaissance", "correct": false },
      { "text": "Post-Exploitation", "correct": false },
      { "text": "Maintaining Access", "correct": false },
      { "text": "Threat Modeling", "correct": false }
    ]
  },
  {
    "question": "What does the reconnaissance phase aim to identify?",
    "answers": [
      { "text": "Vulnerabilities in services and software", "correct": false },
      { "text": "Administrative credentials", "correct": false },
      { "text": "IP addresses, domains, and subdomains", "correct": true },
      { "text": "Exploitation methods", "correct": false },
      { "text": "Physical access points", "correct": false }
    ]
  },
  {
    "question": "What is the primary focus of the MITRE ATT&CK framework?",
    "answers": [
      { "text": "Providing defensive security configurations", "correct": false },
      { "text": "Cataloging adversary tactics, techniques, and procedures", "correct": true },
      { "text": "Offering an ethical hacking certification", "correct": false },
      { "text": "Performing social engineering assessments", "correct": false },
      { "text": "Developing malware analysis tools", "correct": false }
    ]
  },
  {
    "question": "Which tool is used for collecting metadata from documents to identify potential security risks?",
    "answers": [
      { "text": "Shodan", "correct": false },
      { "text": "Sublist3r", "correct": false },
      { "text": "FOCA", "correct": true },
      { "text": "Dig", "correct": false },
      { "text": "Nmap", "correct": false }
    ]
  },
  {
    "question": "The Cyber Kill Chain was developed by which organization?",
    "answers": [
      { "text": "OWASP", "correct": false },
      { "text": "Lockheed Martin", "correct": true },
      { "text": "MITRE", "correct": false },
      { "text": "NIST", "correct": false },
      { "text": "EC-Council", "correct": false }
    ]
  },
  {
    "question": "What type of reconnaissance includes directly interacting with the target?",
    "answers": [
      { "text": "Passive reconnaissance", "correct": false },
      { "text": "Active reconnaissance", "correct": true },
      { "text": "Open-source reconnaissance", "correct": false },
      { "text": "Covert reconnaissance", "correct": false },
      { "text": "Social engineering reconnaissance", "correct": false }
    ]
  },
  {
    "question": "During which phase of the Cyber Kill Chain do attackers deliver malware to the target?",
    "answers": [
      { "text": "Reconnaissance", "correct": false },
      { "text": "Exploitation", "correct": false },
      { "text": "Delivery", "correct": true },
      { "text": "Installation", "correct": false },
      { "text": "Command and Control", "correct": false }
    ]
  },
  {
    "question": "Which reconnaissance tool focuses on enumerating subdomains?",
    "answers": [
      { "text": "theHarvester", "correct": false },
      { "text": "Metasploit", "correct": false },
      { "text": "Sublist3r", "correct": true },
      { "text": "Nessus", "correct": false },
      { "text": "Wireshark", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of vulnerability scanning during penetration testing?",
    "answers": [
      { "text": "To exploit a target system", "correct": false },
      { "text": "To identify weaknesses in software and services", "correct": true },
      { "text": "To bypass perimeter defenses", "correct": false },
      { "text": "To deliver payloads to the system", "correct": false },
      { "text": "To modify system logs", "correct": false }
    ]
  },
  {
    "question": "What does the 'post-exploitation' phase primarily involve?",
    "answers": [
      { "text": "Creating persistent backdoors", "correct": true },
      { "text": "Gathering initial information", "correct": false },
      { "text": "Exploiting vulnerabilities", "correct": false },
      { "text": "Modifying logs", "correct": false },
      { "text": "Performing vulnerability scans", "correct": false }
    ]
  },
  {
    "question": "Which Google Dork operator restricts search results to a specific site?",
    "answers": [
      { "text": "inurl:", "correct": false },
      { "text": "intitle:", "correct": false },
      { "text": "site:", "correct": true },
      { "text": "allintext:", "correct": false },
      { "text": "filetype:", "correct": false }
    ]
  },
  {
    "question": "Which tool uses open-source intelligence to collect data on domains and emails?",
    "answers": [
      { "text": "MetaGooFil", "correct": false },
      { "text": "theHarvester", "correct": true },
      { "text": "FOCA", "correct": false },
      { "text": "Shodan", "correct": false },
      { "text": "Dig", "correct": false }
    ]
  },
  {
    "question": "What is the final step in the Cyber Kill Chain?",
    "answers": [
      { "text": "Weaponization", "correct": false },
      { "text": "Actions on Objectives", "correct": true },
      { "text": "Command and Control", "correct": false },
      { "text": "Exploitation", "correct": false },
      { "text": "Exfiltration", "correct": false }
    ]
  },
  {
    "question": "Which tool provides information about DNS records through techniques like zone transfers?",
    "answers": [
      { "text": "Nmap", "correct": false },
      { "text": "DNSRecon", "correct": true },
      { "text": "Shodan", "correct": false },
      { "text": "Wireshark", "correct": false },
      { "text": "FOCA", "correct": false }
    ]
  },
  {
    "question": "What is the aim of the final penetration testing report?",
    "answers": [
      { "text": "To execute post-exploitation steps", "correct": false },
      { "text": "To mitigate discovered vulnerabilities", "correct": false },
      { "text": "To provide an overview of findings and solutions", "correct": true },
      { "text": "To focus solely on exploitation techniques", "correct": false },
      { "text": "To document reconnaissance methods only", "correct": false }
    ]
  },
  {
    "question": "Which reconnaissance method involves obtaining data without interacting directly with the target?",
    "answers": [
      { "text": "Active reconnaissance", "correct": false },
      { "text": "Passive reconnaissance", "correct": true },
      { "text": "Dynamic reconnaissance", "correct": false },
      { "text": "Covert reconnaissance", "correct": false },
      { "text": "Exploitative reconnaissance", "correct": false }
    ]
  },
  {
    "question": "What does the 'inurl:' directive in Google Dorking search for?",
    "answers": [
      { "text": "Keywords in the title of a page", "correct": false },
      { "text": "File types", "correct": false },
      { "text": "Strings in the URL of a page", "correct": true },
      { "text": "Cached versions of a page", "correct": false },
      { "text": "Specific locations in search results", "correct": false }
    ]
  },
  {
    "question": "Which tool uses search engine data to gather detailed information about organizations?",
    "answers": [
      { "text": "Sublist3r", "correct": false },
      { "text": "MetaGooFil", "correct": false },
      { "text": "DNSRecon", "correct": false },
      { "text": "Shodan", "correct": false },
      { "text": "Recon-ng", "correct": true }
    ]
  },
  {
    "question": "What does the exploitation phase in penetration testing aim to achieve?",
    "answers": [
      { "text": "Full administrative access to the target system", "correct": true },
      { "text": "Persistent access through backdoors", "correct": false },
      { "text": "Enumeration of services and vulnerabilities", "correct": false },
      { "text": "Evading detection by security tools", "correct": false },
      { "text": "Conducting post-exploitation tasks", "correct": false }
    ]
  },
  {
    "question": "The reconnaissance phase is the first step in both penetration testing and cyber attacks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Passive reconnaissance does not interact directly with the target system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Cyber Kill Chain is a concept attributed to MITRE.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Exploitation always provides long-term access to the target system.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Vulnerability scanning is the process of identifying weaknesses in a system's software and services.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The 'site:' directive in Google Dorking restricts searches to a specific domain.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The MITRE ATT&CK framework is primarily used for defensive strategies in cybersecurity.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "FOCA is a tool that automates document metadata extraction.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Active reconnaissance methods may reveal your IP address to the target system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The 'weaponization' phase in the Cyber Kill Chain involves creating tools to exploit vulnerabilities.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Sublist3r is used to identify open ports on a target system.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Recon-ng is a reconnaissance tool that leverages open-source intelligence.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "During the exploitation phase, attackers deliver malware to the target.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Google Dorking can help find public files like PDFs or spreadsheets on a target’s website.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DNSRecon can perform reverse lookups of IP addresses.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The final report of a penetration test should include mitigations for identified vulnerabilities.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Shodan can search for industrial control systems exposed on the internet.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Lateral movement in penetration testing refers to pivoting from one target to another within a network.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "ExifTool is used to identify open services running on network hosts.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The final step in many cyber attacks is erasing or encrypting logs to hide trails.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A penetration tester needs to identify all subdomains of a target domain using passive reconnaissance. Which tool would be the most suitable?",
    "answers": [
      { "text": "A. Sublist3r", "correct": true },
      { "text": "B. Shodan", "correct": false },
      { "text": "C. FOCA", "correct": false },
      { "text": "D. DNSRecon", "correct": false },
      { "text": "E. Dig", "correct": false }
    ]
  },
  {
    "question": "During a penetration test, an attacker gains access to a temporary session on a server. What should they do next to ensure persistent access?",
    "answers": [
      { "text": "A. Perform vulnerability scanning", "correct": false },
      { "text": "B. Modify system logs", "correct": false },
      { "text": "C. Exploit another system", "correct": false },
      { "text": "D. Create a backdoor", "correct": true },
      { "text": "E. Escalate privileges", "correct": false }
    ]
  },
  {
    "question": "Which phase should a penetration tester prioritize if their objective is to gather the maximum amount of target information without detection?",
    "answers": [
      { "text": "A. Active reconnaissance", "correct": false },
      { "text": "B. Scanning", "correct": false },
      { "text": "C. Passive reconnaissance", "correct": true },
      { "text": "D. Exploitation", "correct": false },
      { "text": "E. Post-exploitation", "correct": false }
    ]
  },
  {
    "question": "If a penetration tester wants to find cached pages of a target’s website, which tool should they use?",
    "answers": [
      { "text": "A. Wayback Machine", "correct": true },
      { "text": "B. Shodan", "correct": false },
      { "text": "C. Nmap", "correct": false },
      { "text": "D. FOCA", "correct": false },
      { "text": "E. Metasploit", "correct": false }
    ]
  },
  {
    "question": "Which directive in Google Dorking would allow you to search for files by their extension, such as “.pdf”?",
    "answers": [
      { "text": "A. site:", "correct": false },
      { "text": "B. inurl:", "correct": false },
      { "text": "C. filetype:", "correct": true },
      { "text": "D. intitle:", "correct": false },
      { "text": "E. cache:", "correct": false }
    ]
  },
  {
    "question": "An organization wants to secure its DNS server. What technique could a penetration tester use to verify whether the server allows unauthorized zone transfers?",
    "answers": [
      { "text": "A. Recon-ng", "correct": false },
      { "text": "B. Zone Transfer Check on hackertarget.com", "correct": true },
      { "text": "C. Shodan Search", "correct": false },
      { "text": "D. DNSdumpster", "correct": false },
      { "text": "E. Dig with -x option", "correct": false }
    ]
  },
  {
    "question": "Which reconnaissance tool should a penetration tester use to extract email addresses and related information from a domain?",
    "answers": [
      { "text": "A. DNSRecon", "correct": false },
      { "text": "B. theHarvester", "correct": true },
      { "text": "C. Sublist3r", "correct": false },
      { "text": "D. Shodan", "correct": false },
      { "text": "E. Dig", "correct": false }
    ]
  },
  {
    "question": "After identifying vulnerabilities on a target system, the tester wants to exploit these remotely. What is required before proceeding?",
    "answers": [
      { "text": "A. A list of identified open ports and associated services", "correct": true },
      { "text": "B. Detailed knowledge of the target organization’s policies", "correct": false },
      { "text": "C. Physical access to the target system", "correct": false },
      { "text": "D. Complete credentials of the administrative user", "correct": false },
      { "text": "E. A successful phishing attempt", "correct": false }
    ]
  },
  {
    "question": "While analyzing a DNS server, a tester wants to retrieve all general DNS records, including A, MX, and TXT records. Which tool would be best suited?",
    "answers": [
      { "text": "A. Sublist3r", "correct": false },
      { "text": "B. DNSRecon", "correct": true },
      { "text": "C. FOCA", "correct": false },
      { "text": "D. Shodan", "correct": false },
      { "text": "E. Recon-ng", "correct": false }
    ]
  },
  {
    "question": "A tester uses the directive intitle:index of in Google Dorking. What is the likely goal of this search?",
    "answers": [
      { "text": "A. Identifying cached pages", "correct": false },
      { "text": "B. Finding login portals", "correct": false },
      { "text": "C. Listing directory contents exposed on web servers", "correct": true },
      { "text": "D. Searching for file types", "correct": false },
      { "text": "E. Locating vulnerabilities in metadata", "correct": false }
    ]
  }
];
