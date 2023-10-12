/*
  Warnings:

  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Service" DROP CONSTRAINT "Service_subCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_categoryId_fkey";

-- AlterTable
ALTER TABLE "Service" ADD COLUMN     "subCategory" TEXT;

-- DropTable
DROP TABLE "SubCategory";
