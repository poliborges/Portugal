import { AnimalList } from "@/components/AnimalList/AnimalList";
import { Button } from "@/components/Button/Button";
import { NavBar } from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <AnimalList />
    </div>
  );
}
