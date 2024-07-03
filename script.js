window.addEventListener('scroll', function () {
    const scrollPosition = Math.min(window.pageYOffset, 300);

    const sun = document.getElementById("sun");
    const hillLeft = document.getElementById('hill-left');
    const mountainLeft = document.getElementById('mountain-left');
    const mountainRight = document.getElementById('mountain-right');
    const flowerLeft = document.getElementById('flower-left');
    const hillRight = document.getElementById('hill-right');
    const flowerRight = document.getElementById('flower-right');
    const cloudOne = document.getElementById('cloud-one');
    const cloudThree = document.getElementById('cloud-three');

    sun.style.transform = 'translateY(' + scrollPosition * 0.6 + 'px)';
    hillLeft.style.transform = 'translateX(' + -scrollPosition * 0.4 + 'px)';
    mountainLeft.style.transform = 'translateX(' + -scrollPosition * 0.3 + 'px)';
    mountainRight.style.transform = 'translateX(' + scrollPosition * 0.3 + 'px)';
    flowerLeft.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
    flowerLeft.style.transform = 'translateX(' + -scrollPosition * 0.05 + 'px)';
    hillRight.style.transform = 'translateX(' + scrollPosition * 0.4 + 'px)';
    flowerRight.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';
    flowerRight.style.transform = 'translateX(' + scrollPosition * 0.05 + 'px)';
    cloudOne.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
    cloudThree.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
});


const fadeInSection = document.querySelector('.sec');

window.addEventListener('scroll', () => {
    const sectionPosition = fadeInSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.0;

    if (sectionPosition < screenPosition) {
        fadeInSection.classList.add('fade-in');
    } else {
        fadeInSection.classList.remove('fade-in');
    }
});




window.addEventListener("load", function() {
    const form = document.getElementById('submit-to-google-sheet');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });
  
  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}