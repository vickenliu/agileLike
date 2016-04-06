import $ from 'jquery'
import getData from '../CRUD/getData'
import keypoint from '../../views/keypoint.jade'
import moveKeyPoint from './moveKeyPoint'

module.exports= () =>{
  let points;
  getData('/keypoints',(data) => {
    points = data;
    points.keyPoints.forEach((point) => {
      $('.addBtn.keyPoint').before( keypoint(point) )
    })
    moveKeyPoint();
  })
}