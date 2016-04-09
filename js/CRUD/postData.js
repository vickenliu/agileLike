import request from 'superagent';

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
