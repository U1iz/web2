let fileDate = '22-03-31';
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
    // 共流量 字体 图/视频 JS H5C3 字体
    logInfo(['12MB', '104.0K', '9.0M + 2.57M', '177.5K', '3.56K', '杨任东竹石体-Regular(可商用)\n\t站酷快乐体(可商用)\n\t爱心流星体\n\t迷你简丫丫\n\t新蒂小丸子高级版'])
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

    topic('Vector3 & Mathf', '#24272e');
    // 项目总览
    LM('项目总览', 'rgba(217, 84, 32, 0.904)', 'transparent');
    lst('案例01 对象girl 面向并移向 对象dog', 111, '#222', '#000', 'transparent');
    SM('Unity 界面', '#4c4c4c');
    img('/U0005Stp/u0005_0000.png', '64%');
    SM('code', '#4c4c4c');
    img('/U0005Stp/u0005_0001.png', '64%');
    SM('最终效果', 'rgba(32, 217, 202, 0.904)');
    img('/U0005Stp/u0005_0002.gif', '72%');

    lst('案例02 对象girl 垂直立于 对象斜坡cube上', 111, '#222', '#000', 'transparent');
    SM('Unity 界面', '#4c4c4c');
    img('/U0005Stp/u0005_0003.png', '64%');
    SM('code', '#4c4c4c');
    img('/U0005Stp/u0005_0004.png', '64%');
    SM('最终效果', 'rgba(32, 217, 202, 0.904)');
    img('/U0005Stp/u0005_0005.gif', '72%');

    lst('任务03 基本Mathf类', 111, '#222', '#000', 'transparent');
    SM('关于 基本的Mathf类 就不一一列举了，需要的时候(非考试)再查看足矣');
    link('官方关于搜索 Mathf 相关的API', 'https://docs.unity3d.com/cn/2021.1/ScriptReference/30_search.html?q=Mathf');

    lst('案例04 设置限制边界(空气墙)，及线性插值函数相关运用', 111, '#222', '#000', 'transparent');
    SM('详细过程就不列举了');
    SM('Unity 界面', '#4c4c4c');
    img('/U0005Stp/u0005_0006.png', '64%');
    SM('code', '#4c4c4c');
    img('/U0005Stp/u0005_0007.png', '64%');
    SM('最终效果', 'rgba(32, 217, 202, 0.904)');
    video('u0005_m0000.mp4', '72%');

    SL('4rem', '6rem');
    IH('../codeEditor/vsCode.htm', '723.49px');
    // #region 
    LM('相关文件 (度盘提取码默认: 2233)');

    link('通用引入场景', 'https://pan.baidu.com/s/194_iQUTV4vDavo6nyvPQSg?pwd=2233', '2.4rem');
    link('Vector3 代码图片', 'rsc/Vector3.png');
    link('Mathf 代码图片', 'rsc/Mathf.png');
    link('小女孩四点移动 代码图片', 'rsc/小女孩四点移动.png');

    SL('4rem', '6rem');
    // #endregion
    //#region 
    LM('暂无添加索引功能');
    SL('4rem', '6rem');
    //#endregion
    //#region 
    //#region 

    LM('xMind 笔记 (暂无)');
    SL();

    //#region 
    tip('通过选中 “Main Camera” 对象后 按下 Shift + Alt + F 可使摄像机与当前活动视口同步');
    img('/U0005Stp/u0005_g00-1.gif', '46%', 1);

    tip('仅在脚本中 public/private 声明的对象需要在属性面板中设置对应的元素');
    img('/U0005Stp/u0005_g0001.gif', '46%', 1);
    tip('(目前我知) 也可使用 GameObject/Transform 声明并 Find');

    SM('GameObject 版');
    code("GameObject girl;", 111, 0.32, 1, 'ch');
    code("GameObject dog;", 0, 0.32, 1);

    code("void Start()", 111, 0.32, 1, 'ch');
    code("{", 0, 0.32, 1);
    code('girl = GameObject.Find("Girl");', 0, 0.32, 2);
    code('dog = GameObject.Find("Dog");', 0, 0.32, 2);
    code("print(Vector3.Distance(girl.transform.position, dog.transform.position));", 0, 0.32, 2);
    code("}", 0, 0.32, 1);

    SM('Transform 版');
    code("Transform girl;", 111, 0.32, 1, 'ch');
    code("Transform dog;", 0, 0.32, 1);

    code("void Start()", 111, 0.32, 1, 'ch');
    code("{", 0, 0.32, 1);
    code('girl = GameObject.Find("Girl").transform;', 0, 0.32, 2);
    code('dog = GameObject.Find("Dog").transform;', 0, 0.32, 2);
    code("print(Vector3.Distance(girl.position, dog.position));", 0, 0.32, 2);
    code("}", 0, 0.32, 1);
    SM('区别: (------挖坑~-----)');

    SM('折叠非 同一/整个 函数区间内代码');
    code("// 入点", 111, 0.32, 1);
    code("#region ", 0, 0.32, 1);
    code("// 结点", 111, 0.32, 1);
    code("#endregion", 0, 0.32, 1);

    code("// JS写法", 111, 0.32, 1, 'ch');

    code("/* 需写在注释内 且不能是块级注释 */", 0, 0.32, 1);
    code("// #region ", 0, 0.32, 1);
    code("// #endregion", 0, 0.32, 1);

    img('/U0005Stp/u0005_g0002.gif', '46%', 1);
    //#endregion
    SL();

    LM('相关 API');

    code("// 用于表示三维向量", 111, 0.32, 1, 'ch');
    code("new Vector3(X, Y, Z)", 0, 0.32, 1);

    code("// 获取对象间的距离", 111, 0.32, 1, 'ch');
    code("Vector3.Distance(obj.transform.position, obj.transform.position);", 0, 0.32, 1);

    SM('Vector：三维向量的表示方法');

    code("void Start()", 111, 0.32, 1, 'ch');
    code("{", 0, 0.32, 1);
    code("print(Vector3.one);", 0, 0.32, 2);
    code("print(new Vector3(1, 1, 2));", 0, 0.32, 2);
    code("", 0, 0.32, 2);
    code("print(Vector3.zero);", 0, 0.32, 2);
    code("", 0, 0.32, 2);
    code("// Vector3.zero == new Vector3(0, 0, 0)", 0, 0.32, 2);
    code("// Vector3.one == new Vector3(1, 1, 1)", 0, 0.32, 2);
    code("// 一般使用 new Vector3(x, y, z)", 0, 0.32, 2);
    code("}", 0, 0.32, 1);
    img('/U0005Stp/u0005_c0000.png', '46%', 1);
    img('/U0005Stp/u0005_c0001.png', '46%', 1);

    SM('normalized 归一化');
    link('Unity 把向量归一化的normalized和Normalized的联系和区别【权威】', 'https://blog.csdn.net/leoysq/article/details/106035011', ud, 0);
    link('游戏开发unity杂项知识系列：把向量归一化的normalized和Normalized的联系和区别', 'https://blog.csdn.net/qq1090504117/article/details/120403797', ud, 0);
    link('Vector3.normalized 归一化', 'https://www.wenjiangs.com/doc/unity5-vector3-normalized', ud, 0);

    tip('扩展↗');
    link('【转载&字幕】我们为什么需要进行向量的标准化Normalized？', 'https://www.bilibili.com/video/BV1U7411Z7Qg');
    link('数据归一化（标准化）的两种方法简介', 'https://www.bilibili.com/video/BV1zT4y1d7Up');


    code('public Transform girl;', 111, 0.32, 1, 'ch');
    code('public Transform dog;', 0, 0.32, 1);
    code('Vector3 dir;', 0, 0.32, 1);

    code('void Start()', 111, 0.32, 1, 'ch');
    code('{', 0, 0.32, 1);
    code('dir = (dog.position - girl.position).normalized;', 0, 0.32, 2);
    code('Debug.Log(dir);', 0, 0.32, 2);
    code('}', 0, 0.32, 1);
    img('/U0005Stp/u0005_c0006.png', '46%', 1);
    img('/U0005Stp/u0005_c0007.png', '46%', 1);

    code('void Start()', 111, 0.32, 1, 'ch');
    code('{', 0, 0.32, 1);
    code('dir = dog.position - girl.position;', 0, 0.32, 2);
    code('Debug.Log(dir);', 0, 0.32, 2);
    code('}', 0, 0.32, 1);
    img('/U0005Stp/u0005_c0004.png', '46%', 1);
    img('/U0005Stp/u0005_c0005.png', '46%', 1);

    SM('MoveTowards 使 对象向目标点 移动');

    code('//  Vector3.MoveTowards(Vector3 current, Vector3 target, float maxDistanceDelta);', 111, 0.32, 1);
    code('// 当前对象 目标对象 最大距离增量(distance: 距离；delta：Δ 用来表示增量符号)', 0, 0.32, 1);

    SM('Lerp 使 对象向目标点 移动');

    code('// Vector3.Lerp(current , target, distance)', 0, 0.32, 1);
    code('// current + target - current *  distance', 0, 0.32, 1);
    code('// distance需取值在 [0, 1] 之间，否则将变得无意义', 0, 0.32, 1);

    link('Lerp 函数本质理解', 'https://blog.csdn.net/weixin_37608784/article/details/84861336');
    link('游戏开发技术杂谈2：理解插值函数lerp', 'https://zhuanlan.zhihu.com/p/114898567');

    SM('Time.deltaTime 增量时间');

    link('Unity增量时间Time.deltaTime详解', 'https://blog.csdn.net/ChinarCSDN/article/details/82914420');

    SM('Cross 叉乘');

    code('// Vector3.Cross (a, b)', 111, 0.32, 1);
    code('// 直接说结论 通过 Cross(a, b) 后返回的向量 是⊥垂直于 向量a与向量b 所在平面的', 0, 0.32, 1);

    link('官方文档', 'https://docs.unity3d.com/ScriptReference/Vector3.Cross.html');
    link('Unity3D之Vector3.Dot和Vector3.Cross的使用', 'https://www.cnblogs.com/jzdwajue/p/6747120.html');
    link('Unity 点乘（Dot）、叉乘（Cross）判断移动方向、朝向等向量问题', 'https://blog.csdn.net/yuliying/article/details/52319599');

    tip('技多不压身 高数↗');
    link('【鲲哥】《基础两千题》 11.16节 法向量的叉乘求法', 'https://www.bilibili.com/video/BV1pW411D7UU');
    link('矢量叉乘——高效代替左右手定则的繁琐', 'https://www.bilibili.com/video/BV1g7411h7kG');
    link('怎么理解叉乘和点乘', 'https://www.bilibili.com/video/BV1p5411J7w1');

    SM('Mathf.Clamp 值边界限制');

    code('// Mathf.Clamp(value, minValue, maxValue)', 111, 0.32, 1);
    link('官方文档', 'https://docs.unity3d.com/cn/2017.1/ScriptReference/Mathf.Clamp.html');

    SM('Mathf.Lerp 插值');

    code('// Mathf.Lerp(a, b, t);', 111, 0.32, 1);
    code('// a+(b-a)*t', 111, 0.32, 1);

    link('unity中mathf.Lerp的运用', 'https://blog.csdn.net/Fenglele_Fans/article/details/78130636');
    link('Mathf.Lerp详解(下边代码可借鉴)', 'https://www.bianchengquan.com/article/376270.html');
    link('Mathf.Lerp 插值', 'https://www.wenjiangs.com/doc/unity5-mathf-lerp');
    link('Unity中Mathf.Lerp的用法 - 百度文库', 'https://wenku.baidu.com/view/26e43ca380d049649b6648d7c1c708a1294a0a4d.html');

    SL('4rem', '6rem');

    LM('详细步骤(按照授课时间线)');
    SM('01.摆放场景');
    img('/U0005Stp/u0005_g0000.gif', '46%');

    SM('02.获取对象 “Girl” 和 “Dog” 间的距离');

    link('Unity3D_向量（Vector3）数学基础', 'https://blog.csdn.net/bobo553443/article/details/79481881');

    code("public Transform girl;", 111, 0.32, 1);
    code("public Transform dog;", 0, 0.32, 1);

    code("void Start()", 111, 0.32, 1);
    code("{", 0, 0.32, 1);

    code("// 获取两点间距离", 0, 0.32, 2);
    code("print(Vector3.Distance(girl.position, dog.position));", 0, 0.32, 2);
    code("}", 0, 0.32, 1);
    img('/U0005Stp/u0005_c0002.png', '46%', 1);
    img('/U0005Stp/u0005_c0003.png', '46%');
    SM('03. 获取两对象间夹角');

    link('Vector3函数理解-计算两向量之间的角度', 'https://www.cnblogs.com/yuji/archive/2012/09/03/2669260.htmls');

    code("public Transform girl;", 111, 0.32, 1);
    code("public Transform dog;", 0, 0.32, 1);

    code("void Start()", 111, 0.32, 1);
    code("{", 0, 0.32, 1);

    code("// 获取两对象间夹角", 0, 0.32, 2);
    code("dir = (dog.position - girl.position).normalized;", 0, 0.32, 2);
    code("float angle = Vector3.Angle(girl.transform.forward, dir);", 0, 0.32, 2);
    code("print(angle);", 0, 0.32, 2);
    code("}", 0, 0.32, 1);
    img('/U0005Stp/u0005_c0008.png', '46%', 1);
    img('/U0005Stp/u0005_c0009.png', '46%');

    SM('04. 使对象面向另一对象移动');

    link('[Unity3D] MoveTowards、Lerp、Slerp', 'https://blog.csdn.net/andyhebear/article/details/51818534');

    code("public Transform girl;", 111, 0.32, 1);
    code("public Transform dog;", 0, 0.32, 1);

    code("void Update()", 111, 0.32, 1);
    code("{", 0, 0.32, 1);

    code("// 使 对象girl 面向 对象dog", 0, 0.32, 2);
    code("girl.transform.LookAt(dog);", 0, 0.32, 2);
    code('// 使 对象girl 移向 对象dog 每次移动0.01f  其中 0.01f 可以为负值, 即反向移动', 0, 0.32, 2);
    code('girl.transform.position = Vector3.MoveTowards(', 0, 0.32, 2);
    code('girl.transform.position,', 0, 0.32, 3);
    code('dog.transform.position,', 0, 0.32, 3);
    code('0.01f', 0, 0.32, 3);
    code(');', 0, 0.32, 2);
    code('// 或 带有缓入效果', 0, 0.32, 2);
    code('girl.transform.position = Vector3.Lerp(girl.transform.position, dog.transform.position, Time.deltaTime);', 0, 0.32, 2);
    code("}", 0, 0.32, 1);
    img('/U0005Stp/u0005_c0010.png', '46%', 1);
    img('/U0005Stp/u0005_g0003.gif', '46%', 1);

    code("public Transform girl;", 111, 0.32, 1);
    code("public Transform dog;", 0, 0.32, 1);

    SM('05. 使 对象girl 垂直立于对象 cube');
    lst('场景构建', 111, '#222', 'rgba(92, 45, 223, 0.712)', 'transparent');
    img('/U0005Stp/u0005_g0004.gif', '46%');
    lst('代码部分', 111, '#222', 'rgba(92, 45, 223, 0.712)', 'transparent');

    code("void Update()", 111, 0.32, 1);
    code("{", 0, 0.32, 1);
    code("// Vector3.Cross(a, b); 详见 “相关API”", 0, 0.32, 2);
    code("Vector3 v3 = Vector3.Cross(hill.transform.up, hill.transform.right);", 0, 0.32, 2);
    code("girl.transform.up = -v3;", 0, 0.32, 2);
    code("// 或", 0, 0.32, 2);
    code("// 使用句代码 需要注意 hill对象在local模式中 Y轴 的朝向", 0, 0.32, 2);
    code("girl.transform.up = hill.transform.forward;", 0, 0.32, 2);
    code("}", 0, 0.32, 1);

    img('/U0005Stp/u0005_c0011.png', '46%', 1);
    img('/U0005Stp/u0005_g0003.gif', '46%');


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