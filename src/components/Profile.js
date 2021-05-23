import React, { useEffect, useState } from "react";
import { API, graphqlOperation, Auth } from "aws-amplify";
import { listUsers } from "../graphql/queries";
import { Avatar } from "antd";
import { Layout } from "antd";
const { Content } = Layout;
function Profile() {
  const [userID, setUserID] = useState();
  // const [ name, setName ] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((user) => {
      setUserID(user.attributes.sub);
      console.log(user.attributes.sub);
      console.log(user.attributes.name);
    });
    getPosts();
  }, []);

  async function getPosts() {
    const result1 = await API.graphql(graphqlOperation(listUsers));
    console.log("All Users: ", JSON.stringify(result1.data.listUsers.items));
    setResult(result1.data.listUsers.items);
  }

  return (
    <div>
      <p>{JSON.stringify(result)}</p>
      <Layout>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            backgroundColor: "pink"
          }}
        >
          {result.map((res) => (
            <div style={{
                display: 'flex',
                padding: '20px',
                alignContent: 'center',
            }}>
              <Avatar
                style={{
                  backgroundColor: "#00a2ae"
                }}
                size="large"
              >
                {res.name.split(" ")[0].charAt(0)}
                {res.name.split(" ")[1].charAt(0)}
              </Avatar>
              <h1>{res.name}</h1>
            </div>
          ))}
        </Content>
      </Layout>
    </div>
  );
}

export default Profile;
