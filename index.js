// Rabbit Parts
const allParts = [...document.getElementsByClassName('all')]
const ears = [...document.getElementsByClassName('ear-inner')]
const eyes = [...document.getElementsByClassName('eye')]
const eyeInner = document.getElementById('pupil')
const innerEyes = [...document.getElementsByClassName('eye-inner')]
const nose = document.querySelector('.nose')
const mouth = document.getElementById('mouth')
const background = document.getElementById('background')

const face1 = document.querySelector('.face-pear-thumbnail')
const face2 = document.querySelector('.face-thin-thumbnail')
const face3 = document.querySelector('.face-flat-thumbnail')
const face4 = document.querySelector('.face-round-thumbnail')
const ears1 = document.querySelector('.ears-long-thumbnail')
const ears2 = document.querySelector('.ears-med-thumbnail')
const ears3 = document.querySelector('.ears-short-thumbnail')
const eyes1 = document.querySelector('.eyes-oval-thumbnail')
const eyes2 = document.querySelector('.eyes-big-thumbnail')
const eyes3 = document.querySelector('.eyes-small-thumbnail')
const eyes4 = document.querySelector('.eyes-flat-thumbnail')
const nose1 = document.querySelector('.nose-oval-thumbnail')
const nose2 = document.querySelector('.nose-triangle-thumbnail')
const nose3 = document.querySelector('.nose-round-thumbnail')

// Pickr Settings

const properties = {
  theme: 'nano', // or 'monolith', or 'nano'
  defaultRepresentation: 'RGBA',
  closeWithKey: 'Escape',
  comparison: false,
  autoReposition: false,
  position: 'top-middle',
  appClass: 'color-class',
  swatches: [
      'rgb(244, 67, 54)',
      'rgb(233, 30, 99)',
      'rgb(156, 39, 176)',
      'rgb(103, 58, 183)',
      'rgb(63, 81, 181)',
      'rgb(33, 150, 243)',
      'rgb(3, 169, 244)',
      'rgb(0, 188, 212)',
      'rgb(0, 150, 136)',
      'rgb(76, 175, 80)',
      'rgb(139, 195, 74)',
      'rgb(205, 220, 57)',
      'rgb(255, 235, 59)',
      'rgb(255, 193, 7)'
  ],

  components: {
      // Main components
      preview: true,
      opacity: true,
      hue: true,

      // Input / output Options
      interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: false,
          cmyk: true,
          input: true,
          clear: true,
          save: false
      }
  }
}

const pickr1 = Pickr.create({...properties, 
  el: '#headPickr', default: '#fff'});
const pickr2 = Pickr.create({...properties, 
  el: '#earsPickr', default: '#ffc0cb'});
const pickr3 = Pickr.create({...properties,
  el: '#eyesPickr', default: '#403F3F'});
const pickr4 = Pickr.create({...properties,
  el: '#nosePickr', default: '#000'});
const pickr5 = Pickr.create({...properties,
  el: '#mouthPickr', default: '#D06E6E'});
const pickr6 = Pickr.create({...properties,
  el: '#innerEyesPickr', default: '#fff'});
  
pickr1.on('change', (color, instance) => {
  allParts.forEach(ele => ele.style.backgroundColor = color.toRGBA())
})

pickr2.on('change', (color, instance) => {
  ears.forEach(ele => ele.style.backgroundColor = color.toRGBA())
})

pickr3.on('change', (color, instance) => {
  eyes.forEach(ele => ele.style.backgroundColor = color.toRGBA())
})

pickr4.on('change', (color, instance) => {
  nose.style.backgroundColor = color.toRGBA()
})

pickr5.on('change', (color, instance) => {
  mouth.style.stroke = color.toRGBA()
})

pickr6.on('change', (color, instance) => {
  innerEyes.forEach(ele => ele.style.backgroundColor = color.toRGBA())
})

// Features Carousel Settings

const width = -6.5

const moveSlide = (clicked, direction) => {
    const { feature, current } = clicked
     const carousel = document.getElementById(`${feature}Carousel`)

    if (direction === 'right') {
        carousel.style.transform = `translateX(${current * width}em)`;
        clicked.current++;
    } else {
        carousel.style.transform = `translateX(${(current - 2) * width}em)`;
        clicked.current--;
    }
}

const clickedArrow = (feature, direction) => {
    const clicked = featuresMap.find(ele => ele.feature === feature)
    const { numOfParts, current } = clicked
    const maxNum = numOfParts - 1
       
    const clickRight = document.getElementById(`${feature}Right`)
    const clickLeft = document.getElementById(`${feature}Left`)
    
    if (direction === 'right') {
        current < maxNum ? ( moveSlide(clicked, direction), clickLeft.classList.remove('disable') )
        : current === maxNum ? ( moveSlide(clicked, direction), clickRight.classList.add('disable') )
        : null

    } else {
        current > 2 ? ( moveSlide(clicked, direction), clickRight.classList.remove('disable') )
        : current === 2 ? ( moveSlide(clicked, direction), clickLeft.classList.add('disable') )
        : null
    }
}

// Features Customization Settings

const featuresMap = [
  {feature: 'face', numOfParts: 4, current: 1},
  {feature: 'ears', numOfParts: 3, current: 1},
  {feature: 'eyes', numOfParts: 4, current: 1},
  {feature: 'nose', numOfParts: 3, current: 1}
]

const partsMap = [
  {
    name: 'face-pear', borderRadius: '35% 50% 70% 50%', margin: '-4.5em auto 0'
  },
  {
    name: 'face-thin', borderRadius: '45% 60% 30% 60%', margin: '-4.5em auto 0'
  },
  {
    name: 'face-flat', borderRadius: '80% 40% 80% 40%', margin: '-4.5em auto 0'
  },
  {
    name: 'face-round', borderRadius: '50% 45%', margin: '-4.5em auto 0'
  },
  {
    name: 'ears-long', height: '12em'
  },
  {
    name: 'ears-med', height: '10em'
  },
  {
    name: 'ears-short', height: '8em'
  },
  {
    name: 'eyes-oval', height: '2.2em', width: '1.5em', margin: '0 2em' 
  },
  {
    name: 'eyes-big', height: '2em', width: '2em', margin: '0 1.5em'
  },
  {
    name: 'eyes-small', height: '1.5em', width: '1.5em', margin: '0.5em 2em 0'
  },
  {
    name: 'eyes-flat', height: '1.5em', width: '2.2em', margin: '0.5em 1.6em 0'
  },
  {
    name: 'nose-oval', height: '1.2em', width: '1.8em', transform: 'rotate(0deg)', borderRadius: '50%'
  },
  {
    name: 'nose-triangle', height: '1.5em', width: '1.5em', transform: 'rotate(45deg)', borderRadius: '90% 40% 50% 40%'
  },
  {
    name: 'nose-round', height: '1.2em', width: '1.2em', transform: 'rotate(0deg)', borderRadius: '50%'
  }
]

const start = () => {
  background.style.display = 'block';
  background.classList.add('eggs')
  eyeInner.classList.remove('eye-p')
  setTimeout(() => {
    background.style.display = 'none';
    background.classList.remove('eggs')
    eyeInner.classList.add('eye-p')
  }, 60000)
}

const changeFeature = (feature, part) => {
    const selector = document.querySelector(`.${feature}-thumbnail`)
    const highlighted = partsMap.find(ele => ele.name === feature)
    
    const thumbnails = [...document.getElementsByClassName(`${part}-thumbnail`)]
    const pairs = [...document.getElementsByClassName(`${part}`)]
      
    if (!selector.classList.contains('current')) {
        thumbnails.forEach(ele => ele.classList.remove('current'))
        selector.classList.add('current')
        switch (true) {
          case part === "face":
            document.querySelector(`.face`).style.borderRadius = highlighted.borderRadius;
            document.querySelector(`.face`).style.margin = highlighted.margin;
            break;
          case part === "ear":
            pairs.forEach(ele => ele.style.height = highlighted.height);
            break;
          case part === "eye":
            pairs.forEach(ele => {
              ele.style.height = highlighted.height;
              ele.style.width = highlighted.width;
              ele.style.margin = highlighted.margin;
            });
            break;
          case part === "nose":
            nose.style.borderRadius = highlighted.borderRadius;
            nose.style.transform = highlighted.transform;
            nose.style.height = highlighted.height;
            nose.style.width = highlighted.width;
            break;
          default:
            null;
        }
    }

}

// Dark/Light Mode

const body = document.getElementById('body')
const h1 = document.getElementById('h1')
const colorMode = document.getElementById('colorMode')
const colorModeTitle = document.getElementById('colorModeTitle')
const toggle = document.getElementById('toggle')
const shadow = [...document.getElementsByClassName('shadow')]

let darkMode = false;

// Event Listeners

colorMode.addEventListener('click', () => {
  if (!darkMode) {
    body.classList.add('dark')
    h1.classList.add('dark')
    colorMode.classList.add('switch-dark')
    colorMode.style.flexDirection = 'row-reverse'
    colorModeTitle.textContent = 'dark mode'
    toggle.classList.add('switch-light')
    shadow.forEach(ele => ele.classList.add("shadow-dark"))
  } else {
    body.classList.remove('dark')
    h1.classList.remove('dark')
    colorMode.classList.remove('switch-dark')
    colorMode.style.flexDirection = 'row'
    toggle.classList.remove('switch-light')
    colorModeTitle.textContent = 'light mode'
    shadow.forEach(ele => ele.classList.remove("shadow-dark"))
  }
  darkMode = !darkMode
})

faceRight.addEventListener('click', () => clickedArrow('face', 'right'))
faceLeft.addEventListener("click", () => clickedArrow('face', 'left'))
earsRight.addEventListener('click', () => clickedArrow('ears', 'right'))
earsLeft.addEventListener("click", () => clickedArrow('ears', 'left'))
eyesRight.addEventListener('click', () => clickedArrow('eyes', 'right'))
eyesLeft.addEventListener("click", () => clickedArrow('eyes', 'left'))
noseRight.addEventListener('click', () => clickedArrow('nose', 'right'))
noseLeft.addEventListener("click", () => clickedArrow('nose', 'left'))

face1.addEventListener('click', () => changeFeature('face-pear', 'face'))
face2.addEventListener('click', () => changeFeature('face-thin', 'face'))
face3.addEventListener('click', () => changeFeature('face-flat', 'face'))
face4.addEventListener('click', () => changeFeature('face-round', 'face'))
ears1.addEventListener('click', () => changeFeature('ears-long', 'ear'))
ears2.addEventListener('click', () => changeFeature('ears-med', 'ear'))
ears3.addEventListener('click', () => changeFeature('ears-short', 'ear'))
eyes1.addEventListener('click', () => changeFeature('eyes-oval', 'eye'))
eyes2.addEventListener('click', () => changeFeature('eyes-big', 'eye'))
eyes3.addEventListener('click', () => changeFeature('eyes-small', 'eye'))
eyes4.addEventListener('click', () => changeFeature('eyes-flat', 'eye'))
nose1.addEventListener('click', () => changeFeature('nose-oval', 'nose'))
nose2.addEventListener('click', () => changeFeature('nose-triangle', 'nose'))
nose3.addEventListener('click', () => changeFeature('nose-round', 'nose'))

eyeInner.addEventListener('click', start)