"use client";

import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  title?: string;
}

const Modal = ({ title }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const trigger = useRef(null) as any;
  const modal = useRef(null) as any;

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: any) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal?.current?.contains(target) ||
        trigger?.current?.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: any) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler)!;
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div className="container mx-auto py-20">
        <button
          ref={trigger}
          onClick={() => setModalOpen(true)}
          className={`px-6 py-3 fs-normal font-medium text-white rounded-full bg-primary`}
        >
          Open Modal
        </button>
        <div
          className={`fixed top-0 left-0 d-flex h-100 min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] color-white py-12 px-8 text-center md:py-[60px] md:px-[70px]"
          >
            <h3 className="pb-2 fs-xl font-bold text-dark sm:text-2xl">
              Your Message Sent Successfully
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <p className="mb-10 fs-normal leading-relaxed text-body-color">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="d-flex flex-wrap -mx-3">
              <div className="w-1/2 px-3">
                <button
                  onClick={() => setModalOpen(false)}
                  className="d-block w-full rounded-lg border border-[#E9EDF9] p-3 text-center fs-normal fw-semi-bold text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white"
                >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button
                  className={`d-block w-full p-3 fs-normal fw-semi-bold text-center text-white transition border rounded-lg border-primary bg-primary hover:bg-opacity-90`}
                >
                  <a href={`/#`}> View Details </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
