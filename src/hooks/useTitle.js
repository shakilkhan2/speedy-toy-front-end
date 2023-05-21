import { useEffect } from "react";


const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} - Speedy Toys`;

    }, [title])
};

export default useTitle;