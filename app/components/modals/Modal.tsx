import {
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

import {
  FC,
  useRef,
  useEffect,
  useCallback,
  MutableRefObject,
  PropsWithChildren,
} from "react";

interface IModalProps {
  onClose: () => void;
  showCloseButton?: boolean;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  onClose,
  showCloseButton = true,
}) => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        return onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const modal = ref.current;

    if (modal) {
      disableBodyScroll(modal, {
        reserveScrollBarGap: true,
        allowTouchMove: () => true,
      });

      window.addEventListener("keydown", handleKey);
    }
    return () => {
      clearAllBodyScrollLocks();
      window.removeEventListener("keydown", handleKey);
    };
  }, [handleKey]);

  return (
    <div className="fixed bg-black bg-opacity-40 flex items-start md:items-center inset-0 z-60 justify-center">
      <div
        className="bg-white border border-accent-2 relative max-h-full overflow-y-scroll overflow-x-hidden w-screen md:w-auto overscroll-none focus:outline-none"
        role="dialog"
        ref={ref}>
        <h1>HEllo</h1>
        {showCloseButton && (
          <button
            onClick={onClose}
            aria-label="Close panel"
            className="m-4 text-primary hover:text-primary-hover focus:outline-none absolute md:right-0 top-0"></button>
        )}
      </div>
    </div>
  );
};

export default Modal;
