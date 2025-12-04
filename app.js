const express = require('express');
const fs = require('fs');
const path = require('path');

// Catch uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('💥 UNCAUGHT EXCEPTION:', error);
    process.exit(1);
});

// Catch unhandled promise rejections
process.on('unhandledRejection', (error) => {
    console.error('💥 UNHANDLED REJECTION:', error);
    process.exit(1);
});

console.log('1. Starting app...');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

console.log('2. Loading menu.json...');
const menuData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data', 'menu.json'), 'utf-8')
);
console.log('3. Menu loaded!');

app.get('/', (req, res) => {
    console.log("Home page accessed");
    res.render('pages/index', { title: 'Home Page' });
});

app.get('/menu', (req, res) => {
    console.log("Menu page accessed");
    res.render('pages/menu', {
        title: 'Menu Page',
        menu: menuData
    });
});

console.log('4. Starting server...');
const server = app.listen(3000, () => {
    console.log('✅ Server is running on http://localhost:3000');
    console.log('Server is listening...');
});

server.on('error', (error) => {
    console.error('💥 SERVER ERROR:', error);
});

// Keep it running
setInterval(() => {
    console.log('Still running...', new Date().toISOString());
}, 5000);