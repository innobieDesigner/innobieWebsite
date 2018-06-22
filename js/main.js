// const langSelect = document.getElementsByTagName("p").getAttribute("lang");
// const langHun = document.getElementsByTagName("p").getAttribute("lang");
const langEng = document.getElementsByClassName("langEng");
const langHun = document.getElementsByClassName("langHun");
const butt = document.getElementsByClassName('button');

function cte() {
    for (var i = 0; i < langEng.length; i++) {
        if(langEng[i] = butt) {
            langEng[i].style.display = 'inline-block';
        }
        else {
            langEng[i].style.display = 'block';
        }
    }
    for(var i = 0; i < langHun.length; i++) {
        langHun[i].style.display = 'none';
    }
}

function cth() {
    for (var i = 0; i < langHun.length; i++) {
        if(langHun[i] = butt) {
            langHun[i].style.display = 'inline-block';
        }
        else{
            langHun[i].style.display = 'block';
        }

    }
    for(var i = 0; i < langEng.length; i++) {
        langEng[i].style.display = 'none';
    }
}

$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
});

function mail(){
    window.open('mailto:info@innobie.hu');
}