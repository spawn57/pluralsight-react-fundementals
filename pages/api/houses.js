export default function handler(request, response) {
    const json = require('../../houses.json');
    response.status(200).json(json.houses);
}