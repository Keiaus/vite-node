import './App.css'

let App = () => {

  return (
    <>
      <form action="">
        <label htmlFor="fname">First Name: </label><br />
        <input type="text" id='fname' name='fname'/><br />
        <label htmlFor="lname">Last Name: </label><br />
        <input type="text" id='lname' name='lname'/><br /><br />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
