import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import ListComment from "./components/ListComments";

const PostComment = () => {
  const [comments, setComments] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    const getComment = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
      );
      setComments(res.data);
    };
    getComment();
  }, []);

  if (!comments) return <p> Loading Data</p>;
  return (
    <div>
      {comments.map((comment) => (
        <ListComment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default PostComment;
