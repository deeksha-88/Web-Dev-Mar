// Example 1 - Normal Js Varibale

// import React from "react";

// function App(){

//   let count = 0

//   function increase(){
//     count = count + 1
//     console.log(count)
//   }

// return(
//   <div>
//    <h2>Count is  {count}  </h2>
//    <button onClick={increase}>Increase</button>
//   </div>
// )

// }

// export default App


//Example 2 - useState is Hook React - Special Varibale in React Which stores updated Value and update Screen as well
// import { useState } from "react";

// function App(){

//     const [count , setCount] = useState(10)

//     function add(){
//       setCount(count + 1)
//       console.log(count)
//     }

//   return(
//     <div>
//           <h2>Like {count}  </h2>
//           <button onClick={add}>Add</button>
//     </div>
//   )
// }

// export default App



// Example 3 - Show Password / Hide
import { useState } from "react";

function App(){

const [show , setShow] = useState(false)

return(
  <div>
    <input type= { show ? "text" : "password"  }     placeholder="Enter Your Password"     />

    <button onClick={ ()=>  setShow(!show)  }>Show/Hide</button>
  </div>
)

}
export default App


//Instagram Follow Button- Write a code to create a Instagram Follow Button. When user click on Follow Button, it should change to Unfollow and when user click on Unfollow Button, it should change to Follow.