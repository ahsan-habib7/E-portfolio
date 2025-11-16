// Mobile menu toggle with smooth animations
        document.getElementById('mobile-menu-button').addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('mobile-menu-button');
            const icon = button.querySelector('i');
            
            menu.classList.toggle('hidden');
            menu.classList.toggle('show');
            
            // Animate hamburger to X
            if (!menu.classList.contains('hidden')) {
                icon.className = 'fas fa-times text-lg';
                button.style.transform = 'rotate(90deg)';
            } else {
                icon.className = 'fas fa-bars text-lg';
                button.style.transform = 'rotate(0deg)';
            }
        });

        // Dropdown toggle functionality
        function toggleDropdown(event) {
            event.preventDefault();
            const dropdown = document.getElementById('design-dropdown');
            const toggle = event.target.closest('.dropdown-toggle');
            
            dropdown.classList.toggle('show');
            toggle.classList.toggle('active');
        }

        // Placeholder function for navigation
        // Placeholder function for navigation
function showTogglePage(page) {
    
    // 1. **THE FIX: Call the main navigation function from script.js**
    if (typeof showPage === 'function') {
        showPage(page); 
    } else {
        console.error('showPage function not found. Is script.js loaded?');
    }

    console.log('Navigating to:', page);

    // 2. Close mobile menu after selection (existing logic)
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('mobile-menu-button');
    const icon = button.querySelector('i');
    
    menu.classList.add('hidden');
    menu.classList.remove('show');

    // Reset button icon
    if (icon) {
        icon.className = 'fas fa-bars text-lg';
        button.style.transform = 'rotate(0deg)';
    }
}

        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('mobile-menu-button');
            
            if (!menu.contains(event.target) && !button.contains(event.target)) {
                menu.classList.add('hidden');
                menu.classList.remove('show');
                const icon = button.querySelector('i');
                icon.className = 'fas fa-bars text-lg';
                button.style.transform = 'rotate(0deg)';
            }
        });

        // Initialize Element SDK
        const handledefaultConfig = {
            primary_color: "#667eea",
            secondary_color: "#764ba2",
            text_color: "#374151",
            background_color: "#f8fafc"
        };

        async function handleonConfigChange(config) {
            const primaryColor = config.primary_color || handledefaultConfig.primary_color;
            const secondaryColor = config.secondary_color || handledefaultConfig.secondary_color;
            const textColor = config.text_color || handledefaultConfig.text_color;
            
            // Update button gradient
            const button = document.getElementById('mobile-menu-button');
            if (button) {
                button.style.background = `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`;
            }
            
            // Update nav link hover colors
            const style = document.createElement('style');
            style.textContent = `
                .nav-link:hover {
                    background: linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%) !important;
                    color: white !important;
                }
                .dropdown-item:hover {
                    background: linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%) !important;
                }
            `;
            
            // Remove old style if exists
            const oldStyle = document.getElementById('dynamic-colors');
            if (oldStyle) oldStyle.remove();
            
            style.id = 'dynamic-colors';
            document.head.appendChild(style);
        }

        if (window.elementSdk) {
            window.elementSdk.init({
                handledefaultConfig,
                handleonConfigChange,
                mapToCapabilities: (config) => ({
                    recolorables: [
                        {
                            get: () => config.primary_color || handledefaultConfig.primary_color,
                            set: (value) => {
                                config.primary_color = value;
                                window.elementSdk.setConfig({ primary_color: value });
                            }
                        },
                        {
                            get: () => config.secondary_color || handledefaultConfig.secondary_color,
                            set: (value) => {
                                config.secondary_color = value;
                                window.elementSdk.setConfig({ secondary_color: value });
                            }
                        },
                        {
                            get: () => config.text_color || handledefaultConfig.text_color,
                            set: (value) => {
                                config.text_color = value;
                                window.elementSdk.setConfig({ text_color: value });
                            }
                        }
                    ],
                    borderables: [],
                    fontEditable: undefined,
                    fontSizeable: undefined
                }),
                mapToEditPanelValues: (config) => new Map()
            });
        }
