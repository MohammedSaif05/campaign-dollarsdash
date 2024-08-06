document.addEventListener('DOMContentLoaded', function() {
    var toggler = document.querySelector('.navbar-toggler');
    var collapse = document.querySelector('#navbarNav');
  
    toggler.addEventListener('click', function() {
      if (collapse.classList.contains('show')) {
        toggler.classList.remove('toggled');
      } else {
        toggler.classList.add('toggled');
      }
    });
  
    // Optional: Handle the collapse event to ensure icon changes when collapsing manually
    $(collapse).on('show.bs.collapse', function() {
      toggler.classList.add('toggled');
    }).on('hide.bs.collapse', function() {
      toggler.classList.remove('toggled');
    });
  });
  