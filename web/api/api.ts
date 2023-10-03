import axios from 'axios';
import { GET_PETS_URL } from './api.urls';
import { PetResult } from './api.props';

export const getPets = async (): Promise<PetResult[] | undefined> => {
    try {
      const response = await axios.get<PetResult[]>(GET_PETS_URL);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      throw error; 
    }
  };

  export const getPetDetails = async (id: number): Promise<PetResult| undefined> => {
    try {
      const response = await axios.get<PetResult>(GET_PETS_URL + "/" + id); 
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) { 
      throw error; 
    }

  };

  // const escreverNome = (nome: string) => {
  //   console.log("Esse é o nome:" + nome);
  // }

  // const MINHA_URL = "http://localhost:3000/pessoas"

  // const chamarUrl = (cpf: string) => {
  //   chamarApi.http(MINHA_URL + "/" + cpf)
  // }

  // // outro arquivo
  // escreverNome("poli")
  // escreverNome("nome")
  // escreverNome()