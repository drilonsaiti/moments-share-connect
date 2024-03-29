import Button from "../../ui/Button.jsx";
import CreateBucketForm from "./CreateBucketForm.jsx";
import Modal from "../../ui/Modal.jsx";

const AddBucket = () => {
    return (
        <Modal>
            <Modal.Open opens="add-bucket">
                <Button size="medium" variation={'secondary'} style={{
                    fontSize: '2.5rem', padding: '.5rem 6.6rem', width: '70%',
                    alignSelf: 'center'
                }}> Add new bucket </Button>
            </Modal.Open>
            <Modal.Window name="add-bucket">
                <CreateBucketForm/>
            </Modal.Window>
        </Modal>
    );
};

export default AddBucket;