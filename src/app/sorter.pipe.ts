import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(charactersList, status = ''): unknown {
    if (!status) {
      return charactersList
    }

    return charactersList.filter(character => {
      return character.status.toLowerCase() == status.toLowerCase()
    })

  }

}
