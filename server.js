const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors())

let quotes = {
    'Bernie Sanders': [
        "We don't want to see our kids and grandchildren be the first generation in the modern history of America to have a lower standard of living than their parents.",
        "We are living in a nation which worships wealth rather than caring for the poor. I don’t think that is the nation we should be living in.",
        "Democracy is about one person, one vote. It’s about all of us coming together to determine the future of our country. It is not about a handful of billionaires buying elections, or governors suppressing the vote by denying poor people or people of color the right to vote. Our job is to stand together to defeat the drift toward oligarchy and create a vibrant democracy.",
        "Humanity is at a crossroads. We can continue down the current path of greed, consumerism, oligarchy, poverty, war, racism, and environmental degradation. Or we can lead the world in moving in a very different direction."
    ]
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    let randomIndex = Math.floor(Math.random() * quotes['Bernie Sanders'].length);
    response.json(quotes['Bernie Sanders'][randomIndex]);
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})