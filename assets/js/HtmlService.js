export default class HtmlService {
  constructor(appointmentService) {
    this.appointmentService = appointmentService;
    this.bindButtonListener();
    this.listAppointments();
  }

  bindButtonListener() {
    const form = document.querySelector("form");
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
      console.log("Button clicked!");
      const pacienteNome = document.getElementById("paciente");
      const pacienteHorario = document.getElementById("horario");
      this.addAppointment(pacienteNome.value, pacienteHorario.value);
      form.reset();
      form.paciente.focus();
    });
  }

  async addAppointment(paciente, horario) {
    const appointment = { paciente: paciente, horario: horario };
    const appointmentId = await this.appointmentService.save(appointment);
     appointment.id = appointmentId;
    this.addToHtmlList(appointment);
  }

  async listAppointments(){
    const appointments = await this.appointmentService.getAll();
    appointments.forEach(appointment => this.addToHtmlList(appointment));
  }

  async deleteAppointment(appointmentId, li){
    await this.appointmentService.delete(appointmentId);
    li.remove();
  }

  addToHtmlList(appointment){

    const ul = document.querySelector("ul");
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    
   /*  li.addEventListener('click', () => this.toggleTask(task.id, li));
    
    if(task.done) {
        li.classList.add(doneCssClass);
    } */
    
    span.textContent = appointment.paciente + ' - ' + appointment.horario;
    
    button.textContent = 'x';
    button.addEventListener('click', event => {
        event.preventDefault();
        this.deleteAppointment(appointment.id, li);
    });


    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
  }
}
