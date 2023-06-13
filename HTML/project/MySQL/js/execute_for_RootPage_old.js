/* url: https://blog.csdn.net/wxzyq/article/details/6705512 */
var hh1 = ['h1'];
var hh2 = ['h2'];
var hh3 = ['h3'];
var hh4 = ['h4'];
var hh5 = ['h5'];
var hh6 = ['h6'];

var h1 = 'h1';
var h2 = 'h2';
var h3 = 'h3';
var h4 = 'h4';
var h5 = 'h5';
var h6 = 'h6';

var p = ['p'];
var ud = undefined;

var arr_01 = ['p', 0.4];
// notes 01
var arr_02_1 = [h4, 1, 111, ud, ud, ud, [3.2, 'L']];
var arr_02 = [h4, 1, ud, ud, ud, ud, [3.2, 'L']];

var titArr = [h3, 0.06, ud, ud, ud, '1rem'];

var random_num = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num <= 0.72 ? random_num = 0.8 : random_num = random_num + Math.round(Math.random());
random_num >= 1.24 ? random_num = 1 : random_num = random_num - 0.3;

// marginLeft
let random_bool = (function () {
    return Math.round(Math.random()) == true;
})();
let randomNum_000 = (function () {
    return Math.random() * 2;
})();
let randomNum_001 = (function () {
    return Math.random() * 3;
})();
let randomNum_002 = (function () {
    return Math.random() * 4;
})();
let randomNum_003 = (function () {
    return Math.random() * 5;
})();
let randomNum_004 = (function () {
    return Math.random() * 6;
})();

function split_p(str) {
    let arr = new Array;
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    return arr;
}
let step = 0;

function lfn(date, pth) {
    let path = './rsc/HTML/SQL_000' + step;
    if (pth) {
        path = pth;
    }
    let label = 'a'
    if (pth == 000) {
        label = 'span';
        step--;
    }
    add_normalNode([date], [label, 'normal', '0.2rem 5% 0 5%', ud, ud, 'paragraph-2em'], [
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

let paragraph_0000 = '';
window.addEventListener('load', function () {
    setDocTitle('MySQL 题库 归档');
    add_title('MySQL', [
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


        ['js-event', 'setTimeout', '1800', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '1600', 'boxShadow', '1px 1px 24rem 2rem transparent'],
        ['js-event', 'setTimeout', '1900', 'color', '#666'],
        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem'],

    ]);

    lfn('2022-03-14');
    lfn('2022-03-21');
    lfn('2022-03-28');
    lfn('2022-04-02');
    lfn('2022-04-11');
    lfn('2022-04-18');
    lfn('全部题目', './rsc/HTML/allQuestions');
})