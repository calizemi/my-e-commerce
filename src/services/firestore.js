import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAcvTpBwDUUMlfPsCGxfLIH4dWcbOiE8OU",
  authDomain: "data-base-7b254.firebaseapp.com",
  projectId: "data-base-7b254",
  storageBucket: "data-base-7b254.appspot.com",
  messagingSenderId: "444628107049",
  appId: "1:444628107049:web:3c89668f241cede3228138",
  measurementId: "G-5XQFVHXXB4"
};

const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);

// Hacer la peticion para poder traer los productos
export const getProductToys = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionToys = collection(db, "toys");
  // paso 2: Traer los documentos
  const documentToys = await getDocs(collectionToys);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const toys = documentToys.docs.map((doc) => doc.data());
  // const filterToys = async () => {
  //   toys.filter(t=>t.funcion === "sensorial")
  // } 
  
  return toys;
  
};



