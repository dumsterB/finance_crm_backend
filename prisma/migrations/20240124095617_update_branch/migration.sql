/*
  Warnings:

  - You are about to drop the column `login` on the `Branch` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Branch` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Branch_login_key";

-- AlterTable
ALTER TABLE "Branch" DROP COLUMN "login",
DROP COLUMN "password";
