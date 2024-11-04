import React from "react";
import prisma from "@/lib/db";

export default async function Queries() {
	async function generateCountries() {
		const countryList = [];
		const countries = await prisma.countries.findMany();
		const randomCountries = countries
			.sort(() => 0.5 - Math.random())
			.slice(0, 4);
		const result = randomCountries.map((country) => country.name).join(" ");

		countryList.push(result);

		return countryList;
	}

	async function uniqueLetters() {
		const uniqueLetters = new Set();

		const countryList = await generateCountries();
		console.log(countryList);
		const countries = countryList.map((country) => country.toLowerCase());

		for (let i = 0; i < countries.length; i++) {
			const letters = countries[i].split("");
			letters.forEach((letter) => {
				if (/^[a-zA-Z]$/.test(letter)) {
					uniqueLetters.add(letter);
				}
			});
		}

		return Array.from(uniqueLetters).join("");
	}

	return <div className='bg-slate-700'>{uniqueLetters()}</div>;
}
