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
    setDocTitle('2022-03-25');
    sessionStorage.setItem(document.querySelector('title').innerText + 'execute.js_hadRun', 'false');
});

function call() {
    logInfo(['15.7M','64.5K','15.6M','163K','3.2K','杨任东竹石体-Regular(可商用)\n\t站酷快乐体(可商用)\n\t爱心流星体\n\t迷你简丫丫\n\t新蒂小丸子小学版'])
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

    topic('Unity 自转钟表', '#24272e');
    // 项目总览

    // scrollToTarget(document.body, fgi(2));
    LM('项目总览', 'rgba(217, 84, 32, 0.904)', 'transparent');
    /* code(["texNode.getAttribute('index') == 0 && (function () {"], 111, 0.32, 1);
    code(["styleArr[7] != undefined && (function () {"], 0, 0.32, 2);
    code(["styleArr[7].indexOf('-') != -1 && (function () {"], 0, 0.32, 3);
    code(["let temp = styleArr[7].split('-');"], 0, 0.32, 4);
    code(["temp[0] == 'paragraph' && (function () {"], 0, 0.32, 4);
    code(["texNode.style.textIndent = temp[1];"], 0, 0.32, 5);
    code(["})();"], 0, 0.32, 4);
    code(["})();"], 0, 0.32, 3);
    code(["})();"], 0, 0.32, 2);
    code(["})();"], 0, 0.32, 1); */
    SM('Code', '#715ad9');
    code(['using System.Collections; using System.Collections.Generic; using UnityEngine; using System; public class Clock_run_test : MonoBehaviour { Transform obj_hour; Transform obj_minute; Transform obj_second; float timer; AudioSource audio; void Start() { DateTime t = DateTime.Now; float second = t.Second; float minute = t.Minute + second / 60.0f; float hour = t.Hour % 12 + minute / 60.0f; obj_hour = GameObject.Find("hour").transform; obj_minute = GameObject.Find("minute").transform; obj_second = GameObject.Find("second").transform; obj_second.transform.eulerAngles = new Vector3(0, 0, -second * 6); obj_minute.transform.eulerAngles = new Vector3(0, 0, -minute * 6); obj_hour.transform.eulerAngles = new Vector3(0, 0, -hour * 30); timer = Time.time; audio = GameObject.Find("Clock_AudioSource").GetComponent<AudioSource>(); } void Update() { if (Time.time >= timer) { audio.Play(); obj_second.transform.Rotate(Vector3.back, 6.0f); obj_minute.transform.Rotate(Vector3.back, 6 / 60.0f); obj_hour.transform.Rotate(Vector3.back, 6 / (12 * 60.0f)); timer = Time.time + 1; } } }'], 111, 0.32, 1, 1);
    code(["TEST"], 111, 0.32, 1, 1);
    code(["TEStTEST"], 111, 0.32, 1, 1);
    code(["TESTtEST"], 111, 0.32, 1, 1);
    code(["using System.Collections;"], 111, 0.32, 1);
    code(["using System.Collections.Generic;"], 0, 0.32, 1);
    code(["using UnityEngine;"], 0, 0.32, 1);
    code(["// 引用命名空间"], 0, 0.32, 1);
    code(["using System;"], 0, 0.32, 1);
    code([""], 0, 0.32, 1);

    code(["public class Clock_run_test: MonoBehaviour {"], 0, 0.32, 1);

    code(["// 声明对象 时分秒"], 0, 0.32, 2);
    code(["Transform obj_hour;"], 0, 0.32, 2);
    code(["Transform obj_minute;"], 0, 0.32, 2);
    code(["Transform obj_second;"], 0, 0.32, 2);
    code([""], 0, 0.32, 1);

    code(["float timer;"], 0, 0.32, 2);
    code([""], 0, 0.32, 1);

    code(["AudioSource audio;"], 0, 0.32, 2);
    code(["void Start() {"], 0, 0.32, 2);

    code(["// 2. 获取当前的系统时间"], 0, 0.32, 3);
    code(["// System.DateTime t = System.DateTime.Now;"], 0, 0.32, 3);
    code(["DateTime t = DateTime.Now;"], 0, 0.32, 3);
    code([""], 0, 0.32, 1);

    code(["// 4. 秒数 分钟 时刻"], 0, 0.32, 3);
    code(["float second = t.Second;"], 0, 0.32, 3);
    code(["float minute = t.Minute + second / 60.0f;"], 0, 0.32, 3);
    code(["float hour = t.Hour % 12 + minute / 60.0f;"], 0, 0.32, 3);
    code([""], 0, 0.32, 1);

    code(["// 5. 获取三时刻对象的 transform 组件，以便后续更改"], 0, 0.32, 3);
    code(['obj_hour = GameObject.Find("hour").transform;'], 0, 0.32, 3);
    code(['obj_minute = GameObject.Find("minute").transform;'], 0, 0.32, 3);
    code(['obj_second = GameObject.Find("second").transform;'], 0, 0.32, 3);
    code([""], 0, 0.32, 1);

    code(['// 6.设定 "三针" 的初始角度'], 0, 0.32, 3);
    code(["// 顺时针和逆时针角度的赋值"], 0, 0.32, 3);
    code(["obj_second.transform.eulerAngles = new Vector3(0, 0, -second * 6);"], 0, 0.32, 3);
    code(["obj_minute.transform.eulerAngles = new Vector3(0, 0, -minute * 6);"], 0, 0.32, 3);
    code(["obj_hour.transform.eulerAngles = new Vector3(0, 0, -hour * 30);"], 0, 0.32, 3);
    code([""], 0, 0.32, 1);

    code(['// 初始化赋值'], 0, 0.32, 3);
    code(["timer = Time.time;"], 0, 0.32, 3);

    code(["// 8. 初始化赋值"], 0, 0.32, 3);
    code(["// 通过获取组件，获取音频对象"], 0, 0.32, 3);
    code(['audio = GameObject.Find("Clock_AudioSource").GetComponent < AudioSource > ();'], 0, 0.32, 3);
    code(["}"], 0, 0.32, 2);
    code([""], 0, 0.32, 1);

    code(["void Update() {"], 0, 0.32, 2);
    code(["if (Time.time >= timer) {"], 0, 0.32, 3);

    code(["audio.Play();"], 0, 0.32, 4);
    code(["// 11. 设定 “三针” 每次被调用时顺时针转动角度"], 0, 0.32, 4);
    code(["obj_second.transform.Rotate(Vector3.back, 6.0f);"], 0, 0.32, 4);
    // code(["// 分针相对于秒针的关系"], 0, 0.32, 4);
    code(["obj_minute.transform.Rotate(Vector3.back, 6 / 60.0f);"], 0, 0.32, 4);
    // code(["// 时针相对于分针的关系"], 0, 0.32, 4);
    code(["obj_hour.transform.Rotate(Vector3.back, 6 / (12 * 60.0f));"], 0, 0.32, 4);
    code([""], 0, 0.32, 1);

    code(["// 10. 暂时使 timer 大于 计时器的数值 当计时器数值大于此时的 timer 上方的if便会执行"], 0, 0.32, 4);
    code(["timer = Time.time + 1;"], 0, 0.32, 4);
    code(["}"], 0, 0.32, 3);
    code(["}"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);

    SM('Unity 界面', '#4c4c4c');
    // lst('listlist', 111, '#190', '#f9f', '#fff');
    // tip('TIPS', ud, '#CCC', '#FFF');
    img('u0004_0000.png', '100%');
    SM('最终效果', 'rgba(32, 217, 202, 0.904)');
    video('u0004_m0000.mp4', '100%');

    SL('4rem', '6rem');

    LM('相关文件 (度盘提取码默认: 2233)');

    link('通用引入场景', 'https://pan.baidu.com/s/194_iQUTV4vDavo6nyvPQSg?pwd=2233', '2.4rem');
    link('所需图片', 'rsc/clock.gif');
    link('代码图片', 'rsc/钟表.png', '1rem');

    SL('4rem', '6rem');
    LM('无法添加索引功能');
    SL('4rem', '6rem');

    LM('详细步骤');
    SM('01.');
    img('/U0004Stp/u0004_g0000.gif', '100%');

    SM('02.');
    img('/U0004Stp/u0004_g0001.gif', '100%');

    SM('03.');
    img('/U0004Stp/u0004_g0002.gif', '100%');

    SM('04_1. 秒针');
    tip('注意左上的 Center/Pivot 旋转时一定要选择 Pivot', 2, '#666');
    tip('ctrl + D 复制粘贴选中元素', 2, '#666');
    img('/U0004Stp/u0004_g0003.gif', '100%');
    tip('对上一步的纠错,建立的空对象不在世界坐标原点上', 2, '#666');
    img('/U0004Stp/u0004_g0003e01.gif', '100%');

    SM('04_2. 分针');
    img('/U0004Stp/u0004_g0004.gif', '100%');

    SM('04_3. 时针');
    img('/U0004Stp/u0004_g0005.gif', '100%');
    LM('code 部分');
    IH('../codeEditor/vsCode.htm', '723.49px');

    img('/U0004Stp/u0004_g0006.gif', '100%');

    SM('01.');
    code(["using System.Collections;"], 111, 0.32, 1);
    code(["using System.Collections.Generic;"], 0, 0.32, 1);
    code(["using UnityEngine;"], 0, 0.32, 1);
    code([""], 0, 0.32, 0);
    code(["public class TestClock : MonoBehaviour"], 0, 0.32, 1);
    code(["{"], 0, 0.32, 1);
    code(["// 1. 定义时针、分针、秒针对象"], 0, 0.32, 2);
    code(["Transform s_obj;"], 0, 0.32, 2);
    code(["Transform m_obj;"], 0, 0.32, 2);
    code(["Transform h_obj;"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["void Start()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["}"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["void Update()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["}"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);
    img('/U0004Stp/u0004_c0000.png', '60%', 1);

    SM('2~3.');
    code(["using System.Collections;"], 111, 0.32, 1);
    code(["using System.Collections.Generic;"], 0, 0.32, 1);
    code(["using UnityEngine;"], 0, 0.32, 1);
    code(["// 3. 引用命名空间"], 0, 0.32, 1);
    code(["using System;"], 0, 0.32, 1);
    code([""], 0, 0.32, 0);
    code(["public class TestClock : MonoBehaviour"], 0, 0.32, 1);
    code(["{"], 0, 0.32, 1);
    code(["// 1. 定义时针、分针、秒针对象"], 0, 0.32, 2);
    code(["Transform s_obj;"], 0, 0.32, 2);
    code(["Transform m_obj;"], 0, 0.32, 2);
    code(["Transform h_obj;"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["void Start()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code(["// 2. 获取当前系统时间"], 0, 0.32, 3);
    code(["// System.DateTime t = System.DateTime.Now;"], 0, 0.32, 3);
    code(["DateTime t = DateTime.Now;"], 0, 0.32, 3);
    code(["}"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["void Update()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["}"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);

    code(["void Start()"], 111, 0.32, 1);
    code(["{"], 0, 0.32, 1);
    code(["// 未引用System命名空间时写法"], 0, 0.32, 2);
    code(["System.DateTime t = System.DateTime.Now;"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);

    code(["using System;"], 111, 0.32, 1);
    code(["void Start()"], 111, 0.32, 1);
    code(["{"], 0, 0.32, 1);
    code(["// 引用System命名空间后写法"], 0, 0.32, 2);
    code(["DateTime t = DateTime.Now;"], 0, 0.32, 2);
    code(["// 或"], 0, 0.32, 2);
    code(["System.DateTime t = System.DateTime.Now;"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);
    img('/U0004Stp/u0004_c0001.png', '60%', 1);

    SM('4~6.');
    code(["void Start()"], 111, 0.32, 1);
    code(["{"], 0, 0.32, 1);
    code(["// 4. 时分秒 对应乘数"], 0, 0.32, 2);
    code(["float second = t.Second;"], 0, 0.32, 2);
    code(["float minute = t.Minute + second / 60.0f;"], 0, 0.32, 2);
    code(["float hour = t.Hour % 12 + minute / 60.0f;"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["// 5. 获取场景内三针对象的 transform 属性"], 0, 0.32, 2);
    code(['s_obj = GameObject.Find("S").transform;'], 0, 0.32, 2);
    code(['m_obj = GameObject.Find("M").transform;'], 0, 0.32, 2);
    code(['h_obj = GameObject.Find("H").transform;'], 0, 0.32, 2);
    code([''], 0, 0.32, 0);
    code(['// 6. 钟表指针角度初始化'], 0, 0.32, 2);
    code(['// 赋值使 “三针” 初始角度都指向正确的系统时间 负值为顺时针'], 0, 0.32, 2);
    code(['// 秒针 当前时间 = 6deg * 当前秒数 每秒转动 6deg; 360/60 == 6'], 0, 0.32, 2);
    code(['s_obj.transform.eulerAngles = new Vector3(0, 0, -second * 6);'], 0, 0.32, 2);
    code(['// 分针 当前时间 = 6deg * (当前分数 + 当前秒数/60)'], 0, 0.32, 2);
    code(['m_obj.transform.eulerAngles = new Vector3(0, 0, -minute * 6);'], 0, 0.32, 2);
    code(['// 时针 当前时间 = 30deg * (当前时数 + 当前分数/60) 360/12 == 30'], 0, 0.32, 2);
    code(['h_obj.transform.eulerAngles = new Vector3(0, 0, -hour * 30);'], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);

    link('unity 五种旋转方式localEulerAngles、eulerAngles、rotation、localRotation和Rotate的区别', 'https://blog.csdn.net/zxy13826134783/article/details/79461816', ud, 'normal');
    img('/U0004Stp/u0004_c0002.png', '60%', 1);

    SM('7~11.');
    code(["// 7. 声明计时器"], 111, 0.32, 1);
    code(["float timer;"], 0, 0.32, 1);
    code([''], 0, 0.32, 0);
    code(["void Start()"], 0, 0.32, 1);
    code(["{"], 0, 0.32, 1);
    code(["// 8. 从零开始计时 精确到6位小数"], 0, 0.32, 2);
    code(["timer = Time.time;"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);
    code([""], 0, 0.32, 0);

    code(["void Update()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 1);
    code(["// 9."], 0, 0.32, 2);
    code(['if (Time.time >= timer)'], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code(['// 11. 设定 “三针” 每次被调用时顺时针转动角度'], 0, 0.32, 3);
    code(['s_obj.transform.Rotate(Vector3.back, 6.0f);'], 0, 0.32, 3);
    code(['m_obj.transform.Rotate(Vector3.back, 6 / 60.0f);'], 0, 0.32, 3);
    code(['h_obj.transform.Rotate(Vector3.back, 6 / (12 * 60.0f));'], 0, 0.32, 3);
    code([""], 0, 0.32, 0);

    code(['// 10.'], 0, 0.32, 3);
    code(['timer = Time.time + 1;'], 0, 0.32, 3);
    code(["}"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);

    code(["// float 有精度问题"], 111, 0.32, 1);
    code(["void Update()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 1);
    code(['if (Time.time >= timer)'], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code(["print(timer);"], 0, 0.32, 3);
    code(["}"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);
    img('/U0004Stp/u0004_c0004.png', '60%', 1);

    code(["// 解决方案(转为整形,Time.time向下取整)"], 111, 0.32, 1);
    code(["int timer;"], 0, 0.32, 1);
    code([''], 0, 0.32, 0);
    code(["void Start()"], 0, 0.32, 1);
    code(["{"], 0, 0.32, 1);
    code(["timer = (int)Time.time;"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);
    code([""], 0, 0.32, 0);

    code(["void Update()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 1);
    code(['if (Time.time >= timer)'], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code(['timer = (int)Time.time + 1;'], 0, 0.32, 3);
    code(['print(timer);'], 0, 0.32, 3);
    code(["}"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);
    img('/U0004Stp/u0004_c0005.png', '60%', 1);
    link('参考来源', 'https://www.cnblogs.com/OpenCoder/p/10464776.html');
    img('/U0004Stp/u0004_c0003.png', '60%', 1);


    SM('此时的效果');
    img('/U0004Stp/u0004_g0007.gif', '100%');
    SL('4rem', '6rem');

    LM('添加 Audio');
    SM('Unity 界面');
    img('/U0004Stp/u0004_g0008.gif', '100%');

    SM('Audio Code 部分');
    code(["public class TestClock : MonoBehaviour"], 111, 0.32, 1);
    code(["{"], 0, 0.32, 1);
    code(["// 声明音频"], 0, 0.32, 2);
    code(["AudioSource audio;"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["void Start()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code(["// 找到音频对象后获取其组件"], 0, 0.32, 3);
    code(['audio = GameObject.Find("Audio_src").GetComponent<AudioSource>();'], 0, 0.32, 3);
    code(["}"], 0, 0.32, 2);
    code([""], 0, 0.32, 0);
    code(["void Update()"], 0, 0.32, 2);
    code(["{"], 0, 0.32, 2);
    code(['if (Time.time >= timer)'], 0, 0.32, 3);
    code(['{'], 0, 0.32, 3);
    code(['// 音频播放'], 0, 0.32, 4);
    code(['audio.Play();'], 0, 0.32, 4);
    code(["}"], 0, 0.32, 3);
    code(["}"], 0, 0.32, 2);
    code(["}"], 0, 0.32, 1);
    img('/U0004Stp/u0004_c0006.png', '100%', 1);


    LM('项目完成');
    video('u0004_m0001.mp4', '70%');

    SL('4rem', '6rem');

    LM('额外~');
    SM('“官方”因为教学原因采用的做法思路是获取当前时间后每秒使“三针”按定好的角度顺时针旋转');
    SM('这样大概率会导致运行后转动的时间与系统时间有0~1秒的误差');
    SM('实际可以采用每次调用都直接赋值的方式使其转动时间与系统基本保持一致');
    SM('我经过调试最终给出的方案');
    code('using System.Collections;', 111, 0.32, 1);
    code('using System.Collections.Generic;', 0, 0.32, 1);
    code('using UnityEngine;', 0, 0.32, 1);
    code('using System;', 0, 0.32, 1);
    code('public class TestClock : MonoBehaviour', 0, 0.32, 1);
    code('{', 0, 0.32, 1);
    code('', 0, 0.32, 0);

    code('Transform s_obj;', 0, 0.32, 2);
    code('Transform m_obj;', 0, 0.32, 2);
    code('Transform h_obj;', 0, 0.32, 2);
    code('', 0, 0.32, 0);

    code('int timer;', 0, 0.32, 2);
    code('', 0, 0.32, 0);

    code('AudioSource audio;', 0, 0.32, 2);
    code('', 0, 0.32, 0);

    code('// 将主要代码封装成 无返回值函数', 0, 0.32, 2);
    code('void SetPointer_rot()', 0, 0.32, 2);
    code('{', 0, 0.32, 2);
    code('DateTime t = DateTime.Now;', 0, 0.32, 3);
    code('', 0, 0.32, 0);

    code('float second = t.Second;', 0, 0.32, 3);
    code('float minute = t.Minute + second / 60.0f;', 0, 0.32, 3);
    code('float hour = t.Hour % 12 + minute / 60.0f;', 0, 0.32, 3);
    code('', 0, 0.32, 0);

    code('s_obj.transform.eulerAngles = new Vector3(0, 0, -second * 6);', 0, 0.32, 3);
    code('m_obj.transform.eulerAngles = new Vector3(0, 0, -minute * 6);', 0, 0.32, 3);
    code('h_obj.transform.eulerAngles = new Vector3(0, 0, -hour * 30);', 0, 0.32, 3);
    code('}', 0, 0.32, 2);
    code('', 0, 0.32, 0);

    code('void Start()', 0, 0.32, 2);
    code('{', 0, 0.32, 2);
    code('// 将计时器定义为 当前秒数 以解决音画不同步的问题', 0, 0.32, 3);
    code('timer = (int)(DateTime.Now.Second);', 0, 0.32, 3);
    code('', 0, 0.32, 0);

    code('s_obj = GameObject.Find("S").transform;', 0, 0.32, 3);
    code('m_obj = GameObject.Find("M").transform;', 0, 0.32, 3);
    code('h_obj = GameObject.Find("H").transform;', 0, 0.32, 3);
    code('audio = GameObject.Find("Audio_src").GetComponent<AudioSource>();', 0, 0.32, 3);
    code('', 0, 0.32, 0);

    code('// 放在 Start()内 以初始化位置', 0, 0.32, 3);
    code('SetPointer_rot();', 0, 0.32, 3);
    code('}', 0, 0.32, 2);
    code('', 0, 0.32, 0);

    code('void Update()', 0, 0.32, 2);
    code('{', 0, 0.32, 2);
    code('// 放在 Update()内 每次调用时 时间发生变化便会转动', 0, 0.32, 3);
    code('SetPointer_rot();', 0, 0.32, 3);
    code('', 0, 0.32, 0);

    code('// 只要当前 秒数 加1 便会执行', 0, 0.32, 3);
    code('if ((int)(DateTime.Now.Second) >= timer)', 0, 0.32, 3);
    code('{', 0, 0.32, 3);
    code('audio.Play();', 0, 0.32, 4);
    code('// 由于此前只在 Start()内 赋值，因此这里需要自增', 0, 0.32, 4);
    code('timer++;', 0, 0.32, 4);
    code('}', 0, 0.32, 3);
    code('}', 0, 0.32, 2);
    code('}', 0, 0.32, 1);
    img('/U0004Stp/u0004_c0007.png', '60%', 1);
    video('u0004_m0002.mp4', '70%');



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