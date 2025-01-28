import './App.css'
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicTable from './components/Table';
import Formatting from './components/Linechart'

function App() {

  return (
    <div className='w-100' >
    <Navbar className="bg-body-tertiary">
        <h1>Asset Dashboard</h1>
    </Navbar>


    <div className='row w-100'>

      <div className="col-md-6">

        <div className='d-flex  justify-content-center align-items-center flex-row border rounded ms-2 p-3'>

          <div className='border border-primary text-center rounded me-1'>
            <h3>31418</h3>
            <p style={{fontSize:'13px'}}>generators fuel consumption in litre</p>
          </div>
          <div className='border border-danger rounded text-center me-1'>
            <h3 className='text-danger'>43178</h3>
            <p style={{fontSize:'13px'}}>compressors energy consumption (KWH)</p>
          </div>
          <div className='text-center border border-success rounded me-1'>
            <h3 className='text-success'>84828.6</h3>
            <p style={{fontSize:'13px'}}>generator's carbon emmission (kilo gram)</p>
          </div>
          <div className='text-center border border-success rounded'>
            <h3 className='text-warning'>20289.9</h3>
            <p style={{fontSize:'13px'}}>compressor's carbon emmision (kilo gram)</p>
          </div>

    
          

        </div>

        <div className='mt-3 ps-3'>
          <h5>Total Energy Consumption (wh)</h5>
          <Formatting/>
          

          {/* <Line
  datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  }}
/> */}
        
        </div>

      </div>
      <div className="col-md-6">
        <BasicTable/>

      </div>

    </div>
      
    </div>
  )
}

export default App
