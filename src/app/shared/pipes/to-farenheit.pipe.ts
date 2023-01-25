import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFarenheit'
})
export class ToFarenheitPipe implements PipeTransform {

  transform(value: number): number {
    return value * 9/5 + 32;
  }

}
