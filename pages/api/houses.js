export default function hander(request, response) {
    response.status(200).json(
        [
            {
                id: 1,
                address: "12 Valley of Kings, Geneva",
                country: "Switzerland",
                price: 900000,
            },
            {
                id: 2,
                address: "89 Road of Forks, Bern",
                country: "Switzerland",
                price: 500000,
            },
            {
                id: 3,
                address: "Grote Hof 12, Amsterdam",
                country: "The Netherlands",
                price: 200500,
            },
            {
                id: 4,
                address: "Meel Kade 321, The Hague",
                country: "The Netherlands",
                price: 259500,
            },
            {
                id: 5,
                address: "OUde Gracht 32, Utrecht",
                country: "The Netherlands",
                price: 400500,
            },
            {
                id: 6,
                address: "32 Valley Way, New York",
                country: "USA",
                price: 1000000,
            }
        ]
    );
}