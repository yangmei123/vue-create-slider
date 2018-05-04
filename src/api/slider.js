const _sliders = [
  {'url': '1.jpg'},
  {'url': '2.jpg'},
  {'url': '3.jpg'},
  {'url': '4.jpg'},
  {'url': '5.jpg'},
  {'url': '6.jpg'}
]

export default {
  getSlider (cb) {
    setTimeout(() => cb(_sliders), 100)
  }
}
