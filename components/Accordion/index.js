import { useState } from "react";
import styles from './Accordion.module.css'

export default function Accordion() {
    const [isActive, setActive] = useState(false);

    return (
        <>
            <h4><b>Why are these things important to know?</b></h4>

            <div onClick={() => setActive(!isActive)}>
                <div>{isActive ? "▲" : "▼"}</div>
            </div>
            {isActive && <div className={styles.description}> Knowing the causes of fires is important for preventing fires, responding to fires, investigating fires, and insurance purposes. By understanding the common causes of fires, people can take preventive measures to minimize the risk of fires, while emergency responders can determine the best approach to fight a fire. After a fire, determining the cause can help prevent future fires and identify any potential criminal activity. Insurance companies also require information about the cause of a fire to determine coverage and liability, and knowing the cause can help assess the risk of future fires and adjust premiums accordingly. </div> }
        </>
    )
}
