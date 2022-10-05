import './IonicCalendar.css';
import { chevronBackOutline, chevronForwardOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import { useEffect, useState } from 'react';
import controller from './controller/controller';

const IonicCalendar = () => {
  const [firstRow, setFirstRow] = useState(['', '', '', '', '', '', '']);
  const [secondRow, setSecondRow] = useState(['', '', '', '', '', '', '']);
  const [thirdRow, setThirdRow] = useState(['', '', '', '', '', '', '']);
  const [fourthRow, setFourthRow] = useState(['', '', '', '', '', '', '']);
  const [fifthRow, setFifthRow] = useState(['', '', '', '', '', '', '']);
  const [sixthRow, setSixthRow] = useState(['', '', '', '', '', '', '']);
  const [monthName, setMonthName] = useState('');

  const getMonthName = () => {
    const currentMonthIndex = new Date().getMonth();

    switch (currentMonthIndex) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
      default:
        return '';
    }
  };

  useEffect(() => {
    setMonthName(getMonthName());
    console.log(monthName);
  }, [monthName, setMonthName, getMonthName]);

  useEffect(() => {
    const params = {
      firstRow,
      setFirstRow,
      secondRow,
      setSecondRow,
      thirdRow,
      setThirdRow,
      fourthRow,
      setFourthRow,
      fifthRow,
      setFifthRow,
      sixthRow,
      setSixthRow,
    };
    controller.getCalendarDays(params);

    console.log(firstRow);
    console.log(secondRow);
    console.log(thirdRow);
    console.log(fourthRow);
    console.log(fifthRow);
    console.log(sixthRow);
  }, [
    firstRow,
    setFirstRow,
    secondRow,
    setSecondRow,
    thirdRow,
    setThirdRow,
    fourthRow,
    setFourthRow,
    fifthRow,
    setFifthRow,
    sixthRow,
    setSixthRow,
  ]);

  return (
    <section className="ionic-calendar-container">
      <div className="header">
        <button className="button button-arrow">
          <IonIcon icon={chevronBackOutline} />
        </button>

        <button className="button button-month">{monthName}</button>
        <button className="button button-year">2022</button>

        <button className="button button-arrow">
          <IonIcon icon={chevronForwardOutline} />
        </button>
      </div>

      <div className="body">
        <div className="weekdays">
          <div className="weekday">Su</div>
          <div className="weekday">Mo</div>
          <div className="weekday">Tu</div>
          <div className="weekday">We</div>
          <div className="weekday">Th</div>
          <div className="weekday">Fr</div>
          <div className="weekday">Sa</div>
        </div>

        <div className="calendar-grid">
          <div className="row">
            <div className="day">
              <button className="button button-day">{firstRow[0]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{firstRow[1]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{firstRow[2]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{firstRow[3]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{firstRow[4]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{firstRow[5]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{firstRow[6]}</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">{secondRow[0]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{secondRow[1]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{secondRow[2]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{secondRow[3]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{secondRow[4]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{secondRow[5]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{secondRow[6]}</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">{thirdRow[0]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{thirdRow[1]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{thirdRow[2]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{thirdRow[3]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{thirdRow[4]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{thirdRow[5]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{thirdRow[6]}</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">{fourthRow[0]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fourthRow[1]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fourthRow[2]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fourthRow[3]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fourthRow[4]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fourthRow[5]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fourthRow[6]}</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">{fifthRow[0]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fifthRow[1]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fifthRow[2]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fifthRow[3]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fifthRow[4]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fifthRow[5]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{fifthRow[6]}</button>
            </div>
          </div>

          <div className="row">
            <div className="day">
              <button className="button button-day">{sixthRow[0]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{sixthRow[1]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{sixthRow[2]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{sixthRow[3]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{sixthRow[4]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{sixthRow[5]}</button>
            </div>
            <div className="day">
              <button className="button button-day">{sixthRow[6]}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IonicCalendar;
