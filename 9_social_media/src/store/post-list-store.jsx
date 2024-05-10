import { createContext, useReducer } from "react";
const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => {},
  deletePost: () => {},
};
export const PostList = createContext(DEFAULT_CONTEXT);
const postListReducer = (currPostList, action) => {
  return currPostList;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer,DEFAULT_POST_LIST);
  const addPost = () => {};
  const deletePost = (postId) => {
dispatchPostList({
  type:'DELETE_POST',
})
      
  };
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST=[{
    id:'1',
    title:'Going to Mumbai',
    body:'Hi am going to mumbai for my vacation.',
    reactions:200,
    userId:'user-25',
    tags:['vacation','mumbai','enjoying']
},
{
    id:'3',
    title:'Happy ending',
    body:'The best movie i ever watched.',
    reactions:42,
    userId:'user-11',
    tags:['movie','love','romeo']
},
{
    id:'4',
    title:'Hirinfg Alert',
    body:'Hi am going to mumbai for my vacation.',
    reactions:23,
    userId:'user-17',
    tags:['vacation','mumbai','enjoying']
},
{
    id:'5',
    title:'Friendship forever',
    body:'Happy friendship day',
    reactions:2,
    userId:'user-5',
    tags:['kasiakapila','friendship','child']
},
{
    id:'2',
    title:'Came from Delhi',
    body:'Hi am came to delhi for my vacation.',
    reactions:14,
    userId:'user-12',
    tags:['visit','delhi','happy']
}];