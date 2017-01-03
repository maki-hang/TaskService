class TaskService {
    private static observerList=new Array<Observer>();
    public static taskList=new Array<Task>();
    private static instance: TaskService = null;
    
    constructor() {
        
    }
    //danli
    public static getInstance(){
        if( this.instance == null ) {
            this.instance = new TaskService();
        }
        
        return this.instance;
    }
    
    static accept(id: string) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        let task= TaskService.taskList[id];
        
        if (task.id == id) {
            task.status = TaskStatus.DURING;
            TaskService.notify(task);
            
            return ErrorCode.SUCCESS;
        }
        else {
            return ErrorCode.FAILED;
        }

    }

    static finish(id: string) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        let task = TaskService.taskList[id];
        if (task.id == id) {
            task.status = TaskStatus.SUBMITTED;
            TaskService.notify(task);
          
            return ErrorCode.SUCCESS;
        }
        else {
            return ErrorCode.FAILED;
        }
        
    }
    public getTaskByCustomRole(rule: Function): Task {
        return rule();
    }
    private static notify(task:Task): void {
        for (var observer of this.observerList) {
            observer.onChange(task);
        }
        console.log(TaskService.taskList[0].status);
    }

    public static addObserver(observer: Observer) {
        for (var i = 0; i < TaskService.observerList.length; i++) {
            if (observer == TaskService.observerList[i])
                return ErrorCode.FAILED;
        }
        TaskService.observerList.push(observer);
    }
}