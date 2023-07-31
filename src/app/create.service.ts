import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { productor } from "./interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class CreateService {
  url: string = "https://dummyjson.com/products";
  product: productor[] = [];
  constructor(private http: HttpClient) {}

  //CHIAMATA HTTP GET
  getAll(): Observable<productor> {
    return this.http.get<productor>(this.url);
  }
}
