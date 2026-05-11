/* ============================================================
   Light of Jesus Pastoral Care — Shared JavaScript
   js/script.js
   ============================================================ */

/* ── See More / See Less toggle (Who We Are) ── */
function toggleSeeMore() {
    const content = document.getElementById('whoSeeMoreContent');
    const btn     = document.getElementById('whoSeeMoreBtn');
    if (!content || !btn) return;

    const isOpen = content.classList.toggle('expanded');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    btn.innerHTML = isOpen
        ? 'Read Less <span class="btn-arrow">▼</span>'
        : 'Read More <span class="btn-arrow">▼</span>';
}

/* ── Smooth scrolling for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

/* ── Scroll-triggered fade-in animations ── */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

/* ── Active nav link highlighting on scroll ── */
window.addEventListener('scroll', () => {
    const sections      = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop    = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId     = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

/* ── Facebook Customer Chat SDK ── */
(function initFBChat() {
    const chatbox = document.getElementById('fb-customer-chat');
    if (!chatbox) return;
    chatbox.setAttribute('page_id', 'YOUR_PAGE_ID');
    chatbox.setAttribute('attribution', 'biz_inbox');

    window.fbAsyncInit = function () {
        FB.init({ xfbml: true, version: 'v18.0' });
    };

    (function (d, s, id) {
        if (d.getElementById(id)) return;
        const js  = d.createElement(s);
        js.id     = id;
        js.src    = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        d.getElementsByTagName(s)[0].parentNode.insertBefore(js, d.getElementsByTagName(s)[0]);
    }(document, 'script', 'facebook-jssdk'));
})();
