/*
  Warnings:

  - You are about to drop the column `read` on the `JobApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobApplication" DROP COLUMN "read";
ALTER TABLE "JobApplication" ADD COLUMN     "status" STRING NOT NULL DEFAULT 'In Progress';
