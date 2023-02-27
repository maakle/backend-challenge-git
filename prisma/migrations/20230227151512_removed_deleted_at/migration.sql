/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `ObservedRepo` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ObservedRepo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT,
    "status" TEXT DEFAULT 'ACTIVE',
    "owner" TEXT,
    "name" TEXT,
    "pullRequests" INTEGER,
    "openIssues" INTEGER,
    "license" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_ObservedRepo" ("createdAt", "id", "license", "name", "openIssues", "owner", "pullRequests", "status", "updatedAt", "url") SELECT "createdAt", "id", "license", "name", "openIssues", "owner", "pullRequests", "status", "updatedAt", "url" FROM "ObservedRepo";
DROP TABLE "ObservedRepo";
ALTER TABLE "new_ObservedRepo" RENAME TO "ObservedRepo";
CREATE UNIQUE INDEX "ObservedRepo_id_key" ON "ObservedRepo"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
