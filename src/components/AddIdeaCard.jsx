"use client"
import { postIdea } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import { FieldError, Form, Input, Label, ListBox, TextField, Select, Checkbox, CheckboxGroup, TextArea, Button } from '@heroui/react';
import { col } from 'framer-motion/client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddIdeaCard = () => {

    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const newIdeaData = Object.fromEntries(formData.entries());

        const { ideaTitle, category, imageURL, estimatedBudget, targetAudience
            , problemStatement, proposedSolution, shortDescription, detailedDescription

        } = newIdeaData

        const result = await postIdea({
            creatorId: user?.id,
            creatorName: user?.name,
            creatorImage: user?.image,
            ideaTitle,
            category,
            imageURL,
            estimatedBudget,
            targetAudience,
            problemStatement,
            proposedSolution,
            shortDescription,
            detailedDescription
        })
        if(result.acknowledged){
            toast.success('Successfully added a new post');
            form.reset()
        }else{
            toast.error('Something went wrong')
        }

    }


    return (
        <div className="border border-(--color-primary) shadow-2xl shadow-amber-600/50 rounded-2xl max-w-5xl mx-auto p-10 mt-6 space-y-4">
            <h3 className='text-xl md:text-2xl font-medium font-sora text-center'>Add New Idea</h3>
            <Form
                onSubmit={handleSubmit}
                className='space-y-4 md:space-y-6'>
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
                    name="imageURL"
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
                    <TextField name="estimatedBudget" type="number" className={'flex-1'} isRequired>
                        <Label>Budget (USD)</Label>
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

                <TextField name="proposedSolution" isRequired>
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