
let swipeOption = {
    loop: true, // スライダーをループさせる設定
    effect: 'fade', // フェードさせる為の設定
    fadeEffect: {
        crossFade: true//縦横比が統一されない画像の場合、重なる場合がある為、それを防ぐ設定
    },

    autoplay: {
        delay: 4000, // 秒後に次の画像にいくようにする設定
        disableOnInteraction: false,// ユーザーが操作後、自動再生を再開する設定
    },
    speed: 2000, // 2秒かけ次の画像へ移動させる設定
    allowTouchMove: false, // マウスでのスワイプを禁止する設定
}
new Swiper('.swiper-container', swipeOption);
