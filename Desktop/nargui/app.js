import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
    /*CREATE USUARIO Y LUGAR (al igual que lo de abajo, insercion de datos de toda la vida)
    await prisma.usuario.create({
        data:{
            nombre:"ElSucio",
            apellido:"Sam",
            email:"elsuciosam@gmail.com",
            telefono:"3426669999",
            edad:"12",
            lugar:{
                create:{
                    pais:"Argentina",
                    provincia:"Santa Fe"
                }
            }
        }
    })*/
  
    /* INSECION (la inscercion de datos de toda la vida)
    await prisma.producto.create({
        data:{
            id_categoria: 3,
            marca: "Av. Hookah",
            descripcion: "Base Av. Hookah",
            precio: 15000,
            stock: 100
        }
    })
    */

    /* Modificacion de registros (con un identificador o campo unico)
    await prisma.producto.update({
        where:{
            id_producto:10
        },
        data: {
            descripcion: "Carbones de coco - 250g"
        }
    })
    */
   /*
    Consultas con filtro
    const productos = await prisma.producto.findMany(); 
    productos.forEach(producto =>{
       if( producto.marca==="Adalya"){
        console.log(producto)
       }
    })
    */
}
main()