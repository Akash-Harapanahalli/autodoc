var axios = require('axios');
axios.post('http://4df7e2c9.ngrok.io/api/messages/add', {
  firstName: 'Fred',
  lastName: 'Flintstone'
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});