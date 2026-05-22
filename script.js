// Script simples para interatividade básica

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Botão de play do vídeo (exemplo simples)
const playButton = document.querySelector('.btn-play');
if (playButton) {
    playButton.addEventListener('click', function () {
        alert('Aqui você pode adicionar um iframe do YouTube ou Vimeo com seu vídeo!');
        // Exemplo: substituir o placeholder por um iframe
        // const videoContainer = document.querySelector('.video-placeholder');
        // videoContainer.innerHTML = '<iframe width="100%" height="100%" src="SEU_VIDEO_URL" frameborder="0" allowfullscreen></iframe>';
    });
}

// Animação ao scroll (elementos aparecem conforme usuário rola a página)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Adiciona animação aos cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.phase-card, .guarantee-item, .testimonial-card, .target-audience');

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Efeito nos botões CTA
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Aqui você pode adicionar ação de conversão, redirect, etc.
        console.log('Botão CTA clicado!');
        // window.location.href = 'sua-pagina-de-checkout.html';
    });
});

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Fecha todas as outras perguntas
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Abre a pergunta clicada (se não estava aberta)
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// Animações da seção problema
document.addEventListener('DOMContentLoaded', function () {
    const problemSection = document.querySelector('.problem-section');

    if (problemSection) {
        const problemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Anima o título
                    const title = problemSection.querySelector('.section-title');
                    if (title) {
                        title.classList.add('animate');
                    }

                    // Anima os elementos em sequência
                    setTimeout(() => {
                        const intro = problemSection.querySelector('.problem-intro');
                        if (intro) intro.classList.add('animate');
                    }, 200);

                    setTimeout(() => {
                        const text = problemSection.querySelector('.problem-text');
                        if (text) text.classList.add('animate');
                    }, 400);

                    setTimeout(() => {
                        const highlight = problemSection.querySelector('.problem-highlight');
                        if (highlight) highlight.classList.add('animate');
                    }, 600);

                    // Anima os problem-items em cascata
                    setTimeout(() => {
                        const items = problemSection.querySelectorAll('.problem-item');
                        items.forEach(item => {
                            item.classList.add('animate');
                        });
                    }, 800);

                    // Anima a conclusão
                    setTimeout(() => {
                        const conclusion = problemSection.querySelector('.problem-conclusion');
                        if (conclusion) conclusion.classList.add('animate');
                    }, 1800);

                    // Para de observar após animar
                    problemObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2 // Ativa quando 20% da seção estiver visível
        });

        problemObserver.observe(problemSection);
    }
});

// Animação da lista de benefícios
document.addEventListener('DOMContentLoaded', function () {
    const benefitsList = document.querySelector('.benefits-list');

    if (benefitsList) {
        const benefitsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const items = benefitsList.querySelectorAll('li');

                    // Anima cada item com um delay crescente
                    items.forEach((item, index) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, index * 200); // 200ms de intervalo entre cada item
                    });

                    benefitsObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        benefitsObserver.observe(benefitsList);
    }
});
