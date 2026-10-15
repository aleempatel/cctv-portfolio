(function(){
var $=function(i){return document.getElementById(i)},red=matchMedia('(prefers-reduced-motion:reduce)').matches;
/* reveal + counters */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');
e.target.querySelectorAll('[data-n]').forEach(function(el){var N=+el.dataset.n,s=el.dataset.s||'',st=null;function f(ts){st=st||ts;var p=Math.min((ts-st)/1400,1);el.textContent=Math.round(N*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)}red?el.textContent=N+s:requestAnimationFrame(f)});io.unobserve(e.target)})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
/* CSS 3D tilt, mouse only (touch stays buttery) */
if(!red)document.querySelectorAll('.tilt').forEach(function(c){var raf=0;
c.addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;var r=c.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;cancelAnimationFrame(raf);raf=requestAnimationFrame(function(){c.style.transform='rotateY('+(px*14)+'deg) rotateX('+(-py*14)+'deg) translateZ(8px)'})});
c.addEventListener('pointerleave',function(){cancelAnimationFrame(raf);c.style.transform=''})});
})();
