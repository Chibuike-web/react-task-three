import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: "react-task-three-364ad.firebaseapp.com",
	projectId: "react-task-three-364ad",
	projectNumber: "967313173985",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
