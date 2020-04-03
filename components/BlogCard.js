import { Card } from 'react-bootstrap'

const BlogCard = ({ imageUrl, title, brief }) => {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} className="blog-card" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <div dangerouslySetInnerHTML={{ __html: brief }}></div>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}

export default BlogCard