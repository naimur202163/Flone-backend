const app = require("./app");
const connectDatabase=require('./config/database')


// handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shuting down the server due to `)
})

// Database Connection
connectDatabase()


const server = app.listen(5000, () => {
  console.log(`the server is running on port 5000`);
});
