import React from 'react'
import SideBar from "@/Component/SideBar/page";
import Content from "@/Component/Content/page";
import NavBar from "@/Component/NavBar/page";
import style from "@/style/aichat.module.css";

function Home() {
  return (
    <div className={style.App_container}>
      <aside className={style.sidebar}>
        <SideBar/>
      </aside>
      <nav  className={style.navbar}>
        <NavBar/>
      </nav>
      <section  className={style.main_section}>
        <Content/>
      </section>
    </div>
  )
}

export default Home