import { useEffect, useState } from "react"
import axios from "axios"

const Devices = () => {
  const [devices, setDevices] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.fda.gov/device/510k.json?search=${searchTerm}`
        )
        setDevices(response.data.results)
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [searchTerm])

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a device..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>
        {devices.map((device, index) => (
          <div key={index}>
            <h3>Generic Name: {device.openfda.device_name}</h3>
            <h2>Device Name: {device.device_name}</h2>
            <p>Manufacturer: {device.applicant}</p>
            <h4>
              Medical Specialty: {device.openfda.medical_specialty_description}
            </h4>
            <p>510(k) Number: {device.k_number}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Devices
