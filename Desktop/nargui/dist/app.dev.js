"use strict";

var _client = require("@prisma/client");

var prisma = new _client.PrismaClient();

function createUser() {
  return regeneratorRuntime.async(function createUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(prisma.usuario.create({
            data: {
              nombre: "ElSucio",
              apellido: "Sam",
              email: "elsuciosam@gmail.com",
              telefono: "3426669999",
              edad: "12",
              lugar: {
                create: {
                  pais: "Argentina",
                  provincia: "Santa Fe"
                }
              }
            }
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function InsercionDato() {
  return regeneratorRuntime.async(function InsercionDato$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(prisma.producto.create({
            data: {
              id_categoria: 3,
              marca: "Av. Hookah",
              descripcion: "Base Av. Hookah",
              precio: 15000,
              stock: 100
            }
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function updateRegistro() {
  return regeneratorRuntime.async(function updateRegistro$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(prisma.producto.update({
            where: {
              id_producto: 10
            },
            data: {
              descripcion: "Carbones de coco - 250g"
            }
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function consulta() {
  var productos, producto;
  return regeneratorRuntime.async(function consulta$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(prisma.producto.findMany());

        case 2:
          productos = _context4.sent;
          productos.forEach(function (producto) {
            if (producto.marca === "Adalya") {
              console.log(producto);
            }
          }); //Consulta con filtro (un solo registro)

          _context4.next = 6;
          return regeneratorRuntime.awrap(prisma.producto.findFirst({
            where: {
              id_producto: 14
            }
          }));

        case 6:
          producto = _context4.sent;

          if (producto.stock >= 100) {
            //esto seria stock pedido >= (stock-stock pedido) y luego lllamo a funcion reducir stock
            console.log("Se puede comprar");
          } else {
            console.log("No se puede comprar");
          }

          console.log(producto);

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  });
}

main();