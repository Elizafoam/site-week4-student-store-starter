/*
  Warnings:

  - The primary key for the `orders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `orders_id` on the `orders` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_order_id_fkey";

-- AlterTable
ALTER TABLE "orders" DROP CONSTRAINT "orders_pkey",
DROP COLUMN "orders_id",
ADD COLUMN     "order_id" SERIAL NOT NULL,
ADD CONSTRAINT "orders_pkey" PRIMARY KEY ("order_id");

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;