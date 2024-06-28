/*
  Warnings:

  - You are about to alter the column `price` on the `order_items` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `total_price` on the `orders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "order_items" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "orders" ALTER COLUMN "total_price" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "products" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;
