-- CreateTable
CREATE TABLE "Area" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "Area_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Process" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" VARCHAR(255) NOT NULL,

    CONSTRAINT "Process_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessesInAreas" (
    "id" SERIAL NOT NULL,
    "areaId" INTEGER,
    "processId" INTEGER,
    "toolLink" TEXT,

    CONSTRAINT "ProcessesInAreas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProcessFamily" (
    "id" SERIAL NOT NULL,
    "parentProcessId" INTEGER,
    "childProcessId" INTEGER,
    "toolLink" TEXT,

    CONSTRAINT "ProcessFamily_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProcessesInAreas" ADD CONSTRAINT "ProcessesInAreas_areaId_fkey" FOREIGN KEY ("areaId") REFERENCES "Area"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessesInAreas" ADD CONSTRAINT "ProcessesInAreas_processId_fkey" FOREIGN KEY ("processId") REFERENCES "Process"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessFamily" ADD CONSTRAINT "ProcessFamily_parentProcessId_fkey" FOREIGN KEY ("parentProcessId") REFERENCES "Process"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProcessFamily" ADD CONSTRAINT "ProcessFamily_childProcessId_fkey" FOREIGN KEY ("childProcessId") REFERENCES "Process"("id") ON DELETE SET NULL ON UPDATE CASCADE;
