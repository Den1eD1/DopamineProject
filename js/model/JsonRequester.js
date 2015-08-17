var app = app || {};

app.requester = (function () {
    function Requester() {
    }

    Requester.prototype.get = function (header, serviceUri) {
        return makeRequest('GET', header, serviceUri);
    };

    Requester.prototype.post = function (header, serviceUri) {
        return makeRequest('POST', header, serviceUri);
    };

    function makeRequest(method, headers, url, data) {
        var defer = $.Deferred();
        $.ajax({
            method: method,
            headers: headers,
            url: url,
            data: JSON.stringify(data)
        }).done(function (data) {
            defer.resolve(data);
        }).fail(function (error) {
            defer.reject(error);
            console.log(error.responseText);
        });

        return defer.promise();
    }

    return {
        load: function () {
            return new Requester();
        }
    }

}());
