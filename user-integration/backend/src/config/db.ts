import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error("DATABASE_URL must be provided");

let sql;
try {
  sql = postgres(connectionString);
} catch (error) {
  console.error('Failed to connect to the database:', error);
  process.exit(1);
}

export default sql;
