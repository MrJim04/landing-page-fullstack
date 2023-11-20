import React from 'react'
import Navbar from '../../../components/Navbar'
import AsidePost from '../../../components/AsidePost'
import LinkButton from '../../../components/LinkButton'
import { useEffect, useState } from 'react'
import { fetchDataFromAPI } from '../../../utils/api';


function index() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetchDataFromAPI("website")
      if (result) {
        setData(result)
      }
    }

    fetchData()
  }, [])

  return (
    <>
        <Navbar text='Mr. Ibay' data={data}></Navbar>
        <div className="spacer"></div>
        <div className='container'>
        <div className='row'>
            {data.map((d) => {
              if (d.type == "projectBio") {
                return (
                  <div className='col-sm-6 col-md-4 col-lg-4 col-xl-4'>
                    <article>
                        <AsidePost header={d.header} body={d.body} url={d.url} imageUrl="https://i.ibb.co/Lp9vP36/imgbin-laptop-ipad-computer-repair-technician-apple-png.png" key={d._id}></AsidePost>
                    </article>
                  </div>
                )
              }
            })}
        </div>
        </div>
    </>
  )
}

export default index