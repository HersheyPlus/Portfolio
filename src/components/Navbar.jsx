import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showMenuBar, setShowMenuBar] = useState(false)

  return (
    <div className='section' id ='navbar'>
      <h1>Navbar</h1>
    </div>
  )
}

export default Navbar