// Code your solutions in this file
function writeCards(friends, event) {
    let cards = [];

    for (let i = 0; i < friends.length; i++) {
       cards.push(`Thank you, ${friends[i]}, for the wonderful ${event} gift!`);
    };
    return cards
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number --;
    }
}