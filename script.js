fetch('nav.html')
.then(response => response.text())
.then(html => {
  document.getElementById('navbar').innerHTML = html;
})
.catch(error => {
  console.error('Error fetching content:', error);
});
const v = new IntersectionObserver((objects) => {
    objects.forEach((object) => {
        if (object.isIntersecting) {
            object.target.classList.add('visible')
        }
        else {
            object.target.classList.remove('visible')
        }
    })
});
const iv = document.querySelectorAll('.hidden');
iv.forEach((e) => v.observe(e));