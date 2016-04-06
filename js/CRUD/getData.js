import $ from 'jquery'

module.exports=(url,callback) => {
  $.get(url, (data) => {
    callback(data);
  })
}
