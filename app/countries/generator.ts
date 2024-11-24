import { getCountries } from "@/prisma";

import prisma from "@/lib/db";

const sampleSize = 36;
const keypadSize = 16;
let countriesList: string[] = [];
let randomCountries: string[] = [];

const countries = await getCountries();

export async function countryList() {
    return await prisma.countries.findMany();
}

export async function getCountryList() {

    if (countries && Array.isArray(countries)) {
        countriesList = countries.flatMap(c => c.countries);

    }
}

export async function getRandomCountries() {

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


export async function main() {
    await prisma.countries.count();
    await getCountryList();
    (await getRandomCountries()).flat();
    await getCommonLetters();

}