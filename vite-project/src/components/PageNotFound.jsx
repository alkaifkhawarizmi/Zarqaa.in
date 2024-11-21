import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <Link to="/">
    <div className='pt-40 flex items-center justify-center'>
      <img className='' src="https://imgs.search.brave.com/i4aNrT-o_kkT8f3P9Au4ThaEd2gR9WCFYy5LmkW7s8c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/ZnJvbnRlbmQuY29t/L2Fzc2V0cy9pbWcv/aHRtbC1jc3MtNDA0/LXBhZ2UtdGVtcGxh/dGVzL0hUTUwtNDA0/LVBhZ2UtVGVtcGxh/dGUtMi5wbmc" alt="" />
    </div>
    </Link>
  )
}

export default PageNotFound