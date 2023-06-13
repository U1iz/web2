var ud = undefined;
// marginLeft

// sessionStorage

(function () {
    let fileDate = '2022-03-14';
    if (sessionStorage.getItem('execute_all') === 'true') {
        if (sessionStorage.getItem('fileDate' + fileDate) == fileDate) {

        } else {
            call();
            sessionStorage.setItem('fileDate' + fileDate, fileDate);
            window.addEventListener('load', function () {
                sessionStorage.removeItem('execute_all');
                sessionStorage.removeItem('fileDate' + fileDate);
            });
        }
    } else {
        setDocTitle(fileDate);
        sessionStorage.setItem(fileDate + 'execute.js_hadRun', 'false');
        // main execute
        window.addEventListener('load', function () {
            switch (sessionStorage.getItem(fileDate + 'execute.js_hadRun')) {
                case 'false':
                    sessionStorage.setItem(fileDate + 'execute.js_hadRun', 'true');
                    call();
                    break;
            }
        })
    }
})();


function call() {
    tit('单选 * 50');
    add_normalNode(split_p('2022-03-14'), ['p', 'normal', '6% 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
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

    Q_KV_module([
        ['传输距离最长、可靠性最高的传输介质是( )。', '光纤', 1],
        ['LAN是( )的英文缩写。', '局域网', 2],
        ['以太网的核心技术是( )。', '随机争用型介质访问方法', 5],
        ['不属于计算机的输入设备是( )。', '只读光盘', 1],
        ['以下( )属于计算机的输出设备。', '刻录机', 1],
        ['以下( )不属于计算机的输入设备。', '打印机', 1],
        ['CD-RW属于( )。', '可擦写光盘', 3],
        ['网卡实现的主要功能是( )。', '物理层与数据链路层的功能', 4],
        ['不属于计算机外围设备的是( )。', '主存储器', 5],
        ['音频卡是按( )分类的。', '采样量化位数', 5],
        ['声音是连续的模拟信号，要在计算机中处理就必须将它转变成为数字的形式。声卡上的( )实现声音的数字化。', '模／数转换器', 3],
        ['下列哪项不是常用的多媒体素材采集设备？( )', '显示器', 5],
        ['下面哪一个软件不属于多媒体课件制作工具软件？( )', 'Photoshop', 2],
        ['下列( )是web页格式。', ['HTM', 'HTML', 'htm', 'html'], 1],
        ['TCP/IP是Internet网络的( )。', '通信协议', 2],
        ['以下( )是国外知名的搜索引擎。', ['http://www.google.com', 'Google', 'google', '谷歌'], 1],
        ['在计算机网络术语中，ISDN的中文含义是( )。', '综合业务数字网', 5],
        ['微软公司的IE (Internet Explorer) 是一种( )软件。', '浏览器', 1],
        ['WWW浏览器是( )。', '浏览WWW的客户端软件', 3],
        ['目前网上最为流行的音频文件格式是( )。', ['MP3', 'mp3', '除非作为选择题，否则实有些主观'], 1],
        ['Internet、Intranet和Extranet三种网络，其中( )范围最大。', 'Internet', 2],
        ['( )协议是当今计算机网络中最成熟、应用最为广泛的一种网络协议标准。', 'TCP/IP', 5],
        ['以下哪项不属于移动终端的是( )。', 'PC', 1],
        ['市场常见台式机硬盘上的转速().', [7200, '现在主流的是理应是7200转，但！本来的7200转成了叠瓦5400转，而买的起的垂直只有 5400/5900 转的监控盘,只有企业盘或是西数黑盘系列才有 7200转'], 6],
        ['IEEE1394设备间采用()结构.', '菊花链', 5],
        ['组装维修计算机的时关于电需要注意哪些问题？( )', '禁止带电拔插', 1],
        ['组装维修计算机的拿内存等板卡时需要注意哪些问题？( )', '轻拿轻放，尽量拿板卡边缘，不要用手触摸金手指和芯片', 2],
        ['组装维修计算机的时工程师会带个手环作用是( )？', ['防静电', '不应该是手套吗；静电确实可怕'], 3],
        ['某计算机加电后机内电源部分工作正常,风扇转动,但机器无声响无显示,系统死锁。可能的原因是( )。', 'CPU故障', 2],
        ['文件被感染病毒之后，其基本特征是( )。', '文件长度加长', 4],
        ['如网卡的指示灯不正常，则说明网卡有故障。在正常情况下不传送数据和传送数据时，网卡的指示灯状态分别是( )。', '闪烁较慢和闪烁较快', 2],
        ['主板中的北桥芯片主要负责管理CPU、内存、( )这些高速的部分。', 'AGP', 5],
        ['关于BIOS及CMOS存储器，下列说法中错误的是( )。', 'CMOS存储器是易失性存储器', 5],
        ['关于计算机主板上的BIOS芯片，下面说法正确的是( )。', '它是只读存储器', 4],
        ['无线键盘是一种常见键盘，它使用方便，下列关于无线键盘的描述中错误的是( )。', '输入信息不经过I/O接口直接输入计算机，因而其速度较快', 1],
        ['计算机出现黑屏的原因( )。', ['上述三种原因都有可能', '???', '***'], 1],
        ['如果系统启动后，在任务栏的右边没有喇叭图标，或者有喇叭图标但喇叭不发声，说明( )。', ['声卡驱动程序安装不正确', '也可能是硬件损坏'], 2],
        ['根据机器所安排的逻辑关系，从逻辑上分析各点应有的特征，进而找出故障原因，这种方法称( )分析法。', '原理', 4],
        ['用备份的好插件板、好器件替换有故障疑点的插件板或器件，或者把相同的插件或器件互相交换，观察故障变化的情况，称为( )。依此来帮助用户判断寻找故障原因的一种方法。', '交换法', 4],
        ['计算机开机系统启动后显示器显示蓝色屏幕处理方法为( )。', ['更换显示器', '得看具体情况'], 2],
        ['计算机主机或显示器无电源指示灯不亮的原因可能是( )。', '电源线两端插头接触不良', 2],
        ['计算机常见故障可分为( )两大类。', '硬件和软件', 1],
        ['对于绝大多数计算机病毒来讲，利用( )的特征，计算机病毒通过自身复制来感染正常文件，达到传播计算机病毒的目的。', '传染性', 4],
        ['现计算机染有病毒后，较为彻底的清除方法是( )。', '备份数据后干净的系统启动后格式化磁盘', 1],
        ['计算机单机使用时，传染计算机病毒的主要渠道是通过( )。', ['U盘', '外接可读设备'], 3],
        ['下面列出的四项中，不属于计算机病毒特征的是( )。', '免疫性', 4],
        ['计算机病毒按传染程序的特点分类，可以分为( )。', '操作系统型病毒和文件型病毒', 5],
        ['学校组建校园网，校园内宿舍楼之间距离较远，此时应在宿舍楼之间采取何种相对最可行连接方式( )。', '光缆', 3],
        ['无线接入点(Wireless Acess Point )简称( )。', 'AP', 3],
        ['无线上网需要具备的最基本的设备是( )。', '无线网卡', 2]
    ])
    add_normalNode(['pdf文档 rsc: 22-03-14.pdf'], ['a', 'normal', '0.6rem 5% 3.2rem 5%', ud, ud, 'paragraph-2em'], [
        ['textDecoration', 'none'],
        ['width', '90%'],
        ['height', '100%'],
        ['cursor', 'pointer'],
        ['color', '#999'],
        ['fontSize', '0.4rem'],
        ['element-attribute', 'href', '../../DOC/22-03-14.pdf'],
        ['elemAtt', 'target', '_blank'],
        ['js-style', 'fontPosition', 'center-middle']
    ], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 2.4rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.2rem rgba(54, 54, 54,0.42)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.1rem transparent']
    ]);
}