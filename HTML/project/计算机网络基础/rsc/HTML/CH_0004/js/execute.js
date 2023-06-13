var ud = undefined;

window.addEventListener('load', function () {
    switch (sessionStorage.getItem(document.querySelector('title').innerText + 'execute.js_hadRun')) {
        case 'false':
            sessionStorage.setItem(document.querySelector('title').innerText + 'execute.js_hadRun', 'true');
            call();
            break;
    }
})

setDocTitle('2022-03-23');
sessionStorage.setItem(document.querySelector('title').innerText + 'execute.js_hadRun', 'false');

function call() {
    add_normalNode('2022-03-23', ['p', 'normal', '6% 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'absolute'],
        ['top', '3.6rem'],
        ['right', '16%'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['color', 'transparent'],

        ['js-event', 'setTimeout', '1800', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '1200', 'boxShadow', '1px 1px 24rem 2rem transparent'],
        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem'],
        ['js-event', 'setTimeout', '1960', 'color', '#363636']
    ]);

    add_normalNode(['3.23课上测验 超星主页'], ['a', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [
        ['textDecoration', 'none'],
        ['cursor', 'pointer'],
        ['color', '#999'],
        ['fontSize', '0.4rem'],
        ['element-attribute', 'href', 'http://i.mooc.chaoxing.com/space'],
        ['elemAtt', 'target', '_blank'],
        ['js-style', 'fontPosition', 'center-middle'],
        [
            'padding', '0.6rem 1rem'
        ]
    ], [
        ['position', 'absolute'],
        ['top', '12.8rem'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 2.4rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.2rem rgba(54, 54, 54,0.42)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.1rem transparent']
    ]);
}