import { useParams } from 'react-router-dom';

export default function ProjectPage() {
	const { projectId } = useParams();

	return (
		<div>
			<h1>ProjectPage con id: {projectId}</h1>
		</div>
	);
}
