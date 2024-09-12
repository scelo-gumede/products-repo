require("dotenv").config()
require("express-async-errors")
const mongoose=require("mongoose")
import  express  from "express";
import router from "./routes/product";
const app = express()



//routes
app.use("/api/v1",router)




// connect to DB 




const uri = "mongodb+srv://scelogumede95:72664453@practice.kmvig.mongodb.net/PRODUCTS?retryWrites=true&w=majority&appName=practice";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    app.listen(3000,()=> console.log("that it"))
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(err){
    // Ensures that the client will close when you finish/error
    console.error(err)
  }
}
run()
