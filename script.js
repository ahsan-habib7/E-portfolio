// Configuration object
        const defaultConfig = {
            full_name: "Ahsan Habib",
            title_role: "Computer Science and Engineering Student",
            intro_text: "I'm passionate about creating innovative solutions and building amazing digital experiences that make a difference in the world.",
            resume_text: "Download Resume",
            contact_heading: "Get In Touch",
            about_preview_heading: "Who I Am",
            about_preview_text: "I'm a passionate Computer Science and Engineering student with a love for creating innovative solutions that make a real impact. My journey in technology started with curiosity and has evolved into a deep commitment to building exceptional digital experiences. I believe in continuous learning, collaboration, and using technology to solve meaningful problems.",
            image_upload_text: "Space reserved for your professional photo"
        };

        let config = { ...defaultConfig };
        let currentPage = 'home';

        // Page Navigation
        function showPage(pageId) {
            // Special handling for experience - scroll to section on home page
            if (pageId === 'aboutSection') {
                // First, make sure we're on the home page
                document.querySelectorAll('.page').forEach(page => {
                          page.classList.remove('active');
                });
                document.getElementById('home').classList.add('active');
                
                // Update navigation to show home as active
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                const aboutSectionLink = Array.from(document.querySelectorAll('.nav-link')).find(link => 
                    link.textContent.toLowerCase().includes('about-section')
                );
                if (aboutSectionLink) aboutSectionLink.classList.add('active');
                
                currentPage = 'home';
                
                // Scroll to experience section
                setTimeout(() => {
                    const aboutSection = document.getElementById('aboutSection');
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                
                return;
            }

            if (pageId === 'paperSection') {
                // First, make sure we're on the home page
                document.querySelectorAll('.page').forEach(page => {
                          page.classList.remove('active');
                });
                document.getElementById('home').classList.add('active');
                
                // Update navigation to show home as active
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                const paperSectionLink = Array.from(document.querySelectorAll('.nav-link')).find(link => 
                    link.textContent.toLowerCase().includes('paper-section')
                );
                if (paperSectionLink) paperSectionLink.classList.add('active');
                
                currentPage = 'home';
                
                // Scroll to experience section
                setTimeout(() => {
                    const paperSection = document.getElementById('paperSection');
                    if (paperSection) {
                        paperSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                
                return;
            }

            if (pageId === 'skillSection') {
                document.querySelectorAll('.page').forEach(page => {
                          page.classList.remove('active');
                });
                document.getElementById('home').classList.add('active');
                
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                const skillSectionLink = Array.from(document.querySelectorAll('.nav-link')).find(link => 
                    link.textContent.toLowerCase().includes('skillSection')
                );
                if (skillSectionLink) skillSectionLink.classList.add('active');
                
                currentPage = 'home';
                
                setTimeout(() => {
                    const skillSection = document.getElementById('skillSection');
                    if (skillSection) {
                        skillSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                return;
            }

            if (pageId === 'projectSection') {
                document.querySelectorAll('.page').forEach(page => {
                          page.classList.remove('active');
                });
                document.getElementById('home').classList.add('active');
                
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                const projectSectionLink = Array.from(document.querySelectorAll('.nav-link')).find(link => 
                    link.textContent.toLowerCase().includes('projectSection')
                );
                if (projectSectionLink) projectSectionLink.classList.add('active');
                
                currentPage = 'home';
                
                setTimeout(() => {
                    const projectSection = document.getElementById('projectSection');
                    if (projectSection) {
                        projectSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                return;
            }

            if (pageId === 'experience') {
                document.querySelectorAll('.page').forEach(page => {
                          page.classList.remove('active');
                });
                document.getElementById('home').classList.add('active');
                
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                const experienceLink = Array.from(document.querySelectorAll('.nav-link')).find(link => 
                    link.textContent.toLowerCase().includes('experience')
                );
                if (experienceLink) experienceLink.classList.add('active');
                
                currentPage = 'home';
                
                setTimeout(() => {
                    const experienceSection = document.getElementById('experienceSection');
                    if (experienceSection) {
                        experienceSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
                return;
            }
            
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show selected page
            document.getElementById(pageId).classList.add('active');
            
            // Update navigation
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // Find and activate current nav link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.textContent.toLowerCase().includes(pageId) || 
                    (pageId === 'home' && link.textContent.toLowerCase() === 'home')) {
                    link.classList.add('active');
                }
            });
            
            currentPage = pageId;
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Reinitialize animations for the new page
            setTimeout(() => {
                initializePageAnimations();
            }, 100);
        }

        // Create floating particles
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            if (!particlesContainer) return;
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 10 + 5 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Progress bar animation
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-fill');
            progressBars.forEach(bar => {
                bar.classList.add('animate');
            });
        }

        // Initialize page animations
        function initializePageAnimations() {
            // Animate progress bars if on skills page
            if (currentPage === 'skills' || currentPage === 'home') {
                setTimeout(() => {
                    animateProgressBars();
                }, 500);
            }
        }

        // Enhanced scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate progress bars when skills section is visible
                    if (entry.target.querySelector('.progress-fill')) {
                        setTimeout(() => {
                            animateProgressBars();
                        }, 500);
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
        });

        // Initialize particles
        createParticles();

        // Projects data array (single source of truth)
        const allProjects = [
            {
                id: 'computershop',
                image: 'loadintech.png',
                status: 'Live',
                title: "Load-In-Tech",
                category: 'Web App',
                summary: "A modern, responsive e-commerce website for premium computer hardware and gaming components, built with HTML, Tailwind CSS, and JavaScript.",
                description: "Load-In-Tech is a sleek and high-performance e-commerce platform showcasing premium computer hardware and gaming components. It features dynamic product filtering, interactive navigation, smooth animations, and a professional color palette for an immersive shopping experience. The design prioritizes usability and responsiveness for both desktop and mobile users.",
                tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Custom CSS', 'Custom JS']
            },
            {
                id: 'petshop',
                image: 'petty.png',
                status: 'Live',
                title: 'Pet Shop Management System',
                category: 'Web App',
                summary: "A dynamic web-based application for managing pet inventory, customer details, and sales operations using PHP and MySQL (phpMyAdmin).",
                description: "The Pet Shop Management System is a full-featured web application designed to simplify pet store operations. It includes modules for managing pets, customers, and sales transactions with a clean and responsive interface. The system uses PHP for backend logic and phpMyAdmin (MySQL) for data storage and management. Its goal is to make it easy for shop owners to track pets, handle purchases, and monitor business performance digitally.",
                tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL (phpMyAdmin)']
            },
            {
                id: 'rentmaster',
                image: 'rentMaster.png',
                status: 'Live',
                title: 'RentMaster Car Rental System',
                category: 'Full-Stack',
                summary: "A full-stack car rental application with NestJS backend and Next.js frontend, featuring booking, payment, vehicle management, and admin analytics.",
                description: "RentMaster combines a NestJS API with a Next.js frontend to provide a performant car rental experience: bookings, payments, vehicle management, and admin analytics. It features a modern, responsive design.",
                tech: ['NestJS', 'NextJS', 'PostgreSQL', 'TypeORM', 'Tailwind']
            }
        ];

        // Carousel state
        let currentSlide = 0;
        const projectsPerView = window.innerWidth >= 1200 ? 3 : window.innerWidth >= 768 ? 2 : 1;

        // Create project card HTML
        function createProjectCard(project) {
            const statusColor = project.status === 'Live' ? '#22c55e' : '#f59e0b';

            const isImage = project.image.endsWith('.jpg') || project.image.endsWith('.png');
            const imageContent = isImage 
        ? `<img src="${project.image}" alt="${project.title} Image" />`
        : `<i class="${project.image}"></i>`;
            
            return `
                <div class="project-card carousel-slide">
                    <div class="project-image">
                        ${imageContent}
                <div class="project-status" style="background: ${statusColor}">${project.status}</div>
            </div>
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">${project.title}</h3>
                            <span class="project-category">${project.category}</span>
                        </div>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-actions">
                            <a onclick="openProjectModal('${project.id}')" class="project-link primary">
                                <i class="fas fa-eye"></i>
                                View Details
                            </a>
                            <!--<a href="#" class="project-link secondary" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                Code
                            </a>-->
                        </div>
                    </div>
                </div>
            `;
        }

        // Initialize carousel
        function initializeCarousel() {
            const carousel = document.getElementById('projectsCarousel');
            const indicators = document.getElementById('carouselIndicators');
            
            if (!carousel || !indicators) return;
            
            // Create project cards
            carousel.innerHTML = allProjects.map(project => createProjectCard(project)).join('');
            
            // Create indicators
            const totalSlides = Math.ceil(allProjects.length / projectsPerView);
            indicators.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
                dot.onclick = () => goToSlide(i);
                indicators.appendChild(dot);
            }
            
            updateCarousel();
        }

        // Update carousel position
        function updateCarousel() {
            const carousel = document.getElementById('projectsCarousel');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const dots = document.querySelectorAll('.carousel-dot');
            
            if (!carousel) return;
            
            const slideWidth = 300 + 25; // card width + gap
            const offset = currentSlide * slideWidth * projectsPerView;
            carousel.style.transform = `translateX(-${offset}px)`;
            
            // Update buttons
            const totalSlides = Math.ceil(allProjects.length / projectsPerView);
            if (prevBtn) prevBtn.disabled = currentSlide === 0;
            if (nextBtn) nextBtn.disabled = currentSlide >= totalSlides - 1;
            
            // Update indicators
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        // Carousel navigation functions
        function nextProject() {
            const totalSlides = Math.ceil(allProjects.length / projectsPerView);
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateCarousel();
            }
        }

        function previousProject() {
            if (currentSlide > 0) {
                currentSlide--;
                updateCarousel();
            }
        }

        function goToSlide(slideIndex) {
            const totalSlides = Math.ceil(allProjects.length / projectsPerView);
            if (slideIndex >= 0 && slideIndex < totalSlides) {
                currentSlide = slideIndex;
                updateCarousel();
            }
        }

        // Update UI based on config
        async function onConfigChange(newConfig) {
            config = { ...config, ...newConfig };
            
            // Update hero section
            const heroName = document.getElementById('hero-name');
            const heroTitle = document.getElementById('hero-title');
            const heroIntro = document.getElementById('hero-intro');
            const resumeText = document.getElementById('resume-text');
            const contactHeading = document.getElementById('contact-heading');
            const aboutPreviewHeading = document.getElementById('about-preview-heading');
            const aboutPreviewText = document.getElementById('about-preview-text');
            const imageUploadText = document.getElementById('image-upload-text');
            
            if (heroName) heroName.textContent = config.full_name || defaultConfig.full_name;
            if (heroTitle) heroTitle.textContent = config.title_role || defaultConfig.title_role;
            if (heroIntro) heroIntro.textContent = config.intro_text || defaultConfig.intro_text;
            if (resumeText) resumeText.textContent = config.resume_text || defaultConfig.resume_text;
            if (contactHeading) contactHeading.textContent = config.contact_heading || defaultConfig.contact_heading;
            if (aboutPreviewHeading) aboutPreviewHeading.textContent = config.about_preview_heading || defaultConfig.about_preview_heading;
            if (aboutPreviewText) aboutPreviewText.textContent = config.about_preview_text || defaultConfig.about_preview_text;
            if (imageUploadText) imageUploadText.textContent = config.image_upload_text || defaultConfig.image_upload_text;
        }

        // Element SDK integration
        if (window.elementSdk) {
            window.elementSdk.init({
                defaultConfig: defaultConfig,
                onConfigChange: onConfigChange,
                mapToCapabilities: (config) => ({
                    recolorables: [],
                    borderables: [],
                    fontEditable: undefined,
                    fontSizeable: undefined
                }),
                mapToEditPanelValues: (config) => new Map([
                    ["full_name", config.full_name || defaultConfig.full_name],
                    ["title_role", config.title_role || defaultConfig.title_role],
                    ["intro_text", config.intro_text || defaultConfig.intro_text],
                    ["resume_text", config.resume_text || defaultConfig.resume_text],
                    ["contact_heading", config.contact_heading || defaultConfig.contact_heading],
                    ["about_preview_heading", config.about_preview_heading || defaultConfig.about_preview_heading],
                    ["about_preview_text", config.about_preview_text || defaultConfig.about_preview_text],
                    ["image_upload_text", config.image_upload_text || defaultConfig.image_upload_text]
                ])
            });
        }

        // Project Modal Data
        const projectData = {
            computershop: {
                image: 'loadintech.png',
                title: "Load-In-Tech",
                subtitle: 'Full-Stack Web Application',
                description: "Load-In-Tech is a sleek and high-performance e-commerce platform showcasing premium computer hardware and gaming components. It features dynamic product filtering, interactive navigation, smooth animations, and a professional color palette for an immersive shopping experience. The design prioritizes usability and responsiveness for both desktop and mobile users.",
                features: [
                    { title: 'Modern E-commerce UI', desc: 'Clean, responsive, and fully optimized store layout with smooth animations' },
                    { title: 'Dynamic Product Categories', desc: 'Filter products by categories with real-time updates' },
                    { title: 'Featured & Flash Sale Products', desc: 'Showcases trending items and time-limited deals with countdown' },
                    { title: 'Gaming Setup Bundles', desc: 'Pre-built gaming bundles with detailed price breakdowns' },
                    { title: 'Interactive Navigation', desc: 'Sticky navbar, smooth scrolling, and animated menu interactions' },
                    { title: 'Cart, Wishlist & Compare', desc: 'Individual counters with notifications and action feedback' },
                    { title: 'Search System', desc: 'Quick product search that updates results instantly' },
                    { title: 'Chatbot Widget', desc: 'Floating chat assistant with message suggestions and UI animations' },
                    { title: 'Notification System', desc: 'Dynamic toast notifications for cart and wishlist actions' },
                    { title: 'Brand Showcase', desc: 'Display of premium tech brands with clean minimal UI' },
                    { title: 'Blog & Tech News', desc: 'Latest tech articles, guides, and reviews section' },
                    { title: 'Professional Services', desc: 'Assembly, tuning, warranty, and home setup services' },
                    { title: 'Customer Testimonials', desc: 'Real feedback from users with modern card-style UI' },
                    { title: 'Newsletter Subscription', desc: 'Email subscription with validation and user feedback' }
                ],

                technologies: [
                    { icon: 'fab fa-html5', name: 'HTML5' },
                    { icon: 'fab fa-css3-alt', name: 'Tailwind CSS' },
                    { icon: 'fab fa-js', name: 'JavaScript' },
                    { icon: 'fas fa-code', name: 'Custom CSS' },
                    { icon: 'fas fa-cogs', name: 'Custom JavaScript' }
                ]
            },
            petshop: {
                image: 'petty.png',
                title: 'Pet Shop Management System',
                subtitle: 'Full-Stack Web Application',
                description: "The Pet Shop Management System is a full-featured web application designed to simplify pet store operations. It includes modules for managing pets, customers, and sales transactions with a clean and responsive interface. The system uses PHP for backend logic and phpMyAdmin (MySQL) for data storage and management. Its goal is to make it easy for shop owners to track pets, handle purchases, and monitor business performance digitally.",
                features: [
                    { title: 'Real-time Collaboration', desc: 'Live updates and notifications for team members working together' },
                    { title: 'Drag & Drop Interface', desc: 'Intuitive Kanban boards with smooth drag-and-drop functionality' },
                    { title: 'Time Tracking', desc: 'Built-in time tracking with detailed reports and productivity analytics' },
                    { title: 'File Management', desc: 'Secure file uploads and sharing with version control' },
                    { title: 'Custom Workflows', desc: 'Configurable workflows and automation rules for different teams' },
                    { title: 'Advanced Reports', desc: 'Comprehensive reporting with charts and export capabilities' }
                ],
                technologies: [
                    { icon: 'fab fa-html5', name: 'HTML5' },
                    { icon: 'fab fa-css3-alt', name: 'CSS3' },
                    { icon: 'fab fa-js', name: 'JavaScript' },
                    { icon: 'fas fa-server', name: 'PHP' },
                    { icon: 'fas fa-database', name: 'MySQL' }
                ]
            },
            rentmaster: {
                image: 'rentMaster.png',
                title: 'RentMaster Car Rental System',
                subtitle: 'Full-Stack Web Application',
                description: "RentMaster combines a NestJS API with a Next.js frontend to provide a performant car rental experience: bookings, payments, vehicle management, and admin analytics. It features a modern, responsive design.",
                features: [
                    { title: "Secure JWT authentication", desc: "User and admin login protected by JSON Web Tokens." },
                    { title: "Booking calendar & availability", desc: "Real-time calendar view of car availability for booking." },
                    { title: "Admin dashboard", desc: "Comprehensive dashboard for vehicle, user, and booking management." },
                    { title: "Payment integration (mock/demo)", desc: "Simulated payment processing for a complete checkout flow." }
                ],
                technologies: [
                    { icon: 'fab fa-node-js', name: 'NestJS' },
                    { icon: 'fab fa-react', name: 'NextJS' },
                    { icon: 'fas fa-database', name: 'PostgreSQL' },
                    { icon: 'fas fa-code', name: 'TypeORM' },
                    { icon: 'fab fa-css3-alt', name: 'Tailwind' }
                ]
            },
            volunteer: {
                image: 'fas fa-hands-helping',
                title: 'Volunteer Management System',
                subtitle: 'Backend Application',
                description: "Volunteer Management System is a backend application built with ASP.NET Core and Entity Framework Core to streamline volunteer coordination. It offers features for managing volunteer profiles, event scheduling, and tracking hours contributed. The system is designed to be robust, secure, and scalable, providing a solid foundation for organizations to efficiently manage their volunteer workforce.",
                features: [
                    { title: "Volunteer Profiles", desc: "Create and manage detailed volunteer profiles with contact information and skills." },
                    { title: "Event Scheduling", desc: "Organize and schedule volunteer events with automated reminders." },
                    { title: "Hours Tracking", desc: "Log and track volunteer hours with reporting capabilities." },
                ],
                technologies: [
                    { icon: 'fas fa-cogs', name: 'ASP.NET Core' },
                    { icon: 'fas fa-code', name: 'C#' },
                    { icon: 'fas fa-database', name: 'Entity Framework Core' },
                    { icon: 'fas fa-server', name: 'SQL Server' }
                ]
            }
        };
        window.projectData = projectData;

        // Modal Functions
        function openProjectModal(projectId) {
            if (projectId) {
                window.location.href = `project1.html?id=${projectId}`;
            }
        }

        // Initialize projects page
        function initializeProjectsPage() {
            const projectsGrid = document.getElementById('allProjectsGrid');
            if (!projectsGrid) return;
            
            // Create all project cards for the projects page (without carousel-slide class)
            projectsGrid.innerHTML = allProjects.map(project => {
                const statusColor = project.status === 'Live' ? '#22c55e' : '#f59e0b';

                const isImage = project.image.endsWith('.jpg') || project.image.endsWith('.png');
            const imageContent = isImage 
        ? `<img src="${project.image}" alt="${project.title} Image" />`
        : `<i class="${project.image}"></i>`;
                
                return `
                <div class="project-card carousel-slide">
                    <div class="project-image">
                        ${imageContent}
                <div class="project-status" style="background: ${statusColor}">${project.status}</div>
            </div>
                    <div class="project-content">
                        <div class="project-header">
                            <h3 class="project-title">${project.title}</h3>
                            <span class="project-category">${project.category}</span>
                        </div>
                        <p class="project-description">${project.description}</p>
                        <div class="project-tech">
                            ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                        <div class="project-actions">
                            <a onclick="openProjectModal('${project.id}')" class="project-link primary">
                                <i class="fas fa-eye"></i>
                                View Details
                            </a>
                            <!--<a href="#" class="project-link secondary" target="_blank" rel="noopener noreferrer">
                                <i class="fab fa-github"></i>
                                Code
                            </a>-->
                        </div>
                    </div>
                </div>
            `;
            }).join('');
        }

        // Scroll to download section
        function scrollToDownloadSection() {
            const downloadSection = document.getElementById('downloadSection');
            if (downloadSection) {
                downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        // Simple direct download function
function downloadResume() {
    const pdfPath = "resume/Ahsan_Habib_Resume.pdf"; // <-- your PDF location
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = "Ahsan_Habib_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


        // Download resume function
        /*function downloadResume() {
            // Create a temporary container for the resume content
            const resumeDoc = document.querySelector('.resume-document');
            if (!resumeDoc) return;

            // Show loading state
            const downloadButtons = document.querySelectorAll('button[onclick="downloadResume()"]');
            downloadButtons.forEach(btn => {
                btn.disabled = true;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
            });

            // Clone the resume document
            const clonedResume = resumeDoc.cloneNode(true);
            
            // Create a new window for printing
            const printWindow = window.open('', '_blank');
            
            // Write the HTML content with styles
            printWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>Ahsan Habib- Resume</title>
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
                    <style>
                        /*
@page {
    size: A4;
    margin: 0;
}


html, body {
    width: 210mm;
    height: 297mm;
    margin: 0;
    padding: 0;
}


.resume-document {
    width: 100%;
    max-width: 210mm;
    padding: 18mm 18mm;
    box-sizing: border-box;
}


.resume-section {
    margin-bottom: 14px;
    page-break-inside: avoid;
}


.resume-name {
    font-size: 1.8rem !important;
}
.resume-title-role {
    font-size: 1rem !important;
}


.resume-list li {
    line-height: 1.35;
    margin-bottom: 5px;
}


.resume-skills-grid {
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 10px !important;
}
.resume-skill-category {
    padding: 10px !important;
}


.resume-section:nth-of-type(5),
.resume-section:nth-of-type(4) {
    display: none;
}

                    </style>
                </head>
                <body>
                    ${clonedResume.outerHTML}
                </body>
                </html>
            `);
            
            printWindow.document.close();
            
            // Wait for content to load, then trigger print dialog
            printWindow.onload = function() {
                setTimeout(() => {
                    printWindow.print();
                    
                    // Reset button states
                    downloadButtons.forEach(btn => {
                        btn.disabled = false;
                        const isWhiteBtn = btn.classList.contains('btn-white');
                        btn.innerHTML = isWhiteBtn 
                            ? '<i class="fas fa-file-pdf"></i> <span id="resume-text">Download PDF</span>'
                            : '<i class="fas fa-download"></i> Download Resume';
                    });
                }, 250);
            };
        }*/

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            onConfigChange(defaultConfig);
            initializePageAnimations();
            initializeCarousel();
            initializeProjectsPage();
        });