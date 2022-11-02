import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

function Test2() {
  const state = useSelector<any>((state) => state.book);
  const dispatch = useDispatch();

  const { addBooks, updateBook, deleteBook, getAllBooks, getBook } =
    bindActionCreators(actionCreators, dispatch);
    const editHandler = async () => {
        try {
          //
          console.log(getBook("JDxbrxWqGCJ3r5xRfV1v"));
        //   const docSnap = await getBook("JDxbrxWqGCJ3r5xRfV1v");
        //   console.log(docSnap.data());
        } catch (err) {
          console.log("Edit error");
        }
      };
    useEffect(()=>{
        editHandler();
    }, [])
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}

export default Test2;
