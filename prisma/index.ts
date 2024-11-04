
import { PrismaClient } from '@prisma/client'
// import * as fs from 'fs/promises'
const prisma = new PrismaClient()

// async function main() {
    // prisma client queries go here

    // const data = await fs.readFile('/Users/francesantwi-donkor/Desktop/Apps/builder-game/app/JSON/countries.json', 'utf8');
    // const countries = JSON.parse(data);

    // for (const country of countries) {
    //     await prisma.countries.create({
    //         data: {
    //             name: country.name,
    //             code: country.code
    //         }
    //     })
    // }
    // const allCountries = await prisma.countries.findMany()
    // console.log(allCountries)
    // export async function randomCountries() {
    //     const countryList = []
    //     const allCountries = await prisma.countries.findMany()
    //     const randomCountries = allCountries.sort(() => 0.5 - Math.random()).slice(0, 4)
    //     const result = randomCountries.map(country => country.name)
    //     console.log(result)

    //     countryList.push(result)

    //     return countryList;
    //     // await randomCountries();
    // }

// }

async function main() {
    // const countryList = []
    // const allCountries = await prisma.countries.findMany()
    // const randomCountries = allCountries.sort(() => 0.5 - Math.random()).slice(0, 4)
    // const result = randomCountries.map(country => country.name)
    // console.log(result)

    // countryList.push(result)

    // return countryList;
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})
