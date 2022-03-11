import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Post = ({ datas }) => {
  return (
    <div className="row align-items-start">
      {datas.map((post) => (
        <div className="col" key={post.id}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
              <Link to={{ pathname: `/comment/${post.id}` }}>View</Link>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Post;
