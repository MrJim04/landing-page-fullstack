import React from 'react'
import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'
import TextPost from '@/components/TextPost'
import AsidePost from '@/components/AsidePost'
import Picture from '../assets/background.jpg'

export default function Home() {

  return (
    <>
      <div class="hero" data-theme="dark">
        <Navbar name='Mr. Ibay'></Navbar>
        <Intro introHeader="Jimwell Ibay" introSubHeader="An IT professional expertice in software engineering."></Intro>
      </div>

      <main class="container">
        <div class="grid">
          <section>
            <TextPost></TextPost>
            <TextPost></TextPost>
            <TextPost></TextPost>
            <TextPost></TextPost>
          </section>
          <aside>
            <AsidePost image={Picture}></AsidePost>
            <AsidePost image={Picture}></AsidePost>
            <AsidePost image={Picture}></AsidePost>
          </aside>
        </div>
      </main>

      <footer class="container">
        <small
          >Built with <a href="https://picocss.com">Pico</a> •
          <a href="https://github.com/mribay/landing-page-fullstack">Source code</a></small>
      </footer>

    </>
  )
}
