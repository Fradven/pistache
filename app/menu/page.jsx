"use client"
import { useEffect, useState } from "react";
import MenuCard from "../components/MenuCard";
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });
const API_ROUTE = "http://localhost:3000/api/getData";

export default function Menu() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(API_ROUTE);
        const data = await response.json();
        setMenuData(data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    console.log(menuData);
  }, [menuData]);

  return (
    <main className={`${raleway.className} grid gap-10 md:grid-cols-fluid my-8 md:mx-6`}>
      {menuData.length === 0 ? "Waiting" : menuData.results.map((data) => (
        <MenuCard key={data.id} title={data.title} content={data.content} imageURl={data.image} />
      ))}
    </main>
  );
}


