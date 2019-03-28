document.addEventListener("DOMContentLoaded", function() {
  const ajaxButton = document.getElementById('ajax_button');
  ajaxButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/');
  });
});
