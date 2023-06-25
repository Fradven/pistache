import MenuCard from "../components/MenuCard"
import { Raleway } from "next/font/google";

const raleway = Raleway({ weight: ["400"], subsets: ["latin"] });

export default function Menu() {
    return(
        <main className={`${raleway.className} grid gap-10 md:grid-cols-fluid my-8 md:mx-6`}>
            <MenuCard />
            <MenuCard />
            <MenuCard />
        </main>
    );
}