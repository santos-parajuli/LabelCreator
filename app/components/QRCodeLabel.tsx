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
	<div className='label w-[2.625in] h-[1in] flex flex-row items-center justify-center text-[9pt] text-center overflow-hidden'>
		<QRCode fgColor='#f58625' value={fabric.URL} size={56} />
		<div className='ml-2 truncate text-left'>
			<p className="uppercase">{fabric.Fabric},</p>
			<strong className="capitalize">{fabric.Color}</strong>
			<p>Multi-Use</p>
		</div>
	</div>
);

export default QRCodeLabel;
