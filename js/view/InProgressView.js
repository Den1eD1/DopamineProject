var app = app || {};

app.inProgressView = (function () {
   function render(controller, selector, data) {
       $.get("Templates/TasksTemplate.html", function (temp) {
           var template = Handlebars.compile(temp);
           var html = '';
           for (var item in data.tasks) {
               html += template(data.tasks[item]);
           }
           selector.html(html);

           var count = Object.keys(data.tasks).length;
            $('#inProgress-badge').text(count);
       });
   }

    return {
        render : function(controller, selector, data) {
            render(controller, selector, data);
        }
    }
}());