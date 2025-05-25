import QRCode from 'react-qr-code';
import React from 'react';

interface FabricRow {
	Fabric: string;
	Color: string;
	'On Sale': string;
	URL: string;
}

type QRCodeLabelProps = {
	fabric: FabricRow;
};

const QRCodeLabel: React.FC<QRCodeLabelProps> = ({ fabric }) => (
	<div className='label w-[2.625in] h-[1in] flex flex-row items-center justify-center text-[8pt] text-center overflow-hidden'>
		<QRCode fgColor='#f58625' value={fabric.URL} size={48} />
		<div className='ml-2 truncate text-left'>
			<strong>{fabric.Fabric}</strong>,<p>{fabric.Color}</p>
			<p>Multi-Use</p>
		</div>
	</div>
);

export default QRCodeLabel;
