-- CreateTable
CREATE TABLE "Folha" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mes" INTEGER NOT NULL,
    "ano" INTEGER NOT NULL,
    "horas" INTEGER NOT NULL,
    "valor" INTEGER NOT NULL,
    "funcnome" TEXT NOT NULL,
    "funccpf" TEXT NOT NULL
);
