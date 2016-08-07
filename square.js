var path
var diff = 10
project.currentStyle={
    strokeColor:'black'
}
var gray = new Color(0)
var flag = 1
var apath
var children = []
var draw = function(e){
    var segments = path.segments
    var l = e.delta.length
    var middle = e.middlePoint
    var perid = e.delta.rotate(90,middle)
    var n = perid.normalize()
    //var line = new Path.Line(middle+n*l,middle-n*l)
    var shape = new Path.Rectangle(middle,new Size(l ,3*l))
    shape.translate(new Point(-0.5*l,-1.5*l))
    shape.rotate(e.delta.angle)
    shape.shadowColor='black'
    shape.fillColor = {
    gradient: {
        stops: [['#aaa', 0.05], ['#333', 0.7], ['black', 1]],
        radial: true
    },
    origin: middle,
    destination: shape.bounds.rightCenter
}
    shape.shadowBlur = 2
    shape.shadowOffset = new Point(1,1)
    children.push(shape)
}

function onMouseDown(e){
   path = new Path()
   path.add(e.point)
   apath = new Path()
   //draw(e)
}

function onMouseDrag(e){
    path.add(e.point)
    draw(e)
}