import { Input, ListBox , Select} from '@heroui/react';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchFilterBar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between  gap-2 md:gap-4 mt-15'>
            <div className='flex-1 relative'>
                <Input
                    placeholder='Search idea by category'
                    className={'w-full py-3 border border-(--color-primary)/20 focus:border-(--color-primary)/60 shadow-none focus:ring-0 text-xs md:text-base'} />
                <span className='absolute top-3.5 right-4'> <IoSearchOutline /></span>
            </div>
            <div className='grid grid-cols-12 items-center flex-1 gap-2  md:gap-4'>
                <Select
                    name="category"
                    className="w-full col-span-7 "
                    placeholder="Filtere idea by category"

                >
                    <Select.Trigger className=" rounded-2xl border border-(--color-primary)/20 shadow-none py-3 ">
                        <Select.Value className={'text-xs md:text-base'} />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                        <ListBox>
                            <ListBox.Item id="All" textValue="All">
                                All
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Tech" textValue="Tech">
                                Tech
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Health" textValue="Health">
                                Health
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="AI" textValue="AI">
                                AI
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Education" textValue="Education">
                                Education
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Agriculture" textValue="Agriculture">
                                Agriculture
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Sports" textValue="Sports">
                                Sports
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Food" textValue="Food">
                                Food
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Fransportation" textValue="Transportation">
                                Transportation
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Business" textValue="Business">
                                Business
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="Environment" textValue="Environment">
                                Environment
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>

                <Select
                    name="category"
                    className="w-full col-span-5 "
                    placeholder="Newest First"

                >
                    <Select.Trigger className=" rounded-2xl border border-(--color-primary)/20 shadow-none py-3 ">
                        <Select.Value className={'text-xs md:text-base'} />
                        <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover className={'rounded-2l'}>
                        <ListBox className=''>
                            <ListBox.Item id="new" textValue="new">
                                Newest First
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                            <ListBox.Item id="old" textValue="Old">
                                Oldest First
                                <ListBox.ItemIndicator />
                            </ListBox.Item>
                        </ListBox>
                    </Select.Popover>
                </Select>
            </div>
        </div>
    );
};

export default SearchFilterBar;