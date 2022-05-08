$(document).ready(function(){
     $('.slider').slick({
       prevArrow:"<button type='button' class='slick-arrow prevv'><img src='img/prev.png'></button>",
       nextArrow:"<button type='button' class='slick-arrow nextt'><img src='img/next.png'></button>",
       speed:1000
     });
});

// $('#number').mask("+(999) 99-999-99-99");

const modalBg =  $(".modal-bg").get(0),
      modalContact = $(".callm").get(0),
      modalBuy = $(".buy").get(0),
      modalThanks = $(".thanks").get(0),
      callReq = $(".call").get(),
      closeModal = $(".close_icon").get(),
      buy = $(".buy-button").get();
function disableScroll() {
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}

function hideModal(){
  modalBg.style.display = "none";
  let children =  $('.modal-bg > div');
  children.each((item) => {
    children[item].style.display ="none";
  });
}

function show(e){
  e.style.display = "flex";
}

// console.log(  $('.call'));
// console.log(document.querySelectorAll(".call"));
// $('.call').on('click', function(e) {
//   e.stopPropagation();
//   $('.modal-bg').addClass("active");
//   $('.callm').addClass("active");
// })
//
// $('.close_icon').on('click', function(e) {
//   e.stopPropagation();
//   $('.modal-bg').removeClass('active')
// })
//
// $('.modal_window').on('click', function(e) {
//   e.stopPropagation();
// })
//
// $(document).on('click', function(e) {
//   $('.modal-bg').fadeOut();
// })


callReq.forEach( (item, i) => {
  item.addEventListener("click", () =>{
    show(modalBg);
    show(modalContact);
    disableScroll();
  });
});

buy.forEach( (item, i) => {
  item.addEventListener("click", () =>{
    show(modalBg);
    show(modalBuy);
    disableScroll();
  });
});

closeModal.forEach((item, i) => {
  item.addEventListener("click", () => {
    hideModal();
    enableScroll();
  });
});

modalBg.addEventListener("click", (e) =>{
  if(modalBg == e.target){
    hideModal();
    enableScroll();
  }
});

document.querySelector(".go-products").addEventListener("click", (e) =>{
  document.querySelector(".fifth-page").scrollIntoView();
});

document.addEventListener("keydown", (e) => {
  if(e.code === "Escape"){
    hideModal();
    enableScroll();
  }
});

// $(".tab").each( (item) =>{
//   $(this).on("click", () => {
//     let children =  $('.all-tabs > div');
//     children.each((item) => {
//       children[item].classList.remove("active");
//     });
//     $(this).toggleClass("active");
//   });
// });

document.querySelectorAll(".tab").forEach((item, i) => {
  item.addEventListener("click", () =>{
    let children_tab =  $('.all-tabs > div');
    children_tab.each((item) => {
      children_tab[item].classList.remove("active");
    });

    let children_prods =  document.querySelectorAll('.fifth-page .container > div');
    children_prods.forEach((item, i) => {
      children_prods[i].classList.remove("active_prod");
    });

    item.classList.add("active");

    let prods = document.querySelectorAll(".products");
    prods[i].classList.add("active_prod");
  });
});



document.querySelectorAll("form").forEach((item) => {
  item.addEventListener("submit", (e) =>{
    e.preventDefault();
    hideModal();
    show(modalBg);
    show(modalThanks);
  });
});

document.querySelectorAll(".more").forEach((item, i) => {
  item.addEventListener("click", () =>{
    let parent = item.parentElement.parentElement;
    parent.classList.add('content_active');
  });
});

document.querySelectorAll(".less").forEach((item, i) => {
  item.addEventListener("click", () =>{
    let parent = item.parentElement.parentElement;
    parent.classList.remove('content_active');
  });
});

// document.querySelectorAll(".tab").forEach((item, i) => {
//   item.addEventListener("click", () => {
//     item.classList.add("active");
//     console.log(item);
//   });
// });

// document.querySelectorAll(".all-tabs").forEach((item, i) => {
//     item.addEventListener("click", () =>{
//     let children_tab =  $('.all-tabs > div');
//     children_tab.each((item1) => {
//       console.log(children_tab[item1]);
//       children_tab[item1].removeClass=".active";
//     });
//   });
// });
