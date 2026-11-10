(function () {
  'use strict';
  const valid = ['fr','en'];
  let lang = 'fr';
  try { const stored=localStorage.getItem('omnimeteo-site-language');
    if(valid.includes(stored)) lang=stored;
    else if((navigator.language||'').toLowerCase().startsWith('en')) lang='en';
  } catch(e) { if((navigator.language||'').toLowerCase().startsWith('en')) lang='en'; }
  function apply(next) {
    if(!valid.includes(next)) return;
    lang=next;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-set-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.setLanguage===lang)));
    const meta=document.getElementById('page-meta');
    if(meta) try { const data=JSON.parse(meta.textContent)[lang];
      document.title=data.title;
      document.getElementById('meta-description').content=data.description;
    } catch(e) { }
  }
  // Apply before DOM is ready to reduce flash of the wrong language.
  document.documentElement.lang=lang;
  document.addEventListener('DOMContentLoaded',function(){
    apply(lang);
    document.querySelectorAll('[data-set-language]').forEach(button=>button.addEventListener('click',function(){
      apply(button.dataset.setLanguage);
      try{localStorage.setItem('omnimeteo-site-language',lang)}catch(e){}
    }));
  });
})();
