const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "expense-tracker-a9214.firebaseapp.com",
  projectId: "expense-tracker-a9214",
  storageBucket: "expense-tracker-a9214.appspot.com",
  messagingSenderId: "800370779431",
  appId: "1:800370779431:web:df09f18bd170d15dabf502",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.ts"
    );
  } else {
    return config;
  }
}
