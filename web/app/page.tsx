import { AnimalDetails } from "@/components/AnimalDetails/AnimalDetails";
import { AnimalList } from "@/components/AnimalList/AnimalList";
import { Button } from "@/components/Button/Button";
import { NavBar } from "@/components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AnimalList />
    </div>
  );
}
