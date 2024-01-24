-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "branch_ids" TEXT[],

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);
