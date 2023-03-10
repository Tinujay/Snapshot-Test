

import Card from 'react-bootstrap/Card'
import SRLOGO from './SR_4K.png'

const GitHubCard = () => {
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src={SRLOGO}/>
          <Card.Body>
              <Card.Title>8cott</Card.Title>
              <Card.Text>
                Scott is an insanely experienced software engineer from Brooklyn.
              </Card.Text>
          </Card.Body>
          </Card>
        </div>
    );
  }
  
  export default GitHubCard