import React from 'react'
import "./CreateEditChannel.css"
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChanelData } from '../../actions/ChanelUser';

export default function CreateEditChannel({setcreateEditChannelbtn}) {
    // const currentUser = {
    // result: {
    //   email: 'Daylink@test.com',
    // },
  // };
   const currentUser = useSelector((state) => state.currentUser);
    const dispatch = useDispatch();
    const [name, setname] = useState(currentUser?.result.name)
    const [desc, setDesc] = useState(currentUser?.result.desc)

    const handleSubmit = () => {
        if (!name)
        {
            alert("Enter the Name !");    
        }
        else if (!desc)
        {
            alert("Enter the Desc !");    
        }
        else
        {
          dispatch(updateChanelData(
            currentUser?.result._id,
            {
            name: name,
            desc: desc
            }
          ));
            setcreateEditChannelbtn(false);
            setTimeout(() => {
               dispatch(login({email:currentUser?.result.email})) 
            }, 5000);

        }
    }

  return (
    <>
          <div className="container_CreateEditChanel">
              <input type="submit"
                  name='text'
                  value={'X'}
                  className='ibtn_x'
              onClick={() => setcreateEditChannelbtn(false)}/>
              <div className="container2_CreateEditChanel">
                <h1>
                {currentUser?.result.name ? <>Edit</> : <>Create </>}
                Your Chanel
                  </h1>
                  <input type="text" name="name" placeholder='Enter Your Channel Name'
                      className='ibox'
                      value={name}
                  onChange={(e) => setname(e.target.value)}/>
                  <textarea type="text" rows={15}
                      placeholder='Enter Your Channel Description'
                      className='ibox'
                      name='desc'
                      value={desc}
                    onChange={(e) => setDesc(e.target.value)}/>
                  
                  <input type="submit" value={"submit"}
                      className='ibtn'
                      onClick={handleSubmit}
                  />
              </div>
          </div>
    </>
  )
}
