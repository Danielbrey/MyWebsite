import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from "react";
import pastProjects from "./pastProjects";
import aboutMe from "./aboutMe.js";
import experience from "./experience.js";

export default function Home() {
  
  const [page, setPage] = useState('home');


  if(page === 'home'){
    return (
      <div className={styles.container}>

        <main className={styles.main}>
          <h4 className={styles.title}>
            Welcome to my website
          </h4>
          <input type = "button" name = "pastProjects" id = "pastProjects" value = "Past Projects" onClick = {() => setPage("pastProjects")}/>

          <input type = "button" name = "aboutMe" id = "aboutMe" value = "About Me" onClick = {() => setPage("aboutMe")}/>

          <input type = "button" name = "experience" id = "experience" value = "Experience" onClick = {() => setPage("experience")}/>
        </main>

        <footer className={styles.footer}>
         Daniel Brey
        </footer>
      </div>
    )
  } else if (page === 'pastProjects'){
    return (pastProjects())
  } else if (page === 'aboutMe'){
    return(aboutMe())
  } else if (page === 'experience'){
    return(experience())
  }
}
