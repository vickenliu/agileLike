import $ from 'jquery'
import getData from '../CRUD/getData'
import keypoint from '../../views/keypoint.jade'
import postTemp from '../../views/postTemp.jade'
import moveKeyPoint from './moveKeyPoint'

export default () =>{
  let points;
  getData('/keypoints',(data) => {
    points = data;
    if(points.keyPoints.length){
      points.keyPoints.forEach((point) => {
        $('.addBtn.keyPoint').before( keypoint(point) )
      })
      moveKeyPoint();
    }
  })

  getData('/posts', (data)=>{
  	let posts= data.posts;
    if(posts.length){
        posts.forEach( (post) =>{
          $('#body').append( postTemp(post) )
        })
        moveKeyPoint();

    }
  })


}
