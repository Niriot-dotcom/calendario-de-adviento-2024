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
  DEFAULT: [
    {
      SIZE: "",
      BOLD: `¡Hola!<br />Hoy es el día {UserDay}`,
      NORMAL: "",
    },
    {
      SIZE: " LARGO",
      BOLD: "",
      NORMAL: `Realiza las buenas acciones diarias durante el Adviento para ayudarme a regresar a casa con {Angelito}`,
    },
    {
      SIZE: " LARGO",
      BOLD: "",
      NORMAL: `Da click sobre la estrellita gris y comencemos esta aventura`,
    },
  ],
};

export function replaceAngelitosNames(
  dialogs: IDialog[],
  userDay: number,
  angelitoName: string,
  angelitaName: string
) {
  dialogs.forEach((dialog) => {
    dialog.BOLD = dialog.BOLD.replace(
      "{AngelitoName}",
      angelitoName === "" || angelitoName === null ? "Angelito" : angelitoName
    );
    dialog.BOLD = dialog.BOLD.replace(
      "{AngelitaName}",
      angelitaName === "" || angelitaName === null ? "Angelita" : angelitaName
    );
    dialog.BOLD = dialog.BOLD.replace("{UserDay}", userDay.toString());

    dialog.NORMAL = dialog.NORMAL.replace(
      "{AngelitoName}",
      angelitoName === "" || angelitoName === null ? "Angelito" : angelitoName
    );
    dialog.NORMAL = dialog.NORMAL.replace(
      "{AngelitaName}",
      angelitaName === "" || angelitaName === null ? "Angelita" : angelitaName
    );
    dialog.NORMAL = dialog.NORMAL.replace("{UserDay}", userDay.toString());
    return dialog;
  });
  return dialogs;
}

export function getDialogs(
  userDay: number,
  angelitoName: string,
  angelitaName: string
): IDialog[] {
  let setDialogs: IDialog[] = DIALOGS.DEFAULT;
  if (userDay === 25) {
    setDialogs = DIALOGS.LAST_DAY;
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
