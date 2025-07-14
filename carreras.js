 // Datos de las carreras
        const careers = {
            'ingenieria-informatica': {
                title: 'Ingeniería Informática',
                icon: '💻',
                description: 'Diseña y desarrolla sistemas informáticos complejos',
                whatIs: 'La Ingeniería Informática combina principios de ingeniería con ciencias de la computación para crear sistemas de software y hardware. Te prepara para resolver problemas complejos usando tecnología de vanguardia.',
                firstSteps: 'Comienza con lógica de programación, matemáticas discretas y fundamentos de algoritmos. Practica con lenguajes como Python o Java.',
                resources: [
                    { name: 'freeCodeCamp - Plataforma de aprendizaje interactivo', url: 'https://www.freecodecamp.org/learn/' },
                    { name: 'Exercism - Aprende a programar', url: 'https://exercism.org/tracks' },
                    { name: 'Sololearn – Aprende a programar desde cero', url: 'https://www.sololearn.com/es/' },
                    { name: 'The Odin Project – Desarrollo web completo desde cero', url: 'https://www.theodinproject.com/' }
                ],
                missions: [
                    {
                        title: 'Crea tu primera página web',
                        description: 'Crear una página web básica con un título, un párrafo y una imagen.',
                        link: 'https://www.sololearn.com/es/learn/courses/html-introduction'
                    },
                    {
                        title: 'Escribí tu primer programa en JavaScript',
                        description: 'Imprimí “Hola, Mundo” en la consola y aprendé a declarar variables.',
                        link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures'
                    },
                    {
                        title: 'Tu primer desafío en Python',
                        description: 'Empezá a programar con Python desde cero. Registrate y completá el primer ejercicio',
                        link: 'https://exercism.org/tracks/python/exercises'
                    }
                ],
                jobs: [
                    'Desarrolladora de Software',
                    'Ingeniera de Sistemas',
                    'Arquitecta de Software',
                    'Desarrolladora Full Stack',
                    'Ingeniera DevOps',
                    'Especialista en Ciberseguridad',
                    'Ingeniera de Datos',
                    'Consultora IT'
                ]
            },
            'ciencias-computacion': {
                title: 'Ciencias de la Computación',
                icon: '🔬',
                description: 'Explora los fundamentos teóricos y prácticos de la computación',
                whatIs: 'Las Ciencias de la Computación estudian algoritmos, estructuras de datos, y teoría computacional. Es la base científica de toda la tecnología moderna.',
                firstSteps: 'Aprende matemáticas discretas, lógica booleana, y algoritmos básicos. Practica programación en múltiples lenguajes.',
                resources: [
                    { name: 'CS50 Harvard: Introducción a la informática', url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science' },
                    { name: 'Khan Academy – Introducción a la Informática', url: 'https://es.khanacademy.org/computing/computer-science' },
                    { name: 'Coursera - Algoritmos Especializados', url: 'https://www.coursera.org/specializations/algorithms' },
                    { name: 'LeetCode - Práctica de Algoritmos', url: 'https://leetcode.com/problemset/all/' }
                ],
                missions: [
                    {
                        title: 'Explorá el mundo de la computación',
                        description: 'Completá “Week 0” y escribí 3 cosas nuevas que aprendiste sobre algoritmos o Scratch.',
                        link: 'https://cs50.harvard.edu/x/'
                    },
                    {
                        title: 'Practicá lógica con Khan Academy',
                        description: 'Comenzá el curso de introducción a la informática y lógica de Khan Academy.Completá las primeras 3 lecciones de lógica',
                        link: 'https://es.khanacademy.org/computing/computer-science'
                    },
                    {
                        title: 'Resolvé tu primer problema real',
                        description: 'Entrá a LeetCode y creá una cuenta. Buscá el ejercicio “Two Sum” o filtrá por “Easy”. No importa si no lo resolvés del todo: lo importante es empezar. Intentá resolver un problema “Easy” y leé las soluciones de otras personas.',
                        link: 'https://leetcode.com/problemset/'
                    }
                ],
                jobs: [
                    'Científica de Datos',
                    'Investigadora en IA',
                    'Analista de Algoritmos',
                    'Ingeniera de Machine Learning',
                    'Desarrolladora de Compiladores',
                    'Especialista en Teoría Computacional',
                    'Ingeniera de Búsqueda',
                    'Investigadora en Criptografía'
                ]
            },
            'ingenieria-biomedica': {
                title: 'Ingeniería Biomédica',
                icon: '🧬',
                description: 'Combina ingeniería y medicina para mejorar la salud',
                whatIs: 'La Ingeniería Biomédica aplica principios de ingeniería y ciencias físicas para resolver problemas en medicina y biología, creando dispositivos médicos y tecnologías para la salud.',
                firstSteps: 'Estudia biología, física, matemáticas y química. Aprende sobre anatomía y fisiología humana.',
                resources: [
                    { name: 'Khan Academy - Biología', url: 'https://www.khanacademy.org/science/biology' },
                    { name: 'MIT OpenCourseWare - Ingeniería Biomédica', url: 'https://ocw.mit.edu/courses/biological-engineering/' }
                ],
                missions: [
                    {
                        title: 'Conectá la biología con la tecnología',
                        description: 'Ingresá al curso de biología en Khan Academy y aprendé. Completá las primeras 3 lecciones de “Estructura celular”',
                        link: 'https://es.khanacademy.org/science/biology'
                    },
                ],
                jobs: [
                    'Ingeniera de Dispositivos Médicos',
                    'Especialista en Biomateriales',
                    'Ingeniera Clínica',
                    'Desarrolladora de Prótesis',
                    'Ingeniera de Rehabilitación',
                    'Especialista en Imagenología',
                    'Ingeniera de Tejidos',
                    'Consultora en Tecnología Médica'
                ]
            },
            'biotecnologia': {
                title: 'Biotecnología',
                icon: '🧪',
                description: 'Usa organismos vivos para crear productos útiles',
                whatIs: 'La Biotecnología utiliza sistemas biológicos, organismos vivos o sus derivados para crear productos y tecnologías que mejoren la vida humana y el medio ambiente.',
                firstSteps: 'Aprende biología molecular, química orgánica, microbiología y genética básica.',
                resources: [
                    { name: 'Learn Genetics – Universidad de Utah', url: 'https://learn.genetics.utah.edu/' },
                    { name: 'Khan Academy - Biología Molecular', url: 'https://www.khanacademy.org/science/biology/gene-expression-central-dogma' },
                ],
                missions: [
                    {
                        title: '¡Extraé ADN de forma virtual!',
                        description: 'Entrá al laboratorio interactivo y simulá cómo se extrae ADN paso a paso.',
                        link: 'https://learn.genetics.utah.edu/content/labs/extraction/'
                    }
                ],
                jobs: [
                    'Biotecnóloga Industrial',
                    'Genetista',
                    'Especialista en Bioprocessos',
                    'Investigadora en Farmacología',
                    'Ingeniera de Biocomustibles',
                    'Especialista en Bioseguridad',
                    'Desarrolladora de Vacunas',
                    'Consultora en Biotecnología Ambiental'
                ]
            },
            'fisica': {
                title: 'Física',
                icon: '⚛️',
                description: 'Descubre las leyes fundamentales del universo',
                whatIs: 'La Física estudia las propiedades y comportamiento de la materia y energía, desde partículas subatómicas hasta galaxias enteras.',
                firstSteps: 'Fortalece tu base en matemáticas (cálculo, álgebra lineal) y aprende mecánica clásica y termodinámica.',
                resources: [
                    { name: 'Khan Academy - Física', url: 'https://www.khanacademy.org/science/physics' },
                    { name: 'Coursera - Introducción a la Física', url: 'https://www.coursera.org/learn/physics-intro' },
                    { name: 'MIT OpenCourseWare - Física', url: 'https://ocw.mit.edu/courses/physics/' },
                    { name: 'PhET Simulations', url: 'https://phet.colorado.edu/es/simulations/category/physics' }
                ],
                missions: [
                    {
                        title: 'Experimento de péndulo',
                        description: 'Mide la aceleración de la gravedad usando un péndulo simple.',
                        link: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_es.html'
                    }
                ],
                jobs: [
                    'Física Teórica',
                    'Física Experimental',
                    'Investigadora en Nanotecnología',
                    'Física Médica',
                    'Especialista en Óptica',
                    'Física de Materiales',
                    'Investigadora en Energías Renovables',
                    'Consultora en Física Aplicada'
                ]
            },
            'matematica': {
                title: 'Matemática',
                icon: '📐',
                description: 'El lenguaje universal de la ciencia y la tecnología',
                whatIs: 'La Matemática es la ciencia que estudia patrones, estructuras y relaciones mediante números, símbolos y lógica. Es la base de todas las demás ciencias.',
                firstSteps: 'Domina álgebra, trigonometría y geometría. Luego avanza a cálculo diferencial e integral.',
                resources: [
                    { name: 'Khan Academy - Matemáticas', url: 'https://www.khanacademy.org/math' },
                    { name: 'Geogebra', url: 'https://www.geogebra.org/' },
                    { name: 'MIT OpenCourseWare - Matemáticas', url: 'https://ocw.mit.edu/courses/mathematics/' },
                    { name: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/' }
                ],
                missions: [
                    {
                        title: 'Volvé a lo esencial con lógica matemática',
                        description: 'Completá las primeras 3 lecciones del tema que más te interese (álgebra, aritmética, etc.)',
                        link: 'https://es.khanacademy.org/math'
                    },
                    {
                        title: 'Probá el poder de Wolfram Alpha',
                        description: 'Usá Wolfram Alpha, un “cerebro computacional”, para resolver problemas matemáticos automáticamente.',
                        link: 'https://www.wolframalpha.com/'
                    },
                    {
                        title: 'Visualizá una función en tiempo real',
                        description: ' Usá GeoGebra para graficar funciones y ver cómo cambian al modificar sus parámetros.',
                        link: 'https://www.geogebra.org/graphing'
                    }
                ],
                jobs: [
                    'Matemática Aplicada',
                    'Analista de Datos',
                    'Actuaria',
                    'Investigadora en Estadística',
                    'Criptógrafa',
                    'Profesora de Matemáticas',
                    'Consultora en Finanzas Cuantitativas',
                    'Especialista en Investigación Operativa'
                ]
            },
            'ingenieria-ambiental': {
                title: 'Ingeniería Ambiental',
                icon: '🌱',
                description: 'Protege y mejora el medio ambiente usando tecnología',
                whatIs: 'La Ingeniería Ambiental aplica principios de ingeniería, química y biología para resolver problemas ambientales y crear soluciones sostenibles.',
                firstSteps: 'Estudia química, biología, física y matemáticas. Aprende sobre ecosistemas y procesos ambientales.',
                resources: [
                    { name: 'Global Footprint Network – Calculadora de Huella Ecológica', url: 'https://www.footprintcalculator.org/es/quiz/0/transportation/fuel' },
                    { name: 'Khan Academy - Ecología', url: 'https://www.khanacademy.org/science/biology/ecology' },
                    { name: 'ClimateScience – Educación climática interactiva', url: 'https://climatescience.org/es' }
                ],
                missions: [
                    {
                        title: 'Convertite en embajadora del clima',
                        description: 'Explorá la plataforma ClimateScience y descubrí cómo se enseña sobre el cambio climático con datos, infografías y juegos.',
                        link: 'https://climatescience.org/es'
                    },
                    {
                        title: '¿Cómo impactamos el planeta?',
                        description: 'Aprendé sobre los efectos del cambio climático, los gases de efecto invernadero y cómo podemos reducirlos. Completá las primeras 3 lecciones de “Ecología y sostenibilidad”',
                        link: 'https://www.khanacademy.org/science/biology/ecology'
                    },
                    {
                        title: '¿Cuánto planeta necesitas?',
                        description: 'Calcula y propone reducir la huella de carbono de una actividad cotidiana.',
                        link: 'https://www.footprintcalculator.org/es/quiz/0/transportation/fuel'
                    }
                ],
                jobs: [
                    'Ingeniera Ambiental',
                    'Especialista en Tratamiento de Aguas',
                    'Consultora en Sostenibilidad',
                    'Gestora de Residuos',
                    'Especialista en Energías Renovables',
                    'Auditora Ambiental',
                    'Investigadora en Cambio Climático',
                    'Especialista en Remediación'
                ]
            },
            'diseno-ux-ui': {
                title: 'Diseño UX/UI',
                icon: '🎨',
                description: 'Crea experiencias digitales intuitivas y atractivas',
                whatIs: 'El Diseño UX/UI combina psicología, arte y tecnología para crear interfaces digitales que sean tanto funcionales como hermosas.',
                firstSteps: 'Aprende principios de diseño, psicología del usuario, y herramientas como Figma o Sketch.',
                resources: [
                    { name: 'Coursera - Diseño UX de Google', url: 'https://www.coursera.org/professional-certificates/google-ux-design' },
                    { name: 'Espacio UX – Plataforma latina de diseño de experiencia de usuario', url: 'https://www.espacioux.com/' },
                    { name: 'Figma Academy', url: 'https://www.figma.com/es-es//' }
                ],
                missions: [
                    {
                        title: '¿Qué hace una diseñadora UX?',
                        description: 'Explorá el curso introductorio de Google para entender qué es UX. Mirate el primer módulo y anotá 3 tareas que te gustaría hacer si trabajaras en UX.',
                        link: 'https://www.coursera.org/professional-certificates/google-ux-design'
                    },
                    {
                        title: 'Diseñá tu primera app en Figma',
                        description: 'Explorá los tutoriales de Figma y creá un prototipo simple: una app para recetas, clima o recordatorios. Diseñá al menos 2 pantallas. Pueden ser bocetos simples.',
                        link: 'https://www.figma.com/es-es//'
                    }
                ],
                jobs: [
                    'Diseñadora UX/UI',
                    'Investigadora de Usuarios',
                    'Diseñadora de Productos Digitales',
                    'Especialista en Usabilidad',
                    'Diseñadora de Interfaces',
                    'Estratega de Experiencia',
                    'Diseñadora de Servicios',
                    'Consultora en Diseño Digital'
                ]
            },
            'ingenieria-electronica': {
                title: 'Ingeniería Electrónica',
                icon: '⚡',
                description: 'Diseña y desarrolla sistemas electrónicos avanzados',
                whatIs: 'La Ingeniería Electrónica se enfoca en el diseño y desarrollo de componentes, dispositivos y sistemas electrónicos.',
                firstSteps: 'Aprende matemáticas, física, y conceptos básicos de electricidad y magnetismo.',
                resources: [
                    { name: 'Tinkercad Circuits (Autodesk)', url: 'https://www.tinkercad.com/circuits' },
                    { name: 'Coursera - Circuitos Eléctricos', url: 'https://www.coursera.org/learn/electrical-circuits' },
                    { name: 'All About Circuits', url: 'https://www.allaboutcircuits.com/' },
                    { name: 'Khan Academy – Circuitos eléctricos', url: 'https://es.khanacademy.org/science/physics/circuits-topic' }
                ],
                missions: [
                    {
                        title: 'Descubrí cómo funciona un circuito',
                        description: 'Ingresá a Khan Academy y aprendé qué es la corriente, el voltaje y cómo fluye la electricidad. Mirate 2 lecciones introductorias',
                        link: 'https://es.khanacademy.org/science/physics/circuits-topic'
                    },
                    {
                        title: 'Armá tu primer circuito virtual',
                        description: 'Usá Tinkercad para simular un circuito simple con una pila, resistencia y LED',
                        link: 'https://www.tinkercad.com/circuits'
                    },
                    {
                        title: 'Explorá los componentes electrónicos',
                        description: ' Ingresá al curso de Coursera sobre electrónica y aprendé para qué sirven los capacitores y resistencias.',
                        link: 'https://www.coursera.org/learn/electrical-circuits'
                    }
                ],
                jobs: [
                    'Ingeniera Electrónica',
                    'Diseñadora de Circuitos',
                    'Especialista en Microelectrónica',
                    'Ingeniera de Sistemas Embebidos',
                    'Desarrolladora de Hardware',
                    'Ingeniera de Telecomunicaciones',
                    'Especialista en IoT',
                    'Consultora en Electrónica'
                ]
            },
            'ingenieria-mecanica': {
                title: 'Ingeniería Mecánica',
                icon: '⚙️',
                description: 'Diseña y construye máquinas y sistemas mecánicos',
                whatIs: 'La Ingeniería Mecánica aplica principios de física, matemáticas y ciencias de materiales para diseñar, analizar y fabricar sistemas mecánicos.',
                firstSteps: 'Estudia física (mecánica, termodinámica), matemáticas (cálculo, álgebra lineal) y dibujo técnico.',
                resources: [
                    { name: 'Coursera - Ingeniería Mecánica', url: 'https://www.coursera.org/learn/mechanics-of-materials' },
                    { name: 'Learn Engineering (web y app)', url: 'https://www.lesics.com/engineering-animation.html' },
                    { name: 'AuPhET – Simulaciones interactivas de física mecánica', url: 'https://phet.colorado.edu/es/simulations/filter?subjects=physics&type=html' }
                ],
                missions: [
                    {
                        title: 'Descubrí cómo se mueven las cosas',
                        description: 'Ingresá a Khan Academy y explorá las leyes del movimiento. Completá las lecciones de “Fuerzas y Movimiento”',
                        link: 'https://www.khanacademy.org/science/physics'
                    },
                    {
                        title: '¿Cómo funciona una máquina real?',
                        description: 'Ingresá a Learn Engineering y elegí un video o artículo que muestre el funcionamiento de una máquina real (motor, freno, turbina)',
                        link: 'https://www.lesics.com/engineering-animation.html'
                    },
                    {
                        title: 'Simulá una máquina en acción',
                        description: 'Usá PhET para experimentar con fuerzas, resortes o planos inclinados.',
                        link: 'https://phet.colorado.edu/es/simulations/filter?subjects=physics&type=html'
                    }
                ],
                jobs: [
                    'Ingeniera Mecánica',
                    'Diseñadora de Productos',
                    'Especialista en Manufactura',
                    'Ingeniera Automotriz',
                    'Ingeniera Aeroespacial',
                    'Especialista en Robótica',
                    'Ingeniera de Materiales',
                    'Consultora en Diseño Mecánico'
                ]
            }
        };

        // Funciones de utilidad
        function getProgressKey(careerId) {
            return `career_progress_${careerId}`;
        }

        function getProgress(careerId) {
            const progress = localStorage.getItem(getProgressKey(careerId));
            return progress ? JSON.parse(progress) : [];
        }

        function saveProgress(careerId, completedMissions) {
            localStorage.setItem(getProgressKey(careerId), JSON.stringify(completedMissions));
        }

        function showFeedback(message, type = 'success') {
            const feedback = document.getElementById('feedbackMessage');
            feedback.textContent = message;
            feedback.className = `feedback-message ${type}`;
            feedback.classList.add('show');
            setTimeout(() => {
                feedback.classList.remove('show');
            }, 3000);
        }

        // Animación del título
        function typeWriter(text, element, speed = 100) {
            let i = 0;
            element.innerHTML = '';
            element.style.opacity = '1';
            
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }
            type();
        }

        // Generar tarjetas de carreras
        function generateCareersGrid() {
            const grid = document.getElementById('careersGrid');
            grid.innerHTML = '';

            Object.entries(careers).forEach(([id, career]) => {
                const progress = getProgress(id);
                const completedMissions = progress.length;
                const totalMissions = career.missions.length;
                
                const card = document.createElement('div');
                card.className = 'career-card';
                card.onclick = () => openModal(id);
                
                card.innerHTML = `
                    <div class="career-icon">${career.icon}</div>
                    <h3 class="career-title">${career.title}</h3>
                    <p class="career-description">${career.description}</p>
                    <div class="career-progress">
                        <span>Progreso: ${completedMissions}/${totalMissions} misiones</span>
                        <span class="progress-badge">${Math.round((completedMissions / totalMissions) * 100)}%</span>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        }

        // Abrir modal
        function openModal(careerId) {
            const career = careers[careerId];
            const modal = document.getElementById('careerModal');
            const modalIcon = document.getElementById('modalIcon');
            const modalTitle = document.getElementById('modalTitle');
            const modalBody = document.getElementById('modalBody');

            modalIcon.textContent = career.icon;
            modalTitle.textContent = career.title;
            
            const progress = getProgress(careerId);
            
            modalBody.innerHTML = `
                <div class="modal-section">
                    <h3 class="section-title">💡 ¿Qué es esta carrera?</h3>
                    <div class="section-content">
                        <p>${career.whatIs}</p>
                    </div>
                </div>

                <div class="modal-section">
                    <h3 class="section-title">🚀 ¿Qué aprender primero?</h3>
                    <div class="section-content">
                        <p>${career.firstSteps}</p>
                    </div>
                </div>

                <div class="modal-section">
                    <h3 class="section-title">📚 Recursos recomendados</h3>
                    <div class="section-content">
                        <ul class="resource-list">
                            ${career.resources.map(resource => `
                                <li class="resource-item">
                                    <a href="${resource.url}" class="resource-link" target="_blank" rel="noopener noreferrer">
                                        ${resource.name}
                                    </a>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                <div class="modal-section">
                    <h3 class="section-title">🎯 Mini-misiones prácticas</h3>
                    <div class="section-content">
                        <div class="missions-container">
                            ${career.missions.map((mission, index) => `
                                <div class="mission-card ${progress.includes(index) ? 'completed' : ''}">
                                    <div class="mission-header">
                                        <div class="mission-title">${mission.title}</div>
                                    </div>
                                    <div class="mission-description">${mission.description}</div>
                                    <div class="mission-actions">
                                        <a href="${mission.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                            Ir al recurso
                                        </a>
                                        <button class="btn ${progress.includes(index) ? 'btn-success' : 'btn-outline'}" 
                                                onclick="toggleMissionProgress('${careerId}', ${index})" 
                                                id="mission-btn-${index}">
                                            ${progress.includes(index) ? '✅ Completada' : '✅ Marcar como completada'}
                                        </button>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="modal-section">
                    <h3 class="section-title">💼 Salidas laborales</h3>
                    <div class="section-content">
                        <div class="job-list">
                            ${career.jobs.map(job => `
                                <div class="job-item">${job}</div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <div class="progress-actions">
                    <button class="reset-btn" onclick="resetProgress('${careerId}')">
                        🔄 Restablecer progreso
                    </button>
                </div>
            `;

            modal.style.display = 'block';
            setTimeout(() => {
                modal.classList.add('active');
            }, 10);
        }

        // Cerrar modal
        function closeModal() {
            const modal = document.getElementById('careerModal');
            modal.classList.remove('active');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }

        // Alternar progreso de misión
        function toggleMissionProgress(careerId, missionIndex) {
            const progress = getProgress(careerId);
            const isCompleted = progress.includes(missionIndex);
            
            if (isCompleted) {
                const newProgress = progress.filter(index => index !== missionIndex);
                saveProgress(careerId, newProgress);
                showFeedback('Misión marcada como no completada', 'info');
            } else {
                progress.push(missionIndex);
                saveProgress(careerId, progress);
                showFeedback('¡Misión completada! 🎉', 'success');
            }
            
            // Actualizar el modal y regenerar las tarjetas para mostrar el nuevo progreso
            openModal(careerId);
            generateCareersGrid();
        }

        // Restablecer progreso
        function resetProgress(careerId) {
            if (confirm('¿Estás segura de que quieres restablecer todo el progreso de esta carrera?')) {
                localStorage.removeItem(getProgressKey(careerId));
                showFeedback('Progreso restablecido correctamente', 'info');
                openModal(careerId);
                generateCareersGrid();
            }
        }

        // Event listeners
        document.getElementById('closeModal').onclick = closeModal;
        
        window.onclick = function(event) {
            const modal = document.getElementById('careerModal');
            if (event.target === modal) {
                closeModal();
            }
        };

        // Inicialización
        document.addEventListener('DOMContentLoaded', function() {
            // Animación del título
            typeWriter('Explora Carreras STEM', document.getElementById('mainTitle'), 80);
            
            // Generar grid de carreras
            generateCareersGrid();
        });
