const express = require('express');
const path = require('path');
const fs = require('fs'); 

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Middleware & Static Files
app.use(express.static(path.join(__dirname, 'public')));

// 2. Page Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'index.html')));
app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'views', 'about.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'views', 'contact.html')));

// 3. Task 2: Blog Route
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'blog.html'));
});

// 4. Task 2: API Route (Sends JSON data to the blog page)
app.get('/api/posts', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'data', 'posts.json');
        const postsData = fs.readFileSync(filePath, 'utf8');
        res.json(JSON.parse(postsData));
    } catch (err) {
        console.error("Error reading posts file:", err);
        res.status(500).json({ error: "Failed to load blog posts" });
    }
});

// 5. Start Server (Always at the bottom)
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});