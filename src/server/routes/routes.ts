import * as express from 'express'
import { PostController } from 'controllers/postController'
import { CommentController } from 'controllers/commentController'

export class Routes {
  public itemController: PostController = new PostController()

  public setRouter(app: express.Application): void {
    app.route('/').get((req: express.Request, res: express.Response) => {
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
