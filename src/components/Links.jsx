import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Links = () => {

    return (
        <div className='flex gap-5 absolute right-10 top-5 text-white'>

            <a href="https://www.linkedin.com/in/matheussantos10/" target="_blank">
                <span className='flex gap-1 cursor-pointer
                hover:scale-110
                ease-out 
                duration-300'
                >
                    <LinkedInIcon />
                    LinkedIn
                </span>
            </a>

            <a href="https://github.com/matheussantos10" target="_blank">
                <span className='flex gap-1 cursor-pointer 
                hover:scale-110
                ease-out 
                duration-300'>
                    <GitHubIcon />
                    GitHub
                </span>
            </a>
        </div>
    )

}