import path from 'path';
import fs from 'fs';
const { promisify } = require('util');

const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function userHanlder(request, response) {
    const id = parseInt(request?.query?.id);
    const jsonFile = path.resolve('./', 'houses.json');
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const houses = JSON.parse(readFileData).houses;
    const house = houses.find((h) => h.id === id);
    if (house) {
        response.setHeader('Content-Type', 'application/json');
        response.status(200).json(house);
    } else {
        response.status(404).send('house not found');
    }
    console.log(`Get /api/houses/${id} status: 200`);
}