import mysql from "mysql2";

export default async function handler(req, res) {
  // Connect to the database
  const dbconn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pistache",
  });

  try {
    // sql query to fetch the data we need
    const query = "SELECT * FROM menus";
    const value = [];

    // the results received from the query done via the query() method
    const [results] = await dbconn.promise().query(query, value);

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    dbconn.destroy();
  }
}
