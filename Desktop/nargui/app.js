import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function createUser(){
    //CREATE USUARIO Y LUGAR (al igual que lo de abajo, insercion de datos de toda la vida)
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
    })
}

async function InsercionDato(){
    //INSECION (la inscercion de datos de toda la vida)
    await prisma.producto.create({
        data:{
            id_categoria: 3,
            marca: "Av. Hookah",
            descripcion: "Base Av. Hookah",
            precio: 15000,
            stock: 100
        }
    })
}

async function updateRegistro(){
    //Modificacion de registros (con un identificador o campo unico)
    await prisma.producto.update({
        where:{
            id_producto:10 // aca iria una variable
        },
        data: {
            descripcion: "Carbones de coco - 250g" //aca iria lo que se quiere remplazar
        }
    })
}

async function consultaLista(){
    //Aca se consulta todos los productos y te devuelve un array de objetos
    const productos = await prisma.producto.findMany(); 

    // aca utilizo forEach para recorrer elemento x elemento
    productos.forEach(producto =>{
       if( producto.marca==="Adalya"){ // se puede utilizar una variable para poder filtrar
        console.log(producto)
       }
    })

    /*  se puede simplificar de la siguiente manera, pero no retorna toda la lista de productos 
        sino una lista filtrada*/
    const productosFiltrados = await prisma.producto.findMany({
        where:{
            marca: "Adalya"
        }
    })
    console.log(productosFiltrados); 
}

async function consultaProducto(){
    //Aca solamente consulto x solo un elemento (el primero que encuentre) que cumpla la condicion 
   const producto = await prisma.producto.findFirst({
    where:{
        id_producto:14
    }
   });
}

main()