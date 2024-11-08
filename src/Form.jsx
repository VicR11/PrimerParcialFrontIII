// FormComponent.jsx
import styles from "./Form.css?inline";
import React from 'react';


function Form({ handleSubmit, handleChange, error, formData  }) {
  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input 
          type="text" 
          name="nombre" 
          value={formData.nombre} 
          placeholder="Ingresa tu nombre" 
          onChange={handleChange} 
        />
        <input 
          type="text" 
          name="color" 
          value={formData.color}
          placeholder="Ingresa tu color favorito" 
          onChange={handleChange} 
        />
        <button className={styles.submitButton} type="submit">
          Enviar
        </button>
      </div>
      {error && (
        <p className={styles.errorMessage}>
          Por favor chequea que la información sea correcta
        </p>
      )}
    </form>
  );
}

export default Form;
