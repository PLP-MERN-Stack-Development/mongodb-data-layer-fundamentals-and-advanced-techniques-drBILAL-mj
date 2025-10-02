// connection to the database
const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB(){
    await mongoose.connect(process.env.MONGODB_ATLAS_URI);
    console.log("Connected to MongoDB");
}

module.exports = { connectDB, mongoose };

// schema and model
const { Schema } = mongoose;

const booksSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    published_year: Number,
    price: Number,
    in_stock: Boolean,
    pages: Number,
    publisher: String
});

const Books = mongoose.model('Books', booksSchema);

module.exports = { connectDB, mongoose, Books };


// --- QUERY FUNCTIONS ---
// Task 2: Basic CRUD Operations
// // Find all books in a specific genre
async function findBooksByGenre(genre) {
  return await Books.find({ genre });
}

// // Find books published after a certain year
async function findBooksAfterYear(year) {
  return await Books.find({ published_year: { $gt: year } });
}

// // Find books by a specific author
async function findBooksByAuthor(author) {
  return await Books.find({ author });
}

// // Update the price of a specific book
async function updateBookPrice(title, newPrice) {
  return await Books.updateOne({ title }, { $set: { price: newPrice } });
}

// // Delete a book by its title
async function deleteBookByTitle(title) {
  return await Books.deleteOne({ title });
}

// Task 3: Advanced Queries
// // Find books that are in stock and published after 2010
async function findInStockBooksAfter2010() {
  return await Books.find({
    in_stock: true,
    published_year: { $gt: 2010 }
  });
}

// // Use projection to return only title, author, and price
async function findBooksWithProjection() {
  return await Books.find({}, 'title author price'); // Mongoose shorthand for projection
}

// Sort books by price ascending
async function sortBooksByPriceAsc() {
  return await Books.find().sort({ price: 1 });
}

// Sort books by price descending
async function sortBooksByPriceDesc() {
  return await Books.find().sort({ price: -1 });
}

// Pagination: 5 books per page
async function paginateBooks(pageNumber = 1) {
  const pageSize = 5;
  const skipCount = (pageNumber - 1) * pageSize;
  return await Books.find().skip(skipCount).limit(pageSize);
}

// Task 4: Aggregation Framework
// Calculate average price of books by genre
async function averagePriceByGenre() {
  return await Books.aggregate([
    {
      $group: {
        _id: '$genre',
        averagePrice: { $avg: '$price' },
        count: { $sum: 1 }
      }
    },
    {
      $sort: { averagePrice: -1 } // Optional: sort by highest average
    }
  ]);
}

// Find the author with the most books
async function authorWithMostBooks() {
  const result = await Books.aggregate([
    {
      $group: {
        _id: '$author',
        totalBooks: { $sum: 1 }
      }
    },
    {
      $sort: { totalBooks: -1 }
    },
    {
      $limit: 1
    }
  ]);
  return result[0]; // Return the top author
}

// Group books by publication decade and count them
async function groupBooksByDecade() {
  return await Books.aggregate([
    {
      $addFields: {
        decade: {
          $concat: [
            { $toString: { $subtract: ['$published_year', { $mod: ['$published_year', 10] }] } },
            's'
          ]
        }
      }
    },
    {
      $group: {
        _id: '$decade',
        count: { $sum: 1 },
        books: { $push: '$title' }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]);
}

// Task 5: Indexing and Performance Optimization
// Create an index on the title field
async function createTitleIndex() {
  await Books.collection.createIndex({ title: 1 });
  console.log('Index created on title field');
}

// Create a compound index on author and published_year
async function createAuthorYearIndex() {
  await Books.collection.createIndex({ author: 1, published_year: -1 });
  console.log('Compound index created on author and published_year');
}

// Use explain() to demonstrate performance improvement
async function explainTitleSearch(title) {
  const explanation = await Books.find({ title }).explain('executionStats');
  console.log('Explain output for title search:', explanation);
  return explanation;
}

// Export functions for external use.
module.exports = {
  connectDB,
  mongoose,
  Books,
  findBooksByGenre,
  findBooksAfterYear,
  findBooksByAuthor,
  updateBookPrice,
  deleteBookByTitle,
  findInStockBooksAfter2010,
  findBooksWithProjection,
  sortBooksByPriceAsc,
  sortBooksByPriceDesc,
  paginateBooks,
  averagePriceByGenre,
  authorWithMostBooks,
  groupBooksByDecade,
  createTitleIndex,
  createAuthorYearIndex,
  explainTitleSearch
};


