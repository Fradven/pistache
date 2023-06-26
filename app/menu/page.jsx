"use client";
import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });
const API_ROUTE = "http://localhost:3000/api/getData";

export default function Menu() {
  // Array where the data will be stored once it has been fetched
  const [menuData, setMenuData] = useState([]);

  // useEffect to fetch the data from the menu table in the database when the page opens
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        // Fetch the data from the route end-point set in the constante API_ROUTE
        const response = await fetch(API_ROUTE);

        // Turn the response into a usable json
        const data = await response.json();

        // Put the json as an array into menuData
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <main
      className={`${raleway.className} grid gap-10 md:grid-cols-fluid my-8 md:mx-6`}
    >
      {/* The map() method create a card based on MenuCard for each menu in the database that has been fetched passing the data accordingly to the component */}
      {menuData.length === 0
        ? "Waiting"
        : menuData.results.map((data) => (
            <MenuCard
              key={data.id}
              title={data.title}
              content={data.content}
              imageURl={data.image}
            />
          ))}
    </main>
  );
}
