const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const getImageRoutes = require('./routes/getImageRouter');
const uploadImageRoutes = require('./routes/uploadImageRouter');
const deleteImageRoutes = require('./routes/deleteImageRouter');
const apiCheckRouter = require('./routes/apiRoute');

const app = express();

// Enable CORS for all requests
app.use(cors());
const corsOptions = {
  origin: 'https://storiesofragooty.com' // Allow requests from this domain
};

// Enable CORS for specific domain
app.use(cors(corsOptions));

// Increase payload size limit
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/getImages', getImageRoutes);
app.use('/api', apiCheckRouter);
app.use('/uploadImages', uploadImageRoutes);
app.use('/deleteImages', deleteImageRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
