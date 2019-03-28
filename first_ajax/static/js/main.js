document.addEventListener("DOMContentLoaded", function() {

  const rootButton = document.getElementById('root_button');
  rootButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/');
  });

  const section3456 = document.getElementById('steps3456');
  const section7 = document.getElementById('step7');
  const section8 = document.getElementById('step8');

  const pingPongButton = document.getElementById('ping_pong_button');
  pingPongButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/pong')
      .then(function(resp) {
        console.log(resp.data);
        section3456.append(resp.data);
      })
      .catch(function(error) {
        console.log("Uh oh, something went wrong:\n", error)
        section3456.append("That wasn't right, we'll try harder next time.")
      })
      .then(function() {
        console.log("Oh cool the request is done!")
      });
  });

  const sharedButton = document.getElementById('shared_button');
  sharedButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/count', {
      params: {
        amount: 2
      }
    })
      .then(function(resp) {
        console.log("Current count is " + resp.data);
        section7.append(resp.data);
      })
  })

  const requestTimeButton = document.getElementById('request_time_button');
  requestTimeButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/time', {params: {timezone: 'Europe/Sofia'}})
      .then(function(resp) {
        console.log(resp.data)
        section8.append(resp.data);
      })
  });

  const requestTimeButton2 = document.getElementById('request_time_button2');
  const timeZone = document.getElementById('tz');
  requestTimeButton2.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/time', {params: {timezone: timeZone.value}})
      .then(function(resp) {
        console.log(resp.data)
        console.log(timeZone.value)
        section8.append(resp.data);
      })
      .catch(function(error) {
        console.log("Oh dang there's an error: ", error);
        section8.append("Oops, there was an error with that input.");
      })
  });

  const carButton = document.getElementById('car_button');
  const carList = document.getElementById('car_list');
  carButton.addEventListener('click', function() {
    request = axios.get('http://intro-ajax-api.herokuapp.com/a_car')
      .then(function(resp) {
        const newCar = document.createElement('li');
        newCar.innerHTML = resp.data;
        carList.appendChild(newCar);
      })
  })
});
