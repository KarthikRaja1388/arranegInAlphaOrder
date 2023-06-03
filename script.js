const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];

function getTitles(arr) {
  let publishedYears = arr.map((element) => element.year);
  console.log("Years : " + publishedYears);
  sortYear(publishedYears);
}

function sortYear(years) {
  let sortedYear = years.sort();
  console.log("Sorted Year: " + sortedYear);
}

getTitles(books);
