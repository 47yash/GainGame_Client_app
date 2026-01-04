import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AuthModal } from "../../components/auth/AuthModal";

export const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState<"login" | "signup">("login");

  const openModal = (tab: "login" | "signup") => {
    setModalTab(tab);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container h-14 flex items-center">
          <div className="mr-auto flex items-center gap-4">
            <a href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold inline-block">GainGame</span>
            </a>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button
              className="bg-indigo-500 hover:bg-indigo-600 text-white"
              onClick={() => openModal("login")}
            >
              Login
            </Button>
            <Button
              className="bg-indigo-500 hover:bg-indigo-600 text-white"
              onClick={() => openModal("signup")}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <AuthModal
        isOpen={isModalOpen}
        onClose={closeModal}
        defaultTab={modalTab}
      />
    </>
  );
};
