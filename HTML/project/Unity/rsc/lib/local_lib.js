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
var arr_02_1 = [h4, 1, 111, ud, ud, ud, '3.2L'];
var arr_02 = [h4, 1, ud, ud, ud, ud, '3.2L'];

var titArr = [h3, 0.06, ud, ud, ud, '1rem'];
sessionStorage.setItem('mediaStep', 0);
sessionStorage.setItem('mediaArr', '');
sessionStorage.setItem('hidStep', 0);
// marginLeft

// sessionStorage
var random_num_00 = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num_00 <= 0.72 ? random_num_00 = 0.96 : random_num_00 = random_num_00 + Math.round(Math.random());
random_num_00 >= 1.64 ? random_num_00 = 1.64 : random_num_00 = random_num_00 - 0.3;
random_num_00 *= 1.2;
var random_num_01 = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num_01 <= 0.72 ? random_num_01 = 0.96 : random_num_01 = random_num_01 + Math.round(Math.random());
random_num_01 >= 1.64 ? random_num_01 = 1.54 : random_num_01 = random_num_01 - 0.3;
random_num_01 *= 1.2;
var random_num_02 = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num_02 <= 0.72 ? random_num_02 = 0.96 : random_num_02 = random_num_02 + Math.round(Math.random());
random_num_02 >= 1.64 ? random_num_02 = 1.54 : random_num_02 = random_num_02 - 0.3;
random_num_02 *= 1.2;
var random_num_03 = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num_03 <= 0.72 ? random_num_03 = 0.96 : random_num_03 = random_num_03 + Math.round(Math.random());
random_num_03 >= 1.64 ? random_num_03 = 1.64 : random_num_03 = random_num_03 - 0.3;
random_num_03 *= 1.2;
var random_num_04 = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num_04 <= 0.72 ? random_num_04 = 0.96 : random_num_04 = random_num_04 + Math.round(Math.random());
random_num_04 >= 1.32 ? random_num_04 = 1.64 : random_num_04 = random_num_04 - 0.3;
random_num_04 *= 1.2;
var random_num_05 = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num_05 <= 0.72 ? random_num_05 = 0.96 : random_num_05 = random_num_05 + Math.round(Math.random());
random_num_05 >= 1.32 ? random_num_05 = 1.64 : random_num_05 = random_num_05 - 0.3;
random_num_05 *= 1.2;
var random_num_06 = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num_06 <= 0.72 ? random_num_06 = 0.96 : random_num_06 = random_num_06 + Math.round(Math.random());
random_num_06 >= 1.32 ? random_num_06 = 1.64 : random_num_06 = random_num_06 - 0.3;
random_num_06 *= 1.2;
var random_num_07 = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num_07 <= 0.72 ? random_num_07 = 0.96 : random_num_07 = random_num_07 + Math.round(Math.random());
random_num_07 >= 1.32 ? random_num_07 = 1.64 : random_num_07 = random_num_07 - 0.3;
random_num_07 *= 1.2;


function split_p(str) {
    let arr = new Array;
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    return arr;
}

setDocTitle('2022-03-24');
sessionStorage.setItem(document.querySelector('title').innerText + 'execute.js_hadRun', 'false');


let LSMn_step = 0;

// 含字体
function topic(tex, color, bgc) {
    // label, space, mgn, name, bgColor, textIndent, font
    // add_normalNode(split_p('大模块~~~~~~~~~~~~~~~~~~~~~~'), ['h3', '0.128', '1rem 0 0.36rem 1rem', ud, ud, '0rem'], [
    add_normalNode(split_p(tex), ['h3', '0.128', '1rem 0 0.36rem 0rem', ud, ud, '0rem'],
        [
            // children
            ['fontSize', '2rem'],
            ['js-event', 'setTimeout', '2400', 'MR', '0'],
            ['fontFamily', '迷你简丫丫'],
            // ['JSC', 'LTS'],
        ],
        [
            // father
            ['position', 'relative'],
            ['zIndex', '9'],
            ['top', '2rem'],
            ['MT', '-12.4rem'],
            ['BGC', 'transparent'],

            ['js-event', 'setTimeout', '2200', 'color', '#2233'],
            ['js-event', 'setTimeout', '4200', 'color', color],
            ['js-event', 'setTimeout', '6400', 'textShadow', '0.036rem 0.024rem 0.0128rem rgba(110, 43, 236, 0.712)'],

            ['whiteSpace', 'nowrap'],
            ['js-event', 'setTimeout', '3200', 'whiteSpace', 'normal'],

            ['js-event', 'setTimeout', '2400', 'transition', 'all ' + random_num_06 + 's'],
            ['js-event', 'setTimeout', '240', 'textAlign', 'center'],
            ['js-event', 'setTimeout', '2400', 'MT', '0'],
            ['js-event', 'setTimeout', '1800', 'BGC', bgc]
        ])
}
// eval("document.onclick = function(){alert('123')};");


// 含字体
function LM(tex, color, bgc) {
    // label, space, mgn, name, bgColor, textIndent, font
    // add_normalNode(split_p('大模块~~~~~~~~~~~~~~~~~~~~~~'), ['h3', '0.128', '1rem 0 0.36rem 1rem', ud, ud, '0rem'], [
    add_normalNode(split_p(tex), ['h3', '0.128', '1rem 0 0.36rem 1rem', ud, ud, '0rem'],
        [
            // ['jsCall', 'rtn', fgi()],
            // children
            ['color', color],
            ['fontSize', '1.2rem'],
            ['fontFamily', '杨任东竹石体'],
            ['setClass', 'largeModule'],
            // ['JSC', 'LTS'],

            ['js-event', 'setTimeout', '6400', 'textShadow', '0.04rem 0.032rem 0.0164rem rgba(43, 236, 204, 0.712)'],
        ],
        [
            // father
            ['position', 'relative'],
            ['left', '2rem'],
            ['width', 'calc(100% - 2rem)'],
            ['top', '0.6rem'],
            ['bottom', '0.6rem'],
            ['BGC', bgc],
            ['zIndex', '5'],
            ['ML', '100%'],
            ['MR', '0'],

            ['whiteSpace', 'nowrap'],
            ['js-event', 'setTimeout', '3200', 'whiteSpace', 'normal'],

            ['js-event', 'setTimeout', '2400', 'transition', 'all ' + random_num_05 + 's'],
            ['js-event', 'setTimeout', '2400', 'ML', '0'],
            ['js-event', 'setTimeout', '2400', 'MR', '0'],
            // 这句只能加在最后
            ['addClassName', 'largeOLargeModule_' + LSMn_step]
        ])
    LSMn_step++
}

// 含字体
function SM(tex, color, bgc) {
    let font = '新蒂小丸子字体高级版';
    if (document.getElementsByTagName('title')[0].innerText == '2022-03-25') {
        font = '新蒂小丸子小学版';
    }
    add_normalNode([tex], ['h4', '0.064', '0.32rem 0 0.24rem 0rem', ud, ud, '0rem'], [
        // ['jsCall', 'rtn', fgi()],
        // children
        ['color', color],
        ['fontFamily', font],
        ['setClass', 'smallModule'],
        // ['JSC', 'LTS'],

        ['js-event', 'setTimeout', '2400', 'MR', '0'],
        ['js-event', 'setTimeout', '6400', 'textShadow', '0.036rem 0.024rem 0.0128rem rgba(236, 43, 210, 0.712)'],
    ], [
        // father
        ['BGC', bgc],
        ['position', 'relative'],
        ['top', '0.6rem'],
        ['bottom', '0.6rem'],
        ['left', 4 + 2 + 'rem'],
        ['width', 'calc(100% - 6rem)'],
        ['zIndex', '4'],
        ['fontSize', '0.96rem'],
        ['ML', '100%'],
        ['MR', '0'],

        ['whiteSpace', 'nowrap'],
        ['js-event', 'setTimeout', '3200', 'whiteSpace', 'normal'],

        ['js-event', 'setTimeout', '3200', 'transition', 'all ' + random_num_00 + 's'],
        ['js-event', 'setTimeout', '3200', 'ML', '0'],
        ['js-event', 'setTimeout', '2400', 'MR', '0'],
        // 这句只能加在最后
        ['addClassName', 'largeOLargeModule_' + LSMn_step]
    ])
    LSMn_step++;
}

function tip(tex, tab, color, bgc) {
    let tmp = '2rem';
    let c = '#fff'
    color != undefined && (function () {
        c = color;
    }());
    tab == 0 && (function () {
        tmp = '4rem';
    })();
    tab == 1 && (function () {
        tmp = '6rem';
    })();
    tab == 2 && (function () {
        tmp = '8rem';
    })();
    add_normalNode([tex], ['h4', '0.064', '0.32rem 0 0.24rem 0rem', ud, ud, '0rem'], [
        // children
        ['color', c],
        ['js-event', 'setTimeout', '6400', 'textShadow', '0.024rem 0.016rem 0.0096rem rgba(251, 255, 3, 0.894)'],
    ], [
        // father
        ['BGC', bgc],
        ['position', 'relative'],
        ['top', '0.6rem'],
        ['bottom', '0.6rem'],
        ['left', tmp],
        ['zIndex', '3'],
        ['fontSize', '0.64rem'],
        ['ML', '100%'],

        ['whiteSpace', 'nowrap'],
        ['js-event', 'setTimeout', '3200', 'whiteSpace', 'normal'],

        ['js-event', 'setTimeout', '3400', 'transition', 'all ' + random_num_01 + 's'],
        ['js-event', 'setTimeout', '3400', 'ML', '0']
    ])
}

function lst(tex, breakOff, color, ulColor, bgc, lType) {
    // space, breakOff, lType, className, bgc, marginLeft
    let listStyleType = ['liType', 'disc'];
    lType != undefined && (function () {
        listStyleType = ['liType', lType];
    }());
    add_listNode([tex], [h4, 0, breakOff, 'decimal-leading-zero', ud, ud, '0.24rem 0 0.24rem 0rem'], [
        // ['BGC', '#888'],
        ['color', color],
        ['fontSize', '0.96rem'],
        ['fontWeight', 800]
    ], [
        // ['BGC', '#666'],
        ['color', ulColor],
        ['BGC', bgc],
        listStyleType,
    ], [
        ['position', 'relative'],
        ['top', '2rem'],
        ['zIndex', '3'],
        ['left', '8rem'],
        ['ML', '100%'],

        ['whiteSpace', 'nowrap'],
        ['js-event', 'setTimeout', '3200', 'whiteSpace', 'normal'],

        ['js-event', 'setTimeout', '3600', 'transition', 'all ' + random_num_03 + 's'],
        ['js-event', 'setTimeout', '3600', 'ML', '0'],
        ['js-event', 'setTimeout', '3600', 'top', '0.6rem']
    ])
}

function img(imgName, WH, iH) {
    WH == undefined && (function () {
        WH = '40%';
    })();
    localStorage.getItem('equipmentType') == 1 && (function () {
        WH = '80%';
    }());
    let idTMP;

    let tempNum = 'key' + sessionStorage.getItem('hidStep').toString() + '_' + (((((Math.random() * 5) + 1) * ((Math.random() * 6) + 1) * ((Math.random() * 7) + 1))) / 12).toFixed(16);
    sessionStorage.setItem('fgiArr', fgiArr);

    let gid = ['skip'];
    iH == 1 && (function () {
        gid = ['getId', tempNum];
    }());

    add_normalNode([''], ['img', 'normal', '0.2rem 5% 3.2rem 5%'], [
        ['textDecoration', 'none'],
        ['width', WH],
        ['cursor', 'default'],
        ['color', '#999'],
        ['fontSize', '0.4rem'],
        ['borderRadius', '1rem'],
        ['objectFit', 'cover'],
        ['element-attribute', 'src', '../../img/' + imgName]
    ], [
        ['objectFit', 'cover'],
        ['display', 'flex'],
        ['JC', 'center'],
        ['position', 'relative'],
        ['ML', '-100%'],
        ['zIndex', '3'],
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['padding', '0.6rem auto'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '-0.12rem -0.12rem 0 0 transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '0.32rem 0.24rem 0.64rem 0.12rem rgba(128,128,128,.2)'],

        ['js-event', 'setTimeout', '2000', 'top', '0.6rem'],
        ['js-event', 'setTimeout', '2000', 'bottom', '0.6rem'],
        ['js-event', 'setTimeout', '2000', 'MT', '0'],
        ['js-event', 'setTimeout', '2000', 'MB', '0'],
        ['js-event', 'setTimeout', '2000', 'transition', 'all ' + random_num_04 + 's'],
        ['js-event', 'setTimeout', '2000', 'ML', '0'],
        ['js-event', 'setTimeout', '2000', 'position', 'relative'],
        ['js-event', 'setTimeout', '2000', 'display', 'flex'],
        ['js-event', 'setTimeout', '2000', 'JC', 'center'],
        ['js-event', 'setTimeout', '2000', 'ML', '5%'],
        ['js-event', 'setTimeout', '3200', 'opacity', '0.9'],
        ['js-event', 'setTimeout', '6400', 'opacity', '1'],
        ['js-event', 'setTimeout', '7200', 'opacity', '0.9'],
        ['js-event', 'setTimeout', '9600', 'opacity', '1'],
        ['js-event', 'setTimeout', '12800', 'opacity', '0.96'],
        gid
    ]);

    iH == 1 && (function () {
        idTMP = sessionStorage.getItem(tempNum + sessionStorage.getItem('randomNum'));
        sessionStorage.setItem('mediaArr', sessionStorage.getItem('mediaArr') + ',' + idTMP);
        sessionStorage.setItem('mediaArr', (sessionStorage.getItem('mediaArr').toString()).replace(/,null/g, ''))
        tempNum = undefined;
        localStorage.setItem('mediaArr', sessionStorage.getItem('mediaArr'))
        sessionStorage.setItem('mediaStep', parseInt(sessionStorage.getItem('mediaStep')) + 1);
        sessionStorage.setItem('hidSteps', parseInt(sessionStorage.getItem('hidSteps')) + 1);
    }());
}


function video(videoName, WH) {
    WH == undefined && (function () {
        WH = '40%';
    })();
    localStorage.getItem('equipmentType') == 1 && (function () {
        WH = '86%';
    }());
    add_normalNode([''], [
        ['video', 'source'], ud, '0.2rem 5% 3.2rem 5%'
    ], [
        ['elemAtt', 'type', 'video/mp4'],
        ['width', WH],
        ['cursor', 'default'],
        ['borderRadius', '1rem'],
        ['objectFit', 'cover'],
        ['element-attribute', 'src', '../../media/' + videoName]
    ], [
        // ['elemAtt', 'controls', 'controls'],
        // ['elemAtt', 'autoplay', 'autoplay'],
        ['elemAtt', 'loop', 'loop'],
        ['objectFit', 'cover'],
        ['elemAtt', 'muted', 'muted'],
        ['display', 'flex'],
        ['JC', 'center'],
        ['position', 'relative'],
        ['ML', '-100%'],
        ['zIndex', '3'],
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['padding', '0.6rem auto'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],

        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem'],
        ['js-event', 'setTimeout', '2000', 'transition', 'all ' + random_num_04 + 's'],
        ['js-event', 'setTimeout', '2000', 'ML', '0'],
        ['js-event', 'setTimeout', '2000', 'position', 'static'],
        ['js-event', 'setTimeout', '2000', 'display', 'flex'],
        ['js-event', 'setTimeout', '2000', 'JC', 'center'],
        ['js-event', 'setTimeout', '2000', 'ML', '5%'],

        ['js-AEL', 'mouseenter', 'elemAtt', 'controls', 'controls'],
        ['js-AEL', 'mouseleave', 'js-event', 'setTimeout', '240', 'elemRemoveAtt', 'controls'],
        ['js-event', 'setTimeout', '3200', 'opacity', '0.9'],
        ['js-event', 'setTimeout', '6400', 'opacity', '1'],
        ['js-event', 'setTimeout', '7200', 'opacity', '0.9'],
        ['js-event', 'setTimeout', '9600', 'opacity', '1'],
        ['js-event', 'setTimeout', '12800', 'opacity', '0.96'],
    ]);
}

function link(tex, filePath, pos, LP) {
    let top = '1rem';
    let LSP = '0.2rem';
    pos && (function () {
        top = pos;
    })();
    LP && (function () {
        LSP = LP;
    })();
    add_normalNode([tex], ['a', '0.2', '0.6rem 5% 0。24rem 5%', ud, ud, 'paragraph-2em'], [
        ['textDecoration', 'none'],
        ['display', 'inline-block'],
        ['width', '90%'],
        ['height', '100%'],
        ['cursor', 'pointer'],
        ['color', '#999'],
        ['padding', '0.1rem auto'],
        ['fontSize', '0.6rem'],
        ['LSP', '12.8rem'],
        ['element-attribute', 'href', filePath],
        ['elemAtt', 'target', '_blank'],
        ['BGC', 'transparent'],
        ['color', 'transparent'],
        ['textAlign', 'center'],
        ['margin', 0],
        ['fontWeight', '800'],
        ['setClass', 'link2webOrFile'],

        ['js-style', 'fontPosition', 'center-middle'],

        ['js-event', 'setTimeout', '2400', 'transition', 'all ' + random_num_07 + 's'],
        // ['js-event', 'setTimeout', '3200', 'color', '#222'],
        // ['js-event', 'setTimeout', '3200', 'color', 'rgba(69, 38, 227, 0.781)'],
        ['js-event', 'setTimeout', '3200', 'color', '#fff'],
        ['js-event', 'setTimeout', '3200', 'textShadow', '0.06rem 0.06rem 0.32rem rgba(227, 38, 221, 0.64)'],
        ['js-event', 'setTimeout', '3200', 'LSP', LSP],
        ['js-event', 'setTimeout', '3200', 'TID', 0],
        ['js-event', 'setTimeout', '3200', 'fontWeight', '800'],
        ['padding', '0.4rem', '1.6rem'],
        ['js-event', 'setTimeout', '3200', 'BGC', 'transparent']
    ], [
        ['position', 'relative'],
        ['top', '0.6rem'],
        ['bottom', '0'],
        ['MB', '0.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 2.4rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.2rem rgba(54, 54, 54,0.42)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.1rem transparent'],
        ['js-style', 'fontPosition', 'center-center'],
        ['BGC', 'transparent'],
        ['color', 'transparent'],

        ['whiteSpace', 'nowrap'],
        ['js-event', 'setTimeout', '3200', 'whiteSpace', 'normal'],

        ['js-event', 'setTimeout', '2400', 'transition', 'all ' + random_num_07 + 's'],
        ['js-event', 'setTimeout', '3600', 'ML', '5%'],

        ['js-event', 'setTimeout', '3200', 'color', 'transparent'],
        ['js-event', 'setTimeout', '3200', 'BGC', 'transparent']
    ]);
}

function SL(top, bottom) {
    let up = '0.72rem';
    let down = '2.4rem ';
    top && (function () {
        up = top;
    })();
    bottom && (function () {
        down = bottom;
    })();
    let tex = '-----------------------华丽的分割线-----------------------';
    let space = 0.16;
    if (localStorage.getItem('equipmentType') == 1) {
        tex = '----------------华丽的分割线----------------';
        space = 0.032;
    }
    add_normalNode([tex], [h4, space, up + '0px' + down + '0px', 'SplitLine', 'rgba(255, 255, 255, 0.128)', '0.25rem'], [
        ['[tex]tAlign', 'center'],
        ['BGC', 'transparent'],
        ['color', 'transparent'],
        ['LSP', '1rem'],
        ['setClass', 'splitLine'],

        ['js-event', 'setTimeout', '3200', 'LSP', '0.1rem'],
        ['js-event', 'setTimeout', '3200', 'BGC', 'transparent'],
        ['js-event', 'setTimeout', '3200', 'color', 'rgba(253, 253, 253, 0.384)'],
        ['js-event', 'setTimeout', '2400', 'transition', 'all ' + random_num_03 + 's']
    ], [
        ['textAlign', 'center'],
        ['BGC', 'transparent'],
        ['color', 'transparent'],
        ['MT', up],
        ['MB', down],

        ['whiteSpace', 'nowrap'],
        ['js-event', 'setTimeout', '3200', 'whiteSpace', 'normal'],

        ['js-event', 'setTimeout', '2400', 'transition', 'all ' + random_num_07 + 's'],
        ['js-event', 'setTimeout', '3600', 'ML', '-5%'],

        ['js-event', 'setTimeout', '3200', 'color', 'rgba(253, 253, 253, 0.384)'],
        ['js-event', 'setTimeout', '3200', 'BGC', 'rgba(255, 255, 255, 0.128)']
    ]);
}
let hf = parseFloat(document.documentElement.style.fontSize);
let cf = hf * 0.46;
let hidStep = 0;
let hidTex = new Array();
sessionStorage.setItem('hadAddPWDElemTOCopyCodeCorrectly_by_' + document.querySelector('title').innerText + '__' + random_num_00 + '__' + random_num_01, random_num_03 + random_num_04 * random_num_05);

function code(tex, breakOff, position, tab, hide) {
    let tempNum = 'key' + sessionStorage.getItem('hidStep').toString() + '_' + (((((Math.random() * 5) + 1) * ((Math.random() * 6) + 1) * ((Math.random() * 7) + 1))) / 12).toFixed(16);
    let gid = ['skip'];
    if (hide == 1) {
        hidTex[hidStep] = tex;
        tex = [''];
        dpy = 'none';
        hidStep++;
    } else if (hide == 'ch') {
        gid = ['getId', tempNum];
        dpy = 'block';
    } else {
        dpy = 'block';
    }
    hide && (function () {
        lfn_hide();
    })();

    function lfn_hide() {
        sessionStorage.getItem('hadAddPWDElemTOCopyCodeCorrectly_by_' + document.querySelector('title').innerText + '__' + random_num_00 + '__' + random_num_01) == random_num_03 + random_num_04 * random_num_05 && (function () {
            let elem = document.createElement('div');
            let ipt = document.createElement('input');
            ipt.setAttribute('type', 'text');
            ipt.setAttribute('value', '管理员密码');
            // ipt.style.cursor = 'text';
            document.body.appendChild(elem);
            elem.style.zIndex = '4';
            elem.style.position = 'absolute';
            elem.style.top = '3.2%';
            elem.style.right = '5%';
            elem.width = '90%';
            elem.style.display = 'none';
            for (let iw = 0; iw < hidTex.toString().split(',').length; iw++) {
                let tn = document.createElement('p');
                elem.appendChild(tn);
                tn.innerHTML = hidTex[iw];
            }
            window.addEventListener('load', function () {})
            ipt.style.backgroundColor = 'transparent';
            ipt.style.color = 'hsla(239, 74%, 49%, 0.041)';
            let pwd = 'U1iz';
            pwd = '2233';
            let pd01 = 0;
            let pd02 = 0;

            document.addEventListener('keyup', function (e) { // 50 52
                if (e.keyCode == 50) {
                    pd01++;
                    pd01 >= 2 ? pd01 = 2 : pd01 = pd01;
                    setTimeout(function () {
                        pd01 = 0;
                    }, 640);
                    console.log('pd01:' + pd01);
                }
                if (e.keyCode == 51) {
                    if (pd01 == 2) {
                        pd02++;
                        pd02 >= 2 ? pd02 = 2 : pd02 = pd02;
                        setTimeout(function () {
                            pd02 = 0;
                        }, 640);
                        console.log('pd02:' + pd02);
                    }
                }
                if (pd01 == 2 && pd02 == 2) {
                    dpy = 'block';
                }
            })
            document.body.appendChild(elem);
            sessionStorage.setItem('hadAddPWDElemTOCopyCodeCorrectly_by_' + document.querySelector('title').innerText + '__' + random_num_00 + '__' + random_num_01, random_num_04 + random_num_05 * random_num_06 + '_f');
        }());
    }
    let tmp_c = '#fff';
    if (tex.toString().substring(0, 2) == '//') {
        tmp_c = '#95c176';
    }
    tex = tex.toString().replace(/</g, '&lt;');
    tex = tex.toString().replace(/>/g, '&gt;');
    let tmp_tex = [];
    tmp_tex[0] = tex;
    let finTex;

    // 注释以下任意一条以达到不同的效果
    finTex = tmp_tex[0].split(' ');
    // finTex = tmp_tex;
    let phoneStyle_000 = ['skip'];
    let phoneStyle_001 = ['skip'];
    let phoneStyle_002 = ['width', '90%'];
    let phoneStyle_003 = ['skip'];
    if (localStorage.getItem('equipmentType') == 1) {
        phoneStyle_000 = ['PL', '2.4rem'];
        phoneStyle_001 = ['left', document.body.clientWidth * 0.05 + 'px'];
        phoneStyle_002 = ['width', document.body.clientWidth * 0.9 + 'px'];
        phoneStyle_003 = ['minWidth', '0'];
    }

    add_listNode(finTex, ['code', ['0.64em'], breakOff, 'decimal-leading-zero', 'codeDoneByList', ud, '0.24rem 0 0.24rem 0rem', 'paragraph-' + 0.64 * 4 * tab + 'em'], [
        // ['BGC', '#888'],
        ['fontSize', '0.64rem'],
        ['fontWeight', 400],
        ['fontFamily', 'Amaranth'],
        ['LSP', '0.12rem'],
        ['color', 'transparent'],

        ['display', 'none'],
        ['borderRadius', '1rem'],
        [
            'elemAtt', 'onmouseenter', "newStyle_API_Ver000([['JSBuild'," +
            "'(function () {setTimeout(function () { this.style.backgroundColor = " + '"rgba(255,255,255,.72)"' +
            "; (function () { setTimeout(function () { this.style.backgroundColor = " + '"transparent"' +
            " }, 512) }()); }, 256) }())'" +
            "]],this);" + "newStyle_API_Ver000([['JSBuild','aATT','onclick', " +
            "'(function () {setTimeout(function () { this.style.backgroundColor = " + '"#ed913a"' +
            "; (function () { setTimeout(function () { this.style.backgroundColor = " + '"transparent"' +
            " }, 768) }()); }, 256) }())'" +
            "]],this);"
        ],
        ['elemAtt', 'onmouseleave', "this.style.backgroundColor = 'transparent'"],
        ['js-event', 'setTimeout', '1600', 'display', 'inline-block'],

        ['js-event', 'setTimeout', '2400', 'transition', 'all 0.3s'],
        // ['js-event', 'setTimeout', '512', 'BGC', '#fff'],
        ['js-event', 'setTimeout', '3200', 'color', tmp_c],
    ], [
        // ['BGC', '#666'],
        ['position', 'relative'],
        ['left', position * 4 + 'rem'],
        ['fontSize', '0.64rem'],
        ['fontWeight', 400],
        ['color', 'transparent'],
        ['borderRadius', '0.6rem 0 0 0.6rem'],
        ['js-event', 'setTimeout', '2400', 'transition', 'all 0.36s'],
        ['js-event', 'setTimeout', '3200', 'color', '#5f647a'],

        ['js-AEL', 'click', 'color', '#fff'],
        ['js-AEL', 'click', 'js-event', 'setTimeout', '300', 'color', 'rgba(69, 81, 98, 1)'],

        ['js-AEL', 'mouseenter', 'color', '#c79c65'],
        // ['js-AEL', 'mouseenter', 'BGC', 'rgb(24, 52, 111)'],
        ['js-AEL', 'mouseenter', 'BGI', 'linear-gradient(to right, rgb(24, 52, 111), transparent)'],

        ['js-AEL', 'mouseleave', 'color', '#5f647a'],
        // ['js-AEL', 'mouseleave', 'BGC', 'transparent'],
        ['js-AEL', 'mouseleave', 'BGI', 'none'],
    ], [
        ['position', 'relative'],
        ['top', '2rem'],
        ['bottom', '2rem'],
        ['margin-bottom', '2rem'],
        ['left', '5%'],
        ['padding', '0.24rem'],
        ['borderRadius', '0.64rem'],
        ['zIndex', '4'],
        ['fontSize', '0.64rem'],
        ['fontWeight', 400],
        ['BGC', 'transparent'],
        ['color', 'transparent'],
        ['width', '90%'],
        ['minWidth', window.screen.availWidth * 0.36 + 'px'],
        // ['overflowX', 'scroll'],
        ['display', 'none'],
        ['BF', 'blur(0rem)'],
        ['boxSizing', 'border-box'],
        ['whiteSpace', 'normal'],


        ['js-AEL', 'mouseenter', 'BGC', 'rgb(15, 36, 82)'],
        ['js-AEL', 'mouseenter', 'overflow', 'hidden'],
        ['js-AEL', 'mouseleave', 'BGC', 'rgba(36, 39, 46, .72)'],
        ['js-AEL', 'mouseleave', 'overflow', 'auto'],
        ['js-AEL', 'mouseleave', 'overflowX', 'hidden'],

        ['js-addEventListener', 'mouseenter', 'boxShadow', '0.32rem 0.24rem 0.64rem 0.12rem rgba(36, 39, 46, .72)'],
        ['js-addEventListener', 'mouseenter', 'BF', 'blur(1rem)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '-0.1rem -0.1rem 0 0 transparent'],
        ['js-addEventListener', 'mouseleave', 'BF', 'blur(0rem)'],

        ['js-event', 'setTimeout', '2400', 'transition', 'all ' + random_num_07 + 's'],
        ['js-event', 'setTimeout', '3200', 'BGC', 'rgba(36, 39, 46, .72)'],
        ['js-event', 'setTimeout', '3200', 'display', dpy],
        ['js-event', 'setTimeout', '3200', 'top', '0.6rem'],
        ['js-event', 'setTimeout', '3200', 'bottom', '0'],
        ['js-event', 'setTimeout', '3200', 'MT', '0.8rem'],
        ['js-event', 'setTimeout', '3200', 'MB', '1.2rem'],
        phoneStyle_000,
        phoneStyle_001,
        phoneStyle_002,
        phoneStyle_003,
        gid
    ])

    hide == 'ch' && (function () {
        idTMP = sessionStorage.getItem(tempNum + sessionStorage.getItem('randomNum'));
        sessionStorage.setItem('mediaArr', sessionStorage.getItem('mediaArr') + ',' + idTMP);
        sessionStorage.setItem('mediaArr', (sessionStorage.getItem('mediaArr').toString()).replace(/,null/g, ''))
        tempNum = undefined;
        localStorage.setItem('mediaArr', sessionStorage.getItem('mediaArr'))
        sessionStorage.setItem('mediaStep', parseInt(sessionStorage.getItem('mediaStep')) + 1);
        sessionStorage.setItem('hidSteps', parseInt(sessionStorage.getItem('hidSteps')) + 1);
    }());
}

function IH(filePath, ht, mgn) {
    let h = '24rem';
    ht && (function () {
        h = ht;
    })();
    let m = '0.96rem 5% 0.24rem 5%';
    mgn && (function () {
        m = mgn;
    })();
    add_normalNode([], [
        ['iframe'], '0.2', m, ud, ud, 'paragraph-2em'
    ], [], [
        ['width', '90%'],
        ['height', h],
        ['padding', '0.1rem auto'],
        ['element-attribute', 'src', filePath],
        ['BGC', 'transparent'],
        ['color', 'transparent'],
        ['margin', 0],

        ['js-style', 'fontPosition', 'center-middle'],

        ['js-event', 'setTimeout', '2400', 'transition', 'all ' + random_num_07 + 's'],
        ['padding', '0.4rem', '1.6rem'],
        ['js-event', 'setTimeout', '3200', 'BGC', 'transparent'],
        ['js-event', 'setTimeout', '3200', 'margin', m],
        ['js-event', 'setTimeout', '3200', 'ML', '5%']
    ])
}

let IdxS = 0;

function IDX(breakOff, position, tab, type) {
    // type == 0 大目录
    // type == 1 小目录
    let label = 'h4';
    let tb = 1;
    type != undefined && (function () {
        type == 0 && (function () {
            label = 'h3';
        })();
    })();
    tab && (function () {
        tb = tab;
    })();
    let tgtCn = 'largeOLargeModule_' + IdxS;
    let tex = document.querySelector(tgtCn).innerText;

    add_listNode(tex.split(' '), [label, ['0.64em'], breakOff, 'decimal-leading-zero', 'codeDoneByList', ud, '0.24rem 0 0.24rem 0rem', 'paragraph-2em' + 0.64 * 4 * tb + 'em'], [
        // ['BGC', '#888'],
        ['fontSize', '0.64rem'],
        ['fontWeight', 400],
        ['position', 'relative'],
        ['left', position * 4 + 'rem'],
        ['fontFamily', 'Amaranth'],
        ['LSP', '0.12rem'],
        ['color', 'transparent'],

        ['display', 'none'],
        ['js-event', 'setTimeout', '1600', 'display', 'inline-block'],
        ['js-event', 'setTimeout', '1600', 'color', 'black'],

        ['js-event', 'setTimeout', '2400', 'transition', 'all 0.3s']
    ], [
        // ['BGC', '#666'],
        ['fontSize', '0.64rem'],
        ['fontWeight', 400],
        ['color', 'transparent'],
        ['js-event', 'setTimeout', '2400', 'transition', 'all 0.36s'],
        ['js-event', 'setTimeout', '3200', 'color', '#5f647a'],
        ['js-event', 'setTimeout', 'js-style', 'fontPosition', 'center-middle'],

    ], [
        ['position', 'relative'],
        ['top', '2rem'],
        ['bottom', '2rem'],
        ['margin-bottom', '2rem'],
        ['left', '5%'],
        ['padding', '0.24rem'],
        ['borderRadius', '0.64rem'],
        ['zIndex', '-1'],
        ['fontSize', '0.64rem'],
        ['fontWeight', 400],
        ['BGC', 'transparent'],
        ['color', 'transparent'],
        ['width', '90%'],
        ['minWidth', window.screen.availWidth * 0.36 + 'px'],
        // ['overflowX', 'scroll'],
        ['BF', 'blur(0rem)'],
        ['boxSizing', 'border-box'],
        ['whiteSpace', 'normal'],
        ['JSBuild', 'scrollToTarget(this, document.querySelector("' + tgtCn + '"))'],
        // ['js-AEL', 'click', 'JSBuild','scrollToTarget(this, fgi(2))'],
        ['JSBuild', 'this.style.lineHeight = ' + '"1rem"'],
        ['JSBuild', 'this.style.lineHight = this.clientHeight + ' + '"px"'],
        // ['JSBuild', 'this.style.backgroundColor = '+'"#ccc"'],
        ['JSBuild', 'this.style.lineHeight = ' + '"1rem"'],
        ['JSbuild', 'console.log(this)']
        // ['JSBuild', 'console.log(this.clientHeight)'],
    ])
    IdxS++;
}

localStorage.getItem('lqLm_worn') == undefined && (function () {
    localStorage.setItem("lqLm_worn", '1');
})();

function logInfo(pArray) {
    if (pArray == undefined) {
        // 共流量 字体 图/视频 JS H5C3 字体
        pArray = ['~', '~', '~', '~', '~', '~'];
    }

    function exec(arr) {
        let formWebmaster;
        formWebmaster = document.getElementById('formWebmaster');
        let value =
            '注意!!!\n\n这将消耗你约 ' + arr[0] +
            ' 流量\n\t字体: ' + arr[1] +
            '\n\t图/视频: ' + arr[2] +
            '\n\tJS: ' + arr[3] +
            '\n\tHTML+CSS: ' + arr[4] +
            '\n\n由于服务器不支持webp格式的图片\n这里所有动图都强改为了gif后缀,图片都改了png后缀' +
            '\n靠浏览器来辨别真实格式吧' +
            // '\n挂羊头卖狗肉了属于是\n算是不是办法的办法吧/苦笑' +
            '\n\n所用字体:\n\t' + arr[5] + '\n\n点击关闭';
        value = value.replace(/[\n]/g, '<br>')
        value = value.replace(/[\t]/g, '<span style="margin-left: 2em;"></span>')
        formWebmaster.innerHTML = value;
        console.log(value);
        // document.body.appendChild(p);
        formWebmaster.style.display = 'block';
        formWebmaster.style.position = 'absolute';
        formWebmaster.style.fontSize = '0.6rem';
        formWebmaster.style.top = '40%';
        formWebmaster.style.left = '3%';
        formWebmaster.style.borderRadius = '0.64rem';
        formWebmaster.style.padding = '0.4rem 0.6rem';
        formWebmaster.style.backgroundColor = 'rgba(45, 217, 223, 0.12)';
        formWebmaster.style.zIndex = 6;
        formWebmaster.style.transition = 'all 0.16s';
        formWebmaster.style.backdropFilter = 'blur(0.24rem)';
        formWebmaster.style.whiteSpace = 'nowrap';
        formWebmaster.style.transformOrigin = '0 100%';
        formWebmaster.onmouseenter = function () {
            this.style.backgroundColor = 'rgba(45, 217, 223, 0.32)';
            this.style.transform = 'rotate(-10deg)';
        }
        formWebmaster.onmouseleave = function () {
            this.style.backgroundColor = 'rgba(45, 217, 223, 0.12)';
            this.style.transform = 'rotate(0deg)';
        }
        formWebmaster.onclick = function () {
            setTimeout(function () {
                formWebmaster.onmouseenter = function () {
                    return false;
                }
                formWebmaster.onclick = function () {
                    return false;
                }
                formWebmaster.style.transition = 'all 0.32s';
                formWebmaster.style.transform = 'rotate(6deg)';
                formWebmaster.style.left = formWebmaster.offsetLeft + 32 + 'px';
                // formWebmaster.remove()
                setTimeout(function () {
                    formWebmaster.style.transition = 'all 2.4s';
                    formWebmaster.style.transform = 'rotate(-720deg)';
                    formWebmaster.style.left = '-110%';
                    setTimeout(function () {
                        formWebmaster.style.transition = 'all 2s';
                        formWebmaster.style.left = '160%';
                        formWebmaster.style.top = '10%';
                        formWebmaster.style.transform = 'rotate(1280deg)';
                        setTimeout(function () {
                            formWebmaster.remove()
                        }, 1700);
                    }, 2400);
                }, 640);
            }, 160);
        }
    }
    switch (localStorage.getItem('lqLm_worn') % 2) {
        case 0:
            exec(pArray);
        case 1:
            break;
    }
    localStorage.setItem("lqLm_worn", parseInt(localStorage.getItem("lqLm_worn")) + 1);
}

function SpriteMap() {
    var liHead = document.getElementById('headChoose').querySelectorAll('li');
    for (var i = 0; i < liHead.length; i++) {
        // 遍历li，使每个li显示对应图片
        var index = i * 100;
        liHead[i].style.backgroundPosition = '0 -' + index + 'px';
        // 设定每个li的自定义属性
        liHead[i].setAttribute('index', i);
        liHead[i].onclick = function () {
            // ih = this < 10 ? '0' + this : this;
            // ih = i < 10 ? '0' + i : i;
            // uH.innerHTML = '<img src="../img/User@64px/UH'+ih+'.jpg" alt="" width="100%">';
            // 获取点击的li自定义属性
            var indexC = this.getAttribute('index');
            var indexD = Number(indexC) + 1;
            // 根据索引号更换头像图片
            var iC = indexD < 10 ? '0' + indexD : indexD;

            uH.innerHTML = '<img src="../img/User@64px/UH' + iC + '.jpg" alt="" width="100%">';
        }
    }
}

// 禁止拖动元素
document.ondragstart = function () {
    return false;
};
let s = document.createElement('style');
s.innerText += ' img, video { -moz-user-select: none; -webkit-user-select: none; user-select: none; }';
document.querySelectorAll('head')[0].appendChild(s);