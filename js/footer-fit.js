(function(){var w=document.querySelector('.wm'),t=w&&w.firstElementChild;if(!t)return;
t.style.display='inline-block';
function fit(){w.style.fontSize='100px';var sw=t.getBoundingClientRect().width,cw=w.clientWidth;if(!sw||!cw)return;w.style.fontSize=Math.min(220,100*cw*0.96/sw)+'px'}
fit();addEventListener('resize',fit);addEventListener('load',fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit)})();
