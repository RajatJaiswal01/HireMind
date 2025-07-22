import { PrismaClient } from '@/generated/prisma';

let Prisma;

if (process.env.NODE_ENV === "production") {
    Prisma = new PrismaClient();
}else {
    if (!global.prisma) {
        global.prisma = new PrismaClient();
    }
    Prisma = global.prisma;
}
export default prisma;
export { Prisma };