// Tab Switching Functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active-content");
    }

    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active-content");
    evt.currentTarget.classList.add("active");
}

// Contact Form Handler
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const inquiryType = document.getElementById("inquiry-type").value;
            const name = document.getElementById("name").value;
            alert(`Thank you, ${name}. Your message regarding "${inquiryType}" has been recorded.`);
            form.reset();
        });
    }
});
