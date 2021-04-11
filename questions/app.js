
//using selectors inside the element
const questions = document.querySelectorAll(".questionquestions");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btnquestions");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-textquestions");
      }
    });

    question.classList.toggle("show-textquestions");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });
