function execute() {
    let fileDate = '22-03-21';
    if (sessionStorage.getItem('execute_all') == 'true' || sessionStorage.getItem('execute_all') == 'direct') {
        loading(fileDate, call(fileDate));
    } else {
        if (location.search.length == 0) {
            loading(fileDate, call(fileDate));
        } else {
            console.log(location.search);
        }
    }
}

if (sessionStorage.getItem('fileDate' + "220321") == "220321") {} else {
    execute();
    sessionStorage.setItem('fileDate' + "220321", "220321");
    window.addEventListener('load', function () {
        sessionStorage.removeItem('fileDate' + "220321");
    });
}

function call(fileDate) {
    tit('单选 * 80', fileDate, 1);

    Q_KV_module([
        ['CPU封装方式始于( )时代，当时的CPU采用的是DIP封装方式。', '4004', 5],
        ['32位CPU的第一代产品是Intel的( )。', '80386', 5],
        ['世界上首颗微处理器4004是由( )公司推出的。', 'Intel', 2],
        ['1982年Intel推出了( )体系结构。', 'X86', 3],
        ['MicroATX电源的功率是( )W。', '90~145', 5],
        ['下面哪个是常用的dns查询操作命令( )。', 'nslookup', 5],
        ['在Windows Server 2008 R2操作系统中，使用命令nslookup时，配合参数( )主要用来查询邮件服务记录。', 'MX', 5],
        ['在Windows Server 2008 R2操作系统中，netstat命令的功能是显示( )情况。', '网络连接', 4],
        ['在Windows Server 2008 R2操作系统中，在使用netstat命令时，与参数( )结合可以显示以太网统计信息，且此选项可以与-s选项组合使用。', 'A -e', 5],
        ['检查跟踪到达主机www.sems.cn的路径，输入的命令应该是( )。', 'tracert www.sems.cn', 5],
        ['在Windows Server 2008 R2操作系统中，在使用命令Tracert进行路由跟踪时，结合参数( )可以指定不将地址解析为计算机名。', 'A -d', 5],
        ['在Windows Server 2008 R2操作系统中，如果想知道到达目标主机192.168.1.3所经过的路径，可以使用( )命令。', 'tracert 192.168.1.3', 5],
        ['ARP地址解析协议全称为Address Resolve Protocol，工作在ISO的数据链路层，用于将( )转换为网络接口的硬件地址。', 'IP地址', 4],
        ['命令Arp -s 192.168.10.59 00-50-ff-6c-08-75的作用是( )。', '捆绑IP和MAC地址，解决局域网内盗用IP的问题。', 5],
        ['在主机上要删除一条ARP记录，可以执行命令( )。', 'arp -d', 5],
        ['在Windows Server 2008 R2操作系统中，使用命令Arp时，配合参数( )可以删除指定的IP地址项。', 'B -d', 5],
        ['用ping 命令进行测试时出现Unknown host提示说明( )。', '不知名主机', 2],
        ['在Windows Server 2008 R2操作系统中，知道一台主机的IP地址为192.168.1.3，使用命令( )可知道该IP对应的NetBios名。', 'ping 192.168.1.3 -a', 5],
        ['用ping 命令进行测试时出现 No answer提示说明( )。', '远程系统没有响应', 2],
        ['用ping 命令进行测试时出现Network unreachable提示说明( )。', '网络不能到达', 2],
        ['用ping 命令进行测试时出现Time out提示说明( )。', '与远程主机的链接超时，数据包全部丢失。', 3],
        ['在Windows Server 2008 R2操作系统中，当在ping命令中使用( )参数时，会不停的ping向目的主机，直到按下Ctrl+C才停止。', 'A -t', 5],
        ['操作系统网络配置完成后，通常要测试计算机之间的网络连通情况，测试时经常使用( )命令。', 'ping', 2],
        ['在Windows操作系统中，DHCP客户端用来更新IP租约的命令是( )。', 'Aipconfig/renew', 5],
        ['手动释放dhcp客户端ip地址的命令为( )。', 'ipconfig /release', 5],
        ['( )命令可以清除本地DNS缓存内容。', 'ipconfig /flushdns', 5],
        ['在故障的检测方法中，( )就是通过眼看、耳听、手摸、鼻闻等方式检查计算机网络比较明显的故障，观察时不仅要认真，而且要全面。', '观察法', 2],
        ['根据网络故障排除思路进行定位查找，一般按( )步骤进行故障排除。</br>①确定是否网卡问题</br>②确定是否是网络线缆问题</br>③确定是否是网络安全引起的问题</br>④确定网络连接设备是否有问题</br>⑤确定本机配置是否正确', '②①⑤④③', 5],
        ['更换工作站的网卡后，发现网络不通，工程技术人员首先要检查的是( )。', '网卡是否松动', 1],
        ['局域网内有台主机A可以正常访问局域网和因特网，某天被人修改过TCP设置后可以访问局域网资源，但不能上网。最可能的原因是( )。', 'DNS设置问题', 3],
        ['网线故障不存在以下( )问题。', '网线使用时间', 1],
        ['一台计算机突然连不上局域网，不可能是( )原因。', '服务器网卡坏', 3],
        ['下列设备中，( )可以将有线信号转换成无线信号，可以使得一个无线设备连接到传统网络上。', 'Access Point', 5],
        ['下面选项中，( )协议是涉及无线网络安全的。', 'WEP', 5],
        ['一般来说无线分布式系统是建立在两台无线设备基础上实现的。这个无线分布式系统的英文简称为：( )。', 'WDS', 5],
        ['下列设备中，( )设备可以将安装无线网卡的计算机连入到网络。', 'AccessPoint', 5],
        ['网络管理员添加了一块802.11b无线网络适配器到系统中，为了连接到一个安全的网络，下面关于无线AP的配置( )是必须的。', 'SSID and WEP', 5],
        ['Linksys公司生产的WAP54G-CN型号的无线AP最高速率是( )。', '54Mb/s', 5],
        ['Linksys WAP54G的无线AP自带的默认IP地址是( )。', '192.168.1.245', 5],
        ['WLAN上的两个设备之间使用的标识码叫什么？( )', 'SSID', 3],
        ['802.11b与( )无线标准兼容。', '802.11g', 5],
        ['下列选项中，( )网络结构是一种整合有线与无线局域网络架构的应用模式，无线AP起中间桥梁的作用。', 'Infrastructure', 5],
        ['按照Microsoft的解释，无线局域网包括三个基本组件：无线工作站、无线AP和( )。', '端口', 4],
        ['一个学生在自习室里使用无线连接到他的实验合作者的笔记本电脑，他正在使用的是什么无线模式？( )', 'ad-hoc模式', 5],
        ['下面的几种网络中，( )是有线网络的补充，利用电磁介质等发送和接受数据，而无需线缆介质。', 'WLAN', 3],
        ['下列无线标准中，( )支持最大11Mbps数据速率。', '802.11b', 5],
        ['用户通过本地的信息提供商(ISP)登陆到Internet上，并在现在的办公室和公司内部网之间建立一条加密通道。这种访问方式属于哪一种VPN？( )', '远程访问VPN', 3],
        ['有关L2TP(Layer 2 Tunneling Protocol)协议说法有误的是( )。', 'L2TP只能通过TCT/IP连接', 5],
        ['有关PPTP(Point-to-Point Tunnel Protocol)说法正确的是( )。', 'PPTP可用在微软的路由和远程访问服务上', 5],
        ['下面哪个协议是VPN协议( )。', 'PPTP协议', 5],
        ['( )即以太网上的点对点协议，是将点对点协议封装在以太网框架中的一种网络隧道协议。', 'PPPoE', 5],
        ['以下关于VPN说法正确的是( )。', 'VPN指的是用户通过公用网络建立的临时的、安全的连接', 3],
        ['下列哪一项不是创建VPN所采用的技术？( )', 'PKI', 5],
        ['影响ADSL性能的主要因素是：( )。', '线路衰减', 3],
        ['Modem接入Internet的优点有哪些？', '简单廉价', 3],
        ['局域网接入Internet的方式不包括下列中的哪些？( )', '双绞线接入', 4],
        ['利用( )，电脑可以通过有线电视网与Internet相连。', 'Cablemodem', 5],
        ['企业用户要想拥有一个自己的域名，得先找一个( )，根据它所提供的注册申请流程进行注册并支付相应的费用。', 'ISP', 5],
        ['ISP是指( )。', 'Internet服务供应商', 5],
        ['WWW是( )的缩写，它是近几年来迅速崛起的一种服务方式。', ['World WideWeb', '万维网'], 2],
        ['在WindowsServer2008中，</br>用户A准备将文件Test.txt从D:\\DATA文件夹移动到D:\\TEST文件夹。</br>D盘是NTFS盘。Test.txt文件目前对Users组采用修改权限。</br>D:\\TEST文件夹对Users组采用写入权限。</br>移动之后Test.txt文件有( )权限。', '修改', 3],
        ['在Windows7中，已知已完成网络驱动器Z:的映射(对应映射为\\server\share)，下列( )为检查连接状态的命令。', 'net use', 5],
        ['在WindowsServer2008R2中有许多系统自动创建的隐藏共享文件夹，为方便管理，其中Admin$对应的共享目录是( )。', 'c:\\windows', 4],
        ['要访问IP地址为192.168.1.3上的共享文件夹，下列( )是不恰当的。', '在IE的URL里面输入http：//192.168.1.3', 1],
        ['设置隐藏文件夹可在文件夹后面加上( )。', ['$', '亲测：应该不是针对本地文件夹的'], 4],
        ['如果要访问IP地址为192.168.1.3的主机的隐藏的共享文件夹名为abc的隐藏共享，则在IE地址栏内输入( )。', '\\\\192.168.1.3\\abc$', 3],
        ['针对某一个用户，一个共享文件的共享权限是“修改”，NTFS权限为“完全控制”，当该用户从网络访问此文件夹时，有效权限是( )。', '修改', 4],
        ['Windows7系统中，( )用户账户默认情况下是系统管理员。', 'administrator', 1],
        ['在Windows操作系统中，对文件夹设置共享，一般是通过文件夹的共享属性页进行的。在文件夹的共享属性页中下列说法错误的是( )', '可以为一个文件夹设置共享监控', 5],
        ['在WindowsServer2008R2系统中,要创建网络驱动器Z:的映射(对应映射为\\\\SERVER\\SHARE)( )建立共享连接的命令.', 'net use Z: \\\\SERVER\\SHARE', 5],
        ['用户A对某资源有读取的权限，若用户A同时属于组Sales和managers，组sales对该资源有读取权限，组managers对该资源有写入权限，则最终用户A对该资源的权限是( )。', '读取+写入', 5],
        ['用户A对某资源有读取的权限，若用户A同时属于组Sales和managers，组sales对该资源有读取权限，组managers对该资源有拒绝权限，则最终用户A对该资源的权限是( )。', '拒绝', 5],
        ['如果想让大家可以访问但不能修改某共享文件夹里面的内容，应将everyone的共享权限设置为( )。', '读取', 1],
        ['网络适配器又称网卡或网络接口卡，简称为( )。', 'NIC', 5],
        ['网卡有很多接口类型，下列不属于网卡接口类型的是( )。', 'LPI并行接口', 5],
        ['在下面的网络中，( )地理覆盖范围可以从数公里到数千公里，可以连接若干个城市、地区甚至跨越国界而成为遍及全球的一种计算机网络。它将地理上相隔很远的局域网互连起来。', 'WAN', 3],
        ['城域网简称为( )。', 'MAN', 5],
        ['关于交换机，下列说法中正确的是( )。', '交换机的每个端口都独占带宽', 5],
        ['交换机的英文名称通常用( )来表示。', 'Switch', 4],
        ['以下( )是搜索引擎', 'baidu', 1]
    ], [
        ['addClass', 'mainCtr_' + fileDate]
    ])
}