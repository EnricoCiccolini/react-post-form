import axios from 'axios'
import { useState } from 'react'


function App() {

  const [advisegood, setAdviseGood] = useState(false)
  const [advisebad, setAdvisebad] = useState(false)

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




  const SendForm = (e) => {
    setAdviseGood(false)
    setAdvisebad(false)
    e.preventDefault()


    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/postsss", formsData)
      .then(respose => {
        console.log(respose.data)
        setAdviseGood(true)

      })
      .catch(err => {
        console.error(err),
          setAdvisebad(true)

      })

  }







  return (
    <>

      <div className='container m-4'>
        <form onSubmit={SendForm}>
          <div className="mb-3">
            <label className="form-label"> Autore</label>
            <input
              type="text"
              name='author'
              value={formsData.name}
              onChange={cangeFormObject} className="form-control" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
            <label className="form-label"> Titolo</label>
            <input
              type="text"
              name='title'
              value={formsData.name}
              onChange={cangeFormObject} className="form-control" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3">
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
              className="form-check-input" />
            <label className="form-check-label" >pubblico</label>
          </div>
          <button type="submit" className="btn btn-primary mb-5">Submit</button>
        </form>

        {advisegood && <div className="alert alert-success" role="alert">
          caricato con successo
        </div>}
        {advisebad && <div className="alert alert-danger" role="alert">
          errore nell caricamento del post
        </div>}
      </div>
    </>
  )
}

export default App
