'use client'
import { updateComment } from '@/lib/action';
import { Button, FieldError, Form, Label, Modal, Surface, TextArea, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEdit } from 'react-icons/ai';

const CommentEditModal = ({ comment, ideaId }) => {

    const router = useRouter()
    const handleEdit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        const modifiedComm = Object.fromEntries(formData.entries());
        console.log(modifiedComm);

        const result = await updateComment(modifiedComm, comment._id, ideaId);
    
        if(result.modifiedCount >0){
            router.refresh()
            toast.success('successfully update comment')
        }
    }
    return (
        <div>
            <Modal>
                <Button size='sm' isIconOnly className={'w-7 h-7 bg-(--color-secondary)/20 text-(--color-secondary) hover:bg-(--color-secondary)/30 hover:text-(--color-secondary-hover) transition-colors duration-300'}>
                    <AiOutlineEdit className='w-4 h-4' />
                </Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-2xl">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading className=' text-(--color-primary)'>Edit Comment</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <Form
                                        onSubmit={handleEdit}
                                        className='space-y-4'>
                                        <textarea
                                            name='comment'
                                            cols={1}
                                            rows={4}
                                            defaultValue={comment.comment}
                                            className={'shadow-none w-full py-2 px-4 bg-(--color-secondary)/10 border rounded-xl focus:outline-(--color-primary)/80'} />

                                        <Modal.Footer className='flex justify-end items-center gap-4 scicky'>
                                            <Button
                                                slot="close"
                                                type='reset'
                                                variant='light'
                                                className={'border-(--color-danger) text-(--color-danger) hover:bg-danger/20 transition-colors duration-300 px-6'}>
                                                Cancel
                                            </Button>

                                            <Button
                                                slot="close"
                                                type='submit'
                                                className={'btn-primary transition-colors duration-300  px-6'}>
                                                Update
                                            </Button>

                                        </Modal.Footer>
                                    </Form>
                                </Surface>
                            </Modal.Body>

                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default CommentEditModal;