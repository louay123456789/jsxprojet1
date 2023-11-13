import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Name from './Name'
import Price from './Price'
import Description from './Description'
import Image from './Image'
const name = "";
const hasName = Boolean(name);

function TextExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><Name /></Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><Price/></Card.Subtitle>
        <Card.Text><Description /></Card.Text>
      </Card.Body>
      <Image/>

      
      <div>
      <p>Hello, {name ? name : "there"}!</p>
    </div>   
     <div>
      {hasName ? (
        <img src="aa.jpg" alt="Profile" />
      ) : (
        <p>No image available</p>
      )}
      <Card />
    </div>
    
    </Card>
    
    
  )
}


export default TextExample;

