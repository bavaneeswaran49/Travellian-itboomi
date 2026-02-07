import React, { useEffect, useState } from 'react'
import '../Style/Navbar.css'
import navlogo from '../assets/Logo.png'
import menu from '../assets/menu.png'

export default function Navbar() {

  const [isBlack, setIsBlack] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsBlack(true)
      } else {
        setIsBlack(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isBlack ? 'navbar-black' : ''}`}>
      <div className="container">

        <div className="col-lg-5 col-md-3">
          <img src={navlogo} className="navLogo" alt="logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarOffcanvas"
          aria-controls="navbarOffcanvas"
        >
          <img src={menu} alt="menu" />
        </button>

        <div className="offcanvas offcanvas-end" id="navbarOffcanvas" tabIndex="-1">
          <div className="offcanvas-body">

            <button
              type="button"
              className="btn-close d-lg-none"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>

            <ul className="navbar-nav me-auto mb-lg-0">
              <li className="nav-item"><a className="nav-link active" href="#hero"><p>Home</p></a></li>
              <li className="nav-item"><a className="nav-link" href="#explore"><p>Explore</p></a></li>
              <li className="nav-item"><a className="nav-link" href="#travel"><p>Travel</p></a></li>
              <li className="nav-item"><a className="nav-link" href="#blog"><p>Blog</p></a></li>
              <li className="nav-item"><a className="nav-link" href="#trip"><p>Pricing</p></a></li>
            </ul>

            <ul className="navbar-nav signin-login">
              <li className="nav-itemm"><p className="login">Login</p></li>
              <li className="nav-itemm"><p className="signin">Sign up</p></li>
            </ul>

          </div>
        </div>

      </div>
    </nav>
  )
}


// import React, { useEffect, useState } from 'react'
// import '../Style/Navbar.css'
// import navlogo from '../assets/Logo.png'
// import menu from '../assets/menu.png'

// export default function Navbar() {
//   const [isBlack, setIsBlack] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsBlack(true)
//       } else {
//         setIsBlack(false)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <nav className={`navbar navbar-expand-lg fixed-top ${isBlack ? 'navbar-black' : ''}`}>
//       <div className="container">

//         {/* LOGO */}
//         <a className="navbar-brand" href="#">
//           <img src={navlogo} className="navLogo" alt="logo" />
//         </a>

//         {/* TOGGLER */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="offcanvas"
//           data-bs-target="#navbarOffcanvas"
//           aria-controls="navbarOffcanvas"
//         >
//           <img src={menu} alt="menu" />
//         </button>

//         {/* OFFCANVAS MENU */}
//         <div
//           className="offcanvas offcanvas-end"
//           id="navbarOffcanvas"
//           tabIndex="-1"
//         >
//           <div className="offcanvas-body">

//             <button
//               type="button"
//               className="btn-close d-lg-none"
//               data-bs-dismiss="offcanvas"
//               aria-label="Close"
//             ></button>

//             <ul className="navbar-nav me-auto mb-lg-0">
//               <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">Explore</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">Travel</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
//               <li className="nav-item"><a className="nav-link" href="#">Pricing</a></li>
//             </ul>

//             <ul className="navbar-nav signin-login">
//               <li className="nav-itemm"><p className="login">Login</p></li>
//               <li className="nav-itemm"><p className="signin">Sign up</p></li>
//             </ul>

//           </div>
//         </div>

//       </div>
//     </nav>
//   )
// }
