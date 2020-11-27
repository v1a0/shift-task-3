import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loading'
})
export class LoadingPipe implements PipeTransform {

  transform(mode): unknown {
    return mode
  }

}
