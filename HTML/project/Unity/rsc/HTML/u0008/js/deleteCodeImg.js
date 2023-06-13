localStorage.getItem('hadDone_delete') == undefined && (function () {
    localStorage.setItem('hadDone_delete', 0);
})();


function removeMedia_ch() {
    let mm = localStorage.getItem('mediaArr').split(',');

    function removeE(name) {
        name.timer = setInterval(function () {
            if (document.getElementById(name)) {
                document.getElementById(name).remove();
                console.log(document.getElementById(name));
                clearInterval(name.timer);
            } else {}
        }, 360);

    }
    for (let izz = 1; izz < mm.length; izz++) {
        removeE(mm[izz]);
    }
}

if (localStorage.getItem('hadDone_delete') != 999) {

    const div = document.createElement('div');
    div.style.position = 'sticky';
    div.style.top = '12rem';
    div.style.left = '1rem';
    div.style.marginLeft = '6rem';
    div.style.color = '#666';
    div.style.padding = '0.2rem 0.3rem';
    div.style.borderRadius = '0.4rem 0 0 0.4rem';
    div.style.backgroundColor = 'rgba(92, 45, 223, 0.24)';
    div.style.transition = 'all 0.24s';
    div.style.zIndex = '999999999';
    div.style.whiteSpace = 'nowrap';
    setTimeout(function () {
        div.style.marginLeft = document.body.clientWidth + 'px';
        setTimeout(function () {
            div.remove();
        }, 320)
    }, 24600)
    document.body.appendChild(div);
    switch (parseInt(localStorage.getItem('hadDone_delete')) % 12) {
        case 0:
            div.innerText = '删除所有可删元素(实例代码和实时图片)';
            div.onclick = function () {
                div.innerText == '删除所有可删元素(实例代码和实时图片)' && (function () {
                    removeMedia_ch();
                })();

                div.innerText = '之后12次内加载后自动执行此操作';

                div.onclick = function () {
                    div.remove();
                    localStorage.setItem('hadDone_delete', parseInt(localStorage.getItem(
                        'hadDone_delete')) + 1)
                }
            }
            break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
            div.remove();
            removeMedia_ch();
            localStorage.setItem('hadDone_delete', parseInt(localStorage.getItem(
                'hadDone_delete')) + 1)
            break;

    }
}