import { getCurrentUser, getDataFromDoc } from "./utils.js";

let $app = document.getElementById('app');

let root = null;
let useHash = true;

let hash = '#'


let router = new Navigo(root, useHash, hash);

// đăng nhập
router.on('/sign-in', function () {
    $app.innerHTML = `<form-login></form-login>`;
}).resolve();

router.on("/student-profile", async function () {
    let currentUser = getCurrentUser();
    let result = await firebase
        .firestore()
        .collection("users")
        .doc(currentUser.id)
        .get();
    console.log(getDataFromDoc(result));

    let studentProfileData = getDataFromDoc(result);
    $app.innerHTML = `<student-profile id="${studentProfileData.id}"></student-profile>`;
});


window.router = router;
