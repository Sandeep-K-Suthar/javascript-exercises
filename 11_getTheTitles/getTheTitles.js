const getTheTitles = function (books) {
    let title = [];
    for (let index = 0; index < books.length; index++) {
        title.push(books[index].title);

    }
    return title;

};
const books = [
    {
        title: 'Book1',
        author: 'Lame',
    },
    {
        title: 'Book2',
        author: 'Lamo',
    }
]
getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
