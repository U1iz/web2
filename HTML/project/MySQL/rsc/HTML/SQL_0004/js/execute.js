(function () {
    let fileDate = '2022-04-11';
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
        ['elem', '\n\nPart_07', [1.6, 400, '0.32rem'],
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
            'MCQ', '面的语句执行时不会出现错误的有()。',
            [
                'SELECT ename, job, sal FROM EMP WHERE deptno ALL (SELECT deptno FROM dept WHERE dname LIKE‘A%’);',
                'SELECT ename, job, sal FROM EMP WHERE deptno=ANY (SELECT deptno FROM dept WHERE dname LIKE‘A%’);',
                'SELECT ename, job, sal FROM EMP WHERE deptno ANY (SELECT deptno FROM dept WHERE dname LIKE‘A%’);',
                'SELECT ename. job, sal FROM EMP WHERE deptno IN |(SELECT deptno FROM dept WHERE dname LIKE‘A%’);'
            ],
            [],
            2
        ],
        [
            'MCQ', '数据库中有两张表student: stuid stuname, stuage、score: stuid subject, marks.请分析下面哪些查询可查找出参加过考试的学生姓名()?',
            [
                'Select stuname from student where stuid in (select stuid from score)',
                'Select stuname from student, score where student.stuid = score.stuid',
                'select stuname from student left outer join score on student.stuid = score.stuid',
                'Select stuname from student where exists (select * from score where student.stuid = score.stuid)'
            ],
            [],
            2
        ],
        [
            'MCQ', '关于子查询，以下说法正确的是()。',
            [
                '一般来说，表连接都可以用子查询替换', '一般来说，子查询都可以用表连接替换',
                '相对于表连接，子查询适合于作为查询的筛选条件', '相对于表连接，子查询适合于查看对表的数据'
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
            'Select查询语句查询的结果被存储在一个结果表中称为()。',
            '',
            2
        ],
        [
            '在Select语句中，如果要从某个列中仅选取唯一不同的值，我们需要添加()关键字。',
            '',
            2
        ],

        [
            'elem', '\n\n\n7.3 \t 数据库管理系统维护', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        [
            'elem', '7.3.1 \t 数据库管理', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        [
            'elem', '7-3.1-1 \t 数据库的安装、配置、调优', [0.96, 400],
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
            'JQ', '数据库的优化中应尽量避免在where子句中对字段进行null值判断，否则将导致引擎放弃使用索引而进行全表扫描。',
            ud, 2
        ],
        [
            'JQ', '多表连接查询，查询期间占用多个表不会造成事务占用资源的时间过长，从而导致数据阻塞。',
            ud, 2
        ],
        [
            'JQ', 'SELECTINOT语句会导致表锁定，阻止其他用户访问该表。SELECTINOT语句会导致表锁定，阻止其他用户访问该表。',
            ud, 2
        ],


        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '针对不合理的数据文件设置，影响事务处理的性能，以下哪一项符合这个说法。()',
            [
                '频繁操作数据库，导致日志文件增长过快。',
                '查询操作比较频繁，系统数据库Tempadb的大小设置不合理',
                '大量插入数据，导致数据文件增长过快。',
                '以上都是。'
            ],
            ud, 2
        ],
        [
            'CQ', '以下哪项操作不可以用来优化数据库()。',
            [
                '使用非关键字段建立索引。',
                '使用存储过程。',
                '备份数据库和清除垃圾数据。',
                'sql语句语法的优化。'
            ],
            ud, 2
        ],
        [
            'CQ', '在与应用程序交换数据时，在数据库服务器上需要额外的CPU资源来压缩和解压缩数据。您可以在以下数据库对象上配置行和页压缩。()',
            [
                '存储为堆的整个表。',
                '存储为聚集索引的整个表。',
                '整个非聚集索引。',
                '以上都是'
            ],
            ud, 2
        ],
        [
            'CQ', '以下哪一项可以用来优化数据库性能。',
            [
                '减少数据的访问',
                '减少交互次数',
                '减少CPU及内存开销',
                '以上都是'
            ],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '以下哪些操作可以提高教据库的安全性()。',
            [
                '关闭不必要的端口', '关闭非必要的服务',
                '禁止不使用的协议', '安全的设置账户'
            ],
            [],
            2
        ],
        [
            'MCQ', '以下哪几项技术可以用来优化数据库性能()。',
            [
                '调整应用程序结构设计', '调整数据库结构设计',
                '调整数据库SQL语句', '调整服务器内存分配'
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
            '为保障Access数据的安全性，建议把Access数据库重命名成一个比较复杂的名字，不要使用默认的()扩展名。',
            '',
            2
        ],
        [
            '如果使用到了临时表，在存储过程的最后务必将所有的临时表显式册除，先()，然后droptable，这样可以避免系统表的较长时间锁定。',
            '',
            2
        ],
        [
            '数据库生命周期管理()是一种基于策略的方法，用于管理()和数据资产。',
            '',
            2
        ],
        [
            '每个SQL SERVER数据库都具有()，用于记录所有事务以及每个事务对数据库所做的修改。',
            '',
            2
        ],
        [
            'elem', '\n\n\n7.3.1.2 \t 导入和导出数据库', [0.96, 400],
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
            'JQ', '在目标数据库导入时需要创建与导出时相同的用户名(尽量一致)，并赋予不低于导出时用户的权限。',
            ud, 2
        ],
        [
            'JQ', '在导入数据库时，若本地数据库已存在相同的表空间，则只能进行表空间扩充。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '现在需要将数据导入到 SQL Server 数据库，并且已经开始接收包含记录全国各商店销售事务的文本文件，每列中的数据使用分号分隔。如何将文件导入到销售数据库中?()',
            [
                '创建一个自定义格式文件，指定分号为行终止符。',
                '使用bcp命令，指定分号为字段终止符。',
                '使用含有默认参数的bcp命令。',
                '使用含有默认参数的 BULK INSERT语句。'
            ],
            ud, 2
        ],
        [
            'CQ', '地方销售办事处需要将SQL Server数据库的数据进行导入导出。现在总部要求提供一份包含地方销售办事处所在区域的最新客户联系信息的文本文件。总部的数据库管理员要求按照州/省、姓和名排序数据列。如何操作?()',
            [
                '在bcp out命令的ORDER提示中指定州/省、姓和名',
                '创建一个导出操作的格式文件。',
                '在bcpqueryout命令的ORDER BY子句中指定州/省、姓和名',
                '将数据复制到含有州/省、姓和名的聚集索引的新表中。导出数据。'
            ],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '以下哪些类型的数据文件可以导入导出到SQL SERVER数据库中()。',
            [
                'SQL SERVER', '文本文件',
                'Accs、Excel', '其他OLEDB访问接口'
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
            '如果向目标教据库或文件写入数据，需要对目标表具有（）权限。',
            '',
            2
        ],
    ]);
    Q_KV_module([
        ['elem', '\n\nPart_08', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width','90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],

        [
            'elem', '\n\n\n7.3.2 \t 数据库维护', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        [
            'elem', '7.3.2.1 \t 备份和恢复数据库', [0.96, 400],
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
            'JQ', '在恢复数据库之前，如果数据库的日志文件没有损坏，则为尽可能减少数据的丢失,可在恢复之前对数据库进行一次日志备份（称为日志尾部备份），这样就可以将数据的损失减少到最小。',
            ud, 2
        ],
        [
            'JQ', '差异备份是相对完整备份之后对数据库所做的全部修改。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '在SQL SERVER中，用户应备份如下内容:()。',
            [
                '记录用户数据的所有用户数据库',
                '记录系统信息的系统数据库',
                '记录数据库改变的事务日志',
                '以上所有'
            ],
            ud, 2
        ],
        [
            'CQ', 'SQL SERVER系统提供了四种备份方法类型，来满足企业和数据库活动的各种需要。这四种备份方法是:完全数据库备份、增量备份、事务日志备份、数据库文件或者文件组备份。其中当恢复()时，你能执行定点数据库恢复。',
            ['完全数据库备份', '增量备份', '事务日志备份', '数据库文件和文件组备份'],
            ud, 2
        ],
        [
            'CQ', 'SQL SERVER备份是动态的，这意味着()。',
            [
                '你不必计划备份工作，SQL SERVER会自动为你完成。',
                '允许用户在备份的同时访问数据。',
                '不允许用户在备份的同时访问数据库。',
                '备份要不换地进行。'
            ],
            ud, 2
        ],
        [
            'CQ', 'SQL SERVER恢复过程是静态的，这意味着（）。',
            [
                '在数据库恢复过程中，用户不能进入数据库。',
                '在数据库恢复过程中，用户可以访问数据库，但不能更新数据库。',
                '在数据库恢复过程中，用户可以对数据库进行任何操作。',
                '以上解释均不对。'
            ],
            ud, 2
        ],
        [
            'CQ', '在SQL SERVER中提供了四种数据库备份和恢复的方式，其中（）备份是指将从最近—次全库备份结束以来所有改变的数据库备份到数据库。',
            [
                '完全数据库备份',
                '增量备份',
                '事务日志备份',
                '数据库文件和文件组备份'
            ],
            ud, 2
        ],
        [
            'CQ', '恢复数据库可以有如下操作，（1）恢复最近的完整数据库备份。（2）恢复完整备份之后的最近的差异数据库备份（如果有差异备份)。（3）按事务日志备份的先后顺序恢复自完整备份或差异备份之后的所有日志备份，其中正确的顺序是。',
            [
                '3、2、1', '1、2、3',
                '3、1、2', '2、1、3'
            ],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '备份设备即用来存放备份数据库的物理设备，在SQLSERVER中可以使用以下哪几种备份设备。()',
            ['磁盘', '软盘', '磁带', '名命管道'],
            [],
            2
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            '恢复的基本原则是()。要使数据库具有可恢复性，在平时要做好两件事:()和()。',
            '',
            2
        ],
        [
            '()就是制作数据库结构、对象和数据的拷贝，以便在数据库遭到破坏的时候能够恢复数据库。',
            '',
            2
        ],
        [
            '使用数据库维护计划向导可以安排好对服务器中每一个数据库的备份时间表，这样可以使备份完全()执行，很少或不重萝操作品的干预。',
            '',
            2
        ],

        [
            'elem', '7.3.2.2 \t 监控数据库数据', [0.96, 400],
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
            'JQ', '触发器是在对表进行插入、更新或删除操作时自动执行的存储过程。',
            ud, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', 'SQL Server数据库服务器当中某些作业每周日运行，其他作业每月月初运行。如何才能够简化管理?',
            [
                '创建一个作业计划，每周日运行一次。按周为此计划分配任务。创建另一个计划，每月第一天运行。按月为此计划分配任务。',
                '为每个任务创建一个作业，每天运行一次。使用Transact-SQL语句，检查日期和星期。如果为周日或每月的第一天，则执行此代码。',
                '创建一个作业计划，每天运行一次。将作业分配给作业计划。如果为周日或每月的第一天，则执行此作业。',
                '为每个任务创建一个作业，每周日运行一次。添加另一个作业计划，在每月第一天运行作业。'
            ],
            ud, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '现在需要从名为SQL1的服务器向名为SQL2的服务器传送DB1数据库的事务日志。由于DB1的大小高达100 GB，因此无法在合理的时间内通过网络传输。因此需要在初始化辅助数据库时尽量减少对网络造成的影响。应当如何操作?(双选）()',
            [
                '为DB1指定简单恢复模式。',
                '为DB1指定完全恢复模式或大容量恢复模式。',
                '使用便携式介质完成对DB1的备份。从备份恢复辅助数据库指定RECOVERY选项。',
                '使用便携式介质完成对 DB1的备份。从备份恢复辅助数据库指定STANDBY选项。'
            ],
            [],
            2
        ],
        [
            'MCQ', 'SQL Server的MSSQL SERVER 服务无法启动。现在需要找到问题的原因所在。应该执行以下哪三项操作?()',
            [
                '在“事件查看器”中查看系统日志。',
                '在“事件查看器”中查看应用程序日志。',
                '使用记事本查看C:\\Program Files\\Microsoft SQL Server \\MSSQL.1 \\MSSQL\\LOG\\ErrorLog.1文件。',
                '使用记事本查看C:\\Program Files\\Microsoft SQL Server\\MSSQL.1\\MSSQL \\LOG\\ErrorLog文件。'
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
            'DML触发器分为after触发器、insert触发器、update触发器()。',
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
['elem', '\n\nPart_06', [1.6, 400, '0.32rem'],
    [
        ['position', 'relative'],
        ['left', '10%'],
        ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
        ['addClassName', 'questionsPart']
    ]
],

[]