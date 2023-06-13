function tit(tn, fileDate, lnk) {
    // let rn = (Math.random() + 77) * 53;
    // sessionStorage.setItem('rn', rn + Math.floor(sessionStorage.getItem('randomNum')));

    if (sessionStorage.getItem('execute_all') == 'true' || sessionStorage.getItem('execute_all') == 'direct') {
        tn = tn + ' _ ' + fileDate;
        fileDate = undefined;
    } else {
        lnk == 1 && (function () {
            window.addEventListener('DOMContentLoaded', function () {
                add_normalNode(['pdf文档 rsc: ' + fileDate + '.pdf'], ['a', 'normal', '0.6rem 5% 3.2rem 5%', undefined, undefined, 'paragraph-2em'], [
                    ['textDecoration', 'none'],
                    ['cursor', 'pointer'],
                    ['color', '#999'],
                    ['fontSize', '0.4rem'],
                    ['element-attribute', 'href', '../../DOC/' + fileDate + '.pdf'],
                    ['elemAtt', 'target', '_blank'],
                    ['padding', '0.32rem 1.6rem'],

                    ['position', 'relative'],
                    ['left', '10%'],

                    ['borderRadius', '1rem'],
                    ['transition', 'all 0.64s'],
                    ['boxShadow', '1px 1px 1rem 2.4rem transparent'],
                    ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.2rem rgba(54, 54, 54,0.42)'],
                    ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.1rem transparent']
                ], [
                    ['width', '100%'],
                    ['margin', '1.6rem auto'],
                    ['MB', '3.2rem'],
                ], [
                    'IA', document.querySelector('.mainCtr_' + fileDate)
                ]);
            })
        })();
    }
    add_title(tn, [
        ['label', 'h1'],
        ['backgroundColor', 'transparent'],
        ['whiteSpace', 'nowrap'],
        ['font', '800 1.6rem "MicroSoft YaHei"'],
        ['boxShadow', 'none'],
        ['margin', '0 45%'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['borderRadius', '2.7rem'],
        ['marginTop', '-3.6rem'],
        ['color', '#666'],
        ['textAlign', 'center'],
        ['display', 'none'],
        ['color', 'transparent'],

        ['js-addEventListener', 'mouseenter', 'LSP', '0.12rem'],
        ['js-addEventListener', 'mouseenter', 'color', '#000'],
        // leave
        ['js-addEventListener', 'mouseleave', 'color', '#666'],
        ['js-addEventListener', 'mouseleave', 'LSP', 'normal'],
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', 'center-middle'],
        ['js-event', 'setTimeout', '1800', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '1800', 'display', 'block'],
        ['js-event', 'setTimeout', '1900', 'color', '#666'],
        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem']
    ]);
    fileDate != undefined && (function () {
        add_normalNode(split_p('20' + fileDate), ['p', 'normal', '6% 5% 0 5%', undefined, undefined, 'paragraph-2em'], [], [
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
    })();
}

function split_p(str) {
    let arr = new Array;
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    return arr;
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


function loading(date, call) {
    let fileDate = date;
    if (sessionStorage.getItem('execute_all') === 'true') {
        if (sessionStorage.getItem('fileDate' + fileDate) == fileDate) {

        } else {
            call && call();
            sessionStorage.setItem('fileDate' + fileDate, fileDate);
            window.addEventListener('load', function () {
                sessionStorage.removeItem('execute_all');
                sessionStorage.removeItem('fileDate' + fileDate);
            });
        }
    } else if (sessionStorage.getItem('execute_all') == 'direct') {
        call && call();
    } else {
        setDocTitle('20' + fileDate);
        sessionStorage.setItem(fileDate + 'execute.js_hadRun', 'false');
        // main execute
        window.addEventListener('load', function () {
            switch (sessionStorage.getItem(fileDate + 'execute.js_hadRun')) {
                case 'false':
                    sessionStorage.setItem(fileDate + 'execute.js_hadRun', 'true');
                    call && call();
                    break;
            }
        })
    }
}

function b(str) {
    return '<strong>' + str + '</strong>';
}

function i(str) {
    return '<em>' + str + '</em>';
}

function u(str) {
    return '<ins>' + str + '</ins>';
}

function s(str) {
    return '<del>' + str + '</del>';
}