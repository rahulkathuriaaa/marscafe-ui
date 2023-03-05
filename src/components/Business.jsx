import styles, { layout } from "../style";
import Spline from '@splinetool/react-spline';
import './Mars.css';


const Business = () =>  (
  <section id="product" className={layout.sectionReverse}>
    

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      
    </div>
    <div className='marslogo'>
            <Spline scene="https://prod.spline.design/Jaimy7l59WR7DOTs/scene.splinecode" />
        </div>
    
  </section>
);

export default Business;
