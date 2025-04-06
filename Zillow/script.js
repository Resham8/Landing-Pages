function toggleMenu() {
  document.getElementById('mainNav').classList.toggle('mobile-menu-open');
}

document.addEventListener('click', function(event) {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove('show');
    }
  });
});


document.querySelectorAll('.dropdown-toggle').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    const parent = this.parentElement;
    

    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (dropdown !== parent) {
        dropdown.classList.remove('show');
      }
    });
      
    parent.classList.toggle('show');
  });
});

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('active');
  document.body.classList.toggle('no-scroll'); 
}