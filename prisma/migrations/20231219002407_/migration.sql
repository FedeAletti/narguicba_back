-- CreateTable
CREATE TABLE `lugar` (
    `id_lugar` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `pais` VARCHAR(191) NOT NULL,
    `provincia` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `lugar_id_usuario_key`(`id_usuario`),
    PRIMARY KEY (`id_lugar`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lugar` ADD CONSTRAINT `lugar_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE RESTRICT ON UPDATE CASCADE;
