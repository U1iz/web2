(function () {
    document.documentElement.style.fontSize = 24 + 'px';
    sessionStorage.setItem('randomNum', 'd1o2u3b4l7e_' + ((Math.random() * 100) + 1) * 1023 * ((Math.random() * 100) + 1) + 3012 * ((Math.random() * 100) + 1));
    var browser = {
        versions: function () {
            var u = navigator.userAgent;
            return {
                webApp: u.indexOf('Safari') > -1 //Safari
            };
        }()
    }
    //判断访问终端
    var browser = {
        versions: function () {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                gecko: u.indexOf('Firefox') > -1, //火狐内核Gecko
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) == " qq" //是否QQ
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }

    if (browser.versions.mobile || browser.versions.ios || browser.versions.android || browser.versions.iPhone ||
        browser.versions.iPad) {
        localStorage.setItem('equipmentType', '1');
    }
    // 阻止ie用户
    if (browser.versions.trident) {
        alert('尊敬的trident内核浏览器用户, \n这里不欢迎你, \n请更换浏览器！！！');
        alert('文档内容将被清空');
        let t = prompt('是否跳转至推荐浏览器? \n(Y/N)区分大小写');
        switch (t.toString()) {
            case 'Y':
                window.open('http://www.firefox.com.cn');
                window.open('https://www.google.cn/intl/zh-CN/chrome');
                window.open('https://www.microsoft.com/zh-cn/edge?r=1');
                break;
        }
        // 死循环
        // window.location.replace(window.location.href);
        // window.location.replace("https://www.microsoft.com/zh-cn/edge?r=1");
        window.close()
        document.body.innerText = '';
        document.documentElement.innerText = '';
        document.body.remove();
        document.documentElement.remove();
        window.close();
    }

    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        document.documentElement.style.fontSize = 8 + 'px';
        localStorage.setItem('equipmentType', '1');
    } else if (bIsIpad) {
        document.documentElement.style.fontSize = 14 + 'px';
        localStorage.setItem('equipmentType', '1');
    } else {
        document.documentElement.style.fontSize = 24 + 'px';
        localStorage.setItem('equipmentType', '2');
    }
    localStorage.setItem('fs', parseInt(document.documentElement.style.fontSize));
})();

function obj2string(o) {
    var r = [];
    if (typeof o == "string") {
        return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    }
    if (typeof o == "object") {
        if (!o.sort) {
            for (var i in o) {
                r.push(i + ":" + obj2string(o[i]));
            }
            if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
                r.push("toString:" + o.toString.toString());
            }
            r = "{" + r.join() + "}";
        } else {
            for (var i = 0; i < o.length; i++) {
                r.push(obj2string(o[i]))
            }
            r = "[" + r.join() + "]";
        }
        return r;
    }
    return o.toString();
}
localStorage.getItem('equipmentType') == '1' && (function () {
    if (localStorage.getItem('hadSeemPhoneWorn')) {} else {
        localStorage.setItem('hadSeemPhoneWorn', 'false');
    }
    if (localStorage.getItem('hadSeemPhoneWorn') == 'false') {
        alert('我没有那么多精力去移动端上做测试，\n更没有时间精力去做响应式布局\n移动端的食用体验绝对没有web端舒适\n\n望谅解！,\n此消息在同浏览器只弹出一次');
        localStorage.setItem('hadSeemPhoneWorn', 'true');
    }
    let n = 'phoneWorn';
    if (localStorage.getItem(n)) {} else {
        localStorage.setItem(n, 1);
    }
    setTimeout(function () {
        localStorage.setItem(n, 1);
    }, 1000)
    if (localStorage.getItem(n) <= 1) {
        document.documentElement.style.overflowY = 'hidden';
        localStorage.setItem(n, parseInt(localStorage.getItem(n)) + 1);
        let div = document.createElement('div');
        div.innerText = '你正在使用\n移动端\n浏览此页面';
        document.body.appendChild(div);
        div.style.position = 'absolute';
        div.style.top = '40%';
        div.style.fontSize = '2.4rem';
        div.style.padding = '0.36rem 0.64rem';
        div.style.backgroundColor = 'rgba(202, 26, 26, 0.7)';
        div.style.color = 'rgba(47, 0, 255, 0.76)';
        div.style.transition = 'all 0.36s';
        div.style.whiteSpace = 'nowrap';
        div.style.left = document.body.clientWidth / 2 - div.clientWidth / 2 + 'px';
        let t1;
        let t2;
        let t3;
        let t4;
        let t5;
        let hadClose = false;
        t1 = setTimeout(function () {
            div.innerText = '如有兼容导致的\n排版问题\n请更换浏览器';
            div.style.left = document.body.clientWidth / 2 - div.clientWidth / 2 + 'px';
            t2 = setTimeout(function () {
                div.innerText = '目前不建议使用via\n(或其他直接套用webview的)\n浏览器浏览';
                div.style.left = document.body.clientWidth / 2 - div.clientWidth / 2 + 'px';
                div.style.top = '4rem';
                t3 = setTimeout(function () {
                    div.innerText = '当前浏览器信息';
                    div.zIndex = 999999999999999999;
                    t4 = setTimeout(function () {
                        if (!hadClose) {
                            alert(navigator.userAgent);
                            document.documentElement.style.overflowY = 'auto';
                        }
                        t5 = setTimeout(function () {
                            div.style.left = '100%';
                            setTimeout(function () {
                                div.remove();
                            }, 400);
                        }, 1200);
                    }, 1600);
                }, 2400);
            }, 1600);
        }, 1600);
        div.onclick = function () {
            document.documentElement.style.overflowY = 'auto';
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            clearTimeout(t4);
            clearTimeout(t5);
            div.remove();
            hadClose = true;
        }
    }
})();

// query start here

function GetAttribute(data, sign, keyQuery) {
    data.indexOf(sign) != -1 && (function () {
        let temp = data.split(sign);
        keyQuery[0] && (function () {
            temp.indexOf(keyQuery[0]) != -1 && (function () {
                let index = temp.indexOf(keyQuery[0]);
                // if(keyQuery[1] == undefined || keyQuery[1] ==  null || Number(keyQuery[1])){}
                let result = keyQuery[1] - temp[1];
                index == 0 && (function () {
                    result = keyQuery[1] + temp[1];
                })
            })
        })
    })();
    return result;
}

function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            if (callback) {
                // 调用函数
                callback();
            }
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}

/*   // 阻力，数值越大，滑动越慢
  console.log(fgi().offsetTop);
  const drag = 10;
  const location = 660;
  // 滑动到顶部
  const scrollToTop = () => {
      // 距离顶部的距离
      const gap = document.documentElement.scrollTop || document.body.scrollTop;
      if (gap > location) {
          window.requestAnimationFrame(scrollToTop);
          window.scrollTo(0, gap - gap / drag);
      }
  }; */
// document.body.onclick = scrollToTop;
let noScrollEvent = true;
/* let t1 = 0;
let t2 = 0;

document.addEventListener('scroll', function () {
    t1 = document.documentElement.scrollTop || document.body.scrollTop;
    noScrollEvent = false;
})

function isScrollEnd() {
    t2 = document.documentElement.scrollTop || document.body.scrollTop;
    if (t2 == t1) {
        noScrollEvent = true;
        console.log('滚动结束了');
    }
} */

let fgi_Step = 0;
let loop = 0;
let fgiArr = new Array();


function scrollToTarget(eGetEvent, eTarget, ac, callInterval) {
    clearInterval(eGetEvent.timer);
    callInterval = 30;
    afterClick = true;
    ac != undefined && (function () {
        afterClick = ac;
    })();
    let target;
    if (eTarget.offsetTop) {
        target = eTarget.offsetTop;
    } else {
        target = fgi();
    }
    let log = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset + '_' + target;
    let repeat = 0;
    ac && (function () {
        eGetEvent.addEventListener('click', function () {
            noScrollEvent && (function () {
                callBk();
            })();

        })
    })();
    !ac && (function () {
        noScrollEvent && (function () {
            callBk();
        })();
    })();
    // isScrollEnd();
    function callBk() {
        // target = Math.ceil(target);
        if (ds() !== target) {
            eGetEvent.timer = setInterval(function () {


                let step = (target - ds()) / 10;
                // step = step > 0 ? Math.ceil(step) : Math.floor(step);
                // step = Math.ceil(step);
                console.log(ds() + '\n' + target);
                if (ds() == target) {
                    loop = 0;
                    noScrollEvent = true;
                    clearInterval(eGetEvent.timer);
                }
                ds(ds() + step);
                if (log == ds() + '_' + target) {
                    repeat++;
                    if (repeat == 64) {
                        clearInterval(eGetEvent.timer);
                    }
                } else {
                    repeat = 0;
                }
                let err = 0.1;
                if (ds() > (target - err) && ds() < (target + err)) {
                    clearInterval(eGetEvent.timer);
                } else {
                    if (loop > 164) {
                        console.log('scroll事件强制停止');
                        clearInterval(eGetEvent.timer);
                        loop = 0;
                    }
                }
                loop++;
            }, callInterval)
        }

        function ds(tgt) {
            let tgtN = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
            tgt && (function () {
                if (typeof tgt == 'string') {
                    // Safari浏览器
                    window.pageYOffset += tgt;
                    // opera，FireFox
                    document.body.scrollTop += tgt;
                    // IE浏览器
                    document.documentElement.scrollTop += tgt;
                } else {
                    window.pageYOffset = tgt;
                    document.body.scrollTop = tgt;
                    document.documentElement.scrollTop = tgt;
                }
            }());

            return tgtN;
        }
    };
}

function fgi(index) {
    let id;
    index == undefined && (function () {
        // 保留小数后16位
        let temp = 'key' + fgi_Step.toString() + '_' + (((((Math.random() * 5) + 1) * ((Math.random() * 6) + 1) * ((Math.random() * 7) + 1))) / 12).toFixed(16);
        fgiArr[fgi_Step] = temp;
        sessionStorage.setItem('fgiArr', fgiArr);
        add_normalNode([], ['p'], [], [
            ['margin', 0],
            ['padding', 0],
            ['getId', temp]
        ]);
        id = sessionStorage.getItem(temp + sessionStorage.getItem('randomNum'));
    })();
    index != undefined && (function () {
        id = sessionStorage.getItem(fgiArr[index] + sessionStorage.getItem('randomNum'));
    }());
    // sessionStorage.removeItem(temp + sessionStorage.getItem('randomNum'));
    temp = undefined;
    // console.log(document.getElementById(id));
    fgi_Step++;
    return document.getElementById(id);
}

function ds(tgt) {
    let tgtN = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
    tgt && (function () {
        if (typeof tgt == 'string') {
            // Safari浏览器
            window.pageYOffset += tgt;
            // opera，FireFox
            document.body.scrollTop += tgt;
            // IE浏览器
            document.documentElement.scrollTop += tgt;
        } else {
            window.pageYOffset = tgt[0];
            document.body.scrollTop = tgt[0];
            document.documentElement.scrollTop = tgt[0];
        }
    }());

    return tgtN;
}

function scrollAnimate(obj, target, callback) {
    target = target.offsetTop;
    obj.addEventListener('click', function () {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            // var step = Math.ceil((target - obj.offsetLeft) / 10);
            var step = (target - ds()) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (ds() == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
            ds(ds() + step);

        }, 30);
    });
}

function newStyle_API_Ver000(arr, elemId) {
    arr && (function () {
        let wiw = document.documentElement.clientWidth;
        let wih = document.documentElement.clientHeight;
        for (let i = 0; i < arr.length; i++) {
            let key = arr[i];
            let elem = document.getElementById(elemId);
            if (typeof elemId == 'object') {
                elem = elemId;
            }

            // let keyName = key[0].toString();
            let keyName = key[0];

            function ctn() {
                /* let ix;
                key.indexOf('CTN') != -1 && (function () {
                    ix = key.indexOf('CTN');
                    let k = key.slice(ix, key.length + 1);
                    k.shift();
                    // console.log(k);
                    lfn_lib(k[0], k);
                }()); */
            }
            lfn_lib(keyName, key);

            function lfn_lib(keyName, key) {
                switch (keyName) {
                    // style
                    // font class
                    case 'skip':
                        break;
                    case 'fontWeight':
                        elem.style.keyName = key[1]
                        ctn()
                        break;
                    case 'fontSize':
                        elem.style.fontSize = key[1]
                        ctn()
                        break;
                    case 'fontFamily':
                        elem.style.fontFamily = key[1]
                        ctn()
                        break;
                    case 'font':
                        let temp = elem.getAttribute('style');
                        elem.setAttribute('style', temp + 'font: ' + key[1] + ';')
                        ctn()
                        break;
                    case 'letterSpacing':
                    case 'LSP':
                        elem.style.letterSpacing = key[1]
                        ctn()
                        break;
                    case 'text-Indent':
                    case 'text-indent':
                    case 'textIndent':
                    case 'TID':
                        elem.style.textIndent = key[1]
                        ctn()
                        break;
                    case 'text-decoration':
                    case 'textDecoration':
                    case 'text-d':
                    case 'textD':
                        elem.style.textDecoration = key[1]
                        ctn()
                        break;
                    case 'text-shadow':
                    case 'textShadow':
                    case 'TSD':
                        elem.style.textShadow = key[1]
                        ctn()
                        break;
                        // external position
                    case 'display':
                        elem.style.display = key[1]
                        ctn()
                        break;
                    case 'position':
                    case 'pos':
                        elem.style.position = key[1]
                        ctn()
                        break;
                    case 'top':
                        elem.style.top = key[1]
                        ctn()
                        break;
                    case 'bottom':
                        elem.style.bottom = key[1]
                        ctn()
                        break;
                    case 'left':
                        elem.style.left = key[1]
                        ctn()
                        break;
                    case 'right':
                        elem.style.right = key[1]
                        ctn()
                        break;
                        // external margin
                    case 'margin':
                    case 'M':
                        elem.style.margin = key[1]
                        ctn()
                        break;
                    case 'margin-Left':
                    case 'margin-reft':
                    case 'marginLeft':
                    case 'marginL':
                    case 'ML':
                        elem.style.marginLeft = key[1]
                        ctn()
                        break;
                    case 'margin-Right':
                    case 'margin-right':
                    case 'marginRight':
                    case 'marginR':
                    case 'MR':
                        elem.style.marginRight = key[1]
                        ctn()
                        break;
                    case 'margin-Top':
                    case 'margin-top':
                    case 'marginTop':
                    case 'marginT':
                    case 'MT':
                        elem.style.marginTop = key[1]
                        ctn()
                        break;
                    case 'margin-Bottom':
                    case 'margin-bottom':
                    case 'marginBottom':
                    case 'marginB':
                    case 'MB':
                        elem.style.marginBottom = key[1]
                        ctn()
                        break;
                        // external padding
                    case 'padding':
                    case 'PD':
                        elem.style.padding = key[1]
                        ctn()
                        break;
                    case 'padding-Left':
                    case 'padding-left':
                    case 'paddingLeft':
                    case 'paddingL':
                    case 'PL':
                        elem.style.paddingLeft = key[1]
                        ctn()
                        break;
                    case 'padding-Right':
                    case 'padding-right':
                    case 'paddingRight':
                    case 'paddingR':
                    case 'PR':
                        elem.style.paddingRight = key[1]
                        ctn()
                        break;
                    case 'padding-Top':
                    case 'padding-top':
                    case 'paddingTop':
                    case 'paddingT':
                    case 'PT':
                        elem.style.paddingTop = key[1]
                        ctn()
                        break;
                    case 'padding-Bottom':
                    case 'padding-bottom':
                    case 'paddingBottom':
                    case 'paddingB':
                    case 'PB':
                        elem.style.paddingBottom = key[1]
                        ctn()
                        break;
                        // external size
                    case 'width':
                    case 'W':
                        elem.style.width = key[1]
                        ctn()
                        break;
                    case 'height':
                    case 'H':
                        elem.style.height = key[1]
                        ctn()
                        break;
                        // external style
                    case 'white-space':
                    case 'whiteSpace':
                        // white-space : normal nowrap
                        elem.style.whiteSpace = key[1]
                        ctn()
                        break;
                    case 'backgroundColor':
                    case 'BGC':
                    case 'bgC':
                    case 'bgc':
                        elem.style.backgroundColor = key[1]
                        ctn()
                        break;
                    case 'background':
                        elem.style.background = key[1]
                        ctn()
                        break;
                    case 'backgroundImage':
                    case 'backgroundImg':
                    case 'background-img':
                    case 'background-image':
                    case 'BGI':
                        elem.style.backgroundImage = key[1]
                        ctn()
                        break;
                    case 'color':
                    case 'C':
                        elem.style.color = key[1]
                        ctn()
                        break;
                    case 'boxShadow':
                        elem.style.boxShadow = key[1]
                        ctn()
                        break;
                    case 'borderRadius':
                        elem.style.borderRadius = key[1]
                        ctn()
                        break;
                    case 'transition':
                        elem.style.transition = key[1]
                        ctn()
                        break;
                    case 'cursor':
                        elem.style.cursor = key[1]
                        ctn()
                        break;
                    case 'zIndex':
                    case 'z-index':
                        elem.style.zIndex = key[1]
                        ctn()
                        break;
                    case 'textAlign':
                    case 'text-align':
                        elem.style.textAlign = key[1]
                        ctn()
                        break;
                    case 'minWidth':
                    case 'min-width':
                    case 'MW':
                        elem.style.minWidth = key[1]
                        ctn()
                        break;
                    case 'minHeight':
                    case 'min-height':
                    case 'MH':
                        elem.style.minHeight = key[1]
                        ctn()
                        break;
                    case 'maxHeight':
                    case 'max-height':
                    case 'MXH':
                        elem.style.maxHeight = key[1]
                        ctn()
                        break;
                    case 'maxWidth':
                    case 'max-width':
                    case 'MXW':
                        elem.style.maxWidth = key[1]
                        ctn()
                        break;
                    case 'overflow':
                        elem.style.overflow = key[1]
                        ctn()
                        break;
                    case 'overflowX':
                    case 'overflow-X':
                        elem.style.overflowX = key[1]
                        ctn()
                        break;
                    case 'overflowY':
                    case 'overflow-y':
                        elem.style.overflowY = key[1]
                        ctn()
                        break;
                    case 'box-sizing':
                    case 'boxSizing':
                        // box-sizing: border-box;
                        elem.style.boxSizing = key[1]
                        ctn()
                        break;
                    case 'object-fit':
                    case 'objectFit':
                    case 'objFit':
                        //   object-fit: cover;
                        elem.style.objectFit = key[1]
                        ctn()
                        break;
                        // 虚化背景
                    case 'backdrop-filter':
                    case 'backdropFilter':
                    case 'BF':
                        // blur(~px);
                        elem.style.backdropFilter = key[1];
                        elem.style.webkitBackdropFilter = key[1]
                        ctn()
                        break;
                    case 'list-style-type':
                    case 'listStyleType':
                    case 'liType':
                        elem.style.listStyleType = key[1]
                        ctn()
                        break;
                    case 'justify-content':
                    case 'justifyContent':
                    case 'JC':
                        elem.style.justifyContent = key[1]
                        ctn()
                        break;
                    case 'opacity':
                        // 0 ~ 1 设置透明度
                        elem.style.opacity = key[1]
                        ctn()
                        break;
                    case 'setID':
                    case 'setId':
                        elem.id = key[1]
                        ctn()
                        break;
                    case 'addId':
                    case 'addID':
                        let idTemp = elem.id;
                        elem.id = key[1] + idTemp
                        ctn()
                        break;
                    case 'setClassName':
                    case 'setClass':
                        elem.className = key[1]
                        ctn()
                        break;
                    case 'addClassName':
                    case 'addClass':
                        let idClassName = elem.className;
                        elem.className = key[1] + ' ' + idClassName
                        ctn()
                        break;
                    case 'transform':
                        elem.style.transform = key[1]
                        ctn()
                        break;
                    case 'transform-origin':
                    case 'transformOrigin':
                    case 'tfm-origin':
                    case 'tfmOrigin':
                        elem.style.transformOrigin = key[1]
                        ctn()
                        break;
                    case 'getID':
                    case 'getId':
                    case 'returnId':
                    case 'returnID':
                        sessionStorage.setItem(key[1] + sessionStorage.getItem('randomNum'), elemId);
                        break;
                        // script module
                    case 'js-function':
                    case 'js-func':
                    case 'jsFunc':
                    case 'js-call':
                    case 'jsCall':
                    case 'JSCall':
                        key[2];
                        /*     switch (key[1]) {
                                case 'return':
                                case 'obj':
                                case 'rtn':
                                    key[2];
                                    break;
                                case 'noReturn':
                                case 'nRtn':
                                case 'void':
                                    key[2];
                                    break;
                            } */
                        break;
                    case 'js-build':
                    case 'JSBuild':
                    case 'jsBuild':
                    case 'function-build':
                    case 'func-build':
                    case 'funcBuild':
                        switch (key[1]) {
                            case 'SetATT':
                            case 'ATT':
                                elem.setAttribute(key[2], str2fn(key[3]));
                                break;
                            case 'AddATT':
                            case 'aATT':
                                // 待修改
                                elem.setAttribute(key[2], str2fn(key[3]));
                                break;
                            case 'replaceATT':
                            case 'rATT':
                                elem.getAttribute(key[2]) != undefined && (function () {
                                    let value = elem.getAttribute(key[2]).toString();
                                    let para = str2fn(key[3]);
                                    value = para.replace(value, para);
                                    elem.setAttribute(key[2], value);
                                })();
                                break;
                            default:
                                let str = key[1];
                                eval(str2fn(str))
                                break;
                        }
                        ctn();
                        break;
                    case 'JSConsole':
                    case 'jsConsole':
                    case 'JSC':
                        switch (key[1]) {
                            case 'logToStr':
                            case 'LTS':
                                // let rn = (((Math.random() * 100) + 1) * 1023).toString();
                                sessionStorage.getItem('tempStr') == undefined && (function () {
                                    sessionStorage.setItem('tempStr', '');
                                })();
                                sessionStorage.setItem('tempStr', sessionStorage.getItem('tempStr') + elem.innerText);
                                console.log(sessionStorage.getItem('tempStr') + '\n\t' + elem.style.fontFamily);
                                break;
                            default:
                                console.log(key[1]);
                                break;
                        }
                        break;
                    case 'js-style':
                        let value = new Array;
                        value[0] = key[2];
                        if (key[2].indexOf('-') != -1) {
                            value = key[2].split("-");
                        }
                        let texValue = elem.innerText;
                        switch (key[1]) {
                            case 'fontPosition':
                                switch (value[0]) {
                                    case 11:
                                    case 'left':
                                    case 'L':
                                        elem.style.textAlign = 'left';
                                        break;
                                    case 22:
                                    case 'middle':
                                    case 'center':
                                        elem.style.textAlign = 'center';
                                        break;
                                    case 33:
                                    case 'right':
                                    case 'R':
                                        elem.style.textAlign = 'right';
                                        break;
                                    default:
                                        elem.style.textAlign = 'left';
                                        window.addEventListener('resize', function () {
                                            elem.style.textIndent = elem.clientWidth * value[0] + 'px';
                                        })
                                        elem.style.textIndent = elem.clientWidth * value[0] + 'px';
                                        break;
                                };
                                value[1] && (function () {
                                    let pdv = (parseInt(elem.style.paddingTop) + parseInt(elem.style.paddingBottom)) *
                                        parseInt(document.documentElement.style.fontSize);
                                    switch (value[1]) {
                                        case 11:
                                        case 'top':
                                        case 'T':
                                            elem.style.paddingTop = '0';
                                            elem.style.paddingBottom = pdv + 'px';
                                            break;
                                        case 22:
                                        case 'middle':
                                        case 'center':
                                            // elem.style.lineHeight = elem.clientHeight + 'px';
                                            break;
                                        case 33:
                                        case 'bottom':
                                        case 'B':
                                            window.addEventListener('resize', function () {
                                                elem.style.paddingBottom = 0;
                                                elem.style.paddingTop = pdv + 'px';
                                            })
                                            elem.style.paddingBottom = 0;
                                            elem.style.paddingTop = pdv + 'px';
                                            break;
                                        default:
                                            window.addEventListener('resize', function () {
                                                elem.style.lineHeight = elem.clientHeight * value[1] + 'px';
                                            })
                                            elem.style.lineHeight = elem.clientHeight * value[1] + 'px';
                                            break;
                                    }
                                })();
                                break;
                        }
                        break;
                    case 'new':

                        break;

                    case 'js-addEventListener':
                    case 'js-AEL':
                    case 'js-eventListener':
                        let ini = key;
                        ini.shift();
                        let event = ini[0];
                        ini.shift();
                        // newStyle_API_Ver000(ini, elemId, event);
                        lfn_event(ini, event)
                        ctn()
                        break;
                    case 'js-event':
                    case 'js-Event':
                    case 'js-E':
                    case 'jsEvent':
                    case 'JSEvent':
                    case 'JSE':
                        let event_ini = key;
                        event_ini.shift();
                        let eEvent = event_ini[0];
                        event_ini.shift();
                        // 获取时间参数 -
                        lfn_jsEvent(event_ini, eEvent, getTimeAttribute(event_ini, '-'))
                        ctn()
                        break;
                    case 'element-attribute':
                    case 'elem-attribute':
                    case 'elem-att':
                    case 'elementAttribute':
                    case 'elemAtt':
                        elem.setAttribute(key[1], key[2])
                        ctn()
                        break;

                        function getTimeAttribute(data, sign) {
                            let temp = data[0];
                            data[0].indexOf(sign) != -1 && (function () {
                                temp = data[0].split(sign);
                            })();
                            return temp;
                        }
                        case 'element-removeAttribute':
                        case 'elem-removeAttribute':
                        case 'elem-removeAtt':
                        case 'elemRemoveAttribute':
                        case 'elemRemoveAtt':
                            elem.removeAttribute(key[1]);
                            break;
                }

                function str2fn(str) {
                    if (typeof elemId === 'string') {
                        str = str.replace(/this/g, 'document.querySelector("#' + elemId + '")');
                    } else {
                        str = str.replace(/this/g, 'document.querySelector("#' + elemId.id + '")');
                    }
                    return str;
                }

                function lfn_jsEvent(ini, event, tat) {
                    let time = ini.shift();

                    let fstNum = tat[0];
                    let stopByNum = false;
                    let stopByTime = false;
                    tat[1] && (function () {
                        switch (tat[1]) {
                            case 'time':
                            case 't':
                                stopByTime = true;
                                break;
                            case 'num':
                            case 'n':
                                stopByNum = true;
                                break;
                        }
                    })();
                    // 默认 stopByTime
                    tat[2] && (function () {
                        secNum = tat[2];
                        stopByTime = true;
                    })();

                    function clearTimer(timer, arr, type) {
                        type == 02 ? type = 02 : type = 01;
                        stopByTime && (function () {
                            setTimeout(function () {
                                if (type == 01) {
                                    clearTimeout(timer);
                                } else {
                                    clearInterval(timer);
                                }
                            }, time)
                        })();
                    }

                    event && (function () {
                        switch (event) {
                            case 'setTimeout':
                            case 'STOut':
                            case 'STout':
                                let sto_timer = setTimeout(function () {
                                    lfn_lib(ini[0], ini);
                                }, time);
                                // setTimeout(function () {
                                //     clearTimeout(sto_timer);
                                // }, time);
                                break;
                            case 'setInterval':
                            case 'SIL':
                                let sti_timer = setInterval(function () {
                                    lfn_lib(ini[0], ini);
                                }, time);
                                break;

                        }
                    })();
                }

                function lfn_event(ini, event) {
                    event && (function () {
                        switch (event) {
                            case 'onclick':
                            case 'click':
                                elem.addEventListener('click', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'onmouseover':
                            case 'mouseover':
                                elem.addEventListener('mouseover', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'onmouseout':
                            case 'mouseout':
                                elem.addEventListener('mouseout', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'onmouseenter':
                            case 'mouseenter':
                                elem.addEventListener('mouseenter', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'onmouseleave':
                            case 'mouseleave':
                                elem.addEventListener('mouseleave', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'resize':
                                window.addEventListener('resize', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                        }
                    })();
                }
            }
        }
    })();
}

let titleNum = 0;

function add_title(titleTex, titleStyle) {
    let titleNode = document.createElement('h2');
    switch (titleStyle[0][0]) {
        case 'label':
            titleNode = document.createElement(titleStyle[0][1]);
            break;
    }
    document.body.appendChild(titleNode);
    titleNode.innerHTML = titleTex;
    titleNode.style.textAlign = 'center';
    titleNode.id = 'title' + titleNum;
    titleNode.style.padding = '1rem 0 1rem 0';
    newStyle_API_Ver000(titleStyle, 'title' + titleNum);
    titleNum++;
}


window.onload = function () {
    var remSize = (document.documentElement.style.fontSize).toString().substring(0, (document.documentElement.style.fontSize).toString().length - 2);
    var lw = document.querySelectorAll('.listWrap');

    function set_mp(elem01, elem02) {
        var wSelf = elem01.clientWidth;
        var w = (elem02.offsetLeft - elem01.offsetLeft - wSelf) / 2;
        elem01.style.paddingRight = w + 'px';
        elem02.style.marginLeft = -w + 'px';
        elem01.style.borderRight = '0.042rem solid #ccc';
    }

    function execute_setMp() {
        for (var i = 0; i < lw.length; i++) {
            var r01 = lw[i].querySelector('.row01');
            var r02 = lw[i].querySelector('.row02');
            var r03 = lw[i].querySelector('.row03');
            var r04 = lw[i].querySelector('.row04');
            var r05 = lw[i].querySelector('.row05');

            set_mp(r01, r02);
            set_mp(r02, r03);
            set_mp(r03, r04);
            set_mp(r04, r05);
        }
    }
    var styleArr = [];
    for (var i = 0; i < lw.length; i++) {
        lw[i].style.display = 'flex';
        lw[i].style.justifyContent = 'space-between';
        lw[i].style.minWidth = document.body.clientWidth * 0.6 + 'px';
        lw[i].style.transition = 'all 0.3s';
        var cn = lw[i].children;
        // execute_setMp();
        var tex = true;
        lfn_animate(1, 1, 0, 0);

        function lfn_animate(n1, n2, n3, n4) {
            lw[i].addEventListener('mouseenter', function () {
                var tn;
                var tNode = false;
                var titNode = false;
                if (n1 == 1) {
                    styleArr[0] = this.style.backgroundColor;
                    this.style.backgroundColor = '#ddd';
                } else if (n2 == 1) {
                    styleArr[1] = this.style.letterSpacing;
                    this.style.letterSpacing = '0.1rem';
                } else if (n3 == 1) {
                    if (this.querySelector('h3')) {
                        tNode = this.querySelector('h3');
                        tn = tNode;
                    } else if (this.querySelector('h2')) {
                        titNode = this.querySelector('h2');
                        tn = titNode;
                    }
                    titNode || tNode ? styleArr[2] = tn.style.fontSize : tex = false;
                    for (var j = 0; j < tn.length; j++) {
                        tn[j].style.fontSize = '3rem';
                    }
                } else if (n4 == 1) {
                    styleArr[3] = this.style.margin;
                    this.style.margin = '2.67rem 0';
                }

            });
            lw[i].addEventListener('mouseleave', function () {
                if (n1 == 1) {
                    this.style.backgroundColor = styleArr[0];
                } else if (n2 == 1) {
                    this.style.letterSpacing = styleArr[1];
                } else if (n3 == 1) {
                    if (this.querySelector('h3')) {
                        tNode = this.querySelector('h3');
                        tn = tNode;
                    } else if (this.querySelector('h2')) {
                        titNode = this.querySelector('h2');
                        tn = titNode;
                    }
                    for (var j = 0; j < tn.length; j++) {
                        tn[j].style.fontSize = styleArr[2];
                    }
                } else if (n4 == 1) {
                    this.style.margin = styleArr[3];
                }
            });
        }
    }
    window.addEventListener('resize', function () {
        execute_setMp();
    });
}

var ncn = 0;
let ncn_loop = 0;
let lst_add = 0;
let lst_created = 0;
var nor_steps = 1;
//  label, space, breakOff, lType, className, bgc, marginLeft
function add_listNode(contentArr, styleArr, newAPI_texNode, newAPI_list, newAPI_parent) {
    var nc;
    if (styleArr[2] == 111) {
        nc = document.createElement('ul');
        nc.setAttribute('index', ncn);
        document.body.appendChild(nc);
        ncID = 'listNodeWrap' + nc.getAttribute('index');
        nc.setAttribute('id', ncID);
        nc.style.width = document.body.clientWidth + 'px';
        tmp();
        lst_add++;
    } else {
        var nc = document.getElementById('listNodeWrap' + (ncn - 1).toString());
        tmp();
        lst_add++;
        lst_created++;
    }
    if (newAPI_parent != [] && newAPI_parent != undefined) {
        newStyle_API_Ver000(newAPI_parent, ncID);
    }
    ncn++;

    function tmp() {
        var nn = document.createElement('li');
        let nc = document.getElementById(ncID);
        nc.appendChild(nn);
        nn.className = 'listNode';
        nnID = 'listNodeChild' + '_fcI_' + ncn + '_lst_created_' + lst_created + '_lst_add_' + lst_add;
        nn.setAttribute('id', nnID)
        if (styleArr[4] == undefined) {} else {
            nn.className += ' ' + styleArr[4];
        }
        if (styleArr[5] == undefined) {} else {
            nn.style.backgroundColor = styleArr[5];
        }
        if (styleArr[6] == undefined) {
            nn.style.marginLeft = 2 + 'rem';
        } else {
            nn.style.marginLeft = styleArr[6];
        }
        if (styleArr[6]) {
            var value = 0.06;
            var pos_dir = 'all';
            if (styleArr[6][0]) {
                value = styleArr[6][0];
            }
            if (styleArr[6][1]) {
                pos_dir = styleArr[6][1];
                switch (pos_dir) {
                    case 'T':
                        nn.style.marginTop = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin-top: ' + value + 'rem\n------------------------');
                        break;
                    case 'B':
                        nn.style.marginBottom = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin-bottom: ' + value + 'rem\n------------------------');
                        break;
                    case 'L':
                        nn.style.marginLeft = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin-left: ' + value + 'rem\n------------------------');
                        break;
                    case 'R':
                        nn.style.marginRight = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin-right: ' + value + 'rem\n------------------------');
                        break;
                    case 'all':
                        nn.style.margin = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin: ' + value + 'rem\n------------------------');
                        break;
                }
            }
        }
        for (var i = 0; i < contentArr.length; i++) {
            var texNode = document.createElement(styleArr[0]);
            nn.appendChild(texNode);
            texNode.innerHTML = contentArr[i];
            texNode.style.display = 'inline-block';
            // texNode.style.float = 'left';
            styleArr[1] != undefined ? styleArr[1] = styleArr[1] : styleArr[1] = 2;
            texNode.setAttribute('index', i);
            let tnID = 'listNodeChild' + '_fcI_' + ncn + '_gIndex_' + ncn_loop + '_lIndex_' + i;
            texNode.getAttribute('index') == 0 ? texNode.style.marginLeft = 0 : texNode.style.marginLeft = styleArr[1] + 'rem';
            if (typeof styleArr[1] != 'string') {
                texNode.getAttribute('index') == 0 ? texNode.style.marginLeft = 0 : texNode.style.marginLeft = styleArr[1];
            }

            texNode.setAttribute('id', tnID);
            if (newAPI_texNode != undefined) {
                newStyle_API_Ver000(newAPI_texNode, tnID);
            }
            texNode.getAttribute('index') == 0 && (function () {
                styleArr[7] != undefined && (function () {
                    styleArr[7].indexOf('-') != -1 && (function () {
                        let temp = styleArr[7].split('-');
                        temp[0] == 'paragraph' && (function () {
                            texNode.style.textIndent = temp[1];
                        })();
                    })();
                })();
            })();
            ncn_loop++;
        }
        if (styleArr[3] != undefined) {
            nn.style.listStyleType = styleArr[3];
        } else {
            nn.style.listStyleType = 'disc';
        }
        window.addEventListener('load', function () {
            nn.style.font = nn.querySelector(styleArr[0]).style.font;
        })

        if (newAPI_list != [] && newAPI_list != undefined) {
            newStyle_API_Ver000(newAPI_list, nnID);
        }
    }
}

let add_answersNode_exeFunc_gStep = 0;
let childNodeIndex = 0;
let kidInKid = 0;
let parRandomNum = (parseInt((Math.random()) * 16000)).toString();
let childRandomNum = (parseInt((Math.random()) * 1000)).toString();
/* 
add_answersNode([
    ['g', 'all', 'label', 'div'],

    ['e', 'every', 'label', 'div']
    // ['le-0-1', 'local', 'label', 'div'],
    // ['lg-0-1', 'local', 'label', 'span']
], [
    ['topic', 'tex', '题目'],
    ['answer', 'tex', '答案'],
    ['test', 'htm', '<div>123</div>']
], [
    ['topic', 'label', 'h3'],
    ['answer', 'label', 'h3']
], [
    ['topic', 'color', '#ccc'],
    ['answer', 'BGC', '#999']
]); */


function add_answersNode(parLabArr, NodeAttArr, NodeLabArr, newAPIAutoArr) {
    let add_answersNode_parNode_step = 0;

    let obj = new Object();

    let nodeLength = NodeAttArr.length;
    obj.parNodeLabel = [];
    for (let i = 0; i < nodeLength; i++) {
        (obj.parNodeLabel)[i] = undefined;
    }

    // 解析 Node 父级标签
    // undefined 默认父级 div
    // g 全局 所有 Node 统一父级
    // e 全局 所有 Node 分别添加同一属性父级
    // l 局部 单独/批量 添加父级 无分割使用默认父级
    // le local every
    // lg local global
    // 以字符'-'分割 (arr[1] 开始应用Node的index, arr[2] 结束应用Node的index; 无arr[2]则只应用arr[i]Node的索引值)
    for (let ia = 0; ia < parLabArr.length; ia++) {
        // 循环次数
        let gStep = add_answersNode_exeFunc_gStep;
        // 函数调用次数
        let parStep = add_answersNode_parNode_step;

        // 直接获取每个数组方便后面的编写
        let parV = parLabArr[ia];
        // 类型 g e l
        let type = parV[0];
        // 每个node都要生成一个独一无二的名字 方便调用
        let name = parV[1];
        // 属性名
        let att = parV[2];
        // 属性值
        let attV = parV[3];

        // 在类型为 local 时执行
        let local_type = 'lg';
        let local_startIndex = undefined;
        let local_endIndex = undefined;
        let local_Index = undefined;
        (function () {
            if (type.indexOf('-') != -1) {
                let localValue = type.split('-');
                local_type = localValue[0];
                localValue.length == 2 && (function () {
                    local_Index = localValue[1];
                    local_startIndex = undefined;
                    local_endIndex = undefined;
                })();
                localValue.length == 3 && (function () {
                    local_startIndex = localValue[1];
                    local_endIndex = localValue[2];
                    local_Index = undefined;
                })();
            }
        })();


        // 解析 Node 写入 obj
        obj.childNodeName = [];
        obj.childNodeAttName = [];
        obj.childNodeValue = [];
        obj.childNodeOfChildNode = [];
        for (let ib = 0; ib < NodeAttArr.length; ib++) {
            let texV = NodeAttArr[ib];
            for (let kd = 0; kd < texV.length; kd++) {
                let tName = texV[0];
                let type = texV[1];
                let value = texV[2];

                (obj.childNodeValue)[ib] = value;
                if (value.toString().indexOf(',') != -1) {
                    valueTmp = value.toString().replace(/,/g, '');
                    (obj.childNodeValue)[ib] = valueTmp;
                }

                if (typeof value != 'string') {
                    (obj.childNodeOfChildNode)[ib] = value;
                }
                (obj.childNodeName)[ib] = tName;
                (obj.childNodeAttName)[ib] = type;
            }
        }
        // 解析 Node 属性
        obj.childNodeLabel = [];
        for (let ic = 0; ic < NodeLabArr.length; ic++) {
            let nAtt = NodeLabArr[ic];
            for (let ke = 0; ke < nAtt.length; ke++) {
                switch (nAtt[1]) {
                    case 'label':
                        (obj.childNodeLabel)[ic] = nAtt[0] + '-' + nAtt[2]
                        break;
                    case 'inner':
                        (obj.childNodeLabel)[ic] = nAtt[0] + '-' + nAtt[2]
                        break;
                }
            }
        }

        // 将父级标签及其类型 写入obj.parNodeLabel
        (function () {
            att && (function () {
                if (attV == undefined && attV.length == 0) {
                    attV = 'div';
                }
                attV && (function () {
                    switch (type) {
                        case 'g':
                            obj.parNodeLabel = ['g-' + attV + '-' + name];
                            break;
                        case 'e':
                            for (let ka = 0; ka < nodeLength; ka++) {
                                (obj.parNodeLabel)[ka] = 'e-' + attV;
                            }
                            break;
                        case undefined:
                            break;
                        default:
                            if (local_Index != undefined && local_Index.length != 0) {
                                (obj.parNodeLabel)[local_Index] = 'only-' + attV + '-' + name;
                            }
                            if (local_startIndex == undefined && local_startIndex > local_endIndex) {
                                local_startIndex = 0;
                            }
                            local_endIndex && (function () {
                                switch (local_type) {
                                    case 'lg':
                                        for (let kb = local_startIndex; kb <= local_endIndex; kb++) {
                                            (obj.parNodeLabel)[kb] = 'lg-' + attV + '-' + name;
                                        }
                                        break;
                                    case 'le':
                                        for (let kb = local_startIndex; kb <= local_endIndex; kb++) {
                                            (obj.parNodeLabel)[kb] = 'le-' + attV + '-' + name;
                                        }
                                        break;
                                    default:
                                        for (let kb = local_startIndex; kb <= local_endIndex; kb++) {
                                            (obj.parNodeLabel)[kb] = 'le-' + attV + '-' + name;
                                        }
                                        break;
                                }
                            })();
                            break;
                    }
                })();
            })();
        })();

        logMsg();

        function logMsg() {
            let t = '';
            let t_l = '';
            let n = name;
            let a = att;
            let av = attV;
            switch (type) {
                case 'g':
                    t = 'Global';
                    break;
                case 'e':
                    t = 'every';
                    break;
                case undefined:
                    t = 'none';
                    break;
                default:
                    t = 'local';
                    local_Index && (function () {
                        t_l = '被应用index ==' + local_Index + ';';
                    })();
                    local_endIndex && (function () {
                        t_l = ('\n\t\t被应用index == ' + local_startIndex + ' ~ ' + local_endIndex).toString();
                    })();
                    break;
            }
            console.log('add_answersNode / parLabArr:' +
                '\n\t第' + parseInt(add_answersNode_exeFunc_gStep + 1) + '次执行:\n\t第' +
                parseInt(add_answersNode_parNode_step + 1) + '次循环: ' +
                '\n\t\ttype: ' + t +
                t_l +
                '\n\t\tname: ' + name +
                '\n\t\t' + a + ': ' + av);
        }


        // 最终执行
        // 执行 全局 方案 
        obj.temp = [];
        (function () {
            ((obj.parNodeLabel).toString()).indexOf('-') != -1 && (function () {
                let judge = ((obj.parNodeLabel).toString()).split('-');
                switch (judge[0]) {
                    case 'g':
                        let parLabel = document.createElement(judge[1]);
                        document.body.appendChild(parLabel);
                        let parOnlyId = 'add_answersNode_par_' + judge[1] + '_' + judge[2] + '_call' + gStep + '_' + 'Loop' + parStep + '_random' + parRandomNum;
                        parLabel.id = parOnlyId;
                        parLabel.setAttribute('name', judge[2]);
                        parLabel.setAttribute('CallIndex', gStep);
                        parLabel.setAttribute('LoopIdex', parStep);
                        newAPIAutoArr && (function () {
                            for (let ig = 0; ig < newAPIAutoArr.length; ig++) {
                                switch (newAPIAutoArr[ig][0]) {
                                    case judge[2]:
                                        newAPIAutoArr[ig].shift();
                                        newStyle_API_Ver000([newAPIAutoArr[ig]], parOnlyId);
                                        break;
                                }
                            }
                        })();
                        // 子元素
                        for (let ie = 0; ie < (obj.childNodeLabel).length; ie++) {
                            let childLabelValue = obj.childNodeLabel[ie].split('-');
                            let cnd = document.createElement(childLabelValue[1]);
                            cnd.setAttribute('name', childLabelValue[0])
                            let childOnlyId = 'add_answersNode_kid_' + childLabelValue[1] + '_' + childLabelValue[0] + '_call' + gStep + '_onlyIndex_' + childNodeIndex + '_' + 'Loop' + ie + '_random' + childRandomNum;
                            cnd.id = childOnlyId;
                            switch (obj.childNodeAttName[ie]) {
                                case 'tex':
                                    cnd.innerText = obj.childNodeValue[ie];

                                    parLabel.appendChild(cnd);
                                    for (let ih = 0; ih < newAPIAutoArr.lngth; ih++) {
                                        switch (newAPIAutoArr[ih][0]) {
                                            case childLabelValue[0]:
                                                newAPIAutoArr[ih].shift();
                                                newStyle_API_Ver000([newAPIAutoArr[ih]], parOnlyId);
                                                newStyle_API_Ver000([newAPIAutoArr[ih]], childOnlyId);
                                                break;
                                        }
                                    }
                                    // newStyle_API_Ver000([newAPIAutoArr[ig]], childOnlyId);
                                    break;
                                case 'htm':
                                    parLabel.innerHTML += obj.childNodeValue[ie];
                                    break;
                            }
                            // 解析 子元素 的 子元素
                            /*  for (let ik = 0; ik < NodeAttArr.length; ik++) {
                                 let kidAtt = NodeAttArr[ik];
                                 if (typeof kidAtt[2] != 'string') {
                                     obj.temp[ik] = kidAtt;
                                 }
                             }
                             for (let i1 = 0; i1 < obj.temp.length; i1++) {}
                             let value = obj.temp[0];
                             for (let l2 = 0; l2 < value[2].length; l2++) {
                                 cnd.appendChild(document.createElement(value[3][0][0]))
                             } */
                            /* for (let kh = 0; kh < kidAtt[2].length; kh++) {
                                let label = document.createElement(kidAtt[3][0][0]);
                                cnd.appendChild(label);
                                label.setAttribute('index', kh);
                                label.id = kidAtt[3][0] + '_onlyNum_' + kidInKid;

                                label.innerText = kidAtt[2][kh];

                                kidInKid++;
                            }
                            console.log(kidAtt[3]); */
                            // [1,2,3]
                            // console.log(valueLoading.length);
                            // // span id
                            // let valueAtt = kidAtt[3][0];
                            // let tempNum = 0;
                            /*         for (let im = 0; im < valueLoading.length; im++) {
                                        let valueLabel = document.createElement(valueAtt[0]);
                                        valueLabel.innerText = valueLoading[im];
                                        cnd.appendChild(valueLabel);
                                        tempNum++;
                                    }
                                    // newStyle_API_Ver000(kidAtt[3][1], kidAtt[3][0][1]);
                                    tempNum = 0;
                                }
                            } */
                            // console.log(obj.childNodeOfChildNode);
                            // console.log(NodeAttArr[3]);
                            for (let kf = 0; kf < obj.childNodeOfChildNode.length; kf++) {
                                let tmpV = obj.childNodeOfChildNode[kf];
                                for (let kg = 0; kg < tmpV.length; kg++) {
                                    // let tmpLabel = document.createElement(tmpV)
                                }
                            }


                            childNodeIndex++;
                        }
                        break;
                }
            })();
        })();
        // let g_label = document.getElementById('add_answersNode' + g_judge[2] + '_call' + gStep + '_' + 'Loop' + parStep);
        // (function () {})();
        add_answersNode_parNode_step++;
    }

    // 解析 Node style
    for (let ic = 0; ic < newAPIAutoArr.length; ic++) {
        let nStyle = newAPIAutoArr[ic];
    }
    add_answersNode_exeFunc_gStep++;
}

// function add_normalNode(arr, label, space, mgn, name, bgColor, textIndent, font) {
function add_normalNode(contentArr, styleArr, newAPI_child, newAPI_parent) {
    let div;
    if (typeof styleArr[0] == 'string') {
        div = document.createElement('div');
    } else {
        div = document.createElement(styleArr[0][0]);
    }
    div.setAttribute('index', nor_steps);
    div.setAttribute('id', 'normalNodeWrap' + div.getAttribute('index'));
    div.setAttribute('class', 'normalNodeWrap');
    div.style.display = 'block';
    // div.style.justifyContent = 'left';
    div.style.backgroundColor = 'transparent';
    document.body.appendChild(div);
    if (styleArr[2] == undefined) {
        div.style.margin = '1rem 0.25rem';
    } else if (styleArr[2] == '') {} else {
        div.style.margin = styleArr[2];
    }
    if (styleArr[2]) {
        var ifSet = styleArr[2].charAt(styleArr[2].length - 1);
        var value = styleArr[2].substring(0, styleArr[2].length - 1);
        if (isNaN(ifSet)) {
            switch (ifSet) {
                case 'T':
                    div.style.marginTop = value + 'rem';
                    console.log('mt: ' + value + 'px');
                    break;
                case 'B':
                    div.style.marginBottom = value + 'rem';
                    console.log('mb: ' + value + 'rem');
                    break;
                case 'L':
                    div.style.marginLeft = value + 'rem';
                    console.log('ml: ' + value + 'rem');
                    break;
                case 'R':
                    div.style.marginRight = value + 'rem';
                    console.log('mr: ' + value + 'rem');
                    break;
            }
        }
    }
    div.className = 'normalNode';
    if (styleArr[3] == undefined) {} else {
        div.className = 'normalNode ' + 'nor' + styleArr[3];
    }
    if (styleArr[4] == undefined) {} else {
        div.style.backgroundColor = styleArr[4];
    }
    if (styleArr[5] == undefined) {
        div.style.textIndent = 0;
    } else {
        div.style.textIndent = styleArr[5];
    }
    if (styleArr[6] == undefined) {} else {
        // div.style.font = styleArr[6];
        let temp = div.getAttribute('style');
        div.setAttribute('style', 'font: ' + styleArr[6] + '; ' + temp);
    }

    for (let i = 0; i < contentArr.length; i++) {
        let texNode;
        if (typeof styleArr[0] == 'string') {
            texNode = document.createElement(styleArr[0]);
        } else {
            texNode = document.createElement(styleArr[0][1]);
        }
        if (styleArr[0] == 'h3') {
            texNode.style.fontWeight = '800';
        }
        div.appendChild(texNode);
        texNode.setAttribute('index', i);
        texNode.setAttribute('id', 'nor' + nor_steps + 'ChildNode' + i);

        texNode.innerHTML = contentArr[i];
        texNode.style.display = 'inline-block';
        // texNode.style.float = 'left';
        styleArr[1] && true ? styleArr[1] = styleArr[1] : styleArr[1] = 2;
        texNode.getAttribute('index') == 0 ? texNode.style.marginLeft = 0 : texNode.style.marginLeft = styleArr[1] + 'rem';
        texNode.id == 'nor' + nor_steps + 'ChildNode0' && styleArr[5] != undefined && styleArr[5].indexOf('-') != -1 && (function () {
            let temp = styleArr[5].split('-');
            temp[0] == 'paragraph' && (function () {
                document.getElementById('nor' + nor_steps + 'ChildNode0').style.textIndent = temp[1];
            })();
        })();


        if (newAPI_child != [] && newAPI_child != undefined) {
            newStyle_API_Ver000(newAPI_child, 'nor' + nor_steps + 'ChildNode' + i);
        }
    }
    if (newAPI_parent != [] && newAPI_parent != undefined) {
        newStyle_API_Ver000(newAPI_parent, 'normalNodeWrap' + div.getAttribute('index'));
    }
    nor_steps++;
}

function add_moduleNode(contentArr, styleArr, newAPI_child, newAPI_parent) {
    var div = document.createElement('div');
    div.setAttribute('index', nor_steps);
    div.setAttribute('id', 'normalNodeWrap' + div.getAttribute('index'));
    div.setAttribute('class', 'normalNodeWrap');
    div.style.display = 'block';
    // div.style.justifyContent = 'left';
    div.style.backgroundColor = 'transparent';
    document.body.appendChild(div);
    if (styleArr[2] == undefined) {
        div.style.margin = '1rem 0.25rem';
    } else if (styleArr[2] == '') {} else {
        div.style.margin = styleArr[2];
    }
    if (styleArr[2]) {
        var ifSet = styleArr[2].charAt(styleArr[2].length - 1);
        var value = styleArr[2].substring(0, styleArr[2].length - 1);
        if (isNaN(ifSet)) {
            switch (ifSet) {
                case 'T':
                    div.style.marginTop = value + 'rem';
                    console.log('mt: ' + value + 'px');
                    break;
                case 'B':
                    div.style.marginBottom = value + 'rem';
                    console.log('mb: ' + value + 'rem');
                    break;
                case 'L':
                    div.style.marginLeft = value + 'rem';
                    console.log('ml: ' + value + 'rem');
                    break;
                case 'R':
                    div.style.marginRight = value + 'rem';
                    console.log('mr: ' + value + 'rem');
                    break;
            }
        }
    }
    div.className = 'normalNode';
    if (styleArr[3] == undefined) {} else {
        div.className = 'normalNode ' + 'nor' + styleArr[3];
    }
    if (styleArr[4] == undefined) {} else {
        div.style.backgroundColor = styleArr[4];
    }
    if (styleArr[5] == undefined) {
        div.style.textIndent = 0;
    } else {
        div.style.textIndent = styleArr[5];
    }
    if (styleArr[6] == undefined) {} else {
        div.style.font = styleArr[6];
    }

    for (var i = 0; i < contentArr.length; i++) {
        var texNode = document.createElement(styleArr[0]);
        if (styleArr[0] == 'h3') {
            texNode.style.fontWeight = '800';
        }
        div.appendChild(texNode);
        texNode.setAttribute('index', i);
        texNode.setAttribute('id', 'nor' + nor_steps + 'ChildNode' + i);

        texNode.innerHTML = contentArr[i];
        texNode.style.display = 'inline-block';
        // texNode.style.float = 'left';
        styleArr[1] && true ? styleArr[1] = styleArr[1] : styleArr[1] = 2;
        texNode.getAttribute('index') == 0 ? texNode.style.marginLeft = 0 : texNode.style.marginLeft = styleArr[1] + 'rem';
        texNode.id == 'nor' + nor_steps + 'ChildNode0' && styleArr[5] != undefined && styleArr[5].indexOf('-') != -1 && (function () {
            let temp = styleArr[5].split('-');
            temp[0] == 'paragraph' && (function () {
                document.getElementById('nor' + nor_steps + 'ChildNode0').style.textIndent = temp[1];
            })();
        })();

        if (newAPI_child != [] && newAPI_child != undefined) {
            newStyle_API_Ver000(newAPI_child, 'nor' + nor_steps + 'ChildNode' + i);
        }
    }
    if (newAPI_parent != [] && newAPI_parent != undefined) {
        newStyle_API_Ver000(newAPI_parent, 'normalNodeWrap' + div.getAttribute('index'));
    }
    nor_steps++;
}

function setDocTitle(str) {
    document.title = str;
}