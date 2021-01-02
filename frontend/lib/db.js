import Dexie from "dexie";

const DB_VERSION = 1;
const db = new Dexie("__CIVI_DB__");

db.version(DB_VERSION).stores({
  resumes: "id, resumetitle",
});

export default db;
