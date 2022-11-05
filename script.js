//the first element
let add = document.querySelectorAll(".add");
let minus = document.querySelectorAll(".minus");
let orderDiv = document.querySelector(".total-order");
const totalDiv = document.querySelectorAll(".price");
let totalAmountDiv = document.querySelector(".total-amount");
let shippingDiv = document.querySelector(".shipping-div");
let taxDiv = document.querySelector(".tax-div");

let total = 0;
let totalAmount = 0;

add.forEach((e) => {
  // Incrementing quantity & Item Price
  e.addEventListener("click", () => {
    e.previousElementSibling.innerHTML++;
    total = total + 45;
    if (e.previousElementSibling.innerHTML > 0) {
      document.querySelector(
        ".qte-" + e.previousElementSibling.className.split(" ")[0]
      ).innerHTML = e.previousElementSibling.innerHTML * 45;
    }

    totalOrder();
  });
});

minus.forEach((e) => {
  e.addEventListener("click", () => {
    // Decrementing quantity & Item Price
    if (e.nextElementSibling.innerHTML > 0) {
      e.nextElementSibling.innerHTML--;
      total -= 45;
      document.querySelector(
        ".qte-" + e.nextElementSibling.className.split(" ")[0]
      ).innerHTML = e.nextElementSibling.innerHTML * 45;
    }
    // Default Price
    if (e.nextElementSibling.innerHTML === "0") {
      document.querySelector(
        ".qte-" + e.nextElementSibling.className.split(" ")[0]
      ).innerHTML = "45";
    }
    console.log(total);
    totalOrder();
  });
});

// Total order Price function
const totalOrder = () => {
  totalAmountDiv.innerHTML =
    total + Number(taxDiv.innerHTML) + Number(shippingDiv.innerHTML);

  console.log(total, totalAmountDiv.innerHTML);
};

//changing the color of the second item
let heart = document.querySelectorAll(".heart");

let j = 0;
const colors = ["red", "grey"];

heart.forEach((e) => {
  //   console.log(e);

  e.addEventListener("click", function onClick() {
    j = j >= colors.length - 1 ? 0 : j + 1;
    e.style.color = colors[j];
  });
});

//working on deleting the whole item each time the delete button is clicked
let deleteButtons = document.getElementsByClassName("delete-div");
// console.log(deleteButtons);

for (let p = 0; p < deleteButtons.length; p++) {
  let button = deleteButtons[p];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    // Total amount minus deleted Cart item amount
    if (total > 0) {
      total -= document.querySelector(
        ".delete-div" + button.className[0]
      ).innerHTML;
    }
    totalOrder();
    buttonClicked.parentElement.parentElement.parentElement.remove();
  });
}
