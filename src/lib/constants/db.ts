export const MIN_LENGTH_ANGELITOS_NAME = 3;

export const COLLECTIONS = {
  Registro: "adviento_whatsapp",
  Usuarios: "adviento_usuarios",
};

export type USER_SCHEMA = {
  username: string;
  email: string;
  angelitaName: string;
  angelitoName: string;
  lastDay: number;
};
