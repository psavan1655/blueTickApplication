function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


document.addEventListener("DOMContentLoaded", function() {
    fields.name= document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.contact = document.getElementById('contact');
    fields.message = document.getElementById('message');
   })

   function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }

   function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

   function isNumber(num) {
    return (num.length == 10) && !isNaN(num);
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.name, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.contact, isNumber);
    valid &= fieldValidation(fields.question, isNotEmpty);
    valid &= arePasswordsEqual();
   
    return valid;
   }
