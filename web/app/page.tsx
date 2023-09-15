import { AnimalList } from "@/components/AnimalList/AnimalList";
import { Button } from "@/components/Button/Button";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <AnimalList />
    </div>
  );
}
