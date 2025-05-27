'use client';

import React from 'react';
import QRCodeLabel, { FabricRow, LabelType } from './QRCodeLabel';

type SingleQRCodePreviewProps = {
	fabric: FabricRow;
	labelType: LabelType;
};

const SingleQRCodePreview: React.FC<SingleQRCodePreviewProps> = ({ fabric, labelType }) => (
	<div className='mb-6 flex justify-center print:hidden'>
		<QRCodeLabel fabric={fabric} labelType={labelType} />
	</div>
);

export default SingleQRCodePreview;
