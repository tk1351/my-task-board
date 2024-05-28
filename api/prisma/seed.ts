import { type Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const statusData: Prisma.TaskCreateInput[] = [
    { name: 'nisi', icon: null, status: null },
    { name: 'adipisicing', icon: null, status: null },
    { name: 'laboris', icon: null, status: null },
    { name: 'sit', icon: null, status: null },
    { name: 'cupidatat', icon: null, status: null },
]

async function main() {
    const status = []
    for (const s of statusData) {
        const st = prisma.task.create({
            data: s
        })
        status.push(st)
    }
    return prisma.$transaction(status);
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
