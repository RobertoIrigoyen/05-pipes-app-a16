import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'CanFly'
})

export class CanFly implements PipeTransform {
    transform(value: boolean): 'vuela' | 'no vuela' {
        return value ? 'vuela' : 'no vuela'
    }
}