const names = document.querySelectorAll(".name")!;
const dataID = document.querySelectorAll(".id")!;
const email = document.querySelectorAll(".email")!;
const address = document.querySelectorAll(".address")!;
const remove = document.querySelectorAll(".remove")!;
const userTabble = document.querySelectorAll<HTMLElement>(".user-tabble");
const showMore = document.querySelectorAll<HTMLElement>(".showMore");

const API = "https://jsonplaceholder.typicode.com/users";

const getdate = async (resurse: any) => {
  const request = await fetch(resurse);
  const data = await request.json();


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
};

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
