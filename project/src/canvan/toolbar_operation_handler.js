var activeOperation = null;

function disableDirectOperations()
{
  canvas.selection = false;
  activeOperation = null;
  switchObjectScale(false);
  switchObjectScale(false);
  switchObjectRotate(false);
  switchObjectMove(true);
}

function objectEdit(opp)
{
  activeOperation = opp;

  switch (opp) {
    case 'point':
      switchSelectable(true);
      canvas.selection = true;
      directObjectMutation = true;
      break;
    case 'move':
      switchSelectable(true);
      switchObjectMove(false);
      break;
    case 'remove':
      canvas.remove(canvas.getActiveObject());
      // TODO: usuwanie grupy elementow
      break;
    case 'resize':
      switchSelectable(true);
      switchObjectScale(true);
      break;
    case 'rotate':
      switchSelectable(true);
      switchObjectRotate(true);
      break;
    default:
      console.log(`unhandled edit operation: ${opp}`);
  }
}


function objectTransposition(opp)
{
  activeOperation = opp
  switchSelectable(true);

  var obj = canvas.getActiveObject();
  // jesli cos zaznaczone - to rob transpozycje
  switch (opp) {
    case 'vertical-mirror':
      if (obj) {
          obj.set('flipY', !obj.flipY);
          canvas.renderAll();
      }
      break;
    case 'horizontal-mirror':
      if (obj) {
          obj.set('flipX', !obj.flipX);
          canvas.renderAll();
      }
      break;
    case 'rotation-right':
      if (obj) {
          obj.set('angle', parseInt(obj.get('angle'))-90).setCoords();
          canvas.requestRenderAll();
      }
      break;
    case 'rotation-left':
      if (obj) {
          obj.set('angle', parseInt(obj.get('angle'))+90).setCoords();
          canvas.requestRenderAll();
      }
      break;
    default:
      console.log(`unhandled transposition operation: ${opp}`);
  }
}

function objectColor(colorValue)
{
  activeOperation = null;

  var obj = canvas.getActiveObject();
  if(obj){
    obj.set('fill', colorValue);
    canvas.renderAll();
  }
}

function objectStyle(strokeType)
{
  activeOperation = null;

  var obj = canvas.getActiveObject();
  if(obj){
    obj.set('strokeDashArray', getStroke(strokeType));
    canvas.renderAll();
  }
}

function switchSelectable(value)
{
  canvas.forEachObject(function(obj){
    obj.set('selectable', value);
    obj.set('hoverCursor', value === true ? 'move' : 'auto');
  });
}

function switchObjectMove(value)
{
  canvas.forEachObject(function(obj){obj.set('lockMovementX', value); obj.set('lockMovementY', value); });
}

function switchObjectScale(value)
{
  canvas.forEachObject(function(obj){obj.set('lockScalingX', !value); obj.set('lockScalingY', !value); obj.set('hasControls', value) });
}

function switchObjectRotate(value)
{
  canvas.forEachObject(function(obj){obj.set('lockRotation', !value); obj.set('hasRotatingPoint', value); obj.set('hasControls', value) });
}
