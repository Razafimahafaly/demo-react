import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
const fistChar = (text) => text.charAt(1);
const randomDate = (start, end) => {
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const ListComment = ({ comment }) => (
  <div>
    <Paper style={{ padding: "40px 20px" }}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar>{fistChar(comment.name)}</Avatar>
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>{comment.name}</h4>
          <p style={{ textAlign: "left" }}>{comment.body}</p>
          <p style={{ textAlign: "left", color: "gray" }}>
            {randomDate(new Date(2015, 0, 1), new Date())}
          </p>
        </Grid>
      </Grid>
    </Paper>
    <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
  </div>
);

export default ListComment;
