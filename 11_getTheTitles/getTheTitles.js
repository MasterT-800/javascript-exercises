const getTheTitles = function(books) {
    let titles = [];
    for(book of books) {
      titles.push(book.title);
    }
    return titles;
};
const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
console.log(getTheTitles(books));
// Do not edit below this line
module.exports = getTheTitles;
