const navBar = document.querySelectorAll('nav a'); // Select the navigation container

navBar.addEventListener('click', function(event) {
  if (event.target.tagName.toLowerCase() === 'a') { // Check if clicked element is an anchor
    const clickedLink = event.target; // Store the clicked anchor element

    // Loop through all nav links (optional, for styling changes on click)
    const navLinks = navBar.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active')); // Remove any active class
    clickedLink.classList.add('active'); // Add active class to clicked link (optional)

    event.preventDefault();
    const targetId = event.target.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  }
});
