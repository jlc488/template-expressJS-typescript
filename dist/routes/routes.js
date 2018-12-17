"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const itemController_1 = require("controllers/itemController");
class Routes {
    constructor() {
        this.itemController = new itemController_1.ItemController();
    }
    setRouter(router) {
        router.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET request successful! XD',
            });
        });
        router
            .route('/item/:id')
            .get(itemController.findById)
            .delete(itemController.remove);
        router
            .route('/item')
            .get(itemController.find)
            .post(itemController.save);
        // router.route('/folder')
        //     .get(FolderController.find)
        //     .post(FolderController.save);
        // router.route('/folder/:id')
        //     .get(FolderController.findById)
        //     .delete(FolderController.remove);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map