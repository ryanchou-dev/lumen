/*
  Warnings:

  - You are about to drop the column `userEmail` on the `JobApplication` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobApplication" DROP COLUMN "userEmail";
ALTER TABLE "JobApplication" ADD COLUMN     "read" BOOL NOT NULL DEFAULT false;
