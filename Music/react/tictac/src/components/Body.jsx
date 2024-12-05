import content from "../content";
import { Container } from "./styles/Container.styled";
import Card from "./Card";

export default function Body() {
  return (
    <Container>
      {content.map((item,index) => (
        <Card key={index} item={item}/>
      ))}
    </Container>
  )
}