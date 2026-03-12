document.getElementById('randomTestimonial').addEventListener('click', function() {
  var links = document.querySelectorAll('a[name^="tag"]');
  var randomIndex = Math.floor(Math.random() * links.length);
  var randomTestimonial = links[randomIndex];
  window.location.hash = randomTestimonial.getAttribute('name');
});