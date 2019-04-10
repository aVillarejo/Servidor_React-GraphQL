import mongoose from "mongoose";

mongoose.Promise = global.Promise;
const URI =
  "mongodb+srv://AdminAV:soporte123$@clusterav-qx4cd.mongodb.net/CRM_DB?retryWrites=true";
const local = "mongodb://localhost/CRM_db";
mongoose.connect(URI, { useNewUrlParser: true });
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
