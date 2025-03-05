const questionBank = [
  {
    "question": "During the boot process, which component is responsible for locating the kernel image on disk, loading it into memory, and starting it?",
    "answers": [
      { "text": "BIOS/firmware", "correct": false },
      { "text": "Boot loader", "correct": true },
      { "text": "Kernel", "correct": false },
      { "text": "init process", "correct": false }
    ]
  },
  {
    "question": "Which file is used to configure the legacy GRUB boot loader’s boot order and options?",
    "answers": [
      { "text": "/boot/grub/grub.cfg", "correct": false },
      { "text": "/boot/grub/grub.conf", "correct": true },
      { "text": "/etc/default/grub", "correct": false },
      { "text": "/etc/grub.conf", "correct": false }
    ]
  },
  {
    "question": "For GRUB2, administrators typically modify which file before rebuilding the configuration using grub2-mkconfig?",
    "answers": [
      { "text": "/boot/grub/grub.cfg", "correct": false },
      { "text": "/etc/default/grub", "correct": true },
      { "text": "/etc/grub2.conf", "correct": false },
      { "text": "/boot/grub2.cfg", "correct": false }
    ]
  },
  {
    "question": "Which process, having a process ID of 1, is responsible for beginning user space initialization?",
    "answers": [
      { "text": "systemd (or init)", "correct": true },
      { "text": "grub", "correct": false },
      { "text": "bios", "correct": false },
      { "text": "kernel", "correct": false }
    ]
  },
  {
    "question": "In System V init, which runlevel is typically associated with single-user mode?",
    "answers": [
      { "text": "0", "correct": false },
      { "text": "1 (or S)", "correct": true },
      { "text": "3", "correct": false },
      { "text": "5", "correct": false }
    ]
  },
  {
    "question": "Which feature of systemd differentiates it from traditional SysV init by allowing services to start concurrently?",
    "answers": [
      { "text": "Serial execution", "correct": false },
      { "text": "Parallelization", "correct": true },
      { "text": "Strict dependency chains", "correct": false },
      { "text": "Sequential script linking", "correct": false }
    ]
  },
  {
    "question": "What command in systemd is used to display the status of a service (e.g., httpd)?",
    "answers": [
      { "text": "service httpd status", "correct": false },
      { "text": "systemctl status httpd", "correct": true },
      { "text": "chkconfig httpd status", "correct": false },
      { "text": "initctl status httpd", "correct": false }
    ]
  },
  {
    "question": "In SysV init, what is the purpose of the symbolic links (beginning with S and K) in the rc#.d directories?",
    "answers": [
      { "text": "To load kernel modules", "correct": false },
      { "text": "To manage service start-up and shutdown order", "correct": true },
      { "text": "To configure bootloader settings", "correct": false },
      { "text": "To update DNS configuration", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes the source code distribution method for UNIX software installation?",
    "answers": [
      { "text": "Pre-compiled binary installation", "correct": false },
      { "text": "Downloading and compiling the source on the target machine", "correct": true },
      { "text": "Using package managers to resolve dependencies automatically", "correct": false },
      { "text": "Installing from live CDs only", "correct": false }
    ]
  },
  {
    "question": "What is the standard command sequence for compiling software from source?",
    "answers": [
      { "text": "./install; make; make clean", "correct": false },
      { "text": "./configure; make; make install", "correct": true },
      { "text": "make configure; make; install", "correct": false },
      { "text": "configure; compile; install", "correct": false }
    ]
  },
  {
    "question": "Which packaging system is commonly used on Red Hat-based Linux distributions?",
    "answers": [
      { "text": "dpkg", "correct": false },
      { "text": "pacman", "correct": false },
      { "text": "rpm (and yum)", "correct": true },
      { "text": "pkg", "correct": false }
    ]
  },
  {
    "question": "Kernel modules allow new hardware support to be added without what?",
    "answers": [
      { "text": "Recompiling the entire operating system", "correct": true },
      { "text": "Installing additional drivers", "correct": false },
      { "text": "Using package managers", "correct": false },
      { "text": "Restarting the boot loader", "correct": false }
    ]
  },
  {
    "question": "Which command is typically used to load a kernel module dynamically on Linux?",
    "answers": [
      { "text": "insmod or modprobe", "correct": true },
      { "text": "lsmod", "correct": false },
      { "text": "rmmod", "correct": false },
      { "text": "depmod", "correct": false }
    ]
  },
  {
    "question": "A tarball is best described as which of the following?",
    "answers": [
      { "text": "A compressed archive containing multiple files", "correct": true },
      { "text": "A binary executable file", "correct": false },
      { "text": "A kernel module package", "correct": false },
      { "text": "A text configuration file", "correct": false }
    ]
  },
  {
    "question": "Which component of systemd is responsible for logging system events?",
    "answers": [
      { "text": "logind", "correct": false },
      { "text": "journald", "correct": true },
      { "text": "networkd", "correct": false },
      { "text": "cgroups", "correct": false }
    ]
  },
  {
    "question": "In systemd, what is the purpose of a “target”?",
    "answers": [
      { "text": "It defines a specific boot loader configuration", "correct": false },
      { "text": "It represents a group of units that are started together to achieve a particular state", "correct": true },
      { "text": "It compiles software packages", "correct": false },
      { "text": "It controls kernel module loading", "correct": false }
    ]
  },
  {
    "question": "Which file is NOT directly modified by administrators when configuring GRUB2?",
    "answers": [
      { "text": "/etc/default/grub", "correct": false },
      { "text": "/boot/grub/grub.cfg", "correct": false },
      { "text": "A file under /etc/default/grub.d", "correct": false },
      { "text": "/boot/grub/grub.conf", "correct": true }
    ]
  },
  {
    "question": "In systemd, which target is analogous to the traditional multi-user mode (non-graphical)?",
    "answers": [
      { "text": "graphical.target", "correct": false },
      { "text": "rescue.target", "correct": false },
      { "text": "multi-user.target", "correct": true },
      { "text": "default.target", "correct": false }
    ]
  },
  {
    "question": "Which target in systemd is used to start a complete graphical environment?",
    "answers": [
      { "text": "graphical.target", "correct": true },
      { "text": "multi-user.target", "correct": false },
      { "text": "network.target", "correct": false },
      { "text": "local-fs.target", "correct": false }
    ]
  },
  {
    "question": "What does the “make install” command do when compiling software from source?",
    "answers": [
      { "text": "It compiles the source code", "correct": false },
      { "text": "It installs the compiled binaries and other resources into the system", "correct": true },
      { "text": "It cleans up temporary files", "correct": false },
      { "text": "It downloads the source tarball", "correct": false }
    ]
  },
  {
    "question": "The BIOS (or firmware) initiates the boot process by loading the boot loader.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "GRUB2’s configuration is directly edited in the file /boot/grub/grub.cfg by administrators.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Systemd replaces traditional SysV init and supports parallel startup of services.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Runlevels are a concept used by both BSD and System V init systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The default runlevel for SysV init is specified in the /etc/inittab file.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Using systemctl set-default, administrators can permanently change the default target in systemd.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The command sequence “./configure; make; make install” is used for compiling software from source, not for installing pre-compiled packages.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RPM-based package managers are used on Debian-based systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Kernel modules run in kernel (ring 0) space, which can pose security risks if malicious.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Loading a kernel module dynamically with modprobe or insmod requires a system reboot.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "GRUB supports multi-booting, allowing the selection between multiple operating systems at startup.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "System logs managed by systemd can be viewed using the command journalctl -f.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In SysV init, the symbolic links in the rc#.d directories point to scripts in the /etc/init.d directory.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The chkconfig command is used to manage services under systemd.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The boot loader passes configuration information to the kernel during startup.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Compiling software from source requires that a suitable compiler and support libraries are installed on the target system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A tarball is typically a compressed archive, often created with gzip or bzip2.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Pre-compiled package managers automatically resolve and install software dependencies.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The init process (or systemd) is always started with process ID 1.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Systemd and SysV init use identical methods for managing services and boot targets.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "An administrator wants to permanently change the default boot target to multi-user mode (non-graphical) using systemd. Which command should they use?",
    "answers": [
      { "text": "systemctl isolate multi-user.target", "correct": false },
      { "text": "systemctl set-default multi-user.target", "correct": true },
      { "text": "telinit 3", "correct": false },
      { "text": "systemctl enable multi-user.target", "correct": false }
    ]
  },
  {
    "question": "After modifying the /etc/default/grub file, what command must be run to update GRUB2’s configuration?",
    "answers": [
      { "text": "grub2-install", "correct": false },
      { "text": "update-grub", "correct": false },
      { "text": "grub2-mkconfig -o /boot/grub/grub.cfg", "correct": true },
      { "text": "grub-mkconfig -o /etc/grub.conf", "correct": false }
    ]
  },
  {
    "question": "A technician is compiling software from source and encounters missing dependency errors. What is the most likely required action?",
    "answers": [
      { "text": "Re-download the tarball", "correct": false },
      { "text": "Install the necessary support libraries and headers", "correct": true },
      { "text": "Run make clean", "correct": false },
      { "text": "Reboot the system", "correct": false }
    ]
  },
  {
    "question": "To load a new kernel module dynamically without rebooting, which command should an administrator use?",
    "answers": [
      { "text": "lsmod", "correct": false },
      { "text": "rmmod", "correct": false },
      { "text": "modprobe (or insmod)", "correct": true },
      { "text": "depmod", "correct": false }
    ]
  },
  {
    "question": "When installing pre-compiled software packages on a Red Hat–based system, which package manager is typically used?",
    "answers": [
      { "text": "apt", "correct": false },
      { "text": "rpm (or yum)", "correct": true },
      { "text": "pacman", "correct": false },
      { "text": "dpkg", "correct": false }
    ]
  },
  {
    "question": "An administrator needs to view real-time logs of systemd-managed services. Which command is best suited for this task?",
    "answers": [
      { "text": "tail -f /var/log/messages", "correct": false },
      { "text": "dmesg", "correct": false },
      { "text": "journalctl -f", "correct": true },
      { "text": "systemctl logs", "correct": false }
    ]
  },
  {
    "question": "A system boots into single-user mode due to misconfiguration. Which target (or runlevel) is the system most likely set to?",
    "answers": [
      { "text": "multi-user.target (runlevel 3)", "correct": false },
      { "text": "graphical.target (runlevel 5)", "correct": false },
      { "text": "rescue.target (or runlevel 1)", "correct": true },
      { "text": "poweroff.target", "correct": false }
    ]
  },
  {
    "question": "After compiling software from source, which command installs the compiled binaries to the appropriate system directories?",
    "answers": [
      { "text": "make", "correct": false },
      { "text": "make clean", "correct": false },
      { "text": "make install", "correct": true },
      { "text": "./configure", "correct": false }
    ]
  },
  {
    "question": "To check the current status of the “httpd” service on a systemd-based Linux system, which command should be used?",
    "answers": [
      { "text": "service httpd status", "correct": false },
      { "text": "systemctl status httpd", "correct": true },
      { "text": "chkconfig httpd on", "correct": false },
      { "text": "initctl status httpd", "correct": false }
    ]
  },
  {
    "question": "If an administrator needs to temporarily switch the system to rescue mode using systemd, which command is appropriate?",
    "answers": [
      { "text": "systemctl set-default rescue.target", "correct": false },
      { "text": "systemctl isolate rescue.target", "correct": true },
      { "text": "telinit 1", "correct": false },
      { "text": "systemctl rescue", "correct": false }
    ]
  }
];
