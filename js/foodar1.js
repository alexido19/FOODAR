
function checkZipCode() {
    event.preventDefault();

    if(document.getElementById('zipcode').value < 20000) {
        document.getElementById('zip-result').innerHTML = 'Sorry, we haven’t expanded to that area yet';

    } else if (document.getElementById('zipcode').value >= 20000) {
        document.getElementById('zip-result').innerHTML = 'We’ve got your area covered!'
    } else {
        return null
    }
}

// Get first modal element 

var modal1 = document.getElementById('modal1');

var displayMode1 = document.getElementById('rest1');

displayMode1.addEventListener('mouseover', displayModal1);
displayMode1.addEventListener('mouseout', removeModal1);

function displayModal1() {
    modal1.style.display = 'block';
}

function removeModal1() {
    modal1.style.display = 'none';
}

//Get second modal
var modal2 = document.getElementById('modal2');

 var display2 = document.getElementById('rest2');

display2.addEventListener('mouseover',display2Modal);
display2.addEventListener('mouseout', remove2Modal);

function display2Modal() {
    modal2.style.display = 'block';
}

function remove2Modal() {
    modal2.style.display = 'none';
}




// Get third modal element
var modal = document.getElementById('modal');

var displayMode = document.getElementById('rest3');

displayMode.addEventListener('mouseover', displayModal);

displayMode.addEventListener('mouseout', removeModal);



function displayModal() {
    modal.style.display = 'block';
}

function removeModal() {
    modal.style.display = 'none';
}


var img = document.getElementById('img-banner');

var images = ['../banners/banner.png', '../banners/banner1.png','../banners/banner2.png'];
  

var x = 0;

function slide() {
    if(x >  images.length) {
        x++
    }else {
        x = 1;
    }
    img.innerHTML = "<img src ="+images[x-1]+">";
}

setInterval(slide, 5000);