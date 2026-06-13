/* =========================================================  
   INTERACTIVE REFACTOR INTERFACE ENGINE — ENHANCED
   ========================================================= */  

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. THEMATIC CONTEXT REFACTOR ENGINE ---------- */  
  const themeToggle = document.querySelector('#theme-toggle');  
  
  // Set system dark mode as standard setup configuration natively
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
  }

  themeToggle.addEventListener('click', () => {  
    document.body.classList.toggle('dark');  
  });  


  /* ---------- 2. ACTIVE SYSTEM FILTER ENGINE (+400 XP TASK) ---------- */  
  const filterButtons = document.querySelectorAll('.filter-btn');  
  const targetCards = document.querySelectorAll('.projects-grid .card, .figma-embed-container');  
  const countDisplay = document.querySelector('#project-count');  

  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      // Manage standard layout state classes
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const targetedCategory = button.getAttribute('data-filter');
      let quantifiedCounter = 0;

      targetCards.forEach(card => {
        const structuralCategory = card.getAttribute('data-category');
        
        // Dynamic Fade States Execution Pipeline
        if (targetedCategory === 'all' || structuralCategory === targetedCategory) {
          card.classList.remove('hidden');
          quantifiedCounter++;
        } else {
          card.classList.add('hidden');
        }
      });

      // Update functional counter array layout dynamically
      countDisplay.textContent = `Showing ${quantifiedCounter} project${quantifiedCounter === 1 ? '' : 's'}`;
    });
  });


  /* ---------- 3. BACK TO TOP CONTROL FLOW ---------- */  
  const toTop = document.querySelector('#to-top');  

  window.addEventListener('scroll', () => {  
    if (window.scrollY > 400) {  
      toTop.classList.add('show');  
    } else {  
      toTop.classList.remove('show');  
    }  
  });  

  toTop.addEventListener('click', () => {  
    window.scrollTo({ top: 0, behavior: 'smooth' });  
  });  


  /* ---------- 4. HIGH-PERFORMANCE INTERSECTION OBSERVER ---------- */  
  const revealItems = document.querySelectorAll('.reveal');  

  const operationalObserver = new IntersectionObserver((entries) => {  
    entries.forEach((entry) => {  
      if (entry.isIntersecting) {  
        entry.target.classList.add('is-visible');  
        operationalObserver.unobserve(entry.target);  
      }  
    });  
  }, {  
    threshold: 0.05  
  });  

  revealItems.forEach((item) => operationalObserver.observe(item));  
});
document.addEventListener("DOMContentLoaded", function() {
  const grid = document.getElementById("projects-grid");

  // Grab the JSON file created by the Python script
  fetch("projects.json")
    .then(res => res.json())
    .then(projects => {
      // Clear out any placeholder HTML design cards first
      grid.innerHTML = ""; 
      
      // Generate standard design cards for each project
      projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";
        card.setAttribute("data-category", project.category);
        
        card.innerHTML = `
          <span class="tag">${project.category} Category</span>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="chips">
            <span class="chip">${project.tech}</span>
          </div>
          <a href="${project.link}" target="_blank" class="card-link">View Project ↗</a>
        `;
        
        grid.appendChild(card);
      });
    })
    .catch(err => console.log("Run the Python script locally first to generate the file:", err));
});