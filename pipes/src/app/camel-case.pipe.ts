import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let values = value.split(' ');
    let result = '';

    for( let i of values ){
      result += this.capitalize(i) + ' ';
    }
    return result;
  }


  capitalize(value: string){
    return value.substr(0,1).toLocaleUpperCase() +
      value.substr(1).toLocaleLowerCase();
  }

}
