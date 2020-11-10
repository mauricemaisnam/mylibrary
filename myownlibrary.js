function isTouching(game1,game2) {
    if (game1.x - game2.x < game2.width/2 + game1.width/2
      && game2.x - game1.x < game2.width/2 + game1.width/2
      && game1.y - game2.y < game2.height/2 + game1.height/2
      && game2.y - game1.y < game2.height/2 + game1.height/2) {
    return true;
  }
  else {
    return false
  }
  }

  function bounce(object1,object2) {
    if (object1.x -  object2.x < object2.width/2 + object1.width/2
        && object2.x -  object1.x < object2.width/2 + object1.width/2) {
          object1.velocityX =  object1.velocityX * (-1);
          object2.velocityX = object2.velocityX * (-1);
    }
    if ( object1.y - object2.y < object2.height/2 +  object1.height/2
      && object2.y -  object1.y < object2.height/2 +  object1.height/2){
        object1.velocityY =  object1.velocityY * (-1);
        object2.velocityY = object2.velocityY * (-1);
    }
    }
    