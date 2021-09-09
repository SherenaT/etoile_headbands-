"use strict";
const footer = document.querySelector(".footerPDiv");
const displayOrder = document.getElementById("ordConfirmation");

//buttons
const charQtyBtn = document.querySelector("#charQtyBtn");
const adeQtyBtn = document.querySelector("#adeQtyBtn");
const sarQtyBtn = document.querySelector("#sarQtyBtn");
const evaQtyBtn = document.querySelector("#evaQtyBtn");
const chkOutBtn = document.querySelector("#chkOut");
const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");
const confirmOdr = document.querySelector("#confirmOdr");

//dropdown
const charDrop = document.getElementById("charDrop");
const adeDrop = document.getElementById("adeDrop");
const sarDrop = document.getElementById("sarDrop");
const evaDrop = document.getElementById("evaDrop");

//forms
const charForm = document.getElementById("charForm");
const adeForm = document.getElementById("adeForm");
const sarForm = document.getElementById("sarForm");
const evaForm = document.getElementById("evaForm");

//modal event handler
modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
  console.log("click");

  while (displayOrder.firstChild) {
    displayOrder.removeChild(displayOrder.firstChild);
  }

  const newItem = document.createElement("div");
  newItem.className = "new-item";
  let charVal = charDrop.value;

  if (charVal >= 1) {
    newItem.innerHTML = `<div id='chkOutRow'>
        <div class='chkOutChar'><p><b>The Charlotte Knotted Headband </b></p></div>
        <div class='chkOutChar'><p>Qty: ${charVal}</p></div>
        <div class='chkOutChar'><p>Total(before tax): ${
          Number(charVal) * 12.99
        } <button class='delete-btn'>X</button></p></div>
        </div>`;
  } else {
    newItem.innerHTML = `<div id='chkOutRow'>
          <div class='chkOutChar'><h1>Cart is empty.</h1></div>
          </div>`;
  }

  displayOrder.appendChild(newItem);
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});
confirmOdr.addEventListener("click", function () {
  alert("Thank you for your purchase! Order Sumbitted.");
  modalBg.classList.remove("bg-active");
});

// //display items
// const displayItems = (arr) => {
//   console.log(arr);
//   while (displayOrder.firstChild) {
//     displayOrder.removeChild(displayOrder.firstChild);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     const newItem = document.createElement("div");

//     newItem.className = "new-item";

//     newItem.innerHTML = `<h1 class='item-title'>${arr[i].charlotteHBQty}</h1>
//         <p>priority: ${arr[i].priority}</p>
//         <button class='delete-btn' value="${arr[i].id}">delete</button>`;

//     displayOrder.appendChild(newItem);

//     let deleteBtns = document.getElementsByClassName("delete-btn");

//     for (let i = 0; i < deleteBtns.length; i++) {
//       deleteBtns[i].addEventListener("click", deleteItem);
//     }
//   }
// };

//headbands sent to axious
charForm.addEventListener("submit", (e) => {
  e.preventDefault(e);
  const newCharItem = {
    productName: "Charlotte HB",
    charlotteHBQty: charDrop.value,
  };
  axios.post("http://localhost:4000/api/charlotte", newCharItem).then((res) => {
    console.log(res.data);
  });
  charDrop.selectedIndex = 0;
});

adeForm.addEventListener("submit", (e) => {
  e.preventDefault(e);
  const newAdeItem = {
    productName: "Adelyn HB",
    adelynHBQty: adeDrop.value,
  };
  axios.post("http://localhost:4000/api/adelyn", newAdeItem).then((res) => {
    console.log(res.data);
  });
  adeDrop.selectedIndex = 0;
});

sarForm.addEventListener("submit", (e) => {
  e.preventDefault(e);
  const newSarItem = {
    productName: "Sarah HB",
    sarahHBQty: sarDrop.value,
  };
  axios.post("http://localhost:4000/api/sarah", newSarItem).then((res) => {
    console.log(res.data);
  });
  sarDrop.selectedIndex = 0;
});

evaForm.addEventListener("submit", (e) => {
  e.preventDefault(e);
  const newEvaItem = {
    productName: "Evangline HB",
    evanglineHBQty: evaDrop.value,
  };
  axios.post("http://localhost:4000/api/evangline", newEvaItem).then((res) => {
    console.log(res.data);
  });
  evaDrop.selectedIndex = 0;
});

//FOOTER
const noInfo = function (e) {
  alert("Website is under construction, information coming soon!");
};

footer.addEventListener("click", noInfo);
