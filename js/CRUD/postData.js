var $ = require('jquery');
module.exports= (url, data) => {
  $.ajax({
    url: url,
    method: 'POST',
    data: JSON.stringify(data)
  })
}
