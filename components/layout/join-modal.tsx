import Modal from "@/components/shared/modal";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { LoadingDots } from "@/components/shared/icons";
import Image from "next/image";
import { signupForm } from "../../constants/info";

const SignInModal = ({
  showSignInModal,
  setShowSignInModal,
}: {
  showSignInModal: boolean;
  setShowSignInModal: Dispatch<SetStateAction<boolean>>;
}) => {
  const [signInClicked, setSignInClicked] = useState(false);

  return (
    <Modal showModal={showSignInModal} setShowModal={setShowSignInModal}>
      <div className="w-full overflow-hidden shadow-xl md:max-w-md md:rounded-2xl md:border md:border-gray-200">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center md:px-16">
          <Image
            src="/logo.svg"
            alt="Logo"
            className="h-10 w-10 rounded-full"
            width={20}
            height={20}
          />
          <h3 className="font-display text-2xl font-bold">Join the club!</h3>
          <p className="text-sm text-gray-500">
            Become a General Member of the McMaster Blockchain Club.
            <br />
            <br /> Embark on your blockchain journey.
          </p>
        </div>

        <div className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 md:px-16">
          <a href={signupForm} target="_blank" rel="noreferrer">
            <button
              disabled={signInClicked}
              className={`${
                signInClicked
                  ? "cursor-not-allowed border-gray-200 bg-gray-100"
                  : "border border-gray-200 bg-white text-black hover:bg-gray-50"
              } flex h-10 w-full items-center justify-center space-x-3 rounded-md border text-sm shadow-sm transition-all duration-75 focus:outline-none`}
            >
              {signInClicked ? (
                <LoadingDots color="#808080" />
              ) : (
                <>
                  <p>📝 Fill out the form</p>
                </>
              )}
            </button>
          </a>
        </div>
      </div>
    </Modal>
  );
};

export function useSignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const SignInModalCallback = useCallback(() => {
    return (
      <SignInModal
        showSignInModal={showSignInModal}
        setShowSignInModal={setShowSignInModal}
      />
    );
  }, [showSignInModal, setShowSignInModal]);

  return useMemo(
    () => ({ setShowSignInModal, SignInModal: SignInModalCallback }),
    [setShowSignInModal, SignInModalCallback],
  );
}
