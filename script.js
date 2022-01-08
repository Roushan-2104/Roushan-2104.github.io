function hide_show(){
  let phone_menu = document.getElementById('phone-menu')
  let close = document.getElementById('close')
  let open = document.getElementById('open')
  let html = document.getElementById('html')
  html.classList.toggle('overflowY')
  close.classList.toggle('hide')
  open.classList.toggle('hide')
  phone_menu.classList.toggle('open')
}
const menu_btn = document.getElementById('menu-btn').addEventListener("click", (e) =>{
  e.preventDefault()
  hide_show()

})
const close_btn = document.getElementById('close-btn').addEventListener("click", (e) =>{
  e.preventDefault()
  hide_show()
})
const links_1 = document.getElementById('link_1').addEventListener('click' , (e) => {
  hide_show()
})
const links_2 = document.getElementById('link_2').addEventListener('click' , (e) => {
  hide_show()
})
const links_3 = document.getElementById('link_3').addEventListener('click' , (e) => {
  hide_show()
})
const links_4 = document.getElementById('link_4').addEventListener('click' , (e) => {
  hide_show()
})

window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks We will contact you soon!";
      setTimeout(() => {
        
      }, 2000);
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
      setTimeout(() => {
        
      }, 2000);
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    console.log(xhr.status)
    xhr.send(data);
  }
  