import { Pipe, PipeTransform } from '@angular/core';
import { Printer } from 'src/app/models/printer';

@Pipe({
  name: 'printerFilter'
})
export class PrinterFilterPipe implements PipeTransform {

  transform(value: Printer[], filterText:string): Printer [] {
    filterText = filterText?filterText.toLocaleLowerCase():""
      return filterText?value.filter((p:Printer)=>
        p.serialNumber.toLocaleLowerCase().indexOf(filterText)!==-1
      ||p.modelName.toLocaleLowerCase().indexOf(filterText)!==-1
      ||p.brandName.toLocaleLowerCase().indexOf(filterText)!==-1
      )
      :value;
  }

}
