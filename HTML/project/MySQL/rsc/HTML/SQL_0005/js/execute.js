(function () {
    let fileDate = '2022-04-18';
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

    // part_09
    Q_KV_module([
        ['elem', '\n\nPart_09', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width', '90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],
        [
            'JQ', '在连接Access数据库时数据库的地址必须用绝对地址。',
            ud, 2
        ],
        [
            'JQ', 'Recordset对象可以用来代表表中的记录，可以把记录集看成是一张虚拟的表格，包含一条或多条记录(行)，每条记录包含一个或多个字段，但任何时候只有一条记录为当前记录。',
            ud, 2
        ],
        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', pre(`
连接Access数据库主要的步骤如下:
\n\t1.创建一个数据库连接对象;
\t2.指定连接什么类型的数据库;
\t3.指定数据库文件的位置，并打开数据库连接
\n请选择正确的执行顺序。
\n`),
            [
                '1、2、3',
                '2、3、1',
                '1、3、2',
                '3、2、1'
            ],
            ud, 2
        ],
        [
            'CQ', '以下哪一个地址属于绝对地址',
            [
                'adb.mdb',
                'ladb.mdb',
                'datasourceladb.mdb',
                'c:\\datasourceladb.mdb'
            ],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '访问数据库时需要创建Connection对象，它有哪几种类型（ ）。',
            [
                'sqlConmection',
                'OleDbConnection',
                'OdbcConnection',
                'OracleConnection'
            ],
            [],
            2
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'Recordset对象的作用是由数据库返回（）。',
            '',
            2
        ],
        [
            'elem', '\n\n\n7.4.1.2 \t 连接SQL SERVER数据库', [0.96, 400],
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
            'JQ', 'DAO/Jet是为了实现从仍访问Access数据库而开发的程序接口对象。（ ）',
            ud, 2
        ],
        [
            'JQ', '从一定意义上说，VBSQL是连接Visual Basic程序到SQL Server的性能最好最直接的方式。（ ）',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', pre(`
JDBC连接SQL SERVER数据库的步骤如下:
\n\t1.加载JTDBC驱动程序
\t2.创建数据库的连接
\t3.提供JDBC连接的URL
\t4.创建一个statement
\t5.执行SQL语句
\t6.处理结果
\t7.关闭JDBC对象
\n请选择以上步骤的执行顺序
\n`),
            [
                '1、2、3、4、5、6、7',
                '1、3、2、4、5、6、7',
                '2、1、3、4、5、6、7',
                '2、1、5、4、3、6、7'
            ],
            ud, 2
        ],
        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '要执行SQL语句，必须获得java.sql.Statement实例，该实例分为以下几种类型（ ）。',
            [
                '执行静态SQL语句',
                '执行动态SQL语句',
                '执行数据库存储过程',
                '执行触发器'
            ],
            [],
            2
        ],
        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '在使用OLEDB模式连接SQL SERVER数据库是主要有两种认证模式，Windows身份认证模式和（ ）身份认证模式。',
            '',
            2
        ],
        [
            'elem', '\n\n\n7.4.2 \t 用其他语言访间SQL数据库', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        [
            'elem', '7.4.2.1 \t 用仍访间SQL数据库', [0.96, 400],
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
            'JQ', 'rdoEngine不是集合的要素，而是重新定义的对象。',
            ud, 2
        ],
        [
            'JQ', 'RDO可以自动断开的功能。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '以下哪一项属于RDO的特点',
            [
                '直接访问SQL Server存储过程',
                '完全支持T-SQL',
                'T-SQL调试集成在开发环境中',
                '以上都是'
            ],
            ud, 2
        ],
        [
            'CQ', '以下哪一项不属于ODBC API特点的。',
            [
                '方法通用性好',
                '允许最强的互操作性',
                '速度快于VBSQL方法',
                '编程简单'
            ],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '使用VB作为前端开发语言，与SQL Server接口有哪几种常用的方法（）。',
            [
                '数据访问对象/Jet',
                '为ODBC API编程',
                'AD0数据对象',
                'RDO远程数据对象'
            ],
            [],
            2
        ],
        [
            'MCQ', 'RDO(的优点的对象',
            [
                'DA0/Jet', 'VBSQL/DBLib',
                'ODBC', 'ADO/Jet'
            ],
            [],
            2
        ],
        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'Visual Basic作为一种（ ）的可视化编程工具，具有简单易学，灵活方便和易于扩充的特点',
            '',
            2
        ],
        [
            'elem', '\n\n\n7.4.2.2 \t 用C访问SQL数据厍', [0.96, 400],
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
            'JQ', '系统DSN表示所有登录该服务器的用户都能使用该数据源。（ ）',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', 'C语言连接SQL数据库存在三种类型的DSN，其中“用户DSN”的作用是（ ）。',
            [
                '只有创建该DSN的用户使用该数据源;',
                '所有登录该服务器的用户都能使用该数据源;',
                '配置信息保存在文件中，所有登录的用户均可使用;',
                '所有人员都可以使用'
            ],
            ud, 2
        ],
        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'ODBC又称为（ ）。',
            '',
            2
        ],

        [
            'elem', '\n\n\n7.5 \t 数据库新技术应用', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        [
            'elem', '7.5.1 \t 面向对象数据库使用', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        [
            'elem', '7.5.1.1 \t 进行面向对象数据库的事务处理', [0.96, 400],
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
            'JQ', '封锁就是事务T在对某个数据对象例如表、记录等操作之前，先向系统发出请求，对其加锁。',
            ud, 2
        ],
        [
            'JQ', '并发操作带来的数据不一致性包括三类，丢失修改、不可重复读和读“脏”数据。',
            ud, 2
        ],
        [
            'JQ', '数据库系统一般不采用允许死锁发生。',
            ud, 2
        ],
        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '下列不属于并发操作带来的问题是（ ）。',
            [
                '丢失修改',
                '不可重复读',
                '死锁',
                '脏读'
            ],
            ud, 2
        ],
        [
            'CQ', '事务T在修改数据R之前必须先对其加x锁，直到事务结束才释放，这是（ ）。',
            [
                '一级封锁协议',
                '二级封锁协议',
                '三级封锁协议',
                '零级封锁协议'
            ],
            ud, 2
        ],
        [
            'CQ', '为了防止一个用户的工作不适当地影响另一个用户，应该采取（ ）。',
            [
                '完整性控制',
                '访问控制',
                '安全性控制',
                '并发控制'
            ],
            ud, 2
        ],
        [
            'CQ', '如果有两个事务，同时对数据库中同一数据进行操作，不会引起冲突的操作是（ ）。',
            [
                '一个是DELETE，一个是SELECT。',
                '一个是SELECT，一个是DELETE。',
                '两个都是UPDATE。',
                '两个都是SELECT。'
            ],
            ud, 2
        ],
        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '数据库中事务基本的锁有哪几个类型（ ）。',
            ['排它锁', '共享锁', '活锁', '死锁'],
            [],
            2
        ],
        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'DBIS的基本工作单位是事务，它是用户定义的一组逻辑一致的程序序列﹔并发控制的主要方法是（ ）机制。',
            '',
            2
        ],
        [
            '封锁的对象的大小称为（ ） 。',
            '',
            2
        ],
    ]);

    // part_10
    Q_KV_module([
        ['elem', '\n\nPart_10', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
            ['elem', '\n\t 判断题', [0.96, 800],
                [
                    ['MB', '0.32rem']
                ]
            ],
        ],
        [
            'elem', '\n\n\n7.5.1.2 \t 对面向对象数据库管理系统进行安全性与完整性操作', [0.96, 400],
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
            'JQ', '一般是不能用UPDATE语句修改关系主码的。',
            ud, 2
        ],
        [
            'JQ', '如果允许修改主码,首先要保证主码的惟一性和非空,否则拒绝修改。',
            ud, 2
        ],
        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '数据库管理系统在实现参照完整性时不需要考虑哪方面?（ ）',
            [
                '外码是否可以接受空值。',
                '级联册除、受限删除、置空值删除。',
                '受限插入、递归插入。',
                '记录重复'
            ],
            ud, 2
        ],
        [
            'CQ', '（ ）是指保护数据库以防止不合法的使用所造成的数据泄露、更改或破坏。',
            [
                '数据库',
                '数据库的安全性',
                '数据库的完整性',
                '数据库的口令'
            ],
            ud, 2
        ],
        [
            'CQ', '在数据库的安全性控制中，授权的数据对象的（ ），授权子系统就越灵活。',
            [
                '约束越细致',
                '约束范围大范',
                '围越小',
                '范围越大'
            ],
            ud, 2
        ],
        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '完整性约束条件是指数据库中的数据应该满足的语义约束条件，以下哪些属于完整性约束（ ）。',
            [
                '静态列级约束',
                '静态元组约束',
                '动态列级约束',
                '动态记录集的约束'
            ],
            [],
            2
        ],
        [
            'MCQ', '面向对象数据库管理系统的完整性控制机制应具有哪几方面的功能?（ ）',
            [
                '定义功能', '触发功能',
                '检查功能', '违约反应'
            ],
            [],
            2
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '数据库的完整性是指数据的正确性和（ ）相容性。',
            '',
            2
        ],
        [
            '数据库的安全性保护数据库防止恶意的破坏和（ ）非法的存取。',
            '',
            2
        ],
        [
            '用（ ）和revoke语句进行授权和收权操作。 grant',
            '',
            2
        ],
        [
            'elem', '、\n\n\n7.5.2 \t XML可扩展标记语言应用', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        [
            'elem', '7.5.2.1 \t 统一管理数据存取格式', [0.96, 400],
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
            'JQ', 'XML最初的设计目的是为了EDI (ElectronicDataInterchange，电子数据交换)，确切地说是为EDI提供一个标准数据格式。',
            ud, 2
        ],
        [
            'JQ', '通过XML，可以在不兼容的系统之间轻松地交换数据。',
            ud, 2
        ],
        [
            'JQ', '在XML中，标签<Letter>与标签<letter>是一样的。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '以下哪一项不属于XML和HTML的区别（ ）。',
            [
                'XML被设计为传输和存储数据，其焦点是数据的内容。',
                'XML可以控制CSS样式。',
                'HTML被设计用来显示数据，其焦点是数据的外观。',
                'HTML旨在显示信息，而XML旨在传输信息。'
            ],
            ud, 2
        ],
        [
            'CQ', '以下关于XML文档的声明语句正确的是（ ）。',
            [
                '<xml version="1.0" encoding="UTF-8">',
                '<?XML version="1.0" encoding="UTF-8"?>',
                '<?xml Version="1.o" encoding="UTF-8"?>',
                '?x.ml version="1.0" encoding="UTF-8"?>'
            ],
            ud, 2
        ],
        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '以下哪些是XML具有的特点。（ ）',
            [
                'XML可以从HTMIL中分离数据',
                'XML可用于交换数据',
                'XML可应用于B2B中',
                '利用XML可以共享数据'
            ],
            [],
            2
        ],
        [
            'MCQ', 'XML元素必须遵循以下哪些命名规则。（ ）',
            [
                '名称可以含字母、数字以及其他的字符',
                '名称不能以数字或者标点符号开始',
                '名称不能以字符“xml”(或者XML、Xml）开始',
                '名称能包含空格'
            ],
            [],
            2
        ],
        [
            'MCQ', 'XML文档一般由（）部分组成。',
            [
                'XML文档的声明',
                'XML文档类型定义',
                'XML文档注释',
                'XML标识及其内容'
            ],
            [],
            2
        ],
        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '（）语言，标准通用标记语言的子集，简称XML',
            '',
            2
        ],

        [
            'elem', '\n\n\n7.5.2.2  \t 更新XML数据', [0.96, 400],
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
            'JQ', 'DTD本身不是规范的XML文本。',
            ud, 2
        ],
        [
            'JQ', 'SGML是XML语言的一个子集。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', 'Schema与DTD的相同之处有。（ ）',
            [
                '基于XML语法',
                '支持命名空间',
                '都可以嵌入到XML文档中',
                '对XML文档结构进行验证'
            ],
            ud, 2
        ],
        [
            'CQ', 'DTD指的是。（ ） ',
            [
                'Dymamic Type Definition',
                'Do The Dance',
                'Document Type Definition',
                'Direct Type Definition'
            ],
            ud, 2
        ],
        [
            'CQ', '以下哪些属于schema的内置数据类型。（ ）',
            [
                'string', 'bool',
                'PCDATA', 'doucumnent'
            ],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '以下属性写法正确的（ ）',
            [
                '/<root attribute="first"//>',
                '/<root attribute==first//>',
                '/<root attribute//>',
                `/<root attribute=' first’ value='aaa'>`
            ],
            [],
            2
        ],
        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'schema内建了丰富的数据类型，被称为“简单类型”，可以直接在元素和属性中使用它们，也可以用它们派生其他简单类型和（）。',
            '',
            2
        ],
        [
            'elem', '\n\n\n7.5.2.3 \t 对不同应用系统间的数据进行共亨和交互', [0.96, 400],
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
            'JQ', '声明数据岛通过标记<xml>实现，声明内部数据岛时，把XIL代码段写在标记<xml>之间。（ ）',
            ud, 2
        ],
        [
            'JQ', '从数据岛中取数据的方法是通过HTM对象的“datafld”属性实现，把需要的数据的标记名称做为“datafld”属性的值。（ ）',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '以下哪一项不是通过记录集管理数据岛的方法?（ ）',
            [
                '取记录',
                '遍历记录',
                '修改记录',
                '插入和册除记录'
            ],
            ud, 2
        ],
        [
            'CQ', '关于记录的遍历以下表达错误的是（ ）。',
            [
                'moveNex （ ）方法:当前记录移动到下一条记录。',
                'movePrevious （ ）方法:当前记录移动到第一条记录。',
                'moveFirst（ ）方法:当前记录移动到第一条记录。',
                'moveLast（ ）方法:当前记录移动到最后一条记录。'
            ],
            ud, 2
        ],
        [
            'CQ', '以下取记录的格式错误的是（）。',
            [
                'rs(‘标记的编号’)',
                'rs.Fields (‘标记名称’',
                'rs.Fields(标记的编号)',
                'rs.Fields.Item (‘标记名称’)'
            ],
            ud, 2
        ],
        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', 'DoM包括以下哪几种接口（ ）。',
            [
                'Document接口',
                'Nodelist接口',
                'Node接口',
                'Named Node Map接口'
            ],
            [],
            2
        ],
        [
            'MCQ', '数据岛这种技术的作用为（ ）。',
            [
                '实现页面范围内数据和显示的分离。',
                '提高数据的共享性',
                '方便数据的维护',
                '可以提高程序的扩展性和代码的重用性。'
            ],
            [],
            2
        ],
        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '（ ）是指存在于HTM页面中的XML代码，作为HTML页面数据的来源。',
            '',
            2
        ],
        [
            'elem', '\n\n\n7.5.2.4 \t 构建一个小型XML应用程序', [0.96, 400],
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
            'JQ', '常用的XML解析器有两个，分别是DOM和SAX。)【中】在XSL中，sort元素具有索引功能。',
            ud, 2
        ],
        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '名字空间声明有直接定义和缺省定义二种方式,其中直接定义的格式是。（ ）',
            [
                'xmlns:<名字空间前缀>="<名字空间名>”',
                'xmlns:<名字空间名>="<名字空间前缀>”',
                'xmlns<名字空间前缀>="<名字空间名>”',
                'xmlns:<名字空间前缀>=<名字空间名>'
            ],
            ud, 2
        ],
        [
            'CQ', '以下XSL文件-省略根元素的描述-输出的内容为（ ）。' +
            '\n\t/<tenmplate match="/">' +
            '\n\t/<xsl:value-of select="Class/Class_Name"/> </template>',
            ['J001', '张三', '张三女23', 'Class_Name'],
            ud, 2
        ],
        [
            'CQ', '在XSL中，xsl:template的作用是定义一个新模板，什么属性控制模板的匹配模式，匹配模式是定位在XML源文档中哪一个节点被模板处理。（ ）',
            ['match', 'select', 'mode', 'name'],
            ud, 2
        ],
        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '为定义一个XML文档的结构，开发者可以使用XML技术有（ ）。',
            ['UML', 'DTD', 'Namespace', 'XML Schema'],
            [],
            2
        ],
        [
            'MCQ', '下面是XML标准提供的编程接口，用于开发人员访间XML文档（ ）。',
            ['Xpath', 'XSLT', 'Dom', 'SAX'],
            [],
            2
        ],
        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'SAX是simple API for XML的缩写，翻译成中文是（ ）。',
            '',
            2
        ],
        ['elem', '\n\n\n\n', [0.96, 400]],
    ]);
}

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

['elem', '\n\nstring', [1.6, 400, '0.32rem'],
    [
        ['position', 'relative'],
        ['left', '10%'],
        ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
        ['addClassName', 'questionsPart']
    ]
],

[]