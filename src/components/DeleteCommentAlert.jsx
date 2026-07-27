'use client'

import { deleteComment } from "@/lib/action";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LiaTrashAlt } from "react-icons/lia";


const DeleteCommentAlert = ({ comment }) => {
    const router = useRouter();

    const handleDelete = async () => {

        const result = await deleteComment(comment._id, comment.ideaId);

        if (result.deletedCount > 0) {
            toast.success('Successfully delet a comment')
            router.refresh();
        }
    }

    return (
        <div>
            <AlertDialog>
                <Button size='sm' isIconOnly className={'w-7 h-7 bg-danger/20 text-danger hover:bg-danger/30 transition-colors duration-300'}>
                    <LiaTrashAlt className='w-4 h-4 ' />
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Are you shure to delete this comment?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete and you can not get it back.
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

export default DeleteCommentAlert;