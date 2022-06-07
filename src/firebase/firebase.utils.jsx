import { initializeApp } from "firebase/app";
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
    sendEmailVerification,
    sendSignInLinkToEmail,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc, 
} from "firebase/firestore";
import { toast } from 'react-toastify';


const firebaseConfig = {
  apiKey: "AIzaSyBwfFw6B8L8mTBMIyfBP_CO7eTVdR0OlZE",
  authDomain: "rentals-9520c.firebaseapp.com",
  projectId: "rentals-9520c",
  storageBucket: "rentals-9520c.appspot.com",
  messagingSenderId: "227449802333",
  appId: "1:227449802333:web:b9d2dbb9ed2f9d3cad07b4",
  measurementId: "G-CCVLQW56HR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async() => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(fireStore, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        const timestamp = new Date();

        if (docs.docs.length === 0) {
            await addDoc(collection(fireStore, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
                createdDate: timestamp,
            });
        }   
    } catch (err) {
        if (err) {
            toast.error("Huh!!.. " + err.message);
        } else {
            toast.success('Successfully');
        }
    }
};
 
const logInWithEmailAndPassword = async(email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Successfully');
    } catch (err) {
        toast.error(err.message);
    }

};


const registerWithEmailAndPassword = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        const timestamp = new Date();

        
        await addDoc(collection(fireStore, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            createdDate: timestamp,
            email,
        });
        sendSignInLinkToEmail(auth, email)

    } catch (err) {
        if (err) {
            toast.error("Huh!!.. " + err.message);
        } else {
            toast.success('Successfully');
        }
    }
};



const sendPasswordReset = async(email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset link sent!");
    } catch (err) {
            toast.error("Huh!!.. " + err.message);
    }
};

const logout = () => {
  signOut(auth);
  toast.success("Successfully Logged Out");
};

export const convertCollectionToMap = async(collections) => {
    const transformedCollection = (collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        }
    }))
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    objectsToAdd.forEach(obj => {
     addDoc(collection(fireStore, collectionKey), obj);
    });
}


export {
    logout,
    auth,
    logInWithEmailAndPassword,
    signInWithGoogle,
    registerWithEmailAndPassword,
    sendPasswordReset,
    fireStore
  }