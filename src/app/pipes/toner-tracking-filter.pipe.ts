import { Pipe, PipeTransform } from '@angular/core';
import { TonerTracking } from '../models/tonerTracking';

@Pipe({
  name: 'tonerTrackingFilter'
})
export class TonerTrackingFilterPipe implements PipeTransform {

  transform(value: TonerTracking[], filterText: string): TonerTracking[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((t:TonerTracking)=>t.serialNumber.toLocaleLowerCase().indexOf(filterText)!==-1
    ||t.modelName.toLocaleLowerCase().indexOf(filterText)!==-1
    ||t.brandName.toLocaleLowerCase().indexOf(filterText)!==-1
    ||t.id.toString().indexOf(filterText)!==-1)

    :value;
}

}
