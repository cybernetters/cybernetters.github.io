const questionBank = [
  {
    "question": "What is the X Windows System (often called X or X11)?",
    "answers": [
      { "text": "A. A UNIX kernel module", "correct": false },
      { "text": "B. The standard graphical engine for Unix and Linux", "correct": true },
      { "text": "C. A network file system", "correct": false },
      { "text": "D. A text editor", "correct": false }
    ]
  },
  {
    "question": "Which protocol does X Windows use to separate application processing from display?",
    "answers": [
      { "text": "A. HTTP", "correct": false },
      { "text": "B. FTP", "correct": false },
      { "text": "C. X Protocol", "correct": true },
      { "text": "D. SMTP", "correct": false }
    ]
  },
  {
    "question": "X Windows is described as network‐transparent. What does that mean?",
    "answers": [
      { "text": "A. It only works on local machines", "correct": false },
      { "text": "B. It allows GUI applications to run remotely with display output sent over the network", "correct": true },
      { "text": "C. It encrypts all network traffic by default", "correct": false },
      { "text": "D. It requires a VPN to function", "correct": false }
    ]
  },
  {
    "question": "What is the de facto implementation of X Windows mentioned in the lecture?",
    "answers": [
      { "text": "A. XFree86, now known as xorg", "correct": true },
      { "text": "B. Wayland", "correct": false },
      { "text": "C. Cygwin/X", "correct": false },
      { "text": "D. Xvfb", "correct": false }
    ]
  },
  {
    "question": "In the X Windows architecture, what is the role of the X-server?",
    "answers": [
      { "text": "A. It executes GUI applications", "correct": false },
      { "text": "B. It translates X Protocol requests and presents output on the display", "correct": true },
      { "text": "C. It stores user configuration files", "correct": false },
      { "text": "D. It manages network connections", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes an X-client?",
    "answers": [
      { "text": "A. The physical display hardware", "correct": false },
      { "text": "B. A GUI application that sends graphical requests", "correct": true },
      { "text": "C. A daemon that manages windows", "correct": false },
      { "text": "D. The login manager", "correct": false }
    ]
  },
  {
    "question": "What is a 'Display' in X Windows terminology?",
    "answers": [
      { "text": "A. A combination of a keyboard and monitor", "correct": true },
      { "text": "B. The X server’s configuration file", "correct": false },
      { "text": "C. The network protocol used by X", "correct": false },
      { "text": "D. The user’s password database", "correct": false }
    ]
  },
  {
    "question": "Which file typically contains system-wide X configuration settings on Unix systems?",
    "answers": [
      { "text": "A. ~/.Xresources", "correct": false },
      { "text": "B. /etc/X11/xdm", "correct": false },
      { "text": "C. /etc/X11/xorg.conf", "correct": true },
      { "text": "D. /usr/local/etc/xinitrc", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of a Display Manager?",
    "answers": [
      { "text": "A. To compile X client applications", "correct": false },
      { "text": "B. To authenticate users, log them in, and start up the X environment", "correct": true },
      { "text": "C. To provide file system access", "correct": false },
      { "text": "D. To encrypt network traffic", "correct": false }
    ]
  },
  {
    "question": "Which three popular display managers are mentioned in the lecture?",
    "answers": [
      { "text": "A. xdm, gdm, and kdm", "correct": true },
      { "text": "B. lightdm, sddm, and lxdm", "correct": false },
      { "text": "C. xinit, xset, and xterm", "correct": false },
      { "text": "D. XFree86, xorg, and Wayland", "correct": false }
    ]
  },
  {
    "question": "What environment variable must be set to specify the destination for X output?",
    "answers": [
      { "text": "A. XAUTHORITY", "correct": false },
      { "text": "B. DISPLAY", "correct": true },
      { "text": "C. XSERVER", "correct": false },
      { "text": "D. XTERM", "correct": false }
    ]
  },
  {
    "question": "When setting the DISPLAY variable, what do the two numbers (e.g., 0.0) represent?",
    "answers": [
      { "text": "A. The screen resolution", "correct": false },
      { "text": "B. The display number and the screen number", "correct": true },
      { "text": "C. The color depth and refresh rate", "correct": false },
      { "text": "D. The user and host IDs", "correct": false }
    ]
  },
  {
    "question": "Which command is used for host-based client authentication in X Windows?",
    "answers": [
      { "text": "A. xauth", "correct": false },
      { "text": "B. xhost", "correct": true },
      { "text": "C. xinit", "correct": false },
      { "text": "D. xterm", "correct": false }
    ]
  },
  {
    "question": "What does the 'magic cookie' method in X Windows use for client authentication?",
    "answers": [
      { "text": "A. Digital certificates", "correct": false },
      { "text": "B. A large random number stored in the ~/.Xauthority file", "correct": true },
      { "text": "C. A username and password prompt", "correct": false },
      { "text": "D. Biometric scanning", "correct": false }
    ]
  },
  {
    "question": "Which tool is used to view and manage the magic cookies for X Windows?",
    "answers": [
      { "text": "A. xhost", "correct": false },
      { "text": "B. xauth", "correct": true },
      { "text": "C. xinit", "correct": false },
      { "text": "D. xterm", "correct": false }
    ]
  },
  {
    "question": "How can X applications be securely forwarded through an SSH tunnel?",
    "answers": [
      { "text": "A. Using the -X option in SSH", "correct": true },
      { "text": "B. By setting DISPLAY to 127.0.0.1", "correct": false },
      { "text": "C. Using xhost +", "correct": false },
      { "text": "D. By editing the xorg.conf file", "correct": false }
    ]
  },
  {
    "question": "Which SSH flag disables X forwarding?",
    "answers": [
      { "text": "A. -X", "correct": false },
      { "text": "B. -x", "correct": true },
      { "text": "C. -v", "correct": false },
      { "text": "D. -C", "correct": false }
    ]
  },
  {
    "question": "What file is typically used for user-level X session customizations such as setting default window properties?",
    "answers": [
      { "text": "A. .xinitrc", "correct": false },
      { "text": "B. .Xresources", "correct": false },
      { "text": "C. .Xdefaults", "correct": false },
      { "text": "D. Both B and C", "correct": true }
    ]
  },
  {
    "question": "What does the xinitrc file do in an X session?",
    "answers": [
      { "text": "A. It defines the look and feel of the X server", "correct": false },
      { "text": "B. It launches windows and programs at login time", "correct": true },
      { "text": "C. It authenticates X clients", "correct": false },
      { "text": "D. It manages network transparency", "correct": false }
    ]
  },
  {
    "question": "Why is X11 over SSH (X forwarding) beneficial?",
    "answers": [
      { "text": "A. It increases the graphical performance of applications", "correct": false },
      { "text": "B. It allows X to pass through firewalls by using secure protocols", "correct": true },
      { "text": "C. It reduces the system memory footprint", "correct": false },
      { "text": "D. It eliminates the need for a Display Manager", "correct": false }
    ]
  },
  {
    "question": "X Windows is also known as X11.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "X Windows is tightly coupled with the operating system and hardware.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "X11 R7.7 is the current version mentioned in the lecture.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The X server is responsible for handling user input and displaying graphical output.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A display in X Windows is equivalent to a physical monitor only.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A screen in X Windows refers to a virtual desktop.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Display Manager handles user authentication and starts the X server.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The DISPLAY environment variable is used to specify where X applications should send their output.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When using SSH tunneling for X, the DISPLAY variable is typically set to something like localhost:10.0.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "xhost is used for cookie-based client authentication.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Magic cookie authentication uses a random number stored in the ~/.Xauthority file to grant access.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The .Xresources file is used to set system-wide defaults for X.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "xinitrc is a script that launches programs when starting an X session.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Display Manager, Window Manager, and Widget Library are three distinct components in an X Windows environment.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Wayland is mentioned as a new version of X Windows designed to replace X.org.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Using the –x flag with SSH enables X forwarding.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Changing the DISPLAY environment variable in one shell does not affect other shells.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A 2-button mouse can be used in X by emulating a third button through simultaneous button press.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "X is part of the core operating system on Unix.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "X11’s policy-free nature means that its appearance is determined entirely by the window manager and helper applications.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "An administrator wants to start an X session from the command line using the default display manager. Which command is typically used as a wrapper to launch the X server?",
    "answers": [
      { "text": "A. startx", "correct": true },
      { "text": "B. xinit", "correct": false },
      { "text": "C. xdm", "correct": false },
      { "text": "D. xterm", "correct": false }
    ]
  },
  {
    "question": "To allow a remote host to connect to your local X server using host-based authentication, which command should be executed?",
    "answers": [
      { "text": "A. xauth add", "correct": false },
      { "text": "B. xhost +remotehostname", "correct": true },
      { "text": "C. xset m 0", "correct": false },
      { "text": "D. export DISPLAY=remotehostname:0.0", "correct": false }
    ]
  },
  {
    "question": "A user reports that an X application cannot display on the intended screen. Which environment variable should be checked and possibly adjusted?",
    "answers": [
      { "text": "A. XAUTHORITY", "correct": false },
      { "text": "B. DISPLAY", "correct": true },
      { "text": "C. XSESSION", "correct": false },
      { "text": "D. XSERVER", "correct": false }
    ]
  },
  {
    "question": "When configuring X over SSH for secure graphical application forwarding, which SSH option must be used?",
    "answers": [
      { "text": "A. –x", "correct": false },
      { "text": "B. –X", "correct": true },
      { "text": "C. –v", "correct": false },
      { "text": "D. –C", "correct": false }
    ]
  },
  {
    "question": "If a user needs to troubleshoot X client authentication errors related to cookies, which command should they use to inspect the authentication cookies?",
    "answers": [
      { "text": "A. xhost", "correct": false },
      { "text": "B. xauth list", "correct": true },
      { "text": "C. xinit", "correct": false },
      { "text": "D. xsetroot", "correct": false }
    ]
  },
  {
    "question": "A system administrator wants to customize the look and feel of their X session. Which file is most appropriate for setting user-specific GUI preferences?",
    "answers": [
      { "text": "A. /etc/X11/xorg.conf", "correct": false },
      { "text": "B. ~/.Xresources", "correct": true },
      { "text": "C. /usr/bin/startx", "correct": false },
      { "text": "D. /etc/X11/xdm.conf", "correct": false }
    ]
  },
  {
    "question": "A user’s X client application fails to start because it cannot connect to the X server. Which of the following might be an appropriate troubleshooting step?",
    "answers": [
      { "text": "A. Verify that the DISPLAY variable is correctly set", "correct": true },
      { "text": "B. Change the system hostname", "correct": false },
      { "text": "C. Restart the SSH daemon", "correct": false },
      { "text": "D. Reinstall the X client application", "correct": false }
    ]
  },
  {
    "question": "To configure a system-wide default look for X applications, which file should an administrator edit?",
    "answers": [
      { "text": "A. ~/.Xdefaults", "correct": false },
      { "text": "B. /etc/X11/Xresources", "correct": true },
      { "text": "C. ~/.xinitrc", "correct": false },
      { "text": "D. /etc/X11/xinit/xinitrc", "correct": false }
    ]
  },
  {
    "question": "An administrator needs to change the display destination for an X application launched from the terminal. How can this be accomplished?",
    "answers": [
      { "text": "A. By editing the xorg.conf file", "correct": false },
      { "text": "B. By setting the –display flag in the command line", "correct": true },
      { "text": "C. By modifying the .xinitrc file", "correct": false },
      { "text": "D. By running xhost –display", "correct": false }
    ]
  },
  {
    "question": "A user wants to allow their local X server to accept connections from multiple remote hosts without repeatedly modifying the xhost list. What approach is most secure for authenticating these connections?",
    "answers": [
      { "text": "A. Use host-based authentication exclusively", "correct": false },
      { "text": "B. Use magic cookie authentication with xauth", "correct": true },
      { "text": "C. Disable the firewall", "correct": false },
      { "text": "D. Use the –x flag in SSH", "correct": false }
    ]
  },
  {
    "question": "Which command is traditionally used to configure network interfaces on UNIX systems?",
    "answers": [
      { "text": "A. ip", "correct": false },
      { "text": "B. ifconfig", "correct": true },
      { "text": "C. netstat", "correct": false },
      { "text": "D. route", "correct": false }
    ]
  },
  {
    "question": "Which option in the ifconfig command is used to bring an interface up?",
    "answers": [
      { "text": "A. down", "correct": false },
      { "text": "B. start", "correct": false },
      { "text": "C. up", "correct": true },
      { "text": "D. enable", "correct": false }
    ]
  },
  {
    "question": "What parameter does the ifconfig command use to specify an IP address and netmask?",
    "answers": [
      { "text": "A. ip/netmask", "correct": false },
      { "text": "B. addr mask", "correct": false },
      { "text": "C. interface/mask", "correct": false },
      { "text": "D. IP address followed by netmask", "correct": true }
    ]
  },
  {
    "question": "Which command is used to display the routing table on FreeBSD systems?",
    "answers": [
      { "text": "A. route", "correct": false },
      { "text": "B. netstat –r", "correct": true },
      { "text": "C. ip route show", "correct": false },
      { "text": "D. ifconfig –r", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of the route command in UNIX networking?",
    "answers": [
      { "text": "A. To configure network interfaces", "correct": false },
      { "text": "B. To display DNS records", "correct": false },
      { "text": "C. To add or delete routes in the routing table", "correct": true },
      { "text": "D. To flush ARP caches", "correct": false }
    ]
  },
  {
    "question": "Which command is used in newer UNIX systems to add an IP address to an interface?",
    "answers": [
      { "text": "A. ifconfig add", "correct": false },
      { "text": "B. ip addr add", "correct": true },
      { "text": "C. route add addr", "correct": false },
      { "text": "D. netstat -a", "correct": false }
    ]
  },
  {
    "question": "What does the command “ip addr show dev eth0” do?",
    "answers": [
      { "text": "A. Adds an IP address to eth0", "correct": false },
      { "text": "B. Deletes an IP address from eth0", "correct": false },
      { "text": "C. Displays the IP addresses assigned to eth0", "correct": true },
      { "text": "D. Resets the eth0 interface", "correct": false }
    ]
  },
  {
    "question": "To remove an IP address from an interface using the ip command, which option is used?",
    "answers": [
      { "text": "A. ip addr delete", "correct": false },
      { "text": "B. ip addr del", "correct": true },
      { "text": "C. ip addr remove", "correct": false },
      { "text": "D. ip addr clear", "correct": false }
    ]
  },
  {
    "question": "Which command example correctly adds a new route using the older routing method?",
    "answers": [
      { "text": "A. route add default 172.16.5.1", "correct": false },
      { "text": "B. route add 192.168.1.2/24 dev eth0", "correct": false },
      { "text": "C. route add -net 192.168.0.0/16 192.168.1.1", "correct": true },
      { "text": "D. route add -host 127.0.0.1 dev lo", "correct": false }
    ]
  },
  {
    "question": "Which ip command example correctly adds a route for a network?",
    "answers": [
      { "text": "A. ip route add 192.168.2.0/24 via 192.168.1.1", "correct": true },
      { "text": "B. ip route new 192.168.2.0/24 via 192.168.1.1", "correct": false },
      { "text": "C. ip route insert 192.168.2.0/24 via 192.168.1.1", "correct": false },
      { "text": "D. ip route make 192.168.2.0/24 via 192.168.1.1", "correct": false }
    ]
  },
  {
    "question": "Which file in Linux contains the configuration for network interfaces at boot time?",
    "answers": [
      { "text": "A. /etc/resolv.conf", "correct": false },
      { "text": "B. /etc/sysconfig/network-scripts/ifcfg-eth0", "correct": true },
      { "text": "C. /etc/hosts", "correct": false },
      { "text": "D. /etc/rc.conf", "correct": false }
    ]
  },
  {
    "question": "On BSD systems, which file is used to set interface and routing parameters at boot time?",
    "answers": [
      { "text": "A. /etc/rc.conf", "correct": true },
      { "text": "B. /etc/sysconfig/network", "correct": false },
      { "text": "C. /etc/network/interfaces", "correct": false },
      { "text": "D. /etc/resolv.conf", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the /etc/hostname file?",
    "answers": [
      { "text": "A. To list IP addresses for the system", "correct": false },
      { "text": "B. To store the system’s fully qualified domain name", "correct": true },
      { "text": "C. To store local hostnames and IP mappings", "correct": false },
      { "text": "D. To configure network interface options", "correct": false }
    ]
  },
  {
    "question": "Which file is primarily used to define the DNS name servers on a UNIX system?",
    "answers": [
      { "text": "A. /etc/hosts", "correct": false },
      { "text": "B. /etc/nsswitch.conf", "correct": false },
      { "text": "C. /etc/resolv.conf", "correct": true },
      { "text": "D. /etc/hostname", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the /etc/hosts file?",
    "answers": [
      { "text": "A. To store the system’s routing information", "correct": false },
      { "text": "B. To map hostnames to IP addresses locally", "correct": true },
      { "text": "C. To list DNS servers", "correct": false },
      { "text": "D. To configure interface parameters", "correct": false }
    ]
  },
  {
    "question": "Which file determines the order of name resolution methods on a UNIX system?",
    "answers": [
      { "text": "A. /etc/nsswitch.conf", "correct": true },
      { "text": "B. /etc/hostname", "correct": false },
      { "text": "C. /etc/hosts", "correct": false },
      { "text": "D. /etc/resolv.conf", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a step when adding a new machine to a LAN?",
    "answers": [
      { "text": "A. Assigning a unique IP address and hostname", "correct": false },
      { "text": "B. Configuring network interfaces", "correct": false },
      { "text": "C. Setting up default routes", "correct": false },
      { "text": "D. Installing a firewall by default", "correct": true }
    ]
  },
  {
    "question": "Which alternative name resolution method is mentioned in the document?",
    "answers": [
      { "text": "A. LDAP", "correct": false },
      { "text": "B. NIS/NIS+", "correct": true },
      { "text": "C. RADIUS", "correct": false },
      { "text": "D. Kerberos", "correct": false }
    ]
  },
  {
    "question": "Which command is used to flush the routing table using the ip command?",
    "answers": [
      { "text": "A. ip route flush", "correct": true },
      { "text": "B. ip route delete all", "correct": false },
      { "text": "C. ip route clear", "correct": false },
      { "text": "D. ip route purge", "correct": false }
    ]
  },
  {
    "question": "What is the first step in troubleshooting a network connectivity issue, as suggested in the document?",
    "answers": [
      { "text": "A. Check if the DNS server is configured", "correct": false },
      { "text": "B. Verify physical connectivity and link lights", "correct": true },
      { "text": "C. Flush the ARP table", "correct": false },
      { "text": "D. Restart the network service", "correct": false }
    ]
  },
  {
    "question": "Adding a new machine to a LAN requires assigning a unique IP address and hostname.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ifconfig command can be used to set an interface’s MTU value.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Using the route command, you can only add routes; you cannot delete routes.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The ip command is a newer method for configuring network interfaces and routes compared to ifconfig and route.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The /etc/sysconfig/network-scripts directory is used on BSD systems to configure network interfaces.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The file /etc/hosts is used to locally store mappings between IP addresses and hostnames.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The /etc/resolv.conf file contains the DNS server entries that the system uses for name resolution.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ip addr add command requires the subnet mask to be provided in CIDR notation (e.g., /24).",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The command 'ip route show' displays the current routing table.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "On Linux systems, the default route is typically set in the /etc/sysconfig/network file.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The /etc/hostname file stores the system’s IP address.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Using the ip command, the 'ip route del' command is used to remove an existing route.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A proper LAN configuration always requires manual configuration of DNS servers.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "NIS/NIS+ was historically used as a centralized name resolution method but is now considered largely obsolete.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ip command can be used to flush the entire routing table with 'ip route flush'.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Physical connectivity issues are one of the first troubleshooting steps when addressing network problems.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The ifconfig command is only used for assigning IP addresses and cannot be used to control ARP behavior.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "On Linux systems, the /etc/nsswitch.conf file determines the order of lookup methods for name resolution.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The default configuration files for network settings on Linux include both interface scripts and routing parameters.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Troubleshooting steps for network issues include checking for proper interface configuration, ARP table entries, and firewall settings.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "An administrator needs to back up the entire system to a bootable tape for quick restoration. Which of the following commands is most appropriate?",
    "answers": [
      { "text": "A. dd if=/dev/sda of=/dev/tape", "correct": false },
      { "text": "B. tar –cvf backup.tar /", "correct": true },
      { "text": "C. rsync -av / /backup", "correct": false },
      { "text": "D. cp -r / /tape", "correct": false }
    ]
  },
  {
    "question": "To disable a dormant user account automatically after a set number of days, which command should be used?",
    "answers": [
      { "text": "A. chage –d", "correct": false },
      { "text": "B. usermod –f days username", "correct": true },
      { "text": "C. passwd –l username", "correct": false },
      { "text": "D. userdel username", "correct": false }
    ]
  },
  {
    "question": "A system administrator wants to restrict a web server to operate within a chroot jail for enhanced security. Which command should be used to launch the web server in this restricted environment?",
    "answers": [
      { "text": "A. chroot /var/chroot /usr/sbin/httpd", "correct": true },
      { "text": "B. jail /var/chroot /usr/sbin/httpd", "correct": false },
      { "text": "C. restrict /var/chroot /usr/sbin/httpd", "correct": false },
      { "text": "D. secure /var/chroot /usr/sbin/httpd", "correct": false }
    ]
  },
  {
    "question": "After observing SELinux denials in the audit log, an administrator wants to generate new policy rules to allow the desired action. Which sequence of tools should they use?",
    "answers": [
      { "text": "A. setenforce, getenforce, restorecon", "correct": false },
      { "text": "B. audit2allow, then compile with checkpolicy", "correct": true },
      { "text": "C. getenforce, then chcon", "correct": false },
      { "text": "D. semanage, then restorecon", "correct": false }
    ]
  },
  {
    "question": "Which command will display the current SELinux operating mode to an administrator?",
    "answers": [
      { "text": "A. sestatus", "correct": false },
      { "text": "B. getenforce", "correct": true },
      { "text": "C. setenforce", "correct": false },
      { "text": "D. selinux-status", "correct": false }
    ]
  },
  {
    "question": "An administrator is tasked with verifying that only authorized services are running. Which command could they use to list open network ports on a UNIX system?",
    "answers": [
      { "text": "A. ps aux", "correct": false },
      { "text": "B. netstat –an | grep LISTEN", "correct": true },
      { "text": "C. lsof –i:80", "correct": false },
      { "text": "D. chkconfig", "correct": false }
    ]
  },
  {
    "question": "To enforce that only known hosts can mount an NFS export, which configuration file should be edited on the NFS server?",
    "answers": [
      { "text": "A. /etc/exports", "correct": true },
      { "text": "B. /etc/fstab", "correct": false },
      { "text": "C. /etc/hosts.allow", "correct": false },
      { "text": "D. /etc/nfs.conf", "correct": false }
    ]
  },
  {
    "question": "A security auditor wants to ensure that file integrity on critical system binaries is maintained. Which tool is most suitable for periodic checksum verification?",
    "answers": [
      { "text": "A. tripwire", "correct": true },
      { "text": "B. psacct", "correct": false },
      { "text": "C. syslog", "correct": false },
      { "text": "D. chroot", "correct": false }
    ]
  },
  {
    "question": "When reviewing audit logs for potential intrusions, which log file is most commonly examined on a UNIX system?",
    "answers": [
      { "text": "A. /var/log/secure", "correct": false },
      { "text": "B. /var/log/audit/audit.log", "correct": true },
      { "text": "C. /var/log/messages", "correct": false },
      { "text": "D. /var/log/syslog", "correct": false }
    ]
  },
  {
    "question": "To disable an insecure service such as Telnet from running at boot, what is the recommended course of action?",
    "answers": [
      { "text": "A. Block Telnet via the firewall only", "correct": false },
      { "text": "B. Stop the service and remove it from startup scripts", "correct": true },
      { "text": "C. Change its default port number", "correct": false },
      { "text": "D. Encrypt its traffic with SSL", "correct": false }
    ]
  },
  {
    "question": "Which of the following is cited as a fundamental weakness of UNIX security?",
    "answers": [
      { "text": "A. Excessive encryption", "correct": false },
      { "text": "B. Weak authentication model", "correct": true },
      { "text": "C. Too many user accounts", "correct": false },
      { "text": "D. Overly strict authorization", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a tool used to list open network ports and verify running services?",
    "answers": [
      { "text": "A. netstat (or ss)", "correct": true },
      { "text": "B. top", "correct": false },
      { "text": "C. ifconfig", "correct": false },
      { "text": "D. uname", "correct": false }
    ]
  }
  
];

