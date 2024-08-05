document.addEventListener('DOMContentLoaded', function() {
    var toggler = document.querySelector('.navbar-toggler');
    var collapse = document.querySelector('#navbarNav');
  
    // Add event listener for toggle button
    toggler.addEventListener('click', function() {
      if (collapse.classList.contains('show')) {
        toggler.classList.remove('toggled');
      } else {
        toggler.classList.add('toggled');
      }
    });
  });
  