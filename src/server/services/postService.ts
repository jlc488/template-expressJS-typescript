interface PostInterface {
  id: number
  title: string
  contents: string
  author: string
}

export class PostService {
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

  public save(postObj: PostInterface): Promise<any> {
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
