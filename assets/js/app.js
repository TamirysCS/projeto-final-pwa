

import HtmlService from './HtmlService.js';
import AppointmentService from './AppointmentService.js';

class App {
    constructor() {
      this.registerServiceWorker();
      new HtmlService(new AppointmentService());
    }
      
    registerServiceWorker(){ 
      if ('serviceWorker' in navigator) {
        const onsuccess = () => console.log('[Service Worker] Registered');
        const onfailure = () => console.log('[Service Worker] Failed');
        
        navigator.serviceWorker
        .register('sw.js')
        .then(onsuccess)
        .catch(onfailure);
      }
    }
         
  }
  
  new App();


