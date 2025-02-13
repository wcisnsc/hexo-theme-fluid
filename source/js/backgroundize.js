// 在电脑端显示的背景图片链接
const desktopBgImageUrl = "url('/img/default.webp')";

// 在电脑端设置背景图片
document.querySelector('#web_bg').setAttribute('style', `background-image: ${desktopBgImageUrl};position: fixed;width: 100%;height: 100%;z-index: -1;background-size: cover;`);

// 设置banner的背景图片为空
document.querySelector("#banner").setAttribute('style', 'background-image: none');

// 设置banner的.mask背景颜色透明
document.querySelector("#banner .mask").setAttribute('style', 'background-color: rgba(0,0,0,0)');