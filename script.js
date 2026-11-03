function toggleMenu(){const n=document.getElementById('navigation');const b=document.querySelector('.menu-btn');if(!n||!b)return;n.classList.toggle('open');b.setAttribute('aria-expanded',n.classList.contains('open')?'true':'false')}
function closeMenu(){const n=document.getElementById('navigation');const b=document.querySelector('.menu-btn');if(n)n.classList.remove('open');if(b)b.setAttribute('aria-expanded','false')}
document.addEventListener('DOMContentLoaded',()=>{const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear()});
