var app = app || {};

app.waitingModel = (function () {
    function WaitingModel(baseUri, requester, headers) {
        this._requester = requester;
        this._baseUri = baseUri;
        this._headers = headers;
    }

    WaitingModel.prototype.getWaitingTasks = function () {

        return this._requester.get(this._headers, this._baseUri)
    };

    WaitingModel.prototype.postWaitingTask = function (task) {

        return this._requester.post(this._headers, this._baseUri, task);
    };

    return {
        load: function (baseUri, requester, headers) {
            return new WaitingModel(baseUri, requester, headers);
        }
    }
}());