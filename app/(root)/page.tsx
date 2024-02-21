"use client";
import { Modal } from "@/components/ui/modal";

export default function SetupPage() {
  return (
    <div className="p-4">
      <Modal
        isOpen
        title="Modal title"
        description="Modal description"
        onClose={() => {}}
      >
        Children
      </Modal>
    </div>
  );
}
