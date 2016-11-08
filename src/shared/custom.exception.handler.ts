// import { ErrorHandler } from 'angular2/core';

// class _ArrayLogger {
//     res = [];
//     log(s: any): void { this.res.push(s); }
//     logError(s: any): void { this.res.push(s); }
//     logGroup(s: any): void { this.res.push(s); }
//     logGroupEnd() {
//         this.res.forEach(error => {
//             console.error(error);
//         })
//     };
// }

// export class CustomExceptionHandler extends ErrorHandler  {
//     constructor() {
//         super(new _ArrayLogger(), true);
//     }

//     call(error, stackTrace = null, reason = null) {
//         // if (ENV === 'production') {
//         //     // send email
//         // }
//         super.call("DMR:"+error, stackTrace, reason);
//     }
// }