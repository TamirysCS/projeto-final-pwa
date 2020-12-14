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
          { paciente: "Maria", horario: "15:00"},
          { paciente: "João", horario: "14:00"}
        ]);
      });
  
    db.open();
}

save(appointment){
    return db.appointments.put(appointment);
}




}