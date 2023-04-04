// FormParser.js
import { useParams } from 'react-router-dom';
import { db } from "./Firebase-config"; 
import { collection, addDoc, doc, setDoc } from "firebase/firestore";


export const FormParser = ({ onSelect }) => {
  const params = useParams();
  const collectionRef = collection(db, 'incidents', params.incidentId, 'forms');
  console.log("look here:", params.incidentId);
//   onSelect('some item'); // call onSelect function
};

export default FormParser;