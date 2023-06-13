let Q_KVM_index = 0;
let Q_KVM_global_loop_index = 0;
let Q_KVM_Local_loop_index = 0;

function Q_KV_module(arr) {
    Q_KV_module_par(arr);
}

function Q_KV_module_par(arr) {
    // 模块父级
    let div_modulePar = document.createElement("div");
    // 模块列表父级
    let ul_contentListPar = document.createElement("ul");
    // 用于 显示&隐藏 所以答案
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
    div_modulePar.setAttribute("id", 'Q_KVM_wrap_' + Q_KVM_index)
    // div_modulePar.style.zIndex

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
    span_splitLine.style.height = '0.12rem';
    span_splitLine.style.backgroundColor = '#ccc';
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

    // 

    par.appendChild(li_contentList);
    li_contentList.appendChild(div_questionWrap);
    div_questionWrap.appendChild(p_question);
    li_contentList.appendChild(div_core)
    div_core.appendChild(ipt);
    div_core.appendChild(btn_showRW);
    div_core.appendChild(p_show_RW);
    div_core.appendChild(btn_showRst);
    div_core.appendChild(p_show_answer);


    li_contentList.appendChild(span_splitLine);

    // p_show_answer attribute & 样式
    p_show_answer.innerHTML = valueArr[1];
    if (typeof valueArr[1] == 'object') {
        for (let ib = 0; ib < valueArr[1].length; ib++) {
            p_show_answer.innerHTML = valueArr[1].toString().replace(/,/g, ' \u6216 ');
        }
    }
    p_show_answer.style.fontWeight = '400';
    p_show_answer.style.fontSize = '0.8rem';
    p_show_answer.style.color = '#223323';
    p_show_answer.style.marginLeft = '2.4rem';
    p_show_answer.style.display = 'none';

    // ipt attribute & 样式
    ipt.setAttribute('type', 'text');
    ipt.setAttribute('placeholder', '输入你认为的答案');
    ipt.setAttribute('class', 'Q_KVM_ipt');
    ipt.setAttribute('maxlength', "12");
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
        }
    }
    btn_showRW.onclick = function () {
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
    }

    // btn_showRst attribute & 样式
    btn_showRst.innerHTML = '显示答案';
    btn_showRst.style.cursor = 'pointer';
    btn_showRst.style.fontWeight = '400';
    btn_showRst.style.borderRadius = '0.4rem';
    btn_showRst.style.fontSize = '0.3rem';
    btn_showRst.style.padding = '0.12rem 0.32rem';
    btn_showRst.style.color = '#999';
    btn_showRst.className = 'btn_showRst_' + document.querySelector('title').innerText;

    let btn_showRst_flag = 0;
    p_show_answer.className = 'answers_' + document.querySelector('title').innerText;
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


    // 写入 题目value  p_question attribute & 样式
    p_question.className = 'questions_' + document.querySelector('title').innerText;
    p_question.innerHTML = valueArr[0];
    p_question.style.fontSize = '1rem';
    switch (valueArr[2]) {
        case 1:
            p_question.style.fontWeight = 100;
            p_question.style.color = '#666';
            break;
        case 2:
            p_question.style.fontWeight = 400;
            p_question.style.color = 'rgb(37, 38, 82)';
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
}