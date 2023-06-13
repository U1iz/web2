(function () {
    let fileDate = '2022-03-28';
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
        ['elem', '\n\nPart_04 下半', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width','90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '常用的数据库种类较多，在选择数据库时主要考虑以下哪几个方面。（ ）',
            ['稳定可靠', '可扩展', '安全性', '丰富的开发工具'],
            [],
            2
        ],
        [
            'MCQ', '在创建表时要考虑以下的哪几个基本问题。（ ）',
            ['字段名', '字段的数据类型', '字段的长度', '主键'],
            [],
            2
        ],
        [
            'MCQ', 'SQL SERVER的字符型系统数据类型主要包括（ ）。',
            ['char', 'int', 'varchar', 'text'],
            [],
            3
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '视图是一种常用的数据对象，它是提供（ ）和存放数据的另一种途径，可以简化数据库操作。',
            '',
            3
        ],
        [
            '更改MicrosoftSQL SERVER登录的密码的命令是（ ）。',
            '',
            7
        ],
        [
            'SOL语言是一种标准的数据库语言，包括数据的查询、定义、操纵和（ ）四部分功能。',
            '',
            4
        ],
        [
            '访问SQL SERVER数据库对象时，需要经过身份验证和（ ）两个阶段，其中身份验证分为Windows验证模式和（ ）验证模式。',
            '',
            2
        ],
        [
            'SQL语言中行注释的符号为“--”;块注释的符号为（ ）。',
            '',
            4
        ],
        [
            '在SQL SERVER中，其权限分为三类，即（ ）、（ ）和（ ）。',
            '',
            7
        ],
        [
            "SQL SERVER中声明了变量： declare@iint，@cchar4，现在为@i赋值10，为@c赋值'abcd' ，B315正确的语句是",
            '',
            5
        ],

        [
            'elem', '\n\n\\c7.2.2.2  \t 修改数据库与数据表', [0.96, 400],
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
            'JQ', '在Access的数据表中追加一条记录，可以追加到表的任意位置。',
            ud, 2
        ],
        [
            'JQ', 'Access中，运算符Like中用来通配任何单个字符的是“*”和“?”。',
            ud, 4
        ],
        [
            'JQ', '两个空值相比较的结果是未知。',
            ud, 3
        ],
        [
            'JQ', '关键字DESC可册除查询结果中的重复值。',
            ud, 3
        ],
        [
            'JQ', '关键字DISTINCT可删除查询结果中的重复值。',
            ud, 3
        ],
        [
            'JQ', '可以在一个表上创建约束条件。当一个约束条件应用于一个表时，表中的每一行都必须满足约束条件所规定的条件。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'CQ', '假设规定学生的年龄必须在16-25之间，则年龄字段的有效性规则为。（ ）',
            ['16<年龄<25', '>=16and<=25', '>=16or<=250', 'IN（16，25)'],
            ud, 1
        ],
        [
            'CQ', '在Access中，规定日期型常量的定界符是（ ）。',
            ['“”', "‘‘", '##', '[ ]'],
            ud, 2
        ],
        [
            'CQ', '在Access中设置数据库密码时，使用的菜单是（ ）。',
            ['编辑', '文件', '窗口', '工具'],
            ud, 2
        ],
        [
            'CQ', '某数据库的表中要添加internet站点的网址，则该采用的字段类型是（ ）。',
            ['OLE对象数据类型', '超级连接数据类型', '查阅向导数据类型', '自动编号数据类型'],
            ud, 2
        ],
        [
            'CQ', 'Access数据库的数据表中删除一条记录，被删除的记录（ ）。',
            ['可以恢复到原来位置', '能恢复，但将被恢复为最后一条记录', '能恢复，但将被恢复为第一条记录', '不能恢复'],
            ud, 2
        ],
        [
            'CQ', '下列SQL语句中，修改表结构的语句是（ ）。',
            ['ALTER', 'INSERT', 'UPDATE', 'DELETE'],
            ud, 3
        ],
        [
            'CQ', '下面关于Access表的叙述中，错误的是（ ）。',
            [
                '在Access表中，可以对备注型字段进行“格式”属性设置',
                '若删除表中含有自动编号型字段的一条记录后， Access不会对表中自动编号型字段重新编号',
                '创建表之间的关系时，应关闭所有打开的表',
                '可在Access表的设计视图“说明”列中，对字段进行具体的说明'
            ],
            ud, 4
        ],
        [
            'CQ', 'Access中修改表结构只能在（ ）。',
            ['“数据表”视图', '“设计”视图', '“表向导”视图', '“数据库”视图'],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '往SQL SERVER数据库的表中添加数据有以下哪几种方法（ ）。',
            ['手动输入', '直接导入', '使用SQL脚本', '使用复制/粘贴功能'],
            [],
            3
        ],
        [
            'MCQ', '以下哪些类型的数据可以作为数据源导入和导出到SQL SERVER数据库。（ ）',
            [
                'SQL SERVER', 'MicrosoftOfficePowerpoint',
                'MicrosoftOfficeAccess', 'KicrosoftOfficeExcel'
            ],
            [],
            1
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'SQL的授权语句中的关键字PUBLIC表示（ ）。',
            '',
            2
        ],
        [
            'SQL中的安全性机制，主要有两个：（ ）和（ ）。',
            '',
            4
        ],
        [
            '在Access报表视图中，用于创建报表结构或修改已有报表结构的视图是()。',
            '',
            3
        ],

        [
            'elem', '\n\n\\c7.? \t 删除数据库与数据表', [0.96, 400],
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
            'JQ', '关系数据库中的表可以随意册除。',
            ud, 1
        ],
        [
            'JQ', '在册除数据库前为避免误操作，最好先做一次数据库的备份。',
            ud, 1
        ],
        [
            'JQ', '当前正在被使用的数据库可以随意删除。',
            ud, 1
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '册除一个表，正确的SQL语句是（ ）。',
            ['DROP表名', 'ALTERTABLE表名', 'DROPTABLE表名', 'ALTER表名'],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'MCQ', '以下哪几项可以用来删除数据表。（ ）',
            ['dropdatabase', 'droptable', 'deletefrom', 'truncatetable'],
            [],
            3
        ],
        ['elem', '\n\n\n\n', ['6rem', 400]],
    ])
}

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
[
    '',
    [],
    2, 'list'
],

['elem', '\n\n\n\n', ['6rem', 400]],

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