/*
  Warnings:

  - You are about to drop the `ScheduledObserver` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "ObservedRepo" ADD COLUMN "status" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ScheduledObserver";
PRAGMA foreign_keys=on;
