document.addEventListener("DOMContentLoaded", function() {

  const rootButton = document.getElementById('root_button');
  rootButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/');
  });

  const section3456 = document.getElementById('steps3456');

  const pingPongButton = document.getElementById('ping_pong_button');
  pingPongButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/pong')
    .then(function(resp) {
      console.log(resp.data);
      section3456.append(resp.data);
    })
    .catch(function(error) {
      section3456.append("That wasn't right, we'll try harder next time.")
    });
  });
});
