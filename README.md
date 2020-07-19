### Ionic 5 Firebase/Firestore CRUD App with Angular 9 and Ionic Skeleton Loading Animation

### Setup Firebase/Firestore (Free plan)

- From Firebase console enable Eamil & Password Authentication 
- If you are using Firestore for the first time, initialize the database once going to firestore database dashboard
- Go to database (Rules) tab and allow read, write for all, only for this CRUD app testing, not recommended for production apps.

### Create a new <web> app in Firebase console
- After creating anew web app you can copy the config deatils as below, and replace with /src/app/enviornment.ts

```
{
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
}
```


