"use client";
import { PetProfile } from "@/components/PetProfile/PetProfile";
import { PetInformation } from "@/components/PetInformation/PetInformation";
import { PetLocation } from "@/components/PetLocation/PetLocation";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { PetResult } from "@/api/api.props";
import { deletePet, getPetDetails, updatePet } from "@/api/api";
import { Button } from "../../../components/Button/Button";
import { useRouter } from "next/navigation";

interface updatePetProps {
  pet: PetResult;
  id: number;
}

interface PetDetailProps {
  id: number;
}

export default function Page({ params }: { params: PetDetailProps }) {
  const [petDetails, setPetDetails] = useState<PetResult>();

  console.log(params.id);

  // const novoPet = {
  //   ...petDetails,
  //   name: "novoNome",
  // }

  // setPetDetails(novoPet)

  useEffect(() => {
    const fetchPetDetails = async () => {
      const petResult = await getPetDetails(params.id);

      // petResult n é nulo

      // if (petResult !== null) {
      //   setPetDetails(petResult)
      // }

      // if (!(petResult === null)) {

      // }

      if (petResult) {
        setPetDetails(petResult);
      }

      // petResult && setPetDetails(petResult);
    };

    fetchPetDetails();
  }, [params.id]);

  console.log("petDetails: " + JSON.stringify(petDetails));

  if (!petDetails) {
    return <div>Carregando</div>;
  }

  return (
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

        <PetInformation
          onSaveClick={() => {
            updatePet(petDetails, petDetails.id);
            alert("Salvei o Pet");
          }}
          onDeleteClick={() => {
            deletePet(petDetails.id);
            alert("deletado");
            // navegação
          }}
          name={petDetails.name}
          breed={petDetails.breed}
          weight={petDetails.weight}
          onNameChange={(name: string) =>
            setPetDetails({ ...petDetails, name })
          }
          onBreedChange={(breed: string) =>
            setPetDetails({ ...petDetails, breed })
          }
          onWeightChange={(weight: string) =>
            setPetDetails({ ...petDetails, weight })
          }
        />
      </div>
    </div>
  );
}
