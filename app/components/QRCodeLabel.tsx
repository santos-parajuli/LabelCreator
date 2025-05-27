import QRCode from 'react-qr-code';
import React from 'react';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../../public/gill-sans-alt-one-light.otf' });

export interface FabricRow {
	Fabric: string;
	Color: string;
	'On Sale': string;
	URL: string;
}

export type LabelType = 'Multi-Use' | 'High Performance' | 'High Performance/Outdoor' | 'Drapery';

type QRCodeLabelProps = {
	fabric: FabricRow;
	labelType: LabelType;
};

const QRCodeLabel: React.FC<QRCodeLabelProps> = ({ fabric, labelType }) => (
	<div className='label w-[2.625in] h-[1in] flex flex-row items-center justify-center text-[10pt] text-center overflow-hidden'>
		<QRCode fgColor='#000000' value={fabric.URL} size={56} />
		<div className='ml-3 truncate text-left'>
			<p className={`uppercase ${myFont.className}`}>{fabric.Fabric},</p>
			<p className="capitalize font-bold font-[arial]">{fabric.Color}</p>
			<p className={myFont.className}>{labelType}</p>
		</div>
	</div>
);

export default QRCodeLabel;
