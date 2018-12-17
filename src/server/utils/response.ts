import { Request, Response, NextFunction } from 'express'

export class Resp {
  public sendCreated(res: Response, data: any) {
    res.status(201).send(data)
  }

  public setBadRequest(res: Response, message) {
    res.status(400).send({
      success: false,
      message,
    })
  }

  public sendForbidden(res: Response) {
    res.status(403).send({
      success: false,
      message: 'You do not have rights to access this resource',
    })
  }

  public sendNotfound(res: Response) {
    res.status(400).send({
      success: false,
      message: 'Resource not found',
    })
  }

  public sendError(res: Response, err) {
    res.status(500).send({
      success: false,
      message: err
    })
  }

  public setHeaderForCORS(req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, X-Access-Token, Content-Type, Accept'
    )
    next()
  }
}

export default new Resp()
