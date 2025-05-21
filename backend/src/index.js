const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');
const summarizeController = require('./controllers/summarizeController');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes);
app.post('/summarize', summarizeController);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
