$(document).ready(function(){

  function ImageSwitcher(choices, i) {
    i = 0;
    
    this.Next = function() {
      hide_current_image();
      show_next_image();
    }
    
    var hide_current_image = function() {
      if(choices){
        choices[i].style.visibility = "hidden";
        i += 1;
      }
    }
    var show_next_image = function() {
      if(choices){
        if(i == (choices.length)) {
          i = 0;
        }
        choices[i].style.visibility = "visible";
      }
    }
  }
    
    var bottoms = $(".bottom");
    var tops = $(".top");
    var head = $(".head");
    var hat = $(".hat");
    var shoes = $(".shoes");
    var bag = $(".bag");
  
    var shirt_picker = new ImageSwitcher(tops);
    document.getElementById("shirt_button").onclick = function() { shirt_picker.Next(); };
    
    var pants_picker = new ImageSwitcher(bottoms);
    document.getElementById("pant_button").onclick = function() {pants_picker.Next(); };
    
    var head_picker = new ImageSwitcher(head);
    document.getElementById("head_button").onclick = function() {head_picker.Next(); };

    var hat_picker = new ImageSwitcher(hat);
    document.getElementById("hat_button").onclick = function() {hat_picker.Next(); };

    var shoes_picker = new ImageSwitcher(shoes);
    document.getElementById("shoes_button").onclick = function() {shoes_picker.Next(); };

    var bag_picker = new ImageSwitcher(bag);
    document.getElementById("bag_button").onclick = function() {bag_picker.Next(); };
  
  });
  //let state = {
//  dress: 0,
//  hair: 0,
//  hat: 0,
//  shoes: 0,
//  accessory: 0,
//  face: 0,
//};
//nextdress();
//nexthair();
//nextface();
//function to change dress
//function nextdress() {
//  let dress = document.querySelector("#dress");
  //code from the tutorial example:
  //   if (state.dress === 0) {
  //     dress.setAttribute("class", "dress1");
  //     state.dress++;
  //     console.log(state);
  //   } else if (state.dress === 1) {
  //     dress.setAttribute("class", "dress2");
  //     state.dress++;
  //     console.log(state);
  //   } else if (state.dress === 2) {
  //     dress.setAttribute("class", "dress3");
  //     //set back to 0
  //     state.dress = 0;
  //     console.log(state);
  //   }

  //my refactored version with LESS code and MORE scalability:
  //if (state.dress < 7) {
  //  state.dress++;
  //  dress.setAttribute("class", `dress${state.dress}`);
  //} else if (state.dress === 7) {
  //  state.dress = 0;
  //  dress.setAttribute("class", `dress${state.dress}`);
  //}

//function nextshoes() {
//let shoes = document.querySelector("#shoes");
//  if (state.shoes < 3) {
//    state.shoes++;
//    shoes.setAttribute("class", `shoes${state.shoes}`);
//  } else if (state.shoes === 3) {
//    state.shoes = 0;
//    shoes.setAttribute("class", `shoes${state.shoes}`);
//  }
//}
//function nexthair() {
//  let hair = document.querySelector("#hair");
//  if (state.hair < 5) {
//    state.hair++;
//    hair.setAttribute("class", `hair${state.hair}`);
//  } else if (state.hair === 5) {
//    state.hair = 0;
//    hair.setAttribute("class", `hair${state.hair}`);
//  }
//}

//function nexthat() {
//  let hat = document.querySelector("#hat");
//  if (state.hat < 4) {
//    state.hat++;
//    hat.setAttribute("class", `hat${state.hat}`);
//  } else if (state.hat === 4) {
//    state.hat = 0;
//    hat.setAttribute("class", `hat${state.hat}`);
//  }
//}

//function nextface() {
//  let face = document.querySelector("#face");
//  if (state.face < 2) {
//    state.face++;
//    face.setAttribute("class", `face${state.face}`);
//  } else if (state.face === 2) {
//    state.face = 0;
//    face.setAttribute("class", `face${state.face}`);
//  }
//}

  //  $("#shirt_button").click(function(){
  //  $("#shirt-menu").css("visibility", "visible"); });