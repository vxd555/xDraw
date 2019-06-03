function shapeBuilder(x, y) {
  switch (shapeName[currentShape])
  {
    case "rectangle":
      generateRect(x, y)
      break;
    case "circle":
      generateCircle(x, y)
      break;
    case "line":
      generateLine(x, y)
      break;
    default:
      console.log(`unhandled shape to build operation: ${shapeName[currentShape]}`);
      break
  }
}

function getStroke(strokeType)
{
  switch (strokeType) {
    case "solid":
        return []
    case "dotted":
        return [15, 5]
    case "point":
        return [5, 5]
    default:
      return
  }
}

function objectDisabler(object)
{
  object.hoverCursor = 'auto'
  object.selectable = false;
  // object.hasControls = false;
  object.lockScalingY = true;
  object.lockScalingX = true;
  object.lockRotation = true;
  object.lockMovementX = true;
  object.lockMovementY = true;
  object.hasRotatingPoint = false;
}

function generateRect(x, y)
{
  var rect = new fabric.Rect({
      top : y,
      left : x,
      width : 50,
      height : 50,
      fill : colorHex[currentColor],
      stroke: 'black',
      strokeWidth: 3,
      strokeDashArray: getStroke(styleName[currentStyle])
  });
  objectDisabler(rect);
  canvas.add(rect)
}

function generateCircle(x, y)
{
  var circle = new fabric.Circle({
      top : y,
      left : x,
      radius : 30,
      fill : colorHex[currentColor],
      stroke: 'black',
      strokeWidth: 3,
      strokeDashArray: getStroke(styleName[currentStyle])
  });
  objectDisabler(circle);
  canvas.add(circle)
}

function generateLine(x, y)
{
  // TODO: nie powinno byc na sztywno
  var line = new fabric.Line([100, 100, 200, 200], {
      top : y,
      left : x,
      strokeWidth: 3,
      stroke: colorHex[currentColor],
      strokeDashArray: getStroke(styleName[currentStyle])
  });
  objectDisabler(line);
  canvas.add(line)
}
