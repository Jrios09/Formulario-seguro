document.addEventListener('DOMContentLoaded', function() {
  const leftSide = document.querySelector('.left-side');
  const rightSide = document.querySelector('.right-side');
  
  leftSide.style.transform = 'translateX(-50px)';
  leftSide.style.opacity = '0';
  rightSide.style.transform = 'translateX(50px)';
  rightSide.style.opacity = '0';
  
  setTimeout(() => {
    leftSide.style.transition = 'all 0.8s ease';
    rightSide.style.transition = 'all 0.8s ease';
    leftSide.style.transform = 'translateX(0)';
    leftSide.style.opacity = '1';
    rightSide.style.transform = 'translateX(0)';
    rightSide.style.opacity = '1';
  }, 200);
});

// Manejo del formulario
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = document.querySelector('input[name="nombre"]').value;
  const correo = document.querySelector('input[name="correo"]').value;
  const descripcion = document.querySelector('textarea[name="descripcion"]').value;
  
  if (!nombre || !correo || !descripcion) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
  }
  
  // Simulación de envío exitoso
  const btn = document.querySelector('.submit-btn');
  const originalText = btn.innerHTML;
  
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> ¡Proyecto Enviado!';
    setTimeout(() => {
      alert('¡Proyecto enviado exitosamente! Nos pondremos en contacto contigo pronto.');
      btn.innerHTML = originalText;
      btn.disabled = false;
      document.querySelector('form').reset();
    }, 1500);
  }, 2000);
});

// Efectos en los checkboxes
document.querySelectorAll('.checkbox-item').forEach(item => {
  item.addEventListener('click', function() {
    const checkbox = this.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    
    if (checkbox.checked) {
      this.style.borderColor = '#E91E63';
      this.style.background = '#FFF5F8';
    } else {
      this.style.borderColor = '#E8E8E8';
      this.style.background = '#F8F8F8';
    }
  });
});