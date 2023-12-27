import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    const usuarios = await prisma.usuario.findMany({
        include:{
            orden: true
        }
    })
    //console.log(usuarios)
    const productos = await prisma.producto.findMany();
    let productosFiltrados=[];
    productos.forEach(producto=>{
        if(producto.precio > 15000){
            productosFiltrados.push(producto)
        }
    })
    console.log(productosFiltrados.length);
}

main();