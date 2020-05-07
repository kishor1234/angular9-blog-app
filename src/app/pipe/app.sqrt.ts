import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
    name: 'sqrt'
})

export class SqrtPipe implements PipeTransform {
    transform(val: number): number {
        return Math.sqrt(val);
    }
}
@Pipe({
    name: 'sqer'
})
export class SquerPipe implements PipeTransform {
    transform(val: number): number {
        return (val * val);
    }
}

@Pipe({
    name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) { }
    transform(value: any): any {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }
}
