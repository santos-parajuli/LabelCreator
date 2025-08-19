import QRCode from 'react-qr-code';
import React from 'react';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../../public/gill-sans-alt-one-light.otf' });

export interface FabricRow {
	Fabric: string;
	Color: string;
	'On Sale': string; // 'Yes' or 'No'
	URL: string;
}

export type LabelType = 'Multi-Use' | 'High Performance' | 'High Performance/Outdoor' | 'Drapery' | 'Multi-Use, Pillow Only' | 'Double Width, Drapery';

type QRCodeLabelProps = {
	fabric: FabricRow;
	labelType: LabelType;
};

const QRCodeLabel: React.FC<QRCodeLabelProps> = ({ fabric, labelType }) => (
	<div className='label w-[2.625in] h-[1in] flex flex-row items-center justify-center text-[9pt] text-center overflow-hidden'>
		<QRCode fgColor='#000000' value={fabric.URL} size={56} />
		<div className='ml-3 truncate text-left'>
			<p className={`uppercase ${myFont.className}`}>{fabric.name ? {fabric.Fabric}, : "" }</p>
			<p className="capitalize font-bold font-[arial]">{fabric.Color}</p>
			<p className={myFont.className}>{labelType}</p>
			{fabric['On Sale'].toLowerCase() === 'yes' && (
				<p className={`${myFont.className} text-orange-500 font-bold`}>Sale</p>
			)}
		</div>
	</div>
);

export default QRCodeLabel;
