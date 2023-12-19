-- CreateTable
CREATE TABLE `producto` (
    `id_producto` INTEGER NOT NULL AUTO_INCREMENT,
    `id_categoria` INTEGER NOT NULL,
    `marca` VARCHAR(191) NOT NULL,
    `descripcion` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,
    `stock` INTEGER NOT NULL,
    `foto` VARCHAR(191) NOT NULL DEFAULT 'foto de hooka',

    PRIMARY KEY (`id_producto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `producto` ADD CONSTRAINT `producto_id_categoria_fkey` FOREIGN KEY (`id_categoria`) REFERENCES `categoria`(`id_categoria`) ON DELETE RESTRICT ON UPDATE CASCADE;
