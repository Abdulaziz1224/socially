import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { ModulContext } from "../Modul";
import Topic from "../../Topic/Topic";

function Modul1() {
  const [topics, setTopics] = useState([]);

  const { modul, modules } = useContext(ModulContext);

  useEffect(() => {
    if (modules.length !== 0) {
      let array = modules[0].lessons.map((obj) => {
        let lessonNumber =
          (modules[0].lessons.indexOf(obj) + 1) / 10 < 1
            ? "0" + (modules[0].lessons.indexOf(obj) + 1)
            : modules[0].lessons.indexOf(obj) + 1;
        return {
          number: lessonNumber,
          topic: obj.theme,
          theme: obj.parts.map((mavzu) => {
            return {
              lock: !mavzu.access,
              themeNumber:
                modules[0].lessons.indexOf(obj) +
                1 +
                "." +
                (obj.parts.indexOf(mavzu) + 1),
              label: mavzu.title,
            };
          }),
        };
      });

      setTopics(array);
    }
  }, [modules]);
  return (
    <div className="modul1" style={{ display: modul === 1 ? "block" : "none" }}>
      {topics.length !== 0
        ? topics.map((lesson) => {
            return (
              <Topic
              key={Math.random()*100000}
                number={lesson.number}
                topic={lesson.topic}
                theme={lesson.theme.map((mavzu) => {
                  return {  
                    lock: mavzu.lock,
                    themeNumber: mavzu.themeNumber,
                    label: mavzu.label,
                  };
                })}
              />
            );
          })
        : ""}
    </div>
  );
}

export default Modul1;
