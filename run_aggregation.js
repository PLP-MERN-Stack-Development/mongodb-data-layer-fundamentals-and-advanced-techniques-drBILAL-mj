// import necessary functions from queries.js
const {
  connectDB,
  mongoose,
  averagePriceByGenre,
  authorWithMostBooks,
  groupBooksByDecade
} = require('./queries');

async function run() {
  await connectDB();

//   Example: Calculate average price by genre
  const avgPrices = await averagePriceByGenre();
  console.log('Average price by genre:', avgPrices);
    await mongoose.connection.close();  //close the Mongoose connection
    console.log('Connection closed');

//   Example: Find the author with the most books
  const topAuthor = await authorWithMostBooks();
  console.log('Author with most books:', topAuthor);
    await mongoose.connection.close();  //close the Mongoose connection
    console.log('Connection closed');

//   Example: Group books by decade
  const decades = await groupBooksByDecade();
  console.log('Books grouped by decade:', decades);
    await mongoose.connection.close();   //close the Mongoose connection
    console.log('Connection closed');
}

run();