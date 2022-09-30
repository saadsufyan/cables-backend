const firebase = require("firebase/app");
const { 
  getAuth, 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
 } = require("firebase/auth");

const apiKey = "AIzaSyC5GGHOyeV3LkD4hQgDG2GOATDIX3t9oZE";
firebase.initializeApp({
  apiKey: apiKey,
});

const auth = getAuth();

exports.addUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

exports.authenticate = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);