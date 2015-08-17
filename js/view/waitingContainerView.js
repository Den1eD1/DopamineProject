var app = app || {};

app.waitingContainerView = (function () {
   function render(controller, utilities) {
       $.get('Templates/task-container.html', function (temp) {
           var template = Handlebars.compile(temp);
           var json = utilities.generateJSON('waiting','WAITING', 'fa fa-hourglass-half');
           var html = template(json);

           $('#task-wrapper').append(html);
       }).then(function (){
           var selector = $('#waiting');
            controller.load(selector);
       });
   }
    return {
        load: function (controller, utilitites) {
            return render(controller, utilitites);
        }
    }
}());