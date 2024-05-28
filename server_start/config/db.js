const { Pool } = require("pg"); // Import the Pool class from the pg module

const db = new Pool({ // Use the Pool class to create a new pool
    connectionString: "postgresql://Psets_owner:jvRL7i8fWrzt@ep-dawn-fog-a58j87sr.us-east-2.aws.neon.tech/Psets?sslmode=require"
});

module.exports = { db }; 