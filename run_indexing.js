const {
  connectDB,
  mongoose,
  createTitleIndex,
  createAuthorYearIndex,
  explainTitleSearch
} = require('./queries');

async function run() {
  await connectDB();

  await createTitleIndex();
  await createAuthorYearIndex();

  const explain = await explainTitleSearch('1984');
  console.log(JSON.stringify(explain, null, 2));
    await mongoose.connection.close();  //close the Mongoose connection
}

run();