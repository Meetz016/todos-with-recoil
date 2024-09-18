import { RecoilRoot, useRecoilState, useSetRecoilState } from "recoil"
import { desAtom, titleAtom, todosAtom } from "./store/atoms/todos"
import { useEffect } from "react"


function App() {
  return (
    <div>
      <RecoilRoot>
      <InputTodos></InputTodos>
        </RecoilRoot>
    </div>
  )
}

function InputTodos(){

  const [title,setTitle]=useRecoilState(titleAtom)
  const [des,setDes]=useRecoilState(desAtom)
  const [todo,setTodo]=useRecoilState(todosAtom)

  function handleSubmit(){
    if(title && des){
      console.log(title)
      console.log(des)
      setTodo((todo)=>[...todo,{title,des}])
      setTitle("")
      setDes("")
    }
  }

  useEffect(()=>{
    console.log(todo)
  },[todo])

  return <div>
    <input type="text" placeholder="Enter Todo Title:" onChange={(e)=>setTitle(e.target.value)}></input>
    <br/>
    <br/>
    <input type="text" placeholder="Enter Todo Description:" onChange={(e) =>setDes(e.target.value)}></input>
    <br/>
    <br/>
    <button onClick={handleSubmit}>Submit Todo</button>
  </div>
}

export default App
