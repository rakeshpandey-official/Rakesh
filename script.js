// Formulary tab switcher
function openTab(evt, tabName) {
    document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active-content"));
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}

// Contact form handler
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}. Your message has been routed to executive management.`);
    this.reset();
});
