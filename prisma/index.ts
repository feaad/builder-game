import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
import 'dotenv/config'

async function main() {
    // prisma client queries go here

}

export async function getCountries() {
    return await prisma.countries.findMany({
        select: {
            countries: true,
            id: false,
        }
    });
}



main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
