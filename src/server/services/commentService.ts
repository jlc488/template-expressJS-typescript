interface CommentInterface {
  id: number
  body: string
  postId: number
}

export class CommentService {
  public find(): Promise<any> {
    return new Promise((resolve, reject) => {
      //implement service logic here
    })
  }

  public findById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      //implement service logic here
    })
  }

  public save(cmtObj: CommentInterface): Promise<any> {
    return new Promise((resolve, reject) => {
      //implement service logic here
    })
  }

  public remove(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      //implement service logic here
    })
  }
}
