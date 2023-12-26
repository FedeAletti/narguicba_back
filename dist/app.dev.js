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
              id_producto: 10 // aca iria una variable

            },
            data: {
              descripcion: "Carbones de coco - 250g" //aca iria lo que se quiere remplazar

            }
          }));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function consultaLista() {
  var productos, productosFiltrados;
  return regeneratorRuntime.async(function consultaLista$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(prisma.producto.findMany());

        case 2:
          productos = _context4.sent;
          // aca utilizo forEach para recorrer elemento x elemento
          productos.forEach(function (producto) {
            if (producto.marca === "Adalya") {
              // se puede utilizar una variable para poder filtrar
              console.log(producto);
            }
          });
          /*  se puede simplificar de la siguiente manera, pero no retorna toda la lista de productos 
              sino una lista filtrada*/

          _context4.next = 6;
          return regeneratorRuntime.awrap(prisma.producto.findMany({
            where: {
              marca: "Adalya"
            }
          }));

        case 6:
          productosFiltrados = _context4.sent;
          console.log(productosFiltrados);

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function consultaProducto() {
  var producto;
  return regeneratorRuntime.async(function consultaProducto$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(prisma.producto.findFirst({
            where: {
              id_producto: 14
            }
          }));

        case 2:
          producto = _context5.sent;

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}

main();