const _sliders = [
  {'id': 1, 'url': '1.jpg', isActive: false},
  {'id': 2, 'url': '2.jpg', isActive: false},
  {'id': 3, 'url': '3.jpg', isActive: false},
  {'id': 4, 'url': '4.jpg', isActive: false}
];

export default {
  getSliders (cb) {
    setTimeout(() => cb(_sliders), 100);
  }
};
