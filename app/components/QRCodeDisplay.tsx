'use client';

import * as XLSX from 'xlsx';

import React, { useEffect, useState } from 'react';

import FabricSelector from './FabricSelector';
import LabelGrid from './LabelGrid';
import SingleQRCodePreview from './SingleQRCodePreview';

interface FabricRow {
	Fabric: string;
	Color: string;
	'On Sale': string;
	URL: string;
}

const EXCEL_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQL6dvw8lZn_GWvMPYqT0Qm_oh46NHFylgyuhc4WgwO5fHBLIQIFTdE6xlB9TpiCmatOIBch3cA2ClL/pub?output=xlsx';

const QRCodeDisplay = () => {
	const [fabrics, setFabrics] = useState<FabricRow[]>([]);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	useEffect(() => {
		fetch(EXCEL_URL)
			.then((res) => res.arrayBuffer())
			.then((ab) => {
				const workbook = XLSX.read(ab, { type: 'array' });
				const sheet = workbook.Sheets[workbook.SheetNames[0]];
				const data: FabricRow[] = XLSX.utils.sheet_to_json(sheet);
				setFabrics(data);
			});
	}, []);

	const handlePrint = () => window.print();

	const selectedFabric = selectedIndex !== null ? fabrics[selectedIndex] : null;

	return (
		<div className='p-4'>
			{/* Controls (hidden on print) */}
			<div className='mb-6 print:hidden'>
				<FabricSelector fabrics={fabrics} selectedIndex={selectedIndex} onSelect={setSelectedIndex} />

				{selectedFabric && <SingleQRCodePreview fabric={selectedFabric} />}

				<button onClick={handlePrint} disabled={!selectedFabric} className='px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50'>
					Print 30 Labels of Selected QR
				</button>
			</div>
			{/* Print Preview and Print Labels */}
			{selectedFabric ? (
				<div className='print-only-labels'>
					<LabelGrid fabric={selectedFabric} count={30} />
				</div>
			) : (
				<p className='text-center text-gray-500'>Select a fabric to see preview and print labels.</p>
			)}
		</div>
	);
};

export default QRCodeDisplay;
