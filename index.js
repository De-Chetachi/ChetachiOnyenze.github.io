
function handleScroll() {
    const oldy = window.scrollY;
    function handleIntersection(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Element is in viewport, add the class
            entry.target.classList.add('in-viewport');
          } else {
            //Element is out of viewport, remove the class (optional)
            if(oldy < window.scrollY){
                entry.target.classList.remove('in-viewport'); // Good for animations
            }
          }
        });
    }
      
    const elementsToWatch = document.querySelectorAll('.animate'); // Select your elements
      
    const observer = new IntersectionObserver(handleIntersection);
      
    elementsToWatch.forEach(element => {
        observer.observe(element);
    });
}

function handleClick() {
  let side_menu = document.querySelector('.side');
  side_menu.classList.toggle('active');
}