import { useEffect } from 'react'

const useDocumentTitle = (count) => {
  useEffect(() => {
    if(count >= 1) {
        document.title = `${count} Chats`
    }else {
        document.title = `Chat`
    }
  }, [count]);
}

export default useDocumentTitle