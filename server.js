const express = require('express');
const app = express();

// Use the port the environment wants, or default to 3000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('<h1>🚀 Capstone Project Live! Built by Group 1/3/5</h1><p>CI/CD is working perfectly!</p>');
});

// Basic Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke on our end!');
});

app.listen(PORT, () => {
    console.log(`Server is running beautifully on port ${PORT}`);
});