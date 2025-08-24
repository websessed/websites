

/* custom cursor */
document.addEventListener('mousemove', function(e) {
    document.querySelectorAll('.cursor')[0].style.left = e.clientX + 'px';
    document.querySelectorAll('.cursor')[0].style.top = e.clientY + 'px';
  
    setTimeout(function() {
      document.querySelectorAll('.cursor')[1].style.left = e.clientX + 'px';
      document.querySelectorAll('.cursor')[1].style.top = e.clientY + 'px';
    }, 120);
  });
  
  document.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('mouseenter', function() {
      document.querySelectorAll('.cursor').forEach(function(cursor) {
        cursor.classList.add('big');
      });
    });
  
    link.addEventListener('mouseleave', function() {
      document.querySelectorAll('.cursor').forEach(function(cursor) {
        cursor.classList.remove('big');
      });
    });
});


