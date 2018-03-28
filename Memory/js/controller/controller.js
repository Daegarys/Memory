class Controller {
  constructor(){
    this.announcement = new announcementModel();
    this.playerOneModel = new playerOneModel();
    this.playerTwoModel = new playerTwoModel();
    this.playfieldModel = new playfieldModel();

    this.playerOneView = new playerOneView();
    this.playerTwoView = new playerTwoView();
  }

  

}
