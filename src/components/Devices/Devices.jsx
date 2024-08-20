import { useEffect, useState } from "react"
import axios from "axios"
import "./Devices.css"
import DeviceList from "../DeviceList/DeviceList"

const Devices = () => {
  const [devices, setDevices] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.fda.gov/device/510k.json?search=${searchTerm}
`
        )
        setDevices(response.data.results)
        console.log(response.data.results)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [searchTerm])
  return (
    <div className="content">
      <div className="devices-title">
        <input
          className="device-input"
          type="text"
          placeholder="Search for a device..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </div>
      <div className="device-list">
        {devices.map((device, index) => (
          <div key={index}>
            <h3>Generic Name: {device.openfda.device_name}</h3>
            <h2>Device Name: {device.device_name}</h2>
            <h4>Device Class: {device.openfda.device_class}</h4>
            <p>Manufacturer: {device.applicant}</p>
            <h4>
              Medical Specialty: {device.openfda.medical_specialty_description}
            </h4>
            <h4>Regulation number: {device.openfda.regulation_number}</h4>
            <p>510(k) Number: {device.k_number}</p>

            <DeviceList
              registrationNumbers={device.openfda.registration_number}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Devices
