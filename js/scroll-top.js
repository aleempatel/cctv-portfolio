/* Always start from the top on every load/reload/back-forward */
(function(){
  try{if('scrollRestoration' in history)history.scrollRestoration='manual';}catch(e){}
  function top(){window.scrollTo({top:0,left:0,behavior:'instant'});}
  if(location.hash){try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}}
  top();
  window.addEventListener('DOMContentLoaded',top);
  window.addEventListener('load',function(){top();setTimeout(top,60);});
  window.addEventListener('pageshow',function(e){if(e.persisted)top();});
})();
