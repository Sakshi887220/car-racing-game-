class Form {
  constructor() {
    
  }

  setElementsPosition() {
   
  }

  setElementsStyle() {
    
  }

  hide() {
   
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
    });
  }

  display() {
    
  }
}
