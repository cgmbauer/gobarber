import Appointments from '../infra/typeorm/entities/Appointments';
import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';
import IFindAllInMonthFromProvider from '../dtos/IFindAllInMonthFromProviderDTO';
import IFindAllInDayFromProvider from '../dtos/IFindAllInDayFromProviderDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointments>;
  findByDate(date: Date): Promise<Appointments | undefined>;
  findAllInMonthFromProvider(
    data: IFindAllInMonthFromProvider,
  ): Promise<Appointments[]>;
  findAllInDayFromProvider(
    data: IFindAllInDayFromProvider,
  ): Promise<Appointments[]>;
}
