/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "-0.5% generator cost": "-0.5% 发电机成本",
    ", an older incremental game.": "，一款较旧的增量游戏。",
    "About": "关于",
    "Achievement reached!": "成就达成！",
    "All time": "全部时间",
    "Alpha Version": "内测版",
    "and": "和",
    "Are you sure to want to ascend?": "你确定要转生吗？",
    "Are you sure to want to wipe your local data ?": "您确定要擦除本地数据吗？",
    "Ascend": "转生",
    "Ascend to restart with Omega and boosters": "转生以使用 欧米伽 和助推器重新启动",
    "Ascension": "转生",
    "Auto Research (< 1 millisecond)": "自动研究（< 1 毫秒）",
    "Beat the game by reaching Evolution #11": "达到进化 #11 通关游戏",
    "Boosters": "助推器",
    "Build": "建造",
    "Buy generators more and more": "越来越多地购买发电机",
    "Close": "关闭",
    "Congratulations": "恭喜",
    "Copy to clipboard": "复制到剪贴板",
    "Cosmos Quest": "宇宙探索",
    "current bonus": "当前奖金",
    "Data corrupted!": "数据损坏！",
    "Doubles production": "双倍生产",
    "Download TXT file": "下载 TXT 文件",
    "Energy": "能源",
    "Energy Idle": "能源放置",
    "energy produced": "产生的能源",
    "Energy spent in research": "花费在研究上的能源",
    "Evolve": "进化",
    "Evolve to upgrade Generator #0": "进化以升级 0 号发电机",
    "Flaticon": "Flaticon",
    "Fontawesome": "Fontawesome",
    "Freddec": "Freddec",
    "Game": "游戏",
    "Generators": "发电机",
    "Generators count": "发电机数量",
    "Generators max": "发电机上限",
    "Getting started": "入门",
    "Good luck!": "祝你好运！",
    "here": "这里",
    "Icons are provided by": "图标由提供",
    "Import save": "导入保存",
    "Increase base click": "增加基础点击",
    "Initializing game...": "正在初始化游戏...",
    "Local data": "本地数据",
    "Local data copied in clipboard!": "本地数据复制到剪贴板！",
    "love in the world by": "爱在世界上",
    "lvl": "等级",
    "Manually click to otain energy": "手动点击获取能源",
    "Max energy production": "最大能源产生",
    "Max energy stored": "最大储存能源",
    "No data to import!": "没有要导入的数据！",
    "Now you have the choice to continue playing in this game or to try another Freddec games": "现在您可以选择继续玩这款游戏或尝试其他 Freddec 游戏",
    "Offline Gains": "离线收益",
    "Offline time": "离线时间",
    "Omega": "欧米伽",
    "Play as your own risks!": "需自己承担风险！",
    "Production": "生产",
    "Research techs to improve generators": "研究科技以提升发电机",
    "Stats": "统计数据",
    "Techs": "科技",
    "This game has been designed and built with all the": "该游戏的设计和构建采用了所有",
    "This game is largely inspired by": "这个游戏的灵感主要来自",
    "This game is still under development with bugs and maybe data lost!": "该游戏仍在开发中，存在错误，可能会丢失数据！",
    "This run": "本轮游戏",
    "Time played": "游戏时长",
    "Time spent in research": "花在研究上的时间",
    "Total ascension count": "总转生次数",
    "Total clicks": "总点击次数",
    "Total energy clicked": "点击的总能源",
    "Total energy produced": "产生的总能源",
    "Total evolution count": "总进化次数",
    "Total omega gained": "获得的总欧米伽",
    "Total omega spent": "欧米伽总花费",
    "Total tech researched": "总技术研究",
    "Tutorial": "教程",
    "Victory": "胜利",
    "Welcome": "欢迎",
    "Welcome back!": "欢迎回来！",
    "Wipe": "擦拭",
    "Wipe Local Data": "擦除本地数据",
    "You beat the game!": "你赢了比赛！",
    "You were away": "你不在",
    "You will lose your progression but you will win": "你会失去你的进步，但你会获得",
    "You will lost all your progression and restart from the beginning.": "您将失去所有进度并从头开始。",
    "10% faster tech": "10% 更快的技术",
    "A new type of generator": "一种新型发电机",
    "Discovery": "发现",
    "Improve manual click": "提升手动点击",
    "Make a donation": "捐款",
    "Manual click gain": "手动点击增益",
    "MAX": "最大",
    "Double production": "双倍产量",
    "Double all productions": "双倍全部产量",
    "Improve all productions": "提升全部产量",
    "Locked": "未解锁",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^([\d\.,]+) ms$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) Generators \#([\d\.]+)$/, '$1 发电机 #$2'],
    [/^Improve Generator \#([\d\.]+)$/, '改进发电机 #$1'],
    [/^Generator \#([\d\.]+) next level$/, '发电机 #$1 下一级'],
    [/^Evolution \#([\d\.]+)$/, '进化 #$1'],
    [/^Evolution \#([\d\.]+)$/, '进化 #$1'],
    [/^Have ([\d\.]+) Generators \#([\d\.]+)$/, '拥有 $1 发电机 #$2'],
    [/^Generator \#([\d\.]+)$/, '发电机 #$1'],
    [/^Generator \#([\d\.]+) max$/, '发电机 #$1 上限'],
    [/^Generator \#([\d\.]+) count$/, '发电机 #$1 数量'],
    [/^Research ([\d\.]+) techs$/, '研究 $1 科技'],
    [/^Click ([\d\.]+) times$/, '点击 $1 次'],
    [/^Ascend ([\d\.]+) times$/, '转生 $1 次'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);