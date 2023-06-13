let fileDate = '22-03-18';
// main execute
window.addEventListener('load', function () {
    switch (sessionStorage.getItem(document.querySelector('title').innerText + 'execute.js_hadRun')) {
        case 'false':
            sessionStorage.setItem(document.querySelector('title').innerText + 'execute.js_hadRun', 'true');
            call();
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
            document.documentElement.style.overflowX = 'hidden';
            document.body.style.backgroundColor = '#c6d7ff';
            document.documentElement.style.width = '100%';
            document.body.style.width = '100%';
            if (localStorage.getItem('equipmentType') == 1) {
                document.body.style.width = window.screen.availWidth + 'px';
                document.body.style.overflowX = 'hidden';
                setTimeout(function () {
                    document.body.style.overflowX = 'auto';
                }, 3600)
            }
            break;
    }
})

window.addEventListener('DOMContentLoaded', function () {
    setDocTitle(fileDate);
    sessionStorage.setItem(document.querySelector('title').innerText + 'execute.js_hadRun', 'false');
});

function call() {
    logInfo();
    add_title('计算机201 32 郁志良 构建整理', [
        ['label', 'h1'],
        ['backgroundColor', 'transparent'],
        ['whiteSpace', 'nowrap'],
        ['font', '800 1.6rem "MicroSoft YaHei"'],
        ['boxShadow', 'none'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['borderRadius', '2.7rem'],
        ['marginTop', '-3.6rem'],
        ['color', '#666'],
        ['textAlign', 'center'],
        ['width', '90%'],
        ['ML', '5%'],
        ['MR', '5%'],
        ['display', '1rem 1rem 1rem 0.2rem transparent'],
        ['color', 'transparent'],
        ['fontFamily', '爱心流星体'],
        ['fontSize', '400'],
        ['js-event', 'setTimeout', '6400', 'textShadow', '0.036rem 0.024rem 0.0128rem #fff'],

        ['js-style', 'fontPosition', 'center-middle'],
        ['js-addEventListener', 'mouseenter', 'LSP', '0.2rem'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '-0.64rem -0.64rem 1rem 0.25rem rgba(54, 54, 54,0.42)'],
        ['js-addEventListener', 'mouseenter', 'BGC', 'rgba(64, 64, 64,0.06)'],
        ['js-addEventListener', 'mouseenter', 'color', '#fff'],
        ['js-addEventListener', 'mouseenter', 'textShadow', '-0.036rem -0.024rem 0.0128rem #000'],
        // leave
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', 'center-middle'],
        ['js-addEventListener', 'mouseleave', 'BGC', 'transparent'],
        ['js-addEventListener', 'mouseleave', 'color', '#666'],
        ['js-addEventListener', 'mouseleave', 'LSP', 'normal'],
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', 'center-middle'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1rem 1rem 1rem 0.2rem transparent'],
        ['js-addEventListener', 'mouseleave', 'textShadow', '0.036rem 0.024rem 0.0128rem #fff'],
        // click
        ['js-AEL', 'click', 'BGC', 'rgba(128,128,128,0.26)'],
        ['js-AEL', 'click', 'color', '#ddd'],
        ['js-AEL', 'click', 'boxShadow', '0.72rem 0.72rem 0.72rem 0.26rem rgba(54, 54, 54,0.32)'],
        // setTimeout  1000-num-3   1000-time-3000
        ['js-event', 'setTimeout', '800', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '600', 'boxShadow', '1px 1px 24rem 2rem transparent'],
        ['js-event', 'setTimeout', '800', 'display', 'block'],
        ['js-event', 'setTimeout', '900', 'color', '#666'],
        ['js-event', 'setTimeout', '1000', 'MT', '2.4rem']
    ]);
    add_normalNode(split_p(document.querySelector('title').innerText), ['p', 'normal', '6% 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'absolute'],
        ['top', '3.6rem'],
        ['right', '16%'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['color', 'transparent'],
        ['fontFamily', '站酷快乐体'],

        ['js-event', 'setTimeout', '800', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '200', 'boxShadow', '1px 1px 24rem 2rem transparent'],
        ['js-event', 'setTimeout', '1000', 'MT', '2.4rem'],
        ['js-event', 'setTimeout', '960', 'color', '#363636']
    ]);

    topic('Unity 初识', '#24272e');
    // 项目总览
    LM('项目总览', 'rgba(217, 84, 32, 0.904)', 'transparent');
    SM('Code', '#715ad9');
    SM('Unity 界面', '#4c4c4c');
    // lst('listlist', 111, '#190', '#f9f', '#fff');
    // tip('TIPS', ud, '#CCC', '#FFF');
    img('u0004_0000.webp', '100%');
    SM('最终效果', 'rgba(32, 217, 202, 0.904)');
    // video('u0004_m0000.mp4', '100%');

    SL('4rem', '6rem');

    LM('无相关文件 (度盘提取码默认: 2233)');

    // link('通用引入场景', 'https://pan.baidu.com/s/194_iQUTV4vDavo6nyvPQSg?pwd=2233', '2.4rem');

    SL('4rem', '6rem');
    LM('暂无添加索引功能');
    SL('4rem', '6rem');

    LM('xMind 笔记');
    
    add_normalNode([''], ['p', 'normal', '6% 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['position', 'relative'],
        ['height', '64rem'],
        ['width', '100%'],
    ]);


    LM('详细步骤');
    SM('01.');
    SM('02.');
    SM('03.');


    for (let iv = 0; iv < document.querySelectorAll('img').length; iv++) {
        let img = document.querySelectorAll('img')[iv];
        img.oncontextmenu = function () {
            event.returnValue = false;
            return false;
        }
        if (typeof (img.onselectstart) != "undefined") {
            // IE下禁止元素被选取        
            img.onselectstart = new Function("return false");
        } else {
            // firefox下禁止元素被选取的变通办法        
            img.onmousedown = new Function("return false");
            img.onmouseup = new Function("return true");
        }
        let temp = img.naturalHeight / img.naturalWidth;
        // console.log(getNaturalSize(img));
        // img.style.height = parseFloat(img.style.width) * temp + 'px';
    }
    for (let iv = 0; iv < document.querySelectorAll('video').length; iv++) {
        document.querySelectorAll('video')[iv].oncontextmenu = function () {
            event.returnValue = false;
            return false;
        }
        if (typeof (document.querySelectorAll('video')[iv].onselectstart) != "undefined") {
            document.querySelectorAll('video')[iv].onselectstart = new Function("return false");
        } else {
            document.querySelectorAll('video')[iv].onmousedown = new Function("return false");
            document.querySelectorAll('video')[iv].onmouseup = new Function("return true");
        }
    }
}

function getNaturalSize(img) {
    var naturalSize = {};
    if (img.naturalWidth && img.naturalHeight) {
        naturalSize.width = img.width;
        naturalSize.height = img.height;
    } else {
        var image = new Image();
        image.src = img.src;
        naturalSize.width = image.width;
        naturalSize.height = image.height;
    }
    return naturalSize;
}