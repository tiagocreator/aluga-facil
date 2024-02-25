import React, { ChangeEvent, MouseEvent, SyntheticEvent, useState } from 'react';

import { IconInfoCircleFilled, IconX } from '@tabler/icons-react';
import { IconMapPinFilled } from '@tabler/icons-react';

import ToyotaCamry from '../images/cars/toyota-camry-hybrid.png';
import ToyotaHilux from '../images/cars/toyota-hilux.png';
import BmwX4 from '../images/cars/bmw-x4.png';
import BmwX5 from '../images/cars/bmw-x5.png';
import ChevroletOnix from '../images/cars/chevrolet-onix.png';
import ChevroletSpin from '../images/cars/chevrolet-spin.png';
import FiatMobi from '../images/cars/fiat-mobi.png';
import FiatUno from '../images/cars/fiat-uno.png';
import VolkswagenGolf from '../images/cars/volkswagen-golf.png';
import VolkswagenBeetle from '../images/cars/volkswagen-new-beetle.png';

interface BookCarProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  carType: string;
  pickUp: string;
  dropOff: string;
  pickTime: string;
  dropTime: string;
  carImg: string;
}

const BookCarModal: React.FC<BookCarProps> = ({
  modal,
  setModal,
  carType,
  pickUp,
  dropOff,
  pickTime,
  dropTime,
  carImg,
}) => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zipcode, setZipCode] = useState<string>('');

  // based on value name show car img
  let imgUrl: string;
  switch (carImg) {
    case 'Toyota Camry Hybrid':
      imgUrl = ToyotaCamry;
      break;
    case 'Toyota Hilux':
      imgUrl = ToyotaHilux;
      break;
    case 'BMW X4 M40i':
      imgUrl = BmwX4;
      break;
    case 'BMW X5 Conversivel':
      imgUrl = BmwX5;
      break;
    case 'Chevrolet Onix':
      imgUrl = ChevroletOnix;
      break;
    case 'Chevrolet Spin':
      imgUrl = ChevroletSpin;
      break;
    case 'Fiat Mobi':
      imgUrl = FiatMobi;
      break;
    case 'Fiat Uno':
      imgUrl = FiatUno;
      break;
    case 'Volkswagen Golf':
      imgUrl = VolkswagenGolf;
      break;
    case 'Volkswagen New Beetle':
      imgUrl = VolkswagenBeetle;
      break;
    default:
      imgUrl = '';
  }

  const handleName = (e: ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleLastName = (e: ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
  };

  const handlePhone = (e: ChangeEvent<HTMLInputElement>): void => {
    setPhone(e.target.value);
  };

  const handleAge = (e: ChangeEvent<HTMLInputElement>): void => {
    setAge(e.target.value);
  };

  const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleAddress = (e: ChangeEvent<HTMLInputElement>): void => {
    setAddress(e.target.value);
  };

  const handleCity = (e: ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };

  const handleZip = (e: ChangeEvent<HTMLInputElement>): void => {
    setZipCode(e.target.value);
  };

  // confirm modal booking
  const confirmBooking = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setModal(!modal);

    const doneMsg = document.querySelector('.booking-done') as HTMLElement | null;
    if (doneMsg) {
      doneMsg.style.display = 'flex';
    }
  };

  const openModal = (e: SyntheticEvent): void => {
    e.preventDefault();

    const errorMsg = document.querySelector('.error-message') as HTMLElement | null;

    if (!pickUp || !dropOff || !pickTime || !dropTime || !carType) {
      if (errorMsg) {
        errorMsg.style.display = 'flex';
      }
    } else {
      setModal(!modal);

      const modalDiv = document.querySelector('.booking-modal') as HTMLElement | null;
      if (modalDiv) {
        modalDiv.scroll(0, 0);
      }

      if (errorMsg) {
        errorMsg.style.display = 'none';
      }
    }
  };

  return (
    <div className={'booking-modal active-modal'}>
      {/* title */}
      <div className='booking-modal__title'>
        <h2>Completar Reserva</h2>
        <IconX onClick={openModal} />
      </div>
      {/* message */}
      <div className='booking-modal__message'>
        <h4>
          <IconInfoCircleFilled /> Após completar sua reserva, você irá receber:
        </h4>
        <p>
          Um voucher para concorrer a vale presentes e cashback de até 15% do valor total do
          aluguel.
        </p>
      </div>
      {/* car info */}
      <div className='booking-modal__car-info'>
        <div className='dates-div'>
          <div className='booking-modal__car-info__dates'>
            <h5>Local e Data</h5>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Data da Reserva & Hora</h6>
                <p>
                  {pickTime} / <input type='time' className='input-time'></input>
                </p>
              </div>
            </span>
          </div>

          <div className='booking-modal__car-info__dates'>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Data da Entrega & Hora</h6>
                <p>
                  {dropTime} / <input type='time' className='input-time'></input>
                </p>
              </div>
            </span>
          </div>

          <div className='booking-modal__car-info__dates'>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Local de Coleta</h6>
                <p>{pickUp}</p>
              </div>
            </span>
          </div>

          <div className='booking-modal__car-info__dates'>
            <span>
              <IconMapPinFilled />
              <div>
                <h6>Local de Entrega</h6>
                <p>{dropOff}</p>
              </div>
            </span>
          </div>
        </div>
        <div className='booking-modal__car-info__model'>
          <h5>
            <span>Carro -</span> {carType}
          </h5>
          {imgUrl && <img src={imgUrl} alt='car_img' />}
        </div>
      </div>
      {/* personal info */}
      <div className='booking-modal__person-info'>
        <h4>Personal Information</h4>
        <form className='info-form'>
          <div className='info-form__2col'>
            <span>
              <label>
                Nome <b>*</b>
              </label>
              <input
                value={name}
                onChange={handleName}
                type='text'
                placeholder='Seu primeiro nome'></input>
              <p className='error-modal'>Campo obrigatório.</p>
            </span>

            <span>
              <label>
                Sobrenome <b>*</b>
              </label>
              <input
                value={lastName}
                onChange={handleLastName}
                type='text'
                placeholder='Seu sobrenome'></input>
              <p className='error-modal '>Campo obrigatório.</p>
            </span>

            <span>
              <label>
                Celular <b>*</b>
              </label>
              <input
                value={phone}
                onChange={handlePhone}
                type='tel'
                placeholder='Enter your phone number'></input>
              <p className='error-modal'>Campo obrigatório.</p>
            </span>

            <span>
              <label>
                Idade <b>*</b>
              </label>
              <input
                value={age}
                onChange={handleAge}
                type='number'
                placeholder='18'
                min='18'
                max='100'></input>
              <p className='error-modal'>Campo obrigatório.</p>
            </span>
          </div>

          <div className='info-form__1col'>
            <span>
              <label>
                Email <b>*</b>
              </label>
              <input
                value={email}
                onChange={handleEmail}
                type='email'
                placeholder='Seu endereço de email'></input>
              <p className='error-modal'>Campo obrigatório.</p>
            </span>

            <span>
              <label>
                Endereço <b>*</b>
              </label>
              <input
                value={address}
                onChange={handleAddress}
                type='text'
                placeholder='Rua exemplo número 123'></input>
              <p className='error-modal'>Campo obrigatório.</p>
            </span>
          </div>

          <div className='info-form__2col'>
            <span>
              <label>
                Cidade <b>*</b>
              </label>
              <input value={city} onChange={handleCity} type='text' placeholder='Cidade'></input>
              <p className='error-modal'>Campo obrigatório.</p>
            </span>

            <span>
              <label>
                CEP <b>*</b>
              </label>
              <input
                value={zipcode}
                onChange={handleZip}
                type='text'
                placeholder='00000-000'></input>
              <p className='error-modal'>Campo obrigatório.</p>
            </span>
          </div>

          <span className='info-form__checkbox'>
            <input type='checkbox'></input>
            <p>Me envie promoções e novidades por email</p>
          </span>

          <div className='reserve-button'>
            <button onClick={confirmBooking}>Reserve Agora</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookCarModal;
