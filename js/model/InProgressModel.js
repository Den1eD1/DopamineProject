var app = app || {};

app.inProgressModel = (function () {
   function InProgressModel(baseUri, requester, headers) {
       this._requester = requester;
       this._baseUri = baseUri;
       this._headers = headers;
   }

    InProgressModel.prototype.getTaskInProgress = function () {
        return this._requester.get(this._headers, this._baseUri);
    };

    InProgressModel.prototype.postTaskInProgress = function (data) {
        return this._requester.post(this._headers, this._baseUri, data);
    };

    return {
        load : function (baseUri, requester, headers) {
            return new InProgressModel(baseUri, requester, headers);
        }
    }
}());