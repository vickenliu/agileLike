//var $ = require('jquery');
import request from 'superagent';

 /*(url, data) => {
  console.log(data,url);
  $.ajax({
    url: url,
    method: 'POST',
    data: data
  })
}*/

module.exports = (url,data) => {
  request
    .post(url)
    .send(data)
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function(err, res){
      // Calling the end function will send the request
  });
}
