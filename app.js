// Rover Object Goes Here
// ======================
const rover = {
  direction : "N",
  x : 0,
  y : 0,
  j : 0,
  k : 0,
  travellog : [],
  ground : [
    ["depart", null, null, "O", null, null, null, null, null, null],
    [null, "O", null, null, null, null, null, null, null, null],
    ["O", null, null, null, null, null, null, null, "O", null],
    [null, null, null, null, null, "O", null, null, null, null],
    [null, null, null, null, null, null, null, null, "O", null],
    [null, null, null, null, "O", null, null, null, null, null],
    [null, null, null, null, null, null, null, null, "O", null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, "O", null, null, null, null, null, null, null],
    [null, null, null, null, "O", null, null, null, null, null]
  ],
  forwardObstacleDetection(){
    if (this.ground[this.j][this.k] === "O"){
      console.log("[WARNING] your are facing an obstacle please change itinerary");
      this.x--
      return false;
    }
   } ,
  turnLeft(){
    switch (this.direction) {
      case "N":
        this.direction = "W"
        break;
      case "W":
        this.direction = "S"
        break;
      case "S":
        this.direction = "E"
        break;
      case "N":
        this.direction = "W"
        break;
      default:
        break;
    }
  },
  turnRight(){
    switch (this.direction) {
      case "N":
        this.direction = "E"
        break;
      case "E":
        this.direction = "S"
        break;
      case "S":
        this.direction = "W"
        break;
      case "W":
        this.direction = "N"
        break;
      default:
        break;
    }
  },
  moveForward(){
    if(this.x < 10 && this.y < 10) {
      switch (this.direction) {
        case "N":
          this.y--
          this.j--
          break;
        case "S":
          this.y++  
          this.j++
          break;
        case "E":
          this.k++
          this.x++
          break;
        case "W":
          this.x--
          this.k--
          break;
        default:
          break;  
    }
  }
  else {
    console.log("[WARNING] You have reached the grid limit!")
  }
    this.travellog.push(`x : ${this.x} , y : ${this.y}`);
  },
  moveBackward(){  
    if(this.x < 10 && this.y < 10) {
      switch (this.direction) {
        case "N":
          this.y++
          this.j++
          break;
        case "S":
          this.y-- 
          this.j--
          break;
        case "E":
          this.x--
          this.k--
          break;
        case "W":
          this.x++
          this.k++
          break;
        default:
          break;  
    
    }  
  }
  
  else {
    console.log("[WARNING] You have reached the grid limit!")
  }
    this.travellog.push(`x : ${this.x} , y : ${this.y}`);
  },
  commands(){
    i=0;
      instructions = arguments
      for (const lettre of instructions[i]) {
        if(lettre != "l" && lettre != "r" && lettre != "f" && lettre != "b"){
          console.log("[ERROR] to move the rover please enter this following commands : 'l'(turn left) 'r'(turn right) 'f'(move forward) 'b'(move backward)");
          return false;
        } 
      }
     
      for (const lettre of instructions[i]) {
      switch (lettre) {
        case "l":
          this.turnLeft()
          i++;
          break;
        case "r":
          this.turnRight()
          i++;
          break;
        case "f":           
          this.moveForward(); 
          i++;
          break;
        case "b":
          this.moveBackward()
          i++;
          break;
        default:
          break;
        }
      }
    }
};

rover.commands('rfff')
console.log(`Your current direction is ${rover.direction}`);
console.log(`Your current position is => x : ${rover.x} , y : ${rover.y}`)
console.log(rover.travellog)

