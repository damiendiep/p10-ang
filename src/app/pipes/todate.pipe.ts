import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from 'rxjs';

@Pipe({ name: 'todate' })

export default class DatePipe implements PipeTransform {
   transform(timeStamp: number) {
       let resultat = '';
       const date = new Date(timeStamp);
       resultat += date.getHours();
       resultat += ': ' + date.getMinutes();
       resultat += ': ' + date.getSeconds();
       return resultat;
   }
}
