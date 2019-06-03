var activeOperation = null;

function disableDirectOperations()
{
  canvas.selection = false;
  activeOperation = null;
  switchSelectable(false);
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
      AddActionToUndo();
      // TODO: usuwanie grupy elementow
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
  AddActionToUndo();
}

function objectColor(colorValue)
{
  activeOperation = null;

  var obj = canvas.getActiveObject();
  if(obj){
    obj.set('fill', colorValue);
    canvas.renderAll();

    AddActionToUndo();
  }
}

function objectStyle(strokeType)
{
  activeOperation = null;

  var obj = canvas.getActiveObject();
  if(obj){
    obj.set('strokeDashArray', getStroke(strokeType));
    canvas.renderAll();

    AddActionToUndo();
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
