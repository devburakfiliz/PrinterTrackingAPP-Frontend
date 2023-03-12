import { Pipe, PipeTransform } from '@angular/core';
import { Toner } from 'src/app/models/toner';

@Pipe({
  name: 'tonerPipe'
})
export class TonerPipePipe implements PipeTransform {

  transform(value: Toner[], filterText:string): Toner [] {
    filterText = filterText?filterText.toLocaleLowerCase():""
      return filterText?value.filter((t:Toner)=>t.serialNumber.toLocaleLowerCase().indexOf(filterText)!==-1
      ||t.modelName.toLocaleLowerCase().indexOf(filterText)!==-1
      ||t.brandName.toLocaleLowerCase().indexOf(filterText)!==-1
      ||t.id.toString().indexOf(filterText)!==-1)

      :value;
  }
}
