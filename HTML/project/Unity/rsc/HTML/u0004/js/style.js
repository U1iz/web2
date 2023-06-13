let b = document.getElementById("banner");
let v = document.getElementById('bannerVideo');
let shelter = document.getElementById('shelter');
let HT = parseInt((document.documentElement.style.fontSize).toString());

b.style.position = 'fixed';
b.style.position == 'fixed' && (function () {
    shelter.style.display = 'none';
})();
setTimeout(function () {
    v.style.transition = 'all 1s';
    v.style.opacity = 1;
}, 6400)

let v2 = document.getElementById('bv2');
let b2 = document.getElementById('b2');

if (localStorage.getItem('equipmentType') == 1) {
    shelter.style.display = 'block';
    b2.remove();
    document.querySelector('style').innerText += 'li::marker { font-size: 0.12rem; }';
} else {
    b2.style.height = window.screen.availableHeight || document.documentElement.clientHeight + 'px';
    window.addEventListener('resize', function () {
        b2.style.height = window.screen.availableHeight || document.documentElement.clientHeight + 'px';
    });
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