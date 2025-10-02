// import the necessary functions from queries.js
const {
  connectDB,
  mongoose,
  findInStockBooksAfter2010,
  findBooksWithProjection,
  sortBooksByPriceAsc,
  sortBooksByPriceDesc,
  paginateBooks
} = require('./queries');

// function to run the advanced queries
async function run() {
  await connectDB();

//   Example: Find in-stock books published after 2010
  const recentInStock = await findInStockBooksAfter2010();
  console.log('In-stock books after 2010:', recentInStock);
//   close the Mongoose connection
  await mongoose.connection.close();
  console.log('Connection closed');

//   Example: Find books with projection
  const projected = await findBooksWithProjection();
  console.log('Books with projection:', projected);
//  close the Mongoose connection
  await mongoose.connection.close();
  console.log('Connection closed');

//   Example: Sort books by price ascending
  const sortedAsc = await sortBooksByPriceAsc();
  console.log('Books sorted by price (asc):', sortedAsc);
 //   close the Mongoose connection
   await mongoose.connection.close();
   console.log('Connection closed');

//   Example: Sort books by price descending
  const sortedDesc = await sortBooksByPriceDesc();
  console.log('Books sorted by price (desc):', sortedDesc);
    //   close the Mongoose connection
    await mongoose.connection.close();
    console.log('Connection closed');

//   Example: Paginate books (page 1 and page 2)
  const page1 = await paginateBooks(1);
  console.log('Page 1:', page1);
//   close the Mongoose connection
  await mongoose.connection.close();
  console.log('Connection closed');

  const page2 = await paginateBooks(2);
  console.log('Page 2:', page2);
    //   close the Mongoose connection
    await mongoose.connection.close();
    console.log('Connection closed');
}

run();