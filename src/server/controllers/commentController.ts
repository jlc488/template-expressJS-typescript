import { Request, Response, NextFunction } from 'express'
import resp from 'utils/response'
import { CommentService } from 'services/commentService'

export class CommentController {
  commentService: CommentService = new CommentService()

  public async findById(req: Request, res: Response) {
    try {
      const id = req.params.id

      const ret = await this.commentService.findById(id)

      if (ret) {
        resp.sendCreated(res, ret)
      }

      resp.sendNotfound(res)
    } catch (err) {
      resp.sendError(res, err)
    }
  }

  public async find(req: Request, res: Response) {
    try {
      const ret = await this.commentService.find()

      if (ret) {
        resp.sendCreated(res, ret)
      }

      resp.sendNotfound(res)
    } catch (err) {
      resp.sendError(res, err)
    }
  }

  public async save(req: Request, res: Response) {
    try {
      const obj = req.body

      const ret = await this.commentService.save(obj)

      if (ret) {
        resp.sendCreated(res, ret)
      }

      resp.setBadRequest(res, 'Something went wrong. Unable to save the data!')
    } catch (err) {
      resp.sendError(res, err)
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const id = req.params.id

      const ret = await this.commentService.remove(id)

      if (ret) {
        resp.sendCreated(res, ret)
      }

      resp.setBadRequest(
        res,
        'Something went wrong. Unable to delete the data!'
      )
    } catch (err) {
      resp.sendError(res, err)
    }
  }
}
