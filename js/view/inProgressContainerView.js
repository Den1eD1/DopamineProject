var app = app || {};

app.inProgresssContainerView = (function () {
    function render(controller) {
        $.get('Templates/task-container.html', function (temp) {
            var template = Handlebars.compile(temp);

            var json = {
              containerType: 'inProgress',
                taskHeader: "IN PROGRESS",
                iconClass: 'fa fa-cogs'
            };
            var html = template(json);

            $('#task-wrapper').append(html);
        }).then(function () {
           var selector = $('#inProgress');
            controller.loadTasksInProgress(selector);
        });
    }

    return {
        load: function (controller) {
            return render(controller);
        }
    }
}());