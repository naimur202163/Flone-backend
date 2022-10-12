const app = require("./app");



// handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shuting down the server due to `)
})


app.get("/", (req, res) => {
  res.send("Hello World!");
});


const server = app.listen(5000, () => {
  console.log(`the server is running on port 5000`);
});
