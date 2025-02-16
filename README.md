# WhatsApp Clone (MERN Stack)

This project is a web-based WhatsApp clone built using the MERN stack (MongoDB, Express.js, React, Node.js). It aims to replicate some of the core functionalities of WhatsApp, including a front-end chat interface, login, a status page, and a QR code-based loading screen. Additionally, it includes an integrated backend to fetch and store messages in a database.

## Project Status
This project is currently under development and is not yet fully functional.
The project development has stopped currently 
and will work on it later sometimes 


### Completed Functionalities:

#### Frontend:
- **Chat Page:** A user interface for displaying the chat list and individual chat windows (basic structure and database integration for messages).
- **Status Page:** A newly added feature for viewing and managing status updates.
- **Login Page:** Users can log in to the application (functionality connected with the database or mock user data).
- **Loading Screen with QR Code:** A loading screen that displays a QR code (currently for visual representation, linking to WhatsApp Web is not yet implemented).

#### Backend:
- Integrated backend using **Express.js** with MongoDB.
- Implemented `GET` and `POST` methods for fetching and storing messages in the database.

### Features in Progress:
- **Real-time Chat Functionality:** Implementing real-time message sending and receiving using **Socket.IO**.
- **Notifications:** Adding push notifications for new messages.

### Features Not Yet Developed:
- Group Chat
- Archived Chats
- File Sending and Receiving
- QR Code Scanning for Linking with WhatsApp Web
- End-to-End Encryption

---

## Technologies Used

### Front-end:
- React
- HTML
- CSS

### Back-end:
- Node.js
- Express.js

### Database:
- MongoDB

### Real-time Communication:
- **Socket.IO** (integration in progress)

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js (version 14 or higher recommended)
- npm (or yarn)
- MongoDB (make sure it's installed and running)

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lumber1ghauri/whatsapp-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd whatsapp-clone
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Create a `.env` file in the backend directory and add the following environment variables:
   ```
   PORT=5000
   MONGO_URI=<your_mongodb_connection_string>
   ```

5. Start the backend:
   ```bash
   cd backend
   npm start
   ```

6. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

---

## Usage
1. Visit `http://localhost:3000` (default React app port) to view the application.
2. Start with the loading screen that displays a QR code.
3. Use the login page to access the chat and status pages.
4. The chat page allows you to fetch and post messages using the database (basic functionality).
5. The status page allows you to view and manage user status updates.

---



This project has been terminated momentarily 
will work on it further 
If you want to check my Whatsapp web clone please refer to my another repository.

## Future Plans
- Complete the integration of real-time chat functionality using **Socket.IO**.
- Develop group chat, archived chats, and enhanced status features.
- Enable file sending and receiving.
- Add push notifications for new messages.
- Integrate QR code scanning to link with WhatsApp Web.
- Implement end-to-end encryption for enhanced security.

---

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and create a pull request.
