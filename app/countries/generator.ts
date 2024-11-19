import { country } from './../../node_modules/.prisma/client/index.d';

import prisma from "@/lib/db";

const sampleSize = 36;
const keypadSize = 16;
let countriesList: string[] = [];
let randomCountries: string[] = [];

export async function countryList() {
    return await prisma.countries.findMany();
}

export async function getRandomCountries() {
    const numContinents = await prisma.test.count();
    console.log("Continents: ", numContinents);

    const countries = await prisma.test.findMany({
        select: {
            countries: true,
            id: false,
        }
    });

    if (countries && Array.isArray(countries)) {
        countriesList = countries.flatMap(c => c.countries);

    }
    console.log("Full Countries List: ", countriesList);


    console.log("sample: ", numContinents);
    
    if (countries && Array.isArray(countries)) {
        randomCountries = countries.flatMap(c => c.countries).sort(() => 0.5 - Math.random()).slice(0, sampleSize);
    }

    return randomCountries;
}

export async function getCommonLetters() {
    const counter: Record<string, number> = {};
    for (const char of randomCountries.join("").toLowerCase()) {
        if (/[a-z]/.test(char)) {
            counter[char] = (counter[char] || 0) + 1;
        }
    }
    
    const sorted = Object.entries(counter).sort((a, b) => b[1] - a[1]);

    return sorted.slice(0, keypadSize).map(([char]) => char);
}


export async function containsLetters(countries: string[], letters: string[]) {


    let test = []
    for (let i = 0; i < countries.length; i++) { 
        if([...countries[i].toLowerCase()].every(countries => letters.includes(countries))) {
            test.push(countries[i]);
        }
    }
    console.log("Result", test);
    console.log("Result Length", test.length);
}


export async function main() { 
    const numContinents = await prisma.test.count();
    const countries = (await getRandomCountries()).flat();
    const letters = await getCommonLetters();
    const check = await containsLetters(countriesList, letters);
    
}