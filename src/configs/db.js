const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://monu:monu@cluster0.ig48q.mongodb.net/?retryWrites=true&w=majority"
    
  );
};
