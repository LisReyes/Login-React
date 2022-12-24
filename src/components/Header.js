import {Link} from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-44 w-44"
                    src="https://img.freepik.com/free-photo/english-cream-golden-retriever-isolated_155003-32567.jpg?w=996&t=st=1671678451~exp=1671679051~hmac=a841e456a5f48be3dcf3cca4ec8a2975aad51eac21ffb91eb4136a89ed4db41f"/>
            </div>
            <h2 className="mt-8 text-center text-4xl font-extrabold text-black-900">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-black-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-blue-600 hover:text-red-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}