import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export const Footer = () => {

    return (
        <div className='absolute right-0 left-0 bottom-5 flex justify-center'>
            <span className='text-gray-100'>
                Feito com <FavoriteBorderIcon color='error' /> por Matheus Santos
            </span>
        </div>
    )
}