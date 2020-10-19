import React, { useContext, useState, useEffect } from "react";
import SelectionProfile from "./selectionProfile";
import { FirebaseContext } from "../context/firebase";
import { Card, Loading, Header } from "../components";
import { FooterContainer } from "./index";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [slideRows, setSlideRows] = useState([]);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1" dontShowBackgroundOnSmallView>
        <Header.Container>
          <Header.Group>
            <Header.Logo src={logo} alt="logo" to={ROUTES.HOME} />
            <Header.TextLink
              onClick={() => setCategory("series")}
              active={category === "series" ? "true" : "false"}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              onClick={() => setCategory("films")}
              active={category === "films" ? "true" : "false"}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink> {user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink> Sign Out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Container>
        <Header.Feature>
          <Header.Title> Watch Joker Now</Header.Title>
          <Header.Text>
            {" "}
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>

          <Header.PlayButton> Play </Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((slideItem) => (
          <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
            <Card.Title> {slideItem.title}</Card.Title>
            <Card.Entities>
              {slideItem.data.map((item) => (
                <Card.Item key={`${item.docId}`} item={item}>
                  <Card.Image
                    src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                  />
                  <Card.Meta>
                    <Card.SubTitle>{item.title}</Card.SubTitle>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>
            <Card.Feature category={category}>
              <p> HELLO </p>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectionProfile user={user} setProfile={setProfile} />
  );
}
