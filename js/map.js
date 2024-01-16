
const maps = document.querySelectorAll('.map');


maps.forEach((map) => {
    map.addEventListener('mouseover', () => {
        // 他の.map要素からnoactiveクラスを削除
        maps.forEach((otherMap) => {
            if (otherMap !== map) {
                otherMap.classList.remove('mapNoActive');
            }
        });

        // もしmouseoverをしている要素にactiveクラスがない場合、activeクラスを追加
        if (!map.classList.contains('mapActive')) {
            map.classList.add('mapActive');
        }

        // その他の.mapを持つ要素にnoactiveクラスを追加
        maps.forEach((otherMap) => {
            if (otherMap !== map && !otherMap.classList.contains('mapActive')) {
                otherMap.classList.add('mapNoActive');
            }
        });
    });
});

// マウスが.mapに乗っていない場合はactiveとnoactiveクラスを削除
document.addEventListener('mouseout', () => {
    maps.forEach((map) => {
        map.classList.remove('mapActive', 'mapNoActive');
    });
});