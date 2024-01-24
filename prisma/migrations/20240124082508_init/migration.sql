/*
  Warnings:

  - A unique constraint covering the columns `[login]` on the table `Company` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "users" TEXT[];

-- CreateIndex
CREATE UNIQUE INDEX "Company_login_key" ON "Company"("login");
