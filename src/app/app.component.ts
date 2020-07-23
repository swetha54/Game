import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: [ "./app.component.css" ]
})
export class AppComponent {
  title = "tic-toe";
  constructor(private toastr: ToastrService) {}
  items: String[] = new Array(9).fill("empty");
  check = false;
  winmessage: string = "";

  handleclick(val: number) {
    if (this.winmessage) {
      return this.toastr.info(this.winmessage);
    }
    if (this.items[val] === "empty") {
      this.items[val] = this.check ? "circle" : "cross";
      this.check = !this.check;
    } else {
      return this.toastr.error("already clicked");
    }
    this.checkwininglogic();
  }
  checkwininglogic = () => {
    if (
      this.items[0] != "empty" &&
      this.items[0] == this.items[1] &&
      this.items[0] == this.items[2]
    ) {
      if (this.check == true) {
        this.winmessage = "player1 wins";
        return this.toastr.success(this.winmessage);
      } else {
        this.winmessage = "player2 wins";
        return this.toastr.success(this.winmessage);
      }
    } else if (
      this.items[3] != "empty" &&
      this.items[4] == this.items[5] &&
      this.items[3] == this.items[5]
    ) {
      if (this.check == true) {
        this.winmessage = "player1 wins";
        return this.toastr.success(this.winmessage);
      } else {
        this.winmessage = "player2 wins";
        return this.toastr.success(this.winmessage);
      }
    } else if (
      this.items[6] != "empty" &&
      this.items[6] == this.items[7] &&
      this.items[6] == this.items[8]
    ) {
      if (this.check == true) {
        this.winmessage = "player1 wins";
        return this.toastr.success(this.winmessage);
      } else {
        this.winmessage = "player2 wins";
        return this.toastr.success(this.winmessage);
      }
    } else if (
      this.items[0] != "empty" &&
      this.items[3] == this.items[6] &&
      this.items[0] == this.items[6]
    ) {
      if (this.check == true) {
        this.winmessage = "player1 wins";
        return this.toastr.success(this.winmessage);
      } else {
        this.winmessage = "player2 wins";
        return this.toastr.success(this.winmessage);
      }
    } else if (
      this.items[1] != "empty" &&
      this.items[4] == this.items[7] &&
      this.items[1] == this.items[7]
    ) {
      if (this.check == true) {
        this.winmessage = "player1 wins";
        return this.toastr.success(this.winmessage);
      } else {
        this.winmessage = "player2 wins";
        return this.toastr.success(this.winmessage);
      }
    } else if (
      this.items[2] != "empty" &&
      this.items[5] == this.items[8] &&
      this.items[2] == this.items[8]
    ) {
      if (this.check == true) {
        this.winmessage = "player1 wins";
        return this.toastr.success(this.winmessage);
      } else {
        this.winmessage = "player2 wins";
        return this.toastr.success(this.winmessage);
      }
    } else if (
      this.items[0] != "empty" &&
      this.items[4] == this.items[8] &&
      this.items[0] == this.items[8]
    ) {
      if (this.check == true) {
        this.winmessage = "player1 wins";
        return this.toastr.success(this.winmessage);
      } else {
        this.winmessage = "player2 wins";
        return this.toastr.success(this.winmessage);
      }
    } else if (
      this.items[2] != "empty" &&
      this.items[4] == this.items[6] &&
      this.items[2] == this.items[6]
    ) {
      if (this.check == true) {
        this.winmessage = "player1 wins";
        return this.toastr.success(this.winmessage);
      } else {
        this.winmessage = "player2 wins";
        return this.toastr.success(this.winmessage);
      }
    } else if (
      this.items[0] != "empty" &&
      this.items[1] != "empty" &&
      this.items[2] != "empty" &&
      this.items[3] != "empty" &&
      this.items[4] != "empty" &&
      this.items[5] != "empty" &&
      this.items[6] != "empty" &&
      this.items[7] != "empty" &&
      this.items[8] != "empty"
    ) {
      this.winmessage = "No one wins";
      return this.toastr.error(this.winmessage);
    }
  };

  resetgame() {
    this.items = new Array(9).fill("empty");
    this.check = false;
    this.winmessage = "";
  }
}
