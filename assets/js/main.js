document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const statusConfig = {
        completed: {
            en: 'Completed',
            zh: '已经修读',
            badgeClass: 'success',
            icon: 'bi-check-circle-fill'
        },
        in_progress: {
            en: 'In Progress',
            zh: '正在修读',
            badgeClass: 'primary',
            icon: 'bi-hourglass-split'
        }
    };
    
    // Profile Elements (on index.html)
    const profileBio = document.getElementById('profile-bio');
    
    // Curriculum Elements (on curriculum.html)
    const curriculumContainer = document.getElementById('curriculum-list');

    // Projects Elements (on projects.html)
    const projectsContainer = document.getElementById('projects-list');
    
    // Load Content
    if (typeof data !== 'undefined') {
        // Render Bio if element exists
        if (profileBio) {
            renderProfileBio(data.profile);
        }
        
        // Render Curriculum if element exists
        if (curriculumContainer) {
            renderCurriculum(data.curriculum, curriculumContainer);
        }

        // Render Projects if element exists
        if (projectsContainer) {
            renderProjects(data.projects, projectsContainer);
        }
    }

    // Language Switching
    let currentLang = localStorage.getItem('lang') || 'zh';
    setLanguage(currentLang);

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentLang = currentLang === 'en' ? 'zh' : 'en';
            setLanguage(currentLang);
        });
    }

    function setLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.body.classList.remove('lang-en', 'lang-zh');
        document.body.classList.add(`lang-${lang}`);
        localStorage.setItem('lang', lang);
        
        // Update button text
        if (langToggleBtn) {
            langToggleBtn.textContent = lang === 'en' ? '中文' : 'English';
        }
    }

    function renderProfileBio(profile) {
        if (profileBio) {
            profileBio.innerHTML = `
                <p class="en-text">${profile.bio_en}</p>
                <p class="zh-text">${profile.bio_zh}</p>
            `;
        }
    }

    function renderCurriculum(sections, container) {
        // Clear container first
        container.innerHTML = '';

        sections.forEach(section => {
            // Create Section Wrapper
            const sectionWrapper = document.createElement('div');
            sectionWrapper.className = 'col-12 mb-5';

            // Section Title
            const title = document.createElement('h3');
            title.className = 'mb-4 border-bottom pb-2';
            title.innerHTML = `
                <span class="en-text">${section.category_en}</span>
                <span class="zh-text">${section.category_zh}</span>
            `;
            sectionWrapper.appendChild(title);

            // Table
            const tableResponsive = document.createElement('div');
            tableResponsive.className = 'table-responsive';
            
            const table = document.createElement('table');
            table.className = 'table table-hover align-middle';
            
            table.innerHTML = `
                <thead class="table-light">
                    <tr>
                        <th scope="col" style="width: 35%;">
                            <span class="en-text">Course Name</span>
                            <span class="zh-text">课程名称</span>
                        </th>
                        <th scope="col" class="text-center">
                            <span class="en-text">Credits</span>
                            <span class="zh-text">学分</span>
                        </th>
                        <th scope="col" class="text-center">
                            <span class="en-text">Hours/Week</span>
                            <span class="zh-text">周学时</span>
                        </th>
                        <th scope="col" style="width: 20%;">
                            <span class="en-text">Department</span>
                            <span class="zh-text">开课院系</span>
                        </th>
                        <th scope="col" style="width: 15%;" class="text-end">
                            <span class="en-text">Status</span>
                            <span class="zh-text">修读情况</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    ${section.courses.map(rawCourse => {
                        const course = hydrateCourseRecord(rawCourse);
                        const statusBadge = renderStatusBadge(course.status_code);

                        return `
                        <tr>
                            <td>
                                <span class="fw-medium">
                                    <span class="en-text">${course.en}</span>
                                    <span class="zh-text">${course.zh}</span>
                                </span>
                            </td>
                            <td class="text-center">${course.credits}</td>
                            <td class="text-center">${course.hours}</td>
                            <td>
                                <span class="text-muted small">
                                    <span class="en-text">${course.dept_en || '-'}</span>
                                    <span class="zh-text">${course.dept_zh || '-'}</span>
                                </span>
                            </td>
                            <td class="text-end">
                                ${statusBadge}
                            </td>
                        </tr>
                    `}).join('')}
                </tbody>
            `;
            
            tableResponsive.appendChild(table);
            sectionWrapper.appendChild(tableResponsive);
            container.appendChild(sectionWrapper);
        });
    }

    function renderProjects(projects, container) {
        container.innerHTML = projects.map(project => `
            <div class="col-md-6">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body p-4">
                        <h5 class="card-title fw-bold mb-3">
                            <span class="en-text">${project.title_en}</span>
                            <span class="zh-text">${project.title_zh}</span>
                        </h5>
                        <p class="card-text text-muted">
                            <span class="en-text">${project.desc_en}</span>
                            <span class="zh-text">${project.desc_zh}</span>
                        </p>
                        ${project.link ? `
                            <a href="${project.link}" class="btn btn-outline-primary btn-sm mt-2" target="_blank">
                                <span class="en-text">View Project</span>
                                <span class="zh-text">查看项目</span>
                            </a>
                        ` : ''}
                    </div>
                </div>
            </div>
        `).join('');
        
        // If no projects
        if (projects.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center py-5">
                    <p class="text-muted">
                        <span class="en-text">Projects coming soon...</span>
                        <span class="zh-text">项目展示内容整理中...</span>
                    </p>
                </div>
            `;
        }
    }

    function hydrateCourseRecord(course) {
        const record = getCourseRecord(course);
        const hasGrade = record && Object.prototype.hasOwnProperty.call(record, 'grade');
        const hasGpa = record && Object.prototype.hasOwnProperty.call(record, 'gpa');
        const hasStatus = record && Object.prototype.hasOwnProperty.call(record, 'status');
        const statusCode = hasStatus ? normalizeStatusCode(record.status) : inferStatusCode(course);

        return {
            ...course,
            grade: hasGrade ? record.grade : course.grade,
            gpa: hasGpa ? record.gpa : course.gpa,
            status_code: statusCode
        };
    }

    function getCourseRecord(course) {
        if (typeof courseRecords === 'undefined') {
            return null;
        }

        return courseRecords[course.zh] || courseRecords[course.en] || null;
    }

    function inferStatusCode(course) {
        return normalizeStatusCode(course.status_en || course.status_zh);
    }

    function normalizeStatusCode(status) {
        if (!status) {
            return '';
        }

        const normalized = String(status).trim().toLowerCase();

        if (normalized === 'completed' || normalized === '已经修读') {
            return 'completed';
        }

        if (
            normalized === 'in progress' ||
            normalized === 'in_progress' ||
            normalized === 'in-progress' ||
            normalized === '正在修读'
        ) {
            return 'in_progress';
        }

        return '';
    }

    function renderStatusBadge(statusCode) {
        const status = statusConfig[statusCode];

        if (!status) {
            return `<span class="text-muted small opacity-50">
                <span class="en-text">-</span>
                <span class="zh-text">-</span>
            </span>`;
        }

        return `<span class="badge bg-${status.badgeClass} bg-opacity-10 text-${status.badgeClass} border border-${status.badgeClass} rounded-pill px-2">
            <i class="bi ${status.icon} me-1" style="font-size:0.8em"></i>
            <span class="en-text">${status.en}</span>
            <span class="zh-text">${status.zh}</span>
        </span>`;
    }
});
