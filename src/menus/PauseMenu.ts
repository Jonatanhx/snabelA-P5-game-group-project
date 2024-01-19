class PauseMenu implements IMenu {
  private button1X: number;
  private button1Y: number;
  private buttonWidth: number;
  private buttonHeight: number;
  private headingWidth: number;
  private headingHeight: number;
  private buttonFontSize: number;
  private headingFontSize: number;
  private button1Area: number;
  private resumeButton: Button;

  constructor() {
    this.button1X = width * 0.42;
    this.button1Y = height * 0.5;
    this.buttonWidth = width * 0.15;
    this.buttonHeight = width * 0.065;
    this.headingWidth = width * 0.5;
    this.headingHeight = height * 0.6;
    this.button1Area = 25;
    this.buttonFontSize = width * 0.015;
    this.headingFontSize = width * 0.06;
    this.resumeButton = new Button("resume", 200, 200, 100, 100);
  }

  private drawDialogBox() {
    push();
    fill("#D9D9D9");
    rectMode(CENTER);
    rect(width * 0.5, height * 0.5, this.headingWidth, this.headingHeight);
    pop();
  }

  private drawGreyBackground() {
    push();
    fill(224, 224, 224, 10);
    rect(0, 0, width, height);
    pop();
  }
  private drawHeading() {
    push();
    textSize(this.headingFontSize);
    textAlign(CENTER, CENTER);
    text("PAUSED", width * 0.5, height * 0.35);
    fill("black");
    pop();
  }
  private drawButtons() {
    push();
    fill("white");
    rectMode(CENTER);
    rect(this.button1X, this.button1Y, this.buttonWidth, this.buttonHeight);
    rect(width * 0.58, height * 0.5, this.buttonWidth, this.buttonHeight);
    rect(width * 0.5, height * 0.65, this.buttonWidth, this.buttonHeight);
    pop();
  }
  private drawButtonTexts() {
    push();
    fill("black");
    textSize(this.buttonFontSize);
    textAlign(CENTER, CENTER);
    text("RESUME", width * 0.42, height * 0.5, 0);
    text("RESTART", width * 0.58, height * 0.5, 0);
    text("EXIT", width * 0.5, height * 0.65, 0);
    pop();
  }

  public draw(): void {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.drawButtons();
    this.drawButtonTexts();
    this.resumeButton.draw();
  }
  public update(): void {
    if (this.resumeButton.update()) {
      console.log("RESUME BUTTON WAS CLICKED, CHANGIN MENU");
    }
    // if (this.exitButton.update()) {
    //   console.log("EXIT BUTTON WAS CLICKED, CHANGIN MENU");
    // }
  }
}
