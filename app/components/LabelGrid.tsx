import QRCodeLabel from './QRCodeLabel';
import React from 'react';

interface FabricRow {
	Fabric: string;
	Color: string;
	'On Sale': string;
	URL: string;
}

type LabelGridProps = {
	fabric: FabricRow;
	count?: number;
};

const LabelGrid: React.FC<LabelGridProps> = ({ fabric, count = 30 }) => (
	<div className='grid grid-cols-3 grid-rows-10 py-[0.5in] px-[0.1875in] w-[8.5in] mx-auto' style={{ pageBreakInside: 'avoid' }}>
		{Array.from({ length: count }).map((_, idx) => (
			<QRCodeLabel key={idx} fabric={fabric} />
		))}
	</div>
);

export default LabelGrid;
