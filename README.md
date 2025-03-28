# Backend Tutorial with Node.js:desktop_computer:
## About This Program

This program demonstrates a basic Node.js server implementation using Express framework. It creates a simple web server that listens on port 3000 and provides various endpoints to interact with JavaScript files.

## Technologies Used

1. **Node.js**: JavaScript runtime environment
2. **Express.js**: Web application framework for Node.js
3. **Child Process**: Module for executing shell commands
4. **File System (fs)**: Module for file operations
5. **Path**: Module for handling file paths

## How to Run

1. Make sure Node.js is installed on your system
2. Clone or download the repository
3. Open terminal and navigate to the project directory
4. Install dependencies by running:
   ```bash
   npm install express
   ```
5. Start the server by running:
   ```bash
   node index.js
   ```
6. The server will start and you can access it at:
   ```bash
   http://localhost:3000
   ```
7. The main page will show a list of available JavaScript files that can be executed
8. Click on any file link to execute the corresponding script

## Key Features

1. **File Execution**: Ability to run JavaScript files from the web interface
2. **Error Handling**: Proper error handling for file operations and script execution
3. **Dynamic Routing**: Routes are created dynamically based on available files
4. **Logging**: Detailed logging of script execution and errors
5. **Modular Structure**: Easy to extend and add new functionality