import React, { useState } from 'react';
import Card from './Card';

const Cards = () => {
  let [data, setData] = useState([
    {
      name: "chinu",
      age: 22,
      sal: 2000,
    },
    {
      name: "sanjay",
      age: 32,
      sal: 6000,
    },
    {
      name: "ajay",
      age: 52,
      sal: 27000,
    },
    {
      name: "kalia",
      age: 22,
      sal: 5000,
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  function deleteHandler(index) {
    setData(prev => {
      let newData = [...prev];
      newData.splice(index, 1);
      return newData;
    });
  }

  function dataHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const age = parseInt(formData.get('age'));
    const sal = parseInt(formData.get('sal'));

    // Check if any input value is empty
    if (!name || isNaN(age) || isNaN(sal)) {
      // Handle empty input values
      setModalMessage("Age: between 18 to 100 and Salary:  between 5000 to 5000000");
      setShowModal(true);
      return;
    }

    // Validate age (must be 2 digits)
    if (age < 18 || age >= 100) {
      setModalMessage("Age must be a greator than 18 yr.");
      setShowModal(true);
      return;
    }

    // Validate salary (must be between 5000 and 50000000)
    if (sal < 5000 || sal > 50000000) {
      setModalMessage("Salary must be between 5000 and 50000000.");
      setShowModal(true);
      return;
    }

    let newData = {
      name: name,
      age: age,
      sal: sal,
    };
    setData(prev => [...prev, newData]);
    event.target.reset();
  }

  return (
    <div className='card bg-dark text-light shadow'>
      <div>
        <form onSubmit={dataHandler} className='py-2 d-flex flex-row gap-2 cursor-pointer'>
          <input type='text' className='form-control' name="name" placeholder='Enter name' />
          <input type='number' className='form-control' name='age' placeholder='Enter age' />
          <input type='number' className='form-control' name='sal' placeholder='Enter salary' />
          <button type="submit" className='btn btn-success'>Add</button>
        </form>
      </div>
      <div className='d-flex flex-column'>
        {
          data.map((datas, index) => (
            <Card deleteHandler={() => deleteHandler(index)} name={datas.name} age={datas.age} sal={datas.sal} key={index} />
          ))
        }
      </div>

      {/* Modal for validation messages */}
      {showModal && (
        <div className="modal text-black" tabIndex="-1" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header d-flex justify-center">
                <h5 className="modal-title text-black">Enter Valid Input's </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{modalMessage}</p>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cards;
