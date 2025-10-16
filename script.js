// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Resume data (in a real scenario, this would be loaded from data.json)
    const resumeData = {
        personalInfo: {
            name: "Mustafa Alsaqer",
            title: "full-stack developer",
            email: "mustafamajidalsaqar@gmail.com",
            phone: "+964 782 586 8547",
            location: "Baghdad, Iraq",
            summary: "Accomplished Full-Stack Web Developer with over five years of professional experience in designing, developing, and maintaining web applications across multiple platforms. Demonstrates expertise in both front-end and back-end development, with strong proficiency in modern frameworks and programming languages. Combines a solid background in network engineering with a comprehensive understanding of web performance, security, and scalability. Committed to delivering high-quality, efficient, and reliable solutions that align with organizational objectives and enhance user experience."
        },
        skills: [
            "HTML5 & CSS3",
            "JavaScript",
            "php",
            "C++",
            "Java",
            "Dart/flutter",
            "Python",
            "SQL",
            "Web Design",
            "UI/UX Design"
        ],
        experience: [
            {
                position: "manager",
                company: "Innovation Space",
                period: "2020 - Present",
                description: "Led development of web applications. Worked with a team of 5 developers to improve application performance."
            },
        ],
        education: [
            {
                degree: "Master of Computer Engineering",
                institution: "University of Science & Technology",
                year: "2023"
            },
            {
                degree: "Bachelor of IT in Computer Science",
                institution: "University of Basra",
                year: "2016"
            },
            
        ],
        languages: [
            {name: "Arabic", level: "Native"},
            {name: "English", level: "Intermediate"},
            {name: "Persian", level: "Basic"}
        ]
    };

    // DOM elements
    const skillsContainer = document.querySelector('.skills-container');
    const experienceContainer = document.querySelector('.experience-container');
    const educationContainer = document.querySelector('.education-container');
    const languagesContainer = document.querySelector('.languages-container');
    const themeToggle = document.getElementById('themeToggle');

    // Update personal info in header
    document.querySelector('h1').textContent = resumeData.personalInfo.name;
    document.querySelector('.title').textContent = resumeData.personalInfo.title;
    document.querySelectorAll('.contact-item span')[0].textContent = resumeData.personalInfo.email;
    document.querySelectorAll('.contact-item span')[1].textContent = resumeData.personalInfo.phone;
    document.querySelectorAll('.contact-item span')[2].textContent = resumeData.personalInfo.location;
    document.querySelector('.summary p').textContent = resumeData.personalInfo.summary;

    // Populate skills
    resumeData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });

    // Populate experience
    resumeData.experience.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.innerHTML = `
            <div class="job-title">${exp.position}</div>
            <div class="company">${exp.company}</div>
            <div class="period">${exp.period}</div>
            <p>${exp.description}</p>
        `;
        experienceContainer.appendChild(expElement);
    });

    // Populate education
    resumeData.education.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item';
        eduElement.innerHTML = `
            <div class="job-title">${edu.degree}</div>
            <div class="company">${edu.institution}</div>
            <div class="period">${edu.year}</div>
        `;
        educationContainer.appendChild(eduElement);
    });

    // Populate languages
    resumeData.languages.forEach(lang => {
        const langElement = document.createElement('div');
        langElement.className = 'language';
        langElement.innerHTML = `
            <span class="language-name">${lang.name}</span>
            <span class="language-level">${lang.level}</span>
        `;
        languagesContainer.appendChild(langElement);
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(section);
    });

    // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

    // Mobile menu functionality
    document.addEventListener('DOMContentLoaded', function () {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
            });
        });
});
});