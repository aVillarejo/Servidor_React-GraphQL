import mongoose from "mongoose";

mongoose.Promise = global.Promise;

let mongoUserCredentials = "";
if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
  mongoUserCredentials = `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@`;
}

const MONGO_URL = process.env.MONGO_URL|| "localhost:27017" ;
const DB_NAME = process.env.MONGO_DB_NAME|| "CRM_DB"; 
const MONGO_CONNECTION_STRING = `mongodb://${mongoUserCredentials}${MONGO_URL}/${DB_NAME}`;

mongoose.connect(MONGO_CONNECTION_STRING, { useNewUrlParser: true });
mongoose.set("findAndModify", false);

//Definir schema de Clientes
const clientesSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  empresa: String,
  emails: Array,
  edad: Number,
  tipo: String,
  pedidos: Array
});

//Definir schema de Productos
const productosSchema = new mongoose.Schema({
  clave: String,
  nombre: String,
  precio: Number,
  stock: Number
});

//Modelo de Clientes
const Clientes = mongoose.model("clientes", clientesSchema);

//Modelo de Productos
const Productos = mongoose.model("productos", productosSchema);

export { Clientes, Productos };
