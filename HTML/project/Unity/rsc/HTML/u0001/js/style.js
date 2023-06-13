let b = document.getElementById("banner");
let v = document.getElementById('bannerVideo');
let shelter = document.getElementById('shelter');
let HT = parseInt((document.body.style.fontSize).toString());

b.style.position = 'fixed';
b.style.position == 'fixed' && (function () {
    shelter.remove();
})();
setTimeout(function () {
    v.style.transition = 'all 1s';
    v.style.opacity = 1;
}, 6400)

let v2 = document.getElementById('bv2');
let b2 = document.getElementById('b2');
window.addEventListener('resize', function () {
    b2.style.Width = document.body.clientWidth + 'px';
});

b2.style.top = window.screen.availHeight + 'px';
// let b2s = bv2.querySelectorAll('source');
let b2s = [document.createElement('source'), document.createElement('source')];
b2s[0].setAttribute('type', 'video/webm');
b2s[1].setAttribute('type', 'video/mp4');
if (localStorage.getItem('equipmentType') == 1) {
    b2.style.height = document.documentElement.clientHeight + 'px';
    window.addEventListener('resize', function () {
        b2.style.height = document.documentElement.clientHeight + 'px';
    })
    window.addEventListener('scroll', function () {
        b2.style.height = document.documentElement.clientHeight + 'px';
    })
    b2.style.position = 'fixed';
    b2.style.top = '0';
    b2.style.left = '0';
    document.querySelector('style').innerText += 'li::marker { font-size: 0.12rem; }';

    b2.setAttribute('src', '../../media/86414963.mp4');
    v2.appendChild(b2s[0]);
    v2.appendChild(b2s[1]);
    b2s[0].setAttribute('src', '../../media/86414963.webm');
    b2s[1].setAttribute('src', '../../media/86414963.mp4');
    v2.src = '../../media/86414963.mp4';
    b.remove();
} else {
    // ctrl + del 删除空白
    // shift + del 删除整行
    v2.appendChild(b2s[0]);
    v2.appendChild(b2s[1]);
    b2s[0].setAttribute('src', '../../media/83914689.webm');
    b2s[1].setAttribute('src', '../../media/83914689.mp4');
    bv2.style.opacity = '0.3';
    b2.style.height = window.screen.availableHeight || document.documentElement.clientHeight + 'px';
    window.addEventListener('resize', function () {
        b2.style.height = window.screen.availableHeight || document.documentElement.clientHeight + 'px';
        v.style.width = document.documentElement.clientWidth + 'px';
        v.style.height = document.documentElement.clientHeight + 'px';
    });
    v.style.width = document.documentElement.clientWidth + 'px';
    v.style.height = document.documentElement.clientHeight + 'px';
    window.addEventListener('scroll', function () {
        let sct = document.documentElement.scrollTop ||
            document.body.scrollTop ||
            window.pageYOffset;
        b2.style.top = document.documentElement.clientHeight + 'px';
        b2.style.zIndex = -1;
        // console.log(b2.offsetTop + '\n' + sct + '\n' + document.documentElement.clientHeight);
        if (b2.offsetTop <= sct) {
            b2.style.position = 'fixed';
            b2.style.top = 0;
            b2.style.left = 0;
            b.style.display = 'none';
        }
        if (sct <= document.documentElement.clientHeight) {
            b2.style.position = 'absolute';
            b2.style.top = document.documentElement.clientHeight + 'px';
            b2.style.left = 0;
            b.style.display = 'block';
        }
    })
}