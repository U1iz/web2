var random_num = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num <= 0.72 ? random_num = 0.8 : random_num = random_num + Math.round(Math.random());
random_num >= 1.24 ? random_num = 1 : random_num = random_num - 0.3;

let step = -2;

function lfn(date, pth) {
    let path = './rsc/HTML/u000' + step;
    pth && (function () {
        path = pth;
    })();
    step.toString().length == 2 && (function () {
        path = './rsc/HTML/u00' + step;
    })();

    let label = 'a'
    pth == 000 && (function () {
        label = 'span';
    })();

    add_normalNode([date], [label, 'normal', '0.2rem 5% 0 5%', undefined, undefined, 'paragraph-2em'], [
        ['textDecoration', 'none'],
        ['width', '100%'],
        ['height', '100%'],
        ['cursor', 'pointer'],
        ['fontSize', '0.84rem'],
        ['letterSpacing', '1rem'],
        ['js-style', 'fontPosition', 'center-middle'],
        ['color', 'transparent'],
        ['element-attribute', 'href', path + '/index.html'],
        ['element-attribute', 'target', '_blank'],
        ['js-event', 'setTimeout', '240', 'transition', 'all 0.64s'],

        ['js-event', 'setTimeout', '720', 'color', '#999']
    ], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '2000', 'MT', '0.6rem']
    ]);
    step++;
}
setTimeout(function () {
    //手动触发窗口resize事件
    if (document.createEvent) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("resize", true, true);
        window.dispatchEvent(event);
    } else if (document.createEventObject) {
        window.fireEvent("onresize");
    }
}, 100);

setDocTitle('虚拟现实制作 notes 归档');
sessionStorage.setItem(document.querySelector('title').innerText + 'root_execute.js_hadRun', 'false');

// main execute
switch (sessionStorage.getItem(document.querySelector('title').innerText + 'root_execute.js_hadRun')) {
    case 'false':
        call();
        sessionStorage.setItem(document.querySelector('title').innerText + 'root_execute.js_hadRun', 'true');
        break;
}


function call() {
    add_title('计算机201 32 郁志良 模块化构建整理', [
        ['label', 'h1'],
        ['backgroundColor', 'transparent'],
        ['whiteSpace', 'nowrap'],
        ['font', '800 1.6rem "MicroSoft YaHei"'],
        ['boxShadow', '1px 1px 1rem 0.125rem transparent'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['borderRadius', '64px 0 0 64px'],
        ['margin', '1rem -0.6rem 1.4rem 12rem'],
        ['transition', 'all ' + random_num + 's'],

        ['js-style', 'fontPosition', '0.24-middle'],
        ['js-addEventListener', 'mouseenter', 'ML', '2.4rem'],
        ['js-addEventListener', 'mouseenter', 'LSP', '0.6rem'],
        ['js-addEventListener', 'mouseenter', 'TID', '4.6rem'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        // leave
        ['js-addEventListener', 'mouseleave', 'ML', '12rem'],
        ['js-addEventListener', 'mouseleave', 'LSP', 'normal'],
        ['js-addEventListener', 'mouseleave', 'color', '#666'],
        ['js-addEventListener', 'mouseleave', 'BGC', 'transparent'],
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', '0.24-middle'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],
        // click
        ['js-AEL', 'click', 'BGC', '#222'],
        ['js-AEL', 'click', 'color', '#ddd'],
    ]);

    lfn('2022-03-04(施工中)');
    lfn('2022-03-10(施工中)');
    lfn('2022-03-11(施工中)');
    lfn('2022-03-17(施工中)');
    lfn('2022-03-18(施工中)');
    lfn('2022-03-24(施工中)');
    lfn('2022-03-25');
    lfn('2022-03-31');
    lfn('2022-04-01(施工中)');
    lfn('2022-04-07(施工中)');
    lfn('2022-04-08(施工中)');

}
let div = document.createElement("div");
div.style.height = '64%';
document.body.appendChild(div);
document.documentElement.style.height = '100%';