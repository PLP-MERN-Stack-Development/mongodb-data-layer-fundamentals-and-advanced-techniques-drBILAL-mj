# DBA Project, MongoDB Week 1 Assignment

## Overview

This project demonstrates MongoDB data layer fundamentals and advanced techniques using Node.js and Mongoose. It covers database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing, all applied to a sample bookstore dataset.

---

## Project Structure

- `insert_books.js` – Populates the `books` collection in the `plp_bookstore` database with sample data.
- `queries.js` – Contains all MongoDB queries for CRUD, advanced queries, aggregation, and indexing.
- `run_crud_queries.js` – Script to execute CRUD queries from `queries.js`.
- `run_advanced.js` – Script to execute advanced queries.
- `run_aggregation.js` – Script to execute aggregation queries from `queries.js`.
- `run_indexing.js` – Script to execute indexing queries from `queries.js`.
- `README.md` – Project documentation and usage instructions.
- `Week1-Assignment.md` – Assignment instructions (for reference).
- **Screenshot** – Shows the `plp_bookstore` database and `books` collection in MongoDB Atlas.

---

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/PLP-MERN-Stack-Development/mongodb-data-layer-fundamentals-and-advanced-techniques-drBILAL-mj.git

   cd mongodb-data-layer-fundamentals-and-advanced-techniques-drBILAL-mj
   ```

2. **Install Dependencies and initialize Node.js environment**
   ```bash
   npm install mongodb
   npm init -y
   npm install mongoose dotenv
   ```

3. **Configure Environment**
   - Create a `.env` file in the project root:
     ```
     MONGODB_ATLAS_URI=your_mongodb_atlas_connection_string
     ```

---

## How to Run Scripts

### 1. Insert Sample Data

Run the following command to populate your database with sample books:
```bash
node insert_books.js
```

---

### 2. Run Queries

#### CRUD Operations

- Open `run_crud_queries.js`.
- To run a specific CRUD query, **comment out all other queries** in the script except the one you want to execute.
- Example:
  ```javascript
  // Uncomment only the query you want to run:
  // const result = await findBooksByGenre('Fiction');
  // const result = await updateBookPrice('1984', 12.99);
  ```
- Save the file and run:
  ```bash
  node run_crud_queries.js
  ```

#### Advanced Queries.

- Open `run_advanced.js`.
- Similarly, **comment out all other queries** except the one you wish to run.
- Example:
  ```javascript
  // const result = await sortBooksByPriceAsc();
  // const result = await calculateAveragePriceByGenre();
  ```
- Save the file and run:
  ```bash
  node run_advanced.js
  ```

#### Aggregation.
- Open `run_aggregation.js`.
- Similarly, **comment out all other queries** except the one you wish to run.
- Example:
  ```javascript
  // const result = await sortBooksByPriceAsc();
  // const result = await calculateAveragePriceByGenre();
  ```
- Save the file and run:
  ```bash
  node run_aggregation.js
  ```

#### Indexing.
- Open `run_indexing.js`.
- Similarly, **comment out all other queries** except the one you wish to run.
- Example:
  ```javascript
  // const result = await sortBooksByPriceAsc();
  // const result = await calculateAveragePriceByGenre();
  ```
- Save the file and run:
  ```bash
  node run_indexing.js
  ```


**Note:**  
Only one query should be active at a time in each script to avoid overlapping outputs and ensure clarity.

## In both queries.js and on a specific file to run the script, Uncomment part by part so as to see logical results on running
---

## Viewing Data

- Use **MongoDB Atlas** to view your `plp_bookstore` database and `books` collection.
- Refer to the included screenshot for a sample view of the collection in Atlas.

---

## Requirements

- Node.js (v18 or higher)
- MongoDB Atlas account (recommended for cloud setup)
- Mongoose and dotenv Node.js packages

---

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)

---

## License

This project is for educational purposes, PLP Academy.
As week 1 MERN_STACK Assignment of MongoDB.
