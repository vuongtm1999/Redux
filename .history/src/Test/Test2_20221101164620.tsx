// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actionCreators } from "../state";
// import { RootState } from "../state/reducers";

// function Test2() {
//   const state = useSelector((state: RootState) => state.book)
//   const dispatch = useDispatch();

//   const { addBooks, updateBook, deleteBook, getAllBooks, getBook } =
//     bindActionCreators(actionCreators, dispatch);
//     const editHandler = async () => {
//         try {
//           // Dispatch
//           getBook("JDxbrxWqGCJ3r5xRfV1v")
//         //   const docSnap = await getBook("JDxbrxWqGCJ3r5xRfV1v");
//         //   console.log(docSnap.data());
//         } catch (err) {
//           console.log("Edit error");
//         }
//       };
//     useEffect(()=>{
//         editHandler();
//         console.log(state);
//     }, [])
//   return (
//     <div>
//       <h1>Test</h1>
//     </div>
//   );
// }

// export default Test2;
