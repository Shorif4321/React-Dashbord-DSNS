// Select2
$(document).ready(function() {
    //Initialize Select2 Elements
    $('.select2').select2();
    
    $('.select2bs4').select2({
        theme: 'bootstrap4'
      });
    
    $('.smsGroupSelect').select2({
        placeholder: "Group List",
    });
    $('.contactGroupSelect').select2({
        placeholder: "Group List",
    });
    $('.phoneGroupSelect').select2({
        placeholder: "Group List",
    });


});

// Send SMS

let contactFile = document.getElementById('contactFile');
let contactGroup = document.getElementById('contactGroup');
$('input[type=radio][name=r1]').change(function () {
    if (this.value == 'fileUpload') {
        contactGroup.style.display="none";
        contactFile.style.display="block";
    }
    else if (this.value == 'contactGroup') {
        contactGroup.style.display="block";
        contactFile.style.display="none";
    }
});


$(function() {
    $("span.group_item").click(function() {
       $(this).toggleClass("deactive");
    });
 });


// Tagify
$('[name=tags]').tagify({
    duplicates :false,
    placeholder: 'Add More Contact',
});


// Phonebook
$(function() {
    $(".delete_icon").click(function() {
        $(this).parent().parent().remove();
    });
 });



// Swipper
const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1500,
    autoplay: {
        delay: 5000,
        waitForTransition: true,
      },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    });





