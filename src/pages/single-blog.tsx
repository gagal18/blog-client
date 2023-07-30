import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const params = useParams();
    return (
        <div>
            SingleBlog - {params.id}
        </div>
    )
}

export default SingleBlog
