(function () {
    let fileDate = '2022-03-14';
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
    if (sessionStorage.getItem('execute_all') === 'true') {} else {
        tit();
    }

    Q_KV_module([
        ['elem', '\n\nPart_01', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width','90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],
        ['elem', '\n\n\\c7 \t 数据库应用', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        ['elem', '7.1 \t 用户需求分析', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        ['elem', '7.1.1 \t 用户数据需求分析', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        ['elem', '7.1.1.1 \t 理顺用户对数据应用的需求', [0.96, 400],
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
        ['JQ', '委托开发的一个' + b(i('关键问题')) + '是要解决' + u(b('技术人员与企业的业务人员')) + '之间的' + b(i('沟通问题')) + '。', 1, 1],
        ['JQ', '数据内容即是数据项', 1, 2],
        ['JQ', '关系型数据库是' + u(b('目前最受欢迎的数据库管理系统')) + '，技术比较成熟', 1, 2],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        ['CQ', b('数据字典') + '是用来定义( )中的各个成份的具体含义的。', ['流程图', '功能结构图', '系统结构图', '数据流图'], 4, 3],
        ['CQ', '数据库' + b('设计过程中') + '，需求分析包括', ['信息需求', '处理需求', '安全性和完整性需求', '以上全包'], 4, 2],


        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        ['MCQ', '数据库设计可以分为', ['需求分析', '概念设计', '逻辑设计', '物理设计'],
            [1, 2, 3, 4], 1
        ],
        ['MCQ', '常见的关系型数据库有', ['mysql', 'SQL  SERVER', 'Oracle', 'Java'],
            [1, 2, 3], 1
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        ['( )是' + b('长期存储在计算机内的、有组织、可共享的数据集合') + '。', '数据库', 1],
        ['对于计算机程序处理的数据，其数据域应包括数据流、( )和数据结构。', '数据内容', 1],
        ['elem', '\n\n\\c7.1.1.2 \t 分析用户对数据的需求', [0.96, 400],
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
        ['JQ', '在数据库领域内，常常把使用数据库的各类系统统称为' + u(i('数据库应用系统')) + '。', 1, 2],
        ['JQ', '关系型数据库中的数据具有' + u(i('共享性')) + '，使数据库中的数据能为多个用户服务。', 1, 4],
        ['JQ', '关系数据库' + u(b('不允许')) + '多个用户' + b('同时') + '访问。', 0, 1],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'CQ', '学生社团可以接纳' + b('多名') + '学生参加，但每个学生只能参加' + b('一个') + '社团，从社团到学生之间的联系类型是( )',
            ['多对多', '一对多', '多对一', '一对一'], 2, 3
        ],
        [
            'CQ', '在数据库系统中，把可以' + b('相互区别的客观事物') + '称为( )',
            ['属性', '字段', '文件', '实体'], 4, 2
        ],
        [
            'CQ', '应用数据库的' + b(u(i('主要目的'))) + '是( )',
            ['解决数据保密问题', '解决数据完整性问题', '解决数据共享问题', '解决数据量大的问题'], 3, 5
        ],
        [
            'CQ', '在数据管理技术的发展过程中，经历了' + b(i('人工管理阶段')) + '、' + b(i('文件系统阶段')) + '和' + b(i('数据库系统阶段')) + '。在这几个阶段中，' + b(i('数据独立性最高')) + '的是( ) 阶段。' + bf(s(i('(与第 23 题相仿)')), '0.64rem'),
            ['数据库系统', '文件系统', '人工管理', '数据项管理'], 1, 1
        ],
        [
            'CQ', '数据库系统与文件系统的主要区别是( )',
            [
                '数据库系统复杂，而文件系统简单。',
                '文件系统不能解决数据冗余和数据独立性问题，而数据库系统可以解决。',
                '文件系统只能管理程序文件，而数据库系统能够管理各种类型的文件。',
                '文件系统管理的数据量较少，而数据库系统可以管理庞大的数据量。'
            ],
            2, 5
        ],
        [
            'CQ', '在数据库中，下列说法( ) 是' + b(u('不正确')) + '的。',
            ['数据库避免了' + b(u('一切')) + '数据的重复', '若系统是完全可以控制的，则系统可确保更新时的一致性',
                '数据库中的数据可以共享', '数据库减少了数据冗余'
            ], 1, 2
        ],
        [
            'CQ', '按' + b(u(i('所使用的数据模型'))) + '来分，数据库可分为( )三种类型。',
            ['层次、关系和网状', '网状、环状和链状', '大型、中型和小型', '独享、共享和分时'], 1, 2
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'MCQ', '在数据库设计的' + b(i('需求分析阶段')) + '，数据字典通常由( )和处理过程等部分组成。',
            ['数据项', '数据结构', '数据流', '数据存储'],
            [1, 2, 3, 4], 4
        ],
        [
            'MCQ', '数据库的' + b(i('基本特点')) + '是( )',
            ['数据结构化，可以共享', '数据独立于具体的应用程序而存在', '数据冗余小，易扩充', '统一管理和控制'],
            [1, 2, 3, 4], 2
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        ['数据在两个或更多文件中' + b(u(i('重复出现'))) + '称为( ), ' + b('在数据更新时可能导致数据异常、数据不一致性等错误。'), '数据冗余', 2],
        ['在数据管理技术的发展过程中，经历了人工管理阶段，文件系统阶段和数据库系统阶段，在这几个阶段中，数据的独立性是（ ）阶段实现的。' + bf(s(i('(与第 16 题相仿)')), '0.64rem'), '数据库系统', 2],

        ['elem', '\n\n\\c 7.1.2 \t 数据模型优化', [0.96, 400],
            [
                ['position', 'relative'],
                ['left', '-1.6rem'],
                ['addClassName', 'questionChapter']
            ]
        ],
        ['elem', '7.1.2.1 \t 绘制E-R图', [0.96, 400],
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
            'JQ', '实体是指' + u(i('现实世界客观存在')) + '的事物，' + u(i('概念性')) + '的事物不能叫做实体。',
            0, 7
        ],
        [
            'JQ', '属性是指实体具有的某种特性或若干方面的特性。',
            1, 1
        ],
        [
            'JQ', '事物之间往往存在某种' + i(u('自然联系')) + '，这种联系不能叫' + i(u('实体')) + '。',
            0, 8
        ],
        [
            'JQ', 'Ｅ－Ｒ图在概念上表示了一个' + b(u(i('数据库的信息组织情况'))) + '，Ｅ－Ｒ图包括了' + b(u('实体、属性、联系')) + '三种基本图素。',
            1, 2
        ],
        [
            'JQ', '表示两个实体之间的一对多的关联关系，是强制的关系，关联关系右侧实体的数据必须依赖左侧实体的数据而存在。',
            0, 5
        ],
        [
            'JQ', 'E-R图中' + b(i('矩形框表示联系')) + '。',
            0, 2
        ],
        [
            'JQ', 'E-R图中' + b(i('椭圆形框表示实体或联系的属性')) + '。',
            1, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '数据库的概念模型独立于( )',
            ['具体的机器和' + i(u('DBMS')), 'E-R图', '信息世界', '现实世界'], 1, 2
        ],
        [
            'CQ', 'E-R图是数据库设计的工具之一，它适用于建立数据库的( )',
            ['概念模型', '逻辑模型', '结构模型', '物理模型'], 1, 3
        ],
        [
            'CQ', '当局部E-R图合并成全局E-R图时可能出现冲突，不属于合并冲突的是',
            ['属性冲突', '语法冲突', '结构冲突', '命名冲突'], 2, 3
        ],
        [
            'CQ', '数据库概念设计的E-R方法中，用属性描述实体的特征，属性在E-R图中，用( )表示',
            ['矩形', '四边形', '菱形', '椭圆形'], 4, 2
        ],
        [
            'CQ', 'Ｅ－Ｒ图' + i('在概念上表示了一个数据库的信息组织情况') + '，Ｅ－Ｒ图包括了( ) 这几种基本图素。',
            ['实体、属性、联系', '实体、联系', '属性、联系', '实体集、属性、联系'], 1, 7
        ],

        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'MCQ', '由分E-R图生成初步E-R图，其' + b('主要任务') + '是( )',
            ['消除属性冲突', '消除结构冲突', '消除命名冲突', '消除数据重复'],
            [1, 2, 3], 2
        ],
        [
            'MCQ', b('实体') + '包括( )部分。',
            ['名称', '属性', '类型', '主键标识'],
            [1, 2, 4], 2
        ],
        [
            'MCQ', 'E-R图中有哪几个成分。( )',
            ['矩形框', '菱形框', '椭圆形框', '连线'],
            [1, 2, 3, 4], 2
        ],

        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'E-R图也称（ ），' + b(i('提供了表示实体类型、属性和联系的方法，用来描述现实世界的概念模型。')),
            ['实体-联系图'],
            7
        ],
        [
            b(i('实体属性')) + '有对应的（ ）、数据类型、是否可空、是否键值、取值范围等描述。',
            ['属性名称'],
            2
        ],
        [
            '一个学校只有一个正校长，而一个校长只在一个学校中任职，则学校与校长之间具有（ ）联系。',
            ['一对一'],
            2
        ],
        ['elem', '\n\n\n', ['6rem', 0],
            [
                ['MB', '0.32rem']
            ]
        ],
    ])

    Q_KV_module([
        ['elem', '\n\nPart_02', [1.6, 400, '0.32rem'],
            [
                ['position', 'relative'],
                ['left', '10%'],
                ['width','90%'],
                ['textShadow', 'rgb(0 0 255 / 20%) 0.1rem 0.1rem 0.24rem, rgb(51 51 34 / 13%) 0.16rem 0.16rem 0.32rem'],
                ['addClassName', 'questionsPart']
            ]
        ],
        ['elem', '\n\n\\cE-R图向关系图转换', [0.96, 400],
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
            'JQ', '由E-R图导出关系数据模型时，如两实体间是1: n联系，应把一方实体的关键字纳入另一方实体的关系中，同时把联系的属性也—并纳入另一方的关系中。',
            0, 2
        ],
        [
            'JQ', '关系数据库的规范化理论是数据库概念结构设计的有力工具; E-R模型是数据库的逻辑结构设计的一个有力工具。',
            0, 2
        ],
        [
            'JQ', '对于1:1的E-R图，实体的联系可以单独形成一个关系，关系的主码是任意1端的主码。',
            1, 2
        ],

        ['elem', '\n\t 单选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],
        [
            'CQ', '从E-R模型向关系模型转换时，一个M: N联系转换为关系模式时，该关系模式的码是( )',
            ['M端实体的码', 'N端实体的码', 'M端实体的码与N端实体的码的组合', '重新选取其他属性'],
            3, 8
        ],
        [
            'CQ', '自然连接是构成新关系的有效方法，一般情况下，当对关系R和S使用自然连接时，要求R和S含有一个或多个共有的( )',
            ['元祖', '行', '记录', '属性'],
            4, 3
        ],
        [
            'CQ', '候选码中的属性称为( )',
            ['非主属性', '主属性', '复合属性', '关键属性'],
            2, 3
        ],
        [
            'CQ', '任何一个实体都不是孤立存在的，实体之间的联系可以归结为一对一关系、一对多关系和多对多关系三种类型。那么行政区划与单位名称（假定唯一）之间是属于( ) 关系。',
            ['一对一', '一对多', '多对多', '以上三种都是'],
            2, 2
        ],
        [
            'CQ', '用树形结构来表示实体之间联系的模型称为层次模型，在层次模型中两个结点间的关系是( )关系。',
            ['一对一', '一对多', '多对多', '以上三种都可能'],
            2, 2
        ],
        [
            'CQ', '关系模型中，一个关键字( )。',
            ['可由多个任意属性组成', '至多由一个属性组成', '可由一个或多个其值能唯一标识该关系模式中任何元组的属性组成', '以上都不是'],
            3, 2
        ],
        [
            'CQ', '在一个关系中，如果有这样一个属性存在，它的值能唯一地标识关系中的每一个元组，称这个属性为',
            ['关键字', '数据项', '主属性', '主属性值'],
            1, 8
        ],
        [
            'CQ', '同一个关系中的任两个元祖值( )。',
            ['不能全同', '可以全同', '必须全同', '以上都不是'],
            1, 5
        ],
        [
            'CQ', '商店可经营多种商品，一种商品可由多家商店经营，商店和商品之间属于( )联系。',
            ['M：1', 'N：N', '1：M', '1：1'],
            2, 2
        ],
        ['elem', '\n\t 多选题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            'MCQ', '现有关系表:医疗（患者编号，医生编号，医生姓名，诊断日期，诊断结果，恢复情况）的主码是( )。',
            ['患者', '医生编号', '诊断日期', '诊断结果'],
            [1, 2, 3],
            2
        ],
        [
            'MCQ', '关系数据模型就是目前最重要的一种数据模型,它的三个要素分别就是( )。',
            ['数据结构', '外模式', '完整性约束', '关系操作'],
            [1, 3, 4],
            2
        ],


        ['elem', '\n\t 填空题', [0.96, 800],
            [
                ['MB', '0.32rem']
            ]
        ],

        [
            '对于1:1的E-R图，可以把任意一端的主码加入到另一端作为（）。',
            '外码',
            2
        ],
        [
            '已知系:系编号，系名称，系主任，申话，地点和学生:学号，姓名，性别，入学日期，专业，系编号两个关系，学生关系的主关键字是( )',
            '学号',
            2
        ],
        [
            '已知系:系编号，系名称，系主任，申话，地点和学生:学号，姓名，性别，入学日期，专业，系编号两个关系，学生关系的外关键字是( )',
            '系编号',
            2
        ],
        ['elem', '\n\n\n', ['6rem', 0],
            [
                ['MB', '0.32rem']
            ]
        ],
    ]);
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
    2, 2
],
[
    'JQ', '',
    1, 2
],


// 常规 list
[
    '',
    [],
    2, 'list'
],

['elem', 'string \t string', [0.96, 400],
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