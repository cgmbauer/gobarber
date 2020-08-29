interface IMailConfig {
  driver: 'ethereal' | 'ses';
  default: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  default: {
    from: {
      email: 'emailConfiguradoNoAWSSES@ex.com',
      name: 'Guilherme do GoBarber',
    },
  },
} as IMailConfig;
