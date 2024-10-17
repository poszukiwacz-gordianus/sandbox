import Modal from "./Modal";

export default function ModalContainer() {
  return (
    <div className="w-[700px] mx-auto my-24 flex justify-center gap-6 ">
      <Modal>
        <Modal.Open open="modal">
          <button className="border border-solid bg-[#087f5b] text-stone-100 text-xl py-2 px-6 rounded-full hover:bg-[#076d4e]">
            Open
          </button>
        </Modal.Open>
        <Modal.Window name="modal">
          <div>
            <h1>I&apos;m a modal window</h1>
            <p>Lorem ipsum lorem ipsum lorem ipsum...</p>
          </div>
        </Modal.Window>
      </Modal>
    </div>
  );
}
