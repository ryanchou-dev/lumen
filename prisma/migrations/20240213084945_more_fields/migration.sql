/*
  Warnings:

  - Added the required column `address` to the `JobApplication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobApplication" ADD COLUMN     "address" STRING NOT NULL;
ALTER TABLE "JobApplication" ADD COLUMN     "github" STRING;
ALTER TABLE "JobApplication" ADD COLUMN     "linkedin" STRING;
ALTER TABLE "JobApplication" ADD COLUMN     "portfolio" STRING;
ALTER TABLE "JobApplication" ADD COLUMN     "twitter" STRING;
