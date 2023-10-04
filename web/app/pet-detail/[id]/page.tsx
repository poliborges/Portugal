"use client";
import { PetProfile } from "@/components/PetProfile/PetProfile";
import { PetInformation } from "@/components/PetInformation/PetInformation";
import { PetLocation } from "@/components/PetLocation/PetLocation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { PetResult } from "@/api/api.props";
import { getPetDetails } from "@/api/api";

interface PetDetailProps {
  id: number;
}

export default function Page({ params }: { params: PetDetailProps }) {
  const [petDetails, setPetDetails] = useState<PetResult>();

  console.log(params.id);

  useEffect(() => {
    const fetchPetDetails = async () => {
      const petResult = await getPetDetails(params.id);
      petResult && setPetDetails(petResult);
    };

    fetchPetDetails();
  }, [params.id]);

  console.log("petDetails: " + JSON.stringify(petDetails));

  if (!petDetails) {
    return <div>Carregando</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <PetProfile
            image={petDetails.image}
            title={petDetails.name}
            subtitle={petDetails.description}
          />
          <div className={styles.location}>
            <PetLocation />
          </div>
          <div className={styles.information}>
            <PetInformation
              name={petDetails.name}
              breed={petDetails.breed}
              weight={petDetails.weight}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
