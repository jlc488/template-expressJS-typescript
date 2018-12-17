import PostInterface from 'interfaces/postInterface';


class PostService {


    public find(): Promise<any> {

        return new Promise((resolve, reject){
            
        })
    }


    public findById(id:number) : Promise<any> {

    }

    public save(itemObj: PostInterface): Promise<any> {

    }

    public remove(id:number) : Promise<any> {

    }
}

export default new PostService();