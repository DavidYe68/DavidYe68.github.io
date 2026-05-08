const data = {
  profile: {
    name: "David Ye",
    title_en: "Sociology & AI Student",
    title_zh: "社会学 + 人工智能 双学位学生",
    university_en: "Fudan University",
    university_zh: "复旦大学",
    bio_en: `I'm a Sociology and Artificial Intelligence double-degree student at Fudan University. I've long been concerned with capitalism and the structural contradictions of modern society. Theoretically, I'm primarily influenced by Western Marxism, especially Lukács and Adorno.
    <br><br>
    A central question for me is why positivism and scientism have come to dominate today's social sciences. To my mind, scientism and positivism are two sides of the same coin: scientism is an epistemology that tries to reduce the social world to an objective, data-graspable, quasi-natural world; positivism is the methodology that matches it.
    <br><br>
    For me, the AI degree is less about studying society in a more "scientific" way than about understanding what AI means for society. I still believe that any genuine grasp of the social requires restoring a sense of totality, rather than settling for positivist regularities drawn from one empirical fragment or another. It is in this sense that I plan to pursue social theory in continental Europe.`,
    bio_zh: `我是复旦大学社会学 + 人工智能双学位的学生。一直比较关注资本主义和现代社会的结构性矛盾。理论上主要受西方马克思主义影响，尤其是卢卡奇和阿多诺。
    <br><br>
    比较核心的一个问题是实证主义—科学主义为什么在今天的社会科学中占据支配地位。在我看来，科学主义和实证主义是一体两面的：科学主义指向一种认识论，试图把社会世界还原为客观的、可被数据把握的类自然世界；实证主义则是与之相匹配的方法论。
    <br><br>
    AI 双学位对我来说，更多不是想用更"科学"的方式去研究社会，而是想理解 AI 对社会意味着什么。我还是相信，如果想对社会有真正的把握，需要恢复总体性的认识，而不是停留在某一个经验局部做实证主义的规律总结。也是在这个意义上，之后打算去欧陆读社会理论。`
  },
  // Course grades and status are maintained in assets/js/course-records.js.
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
      title_en: "Computational Sociology Research",
      title_zh: "计算社会学研究",
      desc_en: "Exploring social structures through computational methods.",
      desc_zh: "通过计算方法探索社会结构。"
    }
  ]
};
