import { Pipe, PipeTransform } from '@angular/core';
import {Character} from "./apimaster/character";

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

  transform(charactersList: Character[], status: string = ''): unknown {
    if (!status) {
      return charactersList;
    }

    return charactersList.filter((character: Character) => {
      return character.status.toLowerCase() == status.toLowerCase();
    })
  };

}
