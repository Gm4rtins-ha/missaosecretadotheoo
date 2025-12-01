export interface GuestInfo {
  name: string;
  attending: boolean;
  message?: string;
}

export interface MissionDetails {
  targetName: string; // Birthday child's name
  age: number;
  date: string;
  time: string;
  location: string;
  address: string;
  hostPhone: string; // Phone number for WhatsApp notifications (format: 5511999999999)
  photoUrl?: string; // Optional photo URL
}

export enum MissionStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED'
}