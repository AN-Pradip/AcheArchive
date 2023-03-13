'use client'

import './globals.css'
import Link from 'next/link'
import { Artifika } from 'next/font/google'

const artifika = Artifika({
  weight: ['400'],
  subsets: ['latin'],
})

function OpenModal(){
  const ModalContainer:any = document.getElementById("Modal") 
  if(ModalContainer){
    ModalContainer.showModal()
  }else{
    alert("modal error")
  }
}

function CloseModal(){
  const ModalContainer:any = document.getElementById("Modal") 
  if(ModalContainer){
    ModalContainer.close()
  }else{
    alert("modal error")
  }
}
function CheckClick(event: any){
  const ModalContainer:any = document.getElementById("Modal") 
  if (event.target === ModalContainer) {
    ModalContainer.close();
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <nav>
          <Link href="/">
            <h1 className={artifika.className}>AcheArchive</h1>
          </Link>
          <button onClick={() => OpenModal()} className="NavBar-getArchive">Your Archive</button>
        </nav>
        <dialog className='Modal-Container' id='Modal' onClick={(event) => {CheckClick(event)}}>
          <form action="">
            <h2> Your Archive </h2>
            <span className='Modal-Close' onClick={() => CloseModal()}>&times;</span>
            <label htmlFor="firstname"> Firstname :</label>
            <input type="text" id='firstname'/>
            <label htmlFor="lastname"> Lastname :</label>
            <input type="text" id='lastname'/>
            <button type='submit'> Check your archive </button>
          </form>
        </dialog>
        {children}
        <footer>
        © 2023 Pradip ANANDA, Tous droits réservés.
        </footer>
      </body>
    </html>
  )
}
