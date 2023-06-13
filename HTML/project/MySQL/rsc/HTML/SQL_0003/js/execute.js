(function () {
    let fileDate = '2022-04-02';
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
        ['elem', '\n\nPart_05', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width','90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],
        [
            'elem', '\n\n7.2.2.4 \t 数据视图的创建和使用', [0.96, 400],
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
            'JQ', '视图是一种数据库对象，它为用户提供了一种对源数据可定制查询、且可修改的工具（）',
            ud, 2
        ],
        [
            'JQ', '视图又称为虚拟表，但不能像表一样操作，不能对视图进行查询、插入、更新等。（）',
            ud, 2
        ],
        [
            'JQ', '视图可以被嵌套，一个视图中可以嵌套另一个视图。',
            ud, 2
        ],


        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'CQ', '以下哪一项不属于视图的功能。（）',
            [
                '简化用户操作。', '能以不同的角度观察同一个数据库。',
                '对重构数据库提供了逻辑独立性。', '不可以对不同的用户建立不同的视图'
            ],
            ud, 2
        ],
        [
            'CQ', '以下哪一个选项可以正确创建视图（）',
            [
                pre(
                    `<br>Createviewvwlas
Select学号,姓名,所属院系
Fromstudent
Where课名=’软件工程’and所属院系=’计算机’<br><br>`),
                pre(
                    `<br>select学号,姓名,所属院系
Fromstudent
Where课名=’软件工程’and所属院系=’计算机’<br><br>`),
                pre(
                    `<br>Createprocedurevwlas
Select学号,姓名,所属院系
Fromstudent
Where课名=’软件工程’ and所属院系=’计算机’<br><br>`),
                pre(
                    `<br>Createdatabasevw1as
Select学号,姓名,所属院系
Fromstudent
Where课名=’软件工程’ and所属院系=’计算机’<br><br>`)
            ],
            ud, 7
        ],
        [
            'CQ', '下列叙述中错误的是（）。',
            [
                '使用数据表设计视图,不仅可以创建表,而且可以修改已有表的结构',
                '如果在保存表之前未定义主键,则Access将询问是否由系统自动添加一个主键',
                '每张表必须设定主键',
                '每种类型的字段都有一个特定的属性集'
            ],
            ud, 3
        ],
        [
            'CQ', '在SQL SERVER中，视图是从（）中导出的。',
            ['基本表', '视图', '基本表或视图', '数据库'],
            ud, 4
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '以下哪些属于视图的特点。',
            [
                '视图不能被修改，表修改或者删除后应该删除视图再重建。',
                '\n视图的数量没有限制，\n但是命名不能和视图以及表重复，\n具有唯一性。\n\n',
                '视图可以被嵌套，一个视图中可以嵌套另一个视图。',
                '\n视图不能索引，\n不能有相关联的触发器和默认值，\nSQL SERVER不能在视图后使用orderby排序。'
            ],
            [],
            2
        ],
        [
            'MCQ', '以下哪些属于视图的特点。',
            [
                '视图不能被修改，表修改或者删除后应该删除视图再重建。',
                '视图的数量没有限制，但是命名不能和视图以及表重复，具有唯一性。',
                '视图可以被嵌套，一个视图中可以嵌套另一个视图。',
                '\n视图不能索引，不能有相关联的触发器和默认值，\nSQL SERVER不能在视图后使用orderby排序。'
            ],
            [],
            2
        ],
        [
            'MCQ', 'Access中有多种视觉复杂的图表形式，它们是（）。',
            ['表单视图', '数据表视图', '视图', '布局设计视图'],
            [],
            2
        ],
        [
            '视图是一个虚拟的表，是一个表中的数据经过某种筛选后的显示方式,视图由一个预定义的查询select语句组成。（这题没有空）',
            '',
            2
        ],
        [
            '利用视图将需要的数据合并或者筛选，但是不影响原表的（）和结构。',
            '',
            2
        ],

        [
            'elem', '\n\n\n7.2.2.5 \t 使用数据表索引', [0.96, 400],
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
            'JQ', '索引是对数据库表中一个或多个列（例如，emplovee表的姓名(name)列)的值进行排序的结构。',
            ud, 3
        ],
        [
            'JQ', '通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。',
            ud, 2
        ],
        [
            'JQ', '在使用分组和排序子句进行数据检索时，没办法减少查询中分组和排序的时间。',
            ud, 3
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '以下哪种说法是错误的。（）（原题选项无索引）',
            [
                '在数据库建立过程中，不需要花费较多的时间去建立并维护索引。',
                '\n在数据库中创建的索引需要占用一定的物理存储空间，\n\t这其中就包括数据表所占的数据空间以及所创建的每一个索引所占用的物理空间，\n\t如果有必要建立起聚簇索引，所占用的空间还将进一步的增加',
                '\n在对表中的数据进行修改时，例如对其进行增加、册除或者是修改操作时，\n\t索引还需要进行动态的维护，这给数据库的维护速度带来了一定的麻烦。'
            ],
            ud, 3
        ],
        [
            'CQ', '以下哪—项代码是用来创建索引的。（）',
            ['CreateTable', 'CreateIndex', 'CreateDatabase', 'CreateCursor'],
            ud, 2
        ],
        [
            'CQ', '以下哪一项不属于表分区的好处。（）',
            ['存储更多数据', '优化查询', '分区表维护困难', '避免某些特殊的瓶颈中'],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'MCQ', '以下哪些是可以在数据库中创建的索引。（）',
            ['复合索引', '唯一索引', '主键索引', '聚集索引'],
            [],
            4
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '数据库索引好比是一本书后的索引，能（）数据库的查询速度。',
            '',
            2
        ],
        [
            '索引分为聚簇索引和非聚簇索引两种，（）是按照数据存放的物理位置为顺序的。',
            '',
            3
        ],
    ]);
    Q_KV_module([
        ['elem', '\n\nPart_06', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width','90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],
        [
            'elem', '\n\n\n7.2.2.6 \t 使用T-SQL语言进行查询', [0.96, 400],
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
            'JQ', 'SELECT语句中WHERE子句和HAVING子句的作用是一致的。',
            ud, 2
        ],
        [
            'JQ', '在查询中很少被引用的列上创建索引可以极大的提高查询性能。',
            ud, 2
        ],
        [
            'JQ', '如果使用别名来代表一个表，那么在定义别名后的所有查询语句中，都必须使用别名来代表表的全名，否则系统会出错。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '数据查询语句SELECT的语法中，必不可少的子句是()；',
            ['SELECT 和 WERE', 'SELECT 和 FROM', 'FROMD', 'SELECT'],
            ud, 2
        ],
        [
            'CQ', 'SQL语言的数据操纵语言包括SELECT, INSERT, UPDATE和DELETE等，其中最重要的也是使用最频繁的语句是()。',
            ['SELECT', 'INSERT', 'UPDATE', 'DELETE'],
            ud, 2
        ],
        [
            'CQ', pre(`
有这样三个表:\n
\t学生表S、课程表c和学生选课表SC，
\t它们的结构如下，
\tS:S#，SN，SEX，AGE，DEPT、C:C#，CN、SC:S#，C#，GRADE。\n
\t其中:S#为学号，SN为姓名，SEX为性别，AGE为年龄，DEFT为系别，C#为课程号，CN为课程名，GRADE为成绩。
\t要求如下:检索所有比"王华"年龄大的学生姓名、年龄和性别。正确的SELECT语句是()。
\n`),
            [
                'SELECT SN,AGE,SEX FROM S WHERE AGE>(SELECT AGE FROM S WHERE SN = "王华")',
                'SELECT SN,AGE,SEX FROM S HHERE SN = "王华"',
                'SELECT SN,AGE,SEX FROM S WHERE AGE>(SELECT AGE WHERE SN = "王华")',
                'SELECT SN,AGE,SEX FROM S WHERE AGE>王华.AGE'
            ],
            ud, 2
        ],
        [
            'CQ', 'SQL语言具有两种使用方式，分别称为交互式SQL和() 。',
            ['提示式SQL', '多用户SQL', '嵌入式SQL', '解释式SQL'],
            ud, 2
        ],
        [
            'CQ', '在SQL SERVER中，与WERE G BETWEEN60AND100语句等价的子句是()。',
            [
                'WHERE G>60 AND G<100',
                'WHERE G>=60 AND G<100',
                'WHERE G>60 AND G<=100',
                'WHERE G>=60 AND G<=100'
            ],
            ud, 2
        ],
        [
            'CQ', '在SQL SERVER中，WHERE子句的模糊查询条件表达式里,可以匹配零至多个字符的通配符是()。',
            ['%', '*', '_', '?'],
            ud, 2
        ],
        [
            'CQ', '在SQL SERVER中,已知执行语句:Selectcount (price) , sum (price) fromprice返回的结果是10和750，那么执行语句: Selectavg (price) fronmprice，返回的结果是()。',
            ['5', '75', '1500', '750'],
            ud, 2
        ],
        [
            'CQ', '在SELECT语句中正确的语法顺序如下()。',
            [
                'where，having，groupby，orderby',
                'having，where，groupby，orderby',
                'where，orderby，groupby，having',
                'where，groupby，having，orderby'
            ],
            ud, 2
        ],
        ['elem', '\n\n\n\n', [0.96, 400]],
    ]);
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