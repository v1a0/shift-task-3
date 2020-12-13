import { Pipe, PipeTransform } from '@angular/core';
import {Character} from "../apimaster/character";
import {SearchSettings} from "./searchSettings";

@Pipe({
  name: 'characterSearch'
})

export class CharacterSearchPipe implements PipeTransform {

  transform(charactersList: Character[], settings: SearchSettings): unknown {
    if (!settings) {
      return charactersList;
    }

    if (settings.season) {
      charactersList = charactersList.filter((character: Character) => {
        if (character.appearance) {
          return settings.season in character.appearance
        }
      })
    }
    if (settings.status) {
      charactersList = charactersList.filter((character: Character) => settings.status == character.status)
    }
    if (settings.name) {
      charactersList = charactersList.filter((character: Character) => character.name.includes(settings.name) || character.nickname.includes(settings.name))
    }
    if (settings.pageSize) {
      if (!settings.page || settings.page < 1) settings.page = 1
      const first = settings.pageSize * (settings.page - 1)
      const last = settings.pageSize * settings.page
      charactersList = charactersList.slice(first, last)
    }

    return charactersList
  };

}
