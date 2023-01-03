 var indicator = document.querySelector('.nav-indicator');
     var items = document.querySelectorAll('.nav-item');
    function handleIndicator(el) {
         items.forEach(function (item) {
             item.classList.remove('is-active');
             item.removeAttribute('style');
         });
         indicator.style.width = "".concat(el.offsetWidth, "px");
         indicator.style.left = "".concat(el.offsetLeft, "px");
         indicator.style.backgroundColor = el.getAttribute('active-color');
         el.classList.add('is-active');
         el.style.color = el.getAttribute('active-color');
     }
    items.forEach(function (item, index) {
         item.addEventListener('click', function (e) {
             handleIndicator(e.target);
         });
         item.classList.contains('is-active') && handleIndicator(item);
     });
 
    //  chart---------------------
    // const labels = ['0:00', '4:00', '8:00', '12:00', '16:00', '20:00  ']

    // const data = {
    //   labels: labels,
    //   datasets: [
    //     {
    //       label: 'Top 1',
    //       backgroundColor: 'blue',
    //       borderColor: 'blue',
    //       data: [10, 27, 56, 34, 24, 53],
    //       tension: 0.4,
    //     },
    //     {
    //       label: 'Top 2',
    //       backgroundColor: 'red',
    //       borderColor: 'red', 
    //       data: [0, 34, 32, 23, 30, 82],
    //       tension: 0.4,
    //     },
    //     {
    //       label: 'Top 3',
    //       backgroundColor: 'yellow',
    //       borderColor: 'yellow',
    //       data: [0, 2, 6, 3, 2, 70],
    //       tension: 0.4,
    //     },
    //   ],
    // }
    // const config = {
    //   type: 'line',
    //   data: data,
    // }
    
    // const canvas = document.getElementById('canvas')
    // const chart = new Chart(canvas, config)
    let mybutton = document.getElementById("mybtt");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

     /*Hàm Mở Form*/
 function moForm() {
  document.getElementById("myForm").style.display = "block";
}
/*Hàm Đóng Form*/
function dongForm() {
  document.getElementById("myForm").style.display = "none";
}



