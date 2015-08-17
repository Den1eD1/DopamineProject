var app = app || {};

app.postInProgressTaskView = (function () {
    function render(controller, selector,data) {
        $.get('Templates/TasksTemplate.html', function (temp) {
            var template = Handlebars.compile(temp);
            var html = template(data);
            $('#inProgress').append(html);
        })
            .then(function () {
                $('#inProgress-task-title').remove();
                $('#add-inProgress-task-button').remove();
                $('#add-inProgress-task').attr('disabled', false);

                var number = Number($('#inProgress-badge').html());
                $('#inProgress-badge').text(number + 1);
            });
    }
    return {
        render: function (controller, selector, data) {
            render(controller, selector, data);
        }
    }
    }());