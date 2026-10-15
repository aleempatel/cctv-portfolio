(function(){var mb=document.getElementById('mb'),mp=document.getElementById('mp');
mb.addEventListener('click',function(){var o=mp.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
mp.addEventListener('click',function(e){if(e.target.tagName==='A'){mp.classList.remove('open');mb.setAttribute('aria-expanded','false')}});
document.getElementById('qb').addEventListener('click',function(){var n=document.getElementById('qn').value.trim(),v=document.getElementById('qs').value,m=document.getElementById('qm').value.trim();
var t='Salam Mudassir, I need a CCTV quote.\nName: '+(n||'-')+'\nService: '+v+'\nDetails: '+(m||'-');
window.open('https://wa.me/923702867432?text='+encodeURIComponent(t),'_blank','noopener')})})();
