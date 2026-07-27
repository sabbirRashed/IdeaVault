'use client'
import { deleteIdea } from '@/lib/action';
import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { LiaTrashAlt } from 'react-icons/lia';

const DeleteIdeaAlert = ({ idea }) => {
    const router = useRouter();

    const handleDelete = async () => {
        const { data } = await authClient.token()
        const result = await deleteIdea(idea._id, data?.token);

        if (result.deletedCount > 0) {
            toast.success('Delete an idea successfully')
            router.refresh();
        }
    }

    return (
        <div>
            <AlertDialog>
                <Button size='sm' isIconOnly className={'bg-danger/20 text-danger hover:bg-danger/30 transition-colors duration-300'}>
                    <LiaTrashAlt className='w-5 h-5 ' />
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete idea permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{idea.ideaTitle}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteIdeaAlert;