import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import SelectItem from './selecitem';

interface Item {
  label: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
}

interface SelectDemoProps {
  items: Item[];
  onValueChange: (value: string) => void;
}


const SelectDemo: React.FC<SelectDemoProps> = ({ items, onValueChange }) => (
  <Select.Root onValueChange={onValueChange}>
    <Select.Trigger
      className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-[#343434] text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
      aria-label="Food"
    >
      <Select.Value placeholder="Select a Gender" />
      <Select.Icon className="text-violet11">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-[#343434] rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
        <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-[#343434] text-violet11 cursor-default">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-[5px]">
          {items.map((item) => (
            <React.Fragment key={item.label}>
              <Select.Group>
                <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11 w-64">
                  {item.label}
                </Select.Label>
                {item.options.map((option) => (
                  <SelectItem key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select.Group>
              <Select.Separator className="h-[1px] bg-violet6 m-[5px]" />
            </React.Fragment>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
);

export default SelectDemo;
