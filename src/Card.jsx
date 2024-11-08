//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({nombre, color}) {
  return (
    <div>
      <h2>Hola {nombre}</h2>
      <section>
						<p>Nombre: {nombre}</p>
						<p>Color favorito: {color}</p>
					</section>
    </div>
  );
}

export default Card;
