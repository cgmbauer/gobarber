import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';

import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointmnet = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointmnet.execute({
      date: new Date(),
      provider_id: '123456789',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456789');
  });
});

describe('CreateAppointment', () => {
  it('it should not be able to create two appointments on the sime time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointmnet = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointmentDate = new Date(2020, 4, 10, 11);

    const appointment = await createAppointmnet.execute({
      date: appointmentDate,
      provider_id: '123456789',
    });

    expect(
      createAppointmnet.execute({
        date: appointmentDate,
        provider_id: '123456789',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
