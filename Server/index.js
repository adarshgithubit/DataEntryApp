import express from "Express";
import dotenv from "dotenv";
import router from "./Routes/routes.js";
import Connection from "./database/Database.js";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();
dotenv.config();


app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use('/', router)

const PORT = 8080;


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, ()=>
console.log(`Server Running Succesfully ${PORT}`)
)

