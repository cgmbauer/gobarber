import { getRepository } from 'typeorm';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import User from '../models/Users';
import AppError from '../errors/AppError';

interface RequestDTO {
  user_id: string;
  avatarFileName: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: RequestDTO): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar.', 401);
    }

    if (user.avatar) {
      const userAvatarFIlePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFIlePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFIlePath);
      }
    }

    user.avatar = avatarFileName;

    await usersRepository.save(user);

    delete user.password;

    return user;
  }
}

export default UpdateUserAvatarService;
