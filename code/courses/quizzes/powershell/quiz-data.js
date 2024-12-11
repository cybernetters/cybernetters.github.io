const questionBank = [
  // Multiple-Choice Questions
  {
    question: "Which of the following is a scripting host in Windows Script Host (WSH)?",
    answers: [
      { text: "A. WMI", correct: false },
      { text: "B. WinRM", correct: false },
      { text: "C. cscript.exe", correct: true },
      { text: "D. Batch.exe", correct: false },
      { text: "E. Python", correct: false },
    ],
  },
  {
    question: "What is the default scripting language supported by WSH in Windows?",
    answers: [
      { text: "A. Python", correct: false },
      { text: "B. VBScript", correct: true },
      { text: "C. PerlScript", correct: false },
      { text: "D. JavaScript", correct: false },
      { text: "E. PowerShell", correct: false },
    ],
  },
  {
    question: "Which cmdlet is used to list all available cmdlets in PowerShell?",
    answers: [
      { text: "A. Get-Help", correct: false },
      { text: "B. Get-Command", correct: true },
      { text: "C. Set-Cmdlet", correct: false },
      { text: "D. Find-Module", correct: false },
      { text: "E. Import-Command", correct: false },
    ],
  },
  {
    question: "Which PowerShell cmdlet allows you to stop a specific service?",
    answers: [
      { text: "A. Stop-Service", correct: true },
      { text: "B. Halt-Service", correct: false },
      { text: "C. Disable-Service", correct: false },
      { text: "D. Terminate-Service", correct: false },
      { text: "E. Pause-Service", correct: false },
    ],
  },
  {
    question: "PowerShell cmdlets are always written in which format?",
    answers: [
      { text: "A. Verb-Adjective", correct: false },
      { text: "B. Verb-Noun", correct: true },
      { text: "C. Noun-Verb", correct: false },
      { text: "D. Adjective-Verb", correct: false },
      { text: "E. Action-Object", correct: false },
    ],
  },
  {
    question: "What is the file extension for PowerShell scripts?",
    answers: [
      { text: "A. .bat", correct: false },
      { text: "B. .cmd", correct: false },
      { text: "C. .ps1", correct: true },
      { text: "D. .vbs", correct: false },
      { text: "E. .sh", correct: false },
    ],
  },
  {
    question: "Which of the following operations is NOT a feature of PowerShell pipeline?",
    answers: [
      { text: "A. Filtering", correct: false },
      { text: "B. Formatting", correct: false },
      { text: "C. Aggregating", correct: false },
      { text: "D. Outputting", correct: false },
      { text: "E. Pipelining text instead of objects", correct: true },
    ],
  },
  {
    question: "Which command is used to enable PowerShell remoting?",
    answers: [
      { text: "A. Enable-RemoteAccess", correct: false },
      { text: "B. Enable-PSSession", correct: false },
      { text: "C. Enable-PSRemoting", correct: true },
      { text: "D. Set-WSManQuickConfig", correct: false },
      { text: "E. Start-RemoteAccess", correct: false },
    ],
  },
  {
    question: "Which scripting engine supports scripts written in VBScript or Jscript?",
    answers: [
      { text: "A. Batch", correct: false },
      { text: "B. WSH", correct: true },
      { text: "C. WinRM", correct: false },
      { text: "D. WMI", correct: false },
      { text: "E. CRON", correct: false },
    ],
  },
  {
    question: "Which of the following is a PowerShell comparison operator?",
    answers: [
      { text: "A. -eq", correct: true },
      { text: "B. -match", correct: true },
      { text: "C. -gte", correct: true },
      { text: "D. -lt", correct: true },
      { text: "E. All of the above", correct: true },
    ],
  },
  {
    question: "In Windows, how are scripts executed by default in the graphical scripting host?",
    answers: [
      { text: "A. By running cmd.exe", correct: false },
      { text: "B. By double-clicking the script file", correct: true },
      { text: "C. By executing scripts in a batch file", correct: false },
      { text: "D. By typing the script name in Command Prompt", correct: false },
      { text: "E. By entering the PowerShell environment", correct: false },
    ],
  },
  {
    question: "What happens if a script’s digital signature verification fails in WSH?",
    answers: [
      { text: "A. The script is ignored and deleted.", correct: false },
      { text: "B. The script is executed with warnings.", correct: false },
      { text: "C. The script execution is paused for manual verification.", correct: true },
      { text: "D. The script is logged for future evaluation.", correct: false },
      { text: "E. Nothing happens; the script executes.", correct: false },
    ],
  },
  {
    question: "Which cmdlet is used to see the properties and methods of an object in PowerShell?",
    answers: [
      { text: "A. Get-Properties", correct: false },
      { text: "B. Get-Details", correct: false },
      { text: "C. Get-Object", correct: false },
      { text: "D. Get-Member", correct: true },
      { text: "E. Inspect-Object", correct: false },
    ],
  },
  {
    question: "What does the PowerShell command import-csv do?",
    answers: [
      { text: "A. Converts an object into a CSV file", correct: false },
      { text: "B. Reads a CSV file and creates an object array", correct: true },
      { text: "C. Exports an object to a CSV file", correct: false },
      { text: "D. Copies a CSV file to another location", correct: false },
      { text: "E. Parses plain text into CSV format", correct: false },
    ],
  },
  {
    question: "Which protocol does WS-MAN remoting use in PowerShell?",
    answers: [
      { text: "A. SMB", correct: false },
      { text: "B. HTTP/HTTPS", correct: true },
      { text: "C. FTP", correct: false },
      { text: "D. RPC", correct: false },
      { text: "E. DCOM", correct: false },
    ],
  },
  {
    question: "What does $_.Status represent in a pipelined PowerShell command?",
    answers: [
      { text: "A. Current user’s session status", correct: false },
      { text: "B. A placeholder for a specific service status", correct: true },
      { text: "C. A command's execution state", correct: false },
      { text: "D. A script's debug state", correct: false },
      { text: "E. None of the above", correct: false },
    ],
  },
  {
    question: "What does the get-content cmdlet do?",
    answers: [
      { text: "A. Writes content to a file", correct: false },
      { text: "B. Reads the content of a file into an array", correct: true },
      { text: "C. Appends content to a file", correct: false },
      { text: "D. Deletes the content of a file", correct: false },
      { text: "E. Sets the file content", correct: false },
    ],
  },
  {
    question: "In a For Each loop, what does the $object variable signify?",
    answers: [
      { text: "A. The total number of objects processed", correct: false },
      { text: "B. The index of the current object", correct: false },
      { text: "C. The current object being iterated over", correct: true },
      { text: "D. The type of object in the loop", correct: false },
      { text: "E. None of the above", correct: false },
    ],
  },
  {
    question: "Which PowerShell execution policy only allows digitally signed scripts to run?",
    answers: [
      { text: "A. Restricted", correct: false },
      { text: "B. AllSigned", correct: false },
      { text: "C. RemoteSigned", correct: true },
      { text: "D. Unrestricted", correct: false },
      { text: "E. Bypass", correct: false },
    ],
  },
  {
    question: "What is required to execute a PowerShell script in the current directory?",
    answers: [
      { text: "A. Start-ExecutionPolicy", correct: false },
      { text: "B. Add-PathVariable", correct: false },
      { text: "C. Prefix the script name with .\\", correct: true },
      { text: "D. Enable-ScriptExecution", correct: false },
      { text: "E. None of the above", correct: false },
    ],
  },
  {
    question: "You need to verify that a PowerShell script has not been altered since its creation. What should you check?",
    answers: [
      { text: "A. Execution policy", correct: false },
      { text: "B. Digital signature", correct: true },
      { text: "C. Script permissions", correct: false },
      { text: "D. Object properties", correct: false },
      { text: "E. Cmdlet syntax", correct: false },
    ],
  },
  {
    question: "A script is failing to execute on a remote machine. You suspect remoting is not enabled. Which command will you run?",
    answers: [
      { text: "A. Set-ExecutionPolicy", correct: false },
      { text: "B. Enable-PSRemoting", correct: true },
      { text: "C. Start-WSManSession", correct: false },
      { text: "D. Enter-PSSession", correct: false },
      { text: "E. Get-WinRM", correct: false },
    ],
  },
  {
    question: "You want to read the contents of a text file line by line in PowerShell. Which cmdlet should you use?",
    answers: [
      { text: "A. Set-Content", correct: false },
      { text: "B. Get-Content", correct: true },
      { text: "C. Import-CSV", correct: false },
      { text: "D. Export-CSV", correct: false },
      { text: "E. Out-File", correct: false },
    ],
  },
  {
    question: "How can you append new data to an existing file in PowerShell?",
    answers: [
      { text: "A. Replace-Content", correct: false },
      { text: "B. Add-Content", correct: true },
      { text: "C. Set-Content", correct: false },
      { text: "D. Append-File", correct: false },
      { text: "E. Write-Host", correct: false },
    ],
  },
  {
    question: "A script needs to schedule execution at a specific time every day. Which tool is most appropriate?",
    answers: [
      { text: "A. Windows Task Scheduler", correct: true },
      { text: "B. PowerShell remoting", correct: false },
      { text: "C. WSH", correct: false },
      { text: "D. CRON", correct: false },
      { text: "E. Batch scripting", correct: false },
    ],
  },
  {
    question: "Which command allows you to stop a remote PowerShell session?",
    answers: [
      { text: "A. Exit-Session", correct: false },
      { text: "B. Stop-Remote", correct: false },
      { text: "C. End-PSRemoting", correct: false },
      { text: "D. Exit-PSSession", correct: true },
      { text: "E. Disable-RemoteSession", correct: false },
    ],
  },
  {
    question: "You want to check running services and format the output in a table. Which of the following is correct?",
    answers: [
      { text: "A. Get-Service | Format-Table", correct: true },
      { text: "B. Get-Service -Format Table", correct: false },
      { text: "C. Get-Service | Table-Format", correct: false },
      { text: "D. Format-Service | Get-Table", correct: false },
      { text: "E. Table | Format-GetService", correct: false },
    ],
  },
  {
    question: "You need to iterate over each line in a CSV file. Which structure is most suitable in PowerShell?",
    answers: [
      { text: "A. While Loop", correct: false },
      { text: "B. For Loop", correct: false },
      { text: "C. Do While Loop", correct: false },
      { text: "D. Foreach Loop", correct: true },
      { text: "E. Infinite Loop", correct: false },
    ],
  },
  {
    question: "Which cmdlet is used to create a new object in PowerShell?",
    answers: [
      { text: "A. New-Cmdlet", correct: false },
      { text: "B. New-Object", correct: true },
      { text: "C. Create-Object", correct: false },
      { text: "D. Add-Member", correct: false },
      { text: "E. Init-Object", correct: false },
    ],
  },
  {
    question: "What is the correct syntax for assigning an integer value to a variable in PowerShell?",
    answers: [
      { text: "A. [int]$Var = 10", correct: true },
      { text: "B. int$Var = 10", correct: false },
      { text: "C. $Var = 10 (integer)", correct: false },
      { text: "D. [integer]Var = 10", correct: false },
      { text: "E. Var = 10", correct: false },
    ],
  },
  {
    question: "VBScript is the default scripting language for Linux operating systems.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "PowerShell supports manipulating Windows Registry keys.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Scripts written in WSH must always be embedded in HTML.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "PowerShell cmdlets cannot accept parameters.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "The Windows Task Scheduler allows automation of script execution.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Digital signatures in WSH ensure that a script has not been tampered with.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The Get-Member cmdlet is used to view cmdlet descriptions.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "PowerShell remoting does not support remote execution.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "CRON is used for task scheduling in Windows environments.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "PowerShell is an object-based shell environment.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The Set-Content cmdlet appends content to an existing file.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Scripts executed via cscript.exe output their results in dialog boxes.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Pipelines in PowerShell can pass objects between cmdlets.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The -eq operator in PowerShell means 'equals.'",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "To import CSV data, the add-content cmdlet is used in PowerShell.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "WSH supports scripts written in both Perl and Python by default.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "PowerShell can only execute commands available in cmd.exe.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "WS-MAN remoting in PowerShell is dependent on the WinRM service.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Export-CSV creates a CSV file from objects in PowerShell.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Named arguments can be passed to PowerShell scripts.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ]
  },
  {
    "question": "What is the primary purpose of Windows Script Host (WSH)?",
    "answers": [
      { "text": "To compile scripts for the operating system", "correct": false },
      { "text": "To execute batch files in Linux environments", "correct": false },
      { "text": "To automate parts of the core operating system", "correct": true },
      { "text": "To replace PowerShell scripts", "correct": false },
      { "text": "To install third-party software", "correct": false }
    ]
  },
  {
    "question": "Which scripting host outputs text to dialog boxes by default?",
    "answers": [
      { "text": "cscript.exe", "correct": false },
      { "text": "PowerShell", "correct": false },
      { "text": "bash.exe", "correct": false },
      { "text": "wscript.exe", "correct": true },
      { "text": "cmd.exe", "correct": false }
    ]
  },
  {
    "question": "What does the cmdlet Export-CSV do in PowerShell?",
    "answers": [
      { "text": "Reads a CSV file and stores it in a variable", "correct": false },
      { "text": "Appends data to an existing CSV file", "correct": false },
      { "text": "Creates a CSV file from objects", "correct": true },
      { "text": "Converts a CSV file into text format", "correct": false },
      { "text": "Deletes the contents of a CSV file", "correct": false }
    ]
  },
  {
    "question": "Which of the following PowerShell commands retrieves all currently running services?",
    "answers": [
      { "text": "Get-RunningServices", "correct": false },
      { "text": "Get-ActiveServices", "correct": false },
      { "text": "Get-Service | Where-Object { $_.Status -eq 'Running' }", "correct": true },
      { "text": "Find-Service -Running", "correct": false },
      { "text": "Show-Services", "correct": false }
    ]
  },
  {
    "question": "Which operator in PowerShell is used to perform a wildcard comparison?",
    "answers": [
      { "text": "-eq", "correct": false },
      { "text": "-like", "correct": true },
      { "text": "-ne", "correct": false },
      { "text": "-gt", "correct": false },
      { "text": "-le", "correct": false }
    ]
  },
  {
    "question": "What does the command Set-ExecutionPolicy Unrestricted do?",
    "answers": [
      { "text": "Restricts script execution", "correct": false },
      { "text": "Allows only signed scripts to run", "correct": false },
      { "text": "Allows any script to run without restrictions", "correct": true },
      { "text": "Enables remote script execution", "correct": false },
      { "text": "Removes all execution policies", "correct": false }
    ]
  },
  {
    "question": "What is the result of the following PowerShell command? Get-Content file.txt | Measure-Object -Line",
    "answers": [
      { "text": "Counts the number of words in file.txt", "correct": false },
      { "text": "Outputs the size of file.txt in bytes", "correct": false },
      { "text": "Counts the number of lines in file.txt", "correct": true },
      { "text": "Formats file.txt for display", "correct": false },
      { "text": "Filters lines containing specific keywords", "correct": false }
    ]
  },
  {
    "question": "What is required to run a .ps1 script that includes named arguments?",
    "answers": [
      { "text": "Use the Execute cmdlet", "correct": false },
      { "text": "Provide the argument names and values explicitly", "correct": true },
      { "text": "Set execution policy to 'Restricted'", "correct": false },
      { "text": "Use Start-Script", "correct": false },
      { "text": "Arguments must be passed via pipeline", "correct": false }
    ]
  },
  {
    "question": "Which feature of PowerShell allows passing objects between cmdlets?",
    "answers": [
      { "text": "Streams", "correct": false },
      { "text": "Filters", "correct": false },
      { "text": "Pipeline", "correct": true },
      { "text": "FileSystem", "correct": false },
      { "text": "Modules", "correct": false }
    ]
  },
  {
    "question": "Which cmdlet would you use to start a PowerShell remoting session?",
    "answers": [
      { "text": "Enable-PSSession", "correct": false },
      { "text": "Enter-RemoteCommand", "correct": false },
      { "text": "Enter-PSSession", "correct": true },
      { "text": "Start-WSManSession", "correct": false },
      { "text": "Get-RemoteSession", "correct": false }
    ]
  },
  {
    "question": "PowerShell pipelines pass text between cmdlets, not objects.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The cmdlet Import-CSV reads the contents of a CSV file into an array of objects.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Set-ExecutionPolicy Restricted allows only signed scripts to run.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "PowerShell supports loops, including While, For, and Do While.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The command Exit-PSSession terminates a remote PowerShell session.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "To manipulate the Windows Registry, you must use WMI in PowerShell.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "PowerShell cmdlets always follow the format Verb-Noun.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Add-Content cmdlet replaces the content of a file.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In PowerShell, $_ refers to the current object in a pipeline.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You can only use PowerShell on Windows operating systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Which cmdlet in PowerShell retrieves help information about a specific cmdlet?",
    "answers": [
      { "text": "Get-Help", "correct": true },
      { "text": "Get-Command", "correct": false },
      { "text": "Help-Command", "correct": false },
      { "text": "Retrieve-Help", "correct": false },
      { "text": "Show-Help", "correct": false }
    ]
  },
  {
    "question": "What is the default execution policy in PowerShell?",
    "answers": [
      { "text": "Unrestricted", "correct": false },
      { "text": "RemoteSigned", "correct": false },
      { "text": "Restricted", "correct": true },
      { "text": "AllSigned", "correct": false },
      { "text": "Undefined", "correct": false }
    ]
  },
  {
    "question": "What must be done before using Enable-PSRemoting in a networked environment?",
    "answers": [
      { "text": "Install a third-party tool", "correct": false },
      { "text": "Configure Windows Task Scheduler", "correct": false },
      { "text": "Enable WinRM", "correct": true },
      { "text": "Run the cmdlet without prerequisites", "correct": false },
      { "text": "Restart the PowerShell session", "correct": false }
    ]
  },
  {
    "question": "Which cmdlet allows exporting objects to a file with a specific delimiter?",
    "answers": [
      { "text": "Add-Content", "correct": false },
      { "text": "Export-File", "correct": false },
      { "text": "Export-CSV", "correct": true },
      { "text": "Export-Object", "correct": false },
      { "text": "Export-Table", "correct": false }
    ]
  },
  {
    "question": "What is the function of Start-Job in PowerShell?",
    "answers": [
      { "text": "Start a new service", "correct": false },
      { "text": "Launch a GUI application", "correct": false },
      { "text": "Run a background task asynchronously", "correct": true },
      { "text": "Schedule a task in Task Scheduler", "correct": false },
      { "text": "Begin remote debugging", "correct": false }
    ]
  },
  {
    "question": "Which command appends data to an existing file in PowerShell?",
    "answers": [
      { "text": "Set-Content", "correct": false },
      { "text": "Replace-File", "correct": false },
      { "text": "Append-Content", "correct": false },
      { "text": "Add-Content", "correct": true },
      { "text": "Write-File", "correct": false }
    ]
  },
  {
    "question": "What does the cmdlet Stop-Process -Name notepad do?",
    "answers": [
      { "text": "Closes all open processes on the system", "correct": false },
      { "text": "Suspends the Notepad application temporarily", "correct": false },
      { "text": "Terminates all instances of Notepad", "correct": true },
      { "text": "Deletes the Notepad executable from the system", "correct": false },
      { "text": "Renames the Notepad process", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a key advantage of using PowerShell over traditional batch scripting?",
    "answers": [
      { "text": "Requires fewer system resources", "correct": false },
      { "text": "Supports only text-based operations", "correct": false },
      { "text": "Works exclusively on Windows 10 or later", "correct": false },
      { "text": "Processes and manipulates objects", "correct": true },
      { "text": "Requires no prior configuration", "correct": false }
    ]
  },
  {
    "question": "Which cmdlet creates a variable to store data for later use in PowerShell?",
    "answers": [
      { "text": "Set-Variable", "correct": true },
      { "text": "Store-Data", "correct": false },
      { "text": "New-Variable", "correct": false },
      { "text": "Create-Variable", "correct": false },
      { "text": "Save-Data", "correct": false }
    ]
  },
  {
    "question": "How do you run a PowerShell script from the command line?",
    "answers": [
      { "text": "Type the script name directly", "correct": false },
      { "text": "Use Run-Script", "correct": false },
      { "text": "Prefix the script name with .\\", "correct": true },
      { "text": "Open the script in Notepad and save it", "correct": false },
      { "text": "Scripts cannot be run from the command line", "correct": false }
    ]
  }
];
