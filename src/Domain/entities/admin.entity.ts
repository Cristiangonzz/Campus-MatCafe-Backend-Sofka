import { IAdmin, ICourse, IRoute } from '../interface';
import { NotificationEntity } from './notification.entity';

export class AdminEntity implements IAdmin {
  course?: string[];
  route?: string[];
  notifications?: NotificationEntity[];
  email: string;
  firebaseId?: string;
  name: string;
  photoUrl?: string;
  rol: boolean;
  id?: string;

  constructor(
    name: string,
    email: string,
    rol: boolean,
    firebaseId?: string,
    photoUrl?: string,
  ) {
    this.name = name;
    this.email = email;
    this.firebaseId = firebaseId;
    this.photoUrl = photoUrl;
    this.rol = rol;
  }
}
