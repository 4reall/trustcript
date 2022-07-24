import { useRef, useState } from 'react';
import { Map as MapAPI, Placemark } from '@pbe/react-yandex-maps';

import { MapContainer } from 'components/Map/Map.styles';
import ZoomControls from 'components/ui/ZoomControls/ZoomControls';

import Bubble from 'assets/icons/labels/Bubble.svg';

const center = [55.783939, 37.565686];

const Map = () => {
	const mapRef = useRef<any>(null);
	const [zoom, setZoom] = useState(17);

	const increaseZoom = () => {
		if (mapRef.current) {
			setZoom(mapRef.current.getZoom() + 1);
		}
	};
	const decreaseZoom = () => {
		setZoom(mapRef.current.getZoom() - 1);
	};

	return (
		<MapContainer>
			<MapAPI
				instanceRef={mapRef}
				width={'100%'}
				height={300}
				state={{ center, zoom }}
			>
				<Placemark
					options={{
						iconLayout: 'default#image',
						iconImageSize: [50, 50],
						iconImageHref: Bubble,
					}}
					geometry={center}
				/>
			</MapAPI>
			<ZoomControls
				handleMinusClick={decreaseZoom}
				handlePlusClick={increaseZoom}
				position={{ right: 10, top: 100 }}
			/>
		</MapContainer>
	);
};

export default Map;
