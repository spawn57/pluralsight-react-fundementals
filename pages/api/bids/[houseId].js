import path from 'path';
import fs from 'fs';
import { promisify } from 'util';

const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise( (resolve) => setTimeout(resolve, ms) );

export default async function userHandler(request, response) {
    const houseId = parseInt(request?.query?.houseId);
    const method = request?.method;
    const jsonFile = path.resolve('./', 'bids.json');

    async function getBidsData() {
        const readFileData = await readFile(jsonFile);
        return JSON.parse(readFileData).bids;
    }

    switch (method) {
        case 'GET':
            try {
                await delay(1000);
                const bids = await getBidsData();
                const filteredBids = bids.filter((r) => r.houseId === houseId);
                if (!bids) {
                    response.status(404).send('Error: Request failed with status code 404');
                }

                response.setHeader('Content-Type', 'application/json');
                response.status(200).send(JSON.stringify(filteredBids, null, 2));
                console.log(`GET /api/bids/${houseId} status: 200`);
            }
            catch {
                console.log('/api/bids error:', e);
            }
            break;
        case 'POST':
            try {
                await delay(1000);
                const recordFromBody = request?.body;
                const bids = await getBidsData();
                recordFromBody.id = Math.max(...bids.map((b) => b.id)) + 1;
                const newBidsArray = [...bids, recordFromBody];
                writeFile(
                    jsonFile,
                    JSON.stringify(
                        {
                            bids: newBidsArray
                        },
                        null,
                        2
                    )
                );
                response.status(200).json(recordFromBody);
                console.log(`POST /api/bids/${houseId} status: 200`);
            } catch (e) {
                console.log('/api/bids POST error:', e);
            }
            break;
        default:
            response.setHeader('Allow', ['GET', 'POST']);
            response.status(405).end(`method ${method} Not Allowed`);
    }
}
