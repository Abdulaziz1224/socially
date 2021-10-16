import React from 'react'
import { useState, useContext } from 'react'
import { ModulContext } from '../Modul'
import Topic from "../../Topic/Topic"


function Modul1() {

    const [topics, setTopics] = useState([])

    const {modul, setModul} = useContext(ModulContext)

    return (
        <div className="modul1"  style={{display:modul==1?"block":"none"}}>
            <Topic
              number="01"
              topic="Video kursga kirish"
              theme={[
                {
                  lock:false,
                  themeNumber: "1.1",
                  label:"00 SMM design kursiga kirish"
                },
                {
                  lock:true,
                  themeNumber: "1.2",
                  label:"01 Kurs haqida ma’lumot"
                }
              ]}
            />
            <Topic
              number="02"
              topic="Amaliyot | Shape Usage imkoniyati"
              theme={[
                {
                  lock:false,
                  themeNumber: "2.1",
                  label:"Amaliyot | Shape Usage imkoniyati"
                },
                {
                  lock:true,
                  themeNumber: "2.2",
                  label:"Stock Photos | Sur’atlardan foydalanish texnologiyasi"
                }
              ]}
            />
            <Topic
              number="02"
              topic="Amaliyot | Shape Usage imkoniyati"
              theme={[
                {
                  lock:false,
                  themeNumber: "2.1",
                  label:"Amaliyot | Shape Usage imkoniyati"
                },
                {
                  lock:true,
                  themeNumber: "2.2",
                  label:"Stock Photos | Sur’atlardan foydalanish texnologiyasi"
                }
              ]}
            />
            <Topic
              number="02"
              topic="Amaliyot | Shape Usage imkoniyati"
              theme={[
                {
                  lock:false,
                  themeNumber: "2.1",
                  label:"Amaliyot | Shape Usage imkoniyati"
                },
                {
                  lock:true,
                  themeNumber: "2.2",
                  label:"Stock Photos | Sur’atlardan foydalanish texnologiyasi"
                }
              ]}
            />
            <Topic
              number="02"
              topic="Amaliyot | Shape Usage imkoniyati"
              theme={[
                {
                  lock:false,
                  themeNumber: "2.1",
                  label:"Amaliyot | Shape Usage imkoniyati"
                },
                {
                  lock:true,
                  themeNumber: "2.2",
                  label:"Stock Photos | Sur’atlardan foydalanish texnologiyasi"
                }
              ]}
            />
        </div>
    )
}

export default Modul1
