import $ from 'jquery'

module.exports=(e) =>{
      let windowHeight= window.innerHeight,top, ele=e.target;
      top= $(ele).css('top'),windowHeight*=0.4;
      if(parseInt(top) > windowHeight){
        $(ele).find('.header').css('backgroundColor','red')
      }else{
        $(ele).find('.header').css('backgroundColor','blue')
      }
}