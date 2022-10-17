import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase/config';

const useFirebase = (categoryId) => {

    const [loading , setLoading] = useState(false);
    const [productos, setProductos]= useState([]);
    const [error, setError] = useState("")

    useEffect(() =>{
    
        (async ()=> {
          
            try {
                setLoading(true);
                const q = categoryId 
                ? query(
                    collection(db, "products"), 
                    where("category", "==", categoryId))
                :query(collection(db, "products" )); 

                const querySnapshot = await getDocs(q);
                const productosFirebase = [];
                querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
                  productosFirebase.push({id: doc.id, ...doc.data() });
                });
              
                 setProductos(productosFirebase);
             
            }  catch (error) {
              setError(error.message);
            }
            setLoading(false);
          })();
    
      }, [categoryId]);
     

  return [loading, productos, error];
};

export default useFirebase