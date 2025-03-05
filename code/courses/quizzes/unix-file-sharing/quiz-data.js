const questionBank = [
  {
    "question": "Which command is traditionally used to configure network interfaces on UNIX systems?",
    "answers": [
      { "text": "ip", "correct": false },
      { "text": "ifconfig", "correct": true },
      { "text": "netstat", "correct": false },
      { "text": "route", "correct": false }
    ]
  },
  {
    "question": "Which option in the ifconfig command is used to bring an interface up?",
    "answers": [
      { "text": "down", "correct": false },
      { "text": "start", "correct": false },
      { "text": "up", "correct": true },
      { "text": "enable", "correct": false }
    ]
  },
  {
    "question": "What parameter does the ifconfig command use to specify an IP address and netmask?",
    "answers": [
      { "text": "ip/netmask", "correct": false },
      { "text": "addr mask", "correct": false },
      { "text": "interface/mask", "correct": false },
      { "text": "IP address followed by netmask", "correct": true }
    ]
  },
  {
    "question": "Which command is used to display the routing table on FreeBSD systems?",
    "answers": [
      { "text": "route", "correct": false },
      { "text": "netstat –r", "correct": true },
      { "text": "ip route show", "correct": false },
      { "text": "ifconfig –r", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of the route command in UNIX networking?",
    "answers": [
      { "text": "To configure network interfaces", "correct": false },
      { "text": "To display DNS records", "correct": false },
      { "text": "To add or delete routes in the routing table", "correct": true },
      { "text": "To flush ARP caches", "correct": false }
    ]
  },
  {
    "question": "Which command is used in newer UNIX systems to add an IP address to an interface?",
    "answers": [
      { "text": "ifconfig add", "correct": false },
      { "text": "ip addr add", "correct": true },
      { "text": "route add addr", "correct": false },
      { "text": "netstat -a", "correct": false }
    ]
  },
  {
    "question": "What does the command “ip addr show dev eth0” do?",
    "answers": [
      { "text": "Adds an IP address to eth0", "correct": false },
      { "text": "Deletes an IP address from eth0", "correct": false },
      { "text": "Displays the IP addresses assigned to eth0", "correct": true },
      { "text": "Resets the eth0 interface", "correct": false }
    ]
  },
  {
    "question": "To remove an IP address from an interface using the ip command, which option is used?",
    "answers": [
      { "text": "ip addr delete", "correct": false },
      { "text": "ip addr remove", "correct": false },
      { "text": "ip addr del", "correct": true },
      { "text": "ip addr clear", "correct": false }
    ]
  },
  {
    "question": "Which command example correctly adds a new route using the older routing method?",
    "answers": [
      { "text": "route add default 172.16.5.1", "correct": false },
      { "text": "route add 192.168.1.2/24 dev eth0", "correct": false },
      { "text": "route add -net 192.168.0.0/16 192.168.1.1", "correct": true },
      { "text": "route add -host 127.0.0.1 dev lo", "correct": false }
    ]
  },
  {
    "question": "Which ip command example correctly adds a route for a network?",
    "answers": [
      { "text": "ip route add 192.168.2.0/24 via 192.168.1.1", "correct": true },
      { "text": "ip route new 192.168.2.0/24 via 192.168.1.1", "correct": false },
      { "text": "ip route insert 192.168.2.0/24 via 192.168.1.1", "correct": false },
      { "text": "ip route make 192.168.2.0/24 via 192.168.1.1", "correct": false }
    ]
  },
  {
    "question": "Which file in Linux contains the configuration for network interfaces at boot time?",
    "answers": [
      { "text": "/etc/resolv.conf", "correct": false },
      { "text": "/etc/sysconfig/network-scripts/ifcfg-eth0", "correct": true },
      { "text": "/etc/hosts", "correct": false },
      { "text": "/etc/rc.conf", "correct": false }
    ]
  },
  {
    "question": "On BSD systems, which file is used to set interface and routing parameters at boot time?",
    "answers": [
      { "text": "/etc/rc.conf", "correct": true },
      { "text": "/etc/sysconfig/network", "correct": false },
      { "text": "/etc/network/interfaces", "correct": false },
      { "text": "/etc/resolv.conf", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the /etc/hostname file?",
    "answers": [
      { "text": "To list IP addresses for the system", "correct": false },
      { "text": "To store the system’s fully qualified domain name", "correct": true },
      { "text": "To store local hostnames and IP mappings", "correct": false },
      { "text": "To configure network interface options", "correct": false }
    ]
  },
  {
    "question": "Which file is primarily used to define the DNS name servers on a UNIX system?",
    "answers": [
      { "text": "/etc/hosts", "correct": false },
      { "text": "/etc/nsswitch.conf", "correct": false },
      { "text": "/etc/resolv.conf", "correct": true },
      { "text": "/etc/hostname", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the /etc/hosts file?",
    "answers": [
      { "text": "To store the system’s routing information", "correct": false },
      { "text": "To map hostnames to IP addresses locally", "correct": true },
      { "text": "To list DNS servers", "correct": false },
      { "text": "To configure interface parameters", "correct": false }
    ]
  },
  {
    "question": "Which file determines the order of name resolution methods on a UNIX system?",
    "answers": [
      { "text": "/etc/nsswitch.conf", "correct": true },
      { "text": "/etc/hostname", "correct": false },
      { "text": "/etc/hosts", "correct": false },
      { "text": "/etc/resolv.conf", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a step when adding a new machine to a LAN?",
    "answers": [
      { "text": "Assigning a unique IP address and hostname", "correct": false },
      { "text": "Configuring network interfaces", "correct": false },
      { "text": "Setting up default routes", "correct": false },
      { "text": "Installing a firewall by default", "correct": true }
    ]
  },
  {
    "question": "Which alternative name resolution method is mentioned in the document?",
    "answers": [
      { "text": "LDAP", "correct": false },
      { "text": "NIS/NIS+", "correct": true },
      { "text": "RADIUS", "correct": false },
      { "text": "Kerberos", "correct": false }
    ]
  },
  {
    "question": "Which command is used to flush the routing table using the ip command?",
    "answers": [
      { "text": "ip route flush", "correct": true },
      { "text": "ip route delete all", "correct": false },
      { "text": "ip route clear", "correct": false },
      { "text": "ip route purge", "correct": false }
    ]
  },
  {
    "question": "What is the first step in troubleshooting a network connectivity issue, as suggested in the document?",
    "answers": [
      { "text": "Check if the DNS server is configured", "correct": false },
      { "text": "Verify physical connectivity and link lights", "correct": true },
      { "text": "Flush the ARP table", "correct": false },
      { "text": "Restart the network service", "correct": false }
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
    "question": "The command “ip route show” displays the current routing table.",
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
    "question": "Using the ip command, the “ip route del” command is used to remove an existing route.",
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
    "question": "The ip command can be used to flush the entire routing table with “ip route flush”.",
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
    "question": "An administrator needs to assign an IP address of 192.168.1.100 with a subnet mask of 255.255.255.0 to interface eth0 using ifconfig. Which command should they use?",
    "answers": [
      { "text": "ifconfig eth0 up", "correct": false },
      { "text": "ifconfig eth0 192.168.1.100 netmask 255.255.255.0", "correct": true },
      { "text": "ip addr add 192.168.1.100/24 dev eth0", "correct": false },
      { "text": "route add -net 192.168.1.100 netmask 255.255.255.0 dev eth0", "correct": false }
    ]
  },
  {
    "question": "After configuring a new interface using the ip command, which command will display the current IP configuration for eth0?",
    "answers": [
      { "text": "ip addr show dev eth0", "correct": true },
      { "text": "ifconfig eth0", "correct": false },
      { "text": "ip route show dev eth0", "correct": false },
      { "text": "netstat -i eth0", "correct": false }
    ]
  },
  {
    "question": "A technician needs to add a new route to direct traffic destined for the 192.168.2.0/24 network via the gateway 192.168.1.1 using the ip command. Which command is correct?",
    "answers": [
      { "text": "ip route add 192.168.2.0/24 via 192.168.1.1", "correct": true },
      { "text": "ip route set 192.168.2.0/24 gw 192.168.1.1", "correct": false },
      { "text": "route add -net 192.168.2.0/24 192.168.1.1", "correct": false },
      { "text": "ip route new 192.168.2.0/24 via 192.168.1.1", "correct": false }
    ]
  },
  {
    "question": "To remove an existing route for network 192.168.2.0/24 using the ip command, which of the following is the correct command?",
    "answers": [
      { "text": "ip route delete 192.168.2.0/24 via 192.168.1.1", "correct": false },
      { "text": "ip route del 192.168.2.0/24 via 192.168.1.1", "correct": true },
      { "text": "ip route remove 192.168.2.0/24 via 192.168.1.1", "correct": false },
      { "text": "ip route flush 192.168.2.0/24 via 192.168.1.1", "correct": false }
    ]
  },
  {
    "question": "If an administrator finds that the default route is missing after reboot on a Linux system, which file should they check to verify persistent routing settings?",
    "answers": [
      { "text": "/etc/hosts", "correct": false },
      { "text": "/etc/resolv.conf", "correct": false },
      { "text": "/etc/sysconfig/network", "correct": true },
      { "text": "/etc/rc.conf", "correct": false }
    ]
  },
  {
    "question": "A system administrator needs to verify that DNS resolution is functioning correctly. Which of the following files should be reviewed for proper DNS server entries?",
    "answers": [
      { "text": "/etc/hosts", "correct": false },
      { "text": "/etc/nsswitch.conf", "correct": false },
      { "text": "/etc/resolv.conf", "correct": true },
      { "text": "/etc/hostname", "correct": false }
    ]
  },
  {
    "question": "When troubleshooting network connectivity, which of the following is the best first step?",
    "answers": [
      { "text": "Flushing the routing table", "correct": false },
      { "text": "Checking physical connectivity and link lights", "correct": true },
      { "text": "Editing the /etc/resolv.conf file", "correct": false },
      { "text": "Restarting the network service", "correct": false }
    ]
  },
  {
    "question": "After configuring an interface using the ifconfig command, what command can an administrator use to verify that the interface is operational?",
    "answers": [
      { "text": "ifconfig –a", "correct": true },
      { "text": "netstat –i", "correct": false },
      { "text": "ping 127.0.0.1", "correct": false },
      { "text": "route –n", "correct": false }
    ]
  },
  {
    "question": "Which configuration file would an administrator edit on a BSD system to set interface parameters and routing at boot time?",
    "answers": [
      { "text": "/etc/sysconfig/network-scripts/ifcfg-eth0", "correct": false },
      { "text": "/etc/rc.conf", "correct": true },
      { "text": "/etc/network/interfaces", "correct": false },
      { "text": "/etc/resolv.conf", "correct": false }
    ]
  },
  {
    "question": "A technician needs to verify that the system’s DNS name resolution order is set correctly. Which file should be checked?",
    "answers": [
      { "text": "/etc/hosts", "correct": false },
      { "text": "/etc/nsswitch.conf", "correct": true },
      { "text": "/etc/resolv.conf", "correct": false },
      { "text": "/etc/hostname", "correct": false }
    ]
  }
  
];

