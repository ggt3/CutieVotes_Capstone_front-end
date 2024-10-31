//load the user's liked images
//show total votes under each image
import {useAuth} from '../services/AuthProvider'
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Label from "react-bootstrap/FormLabel"

export default function FavoritesPage() {
    const [pictures, setPictures] = useState([]);
    const {user} = useAuth()
    
    useEffect(() => {
      const fetchFavePics = async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/${user}/liked`);
        const data = await res.data;
        console.log("users favorites",data);
        setPictures(data);
      };
      fetchFavePics();
    }, []);
    return(
        <Container>
        <Row className="justify-content-center">
          {pictures.map((picture) => (
            <Col key={picture._id} xs={12} md={5} className="mb-4">
              <Image
                src={picture.url}
                rounded
                fluid
                style={{ cursor: "pointer", maxHeight: "500px", width: "100%" }}
              />
              <Label>{picture.totalLikes} Votes</Label>
            </Col>
          ))}
        </Row>
      </Container>
    )
}