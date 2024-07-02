export interface PostApi {
  title: string
  body: string
  date: string
}
export interface PostsApi {
  [id: string]: PostApi
}
export interface Post extends PostApi {
  id: string
}