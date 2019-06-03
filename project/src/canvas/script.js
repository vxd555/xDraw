var canvas = new fabric.Canvas('canvas');
canvas.selection = false; // Disable group selection
fabric.Group.prototype.hasControls = false;

canvas.on({
  'object:selected': function(e) {
    if (activeOperation !== null) {
      // directActionHandler(e);
      return;
    }
  },

  'mouse:up': function(e) {
    // jezeli nie ma aktywnej operacji to wstaw nowy objekt
    if (activeOperation === null) {
      shapeBuilder(e.pointer.x, e.pointer.y);
    } else {
      // directActionHandler(e);
      return
    }
  },
})

// TODO: edycja bezposrednia - bez wczesniejszego zaznaczenia

// function directActionHandler(e) {
//   if(e.target !== null){
//     switch (activeOperation) {
//       case 'remove':
//         canvas.getActiveGroup().forEachObject(function(o){ canvas.remove(o) });
//         return;
//       case 'vertical-mirror':
//         e.target.set('flipY', !e.target.flipY);
//         return;
//       case 'horizontal-mirror':
//         e.target.set('flipX', !e.target.flipX);
//         return;
//       case 'rotation-right':
//         e.target.set('angle', parseInt(e.target.get('angle'))-90).setCoords();
//         return;
//       case 'rotation-left':
//         e.target.set('angle', parseInt(e.target.get('angle'))+90).setCoords();
//         return;
//       case 'move':
//         break;
//       case 'point':
//         break;
//       case null:
//         break;
//       default:
//         console.log(`unhandled object:selected operation: ${activeOperation}`);
//     }
//     canvas.remove(canvas.getActiveObject());
//   }
// }

//Wstecz i ponów
var state;
var undoList = [];
var redoList = [];

function AddActionToUndo()
{
  redoList = [];
  undoList.push(state);
  state = JSON.stringify(canvas);
}

function UndoRedo(playStack, saveStack)
{
  if(playStack.length > 0)
  {
    saveStack.push(state);
    state = playStack.pop();
    canvas.clear();
    canvas.loadFromJSON(state, function() {
      canvas.renderAll();
    });
  }

}