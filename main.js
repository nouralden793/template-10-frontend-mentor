let header = document.querySelector(".header");
let mobileUl = document.querySelector("ul.mobile");
let headerUlLis = document.querySelectorAll(".header ul li");
let navPs = document.querySelectorAll(".features .tabs .nav p");
let tabsDiv = document.querySelectorAll(".features .tabs > div:not(.nav)");
let faqCont = document.querySelector(".faq .faqContainer");
let contactBtn = document.querySelector(".contactBtn");
let contactInputCont = document.querySelector(".contact .input");
let contactInput = document.querySelector(".contact .input input");
let iContact = document.querySelector(".contact .i");
let pContact = document.querySelector(".contact .decline");
let emailReg = /\w+@gmail.\w+/gi;

window.onscroll = function () {
  if (window.scrollY > 0) {
    header.classList.add("ul-shadow-black");
  } else {
    header.classList.remove("ul-shadow-black");
  }
};

document.querySelector(".burger").addEventListener("click", (e) => {
  mobileUl.classList.toggle("appear-flex");
});

headerUlLis.forEach((li) => {
  li.addEventListener("click", (e) => {
    mobileUl.classList.remove("appear-flex");
  });
});

navPs.forEach((p) => {
  p.addEventListener("click", (e) => {
    navPs.forEach((para) => {
      para.classList.remove("active");
    });
    tabsDiv.forEach((tab) => {
      tab.classList.remove("appear");
    });
    e.target.classList.add("active");
    document.querySelector(e.target.dataset.sec).classList.add("appear");
  });
});

let jsData = [
  {
    ques: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    ques: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    ques: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    ques: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];
addFaqsToPage(jsData);

function addFaqsToPage(data) {
  data.forEach((obj) => {
    let mainDiv = document.createElement("div");
    mainDiv.className = "ques-answer";
    let ques = document.createElement("div");
    ques.className = "ques";
    let question = document.createElement("span");
    question.textContent = obj.ques;
    let i = document.createElement("i");
    i.className = "fa-solid fa-chevron-down";
    ques.appendChild(question);
    ques.appendChild(i);
    let answer = document.createElement("div");
    answer.className = "answ";
    answer.textContent = obj.answer;
    mainDiv.appendChild(ques);
    mainDiv.appendChild(answer);
    faqCont.appendChild(mainDiv);
    ques.addEventListener("click", (e) => {
      answer.classList.toggle("appear");
      if (answer.classList.contains("appear")) {
        i.className = "fa-solid fa-chevron-up";
        i.style.color = "#fb5859";
      } else {
        i.className = "fa-solid fa-chevron-down";
        i.style.color = "#5164e2";
      }
    });
  });
}

contactBtn.addEventListener("click", (e) => {
  if (contactInput.value != "") {
    if (emailReg.test(contactInput.value)) {
      return true;
    } else {
      iContact.classList.add("appear-flex");
      pContact.classList.add("appear-flex");
      contactInputCont.classList.remove("bg-transparent");
      contactInputCont.classList.remove("border-none");
      setTimeout(() => {
        e.preventDefault();
      }, 1);
    }
  } else {
    iContact.classList.add("appear-flex");
    pContact.classList.add("appear-flex");
    contactInputCont.classList.remove("bg-transparent");
    contactInputCont.classList.remove("border-none");
    e.preventDefault();
  }
});
