module.exports = {
    logLevel: process.env.LOG_LEVEL || 'info',
    dynamoDB: {
        region: process.env.DYNAMO_DB_REGION || 'us-east-1',
        accessKeyId: process.env.DYNAMO_DB_ACCESS_KEY || "",
        secretAccessKey: process.env.DYNAMO_DB_SCRET_KEY || ""
    },
    mongodb:{
        "uri": "mongodb://localhost:27017/courses",
        "db": "courses",
        "option": {
          "useNewUrlParser": true,
          "useCreateIndex": true,
          "autoIndex": false,
          "reconnectTries": 25000,
          "reconnectInterval": 500,
          "poolSize": 100,
          "bufferMaxEntries": 0,
          "connectTimeoutMS": 10000,
          "socketTimeoutMS": 45000,
          "family": 4
        }
    }
};