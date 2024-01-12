import "./accountManagement.css";
import Header from "../Components/Common/Header";
import Calendar from "../Components/Common/Calender";
import { useEffect, useState } from "react";

const Data = [
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
  {
    dateCreated: "21-Nov-2023",
    email: "john.doe@gmail.com",
  },
];

function AccountManagement() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const [showTable , setShowTable] = useState(false);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    useEffect(()=>{

        if(screenWidth > 1000){
               setShowTable(true);
        }
        else{
        setShowTable(false);
        }

    },[screenWidth])
  

  return (
    <div className="accManaWrap">
      <Header showBtn={false} showSmBtn={false} />

      <div className="accManaContain">
        <div className="accManaHead">
          <p className="head_title">ACCOUNT MANAGEMENT</p>
          <p className="subHead">Account </p>
        </div>

        <div className="accManaShow">
          <div className="showAll">
            <p>Show</p>
            <Calendar data={"All"} width={` ${screenWidth > 550?('w-[182px] h-[40px]'):('w-[200px] h-[40px]')}`} />
          </div>

          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </div>


{
    showTable ?
    (
        <table className="accManaData">
          <thead className="tableHeading  ">
            <tr>
              <th scope="col" className="singleRow textDeco">
                Date Created
              </th>
              <th scope="col" className="singleRow2 textDeco">
                Email
              </th>
              <th scope="col" className="secondRow textDeco">
                Enable
              </th>
              <th scope="col" className="thirdRow textDeco">
                Admin
              </th>
            </tr>
          </thead>

          <tbody>
            {Data.map((data, index) => (
              <tr className="headAns" key={index}>
                <th scope="row" className="singleTh">
                  {data.dateCreated}
                </th>

                <td className="singleTh2 text-black">{data.email}</td>

                <td className="singleTh3">
                  <input type="checkbox" />
                </td>

                <td className="singleTh4">
                  <input type="checkbox" />
                </td>

                <td className="singleTh5">
                  <p>delete</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    ):(
        

<div class="relative smallWidthTable pl-5 overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-[98%] mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs textDeco ">
            <tr>
               
                <th scope="col" class="px-2  py-3 ">
                Date Created
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                Enable
                </th>
                <th scope="col" class="px-6 py-3">
                Admin
                </th>
                <th scope="col" class="px-6  ">
                
                </th>
               
            </tr>
        </thead>
        <tbody>
            {
                Data.map((data ,index)=>(
                    <tr key={index} class="textDeco2 text-black ">

                    <td className="px-3 py-4 font-medium  whitespace-nowrap ">
                       {data.dateCreated}
                    </td>

                    <td className="px-6 py-4">
                        {data.email}
                    </td>
                    <td className="px-6 py-4">
                       <input type="checkbox" className="w-[19px] ml-4 h-[19px]" />
                    </td>
                    <td className="px-6 py-4">
                        <input type="checkbox" className="w-[19px] ml-4 h-[19px]" />
                    </td>
                   
                    <td className="px-6 translate-x-[-30px] py-4 ">
                        Delete
                    </td>
                   
                </tr>
                ))
            }
         
           
        </tbody>
    </table>
</div>

    )
}


      </div>
    </div>
  );
}
export default AccountManagement;
