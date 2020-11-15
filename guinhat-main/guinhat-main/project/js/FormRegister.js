// // import { md5 } from "./utils.js";
// const $template = document.getElementById('template-form-register');

// class FormRegister extends HTMLElement {
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' });
//         this.shadowRoot.appendChild($template.content.cloneNode(true));

//         this.$name = this.shadowRoot.getElementById('name');
//         this.$email = this.shadowRoot.getElementById('email');
//         this.$password = this.shadowRoot.getElementById('password');
//         this.$passwordConfirmation = this.shadowRoot.getElementById('password-confirmation');

//         this.$formRegister = this.shadowRoot.querySelector('.form-register');
//         this.$formRegister.onsubmit = (event) => {
//             event.preventDefault();
//             this.register();
//         }
//     }

//     async register() {
//         // lấy dữ liệu
//         let email = this.$email.value;
//         let name = this.$name.value;
//         let password = this.$password.value;
//         let passwordConfirmation = this.$passwordConfirmation.value;

//         console.log(name, email, password, passwordConfirmation);

//         // check dữ liệu
//         if (this.validate(name, email, password, passwordConfirmation)) {
//             alert('đăng kí thành công');

//             let email = this.$email.value;
//             let name = this.$name.value;
//             let password = this.$password.value;
//             let passwordConfirmation = this.$passwordConfirmation.value;

//             console.log(email, name, password, passwordConfirmation);

//             if (this.validate(name, email, password, passwordConfirmation)) {
//                 let result = await firebase
//                     .firestore()
//                     .collection('users')
//                     .where('email', '==', email)
//                     .get();
//                 console.log(result);
//                 if (result.empty) {
//                     await firebase.firestore().collection('users').add({
//                         name: name,
//                         email: email,
//                         password: md5(password)
//                     });
//                     alert('bạn đã đăng kí thành công')
//                 } else {
//                     alert('email này đã được đăng ký!');
//                 }

//                 // firebase.firestore().collection('users').add({
//                 //     name: name,
//                 //     email: email,
//                 //     password: password
//                 // })
//             }

//         }
//     }



//     validate(name, email, password, passwordConfirmation) {
//         let isPassed = true;
//         if (name == '') {
//             this.$name.error = "Nhập vào tên";
//             isPassed = false;
//         } else {
//             this.$name.error = "";
//         }

//         if (email == '') {
//             this.$email.error = "Nhập vào email";
//             isPassed = false;
//         } else {
//             this.$email.error = "";
//         }

//         if (password == '') {
//             isPassed = false;
//             this.$password.error = "Nhập vào mật khẩu"
//         } else {
//             this.$password.error = "";
//         }

//         if (passwordConfirmation == '' || passwordConfirmation != password) {
//             isPassed = false;
//             this.$passwordConfirmation.error = "Xác thực mật khẩu không đúng";
//         } else {
//             this.$passwordConfirmation.error = "";
//         }

//         return isPassed;
//     }
// }



// window.customElements.define('form-register', FormRegister);