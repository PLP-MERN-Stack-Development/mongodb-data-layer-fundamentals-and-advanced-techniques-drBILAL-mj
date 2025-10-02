const { connectDB, mongoose, findBooksByGenre } = require('./queries');

async function run() {
  await connectDB();
  const fictionBooks = await findBooksByGenre('Fiction');
  console.log(fictionBooks);
   // Close the Mongoose connection
    await mongoose.connection.close();
    console.log('Connection closed');
}

run();

const { connectDB, mongoose, Books } = require('./queries');

async function run() {
    await connectDB();
    // Example: Update the price of a specific book
    const titleToUpdate = "The Alchemist";
    const newPrice = 12.99;
    const updateResult = await Books.updateOne({ title: titleToUpdate }, { $set: { price: newPrice } });
    console.log(`Updated ${updateResult.modifiedCount} document(s)`);

    // Close the Mongoose connection
    await mongoose.connection.close();
    console.log('Connection closed');
}
run().catch(console.error);