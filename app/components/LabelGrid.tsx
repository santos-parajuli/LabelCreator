import React from 'react';
import QRCodeLabel, { FabricRow, LabelType } from './QRCodeLabel';

type LabelGridProps = {
	fabric: FabricRow;
	labelType: LabelType;
	count?: number;
};

const LabelGrid: React.FC<LabelGridProps> = ({ fabric, labelType, count = 30 }) => (
	<div className='grid grid-cols-3 grid-rows-10 py-[0.5in] px-[0.1875in] w-[8.5in] mx-auto' style={{ pageBreakInside: 'avoid' }}>
		{Array.from({ length: count }).map((_, idx) => (
			<QRCodeLabel key={idx} fabric={fabric} labelType={labelType} />
		))}
	</div>
);

export default LabelGrid;
