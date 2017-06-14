"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var api_service_1 = require("./api.service");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var in_memory_data_service_1 = require("./in-memory-data.service");
describe('Api Service', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.UserData)],
            providers: [api_service_1.ApiService]
        });
    });
    it('should ...', testing_1.inject([api_service_1.ApiService], function (api) {
        expect(api.title).toBe('World');
    }));
});
//# sourceMappingURL=api.service.spec.js.map