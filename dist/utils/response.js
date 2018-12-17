"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Resp {
    sendCreated(res, data) {
        res.status(201).send(data);
    }
    setBadRequest(res, message) {
        res.status(400).send({
            success: false,
            message,
        });
    }
    sendForbidden(res) {
        res.status(403).send({
            success: false,
            message: 'You do not have rights to access this resource',
        });
    }
    sendNotfound(res) {
        res.status(400).send({
            success: false,
            message: 'Resource not found',
        });
    }
    setHeaderForCORS(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-Access-Token, Content-Type, Accept');
        next();
    }
}
exports.Resp = Resp;
exports.default = new Resp();
//# sourceMappingURL=response.js.map