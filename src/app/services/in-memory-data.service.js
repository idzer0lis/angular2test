"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoginService = (function () {
    function LoginService() {
    }
    LoginService.prototype.createDb = function () {
        var users = [
            { name: 'admin', password: 'admin' }
        ];
        return { users: users };
    };
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=in-memory-data.service.js.map