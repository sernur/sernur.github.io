const translations = {
    en: {
        // Navigation
        nav_about: "About",
        nav_experience: "Experience",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_education: "Education",
        nav_publications: "Publications",
        nav_certifications: "Certifications",
        nav_volunteer: "Volunteer",
        nav_miscellaneous: "Miscellaneous",
        nav_contact: "Contact",

        // About Section
        about_title: "Sergazy Nurbavliyev, Ph.D.",
        about_subtitle: "Senior Machine Learning Scientist | AI/ML Specialist | Mathematician | Entrepreneur",
        about_location: "📍 Salt Lake City, Utah, United States",
        about_heading: "About",
        about_description_1: "Senior Machine Learning Scientist with over 5 years of experience in delivering high-impact solutions in Machine Learning (ML), Deep Learning (DL), Reinforcement Learning (RL), and Large Language Models (LLMs). Proven expertise in architecting scalable ML models, optimizing pricing strategies, and enhancing customer segmentation. Adept at mentoring teams, collaborating on cross-functional projects, and deploying AI/ML models in production environments.",
        about_description_2: "Strong academic background in probability theory, stochastic processes, combinatorics, statistical mechanics, nonparametric statistics, and Bayesian modeling. Skilled in reinforcement learning and natural language processing, with a track record of applying advanced statistical and ML methods to real-world business problems.",
        about_description_3: "Committed to advancing AI applications and driving organizational success with $20M+ revenue impact through innovative ML solutions.",
        about_description: "Passionate about advancing the frontiers of artificial intelligence and machine learning. With a strong foundation in mathematics and extensive experience in developing cutting-edge AI solutions, I specialize in creating innovative systems that bridge theoretical research with practical applications. My expertise spans from deep learning and natural language processing to statistical modeling and optimization.",

        // Experience Section
        experience_title: "Experience",
        exp_beyond_title: "Beyond",
        exp_beyond_position: "Senior Machine Learning Scientist",
        exp_beyond_company: "Beyond (formerly Overstock.com)",
        exp_beyond_period: "Feb 2023 – Present | Salt Lake City, UT",
        exp_beyond_location: "Salt Lake City, UT",
        exp_beyond_ctr_title: "Click-Through Rate (CTR) Prediction for Sponsored Ads:",
        exp_beyond_ctr_desc1: "Built and productionized XGBoost-based CTR model replacing legacy system, improving AUC by 12% and click prediction precision by 15%.",
        exp_beyond_ctr_desc2: "Designed daily retraining pipeline (BigQuery + Airflow) with 50+ engineered features including product reviews, user behavior, and device type; achieved 8% CTR improvement driving $5M+ annual ad revenue.",
        exp_beyond_cvr_title: "Conversion Rate (CVR) Prediction for Sponsored Ads:",
        exp_beyond_cvr_desc1: "Developed Overstock's first CVR model using XGBoost to predict the likelihood of a purchase post-click; integrated with ad ranking to prioritize high-converting ads.",
        exp_beyond_cvr_desc2: "Built labeled training pipeline joining click logs with order data; improved post-click purchase rate by 15% and advertising ROI by $3M+ annually.",
        exp_beyond_ai_content_title: "AI-Powered Product Content Optimization:",
        exp_beyond_ai_desc1: "Led end-to-end platform development for automated e-commerce content creation using ML and generative AI, serving 2M+ SKUs.",
        exp_beyond_ai_desc2: "Productionized taxonomy classification model achieving 97% accuracy, eliminating 90% of manual categorization and saving 40+ hours/week.",
        exp_beyond_ai_desc3: "Built generative attribute enrichment pipeline using LLMs (OpenAI/Gemini) to fill missing product attributes, improving content completeness by 90%.",
        exp_beyond_ai_desc4: "Delivered AI SKU Builder MVP enabling partner self-service; piloted with key suppliers reducing onboarding time by 80%.",
        exp_beyond_ai_desc5: "Integrated AI systems with enterprise infrastructure (Oracle DB, Product APIs) achieving near real-time catalog updates across 100K+ SKUs.",
        exp_beyond_mlcp_title: "Machine Learning Coupon Personalization (MLCP):",
        exp_beyond_mlcp_desc1: "Led personalized email coupon system using hybrid XGBoost + logistic regression predicting customer purchase probabilities across discount levels.",
        exp_beyond_mlcp_desc2: "Deployed scalable allocation algorithm optimizing discount spend for 20M+ customers daily; integrated with ESP and marketing constraints.",
        exp_beyond_mlcp_desc3: "Achieved 3.6% revenue increase and 19% profit improvement through 10M-customer A/B test, delivering $8M+ annual impact.",
        exp_beyond_mlpo_title: "Dynamic ML Pricing Optimization (MLPO):",
        exp_beyond_mlpo_desc1: "Designed dynamic pricing engine for 200K+ SKUs combining LightGBM elasticity prediction with integer linear programming optimization.",
        exp_beyond_mlpo_desc2: "Implemented two-stage price optimization (bucket selection + fine-tuning) maximizing profit under business constraints.",
        exp_beyond_mlpo_desc3: "Delivered 4-7% profit improvement with controlled 1% sales impact; boosted competitive positioning to 65% across 170K products.",
        exp_beyond_leadership_title: "Leadership & Mentoring:",
        exp_beyond_leadership_desc1: "Participated in hiring process and onboarded 3 new data science team members, enhancing team capabilities.",
        exp_beyond_leadership_desc2: "Mentored intern developing Bayesian A/B testing models for skewed revenue KPIs, reducing sample size requirements by 20-40%.",

        exp_overstock_title: "Overstock.com",
        exp_overstock_position: "Machine Learning Scientist",
        exp_overstock_company: "Overstock.com",
        exp_overstock_period: "Oct 2020 – Feb 2023 | Salt Lake City, UT",
        exp_overstock_location: "Salt Lake City, UT",
        exp_overstock_sale_title: "Automated Site Sale Optimization:",
        exp_overstock_sale_desc1: "Developed deep neural network and transformer-based models for demand forecasting across millions of products.",
        exp_overstock_sale_desc2: "Created optimization algorithms maximizing revenue/profit under budget constraints using advanced optimization and parallel processing.",
        exp_overstock_sale_desc3: "Improved prediction accuracy by 10% (MAPE/MAE), reduced manual processing by 80%, and increased annual revenue by $150M (6%) and profit by $10M (4%).",
        exp_overstock_sale_desc4: "Deployed production systems using Docker, Jenkins, Airflow on GCP; designed and analyzed A/B tests for algorithm validation.",
        exp_overstock_additional_title: "Additional ML Projects:",
        exp_overstock_additional_desc1: "Built probabilistic SKU selection model optimizing pricing/discounts with improved transparency and 20% cost reduction.",
        exp_overstock_additional_desc2: "Implemented deduplication system analyzing 3M+ SKUs using image hashing, reducing duplicates by 95% and improving efficiency by 30%.",
        exp_overstock_additional_desc3: "Enhanced competitive price matching using image/text embeddings, improving tagging precision from 30% to 70%.",

        exp_utah_title: "Research Assistant & Teaching Assistant",
        exp_utah_company: "University of Utah",
        exp_utah_period: "2017 - 2021",
        exp_utah_desc: "Conducted advanced research in mathematical statistics and machine learning while teaching undergraduate and graduate courses in mathematics and statistics.",

        exp_nazarbayev_title: "Lecturer & Researcher",
        exp_nazarbayev_company: "Nazarbayev University",
        exp_nazarbayev_period: "2015 - 2017",
        exp_nazarbayev_desc: "Taught advanced mathematics courses and conducted research in applied mathematics and statistical modeling.",

        exp_phd_title: "Ph.D. in Mathematics, University of Utah College of Science",
        exp_phd_period: "Aug 2016 – Jun 2020 | Greater Salt Lake City Area",
        exp_phd_models: "Developed mathematical models governing the evolution of systems with complex interactions in probability theory and stochastic processes.",
        exp_phd_quantitative: "Built quantitative models of infinite systems to maximize energy paths, working with renowned faculty in mathematical research.",
        exp_phd_research: "Conducted advanced research in random walk theory and statistical mechanics with applications to real-world optimization problems.",

        exp_sdu_title: "Mathematics Instructor, Suleyman Demirel University, Kazakhstan",
        exp_sdu_period: "Sep 2015 – Jul 2016 | Almaty, Kazakhstan",
        exp_sdu_taught: "Taught advanced mathematics courses including Probability and Statistics for Engineers, Differential Equations, Linear Algebra, Real Analysis, and Calculus for Engineers.",
        exp_sdu_curriculum: "Developed curriculum and educational materials for undergraduate engineering and mathematics programs.",

        exp_bogazici_title: "Research Assistant, Bogazici University",
        exp_bogazici_period: "Sep 2013 – Aug 2015 | Istanbul, Turkey",
        exp_bogazici_research: "Assisted in academic research projects focusing on mathematical statistics, probability theory, and statistical modeling.",
        exp_bogazici_publications: "Contributed to research publications and academic conferences in mathematics and statistics.",

        exp_sdu_instructor_title: "Instructor, Suleyman Demirel University, Kazakhstan",
        exp_sdu_instructor_period: "Sep 2012 – Aug 2013 | Kazakhstan",
        exp_sdu_instructor_courses: "Taught foundational mathematics courses including Calculus for Economics and Calculus for Engineers.",
        exp_sdu_instructor_mentoring: "Mentored undergraduate students in mathematical problem-solving and analytical thinking.",

        // Projects Section
        projects_title: "Selected Projects",
        proj_salesshortcut_title: "SalesShortcut – Autonomous AI Sales Team (Grand Prize Winner)",
        proj_salesshortcut_period: "2025",
        proj_salesshortcut_desc1: "Won Grand Prize at Google Cloud Agent Development Kit Hackathon (10,000+ participants); awarded $15,000, $3,000 Google Cloud credits, premium developer membership, and Google engineer mentorship.",
        proj_salesshortcut_desc2: "Designed and implemented a multi-agent AI system using Google Cloud ADK and Gemini 2.0 to autonomously execute the full SDR workflow: lead discovery, research, personalized outreach, calls, follow-ups, and pipeline management.",
        proj_salesshortcut_desc3: "Architected 34 specialized agents (LLM, sequential, parallel, loop, custom) orchestrated via ADK; deployed as microservices on Google Cloud Run with inter-service A2A protocol across 5 microservices.",
        proj_salesshortcut_desc4: "Integrated Google Maps, Search, Gmail, Calendar, Vertex AI, BigQuery, Pub/Sub, and ElevenLabs voice API to enable prospect targeting, tailored proposals, and real-time engagement.",
        proj_salesshortcut_desc5: "Implemented advanced orchestration patterns (including parallel processing and human oversight) enabling scalable and fault-tolerant lead processing.",
        proj_salesshortcut_desc6: "Built production-ready system validated with real-world business outreach; demonstrated automation of manual SDR workflows with significant productivity gains and strong adoption potential.",

        proj_enterprise_rag_title: "Enterprise RAG Knowledge Assistant",
        proj_enterprise_rag_period: "2025",
        proj_enterprise_rag_desc1: "Developed and deployed internal AI assistant for Beyond enabling marketing, merchandising, and supply chain teams to query pricing, promotion, product, inventory, and partner data from text documents, spreadsheets, and images.",
        proj_enterprise_rag_desc2: "Built document ingestion pipeline (contracts, promotional flyers, pricing sheets, product images) with OCR, metadata extraction, and embedding generation.",
        proj_enterprise_rag_desc3: "Implemented multimodal retrieval using FAISS vector store with CLIP embeddings for images and BERT embeddings for text, ensuring high-precision responses.",
        proj_enterprise_rag_desc4: "Integrated with LLM backend for context-aware answers and source citation; reduced time-to-insight for business queries from hours to seconds.",
        proj_enterprise_rag_desc5: "Delivered solution to product, marketing, merchandising, and supply chain teams, improving decision-making speed and reducing manual data lookup by 70%.",

        // Skills Section
        skills_title: "Skills",
        skills_technical: "Technical Skills",
        skills_research: "Research & Academic",
        skills_languages: "Languages",

        // Technical Skills
        skills_programming_languages: "Programming Languages",
        skills_programming_list: "Python, R, SQL, PySpark, Scala",
        skills_ml_frameworks: "ML Frameworks",
        skills_ml_frameworks_list: "PyTorch (CUDA), TensorFlow, Keras, XGBoost, LightGBM",
        skills_ml_algorithms: "ML Algorithms",
        skills_ml_algorithms_list: "Reinforcement Learning, Deep Learning, Transformers, CNN, Tree-based algorithms",
        skills_llm_nlp: "LLM & NLP",
        skills_llm_nlp_list: "Large Language Models, Transformer Models (BERT, GPT), Multimodal Embeddings, LangChain, RAG",
        skills_cloud_platforms: "Cloud Platforms",
        skills_cloud_platforms_list: "Google Cloud Platform (GCP), Azure, AWS",
        skills_mlops: "MLOps/LLMOps",
        skills_mlops_list: "Docker, Jenkins, Airflow, MLflow, Kubeflow, LangGraph",
        skills_statistical_methods: "Statistical Methods",
        skills_statistical_methods_list: "Bayesian and frequentist analysis, A/B testing, causal modeling, nonparametric statistics",
        skills_optimization: "Optimization Techniques",
        skills_optimization_list: "Linear programming, convex optimization, high-dimensional optimization, parallel computing",
        skills_databases: "Databases",
        skills_databases_list: "MySQL, PostgreSQL, MongoDB, BigQuery",
        skills_data_infrastructure: "Data & Infrastructure",
        skills_data_infrastructure_list: "REST APIs, Docker, multiprocessing, real-time systems",

        // Research & Academic Skills
        skills_mathematical_expertise: "Mathematical Expertise",
        skills_mathematical_expertise_list: "Probability theory, stochastic processes, combinatorics, statistical mechanics",
        skills_analytical_skills: "Analytical Skills",
        skills_analytical_skills_list: "Quantitative analytics, mathematical modeling, theoretical research",

        // Language Skills
        skills_english: "English",
        skills_english_level: "Full Professional Proficiency",
        skills_turkish: "Turkish",
        skills_turkish_level: "Full Professional Proficiency",
        skills_kazakh: "Kazakh",
        skills_kazakh_level: "Native/Bilingual Proficiency",
        skills_russian: "Russian",
        skills_russian_level: "Limited Working Proficiency",
        skills_turkmen: "Turkmen",
        skills_turkmen_level: "Conversational",

        // Education Section
        education_title: "Education",
        edu_phd_degree: "Ph.D. in Mathematics",
        edu_phd_school: "University of Utah",
        edu_phd_period: "2017 - 2021",
        edu_phd_focus: "Specialization: Mathematical Statistics, Machine Learning Theory",

        edu_ms_degree: "M.S. in Mathematics",
        edu_ms_school: "Nazarbayev University",
        edu_ms_period: "2013 - 2015",
        edu_ms_focus: "Focus: Applied Mathematics, Statistical Modeling",

        edu_bs_degree: "B.S. in Mathematics",
        edu_bs_school: "Kazakh National University",
        edu_bs_period: "2009 - 2013",
        edu_bs_focus: "Concentration: Pure Mathematics, Mathematical Analysis",

        // Publications Section
        publications_title: "Selected Publications",
        pub_kdd_2025_title: "KDD 2025 Publication: Debiased ML for Price Promotion Optimization",
        pub_kdd_2025_period: "2025",
        pub_kdd_2025_desc1: "Published in the Applied Data Science Track at KDD 2025: 'A Debiased Machine Learning Framework for Optimizing Price Promotion within E-commerce'.",
        pub_kdd_2025_desc2: "Proposed the Delta Method, a de-meaning technique inspired by fixed-effects regression, to isolate within-product variation and estimate causal treatment effects from observational data.",
        pub_kdd_2025_desc3: "Demonstrated a 3% increase in revenue and 2% increase in profit via a real-world pricing experiment using the method on a furniture e-commerce platform.",

        // Certifications Section
        certifications_title: "Certifications",
        cert_ml_title: "Machine Learning Specialization",
        cert_ml_issuer: "Stanford University (Coursera)",
        cert_ml_year: "2022",

        // Volunteer Section
        volunteer_title: "Volunteer Experience",
        vol_mentor_title: "AI/ML Mentor",
        vol_mentor_org: "Tech Diversity Initiative",
        vol_mentor_period: "2022 - Present",
        vol_mentor_desc: "Mentoring underrepresented students in AI/ML career development",

        vol_reviewer_title: "Peer Reviewer",
        vol_reviewer_org: "International ML Conferences",
        vol_reviewer_period: "2021 - Present",
        vol_reviewer_desc: "Reviewing research papers for top-tier machine learning conferences",

        // Contact Section
        contact_title: "Contact",
        contact_mail: "Mail:",
        contact_github: "Github:",
        contact_linkedin: "Linkedin:",
        contact_leetcode: "Leetcode:",
        contact_medium: "Medium:",

        // Volunteer Section - Additional
        vol_emerald_title: "Executive Director, Emerald Hills Institute",
        vol_emerald_period: "Sept 2016 – Present",
        vol_emerald_desc1: "Led a nonprofit organization promoting cultural understanding and education.",
        vol_emerald_desc2: "Expanded membership by 30%, engaging over 50 active members.",
        vol_emerald_desc3: "Directed initiatives benefiting over 5,000 community members.",
        vol_gandhi_title: "Board of Directors, Gandhi Alliance for Peace",
        vol_gandhi_period: "May 2019 – Present",
        vol_gandhi_desc1: "Mission: Increase public awareness and understanding of Mahatma Gandhi, his role in world history, and his commitment to truth, nonviolence, service, and justice.",
        vol_gandhi_desc2: "Promote awareness of Mahatma Gandhi's values and philosophy through community outreach and educational programs.",

        // Miscellaneous Section
        misc_title: "Miscellaneous",
        misc_glm_project: "Generalized Linear Model project:",
        misc_timeseries_project: "Time Series Analysis project:",
        misc_stepwise_project: "Forward and Backward Stepwise using p-values:",
        misc_income_project: "Modelling income per state project:",
        misc_alternative_project: "Alternative to least squares project:",
        misc_fetal_project: "Fetal Curve Study (Quantile regression):",
        misc_beta_project: "Beta regression and Survival Analysis:",
        misc_masters_project: "Special Project for Masters degree in Statistics:",

        // Education detailed translations
        edu_utah_phd_title: "University of Utah: ",
        edu_utah_phd_degree: "PhD in Mathematics, 2020",
        edu_utah_phd_thesis_label: "Thesis: ",
        edu_utah_phd_thesis_title: "The Lyapunov Exponent of Random Walk in Random Potential",
        edu_utah_phd_explanation_label: "Explanation: ",
        edu_utah_phd_explanation: "In this dissertation, we prove a shape theorem and derive a variational formula for the limiting quenched Lyapunov exponent of random walk in a random potential on a square lattice of arbitrary dimension and with an arbitrary finite set of steps. The potential is a function of a stationary environment and the step of the walk. The potential is subject to a moment assumption the strictness of which is tied to the mixing of the environment. Our setting includes directed and undirected polymers, and random walk in static and dynamic random environments. When the temperature is taken to zero, our results also give a shape theorem and a variational formula for the time constant of both site and edge directed last-passage percolation and standard first-passage percolation.",
        edu_utah_phd_gpa: "4.0",

        edu_utah_msc_title: "University of Utah: ",
        edu_utah_msc_degree: "MSc in Statistics, 2018",
        edu_utah_msc_thesis_label: "Thesis: ",
        edu_utah_msc_thesis_title: "Analysis of PhD applications in Mathematics",
        edu_utah_msc_explanation_label: "Explanation: ",
        edu_utah_msc_explanation: "In this work, I analyze a dataset containing information about PhD applicants to major universities. I use machine learning methods to predict if the university admissions committee accepts, waitlists or rejects the application. The main goal of this project is to predict rating score assigned to the student by the committee.",
        edu_utah_msc_gpa: "4.0",

        edu_bogazici_bsc_title: "Boğaziçi University: ",
        edu_bogazici_bsc_degree: "BSc in Mathematics, 2016",
        edu_bogazici_bsc_thesis_label: "Thesis: ",
        edu_bogazici_bsc_thesis_title: "Stochastic Differential Equations",
        edu_bogazici_bsc_explanation_label: "Explanation: ",
        edu_bogazici_bsc_explanation: "In this work, I study the theory of stochastic differential equations and their applications to finance. I also implement numerical methods to solve these equations.",
        edu_bogazici_bsc_gpa: "3.8",

        edu_gpa_label: "GPA: ",

        // Publications detailed translations
        pub_lyapunov_title: "The Lyapunov Exponent of Random Walk in Random Potential",
        pub_lyapunov_description: "This paper studies the limiting behavior of random walk in a random potential on a square lattice.",
        pub_lyapunov_journal: "arXiv preprint (2020)",

        // Certifications detailed translations
        cert_ml_language_title: "Intro to ML: Language Processing",
        cert_ml_language_issuer: "AICamp (Issued Dec 2019)"
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}