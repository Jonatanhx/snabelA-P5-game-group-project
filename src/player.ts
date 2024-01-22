// Player ärver innehållet i Entity.
class Player extends Entity {
  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0);
  }
  public update(): void {
    if (keyIsDown(32)) {
      this.positionY -= 10;
    }
  }
  public draw(): void {
    push();
    fill("red");
    rect(this.positionX, this.positionY, this.width, this.height);
    pop();
  }

  public applyGravity() {
    const currentPos = this.positionY;
    if (this.positionY > currentPos) {
      this.positionY += 1;
    }
  }
}
