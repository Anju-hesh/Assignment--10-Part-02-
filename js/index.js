document.addEventListener('click', function(e) {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (!e.target.closest('.navbar-toggler') && navbarCollapse.classList.contains('show')) {
    document.querySelector('.navbar-toggler').click();
  }
});