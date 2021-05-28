#!/usr/bin/env node

/**
 * Module dependencies.
 */

import app from './app';
import http from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { seed } from './database/seeder'

/**
 * Get port from environment and store in Express.
 */

dotenv.config()
const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Connection with database and listen on provided port, on all network interfaces.
 */

const connectionString = process.env.CONNECTION_STRING || 'mongodb://localhost/challengeSophos';
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, async () => {
    console.log('Succesful connection with database')
    await seed()
    server.listen(port, () => {
        console.log(`Server running on port ${port}`)
    });
});
server.on('error', onError);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
const port = parseInt(val, 10);

if (isNaN(port)) {
    // named pipe
    return val;
}

if (port >= 0) {
    // port number
    return port;
}

return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
if (error.syscall !== 'listen') {
    throw error;
}

const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

// handle specific listen errors with friendly messages
switch (error.code) {
    case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
    case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
    default:
    throw error;
}
}
 