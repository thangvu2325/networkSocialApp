type postType = {
  id: string;
  userId: string;
  text: string;
  images: Array<image>;
  videos?: Array<video>;
  likes: Array<emotionType>;
  disLikes: Array<emotionType>;
  shares: Array<shareType>;
  comments: Array<commentType>;
  createdAt: Date;
  updateAt: Date;
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
  userId: string;
  postId: string;
  likes: Array<emotionType>;
  disLikes: Array<emotionType>;
  commentList: Array<commentType>;
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
  avatar: string;
  id: string;
};
