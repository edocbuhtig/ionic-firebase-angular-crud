### Ionic Firebase Authentication

### Demo

[Ionic Firebase Authentication & CRUD](https://www.youtube.com/watch?v=N23yDIQlzVI&feature=youtu.be)

### Setup Firebase/Firestore (Free Spark plan)

- From Firebase console enable Email & Password Authentication 
- If you are using Firestore for the first time, initialize the database once going to firestore database dashboard
- Go to database (Rules) tab and allow read, write for all users, only for this CRUD app testing, not recommended for production apps.

### Create a new <web> app in Firebase console
- After creating a new web app, you can copy the firebase project config details as below, and replace with /src/app/enviornment.ts

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

### Install Angular Firebase/Firestore Official (NPM) Library

```
ng add @angular/fire
```



