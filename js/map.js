// const maps = document.querySelectorAll('.map');

// maps.forEach((map) => {
//     map.addEventListener('mouseover', () => {
//         map.classList.add('active');
//     });
// });

const maps = document.querySelectorAll('.map');


maps.forEach((map) => {
    map.addEventListener('mouseover', () => {
        // 他の.map要素からnoactiveクラスを削除
        maps.forEach((otherMap) => {
            if (otherMap !== map) {
                otherMap.classList.remove('noactive');
            }
        });

        // もしmouseoverをしている要素にactiveクラスがない場合、activeクラスを追加
        if (!map.classList.contains('active')) {
            map.classList.add('active');
        }

        // その他の.mapを持つ要素にnoactiveクラスを追加
        maps.forEach((otherMap) => {
            if (otherMap !== map && !otherMap.classList.contains('active')) {
                otherMap.classList.add('noactive');
            }
        });
    });
});

// マウスが.mapに乗っていない場合はactiveとnoactiveクラスを削除
document.addEventListener('mouseout', () => {
    maps.forEach((map) => {
        map.classList.remove('active', 'noactive','active2');
    });
});