export class Logging {
    static logToConsole: boolean = true;

    static log(val: any) {
        if (this.logToConsole) 
            console.log(val);
    }
}
