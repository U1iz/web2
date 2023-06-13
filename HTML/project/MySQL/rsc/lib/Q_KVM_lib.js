let Q_KVM_index = 0;
let Q_KVM_global_loop_index = 0;
let Q_KVM_Local_loop_index = 0;

function b(str) {
    return '<strong style = "margin: 0 0.32rem;">' + str + '</strong>';
}

function bf(str, fontSize) {
    return '<span style = "margin: 0 0.32rem;font-weight: 400;font-size: ' + fontSize + '">' + str + '</span>';
}

function i(str) {
    return '<em style = "margin: 0 0.4rem;">' + str + '</em>';
}

function u(str) {
    return '<ins style = "margin: 0 0.32rem;">' + str + '</ins>';
}

function s(str) {
    return '<del style = "margin: 0 0.32rem;">' + str + '</del>';
}

function pre(str) {
    return '<pre>' + str + '</pre>';
}

function Q_KV_module(arr) {
    Q_KV_module_par(arr);
}

function Q_KV_module_par(arr) {
    // 模块父级
    let div_modulePar = document.createElement("div");
    // 模块列表父级
    let ul_contentListPar = document.createElement("ul");
    // 用于 显示&隐藏 所有答案
    let show_all_answer = document.createElement('button');
    show_all_answer.innerHTML = '显示所有答案';
    show_all_answer.style.position = 'relative';
    show_all_answer.style.margin = '1rem 2.4rem';
    show_all_answer.style.padding = '0.32rem 1.28rem';
    show_all_answer.style.borderRadius = '1rem';
    show_all_answer.style.cursor = 'pointer';
    show_all_answer.style.backgroundColor = 'rgba(96,96,96,0.12)';
    // 用于统一题目字样
    let q_unifier = document.createElement('button');
    q_unifier.innerHTML = '统一题目字样';
    q_unifier.style.position = 'relative';
    q_unifier.style.margin = '1rem 2.4rem';
    q_unifier.style.padding = '0.32rem 1.28rem';
    q_unifier.style.borderRadius = '1rem';
    q_unifier.style.backgroundColor = 'rgba(96,96,96,0.12)';
    q_unifier.style.cursor = 'pointer';

    // 
    document.body.appendChild(div_modulePar);
    div_modulePar.appendChild(show_all_answer);
    div_modulePar.appendChild(q_unifier);
    div_modulePar.appendChild(ul_contentListPar);

    // 父级 attribute
    div_modulePar.setAttribute("id", 'Q_KVM_wrap_' + document.querySelector('title').innerText + Q_KVM_index)

    // 子集 attribute
    ul_contentListPar.setAttribute("id", 'Q_KVM_list_' + Q_KVM_index)

    // 父级 style


    // 子集 style
    ul_contentListPar.style.marginLeft = 2.4 + 'rem';

    //
    for (let i = 0; i < arr.length; i++) {
        Q_KV_module_contentList(arr[i]);
        Q_KVM_global_loop_index++;
        Q_KVM_Local_loop_index++;
    }

    // 显示&隐藏 所有答案
    show_all_answer.onclick = function () {
        let AffectedObj = document.getElementsByClassName('btn_showRst_' + document.querySelector('title').innerText);
        let answers = document.querySelectorAll('.answers_' + document.querySelector('title').innerText);
        if (sessionStorage.getItem('execute_all') == 'true' || sessionStorage.getItem('execute_all') == 'direct') {
            answers = document.querySelectorAll('.answers');
        }
        switch (show_all_answer.innerHTML) {
            case '显示所有答案':
                for (let i = 0; i < answers.length; i++) {
                    answers[i].style.display = 'inline-block';
                    AffectedObj[i].innerHTML = '隐藏答案';
                }
                show_all_answer.innerHTML = '隐藏所有答案';
                break;
            case '隐藏所有答案':
                for (let i = 0; i < answers.length; i++) {
                    answers[i].style.display = 'none';
                    AffectedObj[i].innerHTML = '显示答案';
                }
                show_all_answer.innerHTML = '显示所有答案';
                break;
        }
    }
    // 统一&back 题目字体样式
    let unifiedFlag = 0;
    q_unifier.onclick = function () {
        let questions = document.querySelectorAll('.questions_' + document.querySelector('title').innerText);
        switch (unifiedFlag) {
            case 0:
                for (let i = 0; i < questions.length; i++) {
                    questions[i].style.fontSize = 1.1 + 'rem';
                    questions[i].style.fontFamily = 'Microsoft YaHei';
                    questions[i].style.fontWeight = 400;
                    questions[i].style.color = '#222333';
                    questions[i].style.textShadow = '0.16rem 0.24rem 0.2rem rgba(0 0 0 / 10%)';
                    questions[i].className += ' questionNormal';
                    q_unifier.style.color = '#999';
                    q_unifier.style.cursor = 'default';
                    q_unifier.innerHTML = '刷新回归原样式';
                }
                unifiedFlag = 1;
                break;

            case 1:
                // document.getElementById('Q_KVM_wrap_0').load(location.href + "#Q_KVM_wrap_0");
                ul_contentListPar.load(location.href + ' #Q_KVM_list_' + Q_KVM_index + '>*')
                break;
        }
    }

    Q_KVM_Local_loop_index = 0;
    Q_KVM_index++;
}

function Q_KV_module_contentList(valueArr) {
    // 获取父级
    let par = document.getElementById('Q_KVM_list_' + Q_KVM_index);
    let li_contentList = document.createElement('li');
    let div_questionWrap = document.createElement('div');
    let div_core = document.createElement('div');
    let div_explain = document.createElement('div');

    let ipt = document.createElement('input');
    let btn_showRW = document.createElement('button');
    let btn_showRst = document.createElement('button');

    // 下分界线 + style
    let span_splitLine = document.createElement('span');
    // span_splitLine.style.position = 'relative';
    span_splitLine.style.display = 'block';
    span_splitLine.style.width = '100%';
    // span_splitLine.style.height = '0.12rem';
    span_splitLine.style.height = '0.06rem';
    span_splitLine.style.marginTop = '0.24rem';
    // span_splitLine.style.backgroundColor = '#ccc';
    span_splitLine.style.backgroundColor = '#54926b';
    // span_splitLine.style.marginLeft = par.style.marginLeft;
    span_splitLine.style.marginLeft = -par.offsetLeft + 'px';
    span_splitLine.style.width = document.body.clientWidth + 'px';
    window.addEventListener('load', function () {
        span_splitLine.style.width = document.body.clientWidth + 'px';
    });
    window.addEventListener('resize', function () {
        span_splitLine.style.width = document.body.clientWidth + 'px';
    })

    // 题目
    let p_question = document.createElement('p');
    let p_show_RW = document.createElement('p');
    let p_show_answer = document.createElement('p');

    p_show_answer.className += ' questionAnswerAddByQ_KVM';

    // 
    let formatArr = [];
    for (let i = 0; i < valueArr.length; i++) {
        if (typeof valueArr[i] == 'object') {
            if ((valueArr[i])[0] == 'formatArr' || (valueArr[i])[0] == 'FAR') {
                valueArr[i].shift();
                formatArr = (valueArr[i])[0];
            }
        }
    }

    // 选择题
    // 单选
    function CQ_MCQ() {
        let ul_showChoices = document.createElement('ul');
        div_questionWrap.appendChild(ul_showChoices);

        let styleNodeFor_liChoices = document.createElement('style');


        let acs = valueArr[1];
        // console.log(acs);

        let index = 0;
        for (let ia = 0; ia < acs.length; ia++) {
            let li_choice = document.createElement('li');
            let p_cont = document.createElement('p');
            ul_showChoices.appendChild(li_choice);
            li_choice.appendChild(p_cont);
            p_cont.innerHTML = format(acs[ia], formatArr);
            p_cont.className += ' questionChoices';

            // attribute
            li_choice.setAttribute('index', index + 1);
            li_choice.setAttribute('latin', num2letter(index + 1));
            // style
            li_choice.style.listStyleType = 'upper-latin';
            li_choice.style.fontSize = '0.64rem';
            li_choice.style.color = '#1b1b1b';
            p_cont.style.fontSize = '0.96rem';
            p_cont.style.color = '#a200ff';

            div_core.appendChild(btn_showRst);
            div_core.appendChild(p_show_answer);


            // console.log(valueArr);
            setQuestionColor(valueArr[3]);
            index++;
        }

    }

    function JQ() {
        div_core.appendChild(btn_showRst);
        div_core.appendChild(p_show_answer);
        p_question.className += ' judgeQuestionAddByQ_KVM';
    }

    function ae() {
        div_questionWrap.remove();
        div_core.remove();
        let h3 = document.createElement('h3');
        li_contentList.appendChild(h3);
        li_contentList.style.display = 'block';
        h3.style.fontSize = (valueArr[1])[0] + 'rem';
        h3.style.fontWeight = (valueArr[1])[1];
        h3.style.letterSpacing = (valueArr[1])[2];
        // h3.style.textIndent = valueArr[2];
        h3.style.color = '#222';
        h3.className += ' elemAddByQ_KVM_normal';
        valueArr[0] = format(valueArr[0], formatArr);

        h3.innerHTML = valueArr[0];

        newStyle_API_Ver000(valueArr[3], li_contentList);
        newStyle_API_Ver000(valueArr[2], h3);
    }

    function num2letter(num) {
        // 0 48
        // A 65

        // let letter = 'B';
        // console.log(letter.charCodeAt(0)); //66
        num = num + 64;
        return String.fromCharCode(num);
    }

    // 

    par.appendChild(li_contentList);
    li_contentList.appendChild(div_questionWrap);
    div_questionWrap.appendChild(p_question);
    li_contentList.appendChild(div_core)
    switch (valueArr[0]) {
        case 'CQ':
            // 单选题 choice questions
            li_contentList.setAttribute('type', 'CQ');
            setAnswerInner(valueArr[3], valueArr[0]);
            valueArr.shift();
            CQ_MCQ();
            break;
        case 'MCQ':
            // 多选题 multiple choice questions
            li_contentList.setAttribute('type', 'MCQ');
            setAnswerInner(valueArr[3], valueArr[0]);
            valueArr.shift();
            CQ_MCQ();
            break;
        case 'JQ':
            // 判断题 Judgment question
            li_contentList.setAttribute('type', 'JQ');
            setAnswerInner(valueArr[2], valueArr[0]);
            valueArr.shift();
            setQuestionColor(valueArr[2]);
            JQ();
            break;
        case 'elem':
            li_contentList.setAttribute('type', 'elem');
            valueArr.shift();
            // 创建其他元素
            ae();
            break;
        default:
            li_contentList.setAttribute('type', 'default');
            if (valueArr[3] == 'list') {
                li_contentList.setAttribute('type', 'list');
            }
            div_core.appendChild(ipt);
            div_core.appendChild(btn_showRW);
            div_core.appendChild(p_show_RW);
            div_core.appendChild(btn_showRst);
            div_core.appendChild(p_show_answer);
            setAnswerInner(valueArr[1], valueArr[3]);
            setQuestionColor(valueArr[2]);
            break;
    }
    li_contentList.appendChild(span_splitLine);


    // 写入 题目value  p_question attribute & 样式
    p_question.className += ' questions_' + document.querySelector('title').innerText;
    p_question.innerHTML = format(valueArr[0], formatArr);
    p_question.style.fontSize = '1rem';

    // p_show_answer attribute & 样式
    function setAnswerInner(para, jd) {
        if (jd == 'list') {
            div_core.insertBefore(document.createElement('br'), div_core.childNodes[4]);
            div_core.insertBefore(document.createElement('br'), div_core.childNodes[3]);

            addList(p_show_answer, para, jd);
        } else if (jd == 'CQ') {
            p_show_answer.innerHTML = num2letter(para);
        } else if (jd == 'MCQ') {
            let arrNew = [];
            for (let ib = 0; ib < para.length; ib++) {
                arrNew[ib] = num2letter(para[ib]);
            }
            p_show_answer.innerHTML = arrNew.toString();
        } else if (jd == 'JQ') {
            para == 1 ?
                p_show_answer.innerHTML = 'True' :
                p_show_answer.innerHTML = 'False';
        } else {
            p_show_answer.innerHTML = para;
            if (typeof para == 'object') {
                for (let ib = 0; ib < para.length; ib++) {
                    p_show_answer.innerHTML = para.toString().replace(/,/g, ' \n\u6216 ');
                }
            }
        }
    }
    if (sessionStorage.getItem('execute_all') == 'true' || sessionStorage.getItem('execute_all') == 'direct') {
        p_show_answer.className += ' answers';
    }

    function setQuestionColor(value) {
        switch (value) {
            case 1:
                p_question.style.fontWeight = 100;
                p_question.style.color = '#666';
                break;
            case 2:
                p_question.style.fontWeight = 400;
                p_question.style.color = 'rgb(37, 38, 82)';
                /* if(p_question.querySelectorAll('pre')){
                    for(var i = 0; i < p_question.querySelector('pre').length; i++){
                        p_question.querySelectorAll('pre')[i].style.color = '';
                    }
                } */
                break;
            case 3:
                p_question.style.fontWeight = 400;
                p_question.style.color = 'rgb(55, 34, 148)';
                break;
            case 4:
                p_question.style.fontWeight = 800;
                p_question.style.color = 'rgb(148, 34, 133)';
                break;
            case 5:
                p_question.style.fontWeight = 800;
                p_question.style.color = 'rgb(197, 32, 32)';
                break;
            case 6:
                p_question.style.fontWeight = 400;
                p_question.style.color = 'rgb(214, 218, 36)';
                break;
            case 7:
                p_question.style.fontWeight = 800;
                p_question.style.textShadow = '0.06rem 0.06rem 0.32rem rgba(236, 223, 43, 0.712)';
                p_question.style.color = 'rgba(247, 0, 255, 0.733)';
                break;
            case 8:
                p_question.style.fontWeight = 800;
                p_question.style.textShadow = '0.06rem 0.06rem 0.32rem rgba(0, 255, 242, 0.733)';
                p_question.style.color = 'rgba(43, 236, 123, 0.712)';
                break;
        }
    }

    initializeElementStyle();

    function initializeElementStyle() {
        p_show_answer.style.fontWeight = '400';
        p_show_answer.style.fontSize = '0.8rem';
        p_show_answer.style.color = '#223323';
        p_show_answer.style.marginLeft = '2.4rem';
        p_show_answer.style.display = 'none';

        ipt.style.display = 'inline-block';
        ipt.style.cursor = 'text';
        ipt.style.height = '1.6rem';
        ipt.style.fontWeight = '400';
        ipt.style.fontSize = '0.8rem';
        ipt.style.backgroundColor = 'transparent';
        ipt.style.color = '#223323';

        // btn_showRW p_show_RW attribute & 样式
        btn_showRW.innerHTML = '显示对错';
        btn_showRW.style.cursor = 'pointer';
        btn_showRW.style.fontWeight = '400';
        btn_showRW.style.borderRadius = '0.4rem';
        btn_showRW.style.fontSize = '0.3rem';
        btn_showRW.style.padding = '0.12rem 0.32rem';
        btn_showRW.style.color = '#999';

        p_show_RW.style.display = 'inline-block';
        p_show_RW.style.marginLeft = '1rem';
        p_show_RW.style.width = '2rem';
        p_show_RW.style.fontWeight = '400';
        p_show_RW.style.fontSize = '0.8rem';

        // btn_showRst attribute & 样式
        btn_showRst.innerHTML = '显示答案';
        btn_showRst.style.cursor = 'pointer';
        btn_showRst.style.fontWeight = '400';
        btn_showRst.style.borderRadius = '0.4rem';
        btn_showRst.style.fontSize = '0.3rem';
        btn_showRst.style.padding = '0.12rem 0.32rem';
        btn_showRst.style.color = '#999';
    }

    function trueAndFalseLog(temp) {
        switch (temp) {
            case true:
                console.log('you are right');
                p_show_RW.innerHTML = '√';
                p_show_RW.style.color = 'green';
                break;
            case false:
                console.log('you are wrong !');
                p_show_RW.innerHTML = '×';
                p_show_RW.style.color = 'red';
                break;
            case 'remove':
                ipt.remove();
                p_show_RW.remove();
                btn_showRW.remove();
                break;
            default:
                console.log(temp);
                p_show_RW.innerHTML = temp;
                break;
        }
    }

    // ipt attribute & 样式
    ipt.setAttribute('type', 'text');
    ipt.setAttribute('placeholder', '输入你认为的答案');
    ipt.setAttribute('class', 'Q_KVM_ipt');
    // ipt.setAttribute('maxlength', "12");

    if (li_contentList.getAttribute('type') == 'default') {
        btn_showRW.onclick = function () {
            if (btn_showRW.innerHTML == '显示对错') {
                let temp = false;
                if (typeof valueArr[1] == 'string') {
                    ipt.value == valueArr[1] && (function () {
                        temp = true;
                    })();
                } else if (typeof valueArr[1] == 'object') {
                    for (let ia = 0; ia < valueArr[1].length; ia++) {
                        if (ipt.value == valueArr[1][ia]) {
                            temp = true;
                        }
                    }
                }

                trueAndFalseLog(temp);
            } else {
                btn_showRW.innerHTML = '显示对错';
                trueAndFalseLog('');
            }
        }
    } else if (li_contentList.getAttribute('type') == 'CQ' || li_contentList.getAttribute('type') == 'MCQ' || li_contentList.getAttribute('type') == 'list') {
        // p_show_answer.innerHTML = ;
        trueAndFalseLog('remove');
    }

    btn_showRst.className += ' btn_showRst_' + document.querySelector('title').innerText;
    let btn_showRst_flag = 0;
    p_show_answer.className += ' answers_' + document.querySelector('title').innerText;
    btn_showRst.onclick = function () {
        switch (btn_showRst.innerHTML) {
            case '显示答案':
                btn_showRst.innerHTML = '隐藏答案';
                p_show_answer.style.display = 'inline-block';
                btn_showRst_flag = 1;
                break;
            case '隐藏答案':
                btn_showRst.innerHTML = '显示答案';
                p_show_answer.style.display = 'none';
                btn_showRst_flag = 0;
                break;
        }
    }

    // li attribute & 样式
    let li_contentList_name = 'Q_KVM_list_exe_' + Q_KVM_index + '_gLoop_' + Q_KVM_global_loop_index +
        '_lLoop_' + Q_KVM_Local_loop_index;
    li_contentList.setAttribute('id', li_contentList_name);
    li_contentList.setAttribute('gIndex', Q_KVM_global_loop_index);
    li_contentList.setAttribute('lIndex', Q_KVM_Local_loop_index);

    // li_contentList.style.listStyleType = 'decimal-leading-zero';
    setTimeout(function () {
        li_contentList.style.listStyleType = 'decimal-leading-zero';
    }, 100);
    // li_contentList.style.display = 'block';

    let aa = 0;
    let bb = 0;
    let cc = 0;

    function exist2EXE(elem, display) {
        elem && (function () {
            elem.style.display = display;
        })(display);
    }

    document.addEventListener('keyup', function (e) {
        if (document.activeElement.tagName == 'INPUT') {} else {
            if (e.keyCode == 83) {
                switch (aa % 6) {
                    case 2:
                        exist2EXE(div_core.querySelector('br'), 'none');
                        exist2EXE(div_core.querySelectorAll('br')[1], 'none');
                        ipt.style.display = 'none';
                        p_show_RW.style.display = 'none';
                        btn_showRW.style.display = 'none';
                        btn_showRst.style.display = 'none';
                        break;
                    case 5:
                        exist2EXE(div_core.querySelector('br'), 'block');
                        exist2EXE(div_core.querySelectorAll('br')[1], 'block');
                        ipt.style.display = 'block';
                        p_show_RW.style.display = 'block';
                        btn_showRW.style.display = 'block';
                        btn_showRst.style.display = 'inline-block';
                        aa++;
                        break;
                }
                aa > 6 ? aa = 1 : aa++;
            }
            if (e.keyCode == 82) {
                switch (bb % 6) {
                    case 2:
                        btn_showRst.innerHTML = '隐藏答案';
                        p_show_answer.style.display = 'inline-block';
                        break;
                    case 5:
                        btn_showRst.innerHTML = '显示答案';
                        p_show_answer.style.display = 'none';
                        bb++;
                        break;
                }
                bb > 6 ? bb = 1 : bb++;
            }
            if (e.keyCode == 76) {
                switch (cc % 6) {
                    case 2:
                        span_splitLine.style.display = 'none';
                        break;
                    case 5:
                        span_splitLine.style.display = 'block';
                        cc++;
                        break;
                }
                cc > 6 ? cc = 1 : cc++;
            }
        }
        // console.log(e.keyCode);
    });
}

function addList(elem, list, type) {
    let ul = document.createElement('ul');
    ul.style.color = '#666';
    elem.appendChild(ul);

    if (typeof list == 'string') {
        let li = document.createElement('li');
        let tNode = document.createElement('p');
        tNode.innerHTML = list;
        if (list == '') {
            li.style.display = 'none';
        }
        ul.appendChild(li);
        li.appendChild(tNode);
    } else {
        for (let iv = 0; iv < list.length; iv++) {
            let li = document.createElement('li');
            let tNode = document.createElement('p');
            li.style.listStyleType = 'upper-latin';
            setListStyle(li, ['#222', '400', '0.6rem']);
            li.innerHTML = list[iv];
            if (list[iv] == '') {
                li.style.position = 'absolute';
                li.style.overflow = 'hidden';
            }
            type == 'list' && (function () {
                li.className += ' questionAnswerAddByQ_KVM';
            }());
            ul.appendChild(li);
            li.appendChild(tNode);
        }
    }
}

function setListStyle(elem, arr) {
    elem.style.color = arr[0];
    elem.style.fontWeight = arr[1];
    elem.style.fontSize = arr[2];
}

let locked = true;
let lcs = 0;

function lock() {
    //阻止一切键盘事件
    console.log('locked');
    alert('lock 通过按下密码以解锁\n(成功才有提示)\n(在触发域中)禁止选中/右键/以及一切键盘事件\n这不是用localStorage写的，所以你刷新就可以回归初始了');
    window.onkeydown = window.onkeyup = window.onkeypress = function () {
        window.event.returnValue = false;
        return false;
    }
    // 禁止鼠标右键
    document.oncontextmenu = function () {
        return false;
    };
    // 禁止页面选择
    document.onselectstart = function () {
        return false;
    };
    locked = true;
}

let fPsd = false;
let sPsd = false;
let tPsd = false;

document.addEventListener('keydown', function (e) {
    lmt(e);
});
document.addEventListener('keyup', function (e) {
    if (document.activeElement.tagName == 'INPUT') {} else {
        ulk(e);
    }
});


function lmt(e) {
    if ((e.ctrlKey) && (e.keyCode == 70)) {
        if (locked) {
            alert('想找啥呢小老弟？');
            lock();
            e.keyCode = 0;
            e.returnValue = false;
        } else {
            lcs++;
        }
    } else if (e.keyCode == 70) {
        // lock();
    }
}

function ulk(e) {
    // console.log(e.keyCode);
    // 83 87 89
    if (e.keyCode == 83) {
        fPsd = true;
        let ft = setTimeout(function () {
            fPsd = false
        }, 2400);
    } else if (e.keyCode == 87) {
        sPsd = true;
        let st = setTimeout(function () {
            sPsd = false
        }, 1600);
        if (!fPsd) {
            tPsd = false;
            sPsd = false;
            clearTimeout(st);
        }
    } else if (e.keyCode == 89) {
        tPsd = true;
        let tt = setTimeout(function () {
            tPsd = false
        }, 720);
        if (!tPsd && !sPsd) {
            fPsd = false;
            sPsd = false;
            tPsd = false;
            clearTimeout(tt);
        }

        if (fPsd && sPsd && tPsd) {
            console.log('unlock');
            alert('unlock');
            window.onkeydown = window.onkeyup = window.onkeypress = function () {
                window.event.returnValue = true;
                return true;
            };
            window.onkeydown = function (e) {
                if ((e.ctrlKey) && (e.keyCode == 70)) {
                    return true;
                }
            };
            // 禁止鼠标右键
            document.oncontextmenu = function () {
                return true;
            };
            // 禁止页面选择
            document.onselectstart = function () {
                return true;
            };
            locked = false;
        }
    }
}
document.ondragstart = function () {
    return false;
};
let styleNode_selection = document.createElement('style');
styleNode_selection.innerText += ' br { -moz-user-select: none; -webkit-user-select: none; user-select: none; }';
document.querySelectorAll('head')[0].appendChild(s);