var app = app || {};

app.inProgressController = (function () {
   function InProgressController(model) {
       this._model = model;
   }

    InProgressController.prototype.loadTasksInProgress = function (selector) {
        var _this = this;
        this._model.getTaskInProgress()
            .then(function (inProgressTasksData) {
                var outputData =
                {
                  tasks: inProgressTasksData
                };

                app.inProgressView.render(_this, selector, outputData);
            });
    };

    InProgressController.prototype.AttachEventHandlers = function () {
        var selector = '#container';
        attachPostTaskInProgress.call(this, selector);
    };
    
    var attachPostTaskInProgress = function (selector) {
        var _this = this;
        $(selector).on('click', '#add-inProgress-task', function () {
            var input = $('<input/>').attr({type : 'text', id:'inProgress-task-title', class : 'add-task-title'});
            var addButton = $('<button/>').attr({id: 'add-inProgress-task-button', class: 'add-task-button', }).text('ADD');

            $('#add-inProgress-task').before(input);
            $('#add-inProgress-task').before(addButton);
            $('#add-inProgress-task').attr('disabled', true);

            var add = '#add-inProgress-task-button';
            attachAddHandler.call(_this, add);
        });

        var attachAddHandler = function (selector) {
            var _this = this;
            $(selector).click(function () {
                var taskTitle = $('#inProgress-task-title').val();
                if(taskTitle === '') {
                    return;
                }

                var task = {
                    title:taskTitle,
                    image: 'img/trollFace.jpg'
                };

                _this._model.postTaskInProgress(task)
                    .then(function () {
                        app.postInProgressTaskView.render(_this, selector, task)
                    }, function (error) {
                        console.log(error.responseText);
                    })
            })
        }
    }

    return {
        load: function (model) {
            return new InProgressController(model);
        }
    }
}());