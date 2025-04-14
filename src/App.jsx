import { useState } from 'react'


function App() {
  const [formsData, setFormData] = useState({

    author: '',
    title: '',
    body: '',
    public: false

  })
  function cangeFormObject(e) {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormData((formsData) => ({
      ...formsData,
      [e.target.name]: value
    }))
  }
  console.log(formsData)









  return (
    <>
      <form>
        <div class="mb-3">
          <label className="form-label"> Autore</label>
          <input
            type="text"
            name='author'
            value={formsData.name}
            onChange={cangeFormObject} className="form-control" aria-describedby="emailHelp" />
        </div>

        <div class="mb-3">
          <label className="form-label"> Titolo</label>
          <input
            type="text"
            name='title'
            value={formsData.name}
            onChange={cangeFormObject} className="form-control" aria-describedby="emailHelp" />
        </div>

        <div class="mb-3">
          <label className="form-label"> testo del post </label>
          <input
            type="text"
            name='body'
            value={formsData.name}
            onChange={cangeFormObject} className="form-control" aria-describedby="emailHelp" />
        </div>



        <div className="mb-3 form-check">
          <input
            name='public'
            checked={formsData.avaiable}
            onChange={cangeFormObject}
            type="checkbox"
            class="form-check-input" />
          <label class="form-check-label" >publico</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>

      {formsData.author}{formsData.public}
    </>
  )
}

export default App
