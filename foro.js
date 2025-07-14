// Sistema de navegación
function showSection(sectionId, event) {
    // Ocultar todas las secciones
    document.querySelectorAll('.forum-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');
    
    // Actualizar tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    if (event) {
        event.target.classList.add('active');
    }

}

// Mostrar posts de una categoría específica
function showPosts(category) {
    showSection('posts');
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector('.nav-tab[onclick="showSection(\'posts\')"]').classList.add('active');
}

// Mostrar post individual
function showPost(postId) {
    alert(`Abriendo post ${postId}. En una implementación real, esto mostraría el post completo con comentarios.`);
}

// Crear nuevo post
function createPost(event) {
    event.preventDefault();
    
    const category = document.getElementById('post-category').value;
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;
    const tags = document.getElementById('post-tags').value;
    
    if (!category || !title || !content) {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }
    
    // Simular creación de post
    alert('¡Post creado exitosamente! 🎉\n\nEn una implementación real, esto se guardaría en la base de datos.');
    
    // Limpiar formulario
    clearForm();
    
    // Ir a la sección de posts
    showSection('posts');
}

// Limpiar formulario
function clearForm() {
    document.getElementById('post-category').value = '';
    document.getElementById('post-title').value = '';
    document.getElementById('post-content').value = '';
    document.getElementById('post-tags').value = '';
}

// Simular like en posts
function likePost(postId) {
    alert(`¡Te gusta este post! 👍`);
}

// Función para mostrar notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? 'var(--violeta)' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    console.log('Foro STEM cargado correctamente');
    
    // Agregar animaciones de entrada
    const cards = document.querySelectorAll('.category-card, .post-item');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
