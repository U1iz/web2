(function () {
    let style = document.createElement("style");
    style.innerText = "#msgCtr::-webkit-scrollbar { display: none; }";
    document.querySelector('head').appendChild(style);
})();

function addElem(elem) {
    document.head.insertBefore(elem, document.head[3]);
}
(function () {
    let msgGUI = document.createElement('div');
    document.body.appendChild(msgGUI);
    msgGUI.setAttribute('id', 'msgCtr');

    let msg_h = msgGUI.clientHeight;
    let msg_w = msgGUI.clientWidth;

    let msg_maxHeight = document.documentElement.clientHeight * 0.32;

    msgGUI.style.position = 'absolute';
    msgGUI.style.zIndex = '999';
    msgGUI.style.top = document.body.clientWidth * 0.003 + 'px';
    // msgGUI.style.left = document.body.clientWidth * 0.006 + 'px';
    msgGUI.style.padding = '4px 3.2px';
    msgGUI.style.paddingLeft = 1.6 + 'px';
    msgGUI.style.borderRadius = 12 + 'px';
    if (document.body.clientWidth >= 720) {
        msgGUI.style.fontSize = document.body.clientWidth / 160 + 'px';
    } else {
        msgGUI.style.fontSize = document.body.clientWidth / 320 + 'px';
    }
    msgGUI.style.backgroundColor = 'rgba(65, 71, 84,.64)';

    function situation_overHeight() {
        msgGUI.style.overflowY = 'scroll';
        msgGUI.style.height = msg_maxHeight + 'px';
    }

    let time = new Date();
    let count = 0;
    let script = new Array;
    let link = new Array;
    let loadedLogs = new Array;
    let loadedLogs_index = 0;
    let logLoadedInfo_length = 0;
    let flag = true;
    let log_spentTime_flag = false;
    let space_time = 20;

    (function () {
        execute();
        window.addEventListener('load', function () {
            let spentTimeLog = "共花费:\t " + (new Date - time) / 1000 + 's\n';
            jlf();

            function jlf() {
                setTimeout(function () {
                    logLoadedInfo(spentTimeLog);
                }, space_time * logLoadedInfo_length + logLoadedInfo_length)
            };

        })
    })();

    function getElemUrl(elem, attribute) {
        return elemAddress = elem.getAttribute(attribute);
    }

    // 节流阀
    function jieLiuFa() {
        setTimeout(function () {
            flag = true;
        }, space_time)
    };

    // 显示加载信息
    function logLoadedInfo(msg) {
        let max_fontLength = 36;
        let num_fstSub = 6;
        let msg_tmp01 = '\U2026';
        let num_secSub = max_fontLength - (num_fstSub + 1);
        let msg_afterEdit = msg;

        if (msg.length > max_fontLength) {
            let msg_tmp00 = msg.substring(0, num_fstSub);
            let msg_tmp02 = msg.substring(msg.length - num_secSub, msg.length);
            msg_afterEdit = msg_tmp00 + '\u2026' + msg_tmp02;
        }

        let timer = setInterval(function () {
            flag && (function () {
                flag = false;
                let msgLog = document.createElement('p');
                msgLog.style.display = 'block';
                msgLog.style.color = '#f7f5f9';
                msgLog.innerHTML = msg_afterEdit;
                // msgLog.innerHTML = msg;
                msgGUI.appendChild(msgLog);
                // 刷新容器属性
                msg_h = msgGUI.clientHeight;
                msg_w = msgGUI.clientWidth;
                msg_h >= msg_maxHeight && (function () {
                    situation_overHeight();
                })();
                clearInterval(timer);
                jieLiuFa();
            })();
        }, 0);
    }

    // main 通过判断onload变相实现加载进度可视化的目的
    function execute() {
        let allScriptElem = document.querySelectorAll('script');
        for (let si = 0; si < allScriptElem.length - 1; si++) {
            let jsAddress = allScriptElem[si].getAttribute('src');
            script[si] = jsAddress;
        }
        let allLinkElem = document.querySelectorAll('link');
        for (let ci = 0; ci < allLinkElem.length; ci++) {
            let lnkAddress = allLinkElem[ci].getAttribute('href');
            link[ci] = lnkAddress;
        }

        let img = document.querySelectorAll('img');

        let num = img.length + script.length + link.length;

        for (let i = 0, len1 = img.length; i < len1; i++) {
            (function (j1) {
                img[j1].onload = function () {
                    count++;
                    let imgLoadLog = '图片_' + count + '\0' + getElemUrl(img[i], 'src') + '\0已加载\n';
                    logLoadedInfo(imgLoadLog);
                    loadedLogs.push(imgLoadLog);
                    logLoadedInfo_length++;
                    document.querySelector('#bar').style.width = (count / num) * 100 + '%';
                };
            })(i);
        }
        for (let j = 0, len2 = script.length; j < len2; j++) {
            (function (j2) {
                let scriptElem = document.createElement('script');
                scriptElem.src = script[j2];
                scriptElem.onload = function () {
                    count++;
                    let scriptLoadLog = '脚本_' + count + '\0' + getElemUrl(allScriptElem[j], 'src') + '\0已加载\n';
                    logLoadedInfo(scriptLoadLog);
                    loadedLogs.push(scriptLoadLog);
                    logLoadedInfo_length++;
                    document.querySelector('#bar').style.width = (count / num) * 100 + '%';
                };
                addElem(scriptElem);
            })(j);
        }

        for (let k = 0, len3 = link.length; k < len3; k++) {
            let linkElem = document.createElement('link');
            linkElem.href = link[k];
            linkElem.rel = 'stylesheet';
            linkElem.onload = function () {
                count++;
                let linkLoadLog = '文件_' + count + '\0' + getElemUrl(allLinkElem[k], 'href') + '\0已加载\n';
                logLoadedInfo(linkLoadLog);
                loadedLogs.push(linkLoadLog);
                logLoadedInfo_length++;
                document.querySelector('#bar').style.width = (count / num) * 100 + '%';
                addElem(linkElem);
            };
        }
    }
})();

let elem = document.querySelector('#msgCtr');

function elemRemove() {
    animate(elem, -(elem.offsetLeft + elem.clientWidth) - 1);
    setTimeout(function () {
        elem.remove();
    }, 640)
}
elem.onclick = function () {
    elemRemove();
}
setTimeout(function () {
    localStorage.getItem('equipmentType') == '1' && (function () {
        elemRemove()
    }());
    setTimeout(function () {
        elemRemove()
    }, 4600);
}, 3200);
window.addEventListener('load', function () {
    document.querySelector('#bar').remove();
    setTimeout(function () {
        elem.remove();
    }, 1280)
});