import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/list/List";
import "./home.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDQ2MjAyNTMzOTFmMGVkOWQyMjI5YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NTA0MjQ1MiwiZXhwIjoxNjk1NDc0NDUyfQ.B5l-igpwyz94d2LGweLyKk220ZcOWHfgjpl1fOr8AkQ",
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {/* <List />
      <List />
      <List />
      <List /> */}
      {lists.map((list) => (
        <List list={list} />
      ))}

      {/* eh thale vaali map function nu uncomment krna hai te upr vaale nu comment  thale vaala pta ni chal ni rea c shyd due to api function */}
      {/* {lists.map((list) => (
        <List list={list} />
      ))} */}
    </div>
  );
};

export default Home;
