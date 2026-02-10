import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

type DeleteConfirmProps = {
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
};

const DeleteConfirm = ({ open, onConfirm, onCancel }: DeleteConfirmProps) => {
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete this request?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>No</Button>
                <Button onClick={onConfirm} variant="contained" color="error">
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirm;
