"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const names = document.querySelectorAll(".name");
const dataID = document.querySelectorAll(".id");
const email = document.querySelectorAll(".email");
const address = document.querySelectorAll(".address");
const remove = document.querySelectorAll(".remove");
const userTabble = document.querySelectorAll(".user-tabble");
const showMore = document.querySelectorAll(".showMore");
const API = "https://jsonplaceholder.typicode.com/users";
const getdate = (resurse) => __awaiter(void 0, void 0, void 0, function* () {
    const request = yield fetch(resurse);
    const data = yield request.json();
    for (let i = 0; i < names.length; i++) {
        names[i].textContent = data[i].name;
        email[i].textContent = data[i].email;
        address[i].textContent = data[i].address.city;
    }
    remove.forEach((item, idx) => {
        item.addEventListener("click", () => {
            console.log(item, idx);
            userTabble[idx].style.opacity = "0.3";
            userTabble[idx].style.pointerEvents = "none";
        });
    });
    showMore.forEach((item, idx) => {
        item.addEventListener("click", () => {
            window.location.href = `https://jsonplaceholder.typicode.com/users/${data[idx].id}`;
        });
    });
    return data;
});
getdate(API)
    .then((date) => {
    console.log(date);
})
    .catch((err) => {
    console.log(new Error(`Not found... ${err}`));
});
// fetch(API).then((date) =>{
//     return date.json();
// }).then((dataJson) => {
//     console.log(dataJson);
// }).catch((err) =>{
//     console.log(err);
// })
// const getDate = (resource) =>{
//     return new Promise((resolve, reject) =>{
//         const request = new XMLHttpRequest();
//         request.addEventListener("readystatechange", () =>{
//             console.log(request);
//         })
//         request.open("GET", resource);
//         request.send();
//     })
// }
// getDate(API)
