const mongoose = require('mongoose');

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;

    // Check if the MONGO_URI is defined
    if (!mongoUri) {
        console.error('Error: MONGO_URI environment variable is not defined');
        process.exit(1);
    }

    try {
        // Attempt to connect to MongoDB
        await mongoose.connect(mongoUri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        if (error instanceof mongoose.Error) {
            console.error('Mongoose error:', error.message);
        } else {
            console.error('Error connecting to MongoDB:', error.message);
        }
        process.exit(1);
    }
};



module.exports = { connectDB };
