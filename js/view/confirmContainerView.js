var app = app || {};

app.confirmContainerView=(function () {
    function render(controller){
        $.get('Templates/task-container.html', function (temp) {
            var template = Handlebars.compile(temp);

            var json = {
                containerType: 'confirm',
                taskHeader: 'REVIEW/CONFIRM',
                iconClass: 'fa fa-check'
            }
            var html = template(json);

            $('#task-wrapper').append(html);
        }).then(function () {
            var selector = $('#confirm');
            controller.loadConfirmTasks(selector);
        });
    }
    return {
        load: function (controller) {
            return render(controller);
        }
    }
}());