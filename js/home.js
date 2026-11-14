(function(){
 function grp(attr,n){var i=0;function show(k){i=(k+n)%n;document.querySelectorAll('['+attr+']').forEach(function(e){e.classList.toggle('on',+e.getAttribute(attr)===i)})}return {show:show,get:function(){return i}}}
 var S=grp('data-s',7),R=grp('data-r',3),T=grp('data-t',3),last=0,paused=false;
 document.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
  if(b.hasAttribute('data-go')){S.show(+b.dataset.go);last=Date.now()}
  if(b.hasAttribute('data-sp')){S.show(S.get()-1);last=Date.now()}
  if(b.hasAttribute('data-sn')){S.show(S.get()+1);last=Date.now()}
  if(b.hasAttribute('data-rgo'))R.show(+b.dataset.rgo); if(b.hasAttribute('data-rp'))R.show(R.get()-1); if(b.hasAttribute('data-rn'))R.show(R.get()+1);
  if(b.hasAttribute('data-tgo'))T.show(+b.dataset.tgo); if(b.hasAttribute('data-tp'))T.show(T.get()-1); if(b.hasAttribute('data-tn'))T.show(T.get()+1);
 });
 var hero=document.querySelector('.h-hero');hero.addEventListener('mouseenter',function(){paused=true});hero.addEventListener('mouseleave',function(){paused=false});
 setInterval(function(){if(paused||Date.now()-last<5000)return;S.show(S.get()+1)},6000);
})();
