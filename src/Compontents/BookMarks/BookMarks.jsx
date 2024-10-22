
import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark'

const BookMarks = ({ bookMarks }) => {
    return (
        <div className="w-1/3 bg-gray-400 ml-4 pt-3 mt-6">
            <div >
                <h2 className="text-3xl text-center text-yellow-950 font-semibold">Book Marks :{bookMarks.length}</h2>
                <div className='mb-2'>
                {
                    bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMarks={bookMark} ></BookMark>)
                }
                </div>
            </div>
        </div>
    )
}

BookMarks.propTypes = {
    bookMarks:PropTypes.object.isRequired
}

export default BookMarks