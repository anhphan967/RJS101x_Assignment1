import { STAFFS } from './staffs.jsx'
import { Card, Button } from 'react-bootstrap';
import dateFormat, { masks } from "dateformat";
import { propTypes } from 'react-bootstrap/esm/Image';
import { useState } from 'react';


// container
function App() {
  // 
  const [selectData, setSelectData] = useState(null)
  const clickselect = (data) => {
    setSelectData(data)
  }

  // setCol
  const [selectCol, setSelectCol] = useState(null)
  const setCol3 = () => {
    setSelectCol('col-3 m-2 p-2')
  }
  const setCol2 = () => {
    setSelectCol('col-5 m-2 p-2')
  }
  const setCol6 = () => {
    setSelectCol('col-2 ')
  }

  //
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <p style={{ color: 'white', backgroundColor: 'blue', padding: 20 }}>
            Ứng dụng quản lý nhân sự v1.0
          </p>

          {STAFFS.map((data) =>
            <Staff key={data.id} data={data} clickme={clickselect} selectCol={selectCol} />
          )}

          <div className="row">
            <p className='col-4 m-2 p-2"'> Bấm vào tên nhân viên để xem thông tin</p>
            <Button className='col-2 m-2 p-2' variant="outline-primary" onClick={setCol3}> Colum 3 </Button>
            <Button className='col-2 m-2 p-2' variant="outline-primary" onClick={setCol2}> Colum 2 </Button>
            <Button className='col-2 m-2 p-2' variant="outline-primary" onClick={setCol6}> Colum 6 </Button>
          </div>

          {/* re-render */}
          {selectData &&
            <Card className='col-lg-6 col-md-12 col-xs-12 m-2 p-2'>
              <h1> Họ và tên :{selectData.name} </h1>
              <p>Ngày sinh: {dateFormat(selectData.doB, "dd/mm/yyyy")}</p>
              <p>Ngày vào công ty: {dateFormat(selectData.startDate, "dd/mm/yyyy")}</p>
              <p>Phòng ban: {selectData.department.name}</p>
              <p>Số ngày nghỉ còn lại: {selectData.annualLeave}</p>
              <p>Số ngày đã làm thêm : {selectData.overTime}</p>
            </Card>
          }
        </div>
      </div>
    </div>
  );
}
// UI component
function Staff({ data, clickme, selectCol }) {

  return (
    <Card className={selectCol || 'col-lg-3 col-md-5 col-xs-12 m-2 p-2"'} onClick={() => clickme(data)}> {data.name}</Card>

  )
}
export default App;
