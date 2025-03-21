const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/yourDatabaseName";  // Replace with your database name

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => console.error("❌ MongoDB Connection Error:", err));

module.exports = mongoose;
