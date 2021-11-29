import React from 'react'
import { useState, useContext, useEffect } from 'react'
// import { ModulContext } from '../Modul'
import Topic from '../../Topic/Topic'
import { VideoContext } from '../../Video';

function Modul2({modules}) {
  const [topics, setTopics] = useState([]);

  const { modul, setModul } = useContext(VideoContext);

  useEffect(() => {
    if (modules.length !== 0) {
      let array = modules[1].lessons.map((obj) => {
        let lessonNumber =
          (modules[1].lessons.indexOf(obj) + 1) / 10 < 1
            ? "0" + (modules[1].lessons.indexOf(obj) + 1)
            : modules[1].lessons.indexOf(obj) + 1;
        return {
          number: lessonNumber,
          topic: obj.theme,
          theme: obj.parts.map((mavzu) => {
            return {
              lock: !mavzu.access,
              themeNumber:
                modules[1].lessons.indexOf(obj) +
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
    <div className="modul2" style={{ display: modul == 2 ? "block" : "none" }}>
      {topics.length !== 0
        ? topics.map((lesson) => {
            return (
              <Topic
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

export default Modul2
