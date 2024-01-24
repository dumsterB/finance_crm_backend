/*
  Warnings:

  - Added the required column `branch_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "branch_id" TEXT NOT NULL,
ADD COLUMN     "company_id" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;
