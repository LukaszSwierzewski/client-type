import API from "./setup";
import { INewPost } from "../types/Post";
export default {
  getPosts() {
    return API().get("/");
  },
  addPost(params: INewPost) {
    return API().post("/", params);
  },
  deletePost(id: string) {
    return API().delete("delete/" + id);
  },
  getPost(id: any) {
    return API().get("/" + id);
  }
};
