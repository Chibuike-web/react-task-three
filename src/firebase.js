import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDgUi_4Wwom5gIxWRuhvCAZT9iNfFZUWwI",
	authDomain: "react-task-three.firebaseapp.com",
	projectId: "react-task-three",
	projectNumber: "758819485218",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
