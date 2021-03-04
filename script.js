
// Slideshow
const slidedhowDivs = () => {
  // total of 5 images in the slideshow folder
  const imageList = [1,2,3,4,5];
  imageList.forEach(i => {
    const div = document.createElement('div');
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    // add class to be visible
    i === 1 && div.classList.add('change')

    document.querySelector('.slideshow').appendChild(div);
  })
}

slidedhowDivs()  

/** rotate class 'change' */
const divs = document.querySelectorAll('.slideshow div')
let counter = 0
const slideshow = () => {
    setInterval(() => { 
      counter++
      // first, remove class 'change' on the current target
      const div = document.querySelector('.slideshow .change')
      div.classList.remove('change')

      // then, assign class 'change' to the current target's next element
      if(counter < divs.length) {
          div.nextElementSibling.classList.add('change')
      } else {
          divs[0].classList.add('change')
          counter = 0
      } 

    }, 10000)
}

slideshow()
// End of Slideshow