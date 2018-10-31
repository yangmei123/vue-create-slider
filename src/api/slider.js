// 把从腰请求服务端的操作整合到一个文件里，便于管理
// 服务层
const _sliders = [
  {'id': 1, 'url': '1.jpg', isActive: false},
  {'id': 2, 'url': '2.jpg', isActive: false},
  {'id': 3, 'url': '3.jpg', isActive: false},
  {'id': 4, 'url': '4.jpg', isActive: false}
];

export default {
  getSliders (cb) { // 模拟请求
    setTimeout(() => cb(_sliders), 100);
  }
};
