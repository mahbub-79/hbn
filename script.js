const toggle=document.getElementById('menuToggle');
const links=document.getElementById('navLinks');
toggle.addEventListener('click',()=>links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const f=e.currentTarget;
  if(!f.reportValidity()) return;
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const topic=document.getElementById('topic').value;
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent('House Of BN enquiry: '+topic);
  const body=encodeURIComponent(`Hello House Of BN,\n\n${message}\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}`);
  document.getElementById('formStatus').textContent='Opening your email application…';
  window.location.href=`mailto:house.bn34@gmail.com?subject=${subject}&body=${body}`;
});