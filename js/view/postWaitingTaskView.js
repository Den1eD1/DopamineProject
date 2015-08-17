var app = app || {};

app.postWaitingTaskView = (function () {
    function render(controller, selector, data) {
        $.get("Templates/TasksTemplate.html", function (temp) {
            var template = Handlebars.compile(temp);
            var html = template(data);
            console.log(html);
            $("#waiting").append(html);
        }).then(function () {
            $('#waiting-task-title').remove();
            $('#add-waiting-task-button').remove();
            $('#add-waiting-task').attr('disabled', false);
            var number = Number($('#waiting-badge').html());
            $('#waiting-badge').text(number + 1);
        });
    }

    return {
        render : function (controller, selector, data) {
            render(controller, selector, data);
        }
    }
}());