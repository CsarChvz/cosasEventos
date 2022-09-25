import dayjs from "dayjs";

// @TODO: Convertir a ts
export function getMonth(month = dayjs().month()) {
  // Esta función va a recibir un número de mes los cuales van del 0 al 11

  // Año actual
  const year = dayjs().year();
  // Primer dia del mes del año y mes actual con el dia 1 del mes
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  // Cuenta del mes actual con el primer dia del mes
  let currentMonthCount = 0 - firstDayOfTheMonth;
  // Array de dias del mes
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  // Se devuelve el array de dias del mes
  return daysMatrix;
}

// Nested Routes
// https://www.mattstobbs.com/power-of-nested-routes-in-remix/

// Posible problema con modal
// https://github.com/remix-run/remix/issues/2978
