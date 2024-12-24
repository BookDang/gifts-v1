import React from 'react'
import { IoMdClose } from 'react-icons/io'

type ModalProps = {
  children?: React.ReactNode
  isOpen: boolean
  onClose: (isClose: boolean) => void
  isAnableOutsideClick?: boolean
  title?: string
}

const Modal: React.FC<ModalProps> = (props) => {
  const [openModal, setOpenModal] = React.useState<boolean>(props.isOpen)
  const [triggerAnimation, setTriggerAnimation] = React.useState<boolean>(false)

  React.useEffect(() => {
    let clearSetTimeout: NodeJS.Timeout | undefined = undefined
    if (openModal) {
      setTriggerAnimation(true)
    } else {
      const delayTime = 400
      setTriggerAnimation(false)
      clearSetTimeout = setTimeout(() => {
        props.onClose(false)
      }, delayTime)
    }

    return () => {
      if (clearSetTimeout) {
        clearTimeout(clearSetTimeout)
      }
    }
  }, [openModal])

  const handleOutsideClick = () => {
    if (props.isAnableOutsideClick) {
      setOpenModal(false)
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50
        transition-opacity duration-300 ${
          triggerAnimation ? 'opacity-100' : 'opacity-0'
        } modal-container
      `}
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-4 rounded-sm min-w-80"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-5">
          <p className="text-lg font-medium modal-title">{props.title}</p>
          <div>
            <button
              className="text-gift_red"
              onClick={() => setOpenModal(false)}
            >
              <IoMdClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
