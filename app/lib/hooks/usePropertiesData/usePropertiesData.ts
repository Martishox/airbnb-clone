import { useEffect, useState } from "react";
import { db } from "@/app/firebase-config";
import { collection, getDocs } from "firebase/firestore";

interface IPropertiesData {
  title: string;
  imageURL: string;
  category: string[];
  price: number;
  desc: string;
  rating: number | string;
  location: {
    latitude: number;
    longitude: number;
  };
}

export const usePropertiesData = () => {
  const [properties, setProperties] = useState<IPropertiesData[]>([]);
  const propertiesCollectionRef = collection(db, "properties");

  useEffect(() => {
    const getProperties = async () => {
      const querySnapshot = await getDocs(propertiesCollectionRef);
      const fetchedProperties = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as IPropertiesData),
      }));
      console.log(fetchedProperties);
      setProperties(fetchedProperties);
    };
    getProperties();
  });

  return { properties };
};
