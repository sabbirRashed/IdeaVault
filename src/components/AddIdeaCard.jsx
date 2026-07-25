import { FieldError, Form, Input, Label, ListBox, TextField, Select, Checkbox, CheckboxGroup, TextArea, Button } from '@heroui/react';
import React from 'react';

const AddIdeaCard = () => {
    return (
        <div className="border border-(--color-primary) shadow-2xl shadow-amber-600 rounded-2xl max-w-5xl mx-auto p-10 mt-6 space-y-4">
            <Form className='space-y-4 md:space-y-6'>
                {/* tiele */}
                <TextField
                    isRequired
                    name="ideaTitle"
                    type="text"

                >
                    <Label>Title</Label>
                    <Input
                        className={"rounded-xl border border-(--color-primary)/60 shadow-none"}
                        placeholder="Idea Title" />
                    <FieldError />
                </TextField>

                {/* image url */}
                <TextField
                    isRequired
                    name="imageUrl"
                    type="url"

                >
                    <Label>Banner Image URL</Label>
                    <Input
                        className={"rounded-xl border border-(--color-primary)/60 shadow-none"}
                        placeholder="Enter your image link" />
                    <FieldError />
                </TextField>


                <div className='flex flex-col md:flex-row gap-6'>
                    {/* category */}
                    <Select
                        name="category"
                        isRequired
                        className="w-full flex-1"
                        placeholder="Select category"

                    >
                        <Label>Category</Label>
                        <Select.Trigger className=" rounded-xl border border-(--color-primary)/60 shadow-none">
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="Beach" textValue="Tech">
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
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    {/* budget */}
                    <TextField name="price" type="number" className={'flex-1'} isRequired>
                        <Label>Price (USD)</Label>
                        <Input
                            type="number"
                            placeholder="e.g.  $1299"
                            className="rounded-xl border border-(--color-primary)/60 shadow-none"
                        />
                        <FieldError />
                    </TextField>
                </div>

                {/* target audience */}
                <TextField
                    isRequired
                    name="targetAudience"
                    type="text"

                >
                    <Label>Target Audience</Label>
                    <Input
                        className={"rounded-xl border border-(--color-primary)/60 shadow-none"}
                        placeholder="Input your target audience" />
                    <FieldError />
                </TextField>

                <CheckboxGroup name="Tags">
                    <Label>Tags</Label>
                    <div className='flex items-center gap-6 md:gap-10 flex-wrap'>
                        <Checkbox value="ai">
                            <Checkbox.Content>
                                <Checkbox.Control>
                                    <Checkbox.Indicator />
                                </Checkbox.Control>
                                AI
                            </Checkbox.Content>
                        </Checkbox>
                        <Checkbox value="education">
                            <Checkbox.Content>
                                <Checkbox.Control>
                                    <Checkbox.Indicator />
                                </Checkbox.Control>
                                Education
                            </Checkbox.Content>
                        </Checkbox>
                        <Checkbox value="health">
                            <Checkbox.Content>
                                <Checkbox.Control>
                                    <Checkbox.Indicator />
                                </Checkbox.Control>
                                Health
                            </Checkbox.Content>
                        </Checkbox>
                        <Checkbox value="agriculture">
                            <Checkbox.Content>
                                <Checkbox.Control>
                                    <Checkbox.Indicator />
                                </Checkbox.Control>
                                Agriculture
                            </Checkbox.Content>
                        </Checkbox>
                    </div>
                </CheckboxGroup>


                <TextField name="shortDescription" isRequired>
                    <Label>Short Description</Label>
                    <TextArea
                        rows={1}
                        placeholder="Short description..."
                        className="rounded-xl border border-(--color-primary)/60 shadow-none py-4 mt-1"
                    />
                    <FieldError />
                </TextField>


                <TextField name="detailedDescription" isRequired>
                    <Label>Detailed Description</Label>
                    <TextArea
                        placeholder="Input detailed description..."
                        className="rounded-xl border border-(--color-primary)/60 shadow-none py-4 mt-1"
                    />
                    <FieldError />
                </TextField>

                <TextField name="problemStatement" isRequired>
                    <Label>Problem</Label>
                    <TextArea
                        rows={1}
                        placeholder="What challenge does your idea solve?"
                        className="rounded-xl border border-(--color-primary)/60 shadow-none py-4 mt-1"
                    />
                    <FieldError />
                </TextField>

                <TextField name="problemStatement" isRequired>
                    <Label>Solution</Label>
                    <TextArea
                        rows={1}
                        placeholder="How does your idea solve it?"
                        className="rounded-xl border border-(--color-primary)/60 shadow-none py-4 mt-1"
                    />
                    <FieldError />
                </TextField>

                <div className='flex justify-end items-center gap-4'>
                    <Button type='reset' variant='light' className={'border-(--color-danger) text-(--color-danger) hover:bg-(--color-danger)/20 transition-colors duration-300 px-6'}>Cancel</Button>
                    <Button type='sumbit' className={'btn-primary transition-colors duration-300  px-6'}>Add Idea</Button>

                </div>
            </Form>
        </div>
    );
};

export default AddIdeaCard;