import mysql from "mysql2";

export default async function handler(req, res) {
  const dbconn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pistache",
  });

  try {
    const query = "SELECT * FROM menus";
    const value = [];
    const [results] = await dbconn.promise().query(query, value);

    res.status(200).json({ results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    dbconn.destroy();
  }
}
