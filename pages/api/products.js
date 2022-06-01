import { db } from "../../utils"
import { collection, getDocs } from "firebase/firestore";
export default async  function handler(req, res) {
    const querySnapshot = await getDocs(collection(db, "all"));
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
});
    
    
    
    res.status(200).json({ name: 'John Doe' })
}





