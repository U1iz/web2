(function () {
    let fileDate = '2022-03-21';
    if (sessionStorage.getItem('execute_all') === 'true') {
        if (sessionStorage.getItem('fileDate' + fileDate) == fileDate) {

        } else {
            call();
            sessionStorage.setItem('fileDate' + fileDate, fileDate);
            window.addEventListener('load', function () {
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
    let ud = undefined;
    if (sessionStorage.getItem('execute_all') === 'true') {} else {
        tit();
    }
    Q_KV_module([
        ['elem', '\n\nPart_03', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width','90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],
        ['elem', '\n\\c7.1.2.3 \t 数据模型的优化', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],

        ['elem', '\n\t 判断题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'JQ', '网状模型与层次模型的共同之处在于都是用指针来表示实体间的联系。',
            ud, 2
        ],
        [
            'JQ', '如果关系模式R满足第二范式，且每一个非主关键字属性均非传递函数依赖于主关键字属性，则该关系满足第三范式。',
            ud, 2
        ],
        [
            'JQ', '如果关系模式R满足第一范式，且所有非主关楗字属性都完全依赖于主关键字属性,则该模式满足第二范式的条件。',
            ud, 2
        ],
        [
            'JQ', '在关系数据库设计中，关系模式设计的好坏对数据库系统的性能和质量没有直接的影响。',
            ud, 2
        ],
        [
            'JQ', '数据库规范化，又称正规化、是数据库设计的一系列原理和技术，以减少数据库中教据冗余，增进数据的一致性',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '设计性能较优的关系模式称为规范化,规范化主要的理论依据是（）。',
            ['关系规范化理论', '关系运算理论', '关系代数理论', '数理逻辑理论'],
            ud, 2
        ],
        [
            'CQ', '规范化过程主要为克服数据库迓辑结构中的插入异常，删除异常以及（）缺陷。',
            ['数据不一致性', '结构不合理', '冗余度大', '数据丢失'],
            ud, 2
        ],
        [
            'CQ', '当关系模式R(A，B)已属于3NF，下列说法中（）是正确的。',
            ['它一定消除了插入异常和册除异常', '仍行在一定的插入和删除异常', '一定属于BCNF', 'A和C都是'],
            ud, 2
        ],
        [
            'CQ', '消除了非主属性对码的部分函数依赖的1NF的关系模式，必定是（）。',
            ['1NF', '2NF', '3NF', '4NF'],
            ud, 2
        ],
        [
            'CQ', '关系模式中，满足2NF的模式（）。',
            ['可能是1NF', '必定是BCNF', '必定是3NF', '必定是1NF'],
            ud, 2
        ],
        [
            'CQ', '能消除多值依赖引起的冗余的是（）。',
            ['2NF', '3NF', '4NF', 'BCNF'],
            ud, 2
        ],
        [
            'CQ', '如果一个关系模式R的每个属性值都是不可再分的数据单位，则称R满足（）。',
            ['第一范式', '第二范式', '第三范式', '高范式'],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '关系数据库规范化是为解决关系数据库中（）问题而引入的。',
            ['查询', '插入', '删除', '数据冗余'],
            [],
            2
        ],
        [
            'MCQ', '关系的规范化主要包含一下哪几项。 （）',
            ['1NF', '2NF', '3NF', 'BCNF'],
            [],
            2
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '对于非规范化的模式，经过将每一个分量化分为不可分的数据项转变为1NF，将1NF经过（）转变为2NF,将2N经过消除非主属性对码的传递函数依赖转变为3NF。',
            '',
            2
        ],
        [
            '关系规范化的目的是（）。',
            '',
            2
        ],
        [
            '关系模式中，满足2NF的模式必定是（）。（同~~~）',
            '',
            2
        ],
        [
            '关系模式中R的属性全部是主属性，则R的最高范式必定是（）。',
            '',
            2
        ],

        ['elem', '\n\n\\c7.2 \t 数据库管理系统使用', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        ['elem', '7.2.1 \t 数据库管理系统操作', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        ['elem', '7.2.1.1 \t 数据库软件安装', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],

        ['elem', '\n\t 判断题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'JQ', '对应于一个关系数据库模式的所有关系的集合称为关系数据库。所以，关系数据库是由若干个相关的关系组合而成。',
            ud, 2
        ],
        [
            'JQ', '目前国际国内的主导关系型数据库管理系统有ORACLE、STBASE、ATM等。',
            ud, 2
        ],
        [
            'JQ', '如果数据库对象存储在多个表空间中，那么可以通过把它们各自的数据文件存放在不同磁盘上来对其进行物理分割。',
            ud, 2
        ],
        [
            'JQ', '数据库、数据库系统和数据库管理系统三者之间的关系是数据库管理系统包括数据库系统和数据库。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', 'DBHS通常提供授权功能来控制不同用户访间教据的权限，这主要是为了实现数据库的（）。',
            ['可靠性', '一致性', '完整性', '安全性'],
            ud, 2
        ],
        [
            'CQ', '保护数据库，防止未经授权的或不合法的使用造成的数据泄露、更改破坏。这是指数据库的（）。',
            ['安全性', '完整性', '并发控制', '恢复'],
            ud, 2
        ],
        [
            'CQ', '在数据库中存储的是（）。',
            ['数据', '数据模型', '数据以及数据之间的联系', '信息'],
            ud, 2
        ],
        [
            'CQ', '数据库系统的核心是（）。',
            ['数据库管理系统', '数据库', '数据模型', '数据'],
            ud, 2
        ],
        [
            'CQ', '目前绝大多数流行的关系型数据库管理系统，如Oracle, MicrosoftSQL, EFVER, Access等都采用了（）语言标准。',
            ['SQB', 'RQL', 'SQL', 'JQB'],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', 'Access数据库提供了（） 、页、宏、模块7种用来建立数据库系统的对象。',
            ['表', '查询', '窗体', '报表'],
            [],
            2
        ],
        [
            'MCQ', '以下哪些是Access数据库的优点。 （）',
            ['存储方式简单、易于维护管理', '界面友好、易操作', '集成环境、处理多种数据信息', '支持广泛、易于扩展、弹性较大'],
            [],
            2
        ],
        [
            'MCQ', 'SQL SERVER是一个〔〕所设计的数据库管理系统。',
            ['可扩展的', '高性能的', '分布式计算', '适合管理少量数据'],
            [],
            2
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'Access是（）推出的基于Windows的桌面关系数据库管理系统。',
            '',
            2
        ],
        [
            'SQL SERVER支持对称多处理器结构、（）、ODBC，并具有自主的（）语言。',
            '',
            2
        ],

        ['elem', '\n\n\\c7.2.1.2 \t 设置数据库服务器', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],

        ['elem', '\n\t 判断题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'JQ', 'SQL SERVER采用的身份验证模式有Windows身份验证模式和混合模式。',
            ud, 2
        ],
        [
            'JQ', 'Access数据库是一个关系型数据库。',
            ud, 2
        ],
        [
            'JQ', 'Access数据库要设置或删除数据库密码，不需要以独占方式打开数据库。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '数据库的完全备份备份整个数据库，包含用户表、系统表、索引、视图和存储过程等所有数据库对象,。但它需要花费更多的时间和空间，所以，一般推荐（）做一次完全备份。',
            ['一年', '一周', '一月', '一天'],
            ud, 2
        ],
        [
            'CQ', '按照数据库的状态数据库备份可分为三种，以下哪一种不属于数据库备份。（）',
            ['过程备份', '冷备份', '热备份', '逻辑备份'],
            ud, 2
        ],
        [
            'CQ', '在数据库中常规的恢复有3种类型或方法，以下哪一种不压于常规数据库恢复方法。（）',
            ['应急恢复', '版本恢复', '逻辑恢复', '前滚恢复'],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '数据库管理员的核心目标是保证数据库管理系统的（）。',
            ['稳定性', '安全性', '完整性', '高性能'],
            [],
            2
        ],
        [
            'MCQ', '以下哪些属于数据库管理员的职责。（）',
            ['数据安装', '数据库监控', '数据库备份', '数据库恢复'],
            [],
            2
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '数据库是所有信总系统的核心，数据库的安全通常是指其中所存数据的安全、是网络安全、（）的重要组成部分。',
            '',
            2
        ],
        [
            '数据库的安全保障主要包括数据库的（）、防攻击、权限控制等。',
            '',
            2
        ],
        [
            '按照备份数据库的大小数据库备份有四种类型，分别应用于不同的场合，主要分为： ()、事务日志备份、差异备份、文件备份。',
            '',
            2
        ],
        ['elem', '\n\n\n\n', ['6rem', 800],
            [
                ['MB', '0.32rem']
            ]
        ],
    ])

    Q_KV_module([
        ['elem', '\n\nPart_04 上半', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width','90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],
        ['elem', '\n\n\\c7.2.2 \t 数据库与数据表操作', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        ['elem', '7.2.2.1 \t 创建数据库与数据表', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],

        ['elem', '\n\t 判断题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'JQ', '任何一张二维表格都表示一个关系。',
            ud, 2
        ],
        [
            'JQ', '如果数据库对象存储在多个表空间中，那么可以通过把它们各自的数据文件存放在不同磁盘上来对其进行物理分割。',
            ud, 2
        ],
        [
            'JQ', '如果一个SQL语句中包括两个名字相同的不同表中的列，则必须用合法性列名来排除二义性。',
            ud, 2
        ],
        [
            'JQ', '表由字段和记录组成。',
            ud, 2
        ],
        [
            'JQ', '在SQL SERVER中，触发器的执行是在教据的插入、更新或删除之前执行的。',
            ud, 2
        ],
        [
            'JQ', '建立基本表分两步：定义表结构和输入数据。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '用Access创建的数据库文件，其扩展名是（）。',
            ['.adp', '.dbf', '.frm', '.mdb'],
            ud, 2
        ],
        [
            'CQ', '在下面关干Access数据库的说法中，错误的是（）。',
            ['数据库文件的扩展名为mab', '所有的对象都存放在同一个数据库文件中', '一个数据库可以包含多个表', '表是数据库中最基本的对象,没有表也就没有其他对象'],
            ud, 2
        ],
        [
            'CQ', '在Acccss创建的单位人事据库中，字段为"简历”的数据类型应当为（）。',
            ['文本型', '数字型', '日期/时间型', '备注型'],
            ud, 2
        ],
        [
            'CQ', 'SQL SERVER在“连接”组中有两种连接认证方式，其中在（）方式下需要客户端应用程序连接时提供登录时需要的用户标识和密码。',
            ['windows身份验证', 'SQL SERVER身份验证', '以超级用户身份登录时', '其他方式登录时'],
            ud, 2
        ],
        [
            'CQ', 'SQL SERVER中数据库创建后就可以创建表了，创建表可以用（）等方法来创建。',
            ['企业管理器', '查询分析器', 'OSQL', '企业管理器和CREATETABLE语句'],
            ud, 2
        ],
        [
            'CQ', '为数据表创建索引的目的是（）。',
            ['提高查询的检索性能', '创建唯—索引', '创建主键', '归类'],
            ud, 2
        ],
        [
            'CQ', '在SQL SERVER服务器上，存储过程是一组预先定义并（）的Transact-SQL语句。',
            ['保存', '编译', '解释', '编写'],
            ud, 2
        ],
        [
            'CQ', '以下正确的论述是（）。',
            [
                '在建立数据库的时候，SQL SERVER是可以创建操作系统文件及其目录路径。',
                '数据库中有一些sys开头的系统表，用来纪录SQL SERVER组件、对象所需要的数据，这些系统表全部存放在系统数据库中。',
                'SYS开头的系统表中的数据用户不能直接修改．但可以通过系统存储过程、系统函数进行改动、添加。',
                '12AM是中午、12PM是午夜。'
            ],
            ud, 2
        ],
        [
            'CQ', '下列那组数据类型的列不能被指定为主键，也不允许指定主键列有NULL属性（）。',
            ['int和decimal', 'nvarchar和datetime', 'image和text', 'real和money'],
            ud, 2
        ],
        [
            'CQ', 'SQL数据定义语言中，表示外码约束的关键字是（）',
            ['UNIQUE', 'FOREIGNKEY', 'PRIVARYKEY', 'CHECK'],
            ud, 2
        ],
        [
            'CQ', '下列的SQL语句中，（）不是数据定义语句。',
            ['CREATETABLE', 'DROPVIEW', 'CREATEVIEW', 'GRANT'],
            ud, 2
        ],
        [
            'CQ', 'SQL SERVER的数据库包括：主数据文件,辅助数据文件和（）。',
            ['索引文件', '日志文件', '备注文件', '脚本文件'],
            ud, 2
        ],
        ['elem', '\n\n\n\n', [0.96, 400]],
    ])
}

// 常规 normal
[
    '',
    [],
    2
],
[
    '',
    '',
    2
],
[
    'MCQ', '',
    [],
    [],
    2
],
[
    'CQ', '',
    [],
    ud, 2
],
[
    'JQ', '',
    ud, 2
],


// 常规 list
[
    '',
    [],
    2, 'list'
],

['elem', '\n\n\n\n', [0.96, 400]],

[
    'elem', 'string \t string', [0.96, 400],
    [
        ['position', 'relative'],
        ['left', '-1.6rem'],
        ['addClassName', 'questionChapter']
    ]
],

['elem', '\n\t 填空题', [0.96, 800],
    [
        ['MB', '0.32rem']
    ]
],
['elem', '\n\t 单选题', [0.96, 800],
    [
        ['MB', '0.32rem']
    ]
],
['elem', '\n\t 多选题', [0.96, 800],
    [
        ['MB', '0.32rem']
    ]
],
['elem', '\n\t 判断题', [0.96, 800],
    [
        ['MB', '0.32rem']
    ]
],

[]