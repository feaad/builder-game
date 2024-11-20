import { getCountries  } from "@/prisma";

import prisma from "@/lib/db";

const sampleSize = 36;
const keypadSize = 16;
let countriesList: string[] = [];
let randomCountries: string[] = [];
// let validCountriesList: string[] = []

const countries = await getCountries();

export async function countryList() {
    return await prisma.countries.findMany();
}

export async function getCountryList() { 

    if (countries && Array.isArray(countries)) {
        countriesList = countries.flatMap(c => c.countries);

    }
    console.log("Full Countries List: ", countriesList);
}

export async function getRandomCountries() {


    // console.log("sample: ", numContinents);
    
    if (countries && Array.isArray(countries)) {
        randomCountries = countries.flatMap(c => c.countries).sort(() => 0.5 - Math.random()).slice(0, sampleSize);
    }

    console.log("Random Countries: ", randomCountries);

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


// export async function validCountries(countries: string[], letters: string[]) {


    
//     for (let i = 0; i < countries.length; i++) { 
//         if([...countries[i].toLowerCase()].every(countries => letters.includes(countries))) {
//             validCountriesList.push(countries[i]);
//         }
//     }

//     console.log("Result", validCountriesList);
//     console.log("Result Length", validCountriesList.length);
//     // return validCountriesList;
// }

// export async function getAnswersList() { 
//     console.log("Answers", validCountriesList);
// }


export async function main() { 
    const numContinents = await prisma.test.count();
    const listOfCountries = await getCountryList();
    const countries = (await getRandomCountries()).flat();
    const letters = await getCommonLetters();
    // const check = await validCountries(countriesList, letters);
    // const result = await getAnswersList();
    
}