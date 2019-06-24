var canvas = null;
var isDown = true;
var line = null;
InitCanvas();

function InitCanvas() {
  canvas = new fabric.Canvas('canvas');
  canvas.selection = false; // Disable group selection
  fabric.Group.prototype.hasControls = false;
  canvas.loadFromJSON(localStorage.getItem("json"));
  console.log(localStorage.getItem("json"));

}

canvas.on({
  'object:selected': function (e) {
    if (activeOperation !== null) {
      // directActionHandler(e);
      return;
    }
  },

  'mouse:down': function (o) {
    if (activeOperation === true && shapeName[currentShape] === "line") {
      isDown = true;
      var pointer = canvas.getPointer(o.e);
      var points = [pointer.x, pointer.y, pointer.x, pointer.y];
      generateLine(pointer.x, pointer.y, points)
      line = new fabric.Line(points, {
        strokeWidth: 3,
        stroke: colorHex[currentColor],
        strokeDashArray: getStroke(styleName[currentStyle]),
        originX: 'center',
        originY: 'center'
      });
      canvas.add(line);
      AddActionToUndo();
    }
  },

  'mouse:move': function (o) {
    if (!isDown) return;
    var pointer = canvas.getPointer(o.e);
    if (line != null) {
      line.set({
        x2: pointer.x,
        y2: pointer.y
      });
      canvas.renderAll();
    }
  },


  'mouse:up': function (e) {
    // jezeli nie ma aktywnej operacji to wstaw nowy objekt
    if (activeOperation === true) {
      if (shapeName[currentShape] == "line")
        isDown = false;
      else
        shapeBuilder(e.pointer.x, e.pointer.y);
    } else {
      // directActionHandler(e);
      AddActionToUndo();
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

function AddActionToUndo() {
  redoList = [];
  undoList.push(state);
  state = JSON.stringify(canvas);
}

function UndoRedo(playStack, saveStack) {
  if (playStack.length > 0) {
    saveStack.push(state);
    state = playStack.pop();
    canvas.clear();
    canvas.loadFromJSON(state, function () {
      canvas.renderAll();
    });
  }

}