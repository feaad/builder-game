import { getCountries } from "@/prisma";
import { getCommonLetters } from "./generator";

let validCountriesList: string[] = []
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
    console.log("Letters: ", letters);

    for (let i = 0; i < countryList.length; i++) { 
        if ([...countryList[i].toLowerCase()].every(countriesList => letters.includes(countriesList))) {
                    validCountriesList.push(countryList[i].toLowerCase());
                }
    }

    
    // console.log("Result", validCountriesList);
    // console.log("Result Length", validCountriesList.length);
    // console.log("checking country list", countriesList);
    return validCountriesList;
}

