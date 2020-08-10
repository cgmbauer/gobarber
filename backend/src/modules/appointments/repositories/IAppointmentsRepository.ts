import Appointments from '../infra/typeorm/entities/Appointments';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointments>;
  findByDate(date: Date): Promise<Appointments | undefined>;
}
