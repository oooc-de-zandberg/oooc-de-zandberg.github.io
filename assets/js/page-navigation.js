// Page-level navigation with active section highlighting
document.addEventListener('DOMContentLoaded', function() {
  const pageNav = document.querySelector('.page-nav-sidebar');
  
  if (!pageNav) return; // Exit if no page navigation exists
  
  const navLinks = pageNav.querySelectorAll('.page-nav-link');
  const sections = Array.from(navLinks).map(link => {
    const targetId = link.getAttribute('href').substring(1);
    return document.getElementById(targetId);
  }).filter(section => section !== null);
  
  if (sections.length === 0) return;
  
  let userClicked = false;
  let scrollTimeout;
  
  // Smooth scroll behavior
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      
      if (targetSection) {
        // Set flag to prevent observer from interfering
        userClicked = true;
        
        // Remove active class from all links immediately
        navLinks.forEach(link => link.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
        
        const offset = 90; // Account for sticky header
        const targetPosition = targetSection.offsetTop - offset;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without scrolling
        history.pushState(null, null, '#' + targetId);
        
        // Reset flag after scroll completes
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          userClicked = false;
        }, 1000);
      }
    });
  });
  
  // Intersection Observer for active section highlighting
  const observerOptions = {
    rootMargin: '-10% 0px -80% 0px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
  };
  
  let activeSection = null;
  
  const observer = new IntersectionObserver(entries => {
    // Don't interfere if user just clicked a link
    if (userClicked) return;
    
    // Find the topmost intersecting section
    const intersectingSections = entries
      .filter(entry => entry.isIntersecting)
      .map(entry => ({
        element: entry.target,
        top: entry.boundingClientRect.top
      }))
      .sort((a, b) => a.top - b.top);
    
    if (intersectingSections.length > 0) {
      const topSection = intersectingSections[0].element;
      
      if (topSection !== activeSection) {
        activeSection = topSection;
        
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to current section's link
        const activeLink = pageNav.querySelector(`a[href="#${topSection.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    }
  }, observerOptions);
  
  // Observe all sections
  sections.forEach(section => observer.observe(section));
  
  // Set initial active state based on URL hash or first section
  const hash = window.location.hash;
  if (hash) {
    const activeLink = pageNav.querySelector(`a[href="${hash}"]`);
    if (activeLink) {
      activeLink.classList.add('active');
    }
  } else if (navLinks.length > 0) {
    navLinks[0].classList.add('active');
  }
});
