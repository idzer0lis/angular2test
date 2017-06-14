var UserData = (function () {
    function UserData() {
    }
    UserData.prototype.createDb = function () {
        var users = [
            { name: 'admin', password: 'admin' }
        ];
        return { users: users };
    };
    return UserData;
}());
export { UserData };
//# sourceMappingURL=in-memory-data.service.js.map