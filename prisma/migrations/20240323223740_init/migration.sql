/*
  Warnings:

  - You are about to drop the `ProcessFamily` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProcessFamily" DROP CONSTRAINT "ProcessFamily_childProcessId_fkey";

-- DropForeignKey
ALTER TABLE "ProcessFamily" DROP CONSTRAINT "ProcessFamily_parentProcessId_fkey";

-- AlterTable
ALTER TABLE "Process" ADD COLUMN     "parentId" INTEGER;

-- DropTable
DROP TABLE "ProcessFamily";

-- AddForeignKey
ALTER TABLE "Process" ADD CONSTRAINT "Process_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Process"("id") ON DELETE SET NULL ON UPDATE CASCADE;
