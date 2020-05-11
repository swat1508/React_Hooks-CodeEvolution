import React,{useEffect} from 'react'

function useDocumentTitle_CustomHook(counter) {

        useEffect(() => {
            document.title = `Count : ${counter}`
        }, [counter])

    return (
        <div>
            
        </div>
    )
}

export default useDocumentTitle_CustomHook
