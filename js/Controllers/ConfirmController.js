var app = app || {};

app.confirmController = (function () {
   function ConfirmController(model) {
       this._model = model;
   }

    ConfirmController.prototype.loadConfirmTasks = function (selector) {
        var _this = this;
        this._model.getConfirmTasks()
            .then(function (confirmData) {
                var outputData =
                {
                    tasks: confirmData
                };

                app.confirmView.render(_this, selector, outputData);
            });
    };

    ConfirmController.prototype.AttachEventHandler= function () {
        var selector = '#container';
        attachConfirmTask.call(this, selector);
    };

    var attachConfirmTask = function (selector) {
        var _this = this;
        $(selector).on('click', '#add-confirm-task', function () {
            var input = $('<input/>').attr({type: 'text', id: 'confirm-task-title', class: 'add-task-title'});
            var addButton = $('<button/>').attr({id: 'add-confirm-task-button', class: 'add-task-button',}).text('ADD');
            $('#add-confirm-task').before(input);
            $('#add-confirm-task').before(addButton);
            $('#add-confirm-task').attr('disabled', true);

            var add = '#add-confirm-task-button';
            attachAddHandler.call(_this, add);
        });
    }
        var attachAddHandler = function (selector) {
            var _this = this;
            $(selector).click(function () {
                var taskTite = $('#confirm-task-title').val();
                if(taskTite === '') {
                    return
                }

                var task = {
                    title: taskTite,
                    image: 'img/trollFace.jpg'
                };

                _this._model.postConfirmTask(task)
                    .then(function () {
                        app.postConfirmTaskView.render(_this, selector, task);
                    }, function (error) {
                        console.log(error.responseText);
                    })
            })
        };

    return {
        load: function (model) {
            return new ConfirmController(model);
        }
    }

}());