import {Pipe, PipeTransform,Injectable} from '@angular/core';

@Pipe({
    name: "fmenu"
})

@Injectable()
export class FMenuPipe implements PipeTransform{
    transform(args: any[]): any[] {
        if (args != null && args.length>=1){
            return  args.filter(item => item.show == true);
        }
        return [];
    }

}