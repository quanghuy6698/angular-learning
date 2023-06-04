import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const dummyApi = "https://dummyapi.io/data/v1/user?limit=10";

@Component({
  selector: "rxjs-page",
  templateUrl: "./rxjs.page.html",
  styleUrls: ["./rxjs.page.css"],
})
export class RxjsPage {
  constructor(private http: HttpClient) {}

  rxjsEx1() {
    const obsv = new Observable((subscriber) => {
      subscriber.next("Hello");
      subscriber.next("Rxjs");
    });

    obsv.subscribe((x) => console.log(x));
  }
}
