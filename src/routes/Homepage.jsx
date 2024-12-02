import { Link } from 'react-router-dom';

export default function Homepage() {
    return <main className='m-2 flex flex-col items-center justify-center flex-grow pt-16'>
        <div className='bg-[#4a90a4] p-10 rounded-lg text-7xl text-center'>
            <p className='mb-7 text-[#f5f9f7]'>Welcome!</p>
            <Link to='/shopping' className='border-4 rounded-3xl border-solid border-[#f5f9f7] hover:border-[#7cb6c6] p-2 text-[#f5f9f7] hover:text-[#7cb6c6] bg-[#7cb6c6] hover:bg-[#f5f9f7]'>Let&apos;s Shop!</Link>
        </div>
    </main>
}