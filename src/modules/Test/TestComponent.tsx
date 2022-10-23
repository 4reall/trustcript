import Pagination from 'src/common/components/Pagination/Pagination';
import { useState } from 'react';

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
		</div>
	);
};

export default TestComponent;
