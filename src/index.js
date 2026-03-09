const express = require('express');
const app = express();
const connectDb = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');

connectDb();
app.use(express.json());
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



app.get('/health', (req, res) => {
    res.send('server is healthy');
});

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

