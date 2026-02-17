const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// FIX: Added double underscores to __dirname
app.use(express.static(path.join(__dirname, 'public')));

// Define routes for different pages
app.get('/', (req, res) => {
    // FIX: Added double underscores to __dirname
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
    // FIX: Added double underscores to __dirname
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
    // FIX: Added double underscores to __dirname
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});