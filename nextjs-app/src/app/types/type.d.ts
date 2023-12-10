type postType = {
  id: string;
  user: userType;
  text: string;
  images: Array<image>;
  videos?: Array<video>;
  likes: Array<emotionType>;
  disLikes: Array<emotionType>;
  shares: Array<shareType>;
  comments: Array<commentType>;
  createdAt: string;
  updatedAt: string;
};
type imageType = {
  url: string;
  id: string;
};
type videoType = {
  src: string;
  id: string;
};
type commentType = {
  id: string;
  text: string;
  post: postType;
  likes: Array<emotionType>;
  disLikes: Array<emotionType>;
  commentList: Array<commentType>;
  user: userType;
  postId: string;
};
type shareType = {
  id: string;
  userId: string;
};
type emotionType = {
  id: string;
  userId: string;
};
type userType = {
  username: string;
  id: string;
  fullName: string;
  image: string;
  email: string;
  userName: string;
  bio: string;
  roles: string;
  nickName: string;
};
