const questions = [
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
  // Continue for all 50+ questions, ensuring the answers and questions align.

  // True/False Questions
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
  // Continue similarly for all True/False questions...
];
