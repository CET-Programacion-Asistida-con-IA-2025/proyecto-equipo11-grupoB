// ===== VARIABLES GLOBALES =====
let currentQuestion = 0;
let answers = [];
let testQuestions = [];

// ===== PREGUNTAS DEL TEST VOCACIONAL =====
const questions = [
    {
        question: "¿Qué te resulta más interesante?",
        options: [
            { text: "Resolver problemas complejos paso a paso", value: "logica" },
            { text: "Descubrir cómo funcionan las cosas", value: "investigacion" },
            { text: "Crear algo desde cero", value: "creacion" },
            { text: "Ayudar a las personas con tecnología", value: "social" }
        ]
    },
    {
        question: "En tu tiempo libre prefieres:",
        options: [
            { text: "Jugar videojuegos o hacer puzzles", value: "logica" },
            { text: "Ver documentales científicos", value: "investigacion" },
            { text: "Hacer manualidades o proyectos DIY", value: "creacion" },
            { text: "Participar en proyectos comunitarios", value: "social" }
        ]
    },
    {
        question: "¿Qué materia te gustaba más en el colegio?",
        options: [
            { text: "Matemática", value: "logica" },
            { text: "Biología o Física", value: "investigacion" },
            { text: "Tecnología o Arte", value: "creacion" },
            { text: "Psicología o Sociología", value: "social" }
        ]
    },
    {
        question: "Tu trabajo ideal sería:",
        options: [
            { text: "Analizar datos y encontrar patrones", value: "logica" },
            { text: "Hacer experimentos en un laboratorio", value: "investigacion" },
            { text: "Diseñar aplicaciones o productos", value: "creacion" },
            { text: "Desarrollar tecnología accesible", value: "social" }
        ]
    },
    {
        question: "¿Cómo te gusta trabajar?",
        options: [
            { text: "Solo/a, concentrada en el problema", value: "logica" },
            { text: "En equipo pequeño de investigación", value: "investigacion" },
            { text: "Liderando proyectos creativos", value: "creacion" },
            { text: "Colaborando con muchas personas", value: "social" }
        ]
    },
    {
        question: "¿Qué te motiva más?",
        options: [
            { text: "Resolver problemas técnicos difíciles", value: "logica" },
            { text: "Descubrir algo nuevo para la ciencia", value: "investigacion" },
            { text: "Ver tu creación siendo usada", value: "creacion" },
            { text: "Hacer la diferencia en la sociedad", value: "social" }
        ]
    }
];

// ===== PERFILES Y RESULTADOS =====
const profiles = {
    logica: {
        title: "🧮 Mente Lógica",
        description: "Tenés una mente analítica que disfruta de los desafíos matemáticos y la resolución de problemas complejos. Te fascina encontrar patrones y crear soluciones eficientes.",
        careers: [
            "Matemática",
            "Ingeniería en Sistemas",
            "Ciencias de la Computación",
            "Ingeniería Industrial",
            "Estadística"
        ],
        color: "#5E60CE"
    },
    investigacion: {
        title: "🔬 Investigadora Científica",
        description: "Tu curiosidad natural te lleva a querer entender el mundo a nivel profundo. Te emociona la idea de hacer descubrimientos que puedan cambiar nuestra comprensión del universo.",
        careers: [
            "Biotecnología",
            "Física",
            "Química",
            "Biología",
            "Astronomía"
        ],
        color: "#3A0CA3"
    },
    creacion: {
        title: "🎨 Creadora Tecnológica",
        description: "Combinás creatividad con habilidades técnicas. Te gusta dar vida a ideas innovadoras y crear productos que la gente pueda usar y disfrutar.",
        careers: [
            "Ingeniería en Sistemas",
            "Diseño de UX/UI",
            "Arquitectura",
            "Ingeniería Biomédica",
            "Desarrollo de Videojuegos"
        ],
        color: "#C8B6FF"
    },
    social: {
        title: "🌍 Tecnóloga Social",
        description: "Te interesa usar la ciencia y tecnología para resolver problemas sociales. Querés que tu trabajo tenga un impacto positivo en la vida de las personas.",
        careers: [
            "Ingeniería Ambiental",
            "Medicina",
            "Psicología Computacional",
            "Tecnología Educativa",
            "Salud Pública"
        ],
        color: "#1E1E1E"
    }
};

// ===== FUNCIONES PRINCIPALES =====

// Función para inicializar el test
function initializeTest() {
    testQuestions = [...questions];
    currentQuestion = 0;
    answers = [];
    showQuestion();
}

// Función para mostrar una pregunta
function showQuestion() {
    const testContainer = document.getElementById('test-questions');
    const question = testQuestions[currentQuestion];
    
    testContainer.innerHTML = `
        <div class="question">
            <div class="question-counter">Pregunta ${currentQuestion + 1} de ${testQuestions.length}</div>
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <button class="option-btn" onclick="selectOption('${option.value}', ${index})">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
            <div class="test-navigation">
                <button class="nav-btn" onclick="previousQuestion()" 
                        ${currentQuestion === 0 ? 'disabled' : ''}>
                    Anterior
                </button>
                <button class="nav-btn" id="next-btn" onclick="nextQuestion()" disabled>
                    ${currentQuestion === testQuestions.length - 1 ? 'Ver resultado' : 'Siguiente'}
                </button>
            </div>
        </div>
    `;
}

// Función para seleccionar una opción
function selectOption(value, index) {
    // Remover selección anterior
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Marcar la opción seleccionada
    document.querySelectorAll('.option-btn')[index].classList.add('selected');
    
    // Guardar la respuesta
    answers[currentQuestion] = value;
    
    // Habilitar botón siguiente
    document.getElementById('next-btn').disabled = false;
}

// Función para ir a la siguiente pregunta
function nextQuestion() {
    if (answers[currentQuestion] === undefined) {
        alert('Por favor, seleccioná una respuesta antes de continuar.');
        return;
    }
    
    if (currentQuestion < testQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        showResult();
    }
}

// Función para ir a la pregunta anterior
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        
        // Si ya había una respuesta seleccionada, mostrarla
        if (answers[currentQuestion] !== undefined) {
            const question = testQuestions[currentQuestion];
            const selectedValue = answers[currentQuestion];
            const optionIndex = question.options.findIndex(opt => opt.value === selectedValue);
            
            if (optionIndex !== -1) {
                document.querySelectorAll('.option-btn')[optionIndex].classList.add('selected');
                document.getElementById('next-btn').disabled = false;
            }
        }
    }
}

// Función para calcular y mostrar el resultado
function showResult() {
    // Contar respuestas por tipo
    const counts = {
        logica: 0,
        investigacion: 0,
        creacion: 0,
        social: 0
    };
    
    answers.forEach(answer => {
        if (counts.hasOwnProperty(answer)) {
            counts[answer]++;
        }
    });
    
    // Encontrar el perfil dominante
    let dominantProfile = 'logica';
    let maxCount = 0;
    
    for (let profile in counts) {
        if (counts[profile] > maxCount) {
            maxCount = counts[profile];
            dominantProfile = profile;
        }
    }
    
    // Mostrar resultado
    const result = profiles[dominantProfile];
    const testContainer = document.getElementById('test-questions');
    const resultContainer = document.getElementById('test-result');
    
    // Ocultar preguntas y mostrar resultado
    testContainer.style.display = 'none';
    resultContainer.classList.remove('hidden');
    
    // Llenar contenido del resultado
    document.getElementById('result-title').textContent = result.title;
    document.getElementById('result-description').textContent = result.description;
    
    const careersContainer = document.getElementById('result-careers');
    careersContainer.innerHTML = `
        <div class="result-careers">
            <h4>Carreras recomendadas para vos:</h4>
            <ul>
                ${result.careers.map(career => `<li>${career}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Aplicar color del perfil
    document.getElementById('result-title').style.color = result.color;
}

// Función para reiniciar el test
function restartTest() {
    document.getElementById('test-questions').style.display = 'block';
    document.getElementById('test-result').classList.add('hidden');
    initializeTest();
}

// Función para scroll suave al test
function scrollToTest() {
    document.getElementById('test').scrollIntoView({
        behavior: 'smooth'
    });
}

// ===== FUNCIONES DE NAVEGACIÓN =====

// Función para el menú hamburguesa (mobile)
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Función para smooth scroll en enlaces de navegación
function setupSmoothScroll() {
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
}

// ===== EFECTOS VISUALES =====

// Función para animaciones en scroll
function setupScrollAnimations() {
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
    
    // Observar elementos que queremos animar
    document.querySelectorAll('.carrera-card, .vida-card, .recurso-category, .uni-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Función para el efecto de navegación fija
function setupStickyNav() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
}

// ===== INICIALIZACIÓN =====

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar el test
    initializeTest();
    
    // Configurar navegación suave
    setupSmoothScroll();
    
    // Configurar animaciones
    setupScrollAnimations();
    
    // Configurar navegación fija
    setupStickyNav();
    
    // Configurar menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú mobile al hacer click en un enlace
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});

// ===== FUNCIONES AUXILIARES =====

// Función para agregar clase de scroll al nav
function addScrolledClass() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
    }
}

// Escuchar scroll para efectos de navegación
window.addEventListener('scroll', addScrolledClass);

// ===== ACCESIBILIDAD =====

// Función para mejorar accesibilidad del test
function setupAccessibility() {
    // Agregar eventos de teclado para navegación
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            if (e.target.classList.contains('option-btn')) {
                e.target.click();
            }
        }
    });
    
    // Agregar roles ARIA
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
    });
}

// Configurar accesibilidad cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', setupAccessibility);

// ===== UTILIDADES =====

// Función para mostrar notificaciones (opcional)
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--violeta);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Función para validar email (si se agrega formulario de contacto)
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== ANALYTICS Y TRACKING =====

// Función para trackear eventos del test (opcional)
function trackTestEvent(eventName, data = {}) {
    // Aquí se podría integrar con Google Analytics o similar
    console.log('Test Event:', eventName, data);
}

// Trackear inicio del test
function trackTestStart() {
    trackTestEvent('test_started', {
        timestamp: new Date().toISOString()
    });
}

// Trackear finalización del test
function trackTestComplete(profile) {
    trackTestEvent('test_completed', {
        profile: profile,
        timestamp: new Date().toISOString()
    });
}

// ===== PERFORMANCE =====

// Función para lazy loading de imágenes (si se agregan)
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== INICIALIZACIÓN FINAL =====

// Asegurar que todo esté configurado
window.addEventListener('load', function() {
    // Configurar lazy loading si hay imágenes
    setupLazyLoading();
    
    // Trackear que la página cargó completamente
    console.log('STEM para vos - Sitio cargado completamente');
});

// Smooth scroll para el botón CTA
document.getElementById('exploreBtn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Animación de click en el botón
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    }, 150);
    
    // Smooth scroll (preparado para cuando agregues la sección de carreras)
    const targetSection = document.querySelector('#carreras');
    if (targetSection) {
        targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // Por ahora, scroll suave hacia abajo
        window.scrollBy({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }
});

// Parallax efecto sutil en el scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-elements .floating-particle');
    const animatedSvg = document.querySelector('.animated-svg');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.05 + (index * 0.01);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    if (animatedSvg) {
        animatedSvg.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.1}px)`;
    }
});

// Animación de entrada mejorada
window.addEventListener('load', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(50px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);
});

// Easter egg: click en el título para animación especial
document.querySelector('.hero-title').addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'titleGlow 2s ease-in-out infinite alternate, bounceIn 0.6s ease-out';
    }, 10);
});
