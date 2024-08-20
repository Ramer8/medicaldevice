import { useEffect, useState } from "react"
import "./DeviceList.css"

const DeviceList = ({ registrationNumbers }) => {
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    setCurrentPage(1)
  }, [registrationNumbers])

  const elementsPerPage = 5

  const indexOfLastElement = currentPage * elementsPerPage
  const indexOfFirstElement = indexOfLastElement - elementsPerPage

  const currentElements = registrationNumbers.slice(
    indexOfFirstElement,
    indexOfLastElement
  )

  const totalPages = Math.ceil(registrationNumbers.length / elementsPerPage)

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div>
      <p>Registration numbers: {registrationNumbers.length}</p>

      <div className="deviceList-content">
        {currentElements.map((element, index) => (
          <div key={index}>{"Id device: " + element}</div>
        ))}
      </div>

      <div className="pagination">
        {currentPage != 1 && (
          <button onClick={() => setCurrentPage(1)}>&lt;&lt;</button>
        )}

        <button onClick={prevPage} disabled={currentPage === 1}>
          &lt;
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default DeviceList
