import getData from '../CRUD/getData'
import keypoint from '../../views/keypoint.jade'
import postTemp from '../../views/postTemp.jade'
import moveKeyPoint from './moveKeyPoint'

export default () =>{
  let points;
  getData('/keypoints',(data) => {
    points = data;
    if(points.length){
      points.forEach((point) => {
        $('.addBtn.keyPoint').before( keypoint(point) )
      })
      moveKeyPoint();
    }
  })

  getData('/posts', (data)=>{

    if(data.length){
        data.forEach( (post) =>{
          $('#body').append( postTemp(post) )
        })
        moveKeyPoint();
    }
  })
}
