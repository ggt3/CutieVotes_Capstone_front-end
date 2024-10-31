import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { AiFillLike } from "react-icons/ai";
import { useAuth } from "../services/AuthProvider";

export default function VotePage() {
    const {user} = useAuth()
  const [pictures, setPictures] = useState([]);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    const fetchVote = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/pictures/compare`
      );
      const data = await res.data;
      setPictures(data);
      setVoted(false);
    };
    fetchVote();
  }, [voted]);

  const handleVote = async (id) => {
    console.log("hi", id);
    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/pictures/${id}/upvote?user=${user}`
    );
    setVoted(true);
  };
  return (
    <main>
      <Container>
        <h1 className="display-3 text-center fw-bold p-4">Which is cuter?</h1>
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
