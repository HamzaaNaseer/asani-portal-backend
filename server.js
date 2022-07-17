const app = require("./app");
const connectToMongo = require("./config/db"); //function that upon calling will connect to our DB.
const dotenv = require("dotenv"); // for setting up enviroment variables

//setting the path to the env file
dotenv.config({ path: "config/config.env" });

//calling function to connect to database
connectToMongo();

//creating a server
app.listen(process.env.PORT, () => {
  console.log("server is running at port ", process.env.port);
});
