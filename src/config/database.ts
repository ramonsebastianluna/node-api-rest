import { PrismaClient } from '@prisma/client';

// Creamos la instancia de Prisma
const prisma = new PrismaClient();

// Exportamos esta única instancia para usarla en nuestros repositorios
export default prisma;
