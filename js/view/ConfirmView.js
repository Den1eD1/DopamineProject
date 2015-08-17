var app = app || {};

app.confirmView = (function () {
   function render(controller, selector, data) {
       $.get("Templates/TasksTemplate.html", function (temp) {
           var template = Handlebars.compile(temp);
           var html = '';

           for(var item in data.tasks) {
               if(!data.tasks[item].isCompleted){
                   data.tasks[item].class = 'notCompleted';
               }
               html += template(data.tasks[item]);
           }

           selector.html(html);
           var count = Object.keys(data.tasks).length;
           $('#confirm-badge').text(count);
       })
   }

    return {
        render : function (controller, selector, data) {
            return new render(controller, selector, data);
        }
    }

}());