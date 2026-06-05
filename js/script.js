
document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("modalRegister");
    let btns = document.querySelectorAll("#btn-agendar-hero, #btn-agendar-about");
    let closeBtn = document.getElementById("modalRegisterClose");
    let overlay = document.getElementById("modalRegisterOverlay");

    btns.forEach(btn => {
        btn.onclick = () => modal && (modal.hidden = false);
    });
    closeBtn && (closeBtn.onclick = () => modal && (modal.hidden = true));
    overlay && (overlay.onclick = () => modal && (modal.hidden = true));

    const faqItems = document.querySelectorAll('.faq-item');
    function toggleFaqItem(item, forceOpen = null) {
        const button = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const isOpen = item.classList.contains('faq-item--open');
        const shouldOpen = forceOpen !== null ? forceOpen : !isOpen;
        if (shouldOpen) {
            item.classList.add('faq-item--open');
            if (answer) answer.hidden = false;
            if (button) button.setAttribute('aria-expanded', 'true');
        } else {
            item.classList.remove('faq-item--open');
            if (answer) answer.hidden = true;
            if (button) button.setAttribute('aria-expanded', 'false');
        }
    }
    faqItems.forEach((item, idx) => {
        const answerDiv = item.querySelector('.faq-answer');
        const btn = item.querySelector('.faq-question');
        if (idx === 0) {
            item.classList.add('faq-item--open');
            if (answerDiv) answerDiv.hidden = false;
            if (btn) btn.setAttribute('aria-expanded', 'true');
        } else {
            item.classList.remove('faq-item--open');
            if (answerDiv) answerDiv.hidden = true;
            if (btn) btn.setAttribute('aria-expanded', 'false');
        }
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleFaqItem(item);
            });
        }
    });
});
