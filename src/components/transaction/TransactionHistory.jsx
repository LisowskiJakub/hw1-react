import PropTypes from 'prop-types'
import css from './Transactions.module.css'



export const TransactionHistory = ({ data }) => (

    <table className={css.transactionHistoryTable}>
        <thead className={css.hederRow}>
            <tr className={css.valuesRow}>
                <th className={css.columnHeader}>Type</th>
                <th className={css.columnHeader}>Amount</th>
                <th className={css.columnHeader}>Currency</th>
            </tr>
        </thead>
        {data.map(element => (
            <tr key={element.id} className={css.valuesRow}            >
                <td className={css.transactionData}>{element.type}</td>
                <td className={css.transactionData}>{element.amount}</td>
                <td className={css.transactionData}>{element.currency}</td>
            </tr>
        )
        )}
    </table>

)

TransactionHistory.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.string,
        currency: PropTypes.string,
      })
    ),
  };