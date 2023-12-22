import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extends:true}));
app.use(bodyParser.json());

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`);
})

app.get('/', (req,res)=>{
    res.send("hola usuario")
})

app.post('/inicio', (req,res)=>{
    const {username} = req.body;
    res.send({msg: `Bienvenido ${username}`});
})

