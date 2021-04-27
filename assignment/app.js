let numOfBtns = document.querySelectorAll('.btn').length
for (let i = 0; i < numOfBtns; i++) {

  document.querySelectorAll(".btn")[i].addEventListener('click', function() {

    let albumClicked = this.textContent;


      switch (albumClicked) {
        case "Mac Miller":
        var WhatsTheUse = new Audio('songs/WhatsTheUse.mp3');
               WhatsTheUse.play();
          break;
        case "Radiohead":
          var  WeirdFishes = new Audio(`songs/WeirdFishes.mp3`);
          WeirdFishes.play();
          break;
        case "BROCKHAMPTON":
          var FAKE = new Audio(`songs/FAKE.mp3`);
          FAKE.play();
          break;
        case "Earl Sweatshirt":
          var Riot = new Audio(`songs/Riot.mp3`);
          Riot.play();
          break;
        case "Pink FLoyd":
          var Potw = new Audio(`songs/POTW.mp3`);
          Potw.play();
          break;
        default:
    console.log(albumClicked)
  };
  });

  };
