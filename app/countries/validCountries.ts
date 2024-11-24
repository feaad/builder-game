import { getCountries } from "@/prisma";
import { getCommonLetters } from "./generator";

const validCountriesList: Set<string> = new Set();
let countriesList: string[] = [];

const countries = await getCountries();

export async function getCountryList() {

    if (countries && Array.isArray(countries)) {
        countriesList = countries.flatMap(c => c.countries);

    }
    console.log("Full Countries List_1: ", countriesList);
    return countriesList;
}

export async function validCountries() {

    const countryList = await getCountryList();
    const letters = await getCommonLetters();
    const getSpaceBar = " ";
    letters.push(getSpaceBar);
    console.log("Letters: ", letters);

    for (let i = 0; i < countryList.length; i++) {
        if ([...countryList[i].toLowerCase()].every(countriesList => letters.includes(countriesList))) {
            validCountriesList.add(countryList[i].toLowerCase());
        }
    }


    console.log("Result", validCountriesList);
    console.log("Length", validCountriesList.size);
    return validCountriesList;
}

