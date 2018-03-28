class Controller {
    constructor() {
        // this.announcement = new announcementModel();
        // this.playerOneModel = new playerOneModel();
        // this.playerTwoModel = new playerTwoModel();
        // this.playfieldModel = new playfieldModel();
        //
        // this.playerOneView = new playerOneView();
        // this.playerTwoView = new playerTwoView();
        document.querySelector("#pvpBtn").addEventListener("click", () => this.pvpClick());
    }

    pvpClick() {
        console.log("running");
        let hideButtons = document.querySelectorAll(".hide");
        for (var i = 0; i < hideButtons.length; i++) {
            hideButtons[i].style.display = "none";
        }
        let showForm = document.querySelectorAll(".form");
        for (var i = 0; i < showForm.length; i++) {
            showForm[i].style.display = "block";
        }
    }

}
