-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "image_url" TEXT NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
