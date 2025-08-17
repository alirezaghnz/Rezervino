import Button from "../../ui/Button";
import { Modal } from "../../ui/Modal";
import { CreateVilla } from "./CreateVilla";

export default function AddVilla() {
  return (
    <Modal>
      <Modal.Open opens="villa-form">
        <Button size="medium" variation="primary">
          اضافه کردن ویلا
        </Button>
      </Modal.Open>
      <Modal.Window name="villa-form">
        <CreateVilla />
      </Modal.Window>
    </Modal>

    //   const [isOpenModal, setIsOpenModal] = useState(false);
    //   return (
    //     <div>
    //       <Button onClick={() => setIsOpenModal((show) => !show)}>
    //         اضافه کردن ویلا
    //       </Button>
    //       {isOpenModal && (
    //         <Modal onClose={() => setIsOpenModal(false)}>
    //           <CreateVilla onCloseModal={() => setIsOpenModal(false)} />
    //         </Modal>
    //       )}
    //     </div>
  );
}
