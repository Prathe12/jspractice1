// Using variables to represent a book

var bookTitle;
var bookAuthor;

bookTitle = "The Hobbit";
bookAuthor = "J. R. R. Tolkien";

console.log(bookTitle + " by " + bookAuthor);

secondBook = "Wealth of Nations";
authorName = "Adam Smith";
console.log(secondBook + " by " +  authorName);

thirdBook = "The world as I see it";
authorName = "Albert Einstein";
console.log(thirdBook + " by " + authorName);

let books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "Moby-Dick", author: "Herman Melville", year: 1851 },
    { title: "War and Peace", author: "Leo Tolstoy", year: 1869 },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866 },
    { title: "The Odyssey", author: "Homer", year: -800 }
];

for (let a = 0; a < books.length; a++) {
    console.log(`Book ${a + 1} - Title: ${books[a].title}, Author: ${books[a].author}, Year: ${books[a].year}`);
}



/* Further Adventures
 *
 * 1) Declare variables for a second book
 *    and assign them values.
 *
 * 2) Add code to log its details to the console.
 *
 * 3) Repeat steps 1 and 2 for a third book.
 *
 * 4) Consider the code needed for 10 books.
 *    For 100 books.
 *
 */