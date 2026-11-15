require('dotenv').config();

const http = require('http');
const configDB = require('./config/db');
const app = require('./config/express');

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // Wait for MongoDB connection
        await configDB();

        // Create and start the Express server
        const server = http.createServer(app);

        server.listen(PORT, '0.0.0.0', () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error(
            "Failed to start server:",
            error.message
        );
        process.exit(1);
    }
}

startServer();
