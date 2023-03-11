-- CreateTable
CREATE TABLE "ObservedRepo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT,
    "owner" TEXT,
    "name" TEXT,
    "pullRequests" INTEGER,
    "openIssues" INTEGER,
    "license" TEXT,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "ScheduledObserver" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "repoId" TEXT,
    "lastRun" DATETIME,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME,
    "updatedAt" DATETIME,
    CONSTRAINT "ScheduledObserver_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "ObservedRepo" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ObservedRepo_id_key" ON "ObservedRepo"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledObserver_id_key" ON "ScheduledObserver"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduledObserver_repoId_key" ON "ScheduledObserver"("repoId");
