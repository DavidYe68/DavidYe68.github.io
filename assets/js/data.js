const data = {
  profile: {
    name: "David Ye",
    title_en: "Sociology & AI Student",
    title_zh: "社会学 + 人工智能 双学位学生",
    university_en: "Fudan University",
    university_zh: "复旦大学",
    bio_en: `I’m a Sociology and Artificial Intelligence double-degree student at Fudan University. I’ve long been interested in capitalism and the structural tensions of modern society, and most of my regular reading focuses on Marxism—especially Western Marxism.
    I’ve read works such as <i>The German Ideology</i> and <i>Capital</i> by Marx, as well as key Western Marxist texts like <i>History and Class Consciousness</i>, <i>Dialectic of Enlightenment</i>, and <i>For Marx</i>.
    <br><br>
    Drawing on my background in AI, I also think a lot about the relationship between algorithms, data, and social structures, and I plan to keep moving forward along this combined path of “social theory + technology studies.” What I want is not just to run models or do statistics, but to situate technological questions within their broader social context. In the future, I hope to use this perspective to study contemporary capitalism in a more systematic way.`,
    bio_zh: `我是复旦大学社会学 + 人工智能双学位的学生。一直以来，我都对资本主义、现代社会的结构和矛盾特别感兴趣，平日主要阅读马克思主义，尤其是西方马克思主义的相关著作。
    阅读过包括《德意志意识形态》《资本论》等马克思本人的著作，以及《历史与阶级意识》《启蒙辩证法》《保卫马克思》等西方马克思主义著作。
    <br><br>
    我也会结合自己的 AI 背景去思考算法、数据和社会结构之间的关系，继续沿着“社会理论 + 技术研究”这条路往下走。我想做的不是单纯跑模型或做统计，而是把技术问题放回社会脉络里去理解。未来也希望能沿着“社会理论 + 技术研究”这条路径研究当代资本主义。`
  },
  academic: {
    term_en: "2025-2026 Fall Semester",
    term_zh: "2025-2026 学年第一学期",
    gpa: "3.95",
    note_en: "Last-semester GPA. Detailed grades are no longer public on this site.",
    note_zh: "上学期绩点为 3.95，详细成绩已不再公开展示。",
    metrics: [
      {
        value_en: "Double Degree",
        value_zh: "双学位",
        label_en: "Sociology + Artificial Intelligence",
        label_zh: "社会学 + 人工智能"
      },
      {
        value_en: "Theory + Computation",
        value_zh: "理论 + 计算",
        label_en: "Long-term research direction",
        label_zh: "长期研究方向"
      },
      {
        value_en: "Fudan University",
        value_zh: "复旦大学",
        label_en: "Academic base",
        label_zh: "学习与研究基础"
      }
    ]
  },
  curriculum: [
    {
      category_en: "Sociology & Social Sciences",
      category_zh: "社会学与社科基础",
      courses: [
        { en: "Introduction to Sociology", zh: "社会学导论", credits: 3, hours: 3, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "Completed", status_zh: "已经修读", grade: "A-", gpa: "3.729" },
        { en: "Principles of Economics", zh: "经济学原理", credits: 3, hours: 3, dept_zh: "经济学院", dept_en: "School of Economics", status_en: "Completed", status_zh: "已经修读", grade: "A", gpa: "4.0" },
        { en: "Principles of Political Science", zh: "政治学原理", credits: 3, hours: 3, dept_zh: "国务学院", dept_en: "SIRPA", status_en: "Completed", status_zh: "已经修读", grade: "A-", gpa: "3.75" },
        { en: "Introduction to Law", zh: "法理学导论", credits: 3, hours: 3, dept_zh: "法学院", dept_en: "Law School", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Microeconomics", zh: "微观经济学", credits: 3, hours: 3, dept_zh: "经济学院", dept_en: "School of Economics", status_en: "Completed", status_zh: "已经修读", grade: "A", gpa: "4.0" },
        { en: "Macroeconomics", zh: "宏观经济学", credits: 3, hours: 3, dept_zh: "经济学院", dept_en: "School of Economics", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Social Research Methods A", zh: "社会研究方法A", credits: 3, hours: 3, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "Completed", status_zh: "已经修读", grade: "A", gpa: "4.0" },
        { en: "Classical Sociological Theory", zh: "古典社会学理论", credits: 3, hours: 3, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "In Progress", status_zh: "正在修读", grade: "", gpa: "" },
        { en: "History of Western Social Thought", zh: "西方社会思想史", credits: 2, hours: 2, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "In Progress", status_zh: "正在修读", grade: "", gpa: "" },
        { en: "Contemporary Sociological Theory", zh: "当代社会学理论", credits: 3, hours: 3, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Qualitative Research Methods", zh: "质性研究方法", credits: 3, hours: 3, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Social Survey Methods", zh: "社会调查方法", credits: 3, hours: 3, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Economic Sociology", zh: "经济社会学", credits: 2, hours: 2, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "In Progress", status_zh: "正在修读", grade: "", gpa: "" },
        { en: "Organizational Sociology", zh: "组织社会学", credits: 2, hours: 2, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Marriage and Family", zh: "婚姻与家庭", credits: 2, hours: 2, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Social Stratification and Mobility", zh: "社会分层与流动", credits: 3, hours: 3, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Chinese Society", zh: "中国社会", credits: 2, hours: 2, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Cultural Sociology", zh: "文化社会学", credits: 2, hours: 2, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "In Progress", status_zh: "正在修读", grade: "", gpa: "" },
        { en: "Internet and Society Research", zh: "互联网与社会研究", credits: 4, hours: 4, dept_zh: "社会学院", dept_en: "School of Sociology", status_en: "", status_zh: "", grade: "", gpa: "" }
      ]
    },
    {
      category_en: "Artificial Intelligence & Computer Science",
      category_zh: "人工智能与计算机科学",
      courses: [
        { en: "Advanced Mathematics A (I)", zh: "高等数学A（上）", credits: 5, hours: 6, dept_zh: "数学学院", dept_en: "School of Math", status_en: "Completed", status_zh: "已经修读", grade: "A", gpa: "4.0" },
        { en: "Advanced Mathematics A (II)", zh: "高等数学A（下）", credits: 5, hours: 6, dept_zh: "数学学院", dept_en: "School of Math", status_en: "Completed", status_zh: "已经修读", grade: "A", gpa: "4.0" },
        { en: "Linear Algebra", zh: "线性代数", credits: 3, hours: 4, dept_zh: "数学学院", dept_en: "School of Math", status_en: "Completed", status_zh: "已经修读", grade: "A", gpa: "4.0" },
        { en: "Programming Design", zh: "程序设计", credits: 4, hours: 5, dept_zh: "计算机学院", dept_en: "School of CS", status_en: "Completed", status_zh: "已经修读", grade: "A", gpa: "4.0" },
        { en: "Programming Foundation for AI", zh: "人工智能的编程基础", credits: 2, hours: 2, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "Completed", status_zh: "已经修读", grade: "A", gpa: "4.0" },
        { en: "Data Structures", zh: "数据结构", credits: 4, hours: 5, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "In Progress", status_zh: "正在修读", grade: "", gpa: "" },
        { en: "Mathematical Foundation for AI", zh: "人工智能的数学基础", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Computer Systems Foundation", zh: "计算机系统基础", credits: 3, hours: 5, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "In Progress", status_zh: "正在修读", grade: "", gpa: "" },
        { en: "Introduction to AI", zh: "人工智能导论", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Software Foundation for AI", zh: "人工智能的软件基础", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Pattern Recognition and Machine Learning", zh: "模式识别与机器学习", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "AI Security", zh: "人工智能安全", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Ethics and Governance of AI", zh: "人工智能的伦理与治理", credits: 2, hours: 3, dept_zh: "大数据学院", dept_en: "School of Data Science", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Natural Language Processing and LLMs", zh: "自然语言处理和大语言模型", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Computer Vision", zh: "计算机视觉", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Advanced AI Practice", zh: "人工智能前沿探索实践", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "AI Institute", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Set Theory and Graph Theory", zh: "集合与图论", credits: 3, hours: 3, dept_zh: "计算机学院", dept_en: "School of CS", status_en: "In Progress", status_zh: "正在修读", grade: "", gpa: "" },
        { en: "Introduction to Databases", zh: "数据库引论", credits: 2, hours: 2, dept_zh: "计算机学院", dept_en: "School of CS", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Computer Networks", zh: "计算机网络", credits: 2, hours: 2, dept_zh: "计算机学院", dept_en: "School of CS", status_en: "", status_zh: "", grade: "", gpa: "" }
      ]
    },
    {
      category_en: "Philosophy",
      category_zh: "哲学",
      courses: [
        { en: "Introduction to Religious Studies", zh: "宗教学导论", credits: 2, hours: 2, dept_zh: "哲学学院", dept_en: "School of Philosophy", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Philosophy Reading and Writing", zh: "哲学阅读与写作", credits: 2, hours: 2, dept_zh: "哲学学院", dept_en: "School of Philosophy", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Foundations of Ethics", zh: "伦理学基础", credits: 2, hours: 2, dept_zh: "哲学学院", dept_en: "School of Philosophy", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "History of Western Philosophy (I)", zh: "西方哲学史（上）", credits: 3, hours: 3, dept_zh: "哲学学院", dept_en: "School of Philosophy", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "History of Western Philosophy (II)", zh: "西方哲学史（下）", credits: 3, hours: 3, dept_zh: "哲学学院", dept_en: "School of Philosophy", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Introduction to Marxist Philosophy", zh: "马克思主义哲学导论", credits: 2, hours: 2, dept_zh: "哲学学院", dept_en: "School of Philosophy", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "History of Marxist Philosophy", zh: "马克思主义哲学史", credits: 3, hours: 3, dept_zh: "哲学学院", dept_en: "School of Philosophy", status_en: "", status_zh: "", grade: "", gpa: "" },
        { en: "Introduction to Western Marxism", zh: "西方马克思主义哲学导论", credits: 3, hours: 3, dept_zh: "哲学学院", dept_en: "School of Philosophy", status_en: "In Progress", status_zh: "正在修读", grade: "", gpa: "" }
      ]
    }
  ],
  projects: [
    {
      title_en: "AI Attitude Data Pipeline",
      title_zh: "AI_attitude 数据流水线",
      period_en: "Independent project",
      period_zh: "独立项目",
      desc_en: "Built a unified pipeline for large-scale AI-related Weibo data: raw CSV discovery, incremental deduplication, preprocessing, stratified sampling, and local-LLM labeling.",
      desc_zh: "为 AI 相关微博语料搭建统一数据流水线，覆盖原始 CSV 发现、增量去重、文本预处理、分层抽样与本地大模型标注。",
      highlights_en: [
        "Full rebuild processed 6,303 raw files and 9.53M rows.",
        "Produced 8.05M ID-deduplicated rows and 8.04M preprocessed rows.",
        "Finished 6,000 / 6,000 local labels with structured run reports."
      ],
      highlights_zh: [
        "一次全量重建处理了 6,303 个原始文件、952 万行数据。",
        "产出 805 万条按 ID 去重数据和 804 万条预处理结果。",
        "完成 6,000 / 6,000 条本地大模型标注，并保留结构化运行报告。"
      ],
      tags_en: ["Python", "Parquet", "Ollama", "LLM Labeling"],
      tags_zh: ["Python", "Parquet", "Ollama", "本地大模型标注"]
    },
    {
      title_en: "Tangping Discourse Research Pipeline",
      title_zh: "“躺平”话语研究流水线",
      period_en: "Research project",
      period_zh: "研究项目",
      desc_en: "Adapted the AI_attitude engineering pattern to a Tangping corpus, keeping the same raw/data/state/reports structure for discourse analysis and local classification.",
      desc_zh: "将 AI_attitude 的工程化结构迁移到“躺平”语料，沿用 raw/data/state/reports 体系，服务于话语分析和本地分类标注。",
      highlights_en: [
        "Supports incremental processing from keyword-based raw corpora.",
        "Separates merged, preprocessed, and text-deduplicated parquet datasets.",
        "Uses local LLMs to classify whether posts are Tangping-related."
      ],
      highlights_zh: [
        "支持从关键词语料出发的增量式数据处理。",
        "将合并结果、预处理结果与文本去重结果拆分为独立 parquet 数据集。",
        "使用本地大模型判断帖子是否“躺平相关”。"
      ],
      tags_en: ["Computational Sociology", "Corpus Pipeline", "Local LLM", "Weibo"],
      tags_zh: ["计算社会学", "语料流水线", "本地大模型", "微博"]
    }
  ]
};
