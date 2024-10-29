import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"
import { AiFillLike } from "react-icons/ai";

export default function VotePage() {
  const [pictures, setPictures] = useState([]);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    const fetchVote = async () => {
      const res = await axios.get("http://localhost:4000/pictures/add/static");
      const data = await res.data;
      console.log(data);
      setPictures(data);
    };
    fetchVote();
  }, []);

  const handleVote = async (id) => {
    console.log("hi", id)
    const res = await axios.post(`http://localhost:4000/pictures/${id}/upvote`)
  };
  return (
    <main>
      <Container>
        <h1 className="mb-4">Which picture is cuter?</h1>
        <Row className="justify-content-center">
          {pictures.map((picture) => (
            <Col key={picture._id} xs={12} md={5} className="mb-4">
              <Image
                src={picture.url}
                rounded
                fluid
                onClick={() => handleVote(picture._id)}
                style={{ cursor: "pointer", maxHeight: "500px", width: "100%" }}
              />
              <Button
                variant="primary"
                onClick={() => handleVote(picture._id)}
                className="mt-3"
              >
                Vote for this one <AiFillLike />
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
}
