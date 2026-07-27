"use client"
import { updateIdea } from '@/lib/action';
import { Button, FieldError, Form, Input, Label, ListBox, Modal, TextArea, TextField, Select, Surface } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEdit } from 'react-icons/ai';

const EditIdeaModal = ({ idea }) => {
    const router = useRouter();

    const {
        _id,
        ideaTitle,
        shortDescription,
        detailedDescription,
        category,
        imageURL,
        estimatedBudget,
        targetAudience,
        problemStatement,
        proposedSolution,
    } = idea;

    const handleEdit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const modifiedIdeaData = Object.fromEntries(formData.entries());

        const result = await updateIdea(_id, modifiedIdeaData);
        
        if(result.modifiedCount >0){
            router.refresh()
            toast.success('Update idea successfully')
        }else{
            toast.error('Something went wrong!')
        }
    }


    return (
        <div>


            <Modal>
                <Button size='sm' isIconOnly className={'bg-(--color-secondary)/20 text-(--color-secondary) hover:bg-(--color-secondary)/30 hover:text-(--color-secondary-hover) transition-colors duration-300'}>
                    <AiOutlineEdit className='w-5 h-5' />
                </Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-2xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading className='text-center text-(--color-primary)'>Edit Your Idea</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <Form
                                        onSubmit={handleEdit}
                                        className='space-y-4 md:space-y-6'>
                                        {/* tiele */}
                                        <TextField
                                            isRequired
                                            name="ideaTitle"
                                            type="text"
                                            defaultValue={ideaTitle}

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
                                            defaultValue={imageURL}

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
                                                defaultValue={category}

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
                                            <TextField
                                                name="estimatedBudget"
                                                type="number"
                                                className={'flex-1'}
                                                isRequired
                                                defaultValue={estimatedBudget}>
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
                                            defaultValue={targetAudience}

                                        >
                                            <Label>Target Audience</Label>
                                            <Input
                                                className={"rounded-xl border border-(--color-primary)/60 shadow-none"}
                                                placeholder="Input your target audience" />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="shortDescription"
                                            isRequired
                                            defaultValue={shortDescription}>
                                            <Label>Short Description</Label>
                                            <TextArea
                                                rows={1}
                                                placeholder="Short description..."
                                                className="rounded-xl border border-(--color-primary)/60 shadow-none py-4 mt-1"
                                            />
                                            <FieldError />
                                        </TextField>


                                        <TextField
                                            name="detailedDescription"
                                            isRequired
                                            defaultValue={detailedDescription}>
                                            <Label>Detailed Description</Label>
                                            <TextArea
                                                placeholder="Input detailed description..."
                                                className="rounded-xl border border-(--color-primary)/60 shadow-none py-4 mt-1"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="problemStatement"
                                            isRequired
                                            defaultValue={problemStatement}>
                                            <Label>Problem</Label>
                                            <TextArea
                                                rows={1}
                                                placeholder="What challenge does your idea solve?"
                                                className="rounded-xl border border-(--color-primary)/60 shadow-none py-4 mt-1"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <TextField
                                            name="proposedSolution"
                                            isRequired
                                            defaultValue={proposedSolution}>
                                            <Label>Solution</Label>
                                            <TextArea
                                                rows={1}
                                                placeholder="How does your idea solve it?"
                                                className="rounded-xl border border-(--color-primary)/60 shadow-none py-4 mt-1"
                                            />
                                            <FieldError />
                                        </TextField>

                                        <Modal.Footer className='flex justify-end items-center gap-4 scicky'>
                                            <Button slot="close" type='reset' variant='light' className={'border-(--color-danger) text-(--color-danger) hover:bg-(--color-danger)/20 transition-colors duration-300 px-6'}>Cancel</Button>
                                            <Button slot="close" type='sumbit' className={'btn-primary transition-colors duration-300  px-6'}>Update Idea</Button>

                                        </Modal.Footer>
                                    </Form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div >
    );
};

export default EditIdeaModal;