(function(){
  const primaryButtons = document.querySelectorAll('.dd-btn');
  let openMenu = null;
  let openPane = null;

  function closePane(){
    if(openPane){
      openPane.classList.add('hidden');
      const trig = document.querySelector('.secondary-trigger[aria-expanded="true"]');
      if(trig) trig.setAttribute('aria-expanded','false');
      openPane = null;
    }
  }
  function closeMenu(menu){
    if(menu){
      closePane();
      menu.classList.add('hidden');
      const btn = document.querySelector('.dd-btn[aria-expanded="true"][data-menu="'+menu.id.replace('menu-','')+'"]');
      if(btn) btn.setAttribute('aria-expanded','false');
      if(openMenu === menu) openMenu = null;
    }
  }

  primaryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const menu = document.getElementById('menu-' + btn.dataset.menu);
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if(openMenu && openMenu !== menu) closeMenu(openMenu);
      if(!expanded){
        menu.classList.remove('hidden');
        btn.setAttribute('aria-expanded','true');
        openMenu = menu;
        const focusable = menu.querySelector('button.secondary-trigger, a');
        if(focusable) focusable.focus();
      } else {
        closeMenu(menu);
        btn.focus();
      }
    });
  });

  // Secondary pane logic
  const secondaryTriggers = document.querySelectorAll('.secondary-trigger');
  secondaryTriggers.forEach(trig => {
    trig.addEventListener('click', () => {
      const pane = document.getElementById('secondary-' + trig.dataset.secondary);
      const expanded = trig.getAttribute('aria-expanded') === 'true';
      if(openPane && openPane !== pane) closePane();
      if(!expanded){
        pane.classList.remove('hidden');
        trig.setAttribute('aria-expanded','true');
        openPane = pane;
        const firstLink = pane.querySelector('a');
        if(firstLink) firstLink.focus();
      } else {
        closePane();
        trig.focus();
      }
    });
  });

  // Close button
  document.querySelectorAll('[data-close-pane]').forEach(btn => {
    btn.addEventListener('click', () => {
      closePane();
      const trig = document.querySelector('.secondary-trigger[data-secondary="leefgroepen"]');
      if(trig) trig.focus();
    });
  });

  // Global listeners
  window.addEventListener('keydown', e => {
    if(e.key === 'Escape'){
      if(openPane){ closePane(); return; }
      if(openMenu){ closeMenu(openMenu); }
    }
  });

  window.addEventListener('click', e => {
    const withinMenu = openMenu && openMenu.contains(e.target);
    const btnClicked = e.target.closest('.dd-btn');
    if(openMenu && !withinMenu && !btnClicked){ closeMenu(openMenu); }
    if(openPane && !openPane.contains(e.target) && !e.target.closest('.secondary-trigger')){ closePane(); }
  });
})();