const questionBank = {
    mcqs: [
      {
        question: "Which of the following is a scripting host in Windows Script Host (WSH)?",
        options: ["WMI", "WinRM", "cscript.exe", "Batch.exe", "Python"],
        answer: "cscript.exe",
      },
      {
        question: "What is the default scripting language supported by WSH in Windows?",
        options: ["Python", "VBScript", "PerlScript", "JavaScript", "PowerShell"],
        answer: "VBScript",
      },
      {
        question: "Which cmdlet is used to list all available cmdlets in PowerShell?",
        options: ["Get-Help", "Get-Command", "Set-Cmdlet", "Find-Module", "Import-Command"],
        answer: "Get-Command",
      },
      {
        question: "Which PowerShell cmdlet allows you to stop a specific service?",
        options: ["Stop-Service", "Halt-Service", "Disable-Service", "Terminate-Service", "Pause-Service"],
        answer: "Stop-Service",
      },
      {
        question: "PowerShell cmdlets are always written in which format?",
        options: ["Verb-Adjective", "Verb-Noun", "Noun-Verb", "Adjective-Verb", "Action-Object"],
        answer: "Verb-Noun",
      },
      {
        question: "What is the file extension for PowerShell scripts?",
        options: [".bat", ".cmd", ".ps1", ".vbs", ".sh"],
        answer: ".ps1",
      },
      {
        question: "Which of the following operations is NOT a feature of PowerShell pipeline?",
        options: ["Filtering", "Formatting", "Aggregating", "Outputting", "Pipelining text instead of objects"],
        answer: "Pipelining text instead of objects",
      },
      {
        question: "Which command is used to enable PowerShell remoting?",
        options: ["Enable-RemoteAccess", "Enable-PSSession", "Enable-PSRemoting", "Set-WSManQuickConfig", "Start-RemoteAccess"],
        answer: "Enable-PSRemoting",
      },
      {
        question: "Which scripting engine supports scripts written in VBScript or Jscript?",
        options: ["Batch", "WSH", "WinRM", "WMI", "CRON"],
        answer: "WSH",
      },
      {
        question: "Which of the following is a PowerShell comparison operator?",
        options: ["-eq", "-match", "-gte", "-lt", "All of the above"],
        answer: "All of the above",
      },
      {
        question: "In Windows, how are scripts executed by default in the graphical scripting host?",
        options: [
          "By running cmd.exe",
          "By double-clicking the script file",
          "By executing scripts in a batch file",
          "By typing the script name in Command Prompt",
          "By entering the PowerShell environment",
        ],
        answer: "By double-clicking the script file",
      },
      {
        question: "What happens if a script’s digital signature verification fails in WSH?",
        options: [
          "The script is ignored and deleted.",
          "The script is executed with warnings.",
          "The script execution is paused for manual verification.",
          "The script is logged for future evaluation.",
          "Nothing happens; the script executes.",
        ],
        answer: "The script execution is paused for manual verification.",
      },
      {
        question: "Which cmdlet is used to see the properties and methods of an object in PowerShell?",
        options: ["Get-Properties", "Get-Details", "Get-Object", "Get-Member", "Inspect-Object"],
        answer: "Get-Member",
      },
      {
        question: "What does the PowerShell command import-csv do?",
        options: [
          "Converts an object into a CSV file",
          "Reads a CSV file and creates an object array",
          "Exports an object to a CSV file",
          "Copies a CSV file to another location",
          "Parses plain text into CSV format",
        ],
        answer: "Reads a CSV file and creates an object array",
      },
      {
        question: "Which protocol does WS-MAN remoting use in PowerShell?",
        options: ["SMB", "HTTP/HTTPS", "FTP", "RPC", "DCOM"],
        answer: "HTTP/HTTPS",
      },
      {
        question: "What does $_.Status represent in a pipelined PowerShell command?",
        options: [
          "Current user’s session status",
          "A placeholder for a specific service status",
          "A command's execution state",
          "A script's debug state",
          "None of the above",
        ],
        answer: "A placeholder for a specific service status",
      },
      {
        question: "What does the get-content cmdlet do?",
        options: ["Writes content to a file", "Reads the content of a file into an array", "Appends content to a file", "Deletes the content of a file", "Sets the file content"],
        answer: "Reads the content of a file into an array",
      },
      {
        question: "In a For Each loop, what does the $object variable signify?",
        options: [
          "The total number of objects processed",
          "The index of the current object",
          "The current object being iterated over",
          "The type of object in the loop",
          "None of the above",
        ],
        answer: "The current object being iterated over",
      },
      {
        question: "Which PowerShell execution policy only allows digitally signed scripts to run?",
        options: ["Restricted", "AllSigned", "RemoteSigned", "Unrestricted", "Bypass"],
        answer: "RemoteSigned",
      },
      {
        question: "What is required to execute a PowerShell script in the current directory?",
        options: ["Start-ExecutionPolicy", "Add-PathVariable", "Prefix the script name with ./", "Enable-ScriptExecution", "None of the above"],
        answer: "Prefix the script name with ./",
      },
    ],
    applicationQuestions: [
      {
        question: "You need to verify that a PowerShell script has not been altered since its creation. What should you check?",
        options: ["Execution policy", "Digital signature", "Script permissions", "Object properties", "Cmdlet syntax"],
        answer: "Digital signature",
      },
      {
        question: "A script is failing to execute on a remote machine. You suspect remoting is not enabled. Which command will you run?",
        options: ["Set-ExecutionPolicy", "Enable-PSRemoting", "Start-WSManSession", "Enter-PSSession", "Get-WinRM"],
        answer: "Enable-PSRemoting",
      },
      {
        question: "You want to read the contents of a text file line by line in PowerShell. Which cmdlet should you use?",
        options: ["Set-Content", "Get-Content", "Import-CSV", "Export-CSV", "Out-File"],
        answer: "Get-Content",
      },
      {
        question: "How can you append new data to an existing file in PowerShell?",
        options: ["Replace-Content", "Add-Content", "Set-Content", "Append-File", "Write-Host"],
        answer: "Add-Content",
      },
      {
        question: "A script needs to schedule execution at a specific time every day. Which tool is most appropriate?",
        options: ["Windows Task Scheduler", "PowerShell remoting", "WSH", "CRON", "Batch scripting"],
        answer: "Windows Task Scheduler",
      },
      {
        question: "Which command allows you to stop a remote PowerShell session?",
        options: ["Exit-Session", "Stop-Remote", "End-PSRemoting", "Exit-PSSession", "Disable-RemoteSession"],
        answer: "Exit-PSSession",
      },
      {
        question: "You want to check running services and format the output in a table. Which of the following is correct?",
        options: ["Get-Service | Format-Table", "Get-Service -Format Table", "Get-Service | Table-Format", "Format-Service | Get-Table", "Table | Format-GetService"],
        answer: "Get-Service | Format-Table",
      },
      {
        question: "You need to iterate over each line in a CSV file. Which structure is most suitable in PowerShell?",
        options: ["While Loop", "For Loop", "Do While Loop", "Foreach Loop", "Infinite Loop"],
        answer: "Foreach Loop",
      },
      {
        question: "Which cmdlet is used to create a new object in PowerShell?",
        options: ["New-Cmdlet", "New-Object", "Create-Object", "Add-Member", "Init-Object"],
        answer: "New-Object",
      },
      {
        question: "What is the correct syntax for assigning an integer value to a variable in PowerShell?",
        options: ["[int]$Var = 10", "int$Var = 10", "$Var = 10 (integer)", "[integer]Var = 10", "Var = 10"],
        answer: "[int]$Var = 10",
      },
    ],
  };
  
  export default quizData;
  