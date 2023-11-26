import PropTypes from 'prop-types';
import css from './Statistics.module.css';


const getRandomHexColor = () =>{
   let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}` 
   return bgColor;
}

export const Statistics = ({ title, stats }) => (

    <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>   }
        <ul className={css.statList}>
            {stats.map((stat) => (
                <li key={stat.id} style={{backgroundColor: getRandomHexColor()}} className={css.item}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
)

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    })),
  };