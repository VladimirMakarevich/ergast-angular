import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AppErrorHandler implements ErrorHandler {

  public handleError(error: any) {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        // add logic here to handle main codes
        // case 404: {
        //   return;
        // }
      }
    }

    console.error(error);
  }

}
