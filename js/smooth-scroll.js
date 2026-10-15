(function(){var root=document.documentElement,coarse=!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches;if(coarse)return;
root.style.scrollBehavior='auto';var target=scrollY,cur=scrollY,run=false;
function max(){return Math.max(0,root.scrollHeight-innerHeight)}
function tick(){cur+=(target-cur)*.1;if(Math.abs(target-cur)<.5){cur=target;run=false}window.scrollTo(0,cur);if(run)requestAnimationFrame(tick)}
function go(y){target=Math.max(0,Math.min(max(),y));if(!run){cur=scrollY;run=true;requestAnimationFrame(tick)}}
addEventListener('wheel',function(e){if(e.ctrlKey||e.defaultPrevented||document.body.classList.contains("lock"))return;var t=e.target;if(t.closest&&t.closest('textarea,select'))return;e.preventDefault();var d=e.deltaY;if(e.deltaMode===1)d*=34;else if(e.deltaMode===2)d*=innerHeight;go((run?target:scrollY)+d)},{passive:false});
addEventListener('scroll',function(){if(!run){cur=target=scrollY}},{passive:true});
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;var id=a.getAttribute('href');if(id.length<2)return;var el=document.querySelector(id);if(!el)return;e.preventDefault();go(el.getBoundingClientRect().top+scrollY-72)})})();
