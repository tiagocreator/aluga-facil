import { ChangeEvent, MouseEvent, SyntheticEvent, useEffect, useState } from 'react';

import { IconCar, IconInfoCircleFilled, IconX } from '@tabler/icons-react';
import { IconMapPinFilled } from '@tabler/icons-react';
import { IconCalendarEvent } from '@tabler/icons-react';

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

const BookCar: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);

  const [carType, setCarType] = useState<string>('');
  const [pickUp, setPickUp] = useState<string>('');
  const [dropOff, setDropOff] = useState<string>('');
  const [pickTime, setPickTime] = useState<string>('');
  const [dropTime, setDropTime] = useState<string>('');
  const [carImg, setCarImg] = useState<string>('');

  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [zipcode, setZipCode] = useState<string>('');

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

  // prevents the default action of the event, checks for empty values in specific variables,
  // displays an error message if any required field is empty, otherwise toggles the modal visibility,
  // scrolls the booking modal to the top, and hides the error message if present.
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

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [modal]);

  // confirm modal booking
  const confirmBooking = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setModal(!modal);

    const doneMsg = document.querySelector('.booking-done') as HTMLElement | null;
    if (doneMsg) {
      doneMsg.style.display = 'flex';
    }
  };

  // taking value of booking inputs
  const handleCar = (e: ChangeEvent<HTMLSelectElement>): void => {
    const value = e.target.value;
    setCarType(value);
    setCarImg(value);
  };

  const handlePick = (e: ChangeEvent<HTMLSelectElement>): void => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e: ChangeEvent<HTMLSelectElement>): void => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e: ChangeEvent<HTMLInputElement>): void => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e: ChangeEvent<HTMLInputElement>): void => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl: string;
  switch (carImg) {
    case 'Toyota Camry':
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
    case 'Volkswagen Beetle':
      imgUrl = VolkswagenBeetle;
      break;
    default:
      imgUrl = '';
  }

  // hide message
  const hideMessage = (): void => {
    const doneMsg = document.querySelector('.booking-done') as HTMLElement | null;
    if (doneMsg) {
      doneMsg.style.display = 'none';
    }
  };
  return (
    <div>
      <section id='booking-section' className='book-section'>
        {/* overlay */}
        <div onClick={openModal} className={`modal-overlay ${modal ? 'active-modal' : ''}`}></div>

        {/* booking form */}
        <div className='container'>
          <div className='book-content'>
            <div className='book-content__box'>
              <h2>Alugue seu carro</h2>

              <p className='error-message'>
                Preencha todos os campos! <IconX width={20} height={20} />
              </p>

              <p className='booking-done'>
                Quase lá! Te enviamos um link de confirmação por email.{' '}
                <IconX width={20} height={20} onClick={hideMessage} />
              </p>

              <form className='box-form'>
                <div className='box-form__car-type'>
                  <label>
                    <IconCar className='input-icon' /> &nbsp; Escolha seu modelo preferido <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option>Escolha seu carro</option>
                    <option value='Toyota Camry'>Toyota Camry</option>
                    <option value='Toyota Hilux'>Toyota Hilux</option>
                    <option value='BMW X4 M40i'>BMW X4 M40i</option>
                    <option value='BMW X5 Conversivel'>BMW X5 Conversivel</option>
                    <option value='Chevrolet Onix'>Chevrolet Onix</option>
                    <option value='Chevrolet Spin'>Chevrolet Spin</option>
                    <option value='Fiat Mobi'>Fiat Mobi</option>
                    <option value='Fiat Uno'>Fiat Uno</option>
                    <option value='Volkswagen Golf'>Volkswagen Golf</option>
                    <option value='Volkswagen Beetle'>Volkswagen Beetle</option>
                  </select>
                </div>

                <div className='box-form__car-type'>
                  <label>
                    <IconMapPinFilled className='input-icon' /> &nbsp; Local da coleta <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                    <option>Onde você vai pegar?</option>
                    <option>Maceió</option>
                    <option>Recife</option>
                    <option>Aracaju</option>
                    <option>Salvador</option>
                    <option>João Pessoa</option>
                  </select>
                </div>

                <div className='box-form__car-type'>
                  <label>
                    <IconMapPinFilled className='input-icon' /> &nbsp; Local da entrega <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                    <option>Onde vai entregar?</option>
                    <option>Maceió</option>
                    <option>Recife</option>
                    <option>Aracaju</option>
                    <option>Salvador</option>
                    <option>João Pessoa</option>
                  </select>
                </div>

                <div className='box-form__car-time'>
                  <label htmlFor='picktime'>
                    <IconCalendarEvent className='input-icon' /> &nbsp; Data de Coleta <b>*</b>
                  </label>
                  <input
                    id='picktime'
                    value={pickTime}
                    onChange={handlePickTime}
                    type='date'></input>
                </div>

                <div className='box-form__car-time'>
                  <label htmlFor='droptime'>
                    <IconCalendarEvent className='input-icon' /> &nbsp; Data de Entrega <b>*</b>
                  </label>
                  <input
                    id='droptime'
                    value={dropTime}
                    onChange={handleDropTime}
                    type='date'></input>
                </div>

                <button onClick={openModal} type='submit'>
                  Procurar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal */}
      <div className={`booking-modal ${modal ? 'active-modal' : ''}`}>
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
    </div>
  );
};

export default BookCar;
