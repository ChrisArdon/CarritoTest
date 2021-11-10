import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBTDVbGiaLRl8e4lDeuGTlHwyvb2rS6PhQ",
    authDomain: "carritotest-825b4.firebaseapp.com",
    projectId: "carritotest-825b4",
    storageBucket: "carritotest-825b4.appspot.com",
    messagingSenderId: "785022233030",
    appId: "1:785022233030:web:b1f3e89a84d1b4af456ac7"
};

export default !firebase.apps().length ? firebase.initializeApp(firebaseConfig) : firebase.app();