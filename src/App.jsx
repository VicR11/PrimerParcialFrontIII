import { useState } from 'react'
import styles from "./App.module.css";
import { validateText } from './util/validateText';
import Card from "./Card";
import Form from "./Form";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const[formData, setFormData] = useState({
    nombre:'',
    color:'',
 })

 const [error, setError] = useState(false);
 const [showSummary, setShowSummary] = useState(false);
 const [submittedData, setSubmittedData] = useState(null);
 
 const handleChange = (event)=>{
  setFormData({
    ...formData,
    [event.target.name] : event.target.value
  })
}

const handleSubmit = (event) => {
  event.preventDefault();
  if(validateText(formData.nombre) && validateText(formData.color)){
    setError(false);
    setShowSummary(true);
    setSubmittedData(formData); 

    setFormData({   
      nombre: '',
      color: '',
    });

  }else{
    setError(true);
    setShowSummary(false)
  }
 

};




  return (
    <div className="App">
     
      <h1  className={styles.h1}>Elige un color</h1>
      <Form 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        formData={formData}
        error={error} 
      />
     
      {showSummary && submittedData && <Card nombre={submittedData.nombre} color={submittedData.color} />}
   
    </div>
    
  );
}

export default App;
