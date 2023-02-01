//using selectors inside the element

const accItem = document.querySelectorAll(".accordion__item");

accItem.forEach(function(jedenItem) {
  const btn = jedenItem.querySelector(".question-btn");

  btn.addEventListener('click', function() {
    
    accItem.forEach(function(item) {
     
    
        item.classList.remove("show-text");
     
    });
    
     jedenItem.classList.toggle("show-text");
  })

});



















// accordionItem.forEach(function (accItem) {
//   const btn = accItem.querySelector(".question-btn");
//   //const itemBody = accItem.querySelector(".accordion__item-body");
//    //console.log(btn);

//   btn.addEventListener("click", function () {
//     console.log();
    

//     accordionItem.forEach(function (item) {
//       //console.log(question);
//       //console.log(item);
//       if (item !== question)  {
//         item.classList.remove("show-text");
       
//       }
//       item.classList.togg("show-text");
//     });
   
    
//   });
// });

