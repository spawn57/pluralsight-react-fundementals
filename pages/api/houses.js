import { setHttpClientAndAgentOptions } from 'next/dist/server/config';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


export default async function handler(request, response) {
    const json = require('../../houses.json');
    await delay(1000);
    response.status(200).json(json.houses);
}