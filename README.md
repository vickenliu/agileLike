# agileLike

## RESTfull API

###GET '/keypoints'

response example:
{
  keypoints:[{
    id: 1,
    left: 23,
    notePosition: 21
  }]
}

--------------------------

###POST '/keypoints'

accept data example:
{
  keypoints:[{
    id: 1,
    left: 23,
    notePosition: 21
  }]
}

response example
status 201;

--------------------------

###POST '/keypoints/:id'

accept data example:
{
  keypoints:[{
    id: 1,
    left: 23,
    notePosition: 21
  }]
}

response example
'ok'

--------------------------

###DELETE '/keypoints/:id'

accept data example:
N/A

response example
'ok'

--------------------------

###GET '/posts'

response example:
{
  posts:[{
    id: 1,title:'Vicken',body:'I really enjoyed ...',
    left: '23px',top:'179px',
    bgColor:'rgb(0, 0, 255)'
  }]
}

--------------------------

###POST '/posts'

accept data example:
{
  posts:[{
    id: 1,title:'Vicken',body:'I really enjoyed ...',
    left: '23px',top:'179px',
    bgColor:'rgb(0, 0, 255)'
  }]
}

response example
'ok'

--------------------------

###DELTE '/posts/:id'

accept data example:
N/A

response example
'ok'
