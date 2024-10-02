import Button from "./Button";

export default function Menu() {
  return (
    <menu className=" bg-[#7048e8] col-start-2 col-end-[-1] flex items-center gap-3 px-10">
      <Button>New</Button>
      <Button>Reply</Button>
      <Button>Forword</Button>
      <Button>Mark unread</Button>
      <Button trash={true}>Trash </Button>
    </menu>
  );
}
