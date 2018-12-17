import { Request, Response, NextFunction } from 'express'
import resp from 'utils/response'
import PostInterface from 'interfaces/postInterface'
import PostService from 'services/postService'

export class PostController {
  postService: PostService = new PostService()

  public async findById(req: Request, res: Response) {
    try {
      const id = req.params.id
    
      const ret = await this.postService.findById(id)

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
      const ret = await this.postService.find()

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

      const ret = await this.postService.save(obj)

      if (ret) {
        resp.sendCreated(res, ret)
      }

      resp.setBadRequest(
        res,
        'Something went wrong. Unable to save the data!'
      )
    } catch (err) {
      resp.sendError(res, err)
    }
  }

  public async remove(req: Request, res: Response) {
    try {
      const id = req.params.id

      const ret = await this.postService.remove(id)

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
} //end of class
