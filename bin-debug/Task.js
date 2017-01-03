var Task = (function () {
    function Task(id, name, status, desc, fromNpcId, toNpcId) {
        this._id = id;
        this._name = name;
        this._status = status;
        this._desc = desc;
        this.fromNPCId = fromNpcId;
        this.toNPCId = toNpcId;
    }
    var d = __define,c=Task,p=c.prototype;
    d(p, "id"
        ,function () {
            return this._id;
        }
    );
    d(p, "name"
        ,function () {
            return this._name;
        }
    );
    d(p, "status"
        ,function () {
            return this._status;
        }
        ,function (status) {
            this._status = status;
        }
    );
    d(p, "desc"
        ,function () {
            return this._desc;
        }
    );
    return Task;
}());
egret.registerClass(Task,'Task');
//# sourceMappingURL=Task.js.map