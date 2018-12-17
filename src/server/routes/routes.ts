import { ItemController } from 'controllers/postController'
import { FolderController } from 'controllers/folderController'

export class Routes {
  public itemController: ItemController = new ItemController()

  public setRouter(app): void {
    app.route('/').get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'GET request successful! XD',
      })
    })

    app
      .route('/item/:id')
      .get(this.itemController.findById)
      .delete(this.itemController.remove)

    app
      .route('/item')
      .get(this.itemController.find)
      .post(this.itemController.save)

    // app.route('/folder')
    //     .get(FolderController.find)
    //     .post(FolderController.save);

    // app.route('/folder/:id')
    //     .get(FolderController.findById)
    //     .delete(FolderController.remove);
  }
}
