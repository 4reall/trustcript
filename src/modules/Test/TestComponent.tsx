import Pagination from 'src/common/components/Pagination/Pagination';
import { useState } from 'react';
import Button from 'src/common/components/_ui/Button/Button';

const TestComponent = () => {
	const [active, setActive] = useState(1);

	return (
		<div>
			<Pagination
				pageDisplayed={4}
				pageCount={6}
				setActivePage={(page) => setActive(page)}
				activePage={active}
			/>
			<Button onClick={() => setActive(1)}>1</Button>
			<Button onClick={() => setActive(6)}>5</Button>
		</div>
	);
};

export default TestComponent;
