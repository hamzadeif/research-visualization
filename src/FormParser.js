// FormParser.js
import { useParams } from 'react-router-dom';
import { db } from "./Firebase-config"; 
import { collection, addDoc, doc, setDoc } from "firebase/firestore";


export const FormParser = ({ onSelect }) => {
  //const params = useParams();
  //const collectionRef = collection(db, 'incidents', params.incidentId, 'forms');
  const collectionRef = collection(db, 'incidents', '5dfc8TW4dAvTMdUWbGZV', 'forms');
  console.log("look here:", collectionRef);
//   onSelect('some item'); // call onSelect function
};

export default FormParser;