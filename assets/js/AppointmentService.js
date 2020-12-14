import Dexie from 'https://cdn.jsdelivr.net/npm/dexie@3.0.3/dist/dexie.mjs'

let db;

export default class AppointmentService {

constructor(){
    this.initializeDB();
}

initializeDB(){
    db = new Dexie("appointmentDB");

    db.version(1).stores({
      appointments: "++id",
    });

    db.on("populate", async () => {
        await db.appointments.bulkPut([
          { paciente: "Maria", horario: new Date(Date.now()).toString()},
          { paciente: "João", horario: new Date(Date.now()).toString()}
        ]);
      });
  
    db.open();
}




}