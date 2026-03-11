const questionBank = [
  {
    "question": "Recursion uses a loop?",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A C function must have a return value?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A C function uses a \"prototype\"?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The printf function is used to read input from the user in C.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A variable declared inside a function has global scope by default.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "int *p; means that p is a pointer to an integer.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The entry point, from the operating system, always starts with the main function.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The format specifier %c in scanf() can be used to read a string.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The if statement must always be followed by an else statement.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The condition inside an if statement must be enclosed in parentheses ().",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "If the condition of a while loop is always true, it results in an infinite loop.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The return 0; statement inside the main function indicates a successful program termination.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When using scanf() to read an integer, you must use the & operator before the variable name.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The expression array[i] is equivalent to *(array + i).",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Where you have the following declarations: int *ptrToFun; and int var = 0;, the assignment ptrToFun = &var; is valid.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The following declaration is valid: char *message = 1993;",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "ANSI C allows the programmer to access any addressable memory space on the computer.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Static variables are set at runtime.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "ANSI C is an excellent language for performing high level tasks on the internet.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In a Towers of Hanoi game, the optimal number of moves to solve a 5 disk puzzle is 63.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Which of the following words describes the C programming language?",
    "answers": [
      { "text": "Dynamic", "correct": false },
      { "text": "Distributed", "correct": false },
      { "text": "Compiled", "correct": true },
      { "text": "Machine language", "correct": false }
    ]
  },
  {
    "question": "After compiling a C source file, a file of which type is produced?",
    "answers": [
      { "text": "Object", "correct": true },
      { "text": "Native compiled file", "correct": false },
      { "text": "Source file", "correct": false },
      { "text": "Bytecode file", "correct": false }
    ]
  },
  {
    "question": "The code #include <stdio.h> is what type of command?",
    "answers": [
      { "text": "Function", "correct": false },
      { "text": "Method header", "correct": false },
      { "text": "Preprocessor command", "correct": true }
    ]
  },
  {
    "question": "How many operands does a unary operator affect?",
    "answers": [
      { "text": "1", "correct": true },
      { "text": "2", "correct": false },
      { "text": "3", "correct": false },
      { "text": "4", "correct": false }
    ]
  },
  {
    "question": "How many values can be returned from a C function without using pointers?",
    "answers": [
      { "text": "1", "correct": true },
      { "text": "2", "correct": false },
      { "text": "255", "correct": false },
      { "text": "unlimited", "correct": false }
    ]
  },
  {
    "question": "A recursive function requires:",
    "answers": [
      { "text": "End condition", "correct": false },
      { "text": "Recursive call", "correct": false },
      { "text": "A & B", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Register variables are used for what reason?",
    "answers": [
      { "text": "Because it is cool to use registers", "correct": false },
      { "text": "Direct access to the computer's backplane", "correct": false },
      { "text": "To take advantage of pointers", "correct": false },
      { "text": "To speed up execution", "correct": true }
    ]
  },
  {
    "question": "In an ANSI C program, the code: for(;;){}",
    "answers": [
      { "text": "Is invalid", "correct": false },
      { "text": "Is a post test loop", "correct": false },
      { "text": "Is an infinite loop", "correct": true },
      { "text": "All above are incorrect", "correct": false }
    ]
  },
  {
    "question": "If a pointer is defined using int *xPtr = 2468;, what is the value stored at the pointer location?",
    "answers": [
      { "text": "2468", "correct": false },
      { "text": "Don’t know the value", "correct": true },
      { "text": "The 'junk' at the memory location from a previous operation", "correct": false },
      { "text": "More than one answer is correct", "correct": false }
    ]
  },
  {
    "question": "If you perform an explicit cast from a real number to a whole number, what will you possibly lose?",
    "answers": [
      { "text": "Precision", "correct": false },
      { "text": "Any values after the decimal point", "correct": false },
      { "text": "Nothing will be lost", "correct": false },
      { "text": "More than one answer is correct", "correct": true }
    ]
  },
  {
    "question": "Header files are used to:",
    "answers": [
      { "text": "Store additional code for a program to use", "correct": false },
      { "text": "Store variables", "correct": false },
      { "text": "Store comments", "correct": false },
      { "text": "Link pre compiled/linked libraries to use in the program", "correct": true }
    ]
  },
  {
    "question": "A cast operation is used to force an:",
    "answers": [
      { "text": "Implicit type conversion", "correct": false },
      { "text": "Explicit type conversion", "correct": true },
      { "text": "Precision", "correct": false },
      { "text": "Accuracy", "correct": false }
    ]
  },
  {
    "question": "In scanf(\"%d\", &num1); the & indicates a:",
    "answers": [
      { "text": "Pointer", "correct": false },
      { "text": "Declaration of integer", "correct": false },
      { "text": "String", "correct": false },
      { "text": "Address operator", "correct": true }
    ]
  },
  {
    "question": "Which one of the following is an ANSI C logical operator?",
    "answers": [
      { "text": ">=", "correct": false },
      { "text": "&&", "correct": false },
      { "text": "||", "correct": false },
      { "text": "More than one of the choices is logical", "correct": true }
    ]
  },
  {
    "question": "Which of the following is a post test loop?",
    "answers": [
      { "text": "For(;;) {}", "correct": false },
      { "text": "While(cond) {}", "correct": false },
      { "text": "Do/while(cond) {}", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "A function that calls another function is the",
    "answers": [
      { "text": "Called function", "correct": false },
      { "text": "Calling function", "correct": true },
      { "text": "Main function", "correct": false },
      { "text": "Pass by reference", "correct": false }
    ]
  },
  {
    "question": "Scope is the area of the program where:",
    "answers": [
      { "text": "The methods are stored", "correct": false },
      { "text": "Where global variables are all stored properly", "correct": false },
      { "text": "The area where variables are \"known\"", "correct": true },
      { "text": "Not a real area of the program", "correct": false }
    ]
  },
  {
    "question": "In \"???\" a called function receives values from its calling function, stores the passed values in its own local parameters, manipulates these parameters appropriately, and directly returns, at most, a single value.",
    "answers": [
      { "text": "Pass by reference", "correct": false },
      { "text": "Pass by value", "correct": true },
      { "text": "Pass to main", "correct": false },
      { "text": "Pass to wide receiver", "correct": false }
    ]
  },
  {
    "question": "When a single ANSI C function calls itself it is called",
    "answers": [
      { "text": "Direct recursion", "correct": true },
      { "text": "Indirect recursion", "correct": false },
      { "text": "Mutual recursion", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Recursive programs must have two parts. What are those parts?",
    "answers": [
      { "text": "Recursive call and end condition", "correct": true },
      { "text": "Post test loop and end condition", "correct": false },
      { "text": "Pre test loop and recursive call", "correct": false },
      { "text": "Pre test loop and end condition", "correct": false }
    ]
  },
  {
    "question": "To solve a recursive problem, what must be true?",
    "answers": [
      { "text": "The problem gets increasingly larger", "correct": false },
      { "text": "The problem gets continually smaller", "correct": false },
      { "text": "The problem must end", "correct": false },
      { "text": "A & C", "correct": true },
      { "text": "B & C", "correct": false }
    ]
  },
  {
    "question": "The Towers of Hanoi problem has characteristics, which are:",
    "answers": [
      { "text": "Single recursive and optimal", "correct": true },
      { "text": "Mutual recursive, exponential and optimal", "correct": false },
      { "text": "Mutual recursive and iterative", "correct": false },
      { "text": "Single recursive, non-optimal and logarithmic", "correct": false }
    ]
  },
  {
    "question": "What is the correct command to compile and run this C program?",
    "answers": [
      { "text": "lab2_studentname_TAname gcc lab2_studentname_TAname.c -o", "correct": false },
      { "text": "gcc lab2_studentname_TAname.c -o lab2_studentname_TAname then run ./lab2_studentname_TAname", "correct": true },
      { "text": "gcc lab2_studentname_TAname.c -o lab2_studentname_TAname ./lab2_studentname_TAname", "correct": false },
      { "text": "lab2_studentname_TAname.o lab2_studentname_TAname.c -o ./lab2_studentname_TAname.c", "correct": false }
    ]
  },
  {
    "question": "Based on the code above, choose the correct statement.",
    "answers": [
      { "text": "The code will not work because the gcc compiler does not recognize multiple printf() and scanf() functions in a single program.", "correct": false },
      { "text": "The program will terminate immediately after printing the first prompt.", "correct": false },
      { "text": "The program runs in an infinite loop until the user enters 'n' or 'N'.", "correct": true },
      { "text": "The while loop will only execute once, regardless of user input.", "correct": false },
      { "text": "C and D", "correct": false }
    ]
  },
  {
    "question": "What will happen if the user enters 'x' as input?",
    "answers": [
      { "text": "The program will crash due to an invalid character input.", "correct": false },
      { "text": "The program will display \"Invalid input. Please enter 'y' or 'n'.\" and prompt again.", "correct": true },
      { "text": "The program will return and display 'y'.", "correct": false },
      { "text": "The program will terminate immediately.", "correct": false },
      { "text": "None of these", "correct": false }
    ]
  },
  {
    "question": "What happens when the user enters 'n'?",
    "answers": [
      { "text": "The program ignores the input and continues looping.", "correct": false },
      { "text": "The program continues as if the user entered 'y'.", "correct": false },
      { "text": "The program enters an infinite loop without stopping.", "correct": false },
      { "text": "The program does not display anything on the terminal.", "correct": false },
      { "text": "None of these", "correct": true }
    ]
  },
  {
    "question": "Which of the following modifications would make the program terminate after a single iteration, regardless of user input?",
    "answers": [
      { "text": "Leave the return 0; inside the if statement where 'n' or 'N' is selected. Enter 'n' or 'N' at prompt.", "correct": false },
      { "text": "Adding a return 0 if the input is 'y' or 'Y'. Enter 'y' or 'Y' at prompt.", "correct": false },
      { "text": "No changes but input 'x' or 'X' to the current program.", "correct": false },
      { "text": "A and B", "correct": true },
      { "text": "A and C", "correct": false }
    ]
  },
  {
    "question": "What can be a pointer in ANSI C?",
    "answers": [
      { "text": "Variable", "correct": false },
      { "text": "Array", "correct": false },
      { "text": "String", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": "If you have a declaration int *hello;, what does hello represent?",
    "answers": [
      { "text": "A pointer variable", "correct": true },
      { "text": "A value", "correct": false },
      { "text": "An address", "correct": false },
      { "text": "More than one of the above", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "If you have a declaration int *hello;, what does *hello represent?",
    "answers": [
      { "text": "A pointer variable", "correct": false },
      { "text": "A value", "correct": true },
      { "text": "An address", "correct": false },
      { "text": "More than one of the above", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "What is a good and valid way to name a pointer variable that corresponds to a variable val?",
    "answers": [
      { "text": "int *val;", "correct": false },
      { "text": "int *ptrVal;", "correct": true },
      { "text": "int *Value is Nothing", "correct": false },
      { "text": "int *value()", "correct": false }
    ]
  },
  {
    "question": "An alternative to fixed memory allocation in which memory space grows or diminishes during program execution is called:",
    "answers": [
      { "text": "An array compile time allocation", "correct": false },
      { "text": "Dynamic allocation", "correct": true },
      { "text": "Scalar allocation", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "For a pointer addrPtr, using the indirection operator *addrPtr refers to the:",
    "answers": [
      { "text": "Pointer", "correct": false },
      { "text": "Address", "correct": false },
      { "text": "Value", "correct": true },
      { "text": "Low memory", "correct": false }
    ]
  }

];