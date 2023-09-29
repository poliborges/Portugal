import { link } from "fs";
import Link from "next/link";
import { PetProfile } from "@/components/PetProfile/PetProfile";
import { PetInformation } from "@/components/PetInformation/PetInformation";
import { PetLocation } from "@/components/PetLocation/PetLocation";
import styles from "./page.module.css";

export default function Page() {
  const petId = 1;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <PetProfile
            title="Lupy"
            subtitle="Oii eu sou a Lupy, uma gatinha muito carinhosa e que adora brincar. Gosto de petiscos e meu sabor favorito de raçao é frutos do mar. "
          />
          <div className={styles.location}>
            <PetLocation />
          </div>
          <div className={styles.information}>
            <PetInformation />
          </div>
        </div>
      </div>
    </div>
  );
}
