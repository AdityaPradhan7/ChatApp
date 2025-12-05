const mongoose = require('mongoose');

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@chatappcluster.mkvmhgl.mongodb.net/chatapp?retryWrites=true&w=majority&appName=ChatAppCluster`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to DB'))
  .catch((e) => console.log('Error', e));