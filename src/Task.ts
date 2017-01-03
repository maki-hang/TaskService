class Task{
    private _id:string;
    private _name:string;
    private _status:TaskStatus;
    public _desc:string;
    public fromNPCId:string;
    public toNPCId:string;

    constructor(id: string, name: string, status: TaskStatus, desc: string, fromNpcId: string, toNpcId: string) {
        this._id = id;
        this._name = name;
        this._status = status;
        this._desc = desc;
        this.fromNPCId = fromNpcId;
        this.toNPCId = toNpcId;
    }

    public get id(): string {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get status(): TaskStatus {
        return this._status;
    }

    public set status(status: TaskStatus) {
        this._status = status;
    }

    public get desc(): string {
        return this._desc;
    }

}