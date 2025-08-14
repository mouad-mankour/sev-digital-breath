export const scrollToContact = () => {
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
    
    // Add highlight effect
    contactForm.classList.add('pulse-highlight');
    setTimeout(() => {
      contactForm.classList.remove('pulse-highlight');
    }, 2000);
  }
};