import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  // name sera o nome atribuido ao pipe
  name: 'replace',
})

export class ReplacePipe implements PipeTransform {

  transform(value: string, char: string, valueToReplace: string) {
    return value.replace(char, valueToReplace);
  }

}