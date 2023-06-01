import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { crearTabla } from "./conexion.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//const myapp = express();
const handler ={};

handler.generateCrud=(req,res)=>{
    console.log(req.body);
    const nombreTabla = req.body.tableName;
    const atributos = req.body.attributes;
    handler(nombreTabla, atributos);
    //compruebo si los tomo 
    console.log(nombreTabla, atributos);
    crearTabla(nombreTabla, atributos);
}
export default handler;