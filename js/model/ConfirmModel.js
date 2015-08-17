var app = app || {};

app.confirmModel = (function () {
   function ConfirmModel(baseUri, requester, headers) {
       this._requester = requester;
       this._baseUri = baseUri;
       this._headers = headers;
   }

    ConfirmModel.prototype.getConfirmTasks = function () {
        return this._requester.get(this._headers, this._baseUri);
    };

    ConfirmModel.prototype.postConfirmTask = function (data) {
        return this._requester.post(this._headers, this._baseUri, data);
    }

    return {
        load : function (baseUri, requester, headers) {
            return new ConfirmModel(baseUri, requester, headers);
        }
    }
}());