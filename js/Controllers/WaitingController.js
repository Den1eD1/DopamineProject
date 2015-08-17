var app = app || {};

app.waitingController = (function () {
    function WaitingController(model) {
        this._model = model;
        this._isClicked = false;
    }

    WaitingController.prototype.load = function (selector) {
        var _this = this;
        this._model.getWaitingTasks()
            .then(function (waitingTasksData) {
                var outputData =
                {
                    tasks: waitingTasksData
                };

                app.waitingView.render(_this, selector, outputData)
            }).done();
    };

    WaitingController.prototype.AttachEventHandler = function () {
        var selector = '#container';
        attachPostWaitingTaskHandler.call(this, selector);
    };

    var attachPostWaitingTaskHandler = function (selector) {
        var _this = this;
        $(selector).on('click', '#add-waiting-task', function() {
            var input = $('<input/>').attr({type : 'text', id:'waiting-task-title', class : 'add-task-title'});
            var addButton = $('<button/>').attr({id: 'add-waiting-task-button', class: 'add-task-button', }).text('ADD');

            $('#add-waiting-task').before(input);
            $('#add-waiting-task').before(addButton);
            $('#add-waiting-task').attr('disabled', true);

            var add = '#add-waiting-task-button';
            attatchAddHandler.call(_this, add);
        })
    };

    var attatchAddHandler= function (selector) {
            var _this = this;
        $(selector).click(function () {
            var taskTitle = $('#waiting-task-title').val();
            if(taskTitle == '') {
                return;
            }
            var task ={
             title: taskTitle,
             image: 'img/trollFace.jpg'
            };
            //console.log(taskTitle);

            _this._model.postWaitingTask(task)
                .then(function () {
                    app.postWaitingTaskView.render(_this, selector, task);
                }, function (error) {
                    console.log(error.responseText);
                })
            
        })
    }

    WaitingController.prototype.postWaitingTask = function (selector, data) {
        
        var task = 
        {
            title: data
        };

        this._model.postWaitingTask(data)
        .then(function() {
            app.postWaitingTastView.render(selector, student);
        });

    };
    return {
        load: function (model) {
            return new WaitingController(model);
        }
    }
}());