import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import TextPost from '../components/TextPost'
import AsidePost from '../components/AsidePost'
import { useEffect, useState } from 'react'
import { fetchDataFromAPI } from '../utils/api';

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

      <div className="hero" data-theme="dark">
        <Navbar text='Mr. Ibay' data={data}></Navbar>
        <div className='spacer'></div>
        <Intro introHeader="Jimwell Ibay" introSubHeader="An IT professional expertice in software engineering." buttonLink='/project'></Intro>
      </div>

      <div className="spacer"></div>

      <main className="container">
        <div className="grid">
          <section>
            {data.map((d) => {
              if (d.type == "post") {
                return (
                  <TextPost 
                  header={d.header} 
                  subHeader={d.subHeader} 
                  body={d.body}
                  key={d._id}
                  ></TextPost>
                )
              }
            })}
          </section>
          <aside>
          {data.map((d) => {
              if (d.type == "project") {
                return (
                  <AsidePost 
                  header={d.header} 
                  body={d.body} 
                  url={d.url} 
                  imageUrl="https://i.ibb.co/Lp9vP36/imgbin-laptop-ipad-computer-repair-technician-apple-png.png"
                  key={d._id}
                  ></AsidePost>
                )
              }
            })}
          </aside>
        </div>
      </main>

      <footer className="container">
        <small
          >Built with <a href="https://picocss.com">Pico</a> •
          <a href="https://github.com/mribay/landing-page-fullstack">Source code</a></small>
      </footer>
    </>
  )
}

export default index