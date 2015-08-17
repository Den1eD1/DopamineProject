var app = app || {};

app.postConfirmTaskView = (function () {
    function render(controller, selector, data){
        $.get('Templates/TasksTemplate.html', function (temp) {
            var template = Handlebars.compile(temp);
            var html = template(data);
            $('#confirm').append(html);
        })
            .then(function () {
                $('#confirm-task-title').remove();
                $('#add-confirm-task-button').remove();
                $('#add-confirm-task').attr('disabled', false);

                var number = Number($('#confirm-badge').html());
                $('#confirm-badge').text(number + 1);
            })
    }
    return {
        render: function (controller, selector, data) {
            render(controller, selector, data);
        }
    }
}());