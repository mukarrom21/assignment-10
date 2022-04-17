import { Button, Card } from "react-bootstrap";

const Course = ({course}) => {
    const {name, description, img, price} = course;
    
  return (
    <div className="mx-3 my-4 col-10 col-md-5">
          <Card className="text-center">
            <Card.Header>
                <img src={img} alt="" />
            </Card.Header>
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <p className="text-danger">Only for ${price}</p>
              <Button variant="primary">Get This Course</Button>
            </Card.Body>
          </Card>
    </div>
  );
};

export default Course;
