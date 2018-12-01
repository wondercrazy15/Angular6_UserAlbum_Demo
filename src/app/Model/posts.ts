export class Posts {
    userId: string
    id: string
    title: string
    body: string
    username: number
    name: string
    comments: Comments[]
}

export class Comments {
    constructor(
      public postId: string,
      public id: string,
      public name: string,
      public email: string,
      public body: string
    ) { }

}
