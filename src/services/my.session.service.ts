import {Injectable} from "angular2/core";

@Injectable()
export class MySession {
    private myValue;

    constructor() {}

    setValue(val) {
        this.myValue = val;
    }

    getValue(val) {
        return this.myValue;
    }
}