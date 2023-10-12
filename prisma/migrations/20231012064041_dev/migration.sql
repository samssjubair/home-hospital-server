/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `users` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "users_imageUrl_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "imageUrl";
