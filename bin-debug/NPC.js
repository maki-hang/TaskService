var NPC = (function (_super) {
    __extends(NPC, _super);
    function NPC(id, x, y, texture) {
        _super.call(this);
        this._emoji = new egret.Bitmap;
        this._chara = new egret.Bitmap;
        this._id = id;
        // this.x=x;
        // this.y=y;
        this._chara.x = x;
        this._chara.y = y;
        this._chara.texture = RES.getRes(texture);
        this._emoji.x = x;
        this._emoji.y = y - 40;
        this._emoji.scaleX = 2;
        this._emoji.scaleY = 2;
        this._emoji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNPCClick, this);
        this._chara.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNPCClick, this);
        for (var i = 0; i < TaskService.taskList.length; i++) {
            if (this._id == TaskService.taskList[i].fromNPCId) {
                this._emoji.texture = RES.getRes("ytanhao_png");
                console.log("emoji");
            }
        }
        this._emoji.touchEnabled = true;
        this._chara.touchEnabled = true;
        console.log("npc");
        this.addChild(this._chara);
        this.addChild(this._emoji);
        TaskService.addObserver(this);
    }
    var d = __define,c=NPC,p=c.prototype;
    p.onNPCClick = function (e) {
        for (var i = 0; i < TaskService.taskList.length; i++) {
            switch (TaskService.taskList[i].status) {
                case TaskStatus.ACCEPTABLE:
                    var dialogPanel = new DialoguePanel(this._chara);
                    this.addChild(dialogPanel);
                    // for (var i = 0; i < TaskService.taskList.length; i++) {
                    //     if (this._id == TaskService.taskList[i].fromNPCId) {
                    //         this._emoji.touchEnabled = false;
                    //         this._chara.touchEnabled = false;
                    //     }
                    //     if (this._id == TaskService.taskList[0].toNPCId) {
                    //         this._emoji.touchEnabled = true;
                    //         this._chara.touchEnabled = true;
                    //         console.log("to touch enable")
                    //     }
                    // }
                    break;
                case TaskStatus.DURING:
                    this._emoji.texture = RES.getRes("ywenhao_png");
                    TaskService.taskList[i].status = TaskStatus.CAN_SUMBIT;
                    break;
            }
        }
        console.log(TaskService.taskList[0].status);
    };
    p.onChange = function (task) {
        switch (task.status) {
            case TaskStatus.ACCEPTABLE:
                //useless
                break;
            case TaskStatus.DURING:
                this._emoji.texture = RES.getRes("gwenhao_png");
                break;
            case TaskStatus.CAN_SUMBIT:
                //useless
                break;
            case TaskStatus.SUBMITTED || TaskStatus.UNACCEPTABLE:
                this._emoji.texture = RES.getRes(null);
                break;
        }
        // if (task.status == TaskStatus.ACCEPTABLE) {
        //     this._emoji.texture = RES.getRes("ytanhao_png");
        // }
        // if (task.status == TaskStatus.DURING) {
        //     this._emoji.texture = RES.getRes("gwenhao_png");
        // }
        // if (task.status == TaskStatus.CAN_SUMBIT) {
        //     this._emoji.texture = RES.getRes("ywenhao_png");
        // }
        // if (task.status == TaskStatus.SUBMITTED||task.status == TaskStatus.UNACCEPTABLE) {
        //     this._emoji.texture = RES.getRes(null);
        // }
    };
    return NPC;
}(egret.DisplayObjectContainer));
egret.registerClass(NPC,'NPC',["Observer"]);
//# sourceMappingURL=NPC.js.map