const backgroung_array = [
    'blue50.png',
    'blue60.png',
    'blue70.png',
    'darkblue30.png',
    'darkblue50.png',
    'darkblue70.png',
    'green50.png',
    'green60.png',
    'green70.png',
    'grey40.png',
    'grey70.png',
    'grey80.png',
    'red50.png',
    'red60.png',
    'red70.png',
    'yellow50.png',
    'yellow60.png',
    'yellow70.png',
]

const neck_array = [
    'bend-backward.png',
    'bend-forward.png',
    'default.png',
    'thick.png',
]

const ears_array = [
    'default.png',
    'tilt-backward.png',
    'tilt-forward.png'
]

const eyes_array = [
    'angry.png',
    'default.png',
    'naughty.png',
    'panda.png',
    'smart.png',
    'star.png',
]

const hair_array = [
    'bang.png',
    'curls.png',
    'default.png',
    'elegant.png',
    'fancy.png',
    'quiff.png',
    'short.png',
]

const leg_array = [
    'bubble-tea.png',
    'cookie.png',
    'default.png',
    'game-console.png',
    'tilt-backward.png',
    'tilt-forward.png',
]

const mouth_array = [
    'astonished.png',
    'default.png',
    'eating.png',
    'laugh.png',
    'tongue.png',
]

const accessories_array = [
    'earings.png',
    'flower.png',
    'glasses.png',
    'headphone.png',
]

const randomBtn = document.getElementById('random')

function getRandom() {
    randomIndexBackground = Math.floor(Math.random() * backgroung_array.length)
    randomIndexNeck = Math.floor(Math.random() * neck_array.length)
    randomIndexEars = Math.floor(Math.random() * ears_array.length)
    randomIndexEyes = Math.floor(Math.random() * eyes_array.length)
    randomIndexHair = Math.floor(Math.random() * hair_array.length)
    randomIndexLeg = Math.floor(Math.random() * leg_array.length)
    randomIndexMouth = Math.floor(Math.random() * mouth_array.length)
    randomIndexAccessories = Math.floor(Math.random() * accessories_array.length)

    selectedBackground = backgroung_array[randomIndexBackground]
    selectedNeck = neck_array[randomIndexNeck]
    selectedEars = ears_array[randomIndexEars]
    selectedEyes = eyes_array[randomIndexEyes]
    selectedHair = hair_array[randomIndexHair]
    selectedLeg = leg_array[randomIndexLeg]
    selectedMouth = mouth_array[randomIndexMouth]
    selectedAccessories = accessories_array[randomIndexAccessories]

    document.getElementById('background').src = `img/alpaca 2/backgrounds/${selectedBackground}`
    document.getElementById('neck').src = `img/alpaca 2/neck/${selectedNeck}`
    document.getElementById('ears').src = `img/alpaca 2/ears/${selectedEars}`
    document.getElementById('eyes').src = `img/alpaca 2/eyes/${selectedEyes}`
    document.getElementById('hair').src = `img/alpaca 2/hair/${selectedHair}`
    document.getElementById('leg').src = `img/alpaca 2/leg/${selectedLeg}`
    document.getElementById('mouth').src = `img/alpaca 2/mouth/${selectedMouth}`
    document.getElementById('accessories').src = `img/alpaca 2/accessories/${selectedAccessories}`
}

randomBtn.addEventListener('click', getRandom())