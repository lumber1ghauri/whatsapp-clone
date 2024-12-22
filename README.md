# WhatsApp Clone (MERN Stack)

This project is a web-based WhatsApp clone built using the MERN stack (MongoDB, Express.js, React, Node.js). It aims to replicate some of the core functionalities of WhatsApp, including a front-end chat interface, login, and a QR code-based loading screen.

## Project Status

**This project is currently under development and is not yet fully functional.**

**Completed Functionalities:**

*   **Front-end Chat Page:** A basic user interface for displaying the chat list and individual chat windows (visual structure only, no real-time chat yet).
*   **Login Page:** Users can log in to the application (functionality connected with the database or mock user data).
*   **Loading Screen with QR Code:** A loading screen that displays a QR code (currently for visual representation, linking to WhatsApp Web is not yet implemented).

**Features Not Yet Developed:**

*   **Real-time Chat Functionality:**
    *   Implementing real-time message sending and receiving using Socket.IO.
*   **Other Pages/Sections:**
    *   Group Chat
    *   Status
    *   Archived Chats
*   **File Send and Receive:**
    *   Ability to send and receive media files (images, videos, documents).
*   **Linking QR Code Functionality with WhatsApp Web.**
*   **Notifications:** Implementing push notifications for new messages.
*   **End-to-End Encryption:**  Adding encryption for security and privacy.

## Technologies Used

*   **Front-end:**
    *   React
    *   HTML
    *   CSS
*   **Back-end:**
    *   Node.js
    *   Express.js
*   **Database:**
    *   MongoDB
*   **Real-time Communication:**
    *   Socket.IO (planned)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (version 14 or higher recommended)
*   npm (or yarn)
*   MongoDB (make sure it's installed and running)

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/lumber1ghauri/whatsapp-clone.git](https://github.com/lumber1ghauri/whatsapp-clone.git)
    ```

2.  Navigate to the project directory:
    ```bash
    cd whatsapp-clone
    ```

3.  Install dependencies:
    ```bash
    npm install
    ```
    (or `yarn install` if using yarn)
4.  Start the application:
    ```bash
    npm start
    ```
    (or `yarn start`)

## Usage

*   The application will start on `http://localhost:3000` (or the port specified in your `.env` file).
*   You will be presented with a basic loading screen showing a QR code (currently not functional).
*   Click on the QR Image to enter in the Chat Page UI
*   Use the login page to access the basic chat page UI (chat functionality is not yet implemented).

## Future Plans

*   Implement real-time chat functionality using Socket.IO.
*   Develop group chat, status, and archived chats sections.
*   Enable file sending and receiving.
*   Integrate QR code scanning to link with WhatsApp Web.
*   Add end-to-end encryption for enhanced security.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.
