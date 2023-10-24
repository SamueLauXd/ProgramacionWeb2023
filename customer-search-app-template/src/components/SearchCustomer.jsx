import { useFilter } from "../hooks/useFilter"
import { Table } from "."

function SearchCustomer() {

    const {
      filter,
      handleChange,
      search
  } = useFilter()
  
    return (
      <>
        <div className='layout-row align-items-center justify-content-center mt-30'>
          <input value={search} onChange={handleChange} className='large mx-20 w-20'
            placeholder='Enter search term (Eg: Phil)' />
        </div>
        <Table customerList={filter()}/>
      </>
    )
  }
  
  export default SearchCustomer