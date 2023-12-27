"use strict";

var _client = require("@prisma/client");

var prisma = new _client.PrismaClient();

function main() {
  var usuarios, productos, productosFiltrados;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(prisma.usuario.findMany({
            include: {
              orden: true
            }
          }));

        case 2:
          usuarios = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(prisma.producto.findMany());

        case 5:
          productos = _context.sent;
          productosFiltrados = [];
          productos.forEach(function (producto) {
            if (producto.precio > 15000) {
              productosFiltrados.push(producto);
            }
          });
          console.log(productosFiltrados.length);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}

main();