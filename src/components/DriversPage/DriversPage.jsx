import './DriversPage.scss';

export default function DriversPage() {
  const drivers = [
    {
      id: '123456789',
      name: 'Alan',
      birthDate: 'April, 1st, 2000',
      address: 'Sumskaya Street',
      city: 'Kharkiv',
      rating: 10,
    },
  ];
  return (
    <>
      <h2 className="title">DriversPage</h2>

      <ul className="driversList">
        {drivers.map(({ id, name, birthDate }) => (
          <li key={id} className="driversList__item">
            <p className="name">{name}</p>
            <p className="dateBirth">{birthDate}</p>
            {/* <button
            className="btn
            onClick={() => onDeleteBtn(name)}
            type="button"
          >
            Delete
          </button> */}
          </li>
        ))}
      </ul>
    </>
  );
}
