function execute() {
    let fileDate = '22-03-28';
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

if (sessionStorage.getItem('fileDate' + "220328") == "220328") {} else {
    execute();
    sessionStorage.setItem('fileDate' + "220328", "220328");
    window.addEventListener('load', function () {
        sessionStorage.removeItem('fileDate' + "220328");
    });
}

function call(fileDate) {
    tit('单选 * 80', fileDate, 1);

    Q_KV_module([
        ['下列选项中，( )是正确的电子邮件地址。', 'usename@domainname', 1],
        ['到MailServer取回邮件所使用的协议是( )。', 'POP', 5],
        ['Internet有一些基本服务，其中( )最有可能用到POP协议。', '电子邮件', 2],
        ['在电子邮件传送过程中，由发送方用户发出的邮件最先到达( )。', '发送方邮件服务器', 1],
        ['一个完整的电子邮件地址格式通常不包括( )。', '邮件服务器的计算机名', 2],
        ['发送电子邮件的协议是( )', 'SMTP', 5],
        ['假定FTP服务器的IP地址为192.168.1.100,且采用默认的TCP端口,则关于访问该FTP服务器的方式,下面说法中不正确的是( )', '在"运行"中输入\\\\192.168.1.100来访问', 5],
        ['( )是FTP服务的URL的正确范列。', 'ftp://ftp.ncic', 1],
        ['匿名登录FTP服务器使用的帐户名是( )。', 'anonymous', 4],
        ['如果FTP服务器的IP地址是10.155.22.99，客户机的IP地址是172.16.16.10，则使用FTP的命令是( )。', 'FTP 10.155.22.99', 7],
        ['默认的Web主目录为( )', '%systemdriver%\\inetpub\\wwwroot', 5],
        ['当用户通过IE来访问网站时，网站会自动将它( )中的默认网页传送给用户的浏览器。', '主目录', 3],
        ['关于HTTP，下列说法错误的是( )。', 'HTTP对于事务处理有记忆能力', 3],
        ['DNS用( )表示主机记录。', 'a', 7],
        ['DNS服务器支持两种查询类型：递归查询和( )查询。', '迭代', 4],
        ['在网络规划中，考虑企业是否需要搭建企业内部的WEB、FTP服务器及邮件服务器， 这是属于( )需求分析。', '网络应用', 2],
        ['Web服务器默认的TCP端口号为( )。', '80', 1],
        ['制作双绞线常用( )两种方式。', '标准连线(直通方式)、交叉连线', 3],
        ['双绞线的( )连线方式，适用于同种设备对接。', '交叉', 5],
        ['双绞线分为( )双绞线STP和非屏蔽双绞线UTP两大类。', '屏蔽', 4],
        ['以下不属于私有地址的网段是( )。', '224.0.0.0/8', 7],
        ['如果IP地址为127.0.0.1，那么它通常表示( )', '实现本机回送功能的地址', 7],
        ['以下IP地址中为C类地址是( )。', '213.123.23.12', 8],
        ['下列( )是B类IP地址的二进制表示。', '10xxxxxx', 3],
        ['计算机内部处理的信息，都是采用( )来表示的。', ['二进制数', '二进制'], 1],
        ['在计算机中，网卡的MAC地址是采用( )来表示。', '十六进制数', 2],
        ['用IPCONFIG/ALL查看网络的物理地址，下面的( )是不可能的。', '4G-2E-18-09-B9-2F', 8],
        ['在OSI参考模型中，<br />数据的实际传送过程是数据经发送方由应用层向下传输到物理层，<br />通过物理介质传输到接收方后，<br />再从物理层向上传输到应用层，<br />最后到达接收方。<br />则发送方从上到下逐层传递的过程中，<br />每层都要加上适当的控制信息，<br />称之为( )。', '封装', 4],
        ['路由器工作在OSI参考模型的第( )层。', 'C 3', 5],
        ['开放系统互连参考模型是指( )。', 'OSI/RM', 5],
        ['传输控制协议TCP属于OSI参考模型中的( )。', '传输层', 2],
        ['OSI参考模型中的物理层传输的是二进制数位流，单位为( )', ['比特', 'Bit'], 1],
        ['下列网络拓扑结构中，( )拓扑结构的网络中间有一个中心节点，如交换机设备，其它 所有的节点都连到中心节点上。', '星型', 5],
        ['现实是此岸，理想是彼岸，中间隔着宽敞的河流，行动则是架在川上的桥梁。对这段话理解不正确的是()。', ['人生只要有理想就一定能实现', '你教我哲学是吧'], 6],
        ['目前在大数据、物联网和人工智能技术的推进下，( )的学习程度对职场人的工作效率有很大的影响。', '计算机技术', 6],
        ['下列哪一个软件可制作DVD视频光盘？( )', 'Nero Burning Rom', 5],
        ['下列哪一种类型的光盘可制作DVD视频光盘？( )', 'DVD+RW', 5],
        ['下列哪一个软件可制作CD音乐光盘？( )', 'Nero Burning Rom', 5],
        ['刻录光盘的种类分为( )。', 'CD-R、CD-RW、PD、DVD-RAM', 8],
        ['在进行光盘刻录时有很多种刻录方式，其中不支持剩余空间可以继续刻录的方式是( )。', '整盘刻录', 2],
        ['功能全面，支持的刻录机数目最多，更新速度快，支持所有刻录机的刻录软件是( )。', 'NeroBuringRom', 5],
        ['下列哪一个软件属于光盘刻录软件( )。', '光盘刻录大师', 1],
        ['下列说法中正确的有( )。', '使用EasyRecovery恢复数据时可能失败。', 1],
        ['EasyRecovery是一款很强大的数据恢复软件，能恢复的数据文件不包括( )。', '坏道', 1],
        ['DiskGenius是一款硬盘分区及数据恢复软件，具有强大的硬盘优化和维护功能，不包括( )功能。', '修复固件', 2],
        ['关于数据恢复的说法正确的是( )。', '只有在系统中的数据损坏后才进行数据恢复', 1],
        ['下列哪一项不是数据恢复软件( )。', 'Findhidden', 1],
        ['以下哪一个是数据恢复软件( )。', 'EasyRecovery', 2],
        ['如何在Windows设置中美化桌面( )。', '个性化设置', 1],
        ['如何在右键菜单栏中更换桌面背景( )。', '个性化', 1],
        ['Win10系统中，桌面设置中不能更改的项目有( )。', '“回收站”中的文件名', 1],
        ['桌面主题会影响桌面整体外观，但更改桌面主题不会改变( )。', '屏幕分辨率', 1],
        ['下列哪一项是Windows桌面美化工具( )。', ['UPUPOO', '这种题能有这么多我也是醉了'], 5],
        ['下列哪一项不是Windows桌面美化工具( )。', 'windows优化大师', 1],
        ['win10系统中，“个性化”功能中，可以进行美化设置的有( )、颜色、锁屏界面、主题、字体、开始菜单和任务栏。', '背景', 1],
        ['以下软件中，有桌面美化功能的是( )。', '腾讯桌面整理工具', 1],
        ['用ACDSee6.0软件，下列哪种操作可将BMP格式文件转换成JPG格式文件( )。', '转换文件格式', 1],
        ['想要把一个PNG图片文件，转换成一个JPG图片文件，可以通过格式工厂中的( )转 换功能实现。', '图片', 1],
        ['网络搜索到一张图片，想要隐藏图片上的部分信息，最直接有效的的方法是( )', ['使用美图秀秀的马赛克功能。', '夹带私货是吧'], 1],
        ['想要把多张照片同时加上统一的边框，可以通过美图秀秀的( )功能实现？', '批量处理', 1],
        ['下列软件工具可以完成声音播放功能的是( )。① WORD② WINAMP③ powerpoint④暴风影音⑤Goldwave ⑥千千静听', '②④⑤⑥', 3],
        ['刘欣从网上下载了一个音乐：琵琶语.mp3想作为背景音乐直接插入录好的诗歌中，可 是发现用录音机却无法一次性完成，最有可能的原因是：( )。', '录音机不能处理mp3格式的声音文件', 2],
        ['刘彩霞为参加“校园好声音”大赛，录制了歌曲“隐形的翅膀.mp3”。录制的歌曲前有一段试唱，要将试唱部分去掉，可使用GoldWave软件中的( )操作。', '删除', 1],
        ['张霞同学用麦克风录制了一段wav格式的诗朗诵参赛，在上传作品时系统提示文件过大，最好的处理方式是( )。', ['将文件转换为mp3格式', '答案不唯一'], 1],
        ['以下不具有声音编辑功能的软件是( )。', 'Winamp', 5],
        ['格式工厂可以对图片进行( )。', '更改格式', 1],
        ['Picasa 当然也提供对( )的高级编辑功能，通过简单的单击就能实现强大的效果。', '图片', 5],
        ['Photo Organizer可以对下面哪个文件进行管理( )。', 'JPEG', 5],
        ['以下哪款功能强大的数码相片查看管理软件( )。', 'Photo Mechanic', 4],
        ['以下哪个是ACDSee Photo Manager的功能特点( )。', ['浏览速度快', '我答个题还要把古今中外所有上市软件都给玩明白是吧'], 5],
        ['夏雨同学从网上下载了龙年春晚上的小品“荆轲刺秦.mpg”，他的电脑因没有安装播放软件而无法观看，现请你帮他选择一款比较合适的视频播放软件( )。', ['暴风影音', '这都多少年前的题库了'], 1],
        ['从影片《功夫熊猫》视频文件中截取一段视频，可用的软件是( )。', '会声会影', 5],
        ['某同学用麦克风录制一段歌曲，保存为 WAV 格式的文件，想作为网页中的背景音乐，由于容量太大，不易于在网上发布，请问他应该如何压缩文件容量又不破坏文件的完整性( )。', '用 GoldWave 软件将文件转换成 mp3 格式', 1],
        ['下列音频格式中，无损格式是( )。', 'WAV', 2],
        ['( )是一个以数码影像为背景，面向数码相机普通用户和准专业用户而设计的一套集图片管理，浏览，处理，输出为一身的国产软件系统。', 'AVI', 5],
        ['( )是著名的图象处理软件, 为美国 ADOBE 公司出品。', 'Photoshop', 1],
        ['( )文件有时容量会很大，但由于可以保留所有原始信息，在图像处理中对于尚未制作完成的图像，选用( )格式保存是最佳的选择。', 'PSD', 5],
        ['( )支持多种编码方法，其中包括 RGB 无压缩、RLE 压缩及 JEPG压缩等。', 'TIFF', 2],
        ['( )最常用的图像文件格式，由软件开发联合会组织制定，是一种有损压缩格式。', 'JEPG', 1],
        ['当要放置一幅风景照片在网页的时候,应该使用的图形格式是( )。', 'JPG', 1]
    ], [
        ['addClass', 'mainCtr_' + fileDate]
    ])
}