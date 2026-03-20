// Common functions for the Static Dashboard

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // Highlight active sidebar item based on filename
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === filename || (filename === '' && linkPath === 'index.html')) {
            link.classList.add('sidebar-item-active');
            // Remove default text-gray classes if active
            link.classList.remove('text-gray-600', 'hover:bg-gray-100');
            
            // Highlight icon if it exists
            const icon = link.querySelector('i');
            if (icon) {
                // Lucide replacement might have already happened or TBD
                icon.classList.add('text-white');
            }
        }
    });

    // Re-trigger icon replacement after potential dynamic content
    if (window.lucide) {
        lucide.createIcons();
    }

    // Navigation for buttons with data-href
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-href]');
        if (btn) {
            const href = btn.getAttribute('data-href');
            if (href) window.location.href = href;
        }
    });

    // Specific alerts for truly non-functional actions (optional, but less intrusive)
    document.querySelectorAll('.btn-coming-soon').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('This specific feature is coming soon!');
        });
    });

    // Logout functionality
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (confirm('Are you sure you want to logout?')) {
                window.location.href = 'index.html';
            }
        });
    }

    console.log('Dashboard Scripts Initialized. Current Page:', filename);
});
