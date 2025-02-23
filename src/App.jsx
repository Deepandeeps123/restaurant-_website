import Home from "./Component/Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from "./Component/Nav"
import About from "./Component/About"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer"
import Menu from "./Component/Menu"



let App=()=>{
  return(
    <div>

      <BrowserRouter>
         <Nav/>

         <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/menu" element={<Menu/>}></Route>
         </Routes>
         <Footer/>
         </BrowserRouter>

    </div>
  )
}



export default App




































































// // import Card from "./Component/Card"

// import Condition from "./Component/Condition"
// import List from "./Component/List"
// import Event from "./Component/Event"




// // let App=()=>{
// //   let a =10
// //   let b=20
// //   return(
// //     <div>
// //       <h1>This is App Componenets</h1>
// //       <h1>a+b={a+b}</h1>
// //       <Card products={'Mobile'} price={20000}/>
// //       <Card products={'Laptop'} price={80000}/>
// //       <Card products={'Tab'} price={10000}/>
// //       <Card products={'Watch' } price={2000}/>
// //     </div>
// //   )
// // }

// // export default App





// // import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <List/>
//       <Condition/>
//       <Event />
      
//     </div>
//   )
// }

// export default App
