'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface FabricRow {
	Fabric: string;
	Color: string;
	'On Sale': string;
	URL: string;
}

type FabricSelectorProps = {
	fabrics: FabricRow[];
	selectedIndex: number | null;
	onSelect: (index: number) => void;
};

const FabricSelector: React.FC<FabricSelectorProps> = ({ fabrics, selectedIndex, onSelect }) => {
	const [open, setOpen] = useState(false);

	const selectedLabel = selectedIndex !== null ? `${fabrics[selectedIndex].Fabric} - ${fabrics[selectedIndex].Color}` : 'Select a fabric';

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button variant='outline' role='combobox' className='w-[300px] justify-between'>
					{selectedLabel}
					<ChevronsUpDown className='ml-2 h-4 w-4 opacity-50' />
				</Button>
			</PopoverTrigger>
			<PopoverContent className='w-[300px] p-0'>
				<Command>
					<CommandInput placeholder='Search fabric...' />
					<CommandList>
						<CommandEmpty>No fabric found.</CommandEmpty>
						<CommandGroup heading='Fabrics'>
							{fabrics.map((fabric, idx) => {
								const label = `${fabric.Fabric} - ${fabric.Color}`;
								return (
									<CommandItem
										key={idx}
										value={label}
										onSelect={() => {
											onSelect(idx);
											setOpen(false);
										}}>
										{label}
										<Check className={cn('ml-auto h-4 w-4', selectedIndex === idx ? 'opacity-100' : 'opacity-0')} />
									</CommandItem>
								);
							})}
						</CommandGroup>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
};

export default FabricSelector;
