var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        this.title = 'World'; // used it for service testing POC, will be removed
        this.usersUrl = 'api/users'; // URL mockup web API
    }
    ApiService.prototype.getUser = function () {
        return this.http.get(this.usersUrl)
            .toPromise() // transform observable to a promise TODO: Study observables more
            .then(this.extractData)
            .catch(this.handleError);
    };
    ApiService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ApiService.prototype.handleError = function (error) {
        // Remote logging infrastructure? for now this is the main error handler for responses
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return ApiService;
}());
ApiService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map