/* eslint-disable react-hooks/exhaustive-deps */
import { Card, CardContent, Chip, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../store-redux/features/postSlice";

const Dashboard2 = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div style={styles.listContainer}>
        {posts?.map((post) => (
          <div style={styles.container}>
            <div style={styles.header}>
              <h4 key={post.id}>{post.title}</h4>
              {post.title === "TO-DO" ? (
                <button style={styles.addBtn}>ADD</button>
              ) : (
                ""
              )}
            </div>
            {post?.todo.map((list) => (
              <Card key={list.id} style={styles.cardContainer}>
                <CardContent>
                  <Typography gutterBottom>{list.text}</Typography>
                </CardContent>
                <div style={{ marginLeft: 10, marginBottom: 5 }}>
                  <Chip
                    label={list.label}
                    style={{
                      backgroundColor:
                        list.label === "Priority"
                          ? "lightseagreen"
                          : "" || list.label === "Medium"
                          ? "yellowgreen"
                          : "" || list.label === "Low"
                          ? "pink"
                          : "",
                      color: "white",
                      height: 20,
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

const styles = {
  listContainer: {
    display: "flex",
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#98DDCA",
    borderRadius: 3,
    width: 300,
    padding: 8,
    marginRight: 10,
    height: "100%",
  },
  cardContainer: {
    marginBottom: 8,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addBtn: {
    height: 30,
    width: 70,
    alignSelf: "center",
    border: "none",
    backgroundColor: "#fff",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "700",
  },
};

export default Dashboard2;
