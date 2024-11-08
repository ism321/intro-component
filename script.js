"use s";

const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const input4 = document.querySelector(".input4");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const error3 = document.querySelector(".error3");
const error4 = document.querySelector(".error4");
const button = document.querySelector(".button");
const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let valid = true;

button.addEventListener("click", function (e) {
  inputFirst = input1.value;
  inputSecond = input2.value;
  inputThird = input3.value;
  inputFourth = input4.value;
  e.preventDefault();

  if (input1.value === "") {
    error1.classList.remove("hidden");
    image1.classList.remove("hidden");
    input1.classList.add("active");
    valid = false;
  } else {
    error1.classList.add("hidden");
    image1.classList.add("hidden");
    input4.classList.remove("active");
    valid = true;
  }
  if (input2.value === "") {
    error2.classList.remove("hidden");
    image2.classList.remove("hidden");
    input2.classList.add("active");
    valid = false;
  } else {
    error2.classList.add("hidden");
    image2.classList.add("hidden");
    input4.classList.remove("active");
    valid = true;
  }
  if (!pattern.test(input3.value)) {
    error3.classList.remove("hidden");
    image3.classList.remove("hidden");
    input3.classList.add("active");
    valid = false;
  } else {
    error3.classList.add("hidden");
    image3.classList.add("hidden");
    input4.classList.remove("active");
    valid = true;
  }
  if (input4.value === "") {
    error4.classList.remove("hidden");
    image4.classList.remove("hidden");
    input4.classList.add("active");
    valid = false;
  } else {
    error4.classList.add("hidden");
    image4.classList.add("hidden");
    input4.classList.remove("active");
    valid = true;
  }
  if (valid === true) {
    alert(`
                ${inputFirst}
                ${inputSecond}
                ${inputThird}
                ${inputFourth}`);

        window.location.reload();
  }
  //   if (
  //     input1.value !== "" &&
  //     input2.value !== "" &&
  //     pattern.test(input3.value) &&
  //     input4.value !== ""
  //   ) {
  //     alert(`
  //         ${inputFirst}
  //         ${inputSecond}
  //         ${inputThird}
  //         ${inputFourth}`);

  //     window.location.reload();
  //   } else {
  //     e.preventDefault();
  //   }
});
