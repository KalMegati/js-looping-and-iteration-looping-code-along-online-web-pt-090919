// Code your solutions in this file

function writeCards(people, occasion) {
    let cards = [];
    for (let i=0; i < people.length; i++) {
        cards.push(`Thank you, ${people[i]}, for the wonderful ${occasion} gift!`);
    }
    return cards;
}

function countDown(peak) {
    while (peak >= 0) {
        console.log(peak)
        peak--
    }
}