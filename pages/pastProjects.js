import styles from '../styles/Home.module.css'
import { useState } from "react";
import Project from "./project.js";


export default function pastProjects(){
  const projectList = ['connectFour', 'boardGameFinal'];
  
  
  return(
    <html>
      <div classname = {styles.container}>
        <main className={styles.main}>
          <h1 classname = {styles.title}>
            Past Projects
          </h1>
           <ul>
          {projectList.map(projectItem => (
            <Project key = {projectItem} projectName = {projectItem} description = ''/>
            // <li> {projectItem} </li>
          ))}
          </ul>
        </main>
      </div>
    </html>
  )
}