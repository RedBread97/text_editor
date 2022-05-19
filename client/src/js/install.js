const butInstall = document.getElementById('buttonInstall');

butInstall.addEventListener('click', async () => {
  
    const promptEvent = window.deferredPrompt;
  
    if (!promptEvent) {
     return;
    }
  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
  });
  
  window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
  }); 