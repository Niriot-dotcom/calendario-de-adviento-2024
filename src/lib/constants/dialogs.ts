export interface IDialog {
  SIZE: string;
  BOLD: string;
  NORMAL: string;
}

export const DIALOGS: Record<string, IDialog[]> = {
  LAST_DAY: [
    {
      SIZE: "",
      BOLD: "Hoy es el último día del calendario",
      NORMAL: "",
    },
    {
      SIZE: " LARGO",
      BOLD: "",
      NORMAL:
        "Estamos a una buena acción de regresar a casa con {AngelitoName}, ¡hagámosla!",
    },
  ],
  COMPLETE_DAY: [
    {
      SIZE: "",
      BOLD: "¡Bien hecho!",
      NORMAL: "Regresa mañana",
    },
    {
      SIZE: "",
      BOLD: "",
      NORMAL: "No olvides completar tu buena obra",
    },
  ],
  WELCOME: [
    {
      SIZE: "",
      BOLD: `¡Hola!<br />Hoy es el día {UserDay}`,
      NORMAL: "",
    },
    {
      SIZE: " LARGO",
      BOLD: "",
      NORMAL: `Realiza las buenas acciones diarias durante el Adviento para ayudarme a regresar a casa con {AngelitoName}`,
    },
    {
      SIZE: " LARGO",
      BOLD: "",
      NORMAL: `Da click sobre la estrellita gris y comencemos esta aventura`,
    },
  ],
  DEFAULT: [
    {
      SIZE: "",
      BOLD: `¡Hola!<br />Hoy es el día {UserDay}`,
      NORMAL: "",
    },
  ],
};

function replaceEachString(
  dialog: IDialog,
  userDay: number,
  angelitoName: string,
  angelitaName: string
) {
  dialog.BOLD = dialog.BOLD.replace(
    "{AngelitoName}",
    angelitoName === "" || angelitoName === null ? "Angelito" : angelitoName
  );
  dialog.BOLD = dialog.BOLD.replace(
    "{AngelitaName}",
    angelitaName === "" || angelitaName === null ? "Angelita" : angelitaName
  );
  if (userDay <= 0) {
    userDay = 1;
  }
  dialog.BOLD = dialog.BOLD.replace("{UserDay}", userDay.toString());

  dialog.NORMAL = dialog.NORMAL.replace(
    "{AngelitoName}",
    angelitoName === "" || angelitoName === null ? "Angelito" : angelitoName
  );
  dialog.NORMAL = dialog.NORMAL.replace(
    "{AngelitaName}",
    angelitaName === "" || angelitaName === null ? "Angelita" : angelitaName
  );
  if (userDay <= 0) {
    userDay = 1;
  }
  dialog.NORMAL = dialog.NORMAL.replace("{UserDay}", userDay.toString());
  return dialog;
}
export function replaceAngelitosNames(
  dialogs: IDialog[],
  userDay: number,
  angelitoName: string,
  angelitaName: string
) {
  dialogs.forEach((dialog) => {
    dialog = replaceEachString(dialog, userDay, angelitoName, angelitaName);
    return dialog;
  });

  return dialogs;
}

export function getDialogs(
  userDay: number,
  currentDay: number,
  angelitoName: string,
  angelitaName: string
): IDialog[] {
  let setDialogs: IDialog[];
  if (userDay === 0) {
    setDialogs = DIALOGS.WELCOME;
  } else if (userDay === 25) {
    setDialogs = DIALOGS.LAST_DAY;
  } else if (userDay === currentDay) {
    setDialogs = DIALOGS.COMPLETE_DAY;
  } else {
    setDialogs = DIALOGS.DEFAULT;
  }

  return replaceAngelitosNames(setDialogs, userDay, angelitoName, angelitaName);
}

export function getCurrentDialog(
  dialogs: IDialog[],
  index: number
): [IDialog, number] {
  let nextIndex: number = (index + 1) % dialogs.length;

  return [dialogs[nextIndex], nextIndex];
}
