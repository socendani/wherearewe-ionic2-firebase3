import { AppSettings } from "../shared/app.settings";
import { Injectable } from "@angular/core";

/**
 * Sample Log Service
 */
@Injectable()
export class LoggerService {

    private version: "2016.11-1.0";
    public enabled = true;

    constructor() {
        //Imprimir contra Fichero, Firebase, mongoDB, etc..
        //email de críticos en PROD
        console.log("LoggerService:constructor");
        this._check();
        this.version = this.version;
    }
    // constructor(_config: AppSettings) {
    //     this.enabled = _config.isProd();

    // }
    public _check() {
        console.log("LoggerService:check");
        let appSettings = new AppSettings();
        this.enabled = appSettings.isProd();
    }

    assert(message) {
        this._check();

        if (this.enabled) {
            console.assert(message);
        }
    }

    debug(message, ...args) {
        this._check();
        if (this.enabled) {
            console.debug(message, args);
        }
    }

    error(message, ...args) {
        this._check();
        if (this.enabled) {
            console.error(message, args);
        }
    }

    info(message, ...args) {
        this._check();
        if (this.enabled) {
            console.info(message, args);
        }
    }

    log(message, ...args) {
        this._check();
        if (this.enabled) {
            console.log(message, args);
        }
    }

    trace(message, ...args) {
        this._check();
        if (this.enabled) {
            console.trace(message, args);
        }
    }

    warn(message, ...args) {
        this._check();
        if (this.enabled) {
            console.warn(message, args);
        }
    }

    clear() {
        this._check();
        console.clear();
    }
}