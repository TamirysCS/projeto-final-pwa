export default class HtmlService {
  constructor(appointmentService) {
    this.appointmentService = appointmentService;
    this.bindButtonListener();
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
    /*  appointment.id = appointmentId;
    this.addToHtmlList(task); */
  }
}
