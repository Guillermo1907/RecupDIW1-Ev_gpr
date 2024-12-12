// función para agregar una fila a la tabla
export function agregarFilaATabla(cuerpoTabla, email, nombre, preferencia, notificaciones) {
  // se crea una nueva fila
  const fila = document.createElement('tr');

  // se crean las celdas de la fila
  const celdaEmail = document.createElement('td');
  celdaEmail.textContent = email; // asigna el contenido del email a su celda.

  const celdaNombre = document.createElement('td');
  celdaNombre.textContent = nombre; // asigna el contenido del nombre a su celda.

  const celdaPreferencia = document.createElement('td');
  celdaPreferencia.textContent = preferencia; // asigna la preferencia a su celda.

  const celdaNotificaciones = document.createElement('td');
  celdaNotificaciones.textContent = notificaciones; // indica si las notificadciones estas activadas o no.

  // añade las celdas a la fila
  fila.appendChild(celdaEmail);
  fila.appendChild(celdaNombre);
  fila.appendChild(celdaPreferencia);
  fila.appendChild(celdaNotificaciones);

  // añade la fila al cuerpo de la tabla
  cuerpoTabla.appendChild(fila);
}
