(function(){var $=function(i){return document.getElementById(i)},gal=$('gal'),gt=$('gt'),gd=$('gd'),op=null,tick=false,lockW=0,n=0;
function idx(){return Math.round(gt.scrollLeft/Math.max(gt.clientWidth,1))}
function dots(){return gd.querySelectorAll('i')}
function mark(){var i=idx();dots().forEach(function(d,k){d.classList.toggle('on',k===i)})}
function go(i,sm){i=Math.max(0,Math.min(n-1,i));gt.style.scrollBehavior=sm?'smooth':'auto';gt.scrollTo({left:i*gt.clientWidth,behavior:sm?'smooth':'auto'})}
function open(id,t){op=t;var src=$('src-'+id),cv=document.querySelector('[data-proj="'+id+'"] .cover img');gt.innerHTML='';gd.innerHTML='';
src.querySelectorAll('figure').forEach(function(f,k){var c=f.cloneNode(true);if(k===0)c.querySelector('img').src=cv.src;gt.appendChild(c);gd.appendChild(document.createElement('i'))});
n=gt.children.length;$('gtt').textContent=src.dataset.title;$('gtl').textContent=src.dataset.place;
dots().forEach(function(d,k){d.addEventListener('click',function(){go(k,true)})});
gal.classList.add('open');document.body.classList.add('lock');go(0,false);mark();setTimeout(function(){$('gx').focus({preventScroll:true})},60)}
function close(){gal.classList.remove('open');document.body.classList.remove('lock');if(op)op.focus({preventScroll:true})}
document.querySelectorAll('[data-open]').forEach(function(b){b.addEventListener('click',function(){open(b.dataset.open,b)})});
$('gx').addEventListener('click',close);
$('gp').addEventListener('click',function(){go(idx()-1,true)});
$('gnx').addEventListener('click',function(){go(idx()+1,true)});
gt.addEventListener('scroll',function(){if(tick)return;tick=true;requestAnimationFrame(function(){tick=false;mark()})},{passive:true});
gal.addEventListener('wheel',function(e){e.preventDefault();var d=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY,t=Date.now();if(Math.abs(d)<15||t-lockW<500)return;lockW=t;go(idx()+(d>0?1:-1),true)},{passive:false});
gal.addEventListener('click',function(e){if(e.target===gal||e.target===gt||e.target.tagName==='FIGURE')close()});
addEventListener('keydown',function(e){if(!gal.classList.contains('open'))return;if(e.key==='Escape')close();else if(e.key==='ArrowRight')go(idx()+1,true);else if(e.key==='ArrowLeft')go(idx()-1,true)});
addEventListener('resize',function(){if(gal.classList.contains('open'))go(idx(),false)})})();
