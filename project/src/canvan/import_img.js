$("#file-upload").on("change", function(e) {
    activeOperation = "upload"; // Blocks adding shapes

    var reader = new FileReader();

    reader.onload = function (event){
      var imgObj = new Image();
      imgObj.src = event.target.result;
      imgObj.onload = function () {
        var image = new fabric.Image(imgObj);
        image.set({
              angle: 0,
              padding: 10,
              cornersize: 10,
              height: this.height,
              width: this.width,
        });
        objectDefaultOperationDisable(image);
        canvas.centerObject(image);
        canvas.add(image);
        canvas.renderAll();
      }
    }
    reader.readAsDataURL(e.target.files[0]);
})
