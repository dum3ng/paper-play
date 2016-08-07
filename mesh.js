var path
var diff = 10
project.currentStyle={
    strokeColor:'black'
}
var gray = new Color(0.3)
var draw = function(e){
    var segments = path.segments
    var l = segments.length
    if(l-diff>=0){
        var s = new Path.Line(segments[l-diff].point,
        e.point)
        s.strokeColor = gray
    }
  
}

function onMouseDown(e){
   path = new Path()
   path.add(e.point)
   draw(e)
}

function onMouseDrag(e){
    path.add(e.point)
    draw(e)
}

