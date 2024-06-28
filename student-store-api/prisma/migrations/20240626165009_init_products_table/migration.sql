/*
  Warnings:

  - You are about to drop the column `order_id` on the `order_items` table. All the data in the column will be lost.
  - Added the required column `orders_id` to the `order_items` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_order_id_fkey";

-- AlterTable
ALTER TABLE "order_items" DROP COLUMN "order_id",
ADD COLUMN     "orders_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_orders_id_fkey" FOREIGN KEY ("orders_id") REFERENCES "orders"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;
