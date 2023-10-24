export function Table({customerList}) {

    if(customerList.length < 1) {
      return <p>No hay coincidencias</p>
    }
  
    return (
      <div className='layout-column align-items-center justify-content-start'>
        <div className='card pt-30 pb-8 mt-20'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody >
              {
                customerList.map((customer) => (
                  <tr key={customer.name}>
                    <td>{customer.name}</td>
                    <td>{customer.age}</td>
                    <td>{customer.location}</td>
                    <td>{customer.gender}</td>
                    <td>{customer.income}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }