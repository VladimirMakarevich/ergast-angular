import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable()
export class HttpDataInterceptor implements HttpInterceptor {

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // also, we can handle the request, for example transform data before send to backend if we needed
    return next.handle(request).pipe(
      catchError(error => {
        console.error("ERROR >>>>>>>>>> ", error);
        return throwError(error);
      })
    );
  }

}
