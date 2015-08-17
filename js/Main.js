var app = app || {};
(function () {
    var waitingTasksUri = 'contents/content.json';
    var inProgressUri = 'contents/inProgressContent.json';
    var confirmContent = 'contents/confirmContent.json';

    var header = {"Content-Type":"application/json"};

    var requester = app.requester.load();

    var waitingModel = app.waitingModel.load(waitingTasksUri, requester, header);
    var inProgressModel = app.inProgressModel.load(inProgressUri, requester, header);
    var confirmModel = app.confirmModel.load(confirmContent, requester, header);

    var confirmController = app.confirmController.load(confirmModel);
    var inProgressController = app.inProgressController.load(inProgressModel);
    var waitingTasksController = app.waitingController.load(waitingModel);

    var utilities = app.utitities.load();

    app.waitingContainerView.load(waitingTasksController, utilities);
    app.inProgresssContainerView.load(inProgressController);
    app.confirmContainerView.load(confirmController);

    confirmController.loadConfirmTasks();
    inProgressController.loadTasksInProgress();
    waitingTasksController.AttachEventHandler();
    inProgressController.AttachEventHandlers();
    confirmController.AttachEventHandler();

    utilities.generateDropdowns();
    utilities.generateTextArea();
}());