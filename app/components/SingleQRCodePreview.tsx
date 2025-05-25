import QRCodeLabel from './QRCodeLabel'; // 👈 reuse the same label
import React from 'react';

interface FabricRow {
	Fabric: string;
	Color: string;
	'On Sale': string;
	URL: string;
}

type SingleQRCodePreviewProps = {
	fabric: FabricRow;
};

const SingleQRCodePreview: React.FC<SingleQRCodePreviewProps> = ({ fabric }) => (
	<div className='mb-6 flex justify-center print:hidden'>
		<QRCodeLabel fabric={fabric} />
	</div>
);

export default SingleQRCodePreview;
