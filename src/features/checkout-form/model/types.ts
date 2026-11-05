export type CheckoutStep = 1 | 2 | 3;

export type DeliveryType = 'delivery' | 'pickup';

export type PaymentType = 'online' | 'cash' | 'card';

export interface ContactForm {
  name: string;
  phone: string;
  email: string;
  persons: string;
}

export interface DeliveryAddressForm {
  street: string;
  house: string;
  apartment: string;
  entrance: string;
  floor: string;
  intercom: string;
  comment: string;
}

export interface DeliveryForm {
  type: DeliveryType;
  address: DeliveryAddressForm;
}

export interface PaymentForm {
  type: PaymentType;
}

export interface CheckoutFormModel {
  contact: ContactForm;
  delivery: DeliveryForm;
  payment: PaymentForm;
}
