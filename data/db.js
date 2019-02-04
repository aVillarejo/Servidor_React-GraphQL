import mongoose from "mongoose";

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/clientes", { useNewUrlParser: true });
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
  nombre: String,
  precio: Number,
  stock: Number
});

//Modelo de Clientes
const Clientes = mongoose.model("clientes", clientesSchema);

//Modelo de Productos
const Productos = mongoose.model("productos", productosSchema);

export { Clientes, Productos };
