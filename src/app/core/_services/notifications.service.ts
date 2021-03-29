import { Injectable } from '@angular/core';
import { MessageService } from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private msgSer: MessageService) {}
  successNotification(msg: string) {
    return this.msgSer.add({
      severity: "success",
      detail: msg,
    });
  }
  errorNotification(msg: string) {
    return this.msgSer.add({
      severity: "error",
      summary: "Error Message",
      detail: msg,
    });
  }
}
