//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario
import styles from "./Card.module.css";

function Card({nombre, color}) {
  return (
    <div className={styles.cardContainer}>
      <h2>Hola {nombre}</h2>
      <section>
						<p>Nombre: {nombre}</p>
						<p>Color favorito: {color}</p>
					</section>
    </div>
  );
}

export default Card;
