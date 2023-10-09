import { useParams } from 'react-router-dom';

function PropertyDetail() {
	const { slug } = useParams();
	return <div>PropertyDetail {slug}</div>;
}

export default PropertyDetail;
